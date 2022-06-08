/* eslint-disable */
import React, { useState, useEffect } from "react";
import Nav from "../Components/Dashboard/nav";
import HarmbuggerNav from "../Components/Dashboard/harmbugger-nav";
import Profile from "../Components/Dashboard/profile";
import { useNavigate } from "react-router-dom";
import axios from 'axios';
import api from '../config';
let url = api.url

const ProfilePage = () => {
  const navigate = useNavigate();
  const [fullname, setFullname] = useState("");
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [phonenumber, setPhoneNumber] = useState("");
  const [bank, setBank] = useState("");
  const [accountnumber, setAccountNumber] = useState("");
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
        console.log(res.data.data);
        setFullname(res.data.data.fullname);
        setEmail(res.data.data.email);
        setPhoneNumber(res.data.data.phonenumber);
        setUsername(res.data.data.username);
        setBank(res.data.data.bank);
        setAccountNumber(res.data.data.accountnumber);
        setId(res.data.data._id);
      });
  }, [fullname])
  return (
    <>
      <div className="dashboard-wrapper">
        <HarmbuggerNav />
        <Nav />
        <Profile
          fullname={fullname}
          username={username}
          bank={bank}
          accountnumber={accountnumber}
          email={email}
          id={id}
          phonenumber={phonenumber}
        />
      </div>
    </>
  );
};

export default ProfilePage;
