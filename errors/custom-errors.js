class CustomAPIError extends Error{
    constructor(message, statusCode){
        super(message)
        this.statusCode = StatusCode
    }
}

const createCustomError = (msg, statusCode) => {
    return new CustomAPIError(msg,statusCode)
}

module.exports = { CustomAPIError, createCustomError }