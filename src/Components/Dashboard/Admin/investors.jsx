import React, { useState, useEffect } from "react";
import AdminNav from "./adminnav";
import { css } from "@emotion/react";
import Swal from 'sweetalert2';
import PulseLoader from 'react-spinners/PulseLoader';
import { useNavigate } from "react-router";
import AdminHarmbugger from "./admin-harmuggernav";
import axios from "axios";

const Investors=()=>{
    const [value, setValue] = useState([])
    const [loading, setLoading] = useState(false);
    const Navigate= useNavigate();
    const override = css`
    display: block;
    z-index: 9999;
    // padding-top: 50vh;
    margin: auto;
    // padding-left: 40vw;
    // background: white;
    width: 100%;
    height: 100%;
    position: absolute;
    `;

const sendNotification=(id)=>{
    Swal.fire({
        title: "Send Notification",
        text: 'Enter your mesage body',
        input: "text",
        content: "input",
        button: {
          text: "Done",
          closeModal: false,
        },
      })
      .then(name => {
          const message = name.value;
        if (!name) throw null;

        axios.post(`http://localhost:6069/api/notifications/${id}`,{
            message
        })
      })
      .then(() => {
        Swal.fire({
            title: "Success",
            text: "Notification has been sent",
            icon: "success"
        })
      })
}

    const approveInvestment=(id)=>{
        console.log(id)
        setLoading(true)
        axios.post(`http://localhost:6069/api/approve/${id}`)
            .then(()=>{
                Swal.fire({
                    icon: 'success',
                    text: 'Investment is now Approved!',
                    title: 'Approved'
                })
            })
            window.location.reload(false);
            setLoading(false)
    }

    const logout=()=>{
        localStorage.removeItem('token')
        Navigate('/auth')
        Swal.fire({
            icon: 'info',
            title: "Logged Out",
            text: 'Thanks for using FITAFHouse'
        })
    }

    const daysToROI = (value)=>{
        const date = new Date;
        let currentDay = date.getTime()
      const  remainingDay = Math.floor(new Date(value).getTime() / (1000 * 3600 * 24) - currentDay / (1000 * 3600 * 24))
        if(remainingDay < 0){
                return(
                        "Payment is Due"
                )
        }else{
                return(
                        remainingDay
        )
        }

}


const deleteInvestor = (id)=>{

    Swal.fire({
        title: 'Are you sure?',
        text: "You won't be able to revert this!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, delete it!'
      }).then((result) => {
        if (result.isConfirmed) {
            axios.post(`http://localhost:6069/api/delete/${id}`)
            .then(()=>{
                Swal.fire({
                    icon: 'success',
                    text: 'Investment is now Approved!',
                    title: 'Deleted'
                })
            })
        }
        window.location.reload(false);
      })



}
    useEffect(()=>{
        setLoading(true)
        fetch('http://localhost:6069/api/active-investors')
        .then(async res=>{
            let response = await res.json()
            console.log(response)
            setValue(response.investors)
            setLoading(false)
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
                            <div>

                                        <div className="invest-card-wrapper" >

                                            {loading?
                                            <PulseLoader
                                                    size={30}
                                                    margin={2}
                                                    css={override}
                                                    loading={loading}
                                                    color="#2377DA"
                                            /> :
                                                    <>
                                                    {value.map((info, id)=>{
                                                        return(
                                                            <>
                                                            <div className="wrap-invest">
                                                            <div className="invest-card">
                                                                    <div className="invest-card-head">
                                                                       <span style={{width: "40%"}}>
                                                                           @ {info.username}
                                                                       </span>
                                                                        <span style={{width: "20%", cursor: 'pointer'}}>
                                                                        <i className="bi bi-chat-left-text-fill" onClick={()=>{sendNotification(info._id)}}></i>
                                                                        </span>
                                                                    </div>
                                                                 <div>
                                                                    <span>
                                                                        {info.fullname}
                                                                    </span><br/>

                                                                    <span>
                                                                        {info.phonenumber}
                                                                    </span><br/>
                                                                </div>
                                                                {
                                                                    info.approved != true ?  <div><span style={{color: 'grey', fontWeight: '700', fontSize: "1.5rem"}}></span>
                                                                </div>
                                                                        :
                                                                 <div>
                                                                    <span style={{color: 'grey', fontWeight: '700', fontSize: "2rem"}}>
                                                                    {daysToROI(info.investment[0].dueDate) + ' Days' }
                                                                    </span>
                                                                </div>

                                                                }
                                                                <div>
                                                                    <span style={{color: 'grey', fontWeight: '700', fontSize: "1.5rem"}}>
                                                                       N{new Number(info.investment[0].amount * 10 / 100 + Number(info.investment[0].amount)).toLocaleString('en-US', {minimumFractionDigits: 0})}
                                                                    </span>
                                                                </div>
                                                                <div className="invest-card-base">
                                                                   <span style={{width: '70%'}}>
                                                                   {info.approved != true ? <span style={{cursor: "pointer", padding: "5px", border: "1px solid #0263aa", borderRadius: "5px"}} onClick={()=>{approveInvestment(info._id)}}>Approve</span> : <><i className="bi bi-check2-all" style={{color: '#6bbe43', fontSize: "50px"}}></i></>}
                                                                   </span>
                                                                   <span style={{width: "30%"}}>
                                                                   <span style={{color: 'red', padding: "5px", border: '1px solid red', margin:"5px", borderRadius: "5px", cursor: "pointer"}} onClick={()=>{deleteInvestor(info._id)}}>Delete</span>
                                                                   </span>
                                                                </div>
                                                              </div>
                                                            </div>
                                                            </>
                                                        )
                                                    })}

                                                    </>
                                                }
                                        </div>

















                                   </div>

                                 {/* <div style={{width: '100%', textAlign:'center'}}><br/>
                                 <span style={{marginTop: '20px', backgroundColor: '#0263aa', color: 'white', padding: '10px', cursor: 'pointer'}}>Download Investors (.pdf)</span>
                                 </div> */}
                    </div>
                        </div>
            </>
        )
}
export default Investors;