/* eslint-disable */

import React, { useState, useEffect } from "react";
import Navbar from "../Components/navbar";
import Footer from "../Components/footer";
import axios from "axios";
import api from "../config";
import Swal from "sweetalert2"
import { Link } from "react-router-dom";
let url = api.url;






const PasswordAuthPage = () => {

  const sendVerification = () => {
    axios.post(`${url}/api/forgot-password/reset`, { email }).then((res) => {
      console.log(res)
      Swal.fire({
        icon: "success",
        text: res.data.msg,
        title: "Email link has been sent!"
      });
      setChangePrompt(true)
    }).catch((error)=>{
      console.log(error.response.data.msg)
      Swal.fire({
        icon: "error",
        text: error.response.data.msg,
        title: "Oops!"
      })
    })
  };



  const [email, setEmail] = useState("");
  const [changePrompt, setChangePrompt] = useState(false);


useEffect(()=>{
setChangePrompt(false)
},[])



  return (
    <>
      <Navbar />
      <div
        style={{
          display: "flex",
          width: "50%",
          height: "100vh",
          jusitifyContent: "center",
          alignItems: "center",
          margin: "auto",
        }}
      >
        <div
          style={{
            textAlign: "center",
            fontFamily: "Ubuntu",
            width: "100%",
            marign: "auto",
            height: "50%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
          }}
        >
          {changePrompt == false ? (
            <>
              <h6>Verify Email Account!</h6>
              <span>Please provide the email associated with your account</span>
              <br />
              <br />
              <input
                placeholder="Enter Your email"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
              />
              <span
                onClick={()=>{sendVerification()}}
                style={{
                  backgroundColor: "#2377DA",
                  color: "white",
                  padding: "5px 10vw",
                  marginTop: "10px",
                  cursor: "pointer",
                }}
              >
                Verify
              </span>
            </>
          ) : (
            <>
              <h6>Check Your mail</h6>
              <span>
                A link to reset your password has been sent to your email
              </span>
              <br />
              <br />
              <a
                href="https://mail.google.com/mail/u/0/#inbox"
                target="_blank"
                style={{ textDecoration: "none", textDecorationLine: "none" }}
              >
                <span
                  style={{
                    backgroundColor: "#2377DA",
                    color: "white",
                    padding: "5px 10vw",
                    marginTop: "10px",
                    cursor: "pointer",
                  }}
                >
                  Home
                </span>
              </a>
            </>
          )}
        </div>
      </div>

      <Footer />
    </>
  );
};

export default PasswordAuthPage;
