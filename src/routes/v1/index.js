const express = require('express');

const router = express.Router();


const usercontroller = require('../../controller/usercontroller');
const {AuthRequestValidators} = require('../../middlewares/index');

router.post('/signup',AuthRequestValidators.ValidateUserAuth,usercontroller.create);
router.post('/signin',AuthRequestValidators.ValidateUserAuth,usercontroller.signin);
module.exports = router;