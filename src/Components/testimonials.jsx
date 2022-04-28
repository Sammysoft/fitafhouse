import React from "react";
import { Link } from "react-router-dom";

const Testimonial =()=>{
    return(
        <>



        <section className="bg-light">
            <div className="container px-5" id="features">
                <div className="row gx-5 align-items-center justify-content-center justify-content-lg-between">

                    <div data-aos="fade-up" data-aos-druration="3000" className="col-12 col-lg-5" style={{fontSize: "10px", fontFamily:"ubuntu"}}>
                        <span style={{fontWeight: "bolder", fontSize: "40px"}}>Growing With <br/><span style={{color: "#0263aa", fontWeight: "bolder", fontSize: "px"}}>FITAF</span><span style={{color: "#6bbe43", fontWeight: "bolder"}}>HOUSE</span></span>
                        <p style={{fontFamily:"ubuntu", fontSize: "15px"}}>FITAFHOUSE is a business house where we determine whether a project or business
                        or investment is viable or not. We raise money for qualified ones and appoint credible team for execution.</p>
                        <button style={{backgroundColor: "#0263aa", color: 'white', padding: "5% 15% 5% 15%", border: "none"}}>
                                <span className="d-flex align-items-center">
                                    <Link to="/contact#form" style={{textDecoration: "none", textDecorationLine: "none", color: "white"}}><span style={{fontSize: "14px", fontFamily: "ubuntu"}}> Learn More</span></Link>
                                </span>
                                </button>
                    </div>
                    <div className="col-sm-8 col-md-6">
                        <div data-aos="fade-up" data-aos-duration="3000" className=""><img  src="/images/info3.jpg" width="100%" height="100%" alt="..." /></div>
                    </div>
                </div>
            </div>
        </section>
        </>
    )
}

export default Testimonial;