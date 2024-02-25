const express=require('express');
const dotenv=require('dotenv').config();
const errorHandler=require('./Middleware/errorHandler');
const connectDB = require('./config/dbConnection');

const port= process.env.PORT || 3000;

connectDB();
const app=express();
app.use(express.json());
app.use('/api/contacts',require("./routes/contactRoutes"))
app.use('/api/users',require("./routes/userRoutes"))
app.use(errorHandler);

app.listen(port,()=>{
    console.log(`server is running on ${port}`)
})