import React from 'react';
import Navbar from '../components/_App/Navbar';
import PageBanner from '../components/Common/PageBanner';
import ServiceDetailsContent from '../components/ServiceDetails/ServiceDetailsContent';
import WorkPermit from '../components/WorkPermit/WorkPermit';
import RelatedServices from '../components/ServiceDetails/RelatedServices';
import Footer from '../components/_App/Footer';
 
const NewInSweden = () => {
    return (
        <>
            <Navbar />

            <PageBanner
                pageTitle="Work Permit" 
                homePageText="Home" 
                homePageUrl="/" 
                activePageText="Work Permit" 
            />

            <WorkPermit />

            {/* <RelatedServices /> */}
            
            <Footer />
        </>
    );
}

export default NewInSweden;