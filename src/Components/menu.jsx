import React from "react";
import { Link } from "react-router-dom";

const Menu = () => {
  return (
    <>
      <section id="download">
        <div className="row" style={{ padding: "10%", fontSize: "13px" }}>
          <div className="col-md-3 mb-5">
            <div
              data-aos="fade-up"
              data-aos-duration="500"
              data-aos-anchor-placement="top-bottom"
              className="text-center"
              style={{
                borderTop: "5px solid #6bbe43",
                borderBottom: "5px solid #6bbe43",
                height: "auto",
                width: "auto",
                padding: "20px",
                boxShadow: "0px 5px 5px 0px #888888",
              }}
            >
              <i className="bi bi-file-earmark-text-fill icon-feature text-gradient d-block mb-3"></i>
              <h3 className="font-alt">Administration</h3>
              <p className="text-muted mb-0">
                This section is in charge of legal, insurance, recruitment,
                promotion, discipline, training, advertisement, audit and
                relevant issues
              </p>
            </div>
          </div>
          <div className="col-md-3 mb-5">
            <div
              data-aos="fade-up"
              data-aos-duration="1000"
              data-aos-anchor-placement="top-bottom"
              className="text-center"
              style={{
                borderTop: "5px solid #6bbe43",
                borderBottom: "5px solid #6bbe43",
                height: "auto",
                padding: "20px",
                boxShadow: "0px 5px 5px 0px #888888",
              }}
            >
              <i className="bi bi-bag-fill icon-feature text-gradient d-block mb-3"></i>
              <h3 className="font-alt">Business</h3>
              <p className="text-muted mb-0">
                Here, we determine the viability of a business, project or
                investment. Our credible team of experts perform all appraisals
                for the viable project
              </p>
            </div>
          </div>
          <div className="col-md-3">
            <div
              data-aos="fade-up"
              data-aos-duration="2000"
              data-aos-anchor-placement="top-bottom"
              className="text-center"
              style={{
                borderTop: "5px solid #6bbe43",
                borderBottom: "5px solid #6bbe43",
                height: "auto",
                padding: "20px",
                boxShadow: "0px 5px 5px 0px #888888",
              }}
            >
              <i className="bi bi-bag-fill icon-feature text-gradient d-block mb-3"></i>
              <h3 className="font-alt">Finance</h3>
              <p className="text-muted mb-0">
                This section performs all sourcing of funds for viable projects,
                mainly through the instrumentality of equity financing, debt
                financing and grant processing
              </p>
            </div>
          </div>
          <div className="col-md-3">
            <div
              data-aos="fade-up"
              data-aos-duration="3000"
              data-aos-anchor-placement="top-bottom"
              className="text-center"
              style={{
                borderTop: "5px solid #6bbe43",
                borderBottom: "5px solid #6bbe43",
                height: "auto",
                padding: "20px",
                boxShadow: "0px 5px 5px 0px #888888",
              }}
            >
              <i className="bi bi-ui-checks-grid icon-feature text-gradient d-block mb-3"></i>
              <h3 className="font-alt">Operation</h3>
              <p className="text-muted mb-0">
                Here we put our relevant skills to execute the project with
                precision. Our credible team of experts also supervise the
                execution of the project
              </p>
            </div>
          </div>
          <div className="row">
            <div
              className="wrap"
              style={{ textAlign: "center", width: "center" }}
            >
              <div style={{ alignItems: "center" }}>
                <button
                  style={{
                    backgroundColor: "#0263aa",
                    color: "white",
                    padding: "2% 5% 2% 5%",
                    border: "none",
                    float: "center",
                    padding: "10px 30px 10px 30px",
                  }}
                >
                  <span className="align-items-center">
                    <Link
                      style={{
                        textDecoration: "none",
                        textDecorationLine: "none",
                        color: "white",
                      }}
                      to="/ourcompany"
                    >
                      <span
                        style={{
                          fontSize: "12px",
                          textAlign: "center",
                          width: "100%",
                        }}
                      >
                        {" "}
                        Learn More
                      </span>
                    </Link>
                  </span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Menu;
