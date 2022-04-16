import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import { NavLink } from "react-router-dom";
import Swal from 'sweetalert2';

const Menu = (props)=>{
        const [notification, setNotification] = useState();
        console.log(props.id)
        const navigate = useNavigate();
        const logout=()=>{
                localStorage.removeItem('token');
                navigate('/auth')
                Swal.fire({
                    icon: 'info',
                    title:'Logged Out',
                    text: 'Thanks for Using FITAFHOUSE!'
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

        useEffect(()=>{
                fetch(`http://localhost:6069/api/notifications/${props.id}`)
                        .then(async res=>{
                                let response = await res.json();
                                console.log(response)
                                setNotification(response.notification)
                        })
        },[])

        const notify = ()=>{
                Swal.fire({
                        title:'Notifications',
                        text: notification
                })
        }

        // const revealAmount =(value)=>{

        //         return(
        //                         finalDate
        //         )
        // }

    return(

        <>
           {
      props.investment.length == 0 ?

        <div className="menu-wrapper">
                        <div className="logout-div">
                                <p ><span onClick={() => logout()}>Logout</span></p>
                        </div>
                      <div className="inner-menu">
                       <br/>
                       No investments yet!<br/>
                       Make an investment with us and get good offer! <br/>
                        <NavLink to="/dashboard/investments"><span className="btn-investment">View Investment Plans</span></NavLink>
               </div>
        </div>  :

               <>

               <div className="menu-wrapper">
                                                        <div className="logout-div">
                                                                <p ><div style={{float: 'left', position:"relative"}}><i className="bi bi-bell-fill" onClick={()=>{notify()}} style={{fontSize: "35px"}}></i><span style={{width: '24px', height: "24px", borderRadius: "50%", backgroundColor: "red", color: "white",zIndex:"9999", position: "absolute", right:"-2px", top:"-2px", textAlign:"center", display: "flex", justifyContent:"center"}}>!</span></div><span onClick={() => logout()}>Logout</span></p>
                                                        </div>

                                {props.approved === true ?
                                <div className="investment">
                                        <div className="investment-info1">
                                        <p className="info-desc">Active Investment Plan</p>
                                        <div className="investment-wrapper">

                                        <div className="active-investment">
                                              {props.investment.map((info, key)=><>
                                                        <span style={{color: 'grey', fontWeight: '800'}} key={info._id}>
                                                                {info.plan}
                                                        </span><br/>
                                                <span style={{color: 'grey', fontWeight: '900', fontSize: '2.0rem'}} key={info._id}>
                                                                N{new Number(info.amount).toLocaleString('en-US', {minimumFractionDigits: 0})}
                                                        </span><br/>
                                                        <span style={{color: '#0263aa', fontWeight: '800', textTransform: 'uppercase'}}>{info.created_at  +' - ' + info.dueDate}</span><br/><br/>
                                              </>)}
                                        </div>
                                        <div className="duration-investment">

                                        </div>
                                </div>
                                 </div>
                                 <div className="investment-info2">
                                <p className="info-desc">Time to ROI</p>
                                <div className="investment-wrapper">

                                        <div className="active-investment">
                                        {props.investment.map((info, key)=><>
                                        <br/>

                                                               <>
                                                                                <span style={{color: 'grey', fontWeight: '900', fontSize: '2.5rem'}} key={info._id}>
                                                                                {daysToROI(info.dueDate) + ' Days' }
                                                                                </span><br/>
                                                                                <span style={{color: '#0263aa', fontWeight: '800', textTransform: 'uppercase'}}>{info.dueDate}</span>
                                                               </>


                                              </>)}
                                        </div>
                                        <div className="duration-investment">

                                        </div>
                                </div>
                                </div>
                                 </div>
                                 :
                                                               <>

                                <div className="investment">
                                        <div className="investment-info1">
                                        <p className="info-desc">Active Investment Plan</p>
                                        <div className="investment-wrapper">

                                        <div className="active-investment">
                                                                        <span style={{color: 'grey', fontWeight: '900', fontSize: '2.5rem'}} >Awaiting approval</span><br/>
                                                                        <span style={{color: '#0263aa', fontWeight: '800', textTransform: 'lowercase'}}>
                                                                                Your application is undergoing review
                                                                        </span>
                                                </div>
                                                </div>
                                                </div>
                                                </div>
                                                               </>

                                                }
                </div>
               </>



        }


        </>
    )
}

export default Menu;