import React from "react";

const About = () => {
  return (
    <>
      <div
        data-aos="fade-up"
        data-aos-duration="3000"
        style={{ fontFamily: "Ubuntu" }}
      >
        <div
          className="aboutfirst"
          style={{
            display: "flex",
            flexDirection: "row",
            gap: "2px",
            justifyContent: "center",
            alignItems: "left",
            width: "100%",
            height: "fit-content",
            minHeight: "70vh",
            margin: "auto",
          }}
        >
          <div
            className="value value2"
            style={{
              width: "50%",
              color: "black",
              backgroundColor: "#e4ecf2",
              paddingLeft: "10%",
              paddingRight: "7%",
              paddingTop: "5%",
              paddingBottom: "5%",
            }}
          >
            <div className="center" style={{textTransform:"uppercase"}}>
              <span
                style={{
                  fontWeight: "700",
                  fontSize: "1.5rem",
                  color: "#535353",
                }}
              >
                {" "}
                Our{" "}
              </span>
              <span
                style={{
                  color: "#0263aa",
                  fontSize: "2rem",
                  fontWeight: "700",
                  opacity: "100%",
                }}
              >
                Beginnings
              </span>
            </div>
            <br />
            <br></br>
            <p style={{ color: "#535353", opacity: 1 }}>
              First International Trade and Finance House Limited, also known as
              FITAFHOUSE, opened her door to the public for business in Nigeria
              on March 26th, 1984. The company started her operation in Benin
              City before relocating to Akure, Ondo State in 1993. Generally,
              Finance Companies in Nigeria witnessed crisis in the early 90s
              because of lack of understanding of the operation of the industry.
              For example, many finance company operators invested short term
              fund for long-term projects. Some also paid upfront interest for
              fund placement. 90% of finance companies in Nigeria during this
              crisis went under. Another crisis came late 2019 when COVID 19
              kept almost everyone at home. In real term, the economy of the
              nation plummeted and the situation was devastating which led us to
              venture into operating from behind closed doors. However, in spite
              of the crisis, FITAFHOUSE survived it without indebtedness to any
              of our customers. We are now located on our permanent head office
              at Ado Ekiti, Ekiti State.
            </p>
          </div>
          <div
            className="value value1"
            style={{
              width: "50%",
              color: "black",
              backgroundColor: "#dfe4e7",
              paddingLeft: "5%",
              paddingRight: "13%",
              paddingTop: "5%",
              paddingBottom: "5%",
            }}
          >
           <div className="center" style={{textTransform:"uppercase"}}>
           <span
              style={{
                fontWeight: "700",
                fontSize: "1.5rem",
                color: "#535353",
                opacity: "100%",
              }}
            >
              {" "}
              Business{" "}
            </span>
            <span
              style={{ color: "#0263aa", fontSize: "2rem", fontWeight: "700" }}
            >
              Package
            </span>
           </div>
            <br />
            <br></br>
            <p style={{ color: "#535353", opacity: 1 }}>
              Our business package is very clear. Shortly put, we decide whether
              or not to finance a project or investment after critical, thorough
              and professional appraisal and then mobilize funds for the
              qualified ones through the instrumentality of equity, debt and
              grant funding. We also go ahead to appoint credible officers to
              supervise the execution of the project, investment etc. The good
              thing about this approach is that it is secure and most of the
              time, error-free. Our door is opened to all and sundry to
              determine their project or investment’s viability. The assurance
              we have for any of our clients is that once a project or
              investment is viable according to our conditionalities, funding of
              the project is assured. Our association with our bank is very
              cordial. In fact, some of the projects are vetted by them and we
              get assistance from them when we knock at their door. This is the
              standard procedure of finance company operations in most developed
              countries of the world.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};
export default About;
