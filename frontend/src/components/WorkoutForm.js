import { useState } from "react";
import { useWorkoutContext } from "../hooks/useWorkoutsContext";
import { useAuthContext } from "../hooks/useAuthContext";

const WorkoutForm = () => {
  const {dispatch} = useWorkoutContext();
  const {user} = useAuthContext();
  
  const initialWorkout = {
    title: "",
    reps: 0,
    load: 0,
  };
  const [workout, setWorkout] = useState(initialWorkout);
  const [error, setError] = useState(null);
  const [emptyFields, setEmptyFields] = useState([]);

  const handleSutmit = async(e)=>{
    e.preventDefault();
    if(!user){
      setError('You are not logged in.')
      return
    }
    console.log(workout);
    const response = await fetch('/api/workouts',{
        method: 'POST',
        body: JSON.stringify(workout),
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${user.token}`
        }
    })
    const json = await response.json()

    if(!response.ok){
        setError(json.error)
        setEmptyFields(json.emptyFields);
    }
    if(response.ok){
        setError(null)
        console.log('New Workout Added!');
        setWorkout(initialWorkout);
        setEmptyFields([]);
        dispatch({type: 'CREATE_WORKOUT', payload: json})
    }
  }
  return (
    <form className="create">
      <h3>Add a New Workout</h3>
      <label>Exercise Title: </label>
      <input
        type="text"
        onChange={(e) => setWorkout({ ...workout, title: e.target.value })}
        value={workout.title}
        className={emptyFields.includes('Title') ? 'error' : ''}
      />
      <label>Load (in Kg): </label>
      <input
        type="number"
        onChange={(e) => setWorkout({ ...workout, load: e.target.value })}
        value={workout.load}
        className={emptyFields.includes('Load') ? 'error' : ''}
      />
      <label>Repetition: </label>
      <input
        type="number"
        onChange={(e) => setWorkout({ ...workout, reps: e.target.value })}
        value={workout.reps}
        className={emptyFields.includes('Repetition') ? 'error' : ''}
      />
      <button onClick={handleSutmit}>Add Workout</button>
      {error && <div className="error">{error}</div>}
    </form>
  );
};

export default WorkoutForm;
