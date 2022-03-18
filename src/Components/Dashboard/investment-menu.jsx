import React, { useEffect, useState } from 'react';



const InvestmentMenu = ()=>{

 var data = {

        Quarterly1:{
                        Name:'Quarterly Plans',
                    Amount: 'N100,000',
                    ROI: 'at 3% ROI Monthly'
        },
        Quarterly2:{
            Amount: 'N300,000',
            ROI: 'at 4% ROI Monthly'
    },
            Quarterly3:{
                Amount: 'N500,000',
                ROI: 'at 5% ROI Monthly'
            },
                SixMonth1:{
                    Name:'Six Months',
                            Amount: 'N500,000',
                            ROI: '6% ROI Monthly'
                },
                SixMonth2:{

                    Amount: 'N1,000,000',
                    ROI: '7% ROI Monthly'
            },
            SixMonth3:{
                Amount: 'N1,200,000',
                ROI: '8% ROI Monthly'
            },
        Yearly1:{
            Name:'Yearly',
                    Amount: 'N1,500,000',
                    ROI: 'at 9% ROI Monthly'
        },
                 Yearly2:{
                        Amount: 'N2,000,000',
                        ROI: 'at 10% ROI Monthly'
                },
                Yearly3:{
                    Amount: 'N5,000,000',
                    ROI: 'at 11% ROI Monthly'
                }

    }

    return(
        <>
            <div className="menu-wrapper">
            <div className="investment">
                                 <div className="investment-info1">
                                 <p style={{textAlign: 'left', paddingLeft: '30px'}} className="info-desc">{data.Quarterly1.Name}</p>
                                <div className="investment-wrapper">
                                        <span id="inv-change" style={{color: 'black', fontWeight: '500', fontSize: '2rem'}}>{data.Quarterly1.Amount}</span><br/>
                                        <span id="inv-change" style={{color: '#0263aa'}}>{data.Quarterly1.ROI}</span>
                                </div>
                                </div>


                                <div className="investment-info1">
                                <br/>
                                <div className="investment-wrapper">
                                <span id="inv-change" style={{color: 'black', fontWeight: '500', fontSize: '2rem'}}>{data.Quarterly2.Amount}</span><br/>
                                        <span id="inv-change" style={{color: '#0263aa'}}>{data.Quarterly2.ROI}</span>
                                </div>
                                </div>

                                <div className="investment-info1">
                                <br/>
                                <div className="investment-wrapper">
                                <span id="inv-change" style={{color: 'black', fontWeight: '500', fontSize: '2rem'}}>{data.Quarterly3.Amount}</span><br/>
                                        <span id="inv-change" style={{color: '#0263aa'}}>{data.Quarterly3.ROI}</span>
                                </div>
                                </div>
                            </div>






                            <div className="investment">
                                 <div className="investment-info1">
                                 <p style={{textAlign: 'left', paddingLeft: '30px'}} className="info-desc">{data.SixMonth1.Name}</p>
                                <div className="investment-wrapper">
                                        <span id="inv-change" style={{color: 'black', fontWeight: '500', fontSize: '2rem'}}>{data.SixMonth1.Amount}</span><br/>
                                        <span id="inv-change" style={{color: '#0263aa'}}>{data.SixMonth1.ROI}</span>
                                </div>
                                </div>


                                <div className="investment-info1">
                                <br/>
                                <div className="investment-wrapper">
                                <span id="inv-change" style={{color: 'black', fontWeight: '500', fontSize: '2rem'}}>{data.SixMonth2.Amount}</span><br/>
                                        <span id="inv-change" style={{color: '#0263aa'}}>{data.SixMonth2.ROI}</span>
                                </div>
                                </div>

                                <div className="investment-info1">
                                <br/>
                                <div className="investment-wrapper">
                                <span id="inv-change" style={{color: 'black', fontWeight: '500', fontSize: '2rem'}}>{data.SixMonth3.Amount}</span><br/>
                                        <span id="inv-change" style={{color: '#0263aa'}}>{data.SixMonth3.ROI}</span>
                                </div>
                                </div>
                            </div>







                            <div className="investment">
                                 <div className="investment-info1">
                                 <p style={{textAlign: 'left', paddingLeft: '30px'}} className="info-desc">{data.Yearly1.Name}</p>
                                <div className="investment-wrapper">
                                        <span id="inv-change" style={{color: 'black', fontWeight: '500', fontSize: '2rem'}}>{data.Yearly1.Amount}</span><br/>
                                        <span id="inv-change" style={{color: '#0263aa'}}>{data.Yearly1.ROI}</span>
                                </div>
                                </div>


                                <div className="investment-info1">
                                <br/>
                                <div className="investment-wrapper">
                                <span id="inv-change" style={{color: 'black', fontWeight: '500', fontSize: '2rem'}}>{data.Yearly2.Amount}</span><br/>
                                        <span id="inv-change" style={{color: '#0263aa'}}>{data.Yearly2.ROI}</span>
                                </div>
                                </div>

                                <div className="investment-info1">
                                <br/>
                                <div className="investment-wrapper">
                                <span id="inv-change" style={{color: 'black', fontWeight: '500', fontSize: '2rem'}}>{data.Yearly3.Amount}</span><br/>
                                        <span id="inv-change" style={{color: '#0263aa'}}>{data.Yearly3.ROI}</span>
                                </div>
                                </div>
                            </div>
                            <div style={{width: '100%', textAlign: 'center'}}>
                            <span className="btn-investment">View Investment Details</span>
                            </div>
            </div>
        </>
    )
}

export default InvestmentMenu;