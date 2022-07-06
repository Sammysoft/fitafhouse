import React from "react";
import HeaderImg from "./HeaderImg3";

const Header3 = () => {
  return (
    <>
      <header
        className="masthead3"
        style={{
          width: "100%",
          height: "auto",
          margin: "auto",
          padding: "10px",
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
              <h1 className="header-welcome">
                Get in Touch -<br />{" "}
                <span style={{ color: "#0263aa" }} className="fitaf">
                  FITAF
                </span>
                <span style={{ color: "#6bbe43" }} className="house">
                  HOUSE
                </span>
              </h1>
              <br />
              <br />
              <p className="lead fw-normal text-muted mb-5">
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
