import React from "react";


const Testimonial =()=>{
    return(
        <>



        <section className="bg-light">
            <div className="container px-5" id="features">
                <div className="row gx-5 align-items-center justify-content-center justify-content-lg-between">

                    <div className="col-12 col-lg-5" style={{fontSize: "10px", fontFamily:"ubuntu"}}>
                        <span style={{fontWeight: "bolder", fontSize: "40px"}}>Growing With <br/><span style={{color: "#0263aa", fontWeight: "bolder", fontSize: "px"}}>FITAF</span><span style={{color: "#6bbe43", fontWeight: "bolder"}}>House</span></span>
                        <p style={{fontFamily:"ubuntu", fontSize: "15px"}}>FITAFHOUSE is a business house where we determine whether a project or business
                        or investment is viable or not. We raise money for qualified ones and appoint credible team for execution.</p>
                        <button style={{backgroundColor: "#0263aa", color: 'white', padding: "5% 15% 5% 15%", border: "none"}}>
                                <span className="d-flex align-items-center">
                                    <span style={{fontSize: "14px", fontFamily: "ubuntu"}}> Learn More</span>
                                </span>
                                </button>
                    </div>
                    <div className="col-sm-8 col-md-6">
                        <div className=""><img  src="/images/info2.png" width="100%" height="100%" alt="..." /></div>
                    </div>
                </div>
            </div>
        </section>
        </>
    )
}

export default Testimonial;