import React from "react";
import SignInForm from "./signinform";
import Navbar from "../navbar";
import Footer from "../footer";

const SignIn = ()=>{
    return (
      <>
        <Navbar />
        <div className="sign-in-img">
          <h1 style={{ margin: "10vh" }}>Sign In</h1>
        </div>

        <div className="sign-in-content">
          <div className="img-signin-content"></div>
          <SignInForm className="form-wrapper" />
        </div>
        <div className="content">
          <Footer />
        </div>
      </>
    );
}

export default SignIn;