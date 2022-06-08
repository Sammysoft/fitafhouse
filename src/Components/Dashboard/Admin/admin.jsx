
import React from "react";
import AdminMenu from "./admin_menu";
import AdminNav from "./adminnav";
import AdminHarmbugger from "./admin-harmuggernav";

const AdminDashboard = (props) => {
  return (
    <>
      <div className="dashboard-wrapper">
        <AdminHarmbugger />
        <AdminNav />
        <AdminMenu name={props.name} fullname={props.fullname} />
      </div>
    </>
  );
};
export default AdminDashboard;
