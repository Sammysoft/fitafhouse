import React, { useState, useEffect } from "react";
import AdminNav from "./adminnav";

const Investors=()=>{
    const [value, setValue] = useState([])

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
                                                                <td></td>
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