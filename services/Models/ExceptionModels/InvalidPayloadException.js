class InvalidPayloadException extends Error {

    constructor(message) {
        super(message);
        this.name = "InvalidPayloadException";
    }
}

module.exports = InvalidPayloadException