import React from "react";
import Chart from "./Example";

const Menu = (props)=>{

    return(
        <>
                <div className="menu-wrapper">
                        <div className="inner-menu">
                                <b>Welcome </b> <i>@<span style={{color: '#0263aa'}}>{props.fullname}</span></i>
                                <div className="news-feed">
                                        <div className="drift-left">
                                                <h6><span style={{color: '#6bbe43'}}>@</span>Admin</h6>
                                        </div>
                                       <div className="drift-right">
                                       <div className="first">
                                       <h6>Quarterly Plan</h6>
                                                <ul>
                                                       <li>
                                                               <ul>
                                                                        <li>#100,000 @ 3% Monthly ROI</li>
                                                                        <li>#300,000 @ 4% Monthly ROI</li>
                                                                        <li>#500,000 @ 5% Monthly ROI</li>
                                                               </ul>
                                                       </li>
                                                </ul>
                                        </div>
                                        <div className="second">
                                                <h6>Six-Month Plan</h6>
                                                <ul>
                                                       <li>
                                                               <ul>

                                                                        <li>#500,000 @ 6% Monthly ROI</li>
                                                                        <li>#1.000,000 @ 8% Monthly ROI</li>
                                                               </ul>
                                                       </li>
                                                </ul>
                                        </div>
                                        <div className="third">
                                                <h6>One Year Plan</h6>
                                                <ul>
                                                       <li>
                                                               <ul>
                                                                        <li>#1,000,000 @ 9% Monthly ROI</li>
                                                                        <li>#1,500,000 @ 10% Monthly ROI</li>
                                                                        <li>#2,000,000 @ 11% Monthly ROI</li>
                                                                        <li>#5,000,000 @ 12% Monthly ROI</li>
                                                               </ul>
                                                       </li>
                                                </ul>
                                        </div>
                                       </div>
                                </div>
                                <Chart />

                        </div>
                </div>

        </>
    )
}

export default Menu;