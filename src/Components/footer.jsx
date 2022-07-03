/* eslint-disable */
import React from "react";
import { Link } from 'react-router-dom';


const Footer = () => {
  return (
    <>
      <footer className="footer py-4" style={{ backgroundColor: "black" }}>
        <div
          className="container"
          style={{ display: "flex", flexDirection: "column", color: "white" }}
        >
          <div className="row align-items-center">
            <div
              className="col-lg-4 my-3 my-lg-0"
              style={{ flex: "1", padding: "20px", textAlign: "center" }}
            >
              <a style={{margin:"15px"}} href="https://twitter.com/FitafhouseL" target="_blank">

                <img src={"/images/twitter.png"} alt="twitter" height="30px" width="30px"/>
              </a>
              <a style={{margin:"15px"}} href="https://instagram.com/fitafhouse_limited/" target="_blank">
              <img src={"/images/instagram.png"} alt="instagram" height="30px" width="30px"/>
              </a>
              <a style={{margin:"15px"}} href="https://web.facebook.com/fitafhouse1/?ref=page_internal" target="_blank">
              <img src={"/images/facebook.png"} alt="facebook" height="30px" width="30px"/>
              </a>
              <a style={{margin:"15px"}} href="https://www.linkedin.com/in/fitafhouse-limited-1a9135240/" target="_blank">
              <img src={"/images/linkedIn.png"} alt="linkedIn" height="50px" width="50px"/>
              </a>
            </div>
          </div>
          <div
            className="nav-menu"
            style={{ display: "inline-block", flex: "1", textAlign: "center" }}
          >
            <ul
              style={{
                listStyle: "none",
                display: "inline-block",
                cursor: "pointer",
              }}
            >
              <li
                style={{
                  display: "inline-block",
                  padding: "20px",
                  fontFamily: "ubuntu",
                }}
              >
                <Link
                  to="/ourcompany"
                  style={{
                    textDecoration: "none",
                    textDecorationLine: "none",
                    color: "white",
                  }}
                >
                  {" "}
                  About
                </Link>
              </li>
              <li
                style={{
                  display: "inline-block",
                  padding: "20px",
                  fontFamily: "ubuntu",
                }}
              >
                <Link
                  to="/contact"
                  style={{
                    textDecoration: "none",
                    textDecorationLine: "none",
                    color: "white",
                  }}
                >
                  {" "}
                  Contact Us
                </Link>
              </li>
              <li
                style={{
                  display: "inline-block",
                  padding: "20px",
                  fontFamily: "ubuntu",
                }}
              >
                <Link
                  to="/onboarding"
                  style={{
                    textDecoration: "none",
                    textDecorationLine: "none",
                    color: "white",
                  }}
                >
                  Invest With Us
                </Link>
              </li>
            </ul>
          </div>
          <div
            className=""
            style={{
              flex: "1",
              padding: "20px",
              textAlign: "center",
              fontFamily: "ubuntu",
            }}
          >
            Copyright &copy; FIRST INTERNATIONAL TRADE AND FINANCE HOUSE LIMITED
          </div>
        </div>
      </footer>

    </>
  );
};

export default Footer;
