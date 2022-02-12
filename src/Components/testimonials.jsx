import React from "react";


const Testimonial =()=>{
    return(
        <>
        {/* <aside className="text-center " style={{backgroundColor: "green"}}>
            <div className="container px-5">
                <div className="row gx-5 justify-content-center">
                    <div className="col-xl-8">
                        <div className="h2 fs-1 text-white mb-4"  >FITAFHOUSE is a business house where we determine whether a project or business
                        or investment is viable or not. We raise money for qualified ones and appoint credible team for execution.
                        </div>
                        <img src="/assets/img/tnw-logo.svg" alt="..." style={{height: "3rem"}} />
                    </div>
                </div>
            </div>
        </aside> */}

<section className="bg-light">
            <div className="container px-5" id="features">
                <div className="row gx-5 align-items-center justify-content-center justify-content-lg-between">
                <div className="col-sm-8 col-md-6">
                        <div className=""><img  src="https://media.premiumtimesng.com/wp-content/files/2021/05/Naira-dollar-1.jpg" width="100%" height="100%" alt="..." /></div>
                    </div>


                    <div className="col-12 col-lg-5">
                        <h2 className="display-4 lh-1 mb-4"></h2>
                        <p className="lead fw-normal text-muted mb-5 mb-lg-0">FITAFHOUSE is a business house where we determine whether a project or business
                        or investment is viable or not. We raise money for qualified ones and appoint credible team for execution.</p>
                    </div>
                </div>
            </div>
        </section>
        </>
    )
}

export default Testimonial;