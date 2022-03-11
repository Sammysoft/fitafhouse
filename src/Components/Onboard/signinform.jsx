import React, { useState } from "react";
import { Form } from "semantic-ui-react";
import axios from "axios";
import { useNavigate } from "react-router";


const SignInForm = ()=>{


    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate()
    const submit = (e)=>{
        e.preventDefault();
        console.log(username, password)
        axios.post('http://localhost:8089/api/auth', {username, password})
            .then(user=>{
                console.log(user)
                localStorage.setItem('token', user.data.token)
                navigate('/dashboard')
            })
            .catch(err=>{
                console.log(err)
            })
    }

    return(
        <>
            <div className="form-wrap">
            <Form className="form-wrap">
                <p style={{textAlign: "left", fontSize: "1.3rem", fontWeight: "900", color: "#0263aa", borderBottom: "3px solid #6bbe43"}}>Sign In</p>
                    <input type="text" name="username"  value={username} onChange={event=> setUsername(event.target.value)} placeholder="Enter Your Email Account" />
                    <input type="password" name="password"  value={password} onChange={event=> setPassword(event.target.value)} placeholder="Enter Your Secured Password" />
                    <div className="btn-signin-wrapper">
                    <button onClick={submit} type="submit" className="btn-signin">Done</button>
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