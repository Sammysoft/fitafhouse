import React, { useState, useEffect } from "react";
import axios from "axios";
import api from "../../../config";
import Swal from "sweetalert2";
import { useNavigate } from "react-router";
let url = api.url;

const SupportMenu = () => {
  const navigate = useNavigate();
  const [messages, setMessages] = useState([]);
  useEffect(() => {
    axios
      .get(`${url}/api/support/`)
      .then((res) => {
        console.log(res);
        setMessages(res.data.data);
      })
      .catch((error) => {
        Swal.fire({
          icon: "error",
          text: error.response.data.msg,
          title: "Oops!",
        });
      });
  }, []);

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
        <div>
          {messages[0] == null ? (
            <>
              <div style={{ textAlign: "center" }}>Nothing Here Yet</div>
            </>
          ) : (
            <>
              {messages.map((value) => {
                return (
                  <>
                    <div
                      style={{
                        margin: "20px",
                        padding: "5px",
                        backgroundColor: "white",
                      }}
                    >
                      <div
                        style={{
                          textAlign: "left",
                          width: "100%",
                          height: "fit-content",
                        }}
                      >
                        <span style={{ fontWeight: "600", fontSize: "1.5rem" }}>
                          {" "}
                          @{value.username}
                        </span>
                        <br />
                        {value.email}
                      </div>
                      <div
                        style={{
                          textAlign: "left",
                          height: "fit-content",
                          maxHeight: "fit-content",
                          padding: "10px",
                        }}
                      >
                        <blockquote
                          style={{
                            backgroundColor: "#f2f2f2",
                            borderRadius: "5px",
                            padding: "10px",
                            fontWeight: "200",
                            borderLeft: "2px solid black"
                          }}
                        >
                          <q>
                            <i>{value.message}</i>
                          </q>
                        </blockquote>
                      </div>
                    </div>
                  </>
                );
              })}
            </>
          )}
        </div>
      </div>
    </>
  );
};
export default SupportMenu;
