const {StatusCodes} = require('http-status-codes');

class AppError extends Error {
    constructor(
        name='AppError',
        message='Something went wrong',
        explanation='Something went wrong in apperror',
        statuscode=StatusCodes.INTERNAL_SERVER_ERROR
        
    ) {
        super();
        console.log("Apperroer")
        this.name = name;
        this.message = message;
        this.explanation = explanation;
        this.statuscode = statuscode;
    }
}

module.exports = AppError;