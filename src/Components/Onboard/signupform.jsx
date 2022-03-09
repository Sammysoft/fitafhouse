import React from "react";
import { Form } from "semantic-ui-react";

const SignUpForm = ()=>{
    return(
        <>
            <div className="form-wrap">
            <Form className="form-wrap">
                <p style={{textAlign: "left", fontSize: "1.3rem", fontWeight: "900", color: "#0263aa", borderBottom: "3px solid #6bbe43"}}>Sign Up</p>
                    <input type="text" name="fullname"  placeholder="Enter Your Full Name" />
                    <input type="email" name="email"  placeholder="Enter Your Email Address" />
                    <input type="password" name="password"  placeholder="Enter Your Password" />
                    <input type="number" name="phonenumber"  placeholder="Enter Your Phone Number" />
                    <div className="btn-signin-wrapper">
                    <button type="submit" className="btn-signin">Done</button>
                    <span >
                        <a className="forgot-password" href="/auth">Have an account?</a>
                    </span>
                    </div>
            </Form>


            </div>
        </>
    )
}

export default SignUpForm;