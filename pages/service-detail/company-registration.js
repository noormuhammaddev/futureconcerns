import React, { useEffect } from 'react';
import Navbar from '../../components/_App/Navbar';
import PageBanner from '../../components/Common/PageBanner';
import Footer from '../../components/_App/Footer';
import ServicesInnerDetail from '../../components/ServicesInnerDetail/ServicesInnerDetail';

const data = {
    title: "COMPANY REGISTRATION",
    image1: "company-registration-1536x1536.png",
    sections: [
        {
            sub_heading: "",
           heading: "",
            paragraphs: [
                    {para: "You can do business in different ways inside Sweden. Whether you can start your own business or become a partner with one or more other Firms/Corporations.Company Registration"},
                    {para: "You can do business in different ways inside Sweden. Whether you can start your own business or become a partner with one or more other Firms/Corporations."},
                    {para: "Non-Profit Associations and foundations also engage in business activities, although they are usually not started up for this purpose."},
                    {para: "If you are planning to register your company inside Sweden, you can reach us anytime if you have some queries about it"},
                    {para: "We have different packages for your new and existing business that includes website creation, data entry software, invoicing software, and mobile applications. The pricing of our offered packages will be according to the size of the company"},
                    {para: "Visit: Business in Sweden"}
            ],
            inner_heading: "",
            listItems: [
                    {list: "Sole Trader (Enskild Firma)"},
                    {list: "Trading Partnership or Limited Partnership (Handelsbolag/Kommanditbolag)"},
                    {list: "Limited Company (Aktiebolag)"},
                    {list: "Economic Association/cooperative (Ekonomisk Förening)"}
            ]

        }
    ]
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