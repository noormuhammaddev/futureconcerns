import React from 'react';
import Navbar from '../components/_App/Navbar';
import PageBanner from '../components/Common/PageBanner';
import AboutUsContent from '../components/AboutUs/AboutUsContent';
import OurHistory from '../components/AboutUs/OurHistory';
import WhyChooseUs from '../components/AboutUs/WhyChooseUs';
import HowItWork from '../components/AboutUs/HowItWork';
import TeamMembers from '../components/AboutUs/TeamMembers';
import Testimonials from '../components/AboutUs/Testimonials';
import Partner from '../components/AboutUs/Partner';
import Footer from '../components/_App/Footer';
 
const AboutUs = () => {
    return (
        <>
            <Navbar />
            <PageBanner
                pageTitle="About Us" 
                homePageText="Home" 
                homePageUrl="/" 
                activePageText="About Us" 
            />
            <AboutUsContent />
            <OurHistory />
            <WhyChooseUs />
            <HowItWork />
            <TeamMembers />
            <Testimonials />
            <Partner />
            <Footer />
        </>
    );
}

export default AboutUs;