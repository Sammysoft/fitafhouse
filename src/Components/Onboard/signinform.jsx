import React, { useEffect, useState } from "react";
import { Form } from "semantic-ui-react";
import axios from "axios";
import Swal from 'sweetalert2';
import Loading from '../Loader';
import { useNavigate } from 'react-router';


const SignInForm = ()=>{


    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [isLoading, setLoading] = useState(false)

    let navigate = useNavigate();

    const submit = (e)=>{
        e.preventDefault();
        axios.post('https://fitafhouse-api.herokuapp.com/api/auth', {username, password})
        .then(user=>{
            localStorage.setItem('token', user.data.token)
            navigate('/dashboard')
            setLoading(false)
        })
        .catch(error=>{
            Swal.fire({
                    title: "error",
                    icon:"error",
                    text:error.response.data.msg
                   } )
        })
    }

    return(
        <>
         {isLoading === false?
         <div className="form-wrap">
            <Form>
                    <input type="text" name="username"  value={username} onChange={event=> setUsername(event.target.value)} placeholder="Username" /><br/>
                    <input type="password" name="password"  value={password} onChange={event=> setPassword(event.target.value)} placeholder="Password" />
                    <div className="btn-signin-wrapper">
                    <button onClick={submit} type="submit" className="btn-signin">Sign In</button>
                    <div style={{padding: '10px 0px 0px 0px'}}>
                        Don't have an account?  <a className="link" href="/onboarding">SIGN UP HERE!</a>
                    </div>
                    </div>
            </Form>


            </div>: <Loading />}
        </>
    )
}

export default SignInForm;