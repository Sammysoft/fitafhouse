/* eslint-disable */
import React from "react";
import { Link } from "react-router-dom";

const Features = () => {
  return (
    <>
      <section className="bg-light">
        <div className="container px-5" id="features">
          <div className="row gx-5 align-items-center justify-content-center justify-content-lg-between">
            <div className="col-sm-8 col-md-6">
              <div data-aos="fade-up" data-aos-duration="3000" className="">
                <img
                  src="/images/info.jpg"
                  width="100%"
                  height="100%"
                  alt="..."
                />
              </div>
            </div>
            <div
              data-aos="fade-up"
              data-aos-duration="3000"
              className="col-12 col-lg-5"
              style={{ fontSize: "10px", fontFamily: "Montserrat" }}
            >
              <span style={{ fontWeight: "bolder", fontSize: "40px" }}>
                Investment With <br />
                <span
                  style={{
                    color: "#0263aa",
                    fontWeight: "bolder",
                    fontSize: "px",
                  }}
                >
                  FITAF
                </span>
                <span style={{ color: "#6bbe43", fontWeight: "bolder" }}>
                  HOUSE
                </span>
              </span><br/><br/>
              <p style={{ fontFamily: "Montserrat", fontSize: "15px", lineHeight:"1.5" }}>
                International trade business involves large sum of money
                expecially now that we have global challenges with the value of
                our currencies It's on this note that we humbly ask for your
                investment in this company. Your massive investment in this
                company will give us opportunity to enjoy Economies of Scale.
                What that means is that the cost of our operation will go down
                with corresponding increase in our profit. That means more
                returns will be made available to all investors at the end of
                the financial year
              </p><br/><br/>
              <button
                style={{
                  backgroundColor: "#0263aa",
                  color: "white",
                  padding: "3% 15%",
                  border: "none",
                }}
              >
                <span className="d-flex align-items-center">
                  <Link
                    style={{
                      color: "black",
                      textDecoration: "none",
                      textDecorationLine: "none",
                      color: "white",
                    }}
                    to="/onboarding"
                  >
                    {" "}
                    <span style={{ fontSize: "14px", fontFamily: "Montserrat" }}>
                      {" "}
                      Learn More
                    </span>
                  </Link>
                </span>
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Features;
