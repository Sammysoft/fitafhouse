import React from "react";
import { Form } from "semantic-ui-react";

const SignInForm = ()=>{
    return(
        <>
            <div className="form-wrap">
            <Form className="form-wrap">
                <p style={{textAlign: "left", fontSize: "1.3rem", fontWeight: "900", color: "#0263aa", borderBottom: "3px solid #6bbe43"}}>Sign In</p>
                    <input type="email" name="email"  placeholder="Enter Your Email Account" />
                    <input type="password" name="password"  placeholder="Enter Your Secured Password" />
                    <div className="btn-signin-wrapper">
                    <button type="submit" className="btn-signin">Done</button>
                    <span >
                        <a className="forgot-password" href="/forgot-password">forgot password?</a>
                    </span>
                    </div>
            </Form>


            </div>
        </>
    )
}

export default SignInForm;