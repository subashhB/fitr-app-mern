require('dotenv').config();
const express = require('express');

const workoutRoutes = require('./routes/workouts');

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

//Listening from Port 5000
app.listen(process.env.PORT, ()=>{
    console.log('Listening from Port 5000!');
})