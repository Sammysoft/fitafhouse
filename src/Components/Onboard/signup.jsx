import React, { useEffect } from "react";
import Navbar from "../navbar";
import SignUpForm from "./signupform";
import { css } from '@emotion/react'
import PulseLoader from 'react-spinners/PulseLoader';
import Footer from "../footer";


const SignUp = ({ loading })=>{

    const override = css`
    display: block;
    z-index: 9999;
    // padding-top: 50%;
    margin: auto;
    // padding-left: 40vw;
    // background: white;
    width: 100%;
    height: 100%;
    position: absolute;
    `;

    return (
      <>
        <Navbar />
        <div className="sign-in-img">
          <h1 style={{ margin: "10vh" }}>Sign Up</h1>
        </div>
        <div className="sign-up-content">
          <SignUpForm
            load={
              <PulseLoader
                size={30}
                margin={2}
                css={override}
                loading={loading}
                color="#2377DA"
              />
            }
          />

          <Footer />
        </div>
      </>
    );
}

export default SignUp;