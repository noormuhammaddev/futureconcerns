import React, { useEffect } from 'react';
import Navbar from '../../components/_App/Navbar';
import PageBanner from '../../components/Common/PageBanner';
import Footer from '../../components/_App/Footer';
import ServicesInnerDetail from '../../components/ServicesInnerDetail/ServicesInnerDetail';

const data = {
    title: "CPR NUMBER DENMARK",
    image1: "cpr-number-denmark-1536x1055.png",
    sections: [
        {
            sub_heading: "CPR NUMBER",
           heading: "Danish ID Number",
            paragraphs: [
                {para: "CPR (Centrale Personregister) number is unique to a person and is used as an ID in Denmark. A CPR number facilitates accurate linkage between all Danish national registers among all other things. Your CPR number consists of ten digits. The primary six digits are your date of birth and the last four are your unique identification number. The last digit of your CPR number indicates your sex. If it’s an odd digit you’re male, and if it’s a fair digit you’re female."},
            ],
            inner_heading: "",
            listItems: []

        },

        {
            sub_heading: "CPR NUMBER REQUIREMENT",
           heading: "Why & When?",
            paragraphs: [
                {para: "Residents of Denmark are legally required to possess a CPR number. You may also notice that your CPR number grants you access to many services in Denmark. You may need it to open a checking account, get a Danish sign, borrow books at the library, cast off insurance and so on."},
            ],
            inner_heading: "WHY?",
            listItems: []

        },

        {
            sub_heading: "",
           heading: "",
            paragraphs: [
                {para: "Non-EU/EEA citizens who intend to stay in Denmark for more than three months are required to register with the Danish Civil Registration System on arrival."},
                {para: "Nordic citizens, citizens of EU and EEA countries and Switzerland are required to register with the Danish Civil Registration System and obtain a CPR number within six months of their arrival in Denmark."}
            ],
            inner_heading: "WHEN?",
            listItems: []

        },

        {
            sub_heading: "HOW TO GET",
           heading: "A CPR Number?",
            paragraphs: [
                {para: "To obtain a CPR number you must have an address in Denmark, also present a range of documents counting on your current civil status (see below). Please note that if your documents aren’t in Danish, Norwegian, Swedish, English or German, you must bring an authorized translation of all these documents."},
            ],
            inner_heading: "At Citizens’ Services you’ll be asked for:",
            listItems: [
                {
                    list: "Your Danish residence and legal document (non-EU/EEA citizens), or certificate of registration (for EU/EEA and Swiss citizens). Nordic citizens must bring proof of their Nordic personal positive identification, e.g. your passport.",
                    list: "In case, if you’re married, your marriage certificate or a licensed copy of it.",
                    list: "In case, if you have got children, your child/children’s birth certificate(s).",
                    list: "n case, If you’re divorced your divorce certificate.",
                    list: "In case, if you’re a widow/widower, the death certificate of your spouse."
                }
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