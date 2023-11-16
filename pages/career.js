import React from 'react';
import Navbar from '../components/_App/Navbar';
import PageBanner from '../components/Common/PageBanner';
import JobApplyForm from '../components/JobApplyForm/JobApplyForm';
import Footer from '../components/_App/Footer';
 
const SoftwareDevelopment = () => {
    return (
        <>
            <Navbar />

            <PageBanner
                pageTitle="Career" 
                homePageText="Home" 
                homePageUrl="/" 
                activePageText="Career" 
            />

            <JobApplyForm />

            {/* <RelatedServices /> */}
            
            <Footer />
        </>
    );
}

export default SoftwareDevelopment;