import React, { useEffect, useState } from "react";
import AdminNav from "./adminnav";



const Users=()=>{
    const [value, setValue] = useState([]);

useEffect(()=>{
    fetch('https://fitafhouse-api.herokuapp.com/api/users')
    .then(async res=>{
        let response = await res.json()
        setValue(response.Investors)
        console.log(response.Investors)
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
                                        <th>Email</th>
                                        <th>Phone</th>
                                        <th>Account Number</th>
                                        <th>Bank</th>
                                    </thead>
                                    <tbody>

                                            {value.map((detail, id)=>{
                                                        return(
                                                        <tr>
                                                            <td>{id + 1}</td>
                                                            <td key={id}>{detail.fullname}</td>
                                                            <td key={id}>{detail.email}</td>
                                                            <td key={id}>{detail.phonenumber}</td>
                                                            <td key={id}>{detail.accountNumber}</td>
                                                            <td key={id}>{detail.bank}</td>
                                                    </tr>
                                                        )
                                            })}


                                    </tbody>
                                </table>
                               </div>

                             <div style={{width: '100%', textAlign:'center'}}>
                             <span style={{marginTop: '20px', backgroundColor: '#0263aa', color: 'white', padding: '10px', cursor: 'pointer'}}>Download Users (.pdf)</span>
                             </div>
                </div>
                    </div>
        </>
    )
}

export default Users;