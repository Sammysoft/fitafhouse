
import React, { useEffect, useState } from "react";
import Swal from 'sweetalert2';
import { useNavigate } from "react-router";

const AdminMenu = (props)=>{



    const [investors, setInvestors] = useState([])
    const [users, setUsers] = useState([])
    const Navigate = useNavigate()


        const toInvestors=()=>{
            Navigate('/investors')
        }
        const toUsers=()=>{
            Navigate('/users')
        }
        const logout=()=>{
            localStorage.removeItem('token')
            Navigate('/auth')
            Swal.fire({
                title: 'Logged Out',
                icon: 'info',
                text: 'Thank You for using FITAFHouse'
            })
        }


    useEffect(()=>{
                fetch('http://localhost:6069/api/stats')
                .then(async res=>{
                        const response = await res.json();
                        console.log(response)
                            setInvestors(response.numberOfActiveInvestors)
                            setUsers(response.numberOfUsers)
                })
    },[])
    return(
        <>
                  <div className="menu-wrapper">
                                                        <div className="logout-div">
                                                                <p ><span onClick={() => logout()}>Logout</span></p>
                                                        </div>
                        <div className="investment">
                                 <div className="investment-info1">
                                 <p className="info-desc">Registered Users</p>
                                <div className="investment-wrapper">

                                        <div className="active-investment">
                                                        <span style={{color: 'grey', fontWeight: '800', fontSize: '36px', textAlign: 'center'}}>
                                                        {users + ' Users'}
                                                        </span>
                                        </div>
                                        <div className="duration-investment">

                                        </div>
                                </div>
                                                 <div style={{width: '100%', position: 'relative', textAlign: 'center', paddingTop: '5vh'}}>
                                                    <span onClick={()=>{toUsers()}} style={{color: 'white', backgroundColor: '#0263aa', padding: '10px', position: "relative",  cursor: 'pointer', margin: '10px'}} >View More</span>
                                              </div>
                                 </div>
                                 <div className="investment-info2">
                                <p className="info-desc">Active Investments</p>
                                <div className="investment-wrapper">

                                        <div className="active-investment">
                                                        <span style={{color: 'grey', fontWeight: '900', fontSize: '2.5rem'}}>

                                                                        {investors + ' Invests'}
                                                        </span>

                                        </div>
                                        <div className="duration-investment">

                                        </div>
                                </div>
                                              <div style={{width: '100%', position: 'relative', textAlign: 'center', paddingTop: '5vh'}}>
                                              <span onClick={()=>toInvestors()} style={{color: 'white', backgroundColor: '#0263aa', padding: '10px', position: "relative", cursor: 'pointer',  margin: '10px'}}>View More</span>
                                              </div>
                                </div>
                                 </div>
                </div>
        </>
    )
}

export default AdminMenu;