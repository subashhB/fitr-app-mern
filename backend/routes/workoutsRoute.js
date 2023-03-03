const express = require('express');
const Workout = require('../models/workoutModel')
const router = express.Router();

//GET ALL WORKOUTS
router.get('/', (req,res)=>{
    res.json({message: 'GET ALL WORKOUTS'});
})

//GET A SINGLE WORKOUT
router.get('/:id', (req,res)=>{
    res.json({message: 'GET A SINGLE WORKOUT'});
})

//POST A NEW WORKOUT
router.post('/', async(req,res)=>{
    const{title, reps, load} = req.body;
    try{
        const workout =  await Workout.create({title, reps, load})
        res.status(200).json(workout)
    }catch(err){
        res.status(400).json({error: err.message})
    }
    res.json({message: 'POST A NEW WORKOUT'});
})

//DELETE A WORKOUT
router.delete('/:id', (req,res)=>{
    res.json({message: 'DELETE A WORKOUT'});
})

//UPDATE A WORKOUT
router.patch('/:id', (req,res)=>{
    res.json({message: 'UPDATE A WORKOUT'});
})

module.exports = router;