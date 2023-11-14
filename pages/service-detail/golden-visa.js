import React, { useEffect } from 'react';
import Navbar from '../../components/_App/Navbar';
import PageBanner from '../../components/Common/PageBanner';
import Footer from '../../components/_App/Footer';
import ServicesInnerDetail from '../../components/ServicesInnerDetail/ServicesInnerDetail';

const data = {
    title: "GOLDEN VISA (GREECE-PORTUGAL)",
    image1: "golden-visa-1536x1024.png",
    sections: [
        {
            sub_heading: "AN OVERVIEW",
           heading: "Living In Greece",
            paragraphs: [
                    {para: "Situated at the junction of Europe, Asia, and Africa, Greece is regarded as the cradle of democ-racy and the birthplace of western civilization. The country’s history dates back to 800 BCE and has significantly influenced the language, arts, philosophy, politics, and physical pursuits of the modern world. Remnants of Greece’s illustrious past can still be seen in its capital city Athens, which still retains the city’s ancient landmarks."},
                    {para: "Consisting of a mainland on the Balkan peninsula and thousands of islands spread throughout the Aegean and Ionian seas, Greece has become a major European business center and is re-garded as one of the world’s top holiday destinations."},
                    {para: "Greece’s warm Mediterranean climate, world-renowned gastronomy, and cosmopolitan cities, coupled with the country’s exquisite beaches and authentic local traditions and hospitality, have led many upwardly mobile individuals to make this country their second home."},
                    {para: "As a member state of the EU, Greece offers its residents and citizens a number of reassuring benefits including high levels of safety and security, excellent education opportunities, robust healthcare options, and a dependable rule of law."}
            ],
            inner_heading: "",
            listItems: []

        },

        {
            sub_heading: "AN OVERVIEW",
           heading: "Living In Portugal",
            paragraphs: [
                    {para: "Portugal is one of the oldest countries in Europe, has an excellent reputation, a very high Hu-man Development Index ranking, and a high level of security, making it one of the world’s most globalized and peaceful nations."},
                    {para: "Portugal is a member of the EU and Europe’s Schengen Area and has been using the euro as its currency since 2002. Portuguese is the official language, but English is also widely spoken, particularly by younger generations and especially in the tourist regions."},
                    {para: "While Portugal is shifting towards offering business-oriented services, a third of its economy remains in manufacturing. It is also the world’s largest supplier of cork and enjoys the benefits of a strong tourism industry. With little of its own hydrocarbon energy resources, Portugal is committed to creating renewable sources of energy such as hydro, wind, and solar power. Over 40% of the energy created in Portugal is from such resources, including the most efficient wind tower in the world."},
                    {para: "A relatively small country of approximately 10.2 million people, Portugal boasts a rich history, a lively culture, exceptional cuisine, a mild climate, stunning beaches, and an idyllic countryside."}
            ],
            inner_heading: "",
            listItems: []

        },

        {
            sub_heading: "KEY ADVANTAGES OF",
           heading: "Residence In Portugal",
            paragraphs: [],
            inner_heading: "",
            listItems: [
                    {list: "Visa-free travel within Europe’s Schengen Area"},
                    {list: "Eligibility to apply for citizenship after five years as a legal resident while keeping other citizen-ships"},
                    {list: "Excellent international and Portuguese schools and universities"},
                    {list: "International quality health care clinics and hospitals"},
                    {list: "High quality of life and low crime rate"}
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