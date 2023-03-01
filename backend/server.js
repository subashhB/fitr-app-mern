require('dotenv').config();
const express = require('express');

//Express App
const app = express();

//MiddleWare
app.use((req,res,next)=>{
    console.log(req.path, req.method);
    next()
})

//Routes
app.get('/',(req,res)=>{
     res.json({message:'Welcome to FitR'});
})

//Listening from Port 5000
app.listen(process.env.PORT, ()=>{
    console.log('Listening from Port 5000!');
})