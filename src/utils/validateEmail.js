const axios = require("axios");
const {EMAIL_VERIFY_API_KEY} = require('../config/serverConfig')
const validateEmail = async (email) => {
    const API_KEY = EMAIL_VERIFY_API_KEY; // Use your actual API key
    const BASE_URL = "https://api.zerobounce.net/v2/validate";

    try {
        const response = await axios.get(BASE_URL, {
            params: {
                api_key: API_KEY,
                email: email,
                ip_address: "" // You can pass an IP if required, else leave empty
            }
        });

        return response.data; // Returns validation details
    } catch (error) {
        console.error("Error validating email:", error.message);
        return null;
    }
};

module.exports = { validateEmail };