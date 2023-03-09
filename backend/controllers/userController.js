const User = require('../models/userModel')


//Login User
const loginUser = async(req,res)=>{
    res.json({message: 'Login User'})
}

//Sign Up User
const signupUser = async(req,res) =>{
    res.json({message: 'Sign-Up User'})
}

module.exports = {loginUser, signupUser}