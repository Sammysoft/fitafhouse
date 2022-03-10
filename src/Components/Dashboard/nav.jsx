import React from "react";

const Nav =()=>{
    return(
        <>
            <div className="nav-wrapper">
            <span className="icon-nav"><i className="bi bi-house-fill"></i><span className="nav-wrapper-text">Home</span></span>
            <span className="icon-nav"><i class="bi bi-bell-fill"></i><span className="nav-wrapper-text">Notifications</span></span>
            <span className="icon-nav"><i class="bi bi-credit-card-fill"></i><span className="nav-wrapper-text">Account</span></span>
             <span className="icon-nav"><i class="bi bi-briefcase-fill"></i><span className="nav-wrapper-text">History</span></span>
            <span className="icon-nav"><i class="bi bi-arrow-left-square-fill"></i><span className="nav-wrapper-text">Logout</span></span>
            </div>
        </>
    )
}

export default Nav;