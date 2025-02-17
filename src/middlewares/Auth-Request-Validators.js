const MailChecker = require('mailchecker');
// const {validateEmail} = require('../utils/validateEmail');
//one way to check for valid email format !req.body.email.endsWith('@gmail.com') but it cant see if the email actually exists or not
// this is one another way !MailChecker.isValid(req.body.email) this is also not the most solid 
const ValidateUserAuth = async (req,res,next) => {
    
    if(!req.body.email || !req.body.password || !MailChecker.isValid(req.body.email)) {
        return res.status(400).json({
            data:{},
            message:"Something went wrong",
            success:false,
            error:'Email or password is missing in request body'
        })
    }

    //this was working great but my credits expired sadly
    // const validationResponse = await validateEmail(req.body.email);

    // if (!validationResponse) {
    //     return res.status(500).json({ message: "Email validation failed" });
    // }
    // console.log(validationResponse);
    // if(validationResponse.status!=="valid") {
    //     return res.status(400).json({
    //         data:{},
    //         message:"Something went wrong",
    //         success:false,
    //         error:'Email is entered incorrectly in request body'
    //     })
    // }

    next();
}

const ValidateAdminreq = (req,res,next) => {
    if(!req.body.id) {
        return res.status(400).json({
            data:{},
            message:"Something went wrong",
            success:false,
            error:'User id not found'
        })
    }

    next();
}
module.exports = {
    ValidateUserAuth,
    ValidateAdminreq
    
}