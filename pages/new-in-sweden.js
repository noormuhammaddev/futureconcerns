import React from 'react';
import Navbar from '../components/_App/Navbar';
import PageBanner from '../components/Common/PageBanner';
import ServiceDetailsContent from '../components/ServiceDetails/ServiceDetailsContent';
import NewInSwedenDetail from '../components/NewInSwedenDetail/NewInSwedenDetail';
import RelatedServices from '../components/ServiceDetails/RelatedServices';
import Footer from '../components/_App/Footer';
 
const NewInSweden = () => {
    return (
        <>
            <Navbar />

            <PageBanner
                pageTitle="New in Sweden" 
                homePageText="Home" 
                homePageUrl="/" 
                activePageText="New in Sweden" 
            />

            <NewInSwedenDetail />

            <RelatedServices />
            
            <Footer />
        </>
    );
}

export default NewInSweden;