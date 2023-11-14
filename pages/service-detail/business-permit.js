import React, { useEffect } from 'react';
import Navbar from '../../components/_App/Navbar';
import PageBanner from '../../components/Common/PageBanner';
import Footer from '../../components/_App/Footer';
import ServicesInnerDetail from '../../components/ServicesInnerDetail/ServicesInnerDetail';

const data = {
    title: "BUSINESS PERMIT",
    image1: "business-permit-1536x1152.png",
    sections: [
        {
            sub_heading: "STARTING YOUR OWN",
           heading: "Business In Sweden",
            paragraphs: [],
            inner_heading: "",
            listItems: []

        },

        {
            sub_heading: "IF YOU ARE PLANNING ABOUT INVESTING",
           heading: "In Sweden, You Need To Apply For The Residence Permit",
            paragraphs: [
                    {para: "We have a complete solution for all your problems while starting a new business or opening a franchise of your existing business at Sweden. Our mobile app Sweden for all AB will deliver the service of providing the resident permit that will align your plan easily. You will need a detailed plan for your business, bank statement which shows that you have enough capital to invest in your business along with other enough funds to show that you can support your family and you while staying at Sweden during the first two years."},
                    {para: "Sweden is known as the land of start-ups because the economic conditions of the country are detrimental to entrepreneurship. Swedish business culture is open and innovative, and starting a business there is relatively simple. Thus, Sweden excels in promoting the formation of ambitious start-ups on an unexpected level. After Silicon Valley, Stockholm is known for producing the second-highest revenues from tech companies per capita."},
                    {para: "Being the tech and innovation hub, there is a high survival rate for start-ups in Sweden with relatively fast growth. However, you can face some difficulties in understanding the business culture and the procedures for operating a business in Sweden."},
                    {para: "Swedish market has been witnessing the growing number of foreign companies, especially in the past few years. Sweden has developed a strong and competitive capitalist economy with a generous and universal welfare system that is known as the Nordic Model. With its diverse and stable market, investors are attracted to the country’s growing economy. There are so many opportunities for business in the country and Business Sweden can help you to connect with other companies in the sector."},
                    {para: "You can do business in different ways inside Sweden. Whether you can start your own business or become a partner with one or more other Firms/Corporations."},
                    {para: "Non-Profit Associations and foundations also engage in business activities, although they are usually not started up for this purpose."},
                    {para: "Some of the reasons that businesses have chosen the Swedish market as their destination are the world-class infrastructure, Low-level of corruption, highly-skilled workforce, capitalistic economy, and friendly business culture. Sweden’s business climate is very favorable and that’s why it is known as a country of innovation."},
                    {para: "Many successful and innovative businesses have emerged from Sweden like Ericsson, Sandvik, Spotify, Klarna and many more."}
            ],
            inner_heading: "",
            listItems: [
                    {list: "Sole Trader (Enskild Firma);"},
                    {list: "Trading Partnership or Limited Partnership (Handelsbolag/Kommanditbolag);"},
                    {list: "Limited Company (Aktiebolag);"},
                    {list: "Economic Association/cooperative (Ekonomisk Förening)."}
            ]

        },

        {
            sub_heading: "BENEFIT",
           heading: "From Business Culture",
            paragraphs: [
                    {para: "Compared with many other cultures, the Swedish business culture is more relaxed and casual. There isn’t too much bureaucracy and the country is quite free from corruption. You will be inspired much by working in this much relaxed and informal culture. You will learn a lot will build many fruitful business relationships. These cultural reforms can be beneficial for you as an entrepreneur in Sweden."},
                    {para: "Besides this, the Swedish government has made it a lot easier for people to borrow money from public or private lenders. Swedish are informal about names and being an expat, you should do the same. In short, the business culture, here in Sweden, is much favourable for new business opportunities."}

            ],
            inner_heading: "",
            listItems: []

        },

        {
            sub_heading: "RESIDENCE PERMIT FOR PEOPLE",
           heading: "Who Have Their Own Business",
            paragraphs: [
                {para: "People who start their business in Sweden or become a partner of a company, doing so if they have to stay for more than 3 months, they need a residence permit. You should apply and get a residence permit before you arrive in Sweden."},
            ],
            inner_heading: "",
            listItems: []

        },

        {
            sub_heading: "RESIDENCE",
           heading: "Permit Requirements",
            paragraphs: [
                {para: "If you want to be registered in Sweden, you need to live in Sweden for more than a year and have a valid permit for that time period."},
            ],
            inner_heading: "",
            listItems: [
                    {list: "A valid passport. Note that the permit is only valid until the passport expiry date."},
                    {list: "Copies of the passport showing your identity, passport validity and permits to reside in any other countries."},
                    {list: "Proof that you own at least 50% of the company and have ultimate responsibility over any decisions."},
                    {list: "Bank statements proving that you have sufficient capital to buy or establish a business for at least the first two years in Sweden."},
                    {list: "Your company must be expected to create sufficient profits to support the company, yourself and your family."},
                    {list: "A detailed account of your business plan, including contracts with customers / suppliers; a contract for business premises; business permits if required; an investment budget; a liquidity budget and a budgeted balance sheet (profit / loss)."},
                    {list: "You must have relevant experience in the sector, and in running your own business."},
                    {list: "You have sufficient income to support yourself and your family for at least the first two years of the permit. This is estimated to be SEK 200,000; for your spouse SEK 100,000; and SEK 50,000 for every child who accompanies you."},
                    {list: "Proof of sufficient English and or Swedish language skills."},
                    {list: "Receipt of payment for the application."}
            ]

        },

        {
            sub_heading: "STARTING YOUR OWN",
           heading: "Business In Sweden",
            paragraphs: [],
            inner_heading: "",
            listItems: []

        },

        {
            sub_heading: "IF YOU ARE PLANNING ABOUT INVESTING",
           heading: "In Sweden, You Need To Apply For The Residence Permit",
            paragraphs: [
                    {para: "We have a complete solution for all your problems while starting a new business or opening a franchise of your existing business at Sweden. Our mobile app Sweden for all AB will deliver the service of providing the resident permit that will align your plan easily. You will need a detailed plan for your business, bank statement which shows that you have enough capital to invest in your business along with other enough funds to show that you can support your family and you while staying at Sweden during the first two years."},
                    {para: "Sweden is known as the land of start-ups because the economic conditions of the country are detrimental to entrepreneurship. Swedish business culture is open and innovative, and starting a business there is relatively simple. Thus, Sweden excels in promoting the formation of ambitious start-ups on an unexpected level. After Silicon Valley, Stockholm is known for producing the second-highest revenues from tech companies per capita."},
                    {para: "Being the tech and innovation hub, there is a high survival rate for start-ups in Sweden with relatively fast growth. However, you can face some difficulties in understanding the business culture and the procedures for operating a business in Sweden."},
                    {para: "Swedish market has been witnessing the growing number of foreign companies, especially in the past few years. Sweden has developed a strong and competitive capitalist economy with a generous and universal welfare system that is known as the Nordic Model. With its diverse and stable market, investors are attracted to the country’s growing economy. There are so many opportunities for business in the country and Business Sweden can help you to connect with other companies in the sector."},
                    {para: "You can do business in different ways inside Sweden. Whether you can start your own business or become a partner with one or more other Firms/Corporations."},
                    {para: "Non-Profit Associations and foundations also engage in business activities, although they are usually not started up for this purpose."},
                    {para: "Some of the reasons that businesses have chosen the Swedish market as their destination are the world-class infrastructure, Low-level of corruption, highly-skilled workforce, capitalistic economy, and friendly business culture. Sweden’s business climate is very favorable and that’s why it is known as a country of innovation."},
                    {para: "Many successful and innovative businesses have emerged from Sweden like Ericsson, Sandvik, Spotify, Klarna and many more."}
            ],
            inner_heading: "",
            listItems: [
                    {list: "Sole Trader (Enskild Firma);"},
                    {list: "Trading Partnership or Limited Partnership (Handelsbolag/Kommanditbolag);"},
                    {list: "Limited Company (Aktiebolag);"},
                    {list: "Economic Association/cooperative (Ekonomisk Förening)."}
            ]

        },

        {
            sub_heading: "BENEFIT",
           heading: "From Business Culture",
            paragraphs: [
                {para: "Compared with many other cultures, the Swedish business culture is more relaxed and casual. There isn’t too much bureaucracy and the country is quite free from corruption. You will be inspired much by working in this much relaxed and informal culture. You will learn a lot will build many fruitful business relationships. These cultural reforms can be beneficial for you as an entrepreneur in Sweden."},
                {para: "Besides this, the Swedish government has made it a lot easier for people to borrow money from public or private lenders. Swedish are informal about names and being an expat, you should do the same. In short, the business culture, here in Sweden, is much favourable for new business opportunities."}
            ],
            inner_heading: "",
            listItems: []

        },

        {
            sub_heading: "RESIDENCE PERMIT FOR PEOPLE",
           heading: "Who Have Their Own Business",
            paragraphs: [
                {para: "People who start their business in Sweden or become a partner of a company, doing so if they have to stay for more than 3 months, they need a residence permit. You should apply and get a residence permit before you arrive in Sweden."},
            ],
            inner_heading: "",
            listItems: []

        },

        {
            sub_heading: "RESIDENCE",
           heading: "Permit Requirements",
            paragraphs: [
                {para: "If you want to be registered in Sweden, you need to live in Sweden for more than a year and have a valid permit for that time period."},
            ],
            inner_heading: "",
            listItems: [
                    {list: "A valid passport. Note that the permit is only valid until the passport expiry date."},
                    {list: "Copies of the passport showing your identity, passport validity and permits to reside in any other countries."},
                    {list: "Proof that you own at least 50% of the company and have ultimate responsibility over any decisions."},
                    {list: "Bank statements proving that you have sufficient capital to buy or establish a business for at least the first two years in Sweden."},
                    {list: "Your company must be expected to create sufficient profits to support the company, yourself and your family."},
                    {list: "A detailed account of your business plan, including contracts with customers / suppliers; a contract for business premises; business permits if required; an investment budget; a liquidity budget and a budgeted balance sheet (profit / loss)."},
                    {list: "You must have relevant experience in the sector, and in running your own business."},
                    {list: "You have sufficient income to support yourself and your family for at least the first two years of the permit. This is estimated to be SEK 200,000; for your spouse SEK 100,000; and SEK 50,000 for every child who accompanies you."},
                    {list: "Proof of sufficient English and or Swedish language skills."},
                    {list: "Receipt of payment for the application"}
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