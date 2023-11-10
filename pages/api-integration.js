import React from 'react';
import Navbar from '../components/_App/Navbar';
import PageBanner from '../components/Common/PageBanner';
import ApiIntegrationDetail from '../components/ApiIntegrationDetail/ApiIntegrationDetail';
import Footer from '../components/_App/Footer';
 
const SoftwareDevelopment = () => {
    return (
        <>
            <Navbar />

            <PageBanner
                pageTitle="Api Integration" 
                homePageText="Home" 
                homePageUrl="/" 
                activePageText="Api Integrationt" 
            />

            <ApiIntegrationDetail />

            {/* <RelatedServices /> */}
            
            <Footer />
        </>
    );
}

export default SoftwareDevelopment;