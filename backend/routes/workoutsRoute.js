const express = require('express');
const router = express.Router();
const{
    createWorkout, 
    getAllWorkouts,
    getWorkout,
    deleteWorkout,
    updateWorkout,
} = require('../controllers/workoutController');
//Middleware
const requireAuth = require('../middleware/requireAuth');

//Require Authentication for all the Workout Routes
router.use(requireAuth)

//GET ALL WORKOUTS
router.get('/', getAllWorkouts)

//GET A SINGLE WORKOUT
router.get('/:id',getWorkout)

//POST A NEW WORKOUT
router.post('/', createWorkout)

//DELETE A WORKOUT
router.delete('/:id', deleteWorkout)

//UPDATE A WORKOUT
router.patch('/:id', updateWorkout)

module.exports = router;