const AppError = require('../utils/error-handler');
const {StatusCodes} = require('http-status-codes');

class ValidateError extends AppError {
    constructor(error) {
       
       let Errorname = error.name;
       
        let explanation = [];
       
        console.log("validation error in the validationerror class");
        error.errors.forEach(err => {
            
            explanation.push(err.message);
        });
        super(
            Errorname,
            "Not able to validate the data send by the user",
            explanation,
            StatusCodes.BAD_REQUEST

        )


    }
}
module.exports = ValidateError;