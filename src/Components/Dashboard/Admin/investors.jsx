import React, { useState, useEffect } from "react";
import AdminNav from "./adminnav";
import Swal from "sweetalert2";
import { useNavigate } from "react-router";
import AdminHarmbugger from "./admin-harmuggernav";

const Investors=()=>{
    const [value, setValue] = useState([])
    const Navigate= useNavigate()

    const logout=()=>{
        localStorage.removeItem('token')
        Navigate('/auth')
        Swal.fire({
            icon: 'info',
            title: "Logged Out",
            text: 'Thanks for using FITAFHouse'
        })
    }

    const revealDuration =(value)=>{
        let valMonth, finalDate
        let str = value.toString();
        let getDay = str.substring(0,2);
        const date =new Date();
        const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
        let month = months[date.getMonth()];
        finalDate =   `${getDay} ${months[date.getMonth() + 1]} ${date.getFullYear()}`
        if(Number(date.getMonth() + 1) === 12){
                valMonth = Number(date.getMonth() - 12)
                month = months[valMonth]
                finalDate =   `${getDay} ${month} ${date.getFullYear()}`
        }
        return(
                        finalDate
        )
}
    useEffect(()=>{
        fetch('https://fitafhouse-api.herokuapp.com/api/active-investors')
        .then(async res=>{
            let response = await res.json()
            console.log(response)
            setValue(response.investors)
        })
    },[])
        return(
            <>
                      <div className="dashboard-wrapper">
                              <AdminHarmbugger />
                            <AdminNav />
                            <div className="menu-wrapper">
                                            <div className="logout-div">
                                                    <p ><span onClick={() => logout()}>Logout</span></p>
                                            </div>
                            <div className="investment">
                                    <table>
                                        <thead>
                                            <th>S/N</th>
                                            <th>Full Name</th>
                                            <th>Active Plan</th>
                                            <th>Start Date</th>
                                            <th>End Date</th>
                                            <th>Next Payment</th>
                                        </thead>
                                        <tbody>

                                                {value.map((detail, id)=>{
                                                            return(
                                                            <tr>
                                                                <td>{id + 1}</td>
                                                                <td key={id}>{detail.fullname}</td>
                                                                <td key={id}>{detail.investment.map((val)=>{
                                                                    return(
                                                                        <>
                                                                            {val.plan}( N{new Number(val.amount).toLocaleString('en-US', {minimumFractionDigits: 0})} )<br/>
                                                                        </>
                                                                    )
                                                                })}</td>
                                                                <td key={id}>{detail.investment.map((val)=>{
                                                                                  return(
                                                                                      <>
                                                                                        {val.created_at}
                                                                                        </>
                                                                                  )
                                                                })}</td>
                                                                <td key={id}>{detail.investment.map((val)=>{
                                                                                    return(
                                                                                        <>
                                                                                        {val.dueDate}
                                                                                        </>
                                                                                    )
                                                                })}</td>
                                                                <td key={id}>{detail.investment.map((val)=>{
                                                                            return(
                                                                                <>
                                                                                        {revealDuration(val.dueDate)}
                                                                                </>
                                                                            )
                                                                })}</td>
                                                        </tr>
                                                            )
                                                })}


                                        </tbody>
                                    </table>
                                   </div>

                                 <div style={{width: '100%', textAlign:'center'}}><br/>
                                 <span style={{marginTop: '20px', backgroundColor: '#0263aa', color: 'white', padding: '10px', cursor: 'pointer'}}>Download Investors (.pdf)</span>
                                 </div>
                    </div>
                        </div>
            </>
        )
}
export default Investors;