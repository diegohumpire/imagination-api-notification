import { Providers } from './enums';

type SendgridCredentials = {
    apiKey: string;
};

type MailtrapCredentials = {
    username: string;
    password: string;
};

type From = {
    email: string;
    name?: string;
};

type TemplateMail = {
    from: From | string;
    to: string;
    subject: string;
    templateId: string;
    data: any;
};

type MailerCredentials = SendgridCredentials | MailtrapCredentials | null | undefined;

type SavedId = string;

type Html = string;

type SavedData = {
    id: SavedId;
    data: TemplateMail | string;
};

type SavedMail = {
    provider: Providers;
    credentials: MailerCredentials;
    type: 'template' | 'html';
} & SavedData;

type DataMail = TemplateMail | SavedData | Html;
