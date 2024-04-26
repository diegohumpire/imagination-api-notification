import { ISavedMailRepository } from '../mailer/contracts';
import { SavedMail } from '../mailer/mailer';
import savedMailsDev from './mocks/saved_mails';
import savedMailsProd from './mocks/saved_mails_prod';

export class SavedMailRepository implements ISavedMailRepository {
    accessor savedMails: SavedMail[];

    constructor() {
        this.savedMails = (process.env['NODE_ENV'] === 'production' ? savedMailsProd : savedMailsDev) as SavedMail[];
    }

    getSavedMail(id: string): Partial<SavedMail> {
        return this.savedMails.find((mail) => mail.id === id);
    }
}
