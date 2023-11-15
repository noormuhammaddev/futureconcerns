import React from 'react';
import Navbar from '../components/_App/Navbar';
import PageBanner from '../components/Common/PageBanner';
import SoftwareDevelopmentDetail from '../components/SoftwareDevelopmentDetail/SoftwareDevelopmentDetail';
import Footer from '../components/_App/Footer';
 
const SoftwareDevelopment = () => {
    return (
        <>
            <Navbar />

            <PageBanner
                pageTitle="Man Power Solutions" 
                homePageText="Home" 
                homePageUrl="/" 
                activePageText="Man Power Solutions" 
            />

            <SoftwareDevelopmentDetail />

            {/* <RelatedServices /> */}
            
            <Footer />
        </>
    );
}

export default SoftwareDevelopment;