const asyncHandler=require('express-async-handler');
const Contact=require('../Models/contactModel')

// @desc Get All Contacts
// @route GET /api/contacts
// @access Private

const getContacts=asyncHandler( async (req,res)=>{
    const contacts= await Contact.find({user_id: req.user.id});
    res.status(200).json(contacts)
});
// @desc Create new Contacts
// @route POST /api/contacts
// @access Private
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
        email,
        user_id:req.user.id
    })
    res.status(201).json(contact)
});
// @desc Get Individual Contact
// @route GET /api/contacts/id
// @access Private
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
// @access Private
const updateContact=asyncHandler(async(req,res)=>{
    const contact=await Contact.findById(req.params.id)
    if(!contact){
        res.status(404)
        throw new Error('contact not found')
    }
    
    if(contact.user_id.toString()!== req.user.id){
        res.status(403)
        throw new Error("you are not authorized to update this contact !!")
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
// @access Private
const deleteContact=asyncHandler(async(req,res)=>{
    const contact=await Contact.findById(req.params.id)
    if(!contact){
        res.status(404)
        throw new Error('contact not found')
    }

    if(contact.user_id.toString()!== req.user.id){
        res.status(403)
        throw new Error("you are not authorized to delete this contact !!")
    }
    await Contact.deleteOne({_id:req.params.id})
    res.status(200).json(contact)
});

module.exports={getContacts,createContact,getContact,updateContact,deleteContact}