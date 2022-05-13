import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import { NavLink } from "react-router-dom";
import Swal from "sweetalert2";
import api from "../../config";
const url = api.url;

const Menu = (props) => {
  const [notification, setNotification] = useState();
  console.log(props.id);
  const navigate = useNavigate();
  const logout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("loginCounter")
    navigate("/auth");
    Swal.fire({
      icon: "info",
      title: "Logged Out",
      text: "Thanks for Using FITAFHOUSE!",
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

  useEffect(() => {
    fetch(`${url}/api/notifications/${props.id}`).then(async (res) => {
      let response = await res.json();
      console.log(response);
      setNotification(response.notification);
    });
  }, []);

  const notify = () => {
    Swal.fire({
      title: "Notifications",
      text: notification,
    });
  };

  return (
    <>
      {props.investment.length == 0 ? (
        <div className="menu-wrapper">
          <div className="logout-div">
            <p>
              <span onClick={() => logout()}>Logout</span>
            </p>
          </div>
          <div className="inner-menu">
            <br />
            No investments yet!
            <br />
            Step into our world of assured financing <br />
            <a
              href="/dashboard/investments"
              style={{
                textDecoration: "none",
                textDecorationLine: "none",
                textDecorationColor: "none",
              }}
            >
              <span className="btn-investment">Make An Investment</span>
            </a>
          </div>
        </div>
      ) : (
        <>
          <div className="menu-wrapper">
            <div className="logout-div">
              <p>
                <div style={{ float: "left", position: "relative" }}>
                  <i
                    className="bi bi-bell-fill"
                    onClick={() => {
                      notify();
                    }}
                    style={{ fontSize: "35px" }}
                  ></i>
                  <span
                    style={{
                      width: "24px",
                      height: "24px",
                      borderRadius: "50%",
                      backgroundColor: "red",
                      color: "white",
                      zIndex: "1",
                      position: "absolute",
                      right: "-2px",
                      top: "-2px",
                      textAlign: "center",
                      display: "flex",
                      justifyContent: "center",
                    }}
                  >
                    !
                  </span>
                </div>
                <span onClick={() => logout()}>Logout</span>
              </p>
            </div>

            {props.approved === true ? (
              <div className="investment">
                <div className="investment-info1">
                  <p className="info-desc">Active Investment Plan</p>
                  <div className="investment-wrapper">
                    <div className="active-investment">
                      {props.investment.map((info, key) => (
                        <>
                          <span
                            style={{ color: "grey", fontWeight: "800" }}
                            key={info._id}
                          >
                            {info.plan}
                          </span>
                          <br />
                          <span
                            style={{
                              color: "grey",
                              fontWeight: "900",
                              fontSize: "2.0rem",
                            }}
                            key={info._id}
                          >
                            N
                            {new Number(info.amount).toLocaleString("en-US", {
                              minimumFractionDigits: 0,
                            })}
                          </span>
                          <br />
                          <span
                            style={{
                              color: "#0263aa",
                              fontWeight: "800",
                              textTransform: "uppercase",
                            }}
                          >
                            {info.created_at + " - " + info.dueDate}
                          </span>
                          <br />
                          <br />
                        </>
                      ))}
                    </div>
                    <div className="duration-investment"></div>
                  </div>
                </div>
                <div className="investment-info2">
                  <p className="info-desc">Time to ROI</p>
                  <div className="investment-wrapper">
                    <div className="active-investment">
                      {props.investment.map((info, key) => (
                        <>
                          <br />

                          <>
                            <span
                              style={{
                                color: "grey",
                                fontWeight: "900",
                                fontSize: "2.5rem",
                              }}
                              key={info._id}
                            >
                              {daysToROI(info.dueDate) + " Days"}
                            </span>
                            <br />
                            <span
                              style={{
                                color: "#0263aa",
                                fontWeight: "800",
                                textTransform: "uppercase",
                              }}
                            >
                              {info.dueDate}
                            </span>
                          </>
                        </>
                      ))}
                    </div>
                    <div className="duration-investment"></div>
                  </div>
                </div>
              </div>
            ) : (
              <>
                <div className="investment">
                  <div className="investment-info1">
                    <p className="info-desc">Active Investment Plan</p>
                    <div className="investment-wrapper">
                      <div className="active-investment">
                        <span
                          style={{
                            color: "grey",
                            fontWeight: "900",
                            fontSize: "2.5rem",
                            textAlign: "center",
                          }}
                        >
                          Awaiting Approval
                        </span>
                        <br />
                        <span
                          style={{
                            color: "#0263aa",
                            fontWeight: "800",
                            // textTransform: "lowercase",
                            textAlign: "center",
                          }}
                        >
                          Your payment is awaiting approval by FITAFHOUSE
                          Management Board<br></br>
                          you will see your payment information here once the
                          verification is complete, within 24 hours
                          <br />
                          Thank you for choosing FITAFHOUSE.
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </>
            )}
          </div>
        </>
      )}
    </>
  );
};

export default Menu;
