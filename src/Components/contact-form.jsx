import React, { useState, useEffect } from "react";
import axios from "axios";
import Swal from "sweetalert2";
import api from "../config";
let url = api.url;

const ContactForm = ({ id, username, email }) => {
  const [message, setMessage] = useState("");

  const _sendMessage = (e) => {
    const payload = {
      username,
      email,
      message
    };

    axios
      .post(`${url}/api/support/`, payload)
      .then((res) => {
        console.log(res.data)
        Swal.fire({
          icon: "success",
          text: res.data.msg,
          title: "Message Sent!",
        });
      })
      .catch((error) => {
        Swal.fire({
          icon: "error",
          title: "Something Went Wrong!",
          text: error.response.data.msg,
        });
      });
  };
  return (
    <>
      <div id="form" className="contact-form-wrapper">
        <form>
          <input
            id="input"
            type="text"
            name="fullname"
            value={`@${username}`}
            placeholder="FullName"
            onChange={(e) => setUsername(e.target.value)}
          />
          <br />
          <input
            id="input"
            type="text"
            name="email"
            value={email}
            placeholder="Email"
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
          <br />
          <textarea
            id="input"
            name="message"
            placeholder="Enter Your Message"
            value={message}
            onChange={(e) => {
              setMessage(e.target.value);
            }}
          ></textarea>
        </form>

        <span
          className="send-msg"
          onClick={(e) => {
            _sendMessage(e);
          }}
        >
          Send us a message
        </span>
      </div>
    </>
  );
};
export default ContactForm;
