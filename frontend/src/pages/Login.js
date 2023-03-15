import { useState } from "react";

const Login = () =>{
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = async(e) =>{
        e.preventDefault();
        console.log(email,password);
    }

    return (
        <form className="login" onClick={handleSubmit}>
            <h3>Log In</h3>
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
            <button type="submit">Log In</button>
        </form>
    )
}

export default Login