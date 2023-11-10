import React from 'react';
import Navbar from '../components/_App/Navbar';
import PageBanner from '../components/Common/PageBanner';
import CrossPlatformDevelopmentDetail from '../components/CrossPlatformDevelopmentDetail/CrossPlatformDevelopmentDetail';
import Footer from '../components/_App/Footer';
 
const CrossPlatformDevelopment = () => {
    return (
        <>
            <Navbar />

            <PageBanner
                pageTitle="Cross Platform Development" 
                homePageText="Home" 
                homePageUrl="/" 
                activePageText="Cross Platform Development" 
            />

            <CrossPlatformDevelopmentDetail />

            {/* <RelatedServices /> */}
            
            <Footer />
        </>
    );
}

export default CrossPlatformDevelopment;