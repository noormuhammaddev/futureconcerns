import React, { useEffect } from 'react';
import Navbar from '../../components/_App/Navbar';
import PageBanner from '../../components/Common/PageBanner';
import Footer from '../../components/_App/Footer';
import ServicesInnerDetail from '../../components/ServicesInnerDetail/ServicesInnerDetail';

const data = {
    title: "PARENTS EU PERMIT",
    image1: "parent-eu-permit-1536x859.png",
    sections: [
        {
            sub_heading: "FAMILY FROM",
           heading: "Outside The EU?",
            paragraphs: [
                {para: "You have to be in Sweden or on the Swedish border in order to apply for asylum. It’s not possible to apply for asylum before you arrive, or at a Swedish embassy in another country."},
                {para: "If your spouse/common-law spouse/registered partner/dependent children/dependent parents are not EU citizens, they will need to apply for residence cards, but this can also be done after moving to Sweden, at the same time as you register your right of residence."}
            ],
            inner_heading: "",
            listItems: []

        },

        {
            sub_heading: "LONG-TERM",
           heading: "EU Resident?",
            paragraphs: [
                {para: "If you have lived in another EU country with a residence permit for at least five years, you qualify as a long-term resident and can apply, in that country, for a special EU residence permit. This makes it easier to move to another EU country."},
            ],
            inner_heading: "",
            listItems: []

        },

        {
            sub_heading: "RESIDENCE PERMIT FOR",
           heading: "A Parent Or Other Family Member",
            paragraphs: [
                {para: "The citizen of a Non- EU country who wants to move to a family member in Sweden, need a residence permit. In exceptional cases, it is possible to get a residence permit to move to a family member in Sweden or is not already or going to be your husband, wife or cohabiting partner. The family member in Sweden must have a permanent residence permit."},
            ],
            inner_heading: "",
            listItems: []

        },

        {
            sub_heading: "PARENTS OF",
           heading: "Children Under 18 Years",
            paragraphs: [
                {para: "Parents of a child under 18 years who is in Sweden can move to sweden if they will live with the child."},
            ],
            inner_heading: "",
            listItems: []

        },

        {
            sub_heading: "OTHER",
           heading: "Family Member",
            paragraphs: [
                    {para: "In exceptional cases, it is possible to get a residence permit so as to move to another family member in Sweden whom you have lived with in your home country, for example, if you are over the age of 18 years and your parents live here."},
                    {para: "You must be able to prove that you and the family member have lived together immediately before your family member moved to Sweden and that you and the other family member were socially and emotionally dependent on each other when you lived in your home country, and it is therefore difficult for you to live apart."},
                    {para: "The application must be submitted as soon as possible after your family member moved to Sweden and was given a permanent residence permit. The general rule is that it is not possible to get a residence permit if the application is made after a long period of time has passed or if dependency between you has arisen after your family member moved to Sweden."}
            ],
            inner_heading: "",
            listItems: []

        },

        {
            sub_heading: "MAINTENANCE",
           heading: "Requirement",
            paragraphs: [
                {para: "The person you are going to live with in Sweden must be able to support both of you. He or she must also have a home of sufficient size and standard for you both to live in when you move to Sweden. The requirement concerning financial support and accommodation does not apply to children under 18 years. This means that if you are going to move to your child who lives in Sweden, there is no requirement that your child must be able to provide for you."},
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