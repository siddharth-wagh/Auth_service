const {UserRepository} = require('../repository/user-repository');

class UserServices {
    constructor() {
        this.userRepository = new UserRepository();
    }
    async create(data) {
       
        try {
            const user =await this.userRepository.create(data);
            return user;
        } catch (error) {
            console.log("Error in user user services");
            return error;
        }
    }

    async destroy(cityId) {
        try {
            const response =await this.userRepository.destroy(cityId);
            return response;
        } catch (error) {
            console.log("Error in user user services");
            return error;
        }
    }
}

module.exports = {
    UserServices
}