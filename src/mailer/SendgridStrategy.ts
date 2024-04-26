import { sendTransactionalTemplate } from './clients/sendgrid';
import { MailerStrategy } from './contracts';
import { SendgridCredentials, TemplateMail, From } from './mailer';

export class SendgridStrategy implements MailerStrategy {
    sendgridCredentials: SendgridCredentials;

    constructor(sendgridCredentials: SendgridCredentials) {
        this.sendgridCredentials = sendgridCredentials;
    }

    sendMail(template: TemplateMail): Promise<void> {
        const from = template.from as From;
        const to = template.to;

        console.info(`Sending email from ${from.email} to ${to} using Sendgrid`);

        return sendTransactionalTemplate(this.sendgridCredentials.apiKey, template.templateId, to, from.email, from.name, template.data);
    }
}
