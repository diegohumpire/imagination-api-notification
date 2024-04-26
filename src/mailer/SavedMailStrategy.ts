import { NotFound } from '../errors/NotFound';
import { UnprocessableEntity } from '../errors/UnprocessableEntity';
import { MailerFactory } from './MailerFactory';
import { ISavedMailRepository, MailerStrategy } from './contracts';
import { SavedData, TemplateMail } from './mailer';

export class SavedMailStrategy implements MailerStrategy {
    constructor(
        private savedMailRepository: ISavedMailRepository,
        private factory: MailerFactory
    ) {}

    sendMail(savedData: SavedData): Promise<void> {
        if (savedData.id === undefined || savedData.id === null || savedData.id === '') {
            throw new Error('Invalid savedId.');
        }

        const savedMail = this.savedMailRepository.getSavedMail(savedData.id);

        if (savedMail === undefined) {
            throw new NotFound('Saved mail not found.');
        }

        const { provider, credentials } = savedMail;
        const mailer = this.factory.createMailerInstance(provider, credentials);

        if (typeof savedData.data !== 'object' || typeof savedMail.data !== 'object') {
            throw new UnprocessableEntity('Invalid data. Only objects supported.');
        }

        savedData.data = { ...savedMail.data, ...savedData.data };

        return mailer.sendMail(savedData.data);
    }
}
