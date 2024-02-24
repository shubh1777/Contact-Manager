const mongoose=require('mongoose')

const contactSchema=mongoose.Schema({
    name:{
        type:String,
        required:[true,"Please add the contact name:"]
    },
    phone:{
        type:String,
        required:[true,"Please add the contact phone number:"]
    },
    email:{
        type:String,
        required:[true,"Please add the contact email:"]
    }
},{
    timestamps:true
})

module.exports= mongoose.model('Contact',contactSchema)