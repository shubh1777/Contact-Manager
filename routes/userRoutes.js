const express=require('express')
const {registerUser,loginUser,currentUser}=require('../Controller/userController')
const validateToken = require('../Middleware/validateTokenHandler')
const router=express.Router()


router.route('/register').post(registerUser)
router.route('/login').post(loginUser)
router.route('/current').get(validateToken,currentUser)

module.exports=router