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
    mail?: Required<DataMail>;
}

export async function mailsSaved(request: HttpRequest, context: InvocationContext): Promise<HttpResponseInit> {
    intercept(context as any);

    try {
        context.log(`Http function processed request for url "${request.url}"`);

        const { mail } = (await request.json()) as MailRequest;

        console.log(green(`Provider: ${Providers.SAVED}`));
        console.log(green(`Template: ${JSON.stringify(mail)}`));

        const NON_EXISTENT_CREDENTIALS: MailerCredentials = null;
        const providerStrategy = MailerFactory.createMailer(Providers.SAVED, NON_EXISTENT_CREDENTIALS);
        const mailService: IMailService = new MailService(providerStrategy);

        await mailService.sendMail(mail);

        return { status: 204 };
    } catch (error) {
        return errorResolver(error);
    }
}

app.http('mails_saved', {
    methods: ['POST'],
    route: 'mails/saved',
    authLevel: 'function',
    handler: mailsSaved,
});
