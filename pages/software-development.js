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
                pageTitle="Softare Development" 
                homePageText="Home" 
                homePageUrl="/" 
                activePageText="Software Development" 
            />

            <SoftwareDevelopmentDetail />

            {/* <RelatedServices /> */}
            
            <Footer />
        </>
    );
}

export default SoftwareDevelopment;