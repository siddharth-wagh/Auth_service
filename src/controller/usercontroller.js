const {UserServices} = require('../services/userService');

const userServices = new UserServices();
const create = async (req,res) => {
    try {
        console.log(req.body);
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

module.exports = {
    create
}