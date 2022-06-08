/* eslint-disable */

import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { css } from "@emotion/react";
import Swal from "sweetalert2";
import PulseLoader from "react-spinners/PulseLoader";
import api from "../../config";
import { Link, useSearchParams } from "react-router-dom";
const url = api.url;

const InvestmentMenu = () => {
  const location = useLocation();
  const [searchParams] = useSearchParams();
  const [user, setUser] = useState("");
  const [username, setUserName] = useState("");
  const [amount, setAmount] = useState("");
  const [phonenumber, setUserPhoneNumber] = useState("");
  const [email, setUserEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [investment, setInvestments] = useState([])
  // const Navigate = useNavigate();
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



  const token = localStorage.getItem("token");

  useEffect(() => {
    fetch(`${url}/api/dashboard`, {
      headers: {
        Authorization: token,
      },
    }).then(async (res) => {
      let response = await res.json();
      console.log(response.data);
      setUser(response.data._id);
      setUserEmail(response.data.email);
      setUserPhoneNumber(response.data.phonenumber);
      setUserName(response.data.fullname);
      setLoading(false);
      const status = searchParams.get("status");
      const val = {
        amount: searchParams.get("amount"),
        email: searchParams.get("email"),
        phonenumber: searchParams.get("phonenumber"),
        investmentDuration: searchParams.get('duration'),
        plan: searchParams.get("plan"),
        rate: searchParams.get("rate"),
        username: response.data.fullname,
        investorID: response.data._id
      }
      console.log(status);
      if (status ===  "successful") {
        setLoading(false);
        axios.post(`${url}/api/invest/${response.data._id}`, val).then(() => {
          Swal.fire({
            title: `${val.plan} plan`,
            text: `You have made a placement for ${val.plan}
                                                    investment of N${val.amount} for
                                                     ${val.investmentDuration} Months you will recieve
                                                     ${val.rate} at the end of the period, Thank You for using FITAFHOUSE!`,
            icon: "success",
          })
          }).catch(error =>{
            console.log(error)
            Swal.fire({
              icon: "error",
              title:"Oops!",
              text: error.response.data.msg
            })
        });
    } else if (status ==="cancelled") {
        Swal.fire({
          icon: "warning",
          title: "Cancelled",
          text: "Your request may have been cancelled, due to issues with your bank account",
        });
      }
    });
  }, []);

  useEffect(()=>{
    fetch(`${url}/api/investments/${user}`).then(async (res) => {
      const response = await res.json()
      console.log(response.result);
      setInvestments(response.result.filter(el => el.investments.isActive == false));
    });
  }, [user])



  const initiateInvestment = (val) => {
    console.log(val);
    Swal.fire({
      title: `N${val.amount}, ${val.plan} plan `,
      showDenyButton: true,
      showCancelButton: true,
      confirmButtonText: "Proceed",
      denyButtonText: `Don't Proceed`,
    }).then((result) => {
      if (result.isConfirmed) {
        setLoading(true);
        axios
          .post(`${url}/api/payments`, val)
          .then((res) => {
            const raveLink = res.data.data.data.link;
            window.location.replace(raveLink)
          })
          .catch((error) => {
            setLoading(false);
            console.log(error.response);
            Swal.fire({
              icon: "error",
              text: error.response.data.msg,
              title: "Sorry",
            });
          });
      } else if (result.isDenied) {
        Swal.fire("Request has been cancelled!", "", "info");
      }
    });
  };

  const day = new Date().getDay();
  const month = new Date().getMonth();

  return (
    <>
      {loading == true ? (
        <PulseLoader
          size={30}
          margin={2}
          css={override}
          loading={loading}
          color="#2377DA"
        />
      ) : (
        <>
          {investment.length == 0 ? (

            <div className="menu-wrapper">
              <div className="investment">
                <div className="investment-info1">
                  <br />
                  <div className="investment-wrapper">
                    <span>
                      <div
                        style={{
                          color: "#0263aa",
                          textAlign: "center",
                          marginBottom: "50px",
                        }}
                      >
                        Make Your Investment
                      </div>
                      <div style={{ textAlign: "center" }}>
                        <img
                          src="/images/money.jpg"
                          alt="money"
                          height="100px"
                          width="100px"
                        />
                      </div>
                      <p style={{ textAlign: "center" }}>
                        Enter the amount you wish to invest
                      </p>
                      <span
                        style={{
                          display: "flex",
                          justifyContent: "space-between",
                          alignItems: "center",
                        }}
                      >
                        <input
                          type="text"
                          name="amount"
                          placeholder="NGN"
                          value={amount}
                          onChange={(event) => setAmount(event.target.value)}
                        />
                      </span>
                    </span>
                    <div style={{ marginTop: "30px", width: "100%" }}>
                      <div
                        style={{
                          padding: "5px",
                          color: "white",
                          borderRadius: "5px",
                          backgroundColor: "#0263aa",
                          textAlign: "center",
                          width: "100%",
                        }}
                        onClick={() => {
                          initiateInvestment({
                            amount,
                            plan: "Yearly",
                            investmentDuration: 12,
                            rate: "10% per annum",
                            phonenumber,
                            email,
                            username,
                          });
                        }}
                      >
                        Proceed To Checkout!
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
) : (
            <div className="menu-wrapper">
              <div className="investment-wrapper">
                <div className="inner-menu">
                  Sorry, You have a pending approval.<br/> Wait for your investments to be approved
                  <br />
                  <Link
                    style={{
                      textDecoration: "none",
                      textDecorationLine: "none",
                      color: "white",
                    }}
                    to="/dashboard"
                  >
                    <span className="btn-investment">Investment Status!</span>
                  </Link>
                </div>
              </div>
            </div>
          )}
        </>
      )}
    </>
  );
};

export default InvestmentMenu;
