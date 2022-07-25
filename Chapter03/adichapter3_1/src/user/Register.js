import React from "react";

export default function Register(){
    return(
        <form onSubmit={e => e.preventDefault()}>
        <label htmlFor='register-username'>Username:</label>
        <input type={"text"} name="register-username" id='register-username'></input>
        <label htmlFor='register-password'>Password:</label>
        <input type={"password"} name="register-password" id='register-password'></input>
        <label htmlFor='register-password-repeat'>Password:</label>
        <input type={"password"} name="register-password-repeat" id='register-password-repeat'></input>
        <input type={"submit"} value="Register"></input>
    </form>
    )
}