import React, { useEffect } from "react";
import Navbar from "../navbar";
import SignUpForm from "./signupform";


const SignUp = ()=>{

    return(
        <>
        <Navbar />
        <div className="sign-in-img">
                 <h1 style={{margin: '10vh'}}>Sign Up</h1>
             </div>
             <div className="sign-up-content">
                       <SignUpForm />
            </div>
        </>
    )
}

export default SignUp;