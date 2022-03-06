import React from "react";

const NavBar = ()=>{
    return(
        <>

        <nav className="top-nav">
            <span className="left-top-nav">
                    <div className="wrap">
                    <img className="profile-pic-img" src="/images/Man.jpg" alt="dashboard-profile-picture" height={"40px"} width={"40px"} />
                    <span className="profile-name">
                            <h6>Sammysoft</h6>
                    </span>
                </div>
             </span>
             <span className="right-top-nav">
                    <span style={{float: "right"}}>Logout</span>
            </span>
        </nav>
            <div className="dashboard-navbar">
                    <div className="dash-left-nav">
                            Left Dashboard
                        </div>

                        <div className="dash-right-nav">
                           <h5>Welcome, Good Afternoon</h5>
                        </div>
                </div>

        </>
    )
}

export default NavBar;