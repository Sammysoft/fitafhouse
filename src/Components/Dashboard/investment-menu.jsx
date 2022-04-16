import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router';
import { css } from "@emotion/react";
import Swal from 'sweetalert2';
import PulseLoader from 'react-spinners/PulseLoader';



const InvestmentMenu = ()=>{
        const [user, setUser ] = useState('');
        const [amount, setAmount] = useState("");
        const [loading, setLoading] = useState(true)
        const Navigate = useNavigate();
        const override = css`
                        display: block;
                        z-index: 9999;
                        padding-top: 50vh;
                        margin: auto;
                        padding-left: 40vw;
                        background: white;
                        width: 100%;
                        height: 100%;
                        position: absolute;
                        `;

        const token = localStorage.getItem('token')

        useEffect(()=>{
                fetch('http://localhost:6069/api/dashboard', {
                        headers: {
                                Authorization: token
                        }
                }).then(async res=>{
                        let response = await res.json()
                        setUser(response.data._id)
                        setLoading(false)
                })
        },[])

const initiateInvestment=(val)=>{
        console.log(val)
        Swal.fire({
                title: `N${val.amount}, ${val.plan} plan `,
                showDenyButton: true,
                showCancelButton: true,
                confirmButtonText: 'Continue',
                denyButtonText: `Don't Continue`,
              }).then((result) => {
                if (result.isConfirmed) {
                        setLoading(true)
                        axios.post(`http://localhost:6069/api/invest/${user}`, val)
                        .then(()=>{
                                setLoading(false)
                                Swal.fire({
                                        title: `${val.plan} plan`,
                                        text: `You have made a placement for ${val.plan}
                                                  investment of N${val.amount} for
                                                   ${val.investmentDuration} Months you will recieve
                                                   ${val.rate} at the end of each month, Thank You for using FITAFHOUSE!`,
                                        icon: 'success'
                                })
                        }).catch((error)=>{
                                setLoading(false)
                                console.log(error.response)
                                // Navigate('/dashboard')
                                Swal.fire({
                                        icon: 'error',
                                        text: error.response.data.msg,
                                        title: 'Sorry'
                                })
                        })

                } else if (result.isDenied) {
                  Swal.fire('Request has been cancelled!', '', 'info')
                }
              })

}



    return(
        <>
                {loading?
                 <PulseLoader
                 size={30}
                 margin={2}
                 css={override}
                 loading={loading}
                 color="#2377DA"
                 />

                 :

                 <div className="menu-wrapper">

                                 <div className="investment">

                                     <div className="investment-info1" >

                                     <br/>
                                     <div className="investment-wrapper">

                                          <span>
                                          <div style={{color: "#0263aa", textAlign: "center", marginBottom: "50px"}}>Make Your Investment</div>
                                          NGN<input type="text" name="amount" placeholder='Enter the amount you wish to invest' value={amount} onChange={event=>setAmount(event.target.value)} />
                                          </span>
                                          <div style={{marginTop: "30px", width: "100%"}}>
                                          <span style={{padding: "5px", color: "white", borderRadius: "5px", backgroundColor: "#0263aa", textAlign: "center", width: "50%"}} onClick={()=>{initiateInvestment({amount, plan:"Yearly", investmentDuration: 12, rate: "10% per annum"})}}>Ok</span>
                                          </div>
                                    </div>
                                     </div>
                                 </div>

                 </div>
                     }
        </>
    )
}

export default InvestmentMenu;