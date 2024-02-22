// @desc Get All Contacts
// @route GET /api/contacts
// @access Public

const getContacts=(req,res)=>{
    res.status(200).json({message:'Get All Contacts'})
}
// @desc Create new Contacts
// @route POST /api/contacts
// @access Public
const createContact=(req,res)=>{
    res.status(201).json({message:'Create Contact'})
}
// @desc Get Individual Contact
// @route GET /api/contacts/id
// @access Public

const getContact=(req,res)=>{
    res.status(200).json({message:`Get Contact for ${req.params.id}`})
}
// @desc Update Contact
// @route PUT /api/contacts/id
// @access Public

const updateContact=(req,res)=>{
    res.status(200).json({message:`Update Contact for ${req.params.id}`})
}
// @desc delete Contact
// @route DELETE /api/contacts/id
// @access Public

const deleteContact=(req,res)=>{
    res.status(200).json({message:`Delete Contact for ${req.params.id}`})
}


module.exports={getContacts,createContact,getContact,updateContact,deleteContact}