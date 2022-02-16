import React from "react";

const Features = ()=>{
    return(
        <>

    <section className="bg-light">
            <div className="container px-5" id="features">
                <div className="row gx-5 align-items-center justify-content-center justify-content-lg-between">
                <div className="col-sm-8 col-md-6">
                        <div className=""><img  src="/images/info.png" width="100%" height="100%" alt="..." /></div>
                    </div>
                    <div className="col-12 col-lg-5" style={{fontSize: "10px"}}>
                        <span style={{fontWeight: "bolder", fontSize: "40px"}}>Investment With <br/><span style={{color: "#0263aa", fontWeight: "bolder", fontSize: "px"}}>FITAF</span><span style={{color: "#6bbe43", fontWeight: "bolder"}}>House</span></span>
                        <p style={{fontFamily:"ubuntu", fontSize: "15px"}}>International trade business involves large sum of money expecially now that we have global challenges with the value of our currencies
                        It's on this note that we humbly ask for your investment in this company. Your massive investment in this company will give us oppurtunity to enjoy economies of sale. What that means is that the cost
                        of our operation will go down with corresponding increase in our profit. That means more returns will be made available to all investors at the end of the financial year</p>
                        <button style={{backgroundColor: "#0263aa", color: 'white', padding: "5% 15% 5% 15%", border: "none"}}>
                                <span className="d-flex align-items-center">
                                    <span style={{fontSize: "14px", fontFamily: "ubuntu"}}> Learn More</span>
                                </span>
                                </button>
                    </div>

                </div>
            </div>
        </section>
        <section className="cta">
            <div className="cta-content"  style={{display: 'flex'}}>
                <div className="container"></div>
                <div className="container" style={{}}>
                    <h2 className="text-white " >
                        Step into our world of  21st
                        <br /><br/>
                       century financing.
                    </h2>
                    <br /><br/>
                    <a className="btn btn-outline-light py-3 px-4" href="/" target="_blank">Become Our partner</a>
                </div>
            </div>
        </section>




        </>
    )
}

export default Features