import { HttpError } from './HttpError';

export class UnprocessableEntity extends HttpError {
    constructor(
        public message,
        public readonly name = 'UnprocessableEntity',
        public stack?: string
    ) {
        const statusCode = 422;
        super(message, statusCode, name, stack);
    }
}
