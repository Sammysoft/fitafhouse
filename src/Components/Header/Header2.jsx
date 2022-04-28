import React from "react";
import HeaderImg from './HeaderImg2';
import { Link } from "react-router-dom";

const Header2= () =>{
    return(
        <>

        <header className="masthead2" style={{width:"100%", height: "auto", margin: 'auto',  padding: '10px'}}>

                <div className="align-items-center" style={{display: "flex", flexDirection: "row", alignItems:"center", justifyContent: "space-between"}}>
                    <div style={{flex: '1'}}>

                        <div data-aos="fade-right" data-aos-duration="3000" className="header-content" style={{padding: "20%"}}>
                            <h1 className="header-welcome">Our Company,<br/> <span style={{color: "#0263aa"}} className="fitaf">FITAF</span><span className="house" style={{color: "#6bbe43"}}>HOUSE</span></h1><br/><br/>
                            <p className="lead fw-normal text-muted mb-5">Your home for comprehensive, <br/>all-round trade and financing.</p>
                            <div className="d-flex flex-column flex-lg-row align-items-center">

                                <button style={{backgroundColor: "#0263aa", color: 'white', padding: "5% 15% 5% 15%", border: "none"}}>
                                <span className="d-flex align-items-center">
                                <Link style={{textDecoration : "none", textDecorationLine: "none", color: "white"}} to="/contact#form" >  <span id="btn" style={{fontSize: "14px", fontFamily: "ubuntu"}}> Learn More</span></Link>
                                </span>
                                </button>
                            </div>
                            <div className="fitaf-wrapp">
                        <span id="fitaf-full" style={{ fontSize: "12px", fontWeight:"200", fontFamily: "ubuntu",}}>FIRST INTERNATIONAL TRADE AND FINANCE HOUSE LIMITED</span>
                        </div>
                        </div>

                    </div>
                    <HeaderImg />
                </div>

        </header>
        </>
    )
}
export default Header2;