import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import ContactForm from "../contact-form";

const Support = ({ id, username, email }) => {
  const navigate = useNavigate();
  const logout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("loginCounter");
    navigate("/auth");
    Swal.fire({
      icon: "info",
      title: "Logged Out",
      text: "Thanks for Using FITAFHOUSE!",
    });
  };

  useEffect(() => {}, []);
  return (
    <>
      <div className="menu-wrapper">
        <div className="logout-div">
          <p>
            <span onClick={() => logout()}>Logout</span>
          </p>
        </div>
        <div>
          <ContactForm
            id={id}
            username={username}
            email={email}
          />
        </div>
      </div>
    </>
  );
};
export default Support;
