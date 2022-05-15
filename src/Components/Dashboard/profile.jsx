import React, { useState, useEffect } from "react";
import axios from "axios";
import api from "../../config";
import Swal from "sweetalert2";
import { useNavigate } from "react-router";
let url = api.url;

const Profile = ({
  fullname,
  username,
  phonenumber,
  accountnumber,
  bank,
  email,
  id,
}) => {
  const navigate = useNavigate();
  const [updatedfullname, setFullname] = useState(fullname);
  const [updatedemail, setEmail] = useState(email);
  const [updatedusername, setUsername] = useState(username);
  const [updatedphonenumber, setPhoneNumber] = useState(phonenumber);
  const [updatedbank, setBank] = useState(bank);
  const [updatedaccountnumber, setAccountNumber] = useState(accountnumber);
  const [oldpassword, setPassword] = useState(null);
  const [firstpassword, setFirstPassword] = useState(null);
  const [secondpassword, setSecondPassword] = useState(null);

  useEffect(() => {
    setFullname(fullname);
    setEmail(email);
    setUsername(username);
    setPhoneNumber(phonenumber);
    setBank(bank);
    setAccountNumber(accountnumber);
  }, [fullname, phonenumber, email, username, bank, accountnumber]);

  const _updateProfile = (e) => {
    if (
      oldpassword != null &&
      firstpassword != null &&
      firstpassword == secondpassword
    ) {
      e.preventDefault();
      const payload = {
        accountnumber: updatedaccountnumber,
        oldpassword: oldpassword,
        password: firstpassword,
        email: updatedemail,
        fullname: updatedfullname,
        phonenumber: updatedphonenumber,
        bank: updatedbank,
        username: updatedusername,
      };
      const uniqueID = id;

      axios
        .post(`${url}/api/profile/${uniqueID}`, payload)
        .then((res) => {
          Swal.fire({
            text: res.data.msg,
            title: "Updated!",
            icon: "success",
          });
        })
        .catch((error) => {
          Swal.fire({
            icon: "warning",
            text: error.response.data.msg,
            title: "Oops!",
          });
        });
    } else if (
      firstpassword == null &&
      secondpassword == null &&
      oldpassword == null
    ) {
      e.preventDefault();
      const payload = {
        accountnumber: updatedaccountnumber,
        email: updatedemail,
        fullname: updatedfullname,
        phonenumber: updatedphonenumber,
        bank: updatedbank,
        username: updatedusername,
      };
      const uniqueID = id;

      axios
        .post(`${url}/api/profile/${uniqueID}`, payload)
        .then((res) => {
          Swal.fire({
            text: res.data.msg,
            title: "Updated Successfully!",
            icon: "success",
          });
        })
        .catch((error) => {
          Swal.fire({
            icon: "warning",
            text: error.response.data.msg,
            title: "Oops!",
          });
        });
    } else if (firstpassword != secondpassword) {
      Swal.fire({
        icon: "warning",
        text: "Passwords do not match",
        title: "Password Mismatch",
      });
    } else if (
      firstpassword == null &&
      secondpassword == null &&
      oldpassword != null
    ) {
      Swal.fire({
        icon: "warning",
        text: "Please Provide New Passwords",
        title: "Incomplete Fields",
      });
    }
  };

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

  return (
    <>
      <div className="menu-wrapper">
        <div className="logout-div">
          <p>
            <span onClick={() => logout()}>Logout</span>
          </p>
        </div>
        <div style={{ alignItems: "center", textAlign: "center" }}>
          <div className="form-wrap">
            <form
              style={{
                display: "grid",
                gridTemplateColumns: "auto auto",
                padding: "0px 10px 0px 10px",
              }}
            >
              <label style={{ textAlign: "left" }}>Fullname: </label>
              <input
                type="text"
                name="fullname"
                value={updatedfullname}
                onChange={(event) => setFullname(event.target.value)}
                placeholder="Full Name"
              />

              <label style={{ textAlign: "left" }}>Email: </label>
              <input
                type="email"
                name="email"
                value={updatedemail}
                onChange={(event) => setEmail(event.target.value)}
                placeholder="Email Address"
              />

              <label style={{ textAlign: "left" }}>Username: </label>
              <input
                type="text"
                name="username"
                value={updatedusername}
                onChange={(event) => setUsername(event.target.value)}
                placeholder="Username"
              />

              <label style={{ textAlign: "left" }}>Phone Number: </label>
              <input
                type="text"
                name="phonenumber"
                value={updatedphonenumber}
                onChange={(event) => setPhoneNumber(event.target.value)}
                placeholder="Phone Number"
              />

              <label style={{ textAlign: "left" }}>Account Number: </label>
              <input
                type="text"
                name="accountnumber"
                value={updatedaccountnumber}
                onChange={(event) => setAccountNumber(event.target.value)}
                placeholder="Account Number"
              />

              <label style={{ textAlign: "left" }}>Bank: </label>
              <input
                type="text"
                name="bank"
                value={updatedbank}
                onChange={(event) => setBank(event.target.value)}
                placeholder="Bank Name"
              />

              <label style={{ textAlign: "left" }}>Old Password: </label>
              <input
                type="password"
                name="password"
                value={oldpassword}
                onChange={(event) => setPassword(event.target.value)}
                placeholder="Old Password"
              />

              <label style={{ textAlign: "left" }}>Password: </label>
              <input
                type="password"
                name="bank"
                value={firstpassword}
                onChange={(event) => setFirstPassword(event.target.value)}
                placeholder="Password"
              />

              <label style={{ textAlign: "left" }}>Confirm Password: </label>
              <input
                type="password"
                name="bank"
                value={secondpassword}
                onChange={(event) => setSecondPassword(event.target.value)}
                placeholder="Confirm Password"
              />
            </form>
            <div className="btn-signin-wrapper">
              <button
                onClick={(e) => _updateProfile(e)}
                type="submit"
                className="btn-signin"
              >
                Update
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Profile;
