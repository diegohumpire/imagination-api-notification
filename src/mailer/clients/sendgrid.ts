import * as sgMail from '@sendgrid/mail';

const sendgrid = sgMail;

const sendTransactionalTemplate = async (
    apiKey: string,
    templateId: string,
    to: string,
    fromEmail: string,
    fromName: string,
    dynamicTemplateData: any
) => {
    sendgrid.setApiKey(apiKey);
    const msg = {
        to: {
            email: to,
        },
        from: {
            email: fromEmail,
            name: fromName,
        },
        templateId,
        dynamicTemplateData,
    };
    console.log(msg);
    await sendgrid.send(msg);
};

export { sendTransactionalTemplate };
