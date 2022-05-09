import React from "react";

const Footer = () => {
  return (
    <>
      <footer className="footer py-4" style={{ backgroundColor: "black" }}>
        <div
          className="container"
          style={{ display: "flex", flexDirection: "column", color: "white" }}
        >
          <div className="row align-items-center">
            <div
              className="col-lg-4 my-3 my-lg-0"
              style={{ flex: "1", padding: "20px", textAlign: "center" }}
            >
              <a className="btn btn-dark btn-social mx-2" href="#!">
                <i class="bi bi-twitter"></i>
              </a>
              <a className="btn btn-dark btn-social mx-2" href="#!">
                <i class="bi bi-instagram"></i>
              </a>
              <a className="btn btn-dark btn-social mx-2" href="#!">
                <i class="bi bi-facebook"></i>
              </a>
              <a className="btn btn-dark btn-social mx-2" href="#!">
                <i class="bi bi-linkedin"></i>
              </a>
            </div>
          </div>
          <div
            className="nav-menu"
            style={{ display: "inline-block", flex: "1", textAlign: "center" }}
          >
            <ul
              style={{
                listStyle: "none",
                display: "inline-block",
                cursor: "pointer",
              }}
            >
              <li
                style={{
                  display: "inline-block",
                  padding: "20px",
                  fontFamily: "ubuntu",
                }}
              >
                About
              </li>
              <li
                style={{
                  display: "inline-block",
                  padding: "20px",
                  fontFamily: "ubuntu",
                }}
              >
                Contact Us
              </li>
              <li
                style={{
                  display: "inline-block",
                  padding: "20px",
                  fontFamily: "ubuntu",
                }}
              >
                Invest With Us
              </li>
              <li
                style={{
                  display: "inline-block",
                  padding: "20px",
                  fontFamily: "ubuntu",
                }}
              >
                {" "}
                Privacy
              </li>
            </ul>
          </div>
          <div
            className=""
            style={{
              flex: "1",
              padding: "20px",
              textAlign: "center",
              fontFamily: "ubuntu",
            }}
          >
            Copyright &copy; FIRST INTERNATIONAL TRADE AND FINANCE HOUSE LIMITED
          </div>
        </div>
      </footer>

      <div
        className="modal fade"
        id="feedbackModal"
        tabindex="-1"
        aria-labelledby="feedbackModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header bg-gradient-primary-to-secondary p-4">
              <h5
                className="modal-title font-alt text-white"
                id="feedbackModalLabel"
              >
                Send feedback
              </h5>
              <button
                className="btn-close btn-close-white"
                type="button"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body border-0 p-4">
              <form id="contactForm" data-sb-form-api-token="API_TOKEN">
                <div className="form-floating mb-3">
                  <input
                    className="form-control"
                    id="name"
                    type="text"
                    placeholder="Enter your name..."
                    data-sb-validations="required"
                  />
                  <label for="name">Full name</label>
                  <div
                    className="invalid-feedback"
                    data-sb-feedback="name:required"
                  >
                    A name is required.
                  </div>
                </div>

                <div className="form-floating mb-3">
                  <input
                    className="form-control"
                    id="email"
                    type="email"
                    placeholder="name@example.com"
                    data-sb-validations="required,email"
                  />
                  <label for="email">Email address</label>
                  <div
                    className="invalid-feedback"
                    data-sb-feedback="email:required"
                  >
                    An email is required.
                  </div>
                  <div
                    className="invalid-feedback"
                    data-sb-feedback="email:email"
                  >
                    Email is not valid.
                  </div>
                </div>

                <div className="form-floating mb-3">
                  <input
                    className="form-control"
                    id="phone"
                    type="tel"
                    placeholder="(123) 456-7890"
                    data-sb-validations="required"
                  />
                  <label for="phone">Phone number</label>
                  <div
                    className="invalid-feedback"
                    data-sb-feedback="phone:required"
                  >
                    A phone number is required.
                  </div>
                </div>

                <div className="form-floating mb-3">
                  <textarea
                    className="form-control"
                    id="message"
                    type="text"
                    placeholder="Enter your message here..."
                    style={{ height: "10rem" }}
                    data-sb-validations="required"
                  ></textarea>
                  <label for="message">Message</label>
                  <div
                    className="invalid-feedback"
                    data-sb-feedback="message:required"
                  >
                    A message is required.
                  </div>
                </div>

                <div className="d-none" id="submitSuccessMessage">
                  <div className="text-center mb-3">
                    <div className="fw-bolder">Form submission successful!</div>
                    To activate this form, sign up at
                    <br />
                    <a href="https://startbootstrap.com/solution/contact-forms">
                      https://startbootstrap.com/solution/contact-forms
                    </a>
                  </div>
                </div>

                <div className="d-none" id="submitErrorMessage">
                  <div className="text-center text-danger mb-3">
                    Error sending message!
                  </div>
                </div>

                <div className="d-grid">
                  <button
                    className="btn btn-primary rounded-pill btn-lg disabled"
                    id="submitButton"
                    type="submit"
                  >
                    Submit
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
