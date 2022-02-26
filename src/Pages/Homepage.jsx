import React from "react";
import Navbar from '../Components/navbar';
import Header from "../Components/Header/Header";
import Testimonial from "../Components/testimonials";
import Menu from '../Components/menu';
import Features from "../Components/features";
import Footer from "../Components/footer";
import About from "../Components/about";


const Homepage = () =>{
    return(
        <>
            <Navbar />
            <Header />
            <Menu />
            <Features />
            <Testimonial/>
            {/* <About /> */}
            <Footer />
        </>
    )
}

export default Homepage;