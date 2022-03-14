import axios from "axios";
import React, { useState } from "react";
import { Form } from "semantic-ui-react";
import { useNavigate } from "react-router";
import Swal from 'sweetalert2';
const SignUpForm = ()=>{

    const [fullname, setFullname] = useState('');
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [phonenumber, setPhonenumber] = useState('')
    const [password, setPassword] = useState('');
    let navigate = useNavigate();

const submit =(e)=>{
e.preventDefault();

axios.post('http://localhost:8089/api/onboarding', {fullname, email, username, phonenumber, password})
    .then(err=>{
        navigate('/auth')
          Swal.fire({
              title:"sucess",
              icon: "success",
              text: "Account Created Succesfully, Login"
          })
    } )
}

    return(
        <>
            <div className="form-wrap">
            <Form className="form-wrap">
                <p style={{textAlign: "left", fontSize: "1.3rem", fontWeight: "900", color: "#0263aa", borderBottom: "3px solid #6bbe43"}}>Sign Up</p>
                    <input type="text" name="fullname" value={fullname} onChange={event=>setFullname(event.target.value)}  placeholder="Enter Your Full Name" />
                    <input type="email" name="email" value={email} onChange={event=>setEmail(event.target.value)} placeholder="Enter Your Email Address" />
                    <input type="email" name="email" value={username} onChange={event=>setUsername(event.target.value)} placeholder="Enter Your Username" />
                    <input type="password" name="password"  value={password} onChange={event=>setPassword(event.target.value)} placeholder="Enter Your Password" />
                    <input type="number" name="phonenumber" value={phonenumber} onChange={event=>setPhonenumber(event.target.value)} placeholder="Enter Your Phone Number" />
                    <div className="btn-signin-wrapper">
                    <button onClick={submit} type="submit" className="btn-signin">Done</button>
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