import React from "react";
import { NavLink } from "react-router-dom";

const AdminNav =(props)=>{

    return(
        <>
            <div className="nav-wrapper">
               <div className="nav-content-wrapper">
               <div className="brand-icon-wrapper">
                    <img src="/images/logo.png" alt="brand-logo" width="50px" height="50px"/><span style={{padding: '20px 0px 10px 15px', color: '#0263aa', fontWeight: '900'}}>FITAFHOUSE</span>
                </div>
            <span className="icon-nav"><NavLink to="/dashboard" className={isActive =>"nav-link" + (!isActive ? " unselected" : "")}>Overview</NavLink></span>
            <span className="icon-nav"><a className="nav-dash-link" href="/investors">Investments</a></span>
            <span className="icon-nav"><a className="nav-dash-link" href="/users">Users</a></span>
             <span className="icon-nav"><a className="nav-dash-link" href="">Support</a></span>
               </div>
            </div>
        </>
    )
}

export default AdminNav;