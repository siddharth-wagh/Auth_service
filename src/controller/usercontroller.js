const {UserServices} = require('../services/userService');

const userServices = new UserServices();
const create = async (req,res) => {
    try {
        const user = await userServices.create({
            email:req.body.email,
            password:req.body.password
        })
        return res.status(201).json({
            data:user,
            message:"successfully created a user",
            success:true,
            err:{}
        })
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            data:{},
            message:"unable to created a user",
            success:false,
            err:error
        })
    }
    
}


const signin = async (req,res) => {
    try {
        const user = await userServices.signin(req.body.email,req.body.password);
        return res.status(201).json({
            data:user,
            message:"successfully signedin",
            success:true,
            err:{}
        })
    } catch (error) {
        return res.status(500).json({
            data:{},
            success:true,
            message:"Unable to signin",
            err:error

        })
    }
}
module.exports = {
    create,
    signin
}