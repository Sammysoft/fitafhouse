import React, { useEffect, useState } from "react";
import { Form } from "semantic-ui-react";
import { Link } from "react-router-dom";
import axios from "axios";
import { css } from "@emotion/react";
import Swal from "sweetalert2";
import PulseLoader from "react-spinners/PulseLoader";
import { useNavigate } from "react-router";
import api from "../../config";
const url = api.url;

const SignInForm = () => {
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

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  let navigate = useNavigate();

  const submit = (e) => {
    e.preventDefault();
    setLoading(true);
    axios
      .post(`${url}/api/auth`, { username, password })
      .then((user) => {
        localStorage.setItem("token", user.data.token);
        setLoading(false);
        navigate("/dashboard");
      })
      .catch((error) => {
        setLoading(false);
        console.log(error);
        Swal.fire({
          title: "error",
          icon: "error",
          text: error.response.data.msg,
        });
      });
  };

  return (
    <>
      {loading ? (
        <PulseLoader
          size={30}
          margin={2}
          css={override}
          loading={loading}
          color="#2377DA"
        />
      ) : (
        <div className="form-wrap">
          <Form>
            <input
              type="text"
              name="username"
              value={username}
              onChange={(event) => setUsername(event.target.value)}
              placeholder="Username"
            />
            <br />
            <input
              type="password"
              name="password"
              value={password}
              onChange={(event) => setPassword(event.target.value)}
              placeholder="Password"
            />
            <div className="btn-signin-wrapper">
              <button onClick={submit} type="submit" className="btn-signin">
                Sign In
              </button>{" "}
              <Link
                to="/forgot-password"
                style={{
                  textDecorationColor: "none",
                  textDecorationLine: "none",
                }}
              >
                <span style={{ paddingLeft: "20px", color: "#2377DA" }}>
                  Forgot Password
                </span>
              </Link>
              <div style={{ padding: "10px 0px 0px 0px" }}>
                Don't have an account?{" "}
                <a className="link" href="/onboarding">
                  SIGN UP HERE!
                </a>
              </div>
            </div>
          </Form>
        </div>
      )}
    </>
  );
};

export default SignInForm;
