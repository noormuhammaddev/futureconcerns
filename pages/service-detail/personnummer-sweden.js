import React, { useEffect } from 'react';
import Navbar from '../../components/_App/Navbar';
import PageBanner from '../../components/Common/PageBanner';
import Footer from '../../components/_App/Footer';
import ServicesInnerDetail from '../../components/ServicesInnerDetail/ServicesInnerDetail';

const data = {
    title: "PERSONNUMMER SWEDEN",
    image1: "personnummer-sweden-1536x864.png",
    sections: [
        {
            sub_heading: "APPLYING FOR A",
           heading: "SWEDISH SOCIAL SECURITY NUMBER (Personnummer",
            paragraphs: [
                    {para: "The personal identification is a number that the Swedish Tax Agency assigns to person registered in Sweden to spot them with, among other authorities. It is easy to distinguish a person with their personnummer, it is unique for everybody. The foundations for obtaining a Swedish social insurance number are constantly changing. This can be why we keep ourselves up to date and that we know exactly what you wish to emphasize in your application – From the time you submit it until you’re finally approved. If you reside in Sweden without a social insurance number, it may be quite difficult. If you’re moving to Sweden for over a year, you’ll get a private number.If you are registered in Sweden you will get a personnummer as your identity number.The social security number consists of six digits with your date of birth in addittion to four digits at th end. Your social security number remains same throughout your life. There is a Coordination number for those who are not registered in Sweden.It needs a unique identification designation and is structured in the same format as a social security number (XXXXXX-XXXX) but where you add 60 on the person’s birthday."},
                    {para: "When a person turns 100 The hyphen which is usually a minus sign is replaced by a plus sign in the system to distinguish from a newborn. Hence, the personnummer doesnt contain any century figures."}
            ],
            inner_heading: "",
            listItems: []

        },

        {
            sub_heading: "BECOMING",
           heading: "A Bank Customer",
            paragraphs: [],
            inner_heading: "",
            listItems: []

        },

        {
            sub_heading: "AN",
           heading: "Identification",
            paragraphs: [
                {
                    para: "You must always be able to identify yourself.",
                }
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
                {
                    para: "If you are a foreign student, you must always be able to identify yourself as above.",
                }
            ],
            inner_heading: "You also need:",
            listItems: [
                {
                    list: "A residence permit or a visa (does not apply to EU citizens).",
                }
            ]

        },

        {
            sub_heading: "BEAR",
           heading: "In Mind That…",
            paragraphs: [],
            inner_heading: "",
            listItems: []

        },

        {
            sub_heading: "IN CERTAIN CASES",
           heading: "The Bank Can Refuse You To Open An Account",
            paragraphs: [
                {
                    para: "The bank may also refuse you an account if you have previously acted dishonestly towards the bank.",
                }
            ],
            inner_heading: "The bank may not open an account if :",
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
            sub_heading: "SCHOOLS IN",
           heading: "SWEDEN",
            paragraphs: [
                    {para: "In Swedish preschools, play is a key component. There is a focus on basic values such as playing together, tolerance and consideration for others. Preschool is for children aged 1 to 5."},
                    {para: "The year the child turns 6, he or she can participate in a non-compulsory preschool class (sexårsverksamhet) designed to help children meet future classmates and prepare for primary school without the stress of heavy studies or homework."},
                    {para: "From the ages of 7 to 16, all children in Sweden are required to attend the compulsory school (grundskola), where they are taught a core group of basic subjects. Families can apply for before/after-school care for their children (fritids)."},
                    {para: "There is a charge for preschools and after-school care, but from the age of 6, all schooling in Sweden is free of charge and includes a hot lunch. Note, there is usually a fee for private schools and international schools}"}
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
           heading: "Leave(Föräldraledighet)",
            paragraphs: [],
            inner_heading: "",
            listItems: []

        },

        {
            sub_heading: "PARENTAL",
           heading: "Benefits",
            paragraphs: [
                {
                    para: "Parental benefit is money you receive to be able to be at home with your child instead of working, seeking work or studying. Parents are granted 480 days of leave per child. 390 of these days are income based and 90 days are at the minimum level. It is not your employer who covers the cost of your parent benefit but the Swedish Social Insurance Agency (Försäkringskassan).",
                }
            ],
            inner_heading: "",
            listItems: []

        },

        {
            sub_heading: "MATERNITY",
           heading: "Clinics",
            paragraphs: [
                {
                    para: "The maternity clinic (MVC) mödravårdscentralen, is primarily for pregnant women. You go to the maternity clinic throughout your pregnancy to check that both the child and you yourself are doing well. Visits to the maternity clinic are free.",
                }
            ],
            inner_heading: "",
            listItems: []

        },

        {
            sub_heading: "CHILD",
           heading: "Health Centre",
            paragraphs: [
                {
                    para: "As a parent, you can get help here. At the child health centre, or barnavårdscentralen (BVC), you can get tips about your child’s development, breast-feeding, food and illnesses. When you come home after the childbirth, you can contact the child health centre yourself to make an appointment for a first meeting. The first meeting is often held at home. At the meeting the nurse tells you about the child health centre and looks to see how your baby is doing.",
                }
            ],
            inner_heading: "",
            listItems: []

        },

        {
            sub_heading: "CHILD",
           heading: "Allowance",
            paragraphs: [
                {
                    para: "Children who live in Sweden start receiving a child allowance the month after their birth. The allowance is paid until the child turns 16.",
                }
            ],
            inner_heading: "",
            listItems: []

        },

        {
            sub_heading: "REGISTER",
           heading: "With Försäkringskassan",
            paragraphs: [
                {
                    para: "You need to register with Försäkringskassan (the Swedish Social Insurance Agency) to qualify for benefits. Read more at www.forsakringskassan.se ",
                }
            ],
            inner_heading: "",
            listItems: []

        },

        {
            sub_heading: "HEALTH AND",
           heading: "Medical Care",
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
                    {para: "Study associations also offer language courses and a wide range of other courses. See a list of study association"},
                    {para: "SFI-courses (Swedish for immigrants). Once you have become a resident in Sweden and have been issued a personal identity number (personnummer) you can contact your local municipality for information about Swedish lessons for immigrants (SFI). SFI is basic training in the Swedish language for adults who do not have Swedish as their first language. You can study SFI full-time or part-time. The training is free of charge."}
            ],
            inner_heading: "",
            listItems: []

        },

        {
            sub_heading: "RECOGNITION OF",
           heading: "Higher Education Qualifications",
            paragraphs: [
                {
                    para: "The European Commission has devised a system known as ECTS (European Credit Transfer System) . It allows for the transfer of higher education credits between European countries. The Swedish Council for Higher Education (UHR) evaluates foreign qualifications in order to provide support for people looking for work in Sweden, people who wish to continue studying, or for employers who wish to employ someone with foreign qualifications.",
                }
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