import { app, HttpRequest, HttpResponseInit, InvocationContext } from '@azure/functions';
import { MailService } from '../services/MailService';
import { MailerFactory } from '../mailer/MailerFactory';
import { green } from 'console-log-colors';
import intercept = require('azure-function-log-intercept');
import { IMailService } from '../services/services';
import { DataMail, MailerCredentials } from '../mailer/mailer';
import { Providers } from '../mailer/enums';
import { errorResolver } from '../helpers/resolvers';

interface MailRequest {
    provider: Providers;
    credentials?: MailerCredentials;
    mail?: Required<DataMail>;
}

export async function mails(request: HttpRequest, context: InvocationContext): Promise<HttpResponseInit> {
    intercept(context as any);

    try {
        context.log(`Http function processed request for url "${request.url}"`);

        const { provider, credentials, mail } = (await request.json()) as MailRequest;

        console.log(green(`Provider: ${provider}`));
        console.log(green(`Template: ${JSON.stringify(mail)}`));

        const providerStrategy = MailerFactory.createMailer(provider, credentials);
        const mailService: IMailService = new MailService(providerStrategy);

        await mailService.sendMail(mail);

        return { status: 204 };
    } catch (error) {
        return errorResolver(error);
    }
}

app.http('mails', {
    methods: ['POST'],
    authLevel: 'function',
    handler: mails,
});
