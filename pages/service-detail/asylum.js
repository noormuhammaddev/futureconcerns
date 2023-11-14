import React, { useEffect } from 'react';
import Navbar from '../../components/_App/Navbar';
import PageBanner from '../../components/Common/PageBanner';
import Footer from '../../components/_App/Footer';
import ServicesInnerDetail from '../../components/ServicesInnerDetail/ServicesInnerDetail';

const data = {
    title: "ASYLUM",
    image1: "asylum-1536x1280.png",
    sections: [
        {
            sub_heading: "ASYLUM IN SWEDEN",
            heading: "What We Offer",
            paragraphs: [
                {
                    para: "If you are an asylum seeker and need an expert to take care of your asylum process at the Swedish Migration Agency, we are here for you",
                }
            ],
            inner_heading: "WHY AN EXPERT?",
            listItems: [
                {list: "PEACE OF MIND: Our team of experts will handle your case and will guide you throughout the process."},
                {list: "CLARITY: Our team of experts will help you, irrespective of the fact that how complicated your case is."},
                {list: "QUICKLY AVAILABILITY OF A LAWYER: As soon as you contact us, our immigration lawyers will start working on your case."}
            ],

        },

        {
            sub_heading: "ELIGIBILITY",
            heading: "WHO CAN APPLY FOR ASYLUM?",
            paragraphs: [
                {para: "You have to be in Sweden or on the Sweden’s border in order to apply for asylum. It’s not possible to apply for asylum before you arrive in Sweden or at a Swedish embassy in another country."},
                {para: "Asylum seeker’s application is examined individually and will be granted a residence permit only if one fulfills criteria of being a refugee."},
                {para: "According the UN Refugee Convention and Swedish law, a person can be considered as a refugee if the person is facing oppression due of any of the following reasons:"},
                {para: "Sometime a group of people can be threatening to you as well, but this cannot be a sole reason for you to be granted a positive decision. You will be asked what can happen if you return to your country."},
                {para: "If you are considered as a refugee, you get a residence permit for three years or 13 months."}
            ],
            inner_heading: "",
            listItems: [
                {list: "Race"},
                {list: "Nationality (Language or Ethnic Group)"},
                {list: "Religion"},
                {list: "Political belief"},
                {list: "Gender"},
                {list: "Sexual orientation"},
                {list: "Membership of a particular social group"}
                    
            ]
        },

        {
            sub_heading: "STEPS TO BE FOLLOWED",
            heading: "HOW DO YOU APPLY FOR ASYLUM IN SWEDEN?",
            paragraphs: [
                
                    {para: "STEP 1: To be able to apply for asylum you must either be in Sweden, or on the border to the country."},
                    {para: "STEP 2: After you have registered your application, you will be called for an initial meeting at the Migration agency. During this meeting you will be given an opportunity to choose your representative/lawyer. You can then choose us."},
                    {para: "STEP 3: In case you choose us as your representative, we will then be contacted by the Migration Agency and asked to prove your claim. We will then schedule a call with you to know more about your situation."},
                    {para: "As your representative, we will support you throughout the asylum process and act according to your interests. Our role becomes particularly important since you as an asylum seeker are not expected to have any knowledge of the Swedish legal system and may find it difficult to clarify your grounds for asylum and refugee status on your own."},
                    {para: "And for that reason, it is really important that you have a knowledgeable person to help you throughout the process."},
                    {para: "We not only take care of appealing for your decision at the Migration Court and the Migration Court of Appeal but will also provide you with a fully integrated relocation solution for your reunification with your family as well." }
                
            ],
            inner_heading: "",
            listItems: []
        },

        {
            sub_heading: "FAMILY REUNIFICATION",
            heading: "Reunification For Refugees",
            paragraphs: [
                {
                    para: "Family reunification is a recognized reason for the immigration of family members to a country where one or more family members are already residing.",
                }
            ],
            inner_heading: "",
            listItems: []
        },

        {
            sub_heading: "",
            heading: "Who Have A Right To Family Reunification?",
            paragraphs: [
                { para: "Your family can apply for residence permits to join you in Sweden if you have been granted:"},
                {para: "As a family member of an EU/EEA citizen exercising your right of free movement in Europe can get a visa through a facilitated process to travel with your family member or to join him/her in Sweden."}
            ],
            inner_heading: "For EU/EEA CITIZEN",
            listItems: [
                
                    {list: "a permanent residence permit."},
                    {list: "a temporary residence permit as a refugee and have good chances of being granted a residence permit for a longer period"},
                    {list: "a temporary residence permit due to impediments to enforcement or particularly or exceptionally distressing circumstances, and have good chances of being granted a residence permit for a longer period."}
            ]
        },

        {
            sub_heading: "FAMILY REUNIFICATION",
            heading: "In Case You Have A Temporary Residence Permit",
            paragraphs: [
                    {para: "At the time  of applying for family reunification you must have a valid residence permit for the country which means, if your residence permit has expired and you have applied for its extension, then the Swedish Migration Agency will first decide that whether you have the right to continue the residence permit or not. It isn’t enough for you to have the title of a temporary resident or having a previous valid residence permit."},
                    {para: "Only you immediate family(your spouse, registered partner or cohabiting partner, and your children under the age of 18) can move to you if you have a temporary work permit. Only in exceptional cases it is possible to get a residence permit for other family members."},
                    {para: "One must fulfill maintainance requirement in order to apply for family reunification which means one should be able to financially support his/her family and also have a home of sufficient size and standard."}
            ],
            inner_heading: "",
            listItems: []
        },

        {
            sub_heading: "OUR ROLE",
           heading: "How We Make It Easier For You",
            paragraphs: [],
            inner_heading: "",
            listItems: [
                
                    {list: "Assistance with residence permit application."},
                    {list: "Information on required documentation."},
                    {list: "Information on required Government fees to pay."},
                    {list: "Registration at the Migration Board."},
                    {list: "Follow up after registration."},
                    {list: "Booking of appointment at the Migration Board."},
                    {list: "accompanied visits to Migration Boad for biometrics."}
                   
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