import React from "react";
import Menu from './menu';
import Nav from './nav'
import RightMenu from './left-menu'

const Dashboard = ()=>{
    return(
        <>
        <Nav />
        <Menu />
        <RightMenu />
        </>
    )
}

export default Dashboard;