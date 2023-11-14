import React, { useEffect } from 'react';
import Navbar from '../../components/_App/Navbar';
import PageBanner from '../../components/Common/PageBanner';
import Footer from '../../components/_App/Footer';
import ServicesInnerDetail from '../../components/ServicesInnerDetail/ServicesInnerDetail';

const data = {
    title: "DIRECT CITIZENSHIP BY INVESTMENTS",
    image1: "",
    sections: [
        {
            sub_heading: "A SELECTION OF",
           heading: "Prime Citizenship Programs",
            paragraphs: [
                {
                    para: "Citizenship-by-investment programs provide ultra-wealthy families with the privilege of a second or third passport, which affords them all the internal rights enjoyed by residents. Listed below are the details of the most credible and successful citizenship programs offered by Henley & Partners.",
                }
            ],
            inner_heading: "",
            listItems: []

        },

        {
            sub_heading: "",
           heading: "Antigua And Barbuda",
            paragraphs: [
                {
                    para: "Antigua and Barbuda offers one of the most competitive citizenship programs in the Caribbe-an. Options start from USD 100,000 and citizens of Antigua and Barbuda have visa-free access to 151 destinations, including top business and lifestyle destinations.",
                }
            ],
            inner_heading: "",
            listItems: []

        },

        {
            sub_heading: "",
           heading: "Austria",
            paragraphs: [
                {
                    para: "Austria has one of the world’s strongest passports providing its holders with visa-free access to 187 destinations worldwide, along with settlement rights in all EU member states. Options for obtaining Austrian citizenship start from a minimum investment of EUR 3 million.",
                }
            ],
            inner_heading: "",
            listItems: []

        },

        {
            sub_heading: "",
           heading: "Cyprus",
            paragraphs: [
                {
                    para: "The Cyprus Investment Programme is one of the most sought-after citizenship programs that provides successful applicants with an attractive balance between the capital contribution they make and the benefits they receive. For a minimum contribution of EUR 2.15 million, successful applicants can travel visa-free to 174 destinations worldwide.",
                }
            ],
            inner_heading: "",
            listItems: []

        },

        {
            sub_heading: "Malta",
           heading: "",
            paragraphs: [
                {
                    para: "The Malta Individual Investor Program is the world’s leading citizenship program. For a minimum contribution of approximately EUR 1 million, successful applicants can acquire Maltese citizen-ship that offers safety and security by providing a better quality of life and the right to live, work, and study in all EU member states.",
                }
            ],
            inner_heading: "",
            listItems: []

        },

        {
            sub_heading: "",
           heading: "Montenegro",
            paragraphs: [
                {
                    para: "The Montenegro Citizenship-by-Investment Program offers increased global mobility with visa-free or visa-on-arrival access to 124 destinations including the countries of Europe’s Schengen Area, as well as Russia and the UAE. The program is exclusively limited to 2,000 applicants and a minimum contribution of EUR 350,000 is required.",
                }
            ],
            inner_heading: "",
            listItems: []

        },

        {
            sub_heading: "St. Kitts And Nevis",
           heading: "",
            paragraphs: [
                {
                    para: "St. Kitts and Nevis has one of the strongest passports among all the Caribbean citizenship programs. For a minimum contribution of USD 150,000, the St. Kitts and Nevis Citizenship-by-Investment Program provides visa-free or visa-on-arrival access to 156 destina-tions.",
                }
            ],
            inner_heading: "",
            listItems: []

        },

        {
            sub_heading: "",
           heading: "St. Lucia",
            paragraphs: [
                {
                    para: "The St. Lucia Citizenship-by-Investment Program offers increased global mobility and oppor-tunity by providing visa-free or visa-on-arrival access to 146 destinations around the world. For a contribution of USD 100,000, applicants can acquire their passports in as little as four months.",
                }
            ],
            inner_heading: "",
            listItems: []

        },

        {
            sub_heading: "",
           heading: "Turkey",
            paragraphs: [
                {
                    para: "The Turkey Citizenship-by-Investment Program offers European citizenship and access to the Western markets. The Turkish passport provides visa-free or visa-on-arrival access to 111 des-tinations around the world. For a real estate investment of USD 250,000, passports can be ac-quired in six to nine months.",
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