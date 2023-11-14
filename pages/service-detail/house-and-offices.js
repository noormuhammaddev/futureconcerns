import React, { useEffect } from 'react';
import Navbar from '../../components/_App/Navbar';
import PageBanner from '../../components/Common/PageBanner';
import Footer from '../../components/_App/Footer';
import ServicesInnerDetail from '../../components/ServicesInnerDetail/ServicesInnerDetail';

const data = {
    title: "HOUSE & OFFICES",
    image1: "house&offices-1536x864.png",
    sections: [
        {
            sub_heading: "",
           heading: "",
            paragraphs: [
                {para: "We offer housing assistance. We look at the person’s income and character before we handle their application and we have our own online system for this purpose. We make sure you get your apartment through a smooth process.",}
            ],
            inner_heading: "",
            listItems: []

        },

        {
            sub_heading: "",
           heading: "",
            paragraphs: [
                {para: "We are a relocation company based in four different countries Sweden, Denmark, Pakistan and India. Our head office is in Malmö. Buying and renting requires a lot of research and is associated with uncertainty. That’s why we offer you an easy and painless solution where you can get a place to live without any worries."},
                {para: "We are a relocation company based in four different countries Sweden, Denmark, Pakistan and India. Our head office is in Malmö. Buying and renting requires a lot of research and is associated with uncertainty. That’s why we offer you an easy and painless solution where you can get a place to live without any worries."}
            ],
            inner_heading: "",
            listItems: []

        },

        {
            sub_heading: "",
           heading: "",
            paragraphs: [
                    {para: "Finding housing in Sweden is much more difficult than in other EU countries. Renting a house is having so much competition in Sweden that there is a specific black market for leasing the house or apartment on a long-term basis. You will have to struggle in finding the apartment in Malmö or Stockholm as these are the busiest cities. Foreigners who intend to live in Sweden for a longer period of time may opt for buying a house rather than being a part of this renting fray."},
                    {para: "While you start to search for a house or apartment in Sweden, you will come across the terms known as first-hand and second-hand rentals. These two terms refer to the apartments rented directly from the landlord (first-hand rentals) or rented and/or sublet through a tenant (second-hand rentals). First-hand rentals are really scarce and in some famous areas, there might be years’ long waiting lists. Sublets or second-hand rentals may be the best option in this case, but you should know that you can be allowed to stay in that unit or house for only one year."},
                    {para: "A great benefit of Swedish housing is that you can hardly go wrong with any type of housing situation. There are a lot of options in any area of the country to choose from, whether you are looking for an apartment in the countryside or in the city. You will have a lot of different options like standalone homes or high-rise apartments depending upon your choice. You can also find furnishes as well as unfurnished house and it depends upon the duration of your stay in Scandinavian or Nordic countries.Rental process in Sweden."},
                    {para: "Whether you are looking for a house on rent as a foreigner in Sweden or you are a native Swede, the biggest problem, in any case, is the lack of housing opportunities. This is the case in most of the Scandinavian countries and specifically in Swedish cities causing serious problems for students and expats."},
                    {para: "You may find a first-hand lease or second-hand rentals. You need to have the personummer, an employment contract, and proof of enough income to afford the house in order to get the house on rent. If your income is too low according to the lender, then you may have to provide a guarantor."},
                    {para: "A subletting rental will have similar requirements and procedures as that of the landlords. However, you need to ensure that second-hand leasing has been approved by the landlord otherwise it will be considered as illegal. If you caught in violation of this rule, then you may find yourself evicted."},
                    {para: "In the meantime, while looking for a house on rent, you can opt for short-term rentals as the average price won’t vary much from annual rental prices in Sweden."},
                    {para: "This is where we come to help you finding your new house ."},
                    {para: "Visit: Apartments"}
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