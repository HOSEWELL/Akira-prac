import React from "react";
import { useLocation } from "react-router-dom";


const User=()=>{
        const location = useLocation()
        const product = location.state;
        console.log(location.state);

    return(
        <>
        <h1>USER</h1>

        </>
    )
}
export default User;