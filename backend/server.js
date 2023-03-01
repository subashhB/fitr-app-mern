const express = require('express');

//Express App
const app = express();

//Listening from Port 5000
app.listen(5000, ()=>{
    console.log('Listening from Port 5000!');
})