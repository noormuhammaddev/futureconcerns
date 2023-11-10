import React from 'react';
import Navbar from '../components/_App/Navbar';
import PageBanner from '../components/Common/PageBanner';
import DigitalMarketingDetail from '../components/DigitalMarketingDetail/DigitalMarketingDetail';
import Footer from '../components/_App/Footer';
 
const SoftwareDevelopment = () => {
    return (
        <>
            <Navbar />

            <PageBanner
                pageTitle="Digital Marketing" 
                homePageText="Home" 
                homePageUrl="/" 
                activePageText="Digital Marketing" 
            />

            <DigitalMarketingDetail />

            {/* <RelatedServices /> */}
            
            <Footer />
        </>
    );
}

export default SoftwareDevelopment;