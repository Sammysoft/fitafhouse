import React from "react";
import { NavLink } from "react-router-dom";
import { useLocation } from "react-router";

const AdminNav = (props) => {
  const thisRoute = useLocation().pathname;
  return (
    <>
      <div className="nav-wrapper">
        <div className="nav-content-wrapper">
          <div className="brand-icon-wrapper">
            <img
              src="/images/logo.png"
              alt="brand-logo"
              width="50px"
              height="50px"
            />
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
              Overview
            </NavLink>
          </span>
          <span className="icon-nav">
            <NavLink
              to="/investors"
              style={
                thisRoute === "/investors"
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
              Investments
            </NavLink>
          </span>
          <span className="icon-nav">
            <NavLink
              to="/users"
              style={
                thisRoute === "/users"
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
              Users
            </NavLink>
          </span>
          <span className="icon-nav">
            <NavLink
              to="/support"
              style={
                thisRoute === "/support"
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
        </div>
      </div>
    </>
  );
};

export default AdminNav;
