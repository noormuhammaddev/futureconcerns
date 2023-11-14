import React, { useEffect } from 'react';
import Navbar from '../../components/_App/Navbar';
import PageBanner from '../../components/Common/PageBanner';
import Footer from '../../components/_App/Footer';
import ServicesInnerDetail from '../../components/ServicesInnerDetail/ServicesInnerDetail';

const data = {
    title: "GLOBAL VISIT VISAS",
    image1: "global-visit-visas-1536x1296.png",
    sections: [
        {
            sub_heading: "",
           heading: "",
            paragraphs: [
                {para: "For visiting Sweden for a short period you will need a visit visa . Visiting for a short tour, meeting your relatives, visiting friends or business meeting you need to consider short visit to Sweden which is as Schengen tourist visa Sweden follows the same visa rules as other European country because it is also the part of Schengen agreement."},
            ],
            inner_heading: "",
            listItems: []

        },

        {
            sub_heading: "IF YOU WANT",
           heading: "To Visit You Need To",
            paragraphs: [
                {para: "You can apply for a visit visa directly from our website."},
                {para: "For visiting Sweden for a short period you will need a visit visa . Visiting for a short tour, meeting your relatives, visiting friends or business meeting you need to consider short visit to Sweden which is as Schengen tourist visa Sweden follows the same visa rules as other European country because it is also the part of Schengen agreement."}
            ],
            inner_heading: "",
            listItems: [
                    {list: "have a passport that is valid for at least three months after the visa has expired, was issued in the last ten years and has at least two empty pag-es"},
                    {list: "be able to describe the purpose of your visit"},
                    {list: "have received an invitation from the person you want to visit"},
                    {list: "have an individual medical travel insurance that covers all costs that may arise in connection with emergency medical treatment, urgent med-ical care or transportation to your home country for medical reasons (the insurance must cover costs of at least 30,000 EUR and be valid for all Schengen countries)"},
                    {list: "have money to support yourself and for the return trip home (Sweden al-so requires you to have 450 SEK for each day you stay in Sweden, which can also be paid for by the person who has invited you)"},
                    {list: "show that you intend to leave Sweden and the Schengen area on the last day before the visa expires"},
                    {list: "a photograph that is in passport format and taken with you facing the camera and which is not older than six months"},
                    {list: "other documents that the embassy may require"}
            ]

        },
        
        {
            sub_heading: "IF YOU WANT",
           heading: "To Visit You Need To",
            paragraphs: [
                {para: "You can apply for a visit visa directly from our website."},
                {para: "For visiting Sweden for a short period you will need a visit visa . Visiting for a short tour, meeting your relatives, visiting friends or business meeting you need to consider short visit to Sweden which is as Schengen tourist visa Sweden follows the same visa rules as other European country because it is also the part of Schengen agreement."}
            ],
            inner_heading: "",
            listItems: [
                {
                    list: "have a passport that is valid for at least three months after the visa has expired, was issued in the last ten years and has at least two empty pag-es",
                    list: "be able to describe the purpose of your visit",
                    list: "have received an invitation from the person you want to visit",
                    list: "have an individual medical travel insurance that covers all costs that may arise in connection with emergency medical treatment, urgent med-ical care or transportation to your home country for medical reasons (the insurance must cover costs of at least 30,000 EUR and be valid for all Schengen countries)",
                    list: "have money to support yourself and for the return trip home (Sweden al-so requires you to have 450 SEK for each day you stay in Sweden, which can also be paid for by the person who has invited you)",
                    list: "show that you intend to leave Sweden and the Schengen area on the last day before the visa expires",
                    list: "a photograph that is in passport format and taken with you facing the camera and which is not older than six months",
                    list: "other documents that the embassy may require"
                }
            ]

        },  

        {
            sub_heading: "IF YOU WANT",
           heading: "To Visit You Need To",
            paragraphs: [
                {para: "You can apply for a visit visa directly from our website."},
            ],
            inner_heading: "",
            listItems: [
                    {list: "have a passport that is valid for at least three months after the visa has expired, was issued in the last ten years and has at least two empty pag-es"},
                    {list: "be able to describe the purpose of your visit"},
                    {list: "have received an invitation from the person you want to visit"},
                    {list: "have an individual medical travel insurance that covers all costs that may arise in connection with emergency medical treatment, urgent med-ical care or transportation to your home country for medical reasons (the insurance must cover costs of at least 30,000 EUR and be valid for all Schengen countries)"},
                    {list: "have money to support yourself and for the return trip home (Sweden al-so requires you to have 450 SEK for each day you stay in Sweden, which can also be paid for by the person who has invited you)"},
                    {list: "show that you intend to leave Sweden and the Schengen area on the last day before the visa expires"},
                    {list: "a photograph that is in passport format and taken with you facing the camera and which is not older than six months"},
                    {list: "other documents that the embassy may require"}
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