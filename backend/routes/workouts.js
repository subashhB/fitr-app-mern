const express = require('express');

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
router.post('/',(req,res)=>{
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