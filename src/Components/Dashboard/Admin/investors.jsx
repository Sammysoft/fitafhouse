import React, { useState, useEffect } from "react";
import AdminNav from "./adminnav";
import { css } from "@emotion/react";
import Swal from "sweetalert2";
import PulseLoader from "react-spinners/PulseLoader";
import Unauthorized from "../../unauthorized";
import { useNavigate } from "react-router";
import AdminHarmbugger from "./admin-harmuggernav";
import axios from "axios";
import api from "../../../config";
const url = api.url;

const Investors = () => {
  const [investors, setInvestors] = useState([]);
  const [loading, setLoading] = useState(false);
  const [role, setRole] = useState("");
  const Navigate = useNavigate();
  const override = css`
    display: block;
    z-index: 9999;
    margin: auto;
    width: 100%;
    height: 100%;
    position: absolute;
  `;

  const sendNotification = (id) => {
    Swal.fire({
      title: "Send Notification",
      text: "Enter your mesage body",
      input: "text",
      content: "input",
      button: {
        text: "Done",
        closeModal: false,
      },
    })
      .then((name) => {
        const message = name.value;
        if (!name) throw null;

        axios.post(`${url}/api/notifications/${id}`, {
          message,
        });
      })
      .then(() => {
        Swal.fire({
          title: "Success",
          text: "Notification has been sent",
          icon: "success",
        });
      });
  };

  const approveInvestment = (id) => {
    console.log(id);
    setLoading(true);
    axios.post(`${url}/api/approve/${id}`).then(() => {
      window.location.reload(false).then(() => {
        Swal.fire({
          icon: "success",
          text: "Investment is now Approved!",
          title: "Approved",
        });
      });
    });
    setLoading(false);
  };

  const logout = () => {
    localStorage.removeItem("token");
    Navigate("/auth");
    Swal.fire({
      icon: "info",
      title: "Logged Out",
      text: "Thanks for using FITAFHouse",
    });
  };

  const daysToROI = (value) => {
    const date = new Date();
    let currentDay = date.getTime();
    const remainingDay = Math.floor(
      new Date(value).getTime() / (1000 * 3600 * 24) -
        currentDay / (1000 * 3600 * 24)
    );
    if (remainingDay < 0) {
      return "Payment is Due";
    } else {
      return remainingDay;
    }
  };

  const deleteInvestor = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        axios.post(`${url}/api/delete/${id}`).then(() => {
          window.location.reload(false).then(() => {
            Swal.fire({
              icon: "success",
              text: "Investment is now Approved!",
              title: "Deleted",
            });
          });
        });
      }
    });
  };
  useEffect(() => {
    setLoading(true);
    const token = localStorage.getItem("token");
    fetch(`${url}/api/dashboard`, {
      headers: {
        Authorization: token,
      },
    }).then(async (res) => {
      let response = await res.json();
      console.log(response.data);
      setRole(response.data.role);
      setLoading(false);
    });
    fetch(`${url}/api/active-investors`).then(async (res) => {
      let response = await res.json();
      console.log(response.investors);
      setInvestors(response.investors);
      setLoading(false);
    });
  }, []);
  return (
    <>
      {role == "Investor" ? (
        <>
          <Unauthorized />
        </>
      ) : (
        <>
          {investors.length == 0 ? (
            <>
              <div className="dashboard-wrapper">
                <AdminHarmbugger />
                <AdminNav />
                <div className="menu-wrapper">
                  <div className="logout-div">
                    <p>
                      <span onClick={() => logout()}>Logout</span>
                    </p>
                  </div>
                  <div>
                    <div className="menu-wrapper">
                      <div className="investment-wrapper">
                        <div className="inner-menu">No Investors Yet!</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </>
          ) : (
            <>
              <div className="dashboard-wrapper">
                <AdminHarmbugger />
                <AdminNav />
                <div className="menu-wrapper">
                  <div className="logout-div">
                    <p>
                      <span onClick={() => logout()}>Logout</span>
                    </p>
                  </div>
                  <div>
                    <div className="invest-card-wrapper">
                      {loading ? (
                        <PulseLoader
                          size={30}
                          margin={2}
                          css={override}
                          loading={loading}
                          color="#2377DA"
                        />
                      ) : (
                        <>
                          {investors.map((info, id) => {
                            return (
                              <>
                                <div className="wrap-invest">
                                  <div className="invest-card">
                                    <div className="invest-card-head">
                                      <span style={{ width: "40%" }}>
                                        @{info.investor.username}
                                      </span>
                                      <span
                                        style={{
                                          width: "20%",
                                          cursor: "pointer",
                                          float: "right",
                                        }}
                                      >
                                        <i
                                          className="bi bi-chat-left-text-fill"
                                          onClick={() => {
                                            sendNotification(info.investor.id);
                                          }}
                                        ></i>
                                      </span>
                                    </div>
                                    <div>
                                      <span>{info.investor.fullname}</span>
                                      <br />

                                      <span>{info.investor.phonenumber}</span>
                                      <br />

                                      <span>{info.investor.email}</span>
                                      <br />
                                    </div>
                                    {info.investments.isActive != true ? (
                                      <>
                                        <div>
                                          <span
                                            style={{
                                              color: "grey",
                                              fontWeight: "700",
                                              fontSize: "1rem",
                                            }}
                                          ></span>
                                        </div>

                                        <div>
                                          <span
                                            style={{
                                              color: "#0263aa",
                                              fontWeight: "700",
                                              fontSize: "1rem",
                                            }}
                                          >
                                            {info.investments.created_at}
                                          </span>
                                        </div>
                                        <div>
                                          <span
                                            style={{
                                              color: "grey",
                                              fontWeight: "700",
                                              fontSize: "2rem",
                                            }}
                                          >
                                            {"N" +
                                              info.investments.amount.toLocaleString(
                                                "en-US",
                                                {
                                                  minimumFractionDigits: 0,
                                                }
                                              )}
                                          </span>
                                        </div>
                                      </>
                                    ) : (
                                      <>
                                                  <div>
                                          <span
                                            style={{
                                              color: "#0263aa",
                                              fontWeight: "700",
                                              fontSize: "1rem",
                                            }}
                                          >
                                            {info.investments.created_at}
                                          </span>
                                        </div>
                                        <div>
                                          <span
                                            style={{
                                              color: "grey",
                                              fontWeight: "700",
                                              fontSize: "2rem",
                                            }}
                                          >
                                            {"N" +
                                              info.investments.amount.toLocaleString(
                                                "en-US",
                                                {
                                                  minimumFractionDigits: 0,
                                                }
                                              )}
                                          </span>
                                        </div>
                                        <div>
                                          <span
                                            style={{
                                              color: "#0263aa",
                                              fontWeight: "700",
                                              fontSize: "1rem",
                                            }}
                                          >
                                            {info.investments.dueDate}
                                          </span>
                                        </div>
                                        <div>
                                          <span
                                            style={{
                                              color: "grey",
                                              fontWeight: "700",
                                              fontSize: "2rem",
                                            }}
                                          >
                                            N
                                            {new Number(
                                              (info.investments.amount * 10) /
                                                100 +
                                                Number(info.investments.amount)
                                            ).toLocaleString("en-US", {
                                              minimumFractionDigits: 0,
                                            })}
                                          </span>
                                        </div>
                                        <div>
                                          <span
                                            style={{
                                              color: "grey",
                                              fontWeight: "700",
                                              fontSize: "2rem",
                                            }}
                                          >
                                            {daysToROI(
                                              info.investments.dueDate
                                            ) + " Days"}
                                          </span>
                                        </div>
                                      </>
                                    )}

                                    <div className="invest-card-base">
                                      <span style={{ width: "70%" }}>
                                        {info.investments.isActive != true ? (
                                          <span
                                            style={{
                                              cursor: "pointer",
                                              padding: "5px",
                                              border: "1px solid #0263aa",
                                              borderRadius: "5px",
                                            }}
                                            onClick={() => {
                                              approveInvestment(info._id);
                                            }}
                                          >
                                            Approve
                                          </span>
                                        ) : (
                                          <>
                                            <i
                                              className="bi bi-check2-all"
                                              style={{
                                                color: "#6bbe43",
                                                fontSize: "50px",
                                              }}
                                            ></i>
                                          </>
                                        )}
                                      </span>
                                      <span style={{ width: "30%" }}>
                                        <span
                                          style={{
                                            color: "red",
                                            padding: "5px",
                                            border: "1px solid red",
                                            margin: "5px",
                                            borderRadius: "5px",
                                            cursor: "pointer",
                                          }}
                                          onClick={() => {
                                            deleteInvestor(info._id);
                                          }}
                                        >
                                          Delete
                                        </span>
                                      </span>
                                    </div>
                                  </div>
                                </div>
                              </>
                            );
                          })}
                        </>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </>
          )}
        </>
      )}
    </>
  );
};
export default Investors;
