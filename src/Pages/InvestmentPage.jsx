import React from "react";
import InvestmentMenu from "../Components/Dashboard/investment-menu";
import Nav from "../Components/Dashboard/nav";
import HarmbuggerNav from "../Components/Dashboard/harmbugger-nav";
const InvestmentPage = () => {
  return (
    <>
      <div className="dashboard-wrapper">
        <HarmbuggerNav />
        <Nav />
        <InvestmentMenu />
      </div>
    </>
  );
};

export default InvestmentPage;
