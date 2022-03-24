import React, { useEffect, useState } from "react";
import Menu from './menu';
import Nav from './nav';
import Swal from "sweetalert2";
import { useNavigate } from "react-router";
import AdminDashboard from "./Admin/admin";
import HarmbuggerNav from "./harmbugger-nav";






const Dashboard = (props)=>{
    const [username, setUsername] = useState('')
    const [fullname, setFullname] = useState('')
    const [role, setRole] = useState('');
    const [investment, setInvestment] = useState([])
    let token = localStorage.getItem('token')
    let navigate = useNavigate();
    useEffect(()=>{
            fetch('https://fitafhouse-api.herokuapp.com/api/dashboard', {
                headers:{
                    Authorization: token
                }
            }). then(async res=>{
                let response = await res.json()
                setUsername(response.data.username)
                setFullname(response.data.fullname)
                setRole(response.data.role)
                setInvestment(response.data.investment)
                console.log(investment)
            if(!response.data){
                navigate('/auth')
                Swal.fire({
                    icon: 'warning',
                    title: 'Sorry.',
                    text: 'Please Login',
                  })
            }else{
                console.log(response.data)
            Swal.fire({
                position: 'top-end',
                icon: 'success',
                title: `Logged In Succesfully ${response.data.username}`,
                showConfirmButton: false,
                timer: 1500
              })
            }
        })
        .catch(error=>{
            navigate('/auth')
            Swal.fire({
                icon: 'warning',
                title: 'Sorry.',
                text: 'Please Login',
              })
        })
    },[])
    return(
        <>
        { role === 'Admin' ? <AdminDashboard name={username} fullname={fullname}/> : <div>
        <div className="dashboard-wrapper">
         <HarmbuggerNav />
        <Nav />
        <Menu name={username} fullname={fullname} investment={investment}/>
        </div>
            </div>}
        </>
    )
}

export default Dashboard;