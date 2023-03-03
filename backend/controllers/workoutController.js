const Workout = require('../models/workoutModel')
const mongoose = require('mongoose');

//Get All Workouts
const getAllWorkouts = async(req, res)=>{
    const workouts = await Workout.find({}).sort({createdAt: -1})
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

    //Add doc to DB
    try{
        const workout =  await Workout.create({title, reps, load})
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