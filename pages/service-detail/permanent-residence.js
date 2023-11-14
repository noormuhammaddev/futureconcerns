import React, { useEffect } from 'react';
import Navbar from '../../components/_App/Navbar';
import PageBanner from '../../components/Common/PageBanner';
import Footer from '../../components/_App/Footer';
import ServicesInnerDetail from '../../components/ServicesInnerDetail/ServicesInnerDetail';

const data = {
    title: "PERMANENT RESIDENCE",
    image1: "permanent-residence-1536x1536.png",
    sections: [
        {
            sub_heading: "PERMANENT RIGHT OF",
           heading: "Residence For EU Citizens",
            paragraphs: [
                    {para: "If you lived in Sweden for more than 5 years with the EU right of residence you can get the permanent residence permit."},
            ],
            inner_heading: "",
            listItems: []

        },

        {
            sub_heading: "DIFFERENT WAYS FOR",
           heading: "Permanent Right Of Residence",
            paragraphs: [
                    {para: "As an EU citizen you have right of residence if you work, study, have your own company or have sufficient means to support yourself. If you have right of residence of living with someone you should live for 5 years with them. There are quite a few permits that can lead to permanent residence. Generally, you just need to spend enough time on one of the following permits."},
                    {para: "Time spent in Sweden on a student permit or on a working holiday visa does not generally count towards the time needed for permanent residence."},
                    {para: "Standard work permit, EU blue card, guest researcher, and doctoral students The process for obtaining permanent residence as someone holding a standard work permit, EU blue card, guest researcher, and doctoral student are relatively similar. In order to obtain permanent residence the core requirement is to have held a permit for a combined period of 4 years in Sweden (excluding time spent on student permits) during the past 7 years. The assessment of permanent residence will be made in conjunction with the extension application that is submitted. The case officer should automatically make the assessment and see if permanent residence can be granted."}
            ],
            inner_heading: "Some of these are:",
            listItems: [
                    {list: "Standard work permit"},
                    {list: "Dependent permit"},
                    {list: "Guest researcher"},
                    {list: "Doctoral student"},
                    {list: "EU blue card"}
            ]

        },

        {
            sub_heading: "FOR",
           heading: "Dependents",
            paragraphs: [
                    {para: "For dependents, the process is a bit different. Permanent residence for dependents can only be granted either in conjunction with the main applicant being granted permanent residence (if the applications were submitted together) or if the main applicant/reference person in Sweden already has permanent residence. They cannot be granted permanent residence on their own merits as a dependent and require the main application to be granted this first"},
            ],
            inner_heading: "",
            listItems: []

        },

        {
            sub_heading: "PERMANENT RESIDENCE CARDS FOR",
           heading: "EU Citizens Family Members Who Are Non-EU Citizens",
            paragraphs: [
                    {para: "As a close relative of an EU citizen, when you have lived in Sweden for five years with your close relative and they have had right of residence throughout this period, you have permanent right of residence. you can apply for a permanent residence card."},
            ],
            inner_heading: "",
            listItems: []

        },

        {
            sub_heading: "REQUIREMENTS FOR",
           heading: "Permanent Residence Card",
            paragraphs: [],
            inner_heading: "",
            listItems: []

        },

        {
            sub_heading: "TO BE ELIGIBLE FOR",
           heading: "A Permanent Residence Card",
            paragraphs: [
                    {para: "Your permanent right of residence is dependent on your family member who is an EU citizen having the right of residence for five years. Your application should specify the occupation of the EU citizen."},
                    {para: "There are also special regulations about keeping your right of residence in certain cases. Contact us for more details."}
            ],
            inner_heading: "",
            listItems: [
                    {list: "You should have lived in Sweden for at least five years while having a relation to the close relative who is an EU citizen"},
                    {list: "Your family member should meet the requirements of permanent right of residence."}
            ]

        },

        {
            sub_heading: "HOWEVER, HAVING A PERMANENT",
           heading: "Residence Permit Does Not Entitle You To",
            paragraphs: [
                    {para: "Having a Swedish citizenship (instead of a PUT) will make it a lot easier if you wish to move to another EU country. It is possible – yet more complicated – to live in another EU country with a Swedish PUT."},
                    {para: "The Swedish Migrations Board – Migrationsverket, has the right to revoke your permanent residence permit if you move to another country or spend more than one year outside of Sweden. It is therefore important to check with the Migrationsverket before you leave Sweden,if you are planning to spend more than one year abroad."}
            ],
            inner_heading: "",
            listItems: [
                    {list: "A Swedish passport"},
                    {list: "To vote in the national elections"},
                    {list: "Nor does it entitle you to do the military service or to exercise any military occupations"}
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