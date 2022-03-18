import React from "react";

const ContactForm = () =>{
    return(
        <>
          <div className="contact-form-wrapper">
              <form>
                  <input id="input" type="text" name="fullname" placeholder="FullName" /><br/>
                  <input id="input" type="text" name="email" placeholder="Email" /><br/>
                  <textarea id="input" name="message" placeholder="Message"></textarea>
              </form>

              <span className="send-msg">Send us a message</span>
          </div>
        </>
    )
}
export default ContactForm;