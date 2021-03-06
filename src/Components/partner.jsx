import React from "react";

const Partner = () => {
  return (
    <>
      <div className="partner-wrapper">
        <div className="flex-wrapper">
          <h2
            data-aos="fade-in-right"
            data-aos-duration="3000"
            className="text-white"
          >
            Step into our world of 21st
            <br />
            century financing.
          </h2>
          <br />
          <br />
          <a
            data-aos="flip-down"
            data-aos-duration="3000"
            className="btn btn-outline-light py-3 px-4"
            href="/contact#form"
            target="_blank"
            style={{ fontFamily: "Montserrat" }}
          >
            Become Our partner
          </a>
        </div>
      </div>
    </>
  );
};
export default Partner;
