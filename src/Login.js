import React from "react";
let App=()=>{
    const Handl=()=>{
        console.log('Login......')
        console.log('Loginf again......')
    }
return(
    <div className="Login-container">
        <div className="Login-box">
        <h1 className="login">Login Here</h1>
        <form >
            <label htmlFor="username">UserName</label>
            <input type='text' id='username' placeholder="Enter username"/>
            <label  htmlFor="password">Password</label>
            <input id='password'type="password" placeholder="Enter password"/>
            <button type="button" onClick={Handl}>Login</button>
        </form>
        </div>

    </div>
)
}
export default App;