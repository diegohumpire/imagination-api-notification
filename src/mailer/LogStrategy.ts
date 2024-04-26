import { gray, yellow } from 'console-log-colors';
import { MailerStrategy } from './contracts';
import { From, TemplateMail } from './mailer';

export class LogStrategy implements MailerStrategy {
    sendMail(template: TemplateMail): Promise<void> {
        const from = template.from as From;
        console.log(gray(`Sending email from ${from.email} to ${template.to} using log`));
        console.log(yellow(JSON.stringify(template)));
        return Promise.resolve();
    }
}
