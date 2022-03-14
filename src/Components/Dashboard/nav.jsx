import React from "react";
import { useNavigate } from "react-router";
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
            <span className="icon-nav"><i className="bi bi-house-fill"></i><span className="nav-wrapper-text">Home</span></span>
            <span className="icon-nav"><i className="bi bi-bell-fill"></i><span className="nav-wrapper-text">Notifications</span></span>
            <span className="icon-nav"><i className="bi bi-credit-card-fill"></i><span className="nav-wrapper-text">Account</span></span>
             <span className="icon-nav"><i className="bi bi-briefcase-fill"></i><span className="nav-wrapper-text">History</span></span>
            <span className="icon-nav"><i className="bi bi-arrow-left-square-fill" onClick={() => logout()}></i><span className="nav-wrapper-text" >Logout</span></span>
            </div>
        </>
    )
}

export default Nav;