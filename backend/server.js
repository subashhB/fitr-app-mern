require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');

const workoutRoutes = require('./routes/workoutsRoute');
const userRoutes = require('./routes/userRoute')

//Express App
const app = express();

//MiddleWare
app.use(express.json());
app.use((req,res,next)=>{
    console.log(req.path, req.method);
    next()
})

//Routes
app.use('/api/workouts', workoutRoutes)
app.use('/api/user', userRoutes)

//Connecting to the MongoDB
mongoose.connect(process.env.MONGO_URI)
.then(()=>{
    //Listening from Port 5000
    app.listen(process.env.PORT, ()=>{
    console.log('Connection to Database and Listening from Port 5000!');
})
})
.catch((err)=>{
    console.log("err=>",err)
})

