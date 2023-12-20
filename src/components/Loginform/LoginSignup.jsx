import React, { useState } from "react";
import './LoginSignup.css';
import email_icon from '../Loginform/Assest/email.png'
import password_icon from '../Loginform/Assest/password.png'
import person_icon from '../Loginform/Assest/person.png'
const LoginSignup = () =>{

    const[action,setAction]=useState('Sign up');

    

    return(
        <div>
            <div className="container">
                <div className="header">
                    <div className="text">{action}</div>
                    <div className="underline"></div>
                </div>
                
            </div>

            <div className="input_detail">
            {action==="Login"?<div></div>: <div className="input"> 
                    <img src={person_icon} alt="" className="icon" />
                    <input type="text" className="detail" placeholder="Enter your Name" required/>
                </div>}
               

                <div className="input">
                    <img src={email_icon} alt="" className="icon" />
                    <input type="email" className="detail" placeholder="Enter your Email" required/>
                </div>

                <div className="input">
                    <img src={password_icon} alt="" className="icon" />
                    <input type="password" className="detail" placeholder="Enter your Password" required/>
                </div>
            </div> 

            {action==="Sign up"?<div></div>:<div className="forget-pwd">Lost Password?<span>Click Here</span></div>}
            

            <div className="submit-container">
                <div className ={action==="Login"?"submit gray":"submit"} onClick={()=>{setAction("Sign up")}}>sign up</div>
                <div className={action==="Sign up"?"submit gray":"submit"} onClick={()=>{setAction("Login")}}>login</div>
            </div>
                         
        </div>
   )
}
export default LoginSignup;