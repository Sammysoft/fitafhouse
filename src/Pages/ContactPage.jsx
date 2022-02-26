import React from "react";
import NavBar from '../Components/navbar';
import Header from '../Components/Header/Header3';
import ContactCard from "../Components/contact-card";
import ContactForm from "../Components/contact-form";
import Footer from "../Components/footer";
import Partner from "../Components/partner";

const ContactPage = () =>{
    return(
        <>
            <NavBar />
            <Header />
            <ContactCard />
            <Partner />
            {/* <ContactForm /> */}
            <Footer />
        </>
    )
}
export default ContactPage;