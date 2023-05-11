import React from "react";
import HeaderImg from "./HeaderImg3";

const Header3 = () => {
  return (
    <>
      <header
        // className="masthead3"
        style={{
          width: "100%",
          height: "70vh",
          margin: "auto",
          padding: "10px",
          backgroundImage: `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.6)),url("/images/phone.jpg")`,
          backgroundRepeat: "no-repeat",
          backgroundPosition: "cover",
          backgroundSize: "120%",
        }}
      >
        <div
          className="align-items-center"
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <div style={{ flex: "1" }}>
            <div
              data-aos-duration="3000"
              data-aos="fade-right"
              className="header-content"
              style={{ padding: "20%" }}
            >
              <h1 style={{color:"white"}}>
                Get in Touch -<br />{" "}
                <span style={{ color: "white" }} className="fitaf">
                  FITAF
                </span>
                <span style={{ color: "white" }} className="house">
                  HOUSE
                </span>
              </h1>
              <br />
              <br />
              <p style={{color:"white"}}>
                Your home for comprehensive, <br />
                all-round trade and financing.
              </p>

              <div className="fitaf-wrapp">
                <span
                  id="fitaf-full"
                  style={{
                    fontSize: "12px",
                    fontWeight: "200",
                    fontFamily: "Montserrat",
                    color:"white"
                  }}
                >
                  FIRST INTERNATIONAL TRADE AND FINANCE HOUSE LIMITED
                </span>
              </div>
            </div>
          </div>
          <HeaderImg />
        </div>
      </header>
    </>
  );
};
export default Header3;
