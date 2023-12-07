import React from "react";
import { useState } from "react";
import "./login1.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';

function Login(){
    const [password, setPassword] = useState("");
    const [showPassword, setShowPassword] = useState(false);

    const handleTogglePassword = () => {
        setShowPassword(!showPassword);
      };
    return(
        <div className="container d-flex align-items-center justify-content-center w-100">
         <div className="image">  <img src="./images/SmartHr_Logo.png" alt=""/>
            <div className="login rounded mt-4">
          
            <h2 className="mb-1 text-center">Login
            </h2>  
            <p className="access text-center">Access to our dashboard</p>
            <form>
            <div className="form-group  mb-2">
                <label htmlFor="email" className="form-label">Email Address</label>
                <input id="email" type="email" className="form-control mb-4 p-2" placeholder="Email"></input>
            </div>
            <div className="form-group mb-2 ">
                <div className="d-flex justify-content-between">
                <label htmlFor="password" className="form-label hidden">Password</label>
                <label htmlFor="password" className=" forget form-label">Forgot password?</label>
                </div>
               <div  style={{ position: 'relative' }}> 
               <input id="password" value={password} type={showPassword ? 'text' : 'password'}
            placeholder="Password"
            
            onChange={(e) => setPassword(e.target.value)}
                     className=" form-control mb-3 p-2"></input>
                       
        <span style={{ position: 'absolute', right: '10px', top: '20%',bottom:'25%', cursor: 'pointer' }}
            
            onClick={handleTogglePassword}
          >
             <FontAwesomeIcon icon={showPassword ? faEye : faEyeSlash} style={{color:"#6c6666"}}/>
          </span>
          
        </div>
            </div>
            
            <button type="submit" className="btn  mt-2  w-100 mb-4">Login</button>
            <div className="form-group  mb-2">
               <div className=" text-center mb-3">
               Don't have an account yet?<a href="/" className="log">  Register </a>
               </div>
            </div>
                </form> 
            </div>
            </div>
           
        </div>


    )


}

export default Login