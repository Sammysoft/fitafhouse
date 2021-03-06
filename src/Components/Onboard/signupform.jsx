/* eslint-disable */
import axios from "axios";
import React, { useEffect, useState } from "react";
import { Form } from "semantic-ui-react";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import api from "../../config";
const url = api.url;

const SignUpForm = ({ load }) => {
  const plans = ` <div style={{color: "grey", textAlign:"left"}}>
    <p>
        ROI is in two folds, One is fixed and the other is varied. The fixed is 10% per annum while the varied is according to
        business performance during the year under review.<br/>
        In summary your investment ripes after 12 months.
    </p>
    </div>`;

  const [fullname, setFullname] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [phonenumber, setPhonenumber] = useState("");
  const [password, setPassword] = useState("");
  const [accountnumber, setAccountnumber] = useState("");
  const [bank, setBank] = useState("");
  const [loading, setLoading] = useState(false);
  let navigate = useNavigate();
  useEffect(() => {
    Swal.fire({
      title: "<strong>FITAFHOUSE INVESTMENT INFO</strong>",
      icon: "info",
      html: plans,
      showCloseButton: false,
      focusConfirm: false,
      confirmButtonText: " Great!",
      confirmButtonAriaLabel: "Thumbs up, great!",
    });
  }, []);







  const submit = (e) => {
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
          e.preventDefault();
          setLoading(true);
          axios
            .post(`${url}/api/onboarding`, {
              fullname,
              email,
              username,
              phonenumber,
              password,
              accountnumber,
              bank,
            })
            .then((err) => {
              navigate("/auth");
              setLoading(false);
              Swal.fire({
                title: "Success",
                icon: "success",
                text: "Account Created Succesfully, Login",
              });
            })
            .catch((error) => {
              setLoading(false);
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
  };

  return (
    <>
      {loading ? (
        load
      ) : (
        <div className="form-wrap">
          <Form>
            <input
              type="text"
              name="fullname"
              value={fullname}
              onChange={(event) => setFullname(event.target.value)}
              placeholder="Full Name"
            />
            <input
              type="email"
              name="email"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              placeholder="Email Address"
            />
            <input
              type="text"
              name="username"
              value={username}
              onChange={(event) => setUsername(event.target.value)}
              placeholder="Username"
            />
            <input
              type="password"
              name="password"
              value={password}
              onChange={(event) => setPassword(event.target.value)}
              placeholder="Password"
            />
            <input
              type="text"
              name="phonenumber"
              value={phonenumber}
              onChange={(event) => setPhonenumber(event.target.value)}
              placeholder="Phone Number"
            />
            <input
              type="text"
              name="accountnumber"
              value={accountnumber}
              onChange={(event) => setAccountnumber(event.target.value)}
              placeholder="Account Number"
            />
            <input
              type="text"
              name="bank"
              value={bank}
              onChange={(event) => setBank(event.target.value)}
              placeholder="Bank Name"
            />
            <div className="btn-signin-wrapper">
              <button onClick={submit} type="submit" className="btn-signin">
                Sign Up
              </button>
              <div style={{ padding: "10px 0px 0px 0px" }}>
                Already have an account?{" "}
                <a className="link" href="/auth">
                  SIGN IN HERE!
                </a>
              </div>
            </div>
          </Form>
        </div>
      )}
    </>
  );
};

export default SignUpForm;
