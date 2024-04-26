import { DataMail, SavedMail } from './mailer';

interface MailerStrategy {
    sendMail(dataMail: DataMail): Promise<void>;
}

interface ISavedMailRepository {
    getSavedMail(id: string): Partial<SavedMail>;
}
