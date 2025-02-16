const {User} = require('../models/index');

class UserRepository {

    async create(data) {
        try{
            const response = await User.create(data);
            return response;
        } catch(error) {
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
}

module.exports = {
    UserRepository
}