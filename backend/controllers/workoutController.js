const Workout = require('../models/workoutModel')
const mongoose = require('mongoose');

//Get All Workouts
const getAllWorkouts = async(req, res)=>{
    const userId = req.user._id
    const workouts = await Workout.find({userId}).sort({createdAt: -1})
    res.status(200).json(workouts)
}

//Get a Single Workout
const getWorkout = async(req,res)=>{
    const { id } = req.params;
    if(!mongoose.Types.ObjectId.isValid(id))
    {
        return res.status(400).json({error: 'No such Workout Found!'})
    }
    const workout = await Workout.findById(id)
    console.log(id)
    if(!workout){
        return res.status(404).json({error: 'No such Workout Found!'})
    }
    res.status(200).json(workout)
}

//Create a Workout
const createWorkout = async(req,res) =>{
    const{title, reps, load} = req.body;
    let emptyFields = [];
    if(!title){
        emptyFields.push('Title')
    }
    if(!reps){
        emptyFields.push('Repetition')
    }
    if(!load){
        emptyFields.push('Load')
    }
    if(emptyFields.length > 0){
        return res.status(400).json({error: 'Please fill in all the fields', emptyFields})
    }

    //Add doc to DB
    try{
        const userId = req.user._id;
        const workout =  await Workout.create({title, reps, load, userId})
        res.status(200).json(workout)
    }catch(err){
        res.status(400).json({error: err.message})
    }
}

//Delete a Workout
const deleteWorkout = async(req,res) =>{
    const { id } = req.params;
    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error: 'No such Workout Found!'})
    }
    const workout = await Workout.findOneAndDelete({_id: id})
    if(!workout){
        return res.status(404).json({error: 'No such Workout Found!'})
    }
    res.status(200).json(workout)
}

//Update a Workout
const updateWorkout = async(req,res) =>{
    const { id } = req.params;
    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error: 'No such Workout Found!'})
    }
    const workout = await Workout.findOneAndUpdate({_id: id}, {
        ...req.body
    })
    if(!workout){
        return res.status(404).json({error: 'No such Workout Found!'})
    }
    res.status(200).json(workout)
}

module.exports = {
    getAllWorkouts,
    getWorkout,
    createWorkout,
    deleteWorkout,
    updateWorkout
}