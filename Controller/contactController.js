const asyncHandler=require('express-async-handler');

// @desc Get All Contacts
// @route GET /api/contacts
// @access Public

const getContacts=asyncHandler( async (req,res)=>{
    res.status(200).json({message:'Get All Contacts'})
});
// @desc Create new Contacts
// @route POST /api/contacts
// @access Public
const createContact=asyncHandler(async (req,res)=>{
    console.log("the request body is",req.body);
    const {name,phone,email}=req.body;
    if(!name || !phone || !email){
        res.status(400);
        throw new Error("All fields are mendotory !!");
    }
    res.status(201).json({message:'Create Contact'})
});
// @desc Get Individual Contact
// @route GET /api/contacts/id
// @access Public
const getContact=asyncHandler( async (req,res)=>{
    res.status(200).json({message:`Get Contact for ${req.params.id}`})
});
// @desc Update Contact
// @route PUT /api/contacts/id
// @access Public
const updateContact=asyncHandler(async(req,res)=>{
    res.status(200).json({message:`Update Contact for ${req.params.id}`})
});
// @desc delete Contact
// @route DELETE /api/contacts/id
// @access Public
const deleteContact=asyncHandler(async(req,res)=>{
    res.status(200).json({message:`Delete Contact for ${req.params.id}`})
});

module.exports={getContacts,createContact,getContact,updateContact,deleteContact}