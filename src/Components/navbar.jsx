import React from "react";



const Navbar = () =>{
    return(
        <>

        <nav className="navbar navbar-expand-lg navbar-light fixed-top shadow-sm" id="mainNav">
            <div className="container px-5">
                <a className="navbar-brand fw-bold" href="#page-top" style={{color: "#008000", fontSize: "15px"}}>
                    <img src="/images/logo.png"  width={"50px"}  height={"50px"}alt="brand-logo" />
                    FITAFHOUSE</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
                    Menu
                    <i className="bi-list"></i>
                </button>
                <div className="collapse navbar-collapse" id="navbarResponsive">
                    <ul className="navbar-nav ms-auto me-4 my-3 my-lg-0">
                        <li className="nav-item"><a className="nav-link me-lg-3" href="#features">About</a></li>
                        <li className="nav-item"><a className="nav-link me-lg-3" href="#download">Services</a></li>
                        <li className="nav-item"><a className="nav-link me-lg-3" href="#contact">Contact</a></li>
                        <li className="nav-item"><a className="nav-link me-lg-3" href="#download">Login</a></li>
                        <li className="nav-item"><a className="nav-link me-lg-3" href="#download"></a></li>
                    </ul>
                    <button className="btn btn-success  px-3 mb-2 mb-lg-0" data-bs-toggle="modal" data-bs-target="#feedbackModal">
                        <span className="d-flex align-items-center">
                            <i className="bi-chat-text-fill me-2"></i>
                            <span className="small">Send Feedback</span>
                        </span>
                    </button>
                </div>
            </div>
        </nav>
        </>
    )
}

export default Navbar;