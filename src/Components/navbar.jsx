import React from "react";

const Navbar = () => {
  return (
    <>
      <nav
        className="navbar navbar-expand-lg navbar-light"
        id="mainNav"
        style={{
          backgroundColor: "#f3f3f3",
          position: "absolute",
          width: "100vw",
        }}
      >
        <div className="container px-5" style={{width:"87%", margin:"auto"}}>
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
                  href="/home"
                  style={{ padding: "20px", fontFamily: "ubuntu" }}
                >
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link me-lg-3"
                  href="/ourcompany"
                  style={{ padding: "20px", fontFamily: "ubuntu" }}
                >
                  Our Company
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link me-lg-3"
                  href="/onboarding"
                  style={{ padding: "20px", fontFamily: "ubuntu" }}
                >
                  Invest With Us
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link me-lg-3"
                  href="/contact"
                  style={{ padding: "20px", fontFamily: "ubuntu" }}
                >
                  Get In Touch
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
