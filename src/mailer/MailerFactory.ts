import { SavedMailRepository } from '../repositories/SavedMailRepository';
import { LogStrategy } from './LogStrategy';
import { MailtrapStrategy } from './MailtrapStrategy';
import { SavedMailStrategy } from './SavedMailStrategy';
import { SendgridStrategy } from './SendgridStrategy';
import { ISavedMailRepository, MailerStrategy } from './contracts';
import { Providers } from './enums';
import { SendgridCredentials, MailtrapCredentials, MailerCredentials } from './mailer';

export class MailerFactory {
    static createSavedMailer(): MailerStrategy {
        const repository: ISavedMailRepository = new SavedMailRepository();
        const factory: MailerFactory = new MailerFactory();
        return new SavedMailStrategy(repository, factory);
    }

    static createLogMailer(): MailerStrategy {
        return new LogStrategy();
    }

    static createMailtrapMailer(credentials: MailtrapCredentials): MailerStrategy {
        return new MailtrapStrategy(credentials);
    }

    static createSendgridMailer(credentials: SendgridCredentials): MailerStrategy {
        return new SendgridStrategy(credentials);
    }

    static createMailer(provider: Providers, credentials: MailerCredentials): MailerStrategy {
        switch (provider) {
            case Providers.SENDGRID:
                return this.createSendgridMailer(credentials as SendgridCredentials);
            case Providers.MAILTRAP:
                return this.createMailtrapMailer(credentials as MailtrapCredentials);
            case Providers.LOG:
                return this.createLogMailer();
            case Providers.SAVED:
                return this.createSavedMailer();
            default:
                throw new Error('Invalid provider');
        }
    }

    createMailerInstance(provider: Providers, credentials: SendgridCredentials | MailtrapCredentials | null): MailerStrategy {
        return MailerFactory.createMailer(provider, credentials);
    }
}
