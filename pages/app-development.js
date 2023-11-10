import React from 'react';
import Navbar from '../components/_App/Navbar';
import PageBanner from '../components/Common/PageBanner';
import AppDevelopmentDetail from '../components/AppDevelopmentDetail/AppDevelopmentDetail';
import Footer from '../components/_App/Footer';
 
const SoftwareDevelopment = () => {
    return (
        <>
            <Navbar />

            <PageBanner
                pageTitle="App Development" 
                homePageText="Home" 
                homePageUrl="/" 
                activePageText="App Development" 
            />

            <AppDevelopmentDetail />

            {/* <RelatedServices /> */}
            
            <Footer />
        </>
    );
}

export default SoftwareDevelopment;