import React from "react";
import AdminNav from "./adminnav";
import AdminHarmbugger from "./admin-harmuggernav";
import SupportMenu from "./supportMenu";

const Support = () => {
  return (
    <>
      <div className="dashboard-wrapper">
        <AdminNav />
        <AdminHarmbugger />
        <SupportMenu />
      </div>
    </>
  );
};
export default Support;
