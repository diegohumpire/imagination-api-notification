const savedMails = [
    {
        id: 'welcome',
        provider: 'mailtrap',
        credentials: {
            username: process.env['MAILTRAP_USERNAME'],
            password: process.env['MAILTRAP_PASSWORD'],
        },
        type: 'template',
        data: {
            templateId: 'd-1233208dfe724f6da7b887476b6b0800',
        },
    },
    {
        id: 'links_uso',
        provider: 'mailtrap',
        credentials: {
            username: process.env['MAILTRAP_USERNAME'],
            password: process.env['MAILTRAP_PASSWORD'],
        },
        type: 'template',
        data: {
            templateId: 'd-c2f62eebac974db59d8bd42f8da07442',
        },
    },
];

export default savedMails;
