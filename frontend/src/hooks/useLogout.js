import { useAuthContext } from "./useAuthContext";

export const useLogout = ()=>{
    const { dispatch } = useAuthContext()

    const logout = () =>{
        //Removing User from LocalStorage
        localStorage.removeItem('user')

        //Dispatch Logout Action
        dispatch({type: 'LOGOUT'})
    }

    return {logout}
}