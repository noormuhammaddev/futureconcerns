import React, { useEffect } from 'react';
import Navbar from '../../components/_App/Navbar';
import PageBanner from '../../components/Common/PageBanner';
import Footer from '../../components/_App/Footer';
import ServicesInnerDetail from '../../components/ServicesInnerDetail/ServicesInnerDetail';

const data = {
    title: "ASYLUM",
    image1: "psychological-problems-at-school-1536x1280.png",
    sections: [
        {
            sub_heading: "sub heading section1",
            heading: "heading section",
            paragraphs: [
                'para1',
                'para3'
            ],
            inner_heading: "inner heading section1",
            list_items: [
                {list: "asdf"},
                {list: "ssssddd"},
            ],
            paragraphs2: [
                'para2222',
                'para333333'
            ],
        },
    ],
    
}

const SoftwareDevelopment = () => {
    console.log('data - ', data)
    return (
        <>
            <Navbar />

            <PageBanner
                pageTitle={data.title} 
                homePageText="Home" 
                homePageUrl="/" 
                activePageText={data.title}
            />

            <ServicesInnerDetail data={data} />
            
            <Footer />
        </>
    );
}

export default SoftwareDevelopment;