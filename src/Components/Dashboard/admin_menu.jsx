import axios from "axios";
import React, { useEffect, useState } from "react";
import Swal from 'sweetalert2';

const AdminMenu = (props)=>{



    const [investors, setInvestors] = useState([])
        const remove=(id)=>{
            let token = localStorage.getItem('token');
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
                    axios.post(`https://fitafhouse-api.herokuapp.com/api/delete/${id}`, {
                        headers: {
                            Authorization: token
                        }
                    }).then(async(res)=>{
                        const response = await res.json()
                        Swal.fire(
                            {
                              title:'Deleted!',
                              text: response.msg,
                              icon: 'success'
                            }
                            )
                    })

                }
              })
        }
    useEffect(()=>{
                fetch('http://localhost:6069/api/investors')
                .then(async res=>{
                        const response = await res.json();
                        console.log(response)
                            setInvestors(response.investors)
                })
    },[])
    return(
        <>
         <div className="menu-wrapper">
         <div className="inner-menu">
             <h6>Hello @{props.fullname}</h6>
             <div style={{ display: "flex", justifyContent: 'space-around', alignItems: 'flex-start', padding: '10px'}}><span style={{flex: '3'}}><h3>List of All Investors</h3></span>
                <span style={{flex:'1', display: 'flex', flexDirection: 'row'}}><input style={{padding: '5px', margin: '2px', border: '1px solid grey'}}type="text" placeholder="Search"  /> <svg xmlns="http://www.w3.org/2000/svg" style={{color: 'grey'}} width="25" height="30" fill="currentColor" class="bi bi-search" viewBox="0 0 16 16">
  <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"/>
</svg></span>
             </div>
                        <table>
                        <th><h5>Full Names</h5></th>
                        <th><h5>Usernames</h5></th>
                        <th><h5>Investment Plan</h5></th>
                        <th><h5>Email Address</h5></th>
                        <th><h5>Phone </h5></th>
                        <th><h5>Remove</h5></th>
             {investors.map((investor)=><>
                        <tr>
                            <td>{investor.fullname}</td>
                            <td>@{investor.username}</td>
                            <td>{investor.investment.map((plan)=><>
                                       {'#' + plan.amount + ' @'} {plan.plan} <br/>
                            </>)}</td>
                            <td><i class="bi bi-envelope"></i> {investor.email}</td>
                            <td><i class="bi bi-telephone-forward-fill"></i> {investor.phonenumber}</td>
                            <td><button onClick={() => remove(investor._id)} style={{color: '#FFFFFF',backgroundColor: 'red', border: 'none', borderRadius:'5px'}}>Disable</button></td>
                        </tr>
             </>)}
             </table>
            </div>
         </div>
        </>
    )
}

export default AdminMenu;