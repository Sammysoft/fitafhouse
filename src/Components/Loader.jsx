import React from "react";

const Loader = () => {
  return (
    <>
      <div className="loader-wrapper">
        <img
          src="/images/loading.gif"
          width={"100%"}
          height={"80%"}
          style={{ margin: "auto" }}
          alt="Loader..."
        />
      </div>
    </>
  );
};

export default Loader;
