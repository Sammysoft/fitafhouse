import React from "react";

const Features = ()=>{
    return(
        <>

    <section className="bg-light">
            <div className="container px-5" id="features">
                <div className="row gx-5 align-items-center justify-content-center justify-content-lg-between">
                    <div className="col-12 col-lg-5">
                        <h2 className="display-4 lh-1 mb-4">Investment With FITAFHOUSE</h2>
                        <p className="lead fw-normal text-muted mb-5 mb-lg-0">International trade business involves large sum of money expecially now that we have global challenges with the value of our currencies
                        It's on this note that we humbly ask for your investment in this company. Your massive investment in this company will give us oppurtunity to enjoy economies of sale. What that means is that the cost
                        of our operation will go down with corresponding increase in our profit. That means more returns will be made available to all investors at the end of the financial year</p>
                    </div>
                    <div className="col-sm-8 col-md-6">
                        <div className=""><img  src="https://www.chronicle.co.zw/wp-content/uploads/sites/3/2018/05/BANKING1.jpg" width="100%" height="100%" alt="..." /></div>
                    </div>
                </div>
            </div>
        </section>
        <section className="cta">
            <div className="cta-content">
                <div className="container px-5">
                    <h2 className="text-white display-1 lh-1 mb-4">
                        Stop waiting.
                        <br />
                        Join Us Now!.
                    </h2>
                    <a className="btn btn-outline-light py-3 px-4 rounded-pill" href="https://startbootstrap.com/theme/new-age" target="_blank">Invest With Us</a>
                </div>
            </div>
        </section>

        {/* <section className="bg-gradient-primary-to-secondary" id="download">
            <div className="container px-5">
                <h2 className="text-center text-white font-alt mb-4">Get the app now!</h2>
                <div className="d-flex flex-column flex-lg-row align-items-center justify-content-center">
                    <a className="me-lg-3 mb-4 mb-lg-0" href="#!"><img className="app-badge" src="assets/img/google-play-badge.svg" alt="..." /></a>
                    <a href="#!"><img className="app-badge" src="assets/img/app-store-badge.svg" alt="..." /></a>
                </div>
            </div>
        </section> */}


        </>
    )
}

export default Features