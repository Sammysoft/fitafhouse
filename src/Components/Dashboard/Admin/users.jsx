import React, { useEffect, useState } from "react";
import AdminNav from "./adminnav";
import Swal from "sweetalert2";
import { useNavigate } from "react-router";
import AdminHarmbugger from "./admin-harmuggernav";
import api from "../../../config";
import Unauthorized from "../../unauthorized";
const url = api.url;

const Users = () => {
  const [value, setValue] = useState([]);
  const [role, setRole] = useState("");
  const Navigate = useNavigate();
  const logout = () => {
    localStorage.removeItem("token");
    Navigate("/auth");
    Swal.fire({
      title: "Logged Out",
      icon: "info",
      text: "Thank You for using FITAFHOUSE",
    });
  };

  useEffect(() => {
    const token = localStorage.getItem("token");
    fetch(`${url}/api/dashboard`, {
      headers: {
        Authorization: token,
      },
    }).then(async (res) => {
      let response = await res.json();
      console.log(response.data);
      setRole(response.data.role);
    });
    fetch(`${url}/api/users`).then(async (res) => {
      let response = await res.json();
      setValue(response.Investors);
      console.log(response);
    });
  }, []);
  return (
    <>
      {role == "Investor" ? (
        <Unauthorized />
      ) : (
        <div className="dashboard-wrapper">
          <AdminHarmbugger />
          <AdminNav />
          <div className="menu-wrapper">
            <div className="logout-div">
              <p>
                <span onClick={() => logout()}>Logout</span>
              </p>
            </div>
            <div className="investment">
              <table>
                <thead>
                  <th>S/N</th>
                  <th>Full Name</th>
                  <th>Email</th>
                  <th>Phone</th>
                  <th>Account Number</th>
                  <th>Bank</th>
                </thead>
                <tbody>
                  {value.map((detail, id) => {
                    return (
                      <tr>
                        <td>{id + 1}</td>
                        <td key={id}>{detail.fullname}</td>
                        <td key={id}>{detail.email}</td>
                        <td key={id}>{detail.phonenumber}</td>
                        <td key={id}>{detail.accountnumber}</td>
                        <td key={id}>{detail.bank}</td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Users;
