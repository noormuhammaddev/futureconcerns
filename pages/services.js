import React from 'react';
import Navbar from '../components/_App/Navbar';
import PageBanner from '../components/Common/PageBanner';
import ServicesOne from '../components/Services/ServicesOne';
import StartProject from '../components/Common/StartProject';
import Footer from '../components/_App/Footer';

const Services = () => {
    return (
        <>
            <Navbar />

            <PageBanner
                pageTitle="Services" 
                homePageText="Home" 
                homePageUrl="/" 
                activePageText="Services" 
            />

            <ServicesOne />
            
            <StartProject 
                heading="HAVE ANY QUESTIONS?"
                description="Need a consultation? Call us today +46-766-276-276 or email us: info@futureconcerns.se"
                btnLabel="Book an Appointment"
                btnLink="/contact"
            />
            
            <Footer />
        </>
    );
}

export default Services;