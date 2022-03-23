import React from 'react';
import AdminMenu from './admin_menu';
import AdminNav from './adminnav';

const AdminDashboard = (props)=>{
    return(
    <>

    <div className="dashboard-wrapper">
            <AdminNav />
            <AdminMenu name={props.name} fullname={props.fullname}/>
    </div>
    </>)
}
export default AdminDashboard;