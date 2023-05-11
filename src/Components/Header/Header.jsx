import React from "react";
// import HeaderImg from "./HeaderImg";
import AOS from "aos";
import { Link } from "react-router-dom";
import "aos/dist/aos.css";

const Header = () => {
  AOS.init();
  return (
    <>
      <header
        style={{
          width: "100%",
          height: "90vh",
          margin: "auto",
          padding: "10px",
          backgroundImage: `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.6)),url("/images/head-img.jpg")`,
          backgroundRepeat: "no-repeat",
          backgroundPosition: "cover",
          backgroundSize: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <div style={{ paddingTop: "20vh" }}>
          <div
            style={{
              color: "white",
              fontWeight: 700,
              fontSize: "2rem",
              fontFamily: "Montserrat",
            }}
          >
            Welcome to First International Trade and Finance House Limited
          </div>
          <div
            style={{
              color: "white",
              fontWeight: 400,
              fontSize: "1rem",
              fontFamily: "Montserrat",
              textAlign: "center",
            }}
          >
            Your home for comprehensive, all - round trade and financing.
          </div>
        </div>

        <div
          style={{
            width: "100vw",
            textAlign: "center",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent:"center"
          }}
        >
          <div style={{ width: "15%" }}>
            <button
              style={{
                backgroundColor: "#0263aa",
                color: "white",
                padding: "5% 10% ",
                border: "none",
                width: "100%",
              }}
            >
              <span>
                <Link
                  style={{
                    textDecoration: "none",
                    textDecorationLine: "none",
                    color: "white",
                  }}
                  to="/ourcompany"
                >
                  {" "}
                  <span
                    id="btn"
                    style={{ fontSize: "14px", fontFamily: "Montserrat" }}
                  >
                    {" "}
                    Learn More
                  </span>
                </Link>
              </span>
            </button>
          </div>
          <div style={{fontFamily:"Montserrat", opacity: .5, textAlign:"center", width:"100%", marginTop:"20vh", color:"#A2A2A2"}}>
          FIRST INTERNATIONAL TRADE AND FINANCE HOUSE LIMITED.
          </div>
        </div>
        {/* <div
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <div style={{ flex: "1" }}>
            <div
              data-aos="fade-right"
              data-aos-duration="3000"
              className="header-content"
              style={{ padding: "20%" }}
            >
              <h1 className="header-welcome">
                Welcome to
                <br />{" "}
                <span className="fitaf" style={{ color: "#0263aa" }}>
                  FITAF
                </span>
                <span className="house" style={{ color: "#6bbe43" }}>
                  HOUSE
                </span>
              </h1>
              <br />
              <br />
              <p className="lead fw-normal text-muted">
                Your home for comprehensive, <br />
                all-round trade and financing.
              </p>
              <div className="d-flex flex-column flex-lg-row align-items-center">
                <button
                  style={{
                    backgroundColor: "#0263aa",
                    color: "white",
                    padding: "3% 15% ",
                    border: "none",
                  }}
                >
                  <span className="d-flex align-items-center">
                    <Link
                      style={{
                        textDecoration: "none",
                        textDecorationLine: "none",
                        color: "white",
                      }}
                      to="/ourcompany"
                    >
                      {" "}
                      <span
                        id="btn"
                        style={{ fontSize: "14px", fontFamily: "Montserrat" }}
                      >
                        {" "}
                        Learn More
                      </span>
                    </Link>
                  </span>
                </button>
              </div>
              <div className="fitaf-wrapp">
                <span
                  id="fitaf-full"
                  style={{
                    fontSize: "12px",
                    fontWeight: "200",
                    fontFamily: "Montserrat",
                  }}
                >
                  FIRST INTERNATIONAL TRADE AND FINANCE HOUSE LIMITED
                </span>
              </div>
            </div>
          </div>
        </div> */}
      </header>
    </>
  );
};
export default Header;
