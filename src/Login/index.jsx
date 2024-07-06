import "./index.css";
import { login } from './util';
import { useState } from "react";
const Login=()=>{

    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

const handleLogin = async(event)=>{
    event.preventDefault()
    const response = await login(username, password);
    console.log({response});
}

    return(
        <form onSubmit={handleLogin}>
            
            <h2>Login</h2>
            <input type="text" placeholder="Enter Username"  onChange={event =>setUsername(event.target.value)}/>
            <br /><br />
            <input type="password"  placeholder="password" onChange={event =>setPassword(event.target.value)}/>
            <br /><br />
            <button type="submit">Submit</button>

        </form>
    )
}
export default Login;