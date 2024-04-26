import { HttpError } from './HttpError';

export class NotFound extends HttpError {
    constructor(
        public message,
        public readonly name = 'NotFound',
        public stack?: string
    ) {
        const statusCode = 404;
        super(message, statusCode, name, stack);
    }
}
