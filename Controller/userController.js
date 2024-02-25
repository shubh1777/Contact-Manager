const asyncHandler=require('express-async-handler');

// @desc Register a new user
// @route POST /api/users/register
// @access Public

const registerUser=asyncHandler( async (req,res)=>{
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