import React from "react";
import { useNavigate } from "react-router";
import { NavLink } from "react-router-dom";
import Swal from 'sweetalert2';

const Menu = (props)=>{
        console.log(props.investment)
        const navigate = useNavigate();
        const logout=()=>{
                localStorage.removeItem('token');
                navigate('/auth')
                Swal.fire({
                    icon: 'info',
                    title:'Logged Out',
                    text: 'Thanks for Using FITAFHouse!'
                })
        }

        const daysToNextROI = (value)=>{
                const date = new Date;
                let currentDay = date.getDate()
                let str = value.toString();
                let getDay = str.substring(0,2);
                const lastDay = new Date(date.getFullYear(), date.getMonth() + 1, 0);
                let lastDayOfTheCurrentMonth = lastDay.getDate()
                let remainingDay =  Number(lastDayOfTheCurrentMonth) - Number(currentDay)
                if(remainingDay < 0){
                        return(
                                Number(currentDay - Number(getDay))
                        )
                }else{
                        return(
                                Number(remainingDay) + Number(getDay)
                )
                }

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
                                                                <p ><span onClick={() => logout()}>Logout</span></p>
                                                        </div>
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
                                <p className="info-desc">Time to next ROI</p>
                                <div className="investment-wrapper">

                                        <div className="active-investment">
                                        {props.investment.map((info, key)=><>
                                        <br/>
                                                        <span style={{color: 'grey', fontWeight: '900', fontSize: '2.5rem'}} key={info._id}>
                                                                {daysToNextROI(info.dueDate) + ' Days' }
                                                        </span><br/>
                                                        <span style={{color: '#0263aa', fontWeight: '800', textTransform: 'uppercase'}}>{revealDuration(info.created_at)}</span>

                                              </>)}
                                        </div>
                                        <div className="duration-investment">

                                        </div>
                                </div>
                                </div>
                                 </div>
                </div>
               </>



        }


        </>
    )
}

export default Menu;