const {User,Role} = require('../models/index');
const ValidateError = require('../utils/validation-Error');
class UserRepository {

    async create(data) {
        try{
            const response = await User.create(data);
            return response;
        } catch(error) {
            //console.log(error);
            if(error.name==='SequelizeValidationError')
            {
                console.log("THis is the new");
                
                const newError = new ValidateError(error);
                //console.log(newError);
                throw newError;
            }
            //console.log(error);
            console.log("Error in user-repo");
            throw error;
        }
        
    }

    async destroy(UserId) {
        try {
            await User.destroy({
                where:{
                    id:UserId
                }
            })
            return true;
        } catch (error) {
            console.log("Error in user-repo");
            throw error;
        }
    }

    async getById(userId) {
        try {
            const user = await User.findByPk(userId,{
                attributes:['email','id']
            })
            return user;
        } catch (error) {
            console.log("Error in user-repo");
            throw error;
        }
    }

    async getUserByEmail(userEmail) {
        try {
          
            const user = await User.findOne({
                where:{email:userEmail}
            })
            return user;
        } catch (error) {
            console.log("Error in user-repo in getuserbyemail");
            throw error;
        }
    }

    async isAdmin(userId) {
        try{
            const user = await User.findByPk(userId);
            const role = await Role.findOne({
                where:{
                    name:"ADMIN"
                }
            });
            if(!user) {
                throw {error:'User Not found'};
            }
            const response = await user.hasRole(role);
            return response;
        }
        catch (error) {
            console.log("something wrong in repo ");
            throw error;
        }
       
    }
}

module.exports = {
    UserRepository
}