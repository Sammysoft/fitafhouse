import React from "react";

const ContactCard = () =>{
    return (
      <>
        <section>
          <div
            className="contact-card"
            style={{
              display: "flex",
              flexDirection: "row",
              padding: "0px 10%",
              width: "100%",
              justifyContent: "space-between",
            }}
          >
            <div
              data-aos="fade-up"
              data-aos-duration="1000"
              className="wrapper"
              style={{
                flex: 1,
                width: "30%",
                height: "auto",
                borderTop: "2px solid green",
                borderBottom: "2px solid green",
                boxShadow: "0px 5px 5px 0px #888888",
              }}
            >
              <div className="text-center">
                <i className="bi bi-geo-alt-fill icon-feature text-gradient d-block mb-3"></i>
                <h3 className="font-alt">Head Office</h3>
                <p className="texter mb-0">
                  FITAFHOUSE, 6 Tiamiyu Aborisade Crescent, Beside Assembly of
                  God Church, G.R.A Ado Ekiti, Ekiti State
                </p>
              </div>
            </div>

            <div
              data-aos="fade-up"
              data-aos-duration="1000"
              className="wrapper"
              style={{
                flex: 1,
                width: "30%",
                height: "auto",
                borderTop: "2px solid green",
                borderBottom: "2px solid green",
                boxShadow: "0px 5px 5px 0px #888888",
              }}
            >
              <div className="text-center">
                <i className="bi bi-telephone-outbound-fill icon-feature text-gradient d-block mb-3"></i>
                <h3 className="font-alt">Phone Lines</h3>
                <p className="texter mb-0">
                  +234 80 3666 2233 <br /> +234 81 1197 1117 <br /> +234 91 3030
                  0894 <br /> +234 80 7558 2842 <br /> +234 70 8544 3297
                </p>
              </div>
            </div>

            <div
              data-aos="fade-up"
              data-aos-duration="1000"
              className="wrapper"
              style={{
                flex: 1,
                width: "30%",
                height: "auto",
                borderTop: "2px solid green",
                borderBottom: "2px solid green",
                boxShadow: "0px 5px 5px 0px #888888",
              }}
            >
              <div className="text-center">
                <i className="bi bi-geo-alt-fill icon-feature text-gradient d-block mb-3"></i>
                <h3 className="font-alt">Email Addresses</h3>
                <p className="texter mb-0">
                   admin@fitafhouse.com <br /> fitafhouse@gmail.com <br />
                </p>
              </div>
            </div>
          </div>
        </section>
      </>
    );
}
export default ContactCard;