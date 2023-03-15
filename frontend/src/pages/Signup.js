import { useState } from "react";

const Signup = () =>{
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = async(e) =>{
        e.preventDefault();
        console.log(email,password);
    }

    return (
        <form className="signup" onClick={handleSubmit}>
            <h3>Sign Up</h3>
            <label>E-mail: </label>
            <input
                name="email"
                value={email}
                onChange={(e)=>{setEmail(e.target.value)}}
            />
            <label>Password: </label>
            <input
                type="password"
                name="password"
                value={password}
                onChange={(e)=>{setPassword(e.target.value)}}
            />
            <button type="submit">Sign Up</button>
        </form>
    )
}

export default Signup