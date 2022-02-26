import React from "react";

const ContactForm = () =>{
    return(
        <>
            <div className="container">
                <div className="form-wrapper">
                <form action="">
                   <div className="form-inputs">
                        <input name="fullname" type="text" placeholder="Full Name" />
                        <input name="email" type="text" placeholder="Email" />
                        <textarea name="message" width="auto" height="70">
                            Message
                        </textarea>
                   </div>
                </form>
                </div>
            </div>
        </>
    )
}
export default ContactForm;