import React from 'react';


const  Menu = ()=>{
    return(
        <>
        <section id="download">
        <div className="container-fluid px-5">
                            <div className="row" style={{padding: "10%", fontSize: "13px"}}>
                                <div className="col-md-3 mb-5">

                                    <div className="text-center" style={{borderTop: '5px solid #6bbe43',borderBottom: '5px solid #6bbe43', height: "55vh", padding: "20px", boxShadow: "0px 5px 5px 0px #888888" }}>
                                        <i className="bi-phone icon-feature text-gradient d-block mb-3"></i>
                                        <h3 className="font-alt">Administration</h3>
                                        <p className="text-muted mb-0">This section is in charge of legal, insurance, recruitment, promotion, discipline, training, advertisement, audit and relevant issues</p>
                                    </div>
                                </div>
                                <div className="col-md-3 mb-5">

                                    <div className="text-center" style={{borderTop: '5px solid #6bbe43',borderBottom: '5px solid #6bbe43', height: "55vh", padding: "20px", boxShadow: "0px 5px 5px 0px #888888"}}>
                                        <i className="bi-camera icon-feature text-gradient d-block mb-3"></i>
                                        <h3 className="font-alt">Business</h3>
                                        <p className="text-muted mb-0">Here, we determine the viability of a business, project or investment. Our credible team of experts perform all appraisals for the viable project</p>
                                    </div>
                                </div>
                                <div className="col-md-3">
                                    <div className="text-center" style={{borderTop: '5px solid #6bbe43',borderBottom: '5px solid #6bbe43', height: "55vh", padding: "20px", boxShadow: "0px 5px 5px 0px #888888"}}>
                                        <i className="bi-gift icon-feature text-gradient d-block mb-3"></i>
                                        <h3 className="font-alt">Finance</h3>
                                        <p className="text-muted mb-0">This section perform all sourcing of funds for viable projects, mainly through the instrumentality of equitly financing, debt financing and grant processing</p>
                                    </div>
                                </div>
                                <div className="col-md-3">
                                    <div className="text-center" style={{borderTop: '5px solid #6bbe43', borderBottom: '5px solid #6bbe43', height: "55vh", padding: "20px", boxShadow: "0px 5px 5px 0px #888888"}}>
                                        <i className="bi-patch-check icon-feature text-gradient d-block mb-3"></i>
                                        <h3 className="font-alt">Operation</h3>
                                        <p className="text-muted mb-0">Here we put our relevant skills to execute the project with precision. Our credible team of experts also supervise the execution of the project</p>
                                    </div>
                            </div>
                           <div className="row">
                          <div className="wrap" style={{textAlign: "center", width: 'center'}}>
                          <div  style={{alignItems: 'center'}}>
                            <button style={{backgroundColor: "#0263aa", color: 'white', padding: "2% 5% 2% 5%", border: "none", float: 'center'}}>
                                <span className="d-flex align-items-center">
                                    <span style={{fontSize: "14px"}}> Learn More</span>
                                </span>
                                </button>
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