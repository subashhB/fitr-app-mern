const User = require('../models/userModel')
const jwt = require('jsonwebtoken')

const createToken = (_id)=>{
    return jwt.sign({_id}, process.env.SECRET, {expiresIn: '3d'})
}


//Login User
const loginUser = async(req,res)=>{
    res.json({message: 'Login User'})
}

//Sign Up User
const signupUser = async(req,res) =>{
    const {email,password} = req.body

    try{
        const user = await User.signup(email,password)
        //Create a Token
        const token = createToken(user._id)
        res.status(200).json({email,token})
    }catch(error){
        res.status(400).json({error: error.message})
    }
}

module.exports = {loginUser, signupUser}