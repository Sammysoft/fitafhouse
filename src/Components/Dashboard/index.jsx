import React from "react";
import Menu from './menu';
import Nav from './nav'
import RightMenu from './RightMenu'

const Dashboard = ()=>{
    return(
        <>
        <div className="dashboard-wrapper">
        <Nav />
        <Menu />
        <RightMenu />
        </div>
        </>
    )
}

export default Dashboard;