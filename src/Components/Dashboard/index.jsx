import React, { useEffect, useState } from "react";
import Menu from "./menu";
import Nav from "./nav";
import { css } from "@emotion/react";
import Swal from "sweetalert2";
import PulseLoader from "react-spinners/PulseLoader";
import { useNavigate } from "react-router";
import AdminDashboard from "./Admin/admin";
import HarmbuggerNav from "./harmbugger-nav";
import api from "../../config";
const url = api.url;

const Dashboard = (props) => {
  const [username, setUsername] = useState("");
  const [fullname, setFullname] = useState("");
  const [role, setRole] = useState("");
  const [id, setId] = useState("");
  const [loading, setLoading] = useState(false);
  let token = localStorage.getItem("token");
  let navigate = useNavigate();
  const override = css`
    display: block;
    z-index: 9999;
    padding-top: 50vh;
    margin: auto;
    padding-left: 40vw;
    background: white;
    width: 100%;
    height: 100%;
    position: absolute;
  `;

  useEffect(() => {
    setLoading(true);
    fetch(`${url}/api/dashboard`, {
      headers: {
        Authorization: token,
      },
    })
      .then(async (res) => {
        let response = await res.json();
        setUsername(response.data.username);
        setFullname(response.data.fullname);
        setId(response.data._id);
        setRole(response.data.role);
        setLoading(false);
        if (!response.data) {
          navigate("/auth");
          Swal.fire({
            icon: "warning",
            title: "Sorry.",
            text: "Please Login",
          });
        } else {
          if (!localStorage.getItem("loginCounter")) {
            localStorage.setItem("loginCounter", 0);
            console.log(response.data);
            Swal.fire({
              position: "top-end",
              icon: "success",
              title: `Logged In Successfully ${response.data.username}`,
              showConfirmButton: false,
              timer: 1500,
            });
          } else {
            return null
          }
        }
      })
      .catch((error) => {
        setLoading(false);
        navigate("/auth");
        Swal.fire({
          icon: "warning",
          title: "Sorry.",
          text: "Please Login",
        });
      });
  }, []);
  return (
    <>
      {role === "Admin" ? (
        loading ? (
          <PulseLoader
            size={30}
            margin={2}
            css={override}
            loading={loading}
            color="#2377DA"
          />
        ) : (
          <>
            <AdminDashboard name={username} fullname={fullname} />
          </>
        )
      ) : (
        <div>
          {loading ? (
            <PulseLoader
              size={30}
              margin={2}
              css={override}
              loading={loading}
              color="#2377DA"
            />
          ) : (
            <div className="dashboard-wrapper">
              <HarmbuggerNav />
              <Nav />
              <Menu
                name={username}
                fullname={fullname}
                id={id}
              />
            </div>
          )}
        </div>
      )}
    </>
  );
};

export default Dashboard;
