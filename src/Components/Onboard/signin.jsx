import React from "react";
import SignInForm from "./signinform";

const SignIn = ()=>{
    return(
        <>
            <div className="sign-in-wrapper">
                <div className="sign-in-content">
                    <SignInForm />
                    <div className="sign-in-img">
                    </div>
                </div>
             </div>
        </>
    )
}

export default SignIn;