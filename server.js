const express=require('express');
const dotenv=require('dotenv');

const port= process.env.PORT || 3000;

const app=express();

app.use('/api/contacts',require("./routes/contactRoutes"))


app.listen(port,()=>{
    console.log(`server is running on ${port}`)
})