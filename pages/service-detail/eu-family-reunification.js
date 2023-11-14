import React, { useEffect } from 'react';
import Navbar from '../../components/_App/Navbar';
import PageBanner from '../../components/Common/PageBanner';
import Footer from '../../components/_App/Footer';
import ServicesInnerDetail from '../../components/ServicesInnerDetail/ServicesInnerDetail';

const data = {
    title: "EU FAMILY REUNIFICATION",
    image1: "eu-family-reunification-1536x1152.png",
    sections: [
        {
            sub_heading: "WHAT IS",
           heading: "Family Reunification?",
            paragraphs: [
                {para: "Family reunification means that a family that has been split up can apply to be allowed to live together in Sweden with the person who has been granted a permanent residence permit, EU citizenship or a three-year residence permit as a refugee."},
            ],
            inner_heading: "",
            listItems: []

        },

        {
            sub_heading: "EU CITIZEN",
           heading: "Family Members",
            paragraphs: [
                {para: "As a family member of an EU/EEA citizen exercising their right of free movement,you can get a visa through a facilitated process to travel with your family member or to join him/her in Sweden."},
            ],
            inner_heading: "Family members are:",
            listItems: [
                    {list: "Spouse/partner/common law spouse"},
                    {list: "The direct descendants (children) who are under the age of 21 or are dependents, and those of the spouse or partner."},
                    {list: "The dependent direct relatives in the ascending line (e.g. parents) and those of the spouse or partner."},
                    {list: "You can apply for a short-stay Schengen visa (type C) which will permit you to enter Sweden and the Schengen area."},
                    {list: "Once in Sweden you should apply for a residence card for a family member of a EU/EEA citizen within three months for a Residence Card of a family member of a EU/EEA citizen."}
            ]

        },

        {
            sub_heading: "FAMILY",
           heading: "Reunification For Refugees",
            paragraphs: [
                    {para: "If a person receives a permanent residence permit as a refugee or as an individual who needs subsidiary protection, then you may have the right to invite your family to that country. Family reunification is a step towards the settlement of refugees to live with their families."},
                    {para: "The person who wants to invite his family to the country he is residing should have enough income resources to provide financial support to the family and a standard house to live in."},
                    {para: "The possibilities for your family to live with you in Sweden if you have a temporary residence as a refugee or as a person needing subsidiary protection is governed by different things."},
                    {para: "Once the above-mentioned procedure is done and you have a fair chance for receiving the permanent residency status in Sweden, then the application of your family is checked for further requirements."}
            ],
            inner_heading: "Some of the important points regarding residence permits are listed below:",
            listItems: [
                    {list: "Valid Residence Permit"},
                    {list: "Family Application"},
                    {list: "Permanent Residence Permit"}
            ]

        },

        {
            sub_heading: "WHO CAN",
           heading: "Move With You?",
            paragraphs: [
                {para: "Only your immediate family members can move with you if you have a temporary residence permit. Your immediate family members mean your spouse, children under the age of 18, registered partners, and cohabiting partners. Other family members and children who are above 18 are not eligible to move to Sweden or the EU on your behalf while you have a temporary residence permit. If you are under the age of 18, then your parents are counted as your immediate family members."},
                {para: "In case you have a permanent residence permit or you are planning to get married to a person in Sweden, then that person can apply on your behalf for the residence permit. Persons other than your immediate family members like parents or siblings can also move to Sweden with you."}
            ],
            inner_heading: "",
            listItems: []

        },

        {
            sub_heading: "STEP BY STEP",
           heading: "Sweden",
            paragraphs: [],
            inner_heading: "",
            listItems: []

        },

        {
            sub_heading: "BECOMING",
           heading: "A Bank Customer",
            paragraphs: [
                {}
            ],
            inner_heading: "",
            listItems: []

        },

        {
            sub_heading: "AN",
           heading: "Identification",
            paragraphs: [
                {para: "You must always be able to identify yourself."},
            ],
            inner_heading: "",
            listItems: [
                    {list: "You can identify yourself with a valid Swedish identification document, such as a passport, a national identity card or a BankID. You can also identify yourself with a Swedish driving license."},
                    {list: "If you do not have Swedish identification documents, you can identify yourself with a valid foreign passport or other photographic identification document that shows your citizenship. This must be issued by an authority or some other authorised issuer. Note that the bank may request that you also present other documents."},
                    {list: "If you do not have valid identity documents, you must prove who you are and your citizenship by means of other documents from an independent and reliable source."}
            ]

        },

        {
            sub_heading: "FOREIGN",
           heading: "Students",
            paragraphs: [
                { para: "If you are a foreign student, you must always be able to identify yourself as above."},
            ],
            inner_heading: "You also need:",
            listItems: [
                {list: "A residence permit or a visa (does not apply to EU citizens)."},
                {list: "An admission decision confirmation from your university, showing the duration of your studies."}
            ]

        },

        {
            sub_heading: "IN CERTAIN CASES",
           heading: "The Bank Can Refuse You To Open An Account",
            paragraphs: [
                {para: "The bank may also refuse you an account if you have previously acted dishonestly towards the bank."},
            ],
            inner_heading: "",
            listItems: [
                {list: "The bank cannot identify you in a sufficiently secure manner."},
                {list: "The bank determines that the reason you provided for wanting to open an account is inadequate."},
                {list: "The bank, by opening an account, would be acting in breach of a legal regulation or directive."}
            ]

        },

        {
            sub_heading: "BEAR",
           heading: "In Mind That…",
            paragraphs: [],
            inner_heading: "",
            listItems: [
                    {list: "You must be able to understand the bank’s questions and answer them."},
                    {list: "You must also be able to understand the information that the bank gives you."},
                    {list: "If you need someone to translate for you, you should bring such a person with you to the meeting with the bank."},
                    {list: "The bank will ask you where your money is being sent from."},
                    {list: "Your account and other bank services may not be used by anyone else unless an agreement for this is held with the bank."},
                    {list: "The bank may ask you additional questions or stipulate other requirements."}
            ]

        },

        {
            sub_heading: "DRIVING",
           heading: "License",
            paragraphs: [
                {para: "If you have a driving license which was issued in an EU country is valid throughout your stay in Sweden. You can even exchange your driving license to Swedish license if you have  permanent residence."},
                {para: "A driving license that was issued in non-EEA countries (excluding Switzerland and Japan) is valid for a maximum of one year in Sweden. It cannot be exchanged to Swedish license and If you want to continue driving in Sweden you will have to complete the risk education, and theory and practical examinations."}
            ],
            inner_heading: "",
            listItems: []

        },

        {
            sub_heading: "SCHOOLS",
           heading: "IN SWEDEN",
            paragraphs: [
                    {para: "In Swedish preschools, play is a key component. There is a focus on basic values such as playing together, tolerance and consideration for others. Preschool is for children aged 1 to 5."},
                    {para: "The year the child turns 6, he or she can participate in a non-compulsory preschool class (sexårsverksamhet) designed to help children meet future classmates and prepare for primary school without the stress of heavy studies or homework."},
                    {para: "From the ages of 7 to 16, all children in Sweden are required to attend the compulsory school (grundskola), where they are taught a core group of basic subjects. Families can apply for before/after-school care for their children (fritids)."},
                    {para: "There is a charge for preschools and after-school care, but from the age of 6, all schooling in Sweden is free of charge and includes a hot lunch. Note, there is usually a fee for private schools and international schools."}
            ],
            inner_heading: "",
            listItems: []

        },

        {
            sub_heading: "PREGNANCY",
            heading: "AND MATERNITY",
            paragraphs: [],
            inner_heading: "",
            listItems: []

        },

        {
            sub_heading: "PARENTAL",
            heading: "Leave(Föräldraledighet).",
            paragraphs: [
                {para: "In Sweden a parent is entitled to take parental leave until their child is 8 years old in order to take care of them. During the leave parents are paid allowance from (Försäkringskassan) in accordance with the law. www.forsakringskassan.se."},
            ],
            inner_heading: "",
            listItems: []

        },

        {
            sub_heading: "MATERNITY",
            heading: "Clinics",
            paragraphs: [
                {para: "The maternity clinic (MVC) mödravårdscentralen, is primarily for pregnant women. You go to the maternity clinic throughout your pregnancy to check that both the child and you yourself are doing well. Visits to the maternity clinic are free."},
            ],
            inner_heading: "",
            listItems: []

        },

        {
            sub_heading: "CHILD",
            heading: "Health Centre",
            paragraphs: [
                {para: "As a parent, you can get help here. At the child health centre, or barnavårdscentralen (BVC), you can get tips about your child’s development, breast-feeding, food and illnesses. When you come home after the childbirth, you can contact the child health centre yourself to make an appointment for a first meeting. The first meeting is often held at home. At the meeting the nurse tells you about the child health centre and looks to see how your baby is doing."},
            ],
            inner_heading: "",
            listItems: []

        },

        {
            sub_heading: "CHILD",
           heading: "Allowance",
            paragraphs: [
                {para: "Children who live in Sweden start receiving a child allowance the month after their birth. The allowance is paid until the child turns 16."},
            ],
            inner_heading: "",
            listItems: []

        },

        {
            sub_heading: "REGISTER",
           heading: "With Försäkringskassan",
            paragraphs: [
                {para: "You need to register with Försäkringskassan (the Swedish Social Insurance Agency) to qualify for benefits. Read more at www.forsakringskassan.se",}
            ],
            inner_heading: "",
            listItems: []

        },

        {
            sub_heading: "HEALTH",
           heading: "And Medical Care",
            paragraphs: [
                    {para: "The official website 1177.se offers extensive advice on healthcare topics in several languages as well as a search function (in Swedish) for nearby healthcare centers."},
                    {para: "It is a 24-hour provider of free healthcare information and consulting. Phone 1177, or if you call from outside Sweden the number is: +46 771 11 77 00."},
                    {para: "Once you are registered in Sweden (have received a personal identification number), you are entitled to healthcare under the same conditions as other residents of Sweden. This means that you pay the regular Swedish patient fee for medical care in the public healthcare system."}
            ],
            inner_heading: "",
            listItems: []

        },

        {
            sub_heading: "ID",
           heading: "Card",
            paragraphs: [
                    {para: "You can get ID cards issued by tax agency. You need to visit one of the Skatteverket’s office and pay the fee i.e 400 SEK before you visit them."},
                    {para: "To be able to apply for an ID card, you must be registered as living in Sweden (having received the personal identification number), be able to show a receipt for the application fee payment and be able to show who you are (prove your identity)."}
            ],
            inner_heading: "",
            listItems: []

        },

        {
            sub_heading: "UNEMPLOYMENT",
           heading: "Insurance",
            paragraphs: [
                    {para: "Payouts of unemployment insurance take two forms, a basic benefit or an income-related benefit."},
                    {para: "Unemployment insurance is not a part of the social insurance system in Sweden. Unemployment insurance is connected closely to the trade unions but is legally independent. When you start working in Sweden, investigate which unemployment insurance fund (widely known as A-Kassa) is available."},
                    {para: "In order to receive an income-based benefit, you must have been a member of a voluntary unemployment insurance fund (A-kassa) for 12 months and have worked (been employed) for at least six months. In addition, some trade unions offer additional insurance against loss of income."}
            ],
            inner_heading: "",
            listItems: []

        },

        {
            sub_heading: "LANGUAGE",
           heading: "Courses",
            paragraphs: [],
            inner_heading: "",
            listItems: []

        },

        {
            sub_heading: "LEARN",
           heading: "Swedish In Sweden",
            paragraphs: [
                    {para: "Depending on the location of your stay, there are different options for learning Swedish while in the country. More information at: www.sweden.se."},
                    {para: "Folkuniversitetet offers Swedish courses at different levels."},
                    {para: "Study associations also offer language courses and a wide range of other courses. See a list of study associations."},
                    {para: "SFI-courses (Swedish for immigrants). Once you have become a resident in Sweden and have been issued a personal identity number (personnummer) you can contact your local municipality for information about Swedish lessons for immigrants (SFI). SFI is basic training in the Swedish language for adults who do not have Swedish as their first language. You can study SFI full-time or part-time. The training is free of charge."}
            ],
            inner_heading: "",
            listItems: []

        },

        {
            sub_heading: "RECOGNITION OF",
           heading: "Higher Education Qualifications",
            paragraphs: [
                    {para: "The European Commission has devised a system known as ECTS (European Credit Transfer System) . It allows for the transfer of higher education credits between European countries. The Swedish Council for Higher Education (UHR) evaluates foreign qualifications in order to provide support for people looking for work in Sweden, people who wish to continue studying, or for employers who wish to employ someone with foreign qualifications."},
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