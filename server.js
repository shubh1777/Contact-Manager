const express=require('express');
const dotenv=require('dotenv');
const errorHandler=require('./Middleware/errorHandler');

const port= process.env.PORT || 3000;

const app=express();
app.use(express.json());
app.use('/api/contacts',require("./routes/contactRoutes"))
app.use(errorHandler);

app.listen(port,()=>{
    console.log(`server is running on ${port}`)
})