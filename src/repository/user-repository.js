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
            await City.destroy({
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
}

module.exports = {
    UserRepository
}