const express= require('express');

const router = express.Router();

const {handleUserSignup}= require('../controller/user');
const {handleUserlogin}= require('../controller/user');

router.post('/signup', handleUserSignup);
router.post('/login', handleUserlogin);

module.exports= router;