import React, { useEffect } from 'react';
import Navbar from '../../components/_App/Navbar';
import PageBanner from '../../components/Common/PageBanner';
import Footer from '../../components/_App/Footer';
import ServicesInnerDetail from '../../components/ServicesInnerDetail/ServicesInnerDetail';

const data = {
    title: "CITIZENSHIP",
    image1: "citizenship-1536x683.png",
    sections: [
        {
            sub_heading: "REQUIREMENTS FOR BECOMING",
            heading: "A Swedish Citizen By Application",
            paragraphs: [],
            inner_heading: "To be able to become a Swedish citizen, you have to",
            listItems: [
                
                    {list: "be able to prove your identity"},
                    {list: "be 18 years of age or older"},
                    {list: "have a permanent residence permit (a temporary residence permit is not applicable) or"},
                    {list: "have a right of residence or residence card (applies to you if you are an EU citizen or a close relative of an EU citizen)"},
                    {list: "lived in Sweden for a certain amount of time"},
                    {list: "have conducted yourself well while in Sweden."}
                
            ]

        },

        {
            sub_heading: "YOU MUST HAVE LIVED",
           heading: "In Sweden For A Certain Period",
            paragraphs: [
                {para: "For becoming a Swedish citizen, you need to live in Sweden for a certain period of time."},
                {para: "The required period can vary from case to case. Some people have to live for 5 year continuously. Other rules apply for those who are stateless or refugees."}
            ],
            inner_heading: "",
            listItems: []

        },

        {
            sub_heading: "CITIZENSHIP",
           heading: "For Adults",
            paragraphs: [
                {para: "When you have lived in Sweden for a specified period and meet the other requirements, you can apply for a Swedish citizenship."},
            ],
            inner_heading: "",
            listItems: []

        },

        {
            sub_heading: "PERIOD OF",
           heading: "Residence",
            paragraphs: [
                {para: "To become a Swedish citizen, you need to live in Sweden for 5 years continuously and you want to continue living in future aswell. The time of the residence permit that leads to a permanent residence permit is counted as a period of habitual residence."},
                {para: "If you had a permanent residence permit or a residence permit for settlement when you entered Sweden, you count the duration of stay from your date of arrival. Otherwise, the duration of stay is calculated from the date on which you submitted your application for a residence permit and were approved. If your application was initially rejected and you then submitted a new application, the time is counted from the date on which you received approval."}
            ],
            inner_heading: "",
            listItems: []

        },

        {
            sub_heading: "EU/EEA CITIZENS",
           heading: "And Their Family Members",
            paragraphs: [
                {
                    para: "EU/EEA citizens and their family members should complete and fulfill the requirements of residence permit in order to get the Swedish citizenship.",
                }
            ],
            inner_heading: "",
            listItems: []

        },

        {
            sub_heading: "RECORDS",
           heading: "Related You",
            paragraphs: [
                {para: "You need to conduct yourself well. Your past will be checked by the authorities."},
                {para: "Any information about your debts and crimes will be checked by the Swedish Migration Agency."}
            ],
            inner_heading: "The information is requested from:",
            listItems: [
                {list: "The Enforcement Authority (if you have debts)"},
                {list: "The Police (if you committed a crime or are suspected of doing so)"},
                {list: "The Security Service (security checks)."}
            ]

        },

        {
            sub_heading: "YOU CAN GET YOUR CITIZENSHIP",
            heading: "Application Refused In The Situations Mentioned Below If You",
            paragraphs: [
                {
                    para: "Having debts in private companies also lead to rejection in your application. You have to remain debt free at least for 2 years before you can apply for a Swedish citizenship.",
                }
            ],
            inner_heading: "",
            listItems: [
                {list: "have not paid taxes, fines or other charges"},
                {list: "have not paid maintenance."}
            ]

        },

        {
            sub_heading: "DUAL",
           heading: "Nationality",
            paragraphs: [
                {
                    para: "Swedish law allow a person to have dual nationality or even multiple nationalities. Having multiple or dual nationalities would not affect on the rights of being a Swede.",
                }
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