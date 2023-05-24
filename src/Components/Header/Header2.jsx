import React from "react";
import HeaderImg from "./HeaderImg2";

const Header2 = () => {
  return (
    <>
      <header
        className="mast"
        style={{
          width: "100%",
          margin: "auto",
          padding: "10px",
          backgroundImage: `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.6)),url("/images/bar.jpg")`,
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          backgroundSize: "100%",
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
              data-aos="fade-right"
              data-aos-duration="3000"
              className="header-content"
              style={{ padding: "20%" }}
            >
              <h1 style={{color:"white"}}>
                Our Company,
                <br />{" "}
                <span style={{ color: "white" }} className="fitaf">
                  FITAF
                </span>
                <span className="house" style={{ color: "white" }}>
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
export default Header2;
