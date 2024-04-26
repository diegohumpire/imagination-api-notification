import { MailerStrategy } from '../mailer/contracts';
import { DataMail, TemplateMail } from '../mailer/mailer';
import { IMailService } from './services';

export class MailService implements IMailService {
    private provider: MailerStrategy;

    constructor(provider: MailerStrategy) {
        console.info(`Creating MailService with provider ${provider.constructor.name}`);
        this.provider = provider;
    }

    setProvider(provider: MailerStrategy): void {
        this.provider = provider;
    }

    sendMail(dataMail: DataMail): Promise<void> {
        return this.provider.sendMail(dataMail);
    }
}
