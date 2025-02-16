const ValidateUserAuth = async (req,res,next) => {
    if(!req.body.email || !req.body.password) {
        return res.status(400).json({
            data:{},
            message:"Something went wrong",
            success:false,
            error:'Email or password missing in request body'
        })
    }


    next();
}
module.exports = {
    ValidateUserAuth
}