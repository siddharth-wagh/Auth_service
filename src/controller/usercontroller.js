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
        return res.status(200).json({
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

const isAuthenticated = async (req,res) => {
    
    try {
        const token = req.headers['x-access-token']
        const response = await userServices.isAuthenticated(token);
    
        return res.status(200).json({
            data:response,
            message:"User authenticated and token is valid ",
            success:true,
            err:{}
        })
    } catch (error) {
        return res.status(500).json({
            data:{},
            success:true,
            message:"Unable to autenticate the user",
            err:error

        })
    }
}

const isAdmin = async (req,res) => {
    try {
        const response = await userServices.isAdmin(req.body.id);
        
        return res.status(200).json({
            data:response,
            message:"Verifed for admin",
            success:true,
            err:{}
        })
    } catch (error) {
        return res.status(500).json({
            data:{},
            success:true,
            message:"Unable to check for admin",
            err:error

        })
    }
}
module.exports = {
    create,
    signin,
    isAuthenticated,
    isAdmin
}