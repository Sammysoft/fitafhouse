
/* eslint-disable */
import React from "react";
import { useNavigate } from "react-router";

const HarmbuggerNav = () => {
  return (
    <>
      <div className="harmbugger">
        <nav
          className="navbar navbar-expand-lg navbar-light"
          id="mainNav"
          style={{
            backgroundColor: "#f3f3f3",
            position: "absolute",
            width: "100vw",
          }}
        >
          <div className="container px-5">
            <a
              className="navbar-brand fw-bold"
              href="/home"
              style={{ color: "#008000", fontSize: "12px" }}
            >
              <img
                src="/images/logo.png"
                width={"40px"}
                height={"40px"}
                alt="brand-logo"
              />
              FITAFHOUSE
            </a>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarResponsive"
              aria-controls="navbarResponsive"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              Menu
              <i className="bi-list"></i>
            </button>
            <div className="collapse navbar-collapse" id="navbarResponsive">
              <ul className="navbar-nav ms-auto me-4 my-3 my-lg-0">
                <li className="nav-item">
                  <a
                    className="nav-link me-lg-3"
                    href="/dashboard"
                    style={{ padding: "20px", fontFamily: "ubuntu" }}
                  >
                    Dashboard
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className="nav-link me-lg-3"
                    href="/dashboard/investments"
                    style={{ padding: "20px", fontFamily: "ubuntu" }}
                  >
                    Investments
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className="nav-link me-lg-3"
                    href="/dashboard/profile"
                    style={{ padding: "20px", fontFamily: "ubuntu" }}
                  >
                    Profile
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className="nav-link me-lg-3"
                    href="/dashboard/support"
                    style={{ padding: "20px", fontFamily: "ubuntu" }}
                  >
                    Support
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    </>
  );
};

export default HarmbuggerNav;
