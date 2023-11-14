import React, { useEffect } from 'react';
import Navbar from '../../components/_App/Navbar';
import PageBanner from '../../components/Common/PageBanner';
import Footer from '../../components/_App/Footer';
import ServicesInnerDetail from '../../components/ServicesInnerDetail/ServicesInnerDetail';

const data = {
    title: "MARRIAGE & DIVORCE",
    image1: "marriage&divorce-1536x1024.png",
    sections: [
        {
            sub_heading: "GET STARTED",
           heading: "IN YOUR NEW LIFE",
            paragraphs: [
                {para: "Getting married is beautiful. But to make sure that it will be a good experience for both you and your partner, it is important to have legal control. We help you with that, so that you can just enjoy your upcoming marriage. To get married in Sweden you should be 18 years old according to the law."},
                {para: "Before getting married you should check in Swedish Tax Agency that you can get married without any hindrance. You need to fill a form and submit it to your kommun. They will approve you to be married."}
            ],
            inner_heading: "",
            listItems: []

        },

        {
            sub_heading: "ACCORDING TO SWEDISH LAW",
           heading: "The Following Are Impediments To Marriage",
            paragraphs: [
                    {para: "You always have the right to say no to getting married."},
                    {para: "Marriage is between two consented and happy people. Wedding can be conducted in kommun or in a mosque or church etc and can be conducted by a a priest, imam or a registrar, for example. Civil marriages are performed by a person who has been appointed by the county administrative board."},
                    {para: "A civil marriage is a ceremony that is unconnected to any religion. If the wedding is a religious ceremony performed by a celebrant who does not have the right to solemnise marriages, the marriage is not official in the eyes of the law. For it to become official, a civil marriage is also required."}
            ],
            inner_heading: "",
            listItems: [
                    {list: "if you or your partner are under the age of 18"},
                    {list: "if you are closely related to the person you want to marry"},
                    {list: "if you or your partner are already married, or are registered partners"},
                    {list: "Swedish law also forbids forced marriage. This means that no one can force anyone else to marry. Everyone has the right to decide who they want to marry."}
            ]

        },

        {
            sub_heading: "",
           heading: "",
            paragraphs: [
                {para: "However, sometimes it is best to go separately and get divorced. Unfortunately, this can create some challenges, especially when you are not in your home country. In those cases, things usually get easier if a third party takes care of all the legal stuff, so you can both use your energy to get on well."},
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