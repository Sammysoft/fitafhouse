import React from "react";

const Horizon = () => {
  return (
    <>
      <div
        className="horizon"
        style={{
          width: "100%",
          minHeight: "70vh",
          height: "fit-content",
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
          fontFamily: "Ubuntu",
          padding: "15px 30px",
          backgroundColor: "#E4ECF2",
        }}
      >
        <div className="value value1" style={{ width: "50%", padding: "5%" }}>
          <img
            src={"/images/logo.png"}
            alt="logo"
            height="400px"
            width="80%"
            className="img-center"
          />
        </div>
        <div className="value value2" style={{ width: "50%" }}>
          <div
            className="center"
            style={{ fontWeight: "700", fontSize: "2rem", color: "#0263aa", textTransform:"uppercase" }}
          >
            Horizons...
          </div>
          <p
            className="parag"
            style={{
              color: "#535353",
              opacity: 1,
              width: "70%",
              font: "normal normal normal 1rem Ubuntu",
              lineHeight: "2",
            }}
          >
            The future of our company is very bright because of our strategy of
            doing business. We are not biting more than we can chew. We have
            very competent hands handling all project appraisal and approval. We
            also have a minimal overhead and this has been one of our survival
            strategies over time. In addition, we present potential investors an
            option to acquire our shares or place funds with us for a period of
            time. Call on us on our various numbers or email us to find out
            more. Don’t forget we are there for you when you need our services
            concerning funding for your viable projects. Your investment is safe
            with us and returns on the investment is assured.
          </p>
        </div>
      </div>
    </>
  );
};

export default Horizon;
