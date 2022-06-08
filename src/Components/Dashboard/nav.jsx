/* eslint-disable */

import React from "react";
import { useLocation, useNavigate } from "react-router";
import Swal from "sweetalert2";
import { NavLink } from "react-router-dom";

const Nav = (props) => {
  const navigate = useNavigate();
  const logout = () => {
    localStorage.removeItem("token");
    navigate("/auth");
    Swal.fire({
      icon: "info",
      title: "Logged Out",
      text: "Thanks for Using FITAFHouse!",
    });
  };

  const thisRoute = useLocation().pathname;
  return (
    <>
      <div className="nav-wrapper">
        <div className="nav-content-wrapper">
          <div className="brand-icon-wrapper">
            <NavLink to="/home">
              <img
                src="/images/logo.png"
                alt="brand-logo"
                width="50px"
                height="50px"
              />
            </NavLink>
            <span
              style={{
                padding: "20px 0px 10px 15px",
                color: "#0263aa",
                fontWeight: "900",
              }}
            >
              FITAFHOUSE
            </span>
          </div>
          <span className="icon-nav">
            <NavLink
              to="/dashboard"
              activeClassName="active"
              style={
                thisRoute === "/dashboard"
                  ? {
                      color: "#0263aa",
                      textDecoration: "none",
                      textDecorationLine: "none",
                      fontWeight: "700",
                    }
                  : {
                      color: "#808080",
                      textDecoration: "none",
                      textDecorationLine: "none",
                      fontWeight: "500",
                    }
              }
            >
              Dashboard
            </NavLink>
          </span>
          <span className="icon-nav">
            <NavLink
              to="/dashboard/investments"
              style={
                thisRoute === "/dashboard/investments"
                  ? {
                      color: "#0263aa",
                      textDecoration: "none",
                      textDecorationLine: "none",
                      fontWeight: "700",
                    }
                  : {
                      color: "#808080",
                      textDecoration: "none",
                      textDecorationLine: "none",
                      fontWeight: "500",
                    }
              }
            >
              Investment
            </NavLink>
          </span>
          <span className="icon-nav">
            <NavLink
              to="/dashboard/profile"
              style={
                thisRoute === "/dashboard/profile"
                  ? {
                      color: "#0263aa",
                      textDecoration: "none",
                      textDecorationLine: "none",
                      fontWeight: "700",
                    }
                  : {
                      color: "#808080",
                      textDecoration: "none",
                      textDecorationLine: "none",
                      fontWeight: "500",
                    }
              }
            >
              Profile
            </NavLink>
          </span>
          <span className="icon-nav">
            <NavLink
              to="/dashboard/support"
              style={
                thisRoute === "/dashboard/support"
                  ? {
                      color: "#0263aa",
                      textDecoration: "none",
                      textDecorationLine: "none",
                      fontWeight: "700",
                    }
                  : {
                      color: "#808080",
                      textDecoration: "none",
                      textDecorationLine: "none",
                      fontWeight: "500",
                    }
              }
            >
              Support
            </NavLink>
          </span>
          <span className="icon-nav">
            <a className="nav-dash-link" href="" onClick={() => logout()}>
              Logout
            </a>
          </span>
        </div>
      </div>
    </>
  );
};

export default Nav;
