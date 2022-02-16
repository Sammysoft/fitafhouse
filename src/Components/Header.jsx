import React from "react";


const Header = () =>{
    return(
        <>
        <nav style={{position: 'absolute', top: "20px", width: "90%", backgroundColor: 'transparent', display: 'flex', padding: '5% 5% 5% 5%'}}>
            <div className="nav-brand" style={{flex: '1'}}>
                    <span style={{padding: '5%'}}>
                        <img src="/images/logo.png" alt="brand-logo" width={"50px"} height="50px"/>
                    </span>
                    <span style={{color: '#0263aa', fontWeight:"bolder", fontFamily: "ubuntu"}}>
                      FITAFHouse
                    </span>
            </div>
            <div className="nav-menu" style={{ display: 'inline-block', flex: '1', textAlign: "left"}}>
                <ul style={{listStyle: "none", display: 'inline-block', cursor: "pointer"}}>
                    <li style={{display: "inline-block", padding: "20px", fontFamily: "ubuntu"}}>Our Company</li>
                    <li style={{display: "inline-block", padding: "20px", fontFamily: "ubuntu"}}>Invest With Us</li>
                    <li style={{display: "inline-block", padding: "20px", fontFamily: "ubuntu"}}>  Get In Touch</li>
                </ul>
            </div>
        </nav>
        <header className="masthead" style={{width:"100%", height: "auto", margin: 'auto',  padding: '10px'}}>
            <div className="container">
                <div className="align-items-center" style={{display: "flex", flexDirection: "row", alignItems:"center", justifyContent: "space-between"}}>
                    <div style={{flex: '1'}}>

                        <div style={{paddingTop: "40%"}}>
                            <h1 >Welcome to<br/> <span style={{color: "#0263aa"}}>FITAF</span><span style={{color: "#6bbe43"}}>HOUSE</span></h1>
                            <p className="lead fw-normal text-muted mb-5">Your home for comprehensive, all-round trade and financing.</p>
                            <div className="d-flex flex-column flex-lg-row align-items-center">

                                <button style={{backgroundColor: "#0263aa", color: 'white', padding: "5% 15% 5% 15%", border: "none"}}>
                                <span className="d-flex align-items-center">
                                    <span style={{fontSize: "14px", fontFamily: "ubuntu"}}> Learn More</span>
                                </span>
                                </button>
                            </div>
                        </div>

                        <div style={{marginTop: "20%" }}>
                        <span style={{ fontSize: "10px", fontWeight:"lighter", fontFamily: "ubuntu"}}>FIRST INTERNATIONAL TRADE AND FINANCE HOUSE LIMITED</span>
                        </div>
                    </div>
                    <div style={{flex: "2.5"}} >
                            <img src="/images/header.png" width="90%" height="100%" alt="High quality House Cliparts For Free!" />                    {/* </div> */}
                    </div>
                </div>
            </div>
        </header>
        </>
    )
}
export default Header;