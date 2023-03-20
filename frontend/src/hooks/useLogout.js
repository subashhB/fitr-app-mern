import { useAuthContext } from "./useAuthContext";
import { useWorkoutContext } from "./useWorkoutsContext";

export const useLogout = ()=>{
    const { dispatch } = useAuthContext()
    const { dispatch: workoutDispatcher } = useWorkoutContext();

    const logout = () =>{
        //Removing User from LocalStorage
        localStorage.removeItem('user')

        //Dispatch Logout Action
        dispatch({type: 'LOGOUT'})
        workoutDispatcher({type: 'SET_WORKOUTS', payload: null})
    }

    return {logout}
}