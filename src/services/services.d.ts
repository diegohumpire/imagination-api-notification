import { MailerStrategy } from '../mailer/contracts';
import { DataMail, TemplateMail } from '../mailer/mailer';

export interface IMailService {
    setProvider(provider: MailerStrategy): void;
    sendMail(dataMail: DataMail): Promise<void>;
}
