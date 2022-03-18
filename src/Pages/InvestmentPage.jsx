import React from "react";
import InvestmentMenu from "../Components/Dashboard/investment-menu";
import Nav from "../Components/Dashboard/nav";

const InvestmentPage=()=>{
    return(

        <>
            <div className="dashboard-wrapper">
        <Nav />
         <InvestmentMenu />
        </div>
        </>
    )
}

export default InvestmentPage;