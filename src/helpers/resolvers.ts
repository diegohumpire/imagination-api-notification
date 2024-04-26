import { HttpError } from '../errors/HttpError';

const errorResolver = (error: any) => {
    if (error instanceof HttpError) {
        return {
            status: error.statusCode,
            jsonBody: {
                message: error.message,
            },
        };
    } else if (error instanceof Error) {
        return {
            status: 500,
            jsonBody: {
                message: error.message,
            },
        };
    }
};

export { errorResolver };
