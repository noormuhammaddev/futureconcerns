import React, { useEffect } from 'react';
import Navbar from '../../components/_App/Navbar';
import PageBanner from '../../components/Common/PageBanner';
import Footer from '../../components/_App/Footer';
import ServicesInnerDetail from '../../components/ServicesInnerDetail/ServicesInnerDetail';

const data = {
    title: "APPEAL CASES",
    image1: "appeal-clases-1536x1536.png",
    sections: [
        {
            sub_heading: "",
           heading: "",
            paragraphs: [
                {para: "Have you been denied family reunification? Residence permit? business visa? Citizenship? Identity card/personnummer? Visa? Or something completely different? let’s take a look at your case so that the decision can hopefully be overturned."},
                {para: "It has become much more difficult to enter Sweden. After the refugee crisis, the authorities have tightened the requirements violently, and you may have been caught in that regard. We have appealed many cases to our clients and they have won their cases. We hope that we can help you as well."}
            ],
            inner_heading: "",
            listItems: []

        },

        {
            sub_heading: "HOW TO",
           heading: "Appeal?",
            paragraphs: [
                {para: "To appeal against the decision made on your visa case, you should write a letter in Swedish or English. You must sign the appeal."}
            ],
            inner_heading: "",
            listItems: []

        },

        {
            sub_heading: "THIS",
           heading: "Appeal Must State",
            paragraphs: [
                {para: "If the appeal came in on time and the Embassy sees no reason to change the decision, the case will be forwarded as soon as possi-ble. Your application, the decision, and all other documents submitted in the case will be sent to the Administrative Court in Göteborg. The Administrative Court then decides and notifies you at the address you specified in the application or in the appeal."},
            ],
            inner_heading: "",
            listItems: [
                {list: "Which decision you wish to appeal. How you want the decision to be changed. Your name, date of birth, postal address, email ad-dress and telephone number. Any circumstances or evidence/proof that that you have not previously submitted that you wish to add to your case."},
                {list: "If someone else (other than you, the applicant) signs the appeal on your behalf, that person must be authorized to represent you (pow-er of attorney). The power of attorney document must be signed by you and submitted in original together with your appeal."},
                {list: "If the Agency does not change the decision, it will be forwarded"}
            ]

        },

        {
            sub_heading: "AFTER",
           heading: "Sending The Appeal",
            paragraphs: [
                {para: "After receiving your appeal, it is the Embassy that initially decides whether to review the decision. The Embassy will verify that the appeal came in on time and will go over the case again. If more than 3 weeks have passed, the appeal will be rejected; in that case you will have to submit a new visa application."},
            ],
            inner_heading: "",
            listItems: []

        },

        {
            sub_heading: "IF THE",
           heading: "Embassy Changes The Decision",
            paragraphs: [
                {para: "If the Embassy finds that the decision could be changed, you will be contacted. The decision can be changed if new information comes in or if the Embassy considers the decision to be wrong. In that case you will be notified, and the entry visa placed in your passport."},
            ],
            inner_heading: "",
            listItems: []

        },

        {
            sub_heading: "IF THE",
           heading: "Embassy Does Not Change The Decision, It Will Be Forwarded",
            paragraphs: [
                {para: "If the appeal came in on time and the Embassy sees no reason to change the decision, the case will be forwarded as soon as possible. Your application, the decision, and all other documents submitted in the case will be sent to the Administrative Court in Göteborg. The Administrative Court then makes a decision and notifies you at the address you specified in the application or in the appeal."},
                {para: "After the case has been handed over to the court, all questions about the case should be addressed to them"}
            ],
            inner_heading: "",
            listItems: []

        },

        {
            sub_heading: "HOW",
           heading: "Long Will It Take",
            paragraphs: [
                    {para: "After receiving the appeal, if the Embassy wants to change its decision, you will be contacted in a few days. But if the Embassy decides not to change its decision and forwards it to the Migration Court in Sweden, the waiting time would be longer."},
                    {para: "After receiving your appeal, it is the Embassy that initially decides whether to review the decision. The Embassy will verify that the appeal came in on time and will go over the case again. If more than 3 weeks have passed, the appeal will be rejected; in that case you will have to submit a new visa application."},
                    {para: "Have you been denied family reunification? Residence permit? business visa? Citizenship? Identity card/personnummer? Visa? Or something completely different? let’s take a look at your case so that the decision can hopefully be overturned."},
                    {para: "It has become much more difficult to enter Sweden. After the refugee crisis, the authorities have tightened the requirements violently, and you may have been caught in that regard. We have appealed many cases to our clients and they have won their cases. We hope that we can help you as well."}
            ],
            inner_heading: "",
            listItems: []

        },

        {
            sub_heading: "HOW TO",
           heading: "Appeal?",
            paragraphs: [
                {para: "To appeal against the decision made on your visa case, you should write a letter in Swedish or English. You must sign the appeal."},
            ],
            inner_heading: "",
            listItems: []

        },

        {
            sub_heading: "THIS",
           heading: "Appeal Must State",
            paragraphs: [
                {para: "If the appeal came in on time and the Embassy sees no reason to change the decision, the case will be forwarded as soon as possi-ble. Your application, the decision, and all other documents submitted in the case will be sent to the Administrative Court in Göteborg. The Administrative Court then decides and notifies you at the address you specified in the application or in the appeal."},
            ],
            inner_heading: "",
            listItems: [
                    {list: "Which decision you wish to appeal. How you want the decision to be changed. Your name, date of birth, postal address, email ad-dress and telephone number. Any circumstances or evidence/proof that that you have not previously submitted that you wish to add to your case."},
                    {list: "If someone else (other than you, the applicant) signs the appeal on your behalf, that person must be authorized to represent you (pow-er of attorney). The power of attorney document must be signed by you and submitted in original together with your appeal."},
                    {list: "If the Agency does not change the decision, it will be forwarded"}
            ]

        },

        {
            sub_heading: "AFTER",
           heading: "Sending The Appeal",
            paragraphs: [
                {para: "After receiving your appeal, it is the Embassy that initially decides whether to review the decision. The Embassy will verify that the appeal came in on time and will go over the case again. If more than 3 weeks have passed, the appeal will be rejected; in that case you will have to submit a new visa application.",}
            ],
            inner_heading: "",
            listItems: []

        },

        {
            sub_heading: "IF THE",
           heading: "Embassy Changes The Decision",
            paragraphs: [
                {para: "If the Embassy finds that the decision could be changed, you will be contacted. The decision can be changed if new information comes in or if the Embassy considers the decision to be wrong. In that case you will be notified, and the entry visa placed in your passport."},
            ],
            inner_heading: "",
            listItems: []

        },

        {
            sub_heading: "IF THE",
           heading: "Embassy Does Not Change The Decision, It Will Be Forwarded",
            paragraphs: [
                {para: "If the appeal came in on time and the Embassy sees no reason to change the decision, the case will be forwarded as soon as possible. Your application, the decision, and all other documents submitted in the case will be sent to the Administrative Court in Göteborg. The Administrative Court then makes a decision and notifies you at the address you specified in the application or in the appeal."},
                {para: "After the case has been handed over to the court, all questions about the case should be addressed to them"}
            ],
            inner_heading: "",
            listItems: []

        },

        {
            sub_heading: "HOW",
           heading: "Long Will It Take",
            paragraphs: [
                    {para: "After receiving the appeal, if the Embassy wants to change its decision, you will be contacted in a few days. But if the Embassy decides not to change its decision and forwards it to the Migration Court in Sweden, the waiting time would be longer."},
                    {para: "After receiving your appeal, it is the Embassy that initially decides whether to review the decision. The Embassy will verify that the appeal came in on time and will go over the case again. If more than 3 weeks have passed, the appeal will be rejected; in that case you will have to submit a new visa application."}
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