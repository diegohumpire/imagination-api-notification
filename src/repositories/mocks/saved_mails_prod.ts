const savedMails = [
    {
        id: 'welcome',
        provider: 'sendgrid',
        credentials: {
            apiKey: process.env['SENDGRID_API_KEY'],
        },
        type: 'template',
        data: {
            templateId: 'd-1233208dfe724f6da7b887476b6b0800',
        },
    },
    {
        id: 'links_uso',
        provider: 'sendgrid',
        credentials: {
            apiKey: process.env['SENDGRID_API_KEY'],
        },
        type: 'template',
        data: {
            templateId: 'd-c2f62eebac974db59d8bd42f8da07442',
        },
    },
];

export default savedMails;
