const asyncHandler=require('express-async-handler');
const Contact=require('../Models/contactModel')

// @desc Get All Contacts
// @route GET /api/contacts
// @access Public

const getContacts=asyncHandler( async (req,res)=>{
    const contacts= await Contact.find();
    res.status(200).json(contacts)
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

    const contact=await Contact.create({
        name,
        phone,
        email
    })
    res.status(201).json(contact)
});
// @desc Get Individual Contact
// @route GET /api/contacts/id
// @access Public
const getContact=asyncHandler( async (req,res)=>{
    const contact=await Contact.findById(req.params.id)
    if(!contact){
        res.status(404)
        throw new Error('contact not found')
    }
    res.status(200).json(contact)
});
// @desc Update Contact
// @route PUT /api/contacts/id
// @access Public
const updateContact=asyncHandler(async(req,res)=>{
    const contact=await Contact.findById(req.params.id)
    if(!contact){
        res.status(404)
        throw new Error('contact not found')
    }

    const updatedContact= await Contact.findByIdAndUpdate(
        req.params.id,
        req.body,
        {new:true}
    )
    res.status(200).json(updatedContact)
});
// @desc delete Contact
// @route DELETE /api/contacts/id
// @access Public
const deleteContact=asyncHandler(async(req,res)=>{
    const contact=await Contact.findById(req.params.id)
    if(!contact){
        res.status(404)
        throw new Error('contact not found')
    }
    await Contact.remove()
    res.status(200).json(contact)
});

module.exports={getContacts,createContact,getContact,updateContact,deleteContact}