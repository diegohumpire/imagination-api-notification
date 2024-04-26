export class HttpError extends Error {
    constructor(
        public message,
        public readonly statusCode,
        public readonly name = 'HttpError',
        public stack?: string
    ) {
        super(message);
    }
}
