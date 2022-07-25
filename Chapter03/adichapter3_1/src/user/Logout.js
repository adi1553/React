import React from "react";

export default function Logout({user}){
    <form onSubmit={e => e.preventDefault()}>
        Logged In as: <b>{user}</b>
        <input type={"submit"} value="Logout"></input>
    </form>
}