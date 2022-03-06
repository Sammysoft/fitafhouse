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
                            <ul className="dash-list">
                                <li className="dash-list-item">My Account</li>
                                <li className="dash-list-item">Payments</li>
                                <li className="dash-list-item">Message</li>
                                <li className="dash-list-item">ROI</li>
                                <li className="dash-list-item">FAQ</li>
                            </ul>
                        </div>

                        <div className="dash-right-nav">
                           <h5>Welcome, Good Afternoon</h5>
                           <p>
                               <div className="new-wrap">
                                    <div className="new-wrap-item">
                                            <span className="new-wrap-item-img">
                                                    <img src="/images/Man.jpg" alt="roi image" height="100%" width="100%" />
                                            </span>
                                            <span className="new-text">
                                                    <p>Current Investment</p>
                                            </span>
                                    </div>
                                    <div className="new-wrap-item">
                                    <span className="new-wrap-item-img">
                                                    <img src="/images/Man.jpg" alt="roi image" height="100%" width="100%" />
                                            </span>
                                            <span className="new-text">
                                                    <p>Time To Withdrawal</p>
                                            </span>
                                    </div>
                                </div>
                           </p>
                        </div>
                </div>

        </>
    )
}

export default NavBar;