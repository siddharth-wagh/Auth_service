const {UserRepository} = require('../repository/user-repository');
const {JWT_KEY} = require('../config/serverConfig');
const jwt = require('JSONWEBTOKEN');
const ClientError = require('../utils/client-error');
const bcrypt = require('bcrypt');
const { StatusCodes } = require('http-status-codes');



class UserServices {
    constructor() {
        this.userRepository = new UserRepository();
    }
    async create(data) {
       
        try {
            const user =await this.userRepository.create(data);
            return user;
        } catch (error) {
            if(error.name==='SequelizeValidationError')
            {
                throw error;
            }
            console.log("Error in create user services");
            throw error;
        }
    }

    async destroy(userId) {
        try {
            const response =await this.userRepository.destroy(userId);
            return response;
        } catch (error) {
            console.log("Error in user user services");
            throw error;
        }
    }

    async signin(email,password) {
        try{
                //step 1 -> fetch the user using the password
            const user = await this.userRepository.getUserByEmail(email);
            //step 2 -> compare incoming plane password with the users hashed password
            
            const passwordsMatched = this.comparePassword(password,user.password);
            
            if(!passwordsMatched) {
                console.log('Password doesnt match');
                throw new ClientError('IncorrectPassword',"Invalid password","The password is incorrect",StatusCodes.BAD_REQUEST);
            }

            //step3 -> if passwords match return jwt token
            const newJWT = this.createToken({email:user.email,id:user.id});
            return newJWT;
        } catch(error) {
            if(error.name=="AttributeNotFound")
            {
                throw error;
            }
            console.log("In signin in service layer ",error);
            throw error;
        }
       
    }


    async isAuthenticated(token) {
        const response = this.verifyToken(token);
        if(!response) {
            throw {error:"Token is invalid"};
        }
      
        const user = await this.userRepository.getById(response.id);
        if(!user) {
            throw {error:"User doesnt exist"};
        }
   
        return user.id;
    }

    async isAdmin(userId) {
        try {
            const response =  await this.userRepository.isAdmin(userId);
            console.log(response);
            return response;
        } catch (error) {
            console.log("Something wrong in service layer");
            throw error;
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