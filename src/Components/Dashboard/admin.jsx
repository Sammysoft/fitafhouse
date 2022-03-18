import React from 'react';
import Nav from './nav';
import AdminMenu from './admin_menu';
import NavBar from '../navbar';

const AdminDashboard = (props)=>{
    return(
    <>
<NavBar />
    <div className="dashboard-wrapper">
            <Nav />
            <AdminMenu name={props.name} fullname={props.fullname}/>
    </div>
    </>)
}
export default AdminDashboard;