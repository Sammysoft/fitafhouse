import React from "react";
import { useNavigate } from "react-router";
import { Divider } from "semantic-ui-react";
import Swal from 'sweetalert2';

const Nav =(props)=>{
    const navigate = useNavigate();
    const logout=()=>{
        localStorage.removeItem('token');
        navigate('/auth')
        Swal.fire({
            icon: 'info',
            title:'Logged Out',
            text: 'Thanks for Using FITAFHouse!'
        })
    }
    return(
        <>
            <div className="nav-wrapper">
               <div className="nav-content-wrapper">
               <div className="brand-icon-wrapper">
                    <img src="/images/logo.png" alt="brand-logo" width="50px" height="50px"/><span style={{padding: '20px 0px 10px 15px', color: '#0263aa', fontWeight: '900'}}>FITAFHouse</span>
                </div>
            <span className="icon-nav"><a className="nav-dash-link" href="/dashboard">Dashboard</a></span>
            <span className="icon-nav"><a className="nav-dash-link" href="/dashboard/investments">Investment</a></span>
            <span className="icon-nav"><a className="nav-dash-link" href="">Profile</a></span>
             <span className="icon-nav"><a className="nav-dash-link" href="">Support</a></span>
            <span className="icon-nav"><a className="nav-dash-link" href="" onClick={()=>logout()}>Logout</a></span>
               </div>
            </div>
        </>
    )
}

export default Nav;