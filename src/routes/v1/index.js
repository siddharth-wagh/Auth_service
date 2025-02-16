const express = require('express');

const router = express.Router();


const usercontroller = require('../../controller/usercontroller');


router.post('/signup',usercontroller.create);
router.post('/signin',usercontroller.signin);
module.exports = router;