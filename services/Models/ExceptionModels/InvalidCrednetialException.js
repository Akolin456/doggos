class InvalidCredentialException extends Error {
    constructor(message) {
        super(message);
        this.name = "InvalidCredentialException";
    }
}

module.exports = InvalidCredentialException