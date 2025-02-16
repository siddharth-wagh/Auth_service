const {UserRepository} = require('../repository/user-repository');
const {JWT_KEY} = require('../config/serverConfig');
const jwt = require('JSONWEBTOKEN');

const bcrypt = require('bcrypt');
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

    createToken(user) {
        try {
            const token = jwt.sign(user,JWT_KEY,{expiresIn:"1d"});
            return token;

        } catch (error) {
            console.log("Error in Create token");
            throw error;
        }
    }

    verifyToken(token) {
        
        try {
            const response = jwt.verify(token,JWT_KEY);
            return response;

        } catch (error) {
            console.log("Error in Verify token");
            throw error;
        }
    
    }


    comparePassword(userInputPlanePassword,encryptedPassword) {
        try {
            return bcrypt.compareSync(userInputPlanePassword,encryptedPassword);
        } catch (error) {
            console.log("Error in Compare password");
            throw error;
        }
    }
}

module.exports = {
    UserServices
}