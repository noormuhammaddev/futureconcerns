import React, { useEffect } from 'react';
import Navbar from '../../components/_App/Navbar';
import PageBanner from '../../components/Common/PageBanner';
import Footer from '../../components/_App/Footer';
import ServicesInnerDetail from '../../components/ServicesInnerDetail/ServicesInnerDetail';

const data = {
    title: "BUSINESS VISIT",
    image1: "business-visit-768x576.png",
    sections: [
        {
            sub_heading: "BUSINESS VISA TO SWEDEN",
           heading: "Short Official Or Business Trip To Sweden?",
            paragraphs: [
                {para: "If you or your company is planning for your short visit/business trip to Sweden then we are here to assist you in getting your business visa. You can just relax and focus on your business while we do it all for you."},
            ],
            inner_heading: "",
            listItems: []

        },

        {
            sub_heading: "BASIC REQUIREMENTS (APPLICANT)",
           heading: "Documents To Be Submitted",
            paragraphs: [
                {para: "The following are the requirements for business visa:"},
                {para: "Passport: A valid passport with:"},
                {para: "Invitation Letter: An official invitation from the company or person on official company paper is a must. Invitation letter must contain:"},
                {para: "Certificate of Employment: An employement certificate specifying the date of recruitment, position held in the company, salary details, the purpose of travel and leave approval."},
                {para: "Medical Insurance: Travel medical insurance covering the entire period of intended stay, valis for all schengen states and covering any expenses which might arise in connection with repatriation for medical reasons, urgent medical attention .emergency hospital treatment or death during the stay .the minimum coverage must be 30.000 EUR."},
                {para: "Tickets: Round trip ticket reservations, primary reservation is mandatory."},
                {para: "Accomodation: Hotel booking confirmation or any other proof of accomodation(primary reservation)"}
            ],
            inner_heading: "",
            listItems: [
                {list: "Application form: Duly filled and signed by the applicant."},
                {list: "Photograph: One recent color photograph in passport format(not older than 6 months) with white background, head on and uncovered head for gentleman."},
                {list: "Finances: Sufficient funds to support yourself during your stay in sweden and for the return trip home. Minimum 450SEK  is required for each day you stay in sweden which can be paid by sponsoring/inviting company. Original bank statement for the past 6 months. In the absence of bank statement, proof of the other assets has to be provided."},
                {list: "Atleast two blank pages (No stamp or visa on the other side)"},
                {list: "Validilty for atleat 3 months after return from the planned trip."},
                {list: "All accompanying previous passport covering the last 7 years is mandatory."},
                {list: "A photocopy of the biometric page and last Schengen visas."},
                {list: "Complete address and contact details of the company."},
                {list: "Name and designation of the countersigning officer."},
                {list: "Purpose and duration of the visit."},
                {list: "Person or entity who will bear the travel and living cost."},
                {list: "Person or entity who will bear the travel and living cost."}
            ]

        },

        {
            sub_heading: "BASIC REQUIREMENTS ( EMPLOYER/COMPANY)",
           heading: "Documents To Be Submitted By The Company",
            paragraphs: [
                {para: "Original and copy of the commercial registry and tax card translated in English or Swedish."},
            ],
            inner_heading: "",
            listItems: []

        },

        {
            sub_heading: "WHAT ELSE?",
           heading: "Other Documents",
            paragraphs: [
                {para: "These documents might be requested on case to case basis:"},
                {para: "Movement certificate: This document is required in case you are:"}
            ],
            inner_heading: "Other documents that the embassy may require.",
            listItems: [
                {list: "First travellers."},
                {list: "The passports not covering the last 7 years."},
                {list: "If there is a gap between the current and the previous passport more than 3 months."}
            ]

        },

        {
            sub_heading: "",
           heading: "",
            paragraphs: [
                {para: "Foreign people who want to invest in Sweden and stay temporarily for that purpose can also apply for a business visa which is valid for multiple entries. With this visa they can travel back and forth to run their business for stays of up to 90 days during a 180 day period for up to five years. People who stay in sweden for less than 3 months for the purpose of business they don’t have to take a residence permit they can get a business visa."},
            ],
            inner_heading: "",
            listItems: []

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