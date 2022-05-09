import React from "react";

const ErrorPage = () => {
  return (
    <>
      <div style={{ height: "100vh" }}>
        <div
          className="container"
          style={{
            fontFamily: "ubuntu",
            textAlign: "center",
            paddingTop: "40vh",
          }}
        >
          <p>
            <h3>Error 404</h3>
          </p>
          <p>
            <h6>Page Not Found</h6>
          </p>
        </div>
      </div>
    </>
  );
};
export default ErrorPage;
