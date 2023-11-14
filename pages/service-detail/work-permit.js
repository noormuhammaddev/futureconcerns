import React, { useEffect } from 'react';
import Navbar from '../../components/_App/Navbar';
import PageBanner from '../../components/Common/PageBanner';
import Footer from '../../components/_App/Footer';
import ServicesInnerDetail from '../../components/ServicesInnerDetail/ServicesInnerDetail';

const data = {
    title: "WORK PERMIT",
    image1: "work-permit-1536x1075.png",
    sections: [
        {
            sub_heading: "FOR EMPLOYEE-EMPLOYER",
            heading: "Assistance",
            paragraphs: [],
            inner_heading: "",
            listItems: []

        },

        {
            sub_heading: "FACING PROBLEMS WITH WORK PERMITS?",
            heading: "We Will Help You With Preparing Work Permit Applications",
            paragraphs: [
                {para: "Whether you are a Swedish company or foreign employer who is facing problems with working permits inside Sweden we have easy solutions for you. You won’t be wasting enough time on how to apply for the Swedish work permit. We will do it for you easily and conveniently. You will not have to wait for 12 months in case of incorrect or incomplete applications."},
                {para: "You can signup as Company if you want to hire someone from outside of Sweden or Non-Eu Citizen in Sweden, similarly if you have a job offer from any Swedish company just signup on www.sweden4allab.se and we will take care rest of the application process."}
            ],
            inner_heading: "",
            listItems: []

        },

        {
            sub_heading: "CITIZENS OF",
            heading: "Non-EU Countries",
            paragraphs: [
                {para: "You have to be in Sweden or on the Swedish border in order to apply for asylum. It’s not possible to apply for asylum before you arrive, or at a Swedish embassy in another country."},
                {para: "Generally, citizens from countries outside the EU must apply for a work permit to work in Sweden."},
                {para: "There are a few exceptions to the rule. Citizens of Argentina, Australia, Chile, Canada, Hong Kong, New Zealand, South Korea and Uruguay aged 18–30 can also apply for a working holiday visa for up to one year."},
                {para: "For employment that lasts less than three months, citizens of certain countries must have both a work permit and a visa. Also note that employees in certain fields may be exempt from work permit regulations."}
            ],
            inner_heading: "",
            listItems: []

        },

        {
            sub_heading: "REQUIREMENTS FOR",
           heading: "A Work Permit",
            paragraphs: [
                    {para: "To qualify for a work permit, you must have received an official offer of employment from a Swedish employer. The job must also:"},
                    {para: "You must also hold a valid passport in your home country."}
            ],
            inner_heading: "",
            listItems: [
                    {list: "Have been advertised in the EU/EEA for at least ten days"},
                    {list: "Offer terms of employment that match those set by Swedish collective agreements or those that are customary within the occupation or industry"},
                    {list: "Pay a minimum monthly salary of SEK 13,000 before taxes."}
            ]

        },

        {
            sub_heading: "CITIZENS OF",
           heading: "EU Countries",
            paragraphs: [],
            inner_heading: "",
            listItems: []

        },

        {
            sub_heading: "PASSPORT",
           heading: "ID Is Required",
            paragraphs: [
                {para: "EU citizens can look for a job and work without a permit. Their family can accompany them and can also work. However, you should have a valid passport to show your identity."},
            ],
            inner_heading: "",
            listItems: []

        },

        {
            sub_heading: "PERMITS FOR",
           heading: "Family Members",
            paragraphs: [
                {para: "If you are a non-EU citizen eligible to receive a work permit, your spouse/common law spouse/registered partner and children up to age 21 (as well as children over 21 who are financially dependent on you) have the right to join you in Sweden. They must apply for residence permits, either as part of your application or separately."},
            ],
            inner_heading: "",
            listItems: []

        },

        {
            sub_heading: "THE",
           heading: "Application Processes",
            paragraphs: [
                {para: "You will need to apply for your permit before entering Sweden, though in some cases you may be able to apply from within Sweden if you are already legally living in the country."},
            ],
            inner_heading: "",
            listItems: []

        },

        {
            sub_heading: "RECEIVE",
           heading: "An Offer Of Employment",
            paragraphs: [
                {para: "which must have been approved by a relevant trade union."},
            ],
            inner_heading: "",
            listItems: []

        },

        {
            sub_heading: "COMPILE AND",
           heading: "COMPILE ANDSubmit Your Application",
            paragraphs: [
                {para: "either online or through a paper application submitted to your closest Swedish embassy or consulate. Your completed application must include"},
            ],
            inner_heading: "",
            listItems: [
                    {list: "A completed application form"},
                    {list: "Copies of the pages of your passport that show personal data, period of validity and whether you have permission to live in countries other than your country of origin (e.g. other visas or residence permits)"},
                    {list: "Your offer of employment and the statement from the trade union"},
                    {list: "An application fees"},
                    {list: "The Migration Agency considers your application and informs you of its decision, see current waiting times."},
                    {list: "Submit data for visa and residence permit card."}
            ]

        },

        {
            sub_heading: "EXTENDING",
           heading: "A Work Permit",
            paragraphs: [
                    {para: "You can apply to extend your permit before your current permit expires. You can continue working until you get the decision if you had a permit to work for six months. For extending your work permit the conditions of the work permit should have been the same throughout the working period i.e salary equals 13000 SEK per month before taxes. You should also have health insurance, life insurance, occupational injury insurance, and occupational pension insurance for the entire period. You need to show the job satisfies the requirement and conditions of a work permit."},
                    {para: "You can apply for extension 4 months before your permit expires. If you change the conditions of your employment or change your workplace in the first 24 months of your work permit, your permit will not be valid and you will have to apply for a new work permit."},
                    {para: "You can change your workplace or employer after working 24 months without changing the line of profession."}
            ],
            inner_heading: "",
            listItems: []

        },

        {
            sub_heading: "CITIZENS OF",
           heading: "Nordic Countries",
            paragraphs: [
                {para: "Nordic citizens can work in Sweden without registering themselves with migration agency. They should register with Swedish tax agency."},
            ],
            inner_heading: "",
            listItems: []

        },

        {
            sub_heading: "INTERNATIONAL",
           heading: "Students",
            paragraphs: [
                {para: "International students with a residence permit in Sweden can work alongside their studies. If they want to stay and work in Sweden after completing their studies, they need a work permit."},
            ],
            inner_heading: "",
            listItems: []

        },

        {
            sub_heading: "FOR THOSE",
           heading: "Who Studied In Sweden",
            paragraphs: [
                {para: "If you study in Sweden and would like to apply for a residence permit as a self-employed  person or work permit without leaving the country, you must submit the application before your student permit for expires. You must submit a study certificate showing that you have completed at least 30 credits or at least one term of postgraduate education in Sweden.",}
            ],
            inner_heading: "",
            listItems: []

        },

        {
            sub_heading: "FOR THOSE WHO HAD",
           heading: "Temporary Asylum And Are Running Your Own Business",
            paragraphs: [
                {para: "You can get a permanent residence permit if you show that you can support yourself for the next two years. However, the requirement for you are bit different from the people who don’t a have a temporary residence permit on the basis of the asylum."},
            ],
            inner_heading: "",
            listItems: []

        },

        {
            sub_heading: "PERMANENT",
           heading: "Residence Permit",
            paragraphs: [
                    {para: "International students with a residence permit in Sweden can work alongside their studies. If they want to stay and work in Sweden after completing their studies, they need a work permit."},
                    {para: "If you have been working in same profession and working conditions as when you you applied for the first time for 4 years in last 7 years you can get permanent residence permit."},
                    {para: "Residence permit for your family members"},
                    {para: "Your family members can also get the residence permit for the same duration as you. you will have to show that you can support them."}
            ],
            inner_heading: "",
            listItems: []

        },

        {
            sub_heading: "THE APPLICATION",
           heading: "Process",
            paragraphs: [],
            inner_heading: "",
            listItems: []

        },

        {
            sub_heading: "CASE",
           heading: "History",
            paragraphs: [
                {para: "We will study your background to determine whether you are suitable for the job offer you currently have. The company will also be investigated as per the requirements. We will suggest you with the most suitable service we can provide or the company as our client."},
            ],
            inner_heading: "",
            listItems: []

        },

        {
            sub_heading: "SERVICE",
           heading: "Charges",
            paragraphs: [
                {para: "Here we can discuss your total cost of the service charges including Migrationsverket fee and our service charges with complete transparency."},
            ],
            inner_heading: "",
            listItems: []

        },

        {
            sub_heading: "FILE",
           heading: "Preparation",
            paragraphs: [
                {para: "While preparing your file we take care of all the required documentation including the job offer/ anställningserbjudande, trade union’s opinion/ fackligt yttrande , insurances, etc. We take care of all these parts during the entire application. When the application has been submitted to the Swedish Migration Agency, you will receive a receipt and a control number."},
                {para: "During the processing of the application at Migrationsverket we will regularly update you about your case."}
            ],
            inner_heading: "",
            listItems: []

        },

        {
            sub_heading: "GRANTED",
           heading: "Work Permit",
            paragraphs: [
                {para: "We inform and coordinate the above with you and with the applicant. We will help you through the whole process with our one window solution. We can even further assist you with settling in Sweden and relocating."},
            ],
            inner_heading: "",
            listItems: [
                    {list: "The applicants need to visit the closest Swedish embassy for Biometrics."},
                    {list: "They can go after 2-4 weeks to the embassy to pick up their residence and work permit card."},
                    {list: "The employment can begin as soon as the person arrives in Sweden."}
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