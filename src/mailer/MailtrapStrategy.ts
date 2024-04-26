import * as nodemailer from 'nodemailer';
import { MailerStrategy } from './contracts';
import { MailtrapCredentials, TemplateMail, From } from './mailer';

export class MailtrapStrategy implements MailerStrategy {
    mailtrapCredentials: MailtrapCredentials;

    constructor(mailtrapCredentials) {
        this.mailtrapCredentials = mailtrapCredentials;
    }

    sendMail(template: TemplateMail): Promise<void> {
        const from = template.from as From;
        const to = template.to;
        console.info(`Sending email from ${from.email} to ${to} using Mailtrap`);

        return this.sendMailtrapEmail(this.mailtrapCredentials.username, this.mailtrapCredentials.password, template);
    }

    async sendMailtrapEmail(username: string, password: string, templateMail: TemplateMail): Promise<void> {
        const from = templateMail.from as From;
        const to = templateMail.to;

        const transport = nodemailer.createTransport({
            host: 'sandbox.smtp.mailtrap.io',
            port: 2525,
            auth: {
                user: username,
                pass: password,
            },
        });

        return transport
            .sendMail({
                from: `"${from.name}" <${from.email}>`, // sender address
                to: to, // list of receivers
                subject: `✔ Mailtrap Email to  ${to} ✔`, // Subject line
                text: JSON.stringify(templateMail), // plain text body
                // html: '<b>Hello world?</b>', // html body
            })
            .then((info) => console.log(info))
            .catch((err) => console.error(err));
    }
}
