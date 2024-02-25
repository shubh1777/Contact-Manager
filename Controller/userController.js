const asyncHandler=require('express-async-handler');
const bcrypt=require('bcrypt')
const User=require('../Models/userModel')
// @desc Register a new user
// @route POST /api/users/register
// @access Public

const registerUser=asyncHandler( async (req,res)=>{
    const {username,email,password}=req.body
    if(!username || !email || !password){
        res.status(400)
        throw new Error("All fields are mendatory !!")
    }

    const availbleUser=await User.findOne({email})
    if(availbleUser){
        res.status(400)
        throw new Error("User already exists !!")
    }
    //hashing the password
    const hashedPassword= await bcrypt.hash(password,10)
    console.log("the hashed password is",hashedPassword);

    const user=await User.create({
        username,
        email,
        password:hashedPassword
    })
    console.log(`User created : ${user}`)

    if(user){
        res.status(201).json({
            _id:user.id,
            email:user.email,

        })
    }else{
        res.status(400)
        throw new Error("user data is not valid !!")
    }
    res.json({message:"register the user"})
});

// @desc login user
// @route POST /api/users/login
// @access Public

const loginUser=asyncHandler( async (req,res)=>{
    res.json({message:"login the user"})
});

// @desc get current user
// @route GET /api/users/current
// @access Public

const currentUser=asyncHandler( async (req,res)=>{
    res.json({message:"current user Information"})
});


module.exports={registerUser,loginUser,currentUser}