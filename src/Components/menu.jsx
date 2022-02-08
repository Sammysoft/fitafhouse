import React from 'react';


const  Menu = ()=>{
    return(
        <>
               <section id="features">
            <div className="container px-5">
                <div className="row gx-5 align-items-center">
                    <div className="col-lg-8 order-lg-1 mb-5 mb-lg-0">
                        <div className="container-fluid px-5">
                            <div className="row gx-5">
                                <div className="col-md-6 mb-5">

                                    <div className="text-center">
                                        <i className="bi-phone icon-feature text-gradient d-block mb-3"></i>
                                        <h3 className="font-alt">Administration</h3>
                                        <p className="text-muted mb-0">This section is in charge of legal, insurance, recruitment/promotion/discipline, training, promotion/advertisement, audit and relevant issues</p>
                                    </div>
                                </div>
                                <div className="col-md-6 mb-5">

                                    <div className="text-center">
                                        <i className="bi-camera icon-feature text-gradient d-block mb-3"></i>
                                        <h3 className="font-alt">Business</h3>
                                        <p className="text-muted mb-0">This section has the mandate of generating business for the company. Also, it determines whether a business, project or investment is viable or not
                                        When it comes to appraisal we cut by hiring experts when the project, business or investment requires it. After this hurdle, the section presents the proposal to management for financing.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-md-6 mb-5 mb-md-0">

                                    <div className="text-center">
                                        <i className="bi-gift icon-feature text-gradient d-block mb-3"></i>
                                        <h3 className="font-alt">Finance</h3>
                                        <p className="text-muted mb-0">This section is mandated to source fund for the viable project through the instrumentality of equity financing, debt financing and grant processingq.
                                        We consider the terms and conditions of the fund before we subscribe to it</p>
                                    </div>
                                </div>
                                <div className="col-md-6">

                                    <div className="text-center">
                                        <i className="bi-patch-check icon-feature text-gradient d-block mb-3"></i>
                                        <h3 className="font-alt">Operation</h3>
                                        <p className="text-muted mb-0">This is the 'Kitchen' of the company. It's a section mandated to put in all relevant skills to execute the project with precision. When it is necessary we appoint credible team to supervise the execution
                                        of the project, business or investment. This is te section credited with international best practices</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 order-lg-0">

                        <div className="features-device-mockup">
                            <svg className="circle" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
                                <defs>
                                    <linearGradient id="circleGradient" gradientTransform="rotate(45)">
                                        <stop className="gradient-start-color" offset="0%"></stop>
                                        <stop className="gradient-end-color" offset="100%"></stop>
                                    </linearGradient>
                                </defs>
                                <circle cx="50" cy="50" r="50"></circle></svg >
                                <svg className="shape-1 d-none d-sm-block" viewBox="0 0 240.83 240.83" xmlns="http://www.w3.org/2000/svg">
                                <rect x="-32.54" y="78.39" width="305.92" height="84.05" rx="42.03" transform="translate(120.42 -49.88) rotate(45)"></rect>
                                <rect x="-32.54" y="78.39" width="305.92" height="84.05" rx="42.03" transform="translate(-49.88 120.42) rotate(-45)"></rect></svg>
                                <svg className="shape-2 d-none d-sm-block" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg"><circle cx="50" cy="50" r="50"></circle></svg>
                            <div className="device-wrapper">
                                <div className="device" data-device="iPhoneX" data-orientation="portrait" data-color="black">
                                    <div className="screen bg-black">

                                        <video muted="muted" autoplay="" loop="" style={{maxWidth: "100%", height: "100%"}}><source src="assets/img/demo-screen.mp4" type="video/mp4" /></video>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        </>
    )
}

export default Menu;