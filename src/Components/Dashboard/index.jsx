import React, { useEffect } from "react";
import Menu from './menu';
import Nav from './nav';
import RightMenu from './RightMenu';
import axios from "axios";
import { Navigate } from "react-router";



const Dashboard = ()=>{
    let token = localStorage.getItem('token')
    useEffect(()=>{
        axios.get('http://localhost/8089/api/dashboard', {
            headers:{
                Authorization: token
            }
        }).then(res=>{
            console.log(res)
        })
        .catch(err=>{
            console.log(err)
            Navigate('/auth')
        })
    },[])
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