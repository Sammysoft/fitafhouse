/* eslint-disable */
import React, { useEffect, useState } from "react";
import axios from "axios";
import { useLocation } from "react-router";
import Swal from "sweetalert2";
import { useNavigate } from "react-router";
import api from "../config";
let url = api.url;

const ResetPassword =  () => {
    const navigate = useNavigate()
    const location = useLocation()
    const [password, setPassword] = useState("");

    const idFromUrl = location.pathname.toString();
    const extractedId = idFromUrl.substr(idFromUrl.length - 24, 24);

    const resetPassword = () =>{
        const checkForNumber =(password)=>{
            return /\d/.test(password)
          }

            if(password.length < 6){
              Swal.fire({
                icon: "warning",
                text: "Choose a password with more than 6 characters and at least a number",
                title:"Password is too weak"
              })
            }else{
              const passwordCheck = checkForNumber(password);
              console.log(passwordCheck)
              if(passwordCheck == true){
                axios
                  .post(`${url}/api/password-reset/${extractedId}`, {
                   password
                  })
                  .then((res) => {
                    navigate("/auth");
                    Swal.fire({
                      title: "Password Reset Done",
                      icon: "success",
                      text: res.data.msg,
                    });
                  })
                  .catch((error) => {
                    Swal.fire({
                      title: "Oops!",
                      icon: "error",
                      text: error.response.data.msg,
                    });
                  });
              }else{
                Swal.fire({
                  icon: "warning",
                  text: "Password must contain at least a number",
                  title: "Password is weak!"
                })
              }
            }
    }

  return (
    <>
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
      <h6>Reset Password!</h6>
      <span>Provide your new password, containing at least a number and 6 characters</span>
      <br />
      <br />
      <input
        placeholder="Enter Your New Password"
        value={password}
        onChange={(e) => {
          setPassword(e.target.value);
        }}
      />
      <span
        onClick={() => {
          resetPassword()
        }}
        style={{
          backgroundColor: "#2377DA",
          color: "white",
          padding: "5px 10vw",
          marginTop: "10px",
          cursor: "pointer",
        }}
      >
        Reset
      </span>
      </div>
      </div>
    </>
  );
};

export default ResetPassword;
