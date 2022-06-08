// eslint-disable
import React, { useState, useEffect } from "react";
import Nav from "../Components/Dashboard/nav";
import HarmbuggerNav from "../Components/Dashboard/harmbugger-nav";
import Support from "../Components/Dashboard/support";
import axios from "axios";
import api from "../config";
let url = api.url;

const SupportPage = () => {
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [id, setId] = useState("");
  useEffect(() => {
    const token = localStorage.getItem("token");
    axios
      .get(`${url}/api/dashboard`, {
        headers: {
          Authorization: token,
        },
      })
      .then((res) => {
        setEmail(res.data.data.email);
        setUsername(res.data.data.username);
        setId(res.data.data._id);
      });
  }, []);
  return (
    <>
      <div className="dashboard-wrapper">
        <HarmbuggerNav />
        <Nav />
        <Support username={username} email={email} id={id} />
      </div>
    </>
  );
};

export default SupportPage;
