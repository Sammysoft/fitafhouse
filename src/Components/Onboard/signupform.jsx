import axios from "axios";
import React, { useEffect, useState } from "react";
import { Form } from "semantic-ui-react";
import { useNavigate } from "react-router";
import Loader from '../Loader';
import Swal from 'sweetalert2';
const SignUpForm = ()=>{

    const [fullname, setFullname] = useState('');
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [phonenumber, setPhonenumber] = useState('')
    const [password, setPassword] = useState('');
    const [accountnumber, setAccountnumber] = useState('');
    const [bank, setBank] = useState('');
    const [isLoading, setLoading] = useState(true)
    let navigate = useNavigate();
    useEffect(()=>{
        Swal.fire({
            icon: 'info',
            title: 'Register Now!',
            text: 'To make Investment, check your dashboard for options',
        })
    },[])

const submit =(e)=>{
e.preventDefault();


    axios.post('https://fitafhouse-api.herokuapp.com/api/onboarding', {fullname, email, username, phonenumber, password, accountnumber, bank})
    .then(err=>{
            navigate('/auth')
            setLoading(false)
              Swal.fire({
                  title:"Success",
                  icon: "success",
                  text: "Account Created Succesfully, Login"
              })
    } ).catch(error=>{
        Swal.fire({
            title:'Oops!',
            icon: 'error',
            text:error.response.data.msg
        })
    })
}

    return(
        <>
          {isLoading === true ?<div className="form-wrap" >
            <Form >
                    <input type="text" name="fullname" value={fullname} onChange={event=>setFullname(event.target.value)}  placeholder="Full Name" />
                    <input type="email" name="email" value={email} onChange={event=>setEmail(event.target.value)} placeholder="Email Address" />
                    <input type="text" name="username" value={username} onChange={event=>setUsername(event.target.value)} placeholder="Username" />
                    <input type="password" name="password"  value={password} onChange={event=>setPassword(event.target.value)} placeholder="Password" />
                    <input type="text" name="phonenumber" value={phonenumber} onChange={event=>setPhonenumber(event.target.value)} placeholder="Phone Number" />
                    <input type="text" name="accountnumber" value={accountnumber} onChange={event=>setAccountnumber(event.target.value)} placeholder="Account Number" />
                    <input type="text" name="bank" value={bank} onChange={event=>setBank(event.target.value)} placeholder="Bank Name" />
                    <div className="btn-signin-wrapper">
                    <button onClick={submit} type="submit" className="btn-signin">Sign Up</button>
                    <div style={{padding: '10px 0px 0px 0px'}}>
                        Already have an account?  <a className="link" href="/auth">SIGN IN HERE!</a>
                    </div>
                    </div>
            </Form>


            </div>: <Loader /> }

        </>
    )
}

export default SignUpForm;