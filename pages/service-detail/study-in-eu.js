import React, { useEffect } from 'react';
import Navbar from '../../components/_App/Navbar';
import PageBanner from '../../components/Common/PageBanner';
import Footer from '../../components/_App/Footer';
import ServicesInnerDetail from '../../components/ServicesInnerDetail/ServicesInnerDetail';

const data = {
            title: "STUDY IN EU",
            image1: "",
            sections: [
                {
                    sub_heading: "STUDY",
                    heading: "In Sweden",
                    paragraphs: [
                        {
                            para: "If you are thinking about studying abroad, then visit Sweden. You probably want to know why Sweden is considered as a great destination. Let me notify you, Sweden has a fascinating history and culture, global businesses, delicious food, and welcoming people; and is also well known for its world-class academic opportunities that rank among the top 100 in the world.",
                        }
                    ],
                    inner_heading: "Following are 6 reasons why Sweden is considered an ideal place to study:",
                    listItems: []

                },

                {
                    sub_heading: "VISION",
                    heading: "Enhancement Of One’s Mind",
                    paragraphs: [
                        {
                            para: "Study in Sweden let you think independently and critically. It will enhance your ability to question the state of affairs by accessing information, seeking new perspectives and coming up with well-informed judgments. Because of the informal and non-hierarchical nature of Swedish society, you will be able to think creatively. Where everyone is urged to bestow their ideas and opinions. This independence of mind and letting everyone’s voice heard are the reasons why Sweden ranks among the world’s most innovative nations.",
                        }
                    ],
                    inner_heading: "",
                    listItems: []

                },

                {
                    sub_heading: "RICH",
                    heading: "Swedish History",
                    paragraphs: [
                        {
                            para: "Sweden has contributed a lot to the history books, and many museums allow free entrance on a daily basis or on specially marked days throughout the year. Swedish History Museum, the largest museum in Sweden; where millions of visitors and students come to see Sweden’s foremost gold and silver treasures, and incomparable medieval art.",
                        }
                    ],
                    inner_heading: "",
                    listItems: []

                },

                {
                    sub_heading: "LANGUAGE",
                    heading: "Proficiency",
                    paragraphs: [
                        {
                            para: "Using Swedish, a rich and beautiful native language; in 2017, Swedes ranked second in the world for skills in English as an official language. As the world is getting more independent and businesses seek to extend the national and linguistic boundaries, Sweden offers a marvelous location to learn and develop your English language skills. But knowing and trying to learn a little bit of Swedish language will make much easier to open your mind to your new cultural surroundings. Also, Sweden is a car-free country with an extensive network of buses, trains, subways, trams, boats, planes, and many more that can take you anywhere you want to go.",
                        }
                    ],
                    inner_heading: "",
                    listItems: []

                },

                {
                    sub_heading: "MALMÖ",
                    heading: "A Coastal City",
                    paragraphs: [
                        {
                            para: "Malmö is among the top cities in Sweden having a free business environment and also a good place to live with outrageous rankings in housing, healthcare, and environmental quality. The University of Malmo founded in 1998, attracts above 15,000 students every year. It’s not only a global city but also a commercial hub in the South of Sweden, as part of the Öresund region. The city has attracted a wide variety of companies in the technology sector (for example bio, medical, environmental, information and communication), as well as digital media, transports, financial services, business, leisure, entertainment, and constructions. And, most importantly, the cost of an apartment in Malmo is in the 139th place of all 248 Teleport cities.",
                        }
                    ],
                    inner_heading: "",
                    listItems: []

                },

                {
                    sub_heading: "STUDYING",
                    heading: "And Working In Sweden",
                    paragraphs: [
                        {
                            para: "International students can comfortably get Sweden work permit. Unlike other countries, there’s no legal limit to the number of hours international students can work during their studies. After the completion of studies, you can apply to extend your residence permit to look for work for up to six months. (But for that learning Swedish is necessary – it’s often a job’s requirement.)",
                        }
                    ],
                    inner_heading: "",
                    listItems: []

                },

                {
                    sub_heading: "EU",
                    heading: "Citizen’s Right",
                    paragraphs: [
                        {para: "Unless you are a citizen of a neighboring Nordic country, every foreigner will need to contemplate the different types of Swedish visas. When applying for a Swedish visa, you are not allowed to be in the country. This largely related to non-EU/EEA citizens and citizens of Sweden; because citizens with EU/EEA family visa Sweden have the rights of residence in Sweden and therefore can shift to the country with or without a job. However, they will need to start the Swedish visa application process if they plan to continue their stay in a country for a long time."},
                        {para: "If you are thinking about relocation Sweden; want to study abroad and also interesting in traveling, then Swedes are waiting for you. They are very friendly and like traveling very much. They are habitually open to know about a new culture and also interested in hearing about international experiences."}
                    ],
                    inner_heading: "",
                    listItems: []

                },

                {
                    sub_heading: "VISA",
                    heading: "Requirements For Students",
                    paragraphs: [
                        {
                            para: "Students from the EU/EEA can study in Sweden without any visa requirements. If you are from outside the EU/EEA, you may need to obtain a student visa.",
                        }
                    ],
                    inner_heading: "",
                    listItems: []

                },

                {
                    sub_heading: "JOB MARKET",
                    heading: "For Graduates",
                    paragraphs: [
                        {
                            para: "Sweden is home to several internationally successful corporations – think Volvo, IKEA or H&M – but also to some of the most exciting startups of recent years – think Skype or Spotify. The in-ternationality of such employers as well as the high proficiency of English among Swedes make it fairly easy for qualified international graduates to get the foot in the door of the Swedish job market, even when their knowledge of Swedish is limited. Sweden’s government has also put an effort into decreasing red tape for foreign nationals looking to join the local workforce.",
                        }
                    ],
                    inner_heading: "",
                    listItems: []

                },

                {
                    sub_heading: "",
                    heading: "Bachelor Programs",
                    paragraphs: [
                        {para: "Application for online first admission of bachelor’s regarding different programs starts from 16th of October to 15th of January every year. After enrolling, the classes start in August."},
                        {para: "Application for online second admission of bachelor’s regarding different programs starts from 1st of June to 15th of August of every year. The classes will start in January after enrolling."}
                    ],
                    inner_heading: "",
                    listItems: []

                },

                {
                    sub_heading: "",
                    heading: "Maters Programs",
                    paragraphs: [
                        {para: "Application for online first admission round of master’s regarding different programs starts from 16th of October to 15th of January every year. After enrolling, the classes start in August."},
                        {para: "Application for online second admission round of master’s regarding different programs starts from 1st of June to 15th of August of every year. The classes will start in January after enrolling."}
                    ],
                    inner_heading: "",
                    listItems: []
                },

                {
                    sub_heading: "LETTER OF",
                    heading: "English Proficiency",
                    paragraphs: [
                        {
                            para: "There are no requirements of the language test such as TOEF and IELTS for the students who have studied at the university with IT-Engineering-Medical background. Students from Pakistan and India with their Swedish Kandidatexamen equivalent degree (Bachelors Hons) can provide letter of English proficiency from their Universities.",
                        }
                    ],
                    inner_heading: "",
                    listItems: []

                },

                {
                    sub_heading: "ENGLISH",
                    heading: "Requirement",
                    paragraphs: [
                        {
                            para: "Use our Student Assessment tool to find out if you are eligible for admission in Sweden.",
                        }
                    ],
                    inner_heading: "",
                    listItems: [
                        {list: "IELTS score of 6.5 is required"},
                        {list: "TOEFL score of 4.5 in written test is required."},
                        {list: "English Language with Proficiency Certificate from Cambridge Michigan."},
                        {list: "Minimum score for Pearson is 47."}
                    ]

                },

                {
                    sub_heading: "STUDY",
                    heading: "In Denmark",
                    paragraphs: [],
                    inner_heading: "",
                    listItems: []

                },

                {
                    sub_heading: "FACTS AND FIGURES ABOUT",
                    heading: "Higher Education In Denmark",
                    paragraphs: [
                        {
                            para: "Denmark boasts an advanced educational system with many world-class institutions. At some 30 higher education institutions, you can find well over 500 English-taught study programmes to choose from. Like many other countries, Denmark distinguishes between full research universities and more practice-oriented university colleges (elsewhere often known as “universities of applied sciences” or polytechnics). A locally special kind of institution are the business academies, which offer practice-oriented associate’s and bachelor’s degrees in business-related fields.",
                        }
                    ],
                    inner_heading: "",
                    listItems: []

                },

                {
                    sub_heading: "JOB MARKET",
                    heading: "For Graduates",
                    paragraphs: [
                        {
                            para: " In Denmark requirements vary from programme to programme. Here is what you need to know about how and when to apply.",
                        }
                    ],
                    inner_heading: "",
                    listItems: []

                },

                {
                    sub_heading: "ASSESSMENT OF",
                    heading: "Your Qualifications",
                    paragraphs: [
                        {
                            para: "Non-Danish citizens who do not have a Danish entrance examination are eligi-ble for admission if they have qualifications recognized as being comparable to Danish entrance qualifications.",
                        }
                    ],
                    inner_heading: "",
                    listItems: []
                },

                {
                    sub_heading: "FOR AN OFFICIAL ASSESSMENT OF",
                    heading: "Your Qualifications Visit Student Assessment Tool",
                    paragraphs: [],
                    inner_heading: "",
                    listItems: []

                },

                {
                    sub_heading: "GENERAL",
                    heading: "Admission Requirements",
                    paragraphs: [
                        {para: "English language requirements"},
                        {para: "All higher education programmes in Denmark require a high standard of Eng-lish. Applicants to English-taught undergraduate and postgraduate programmes must, as a minimum, prove English proficiency comparable to ‘English B’ in the Danish upper secondary school (gymnasium). Some programmes require ‘Eng-lish A’, which is one level higher than ‘English B’."},
                        {para: "To prove a satisfactory proficiency in English, the language tests TOEFL, IELTS and Cambridge ESOL examinations (CAE) are often used. The score equivalents are determined by the individual institution, so to be certain check out their language requirements."}
                    ],
                    inner_heading: "",
                    listItems: []

                },

                {
                    sub_heading: "BASED UPON A ROUGH AVERAGE OF PREVIOUS REQUIREMENTS",
                    heading: "Here Is An Estimate Of The Ranges You Can Expect",
                    paragraphs: [],
                    inner_heading: "",
                    listItems: []

                },
// missing-content
                {
                    sub_heading: "REQUIREMENTS FOR",
                    heading: "Undergraduate Studies",
                    paragraphs: [],
                    inner_heading: "Admission requirements for Bachelor programmes are:",
                    inner_heading: "Certain study programmes have additional admission requirements. This could include:",
                    listItems: [
                        {list: "An entrance examination comparable to a Danish upper secondary school leaving certificate"},
                        {list: "Proof of proficiency in English (see above)"},
                        {list: "Subjects passed on a certain level. Danish education use levels A, B and C, A being the highest."},
                        {list: "Subjects passed with a certain minimum grade"},
                        {list: "The diploma in total passed with a certain minimum GPA"},
                        {list: "Passed admission test/interview"}
                    ]

                },

                {
                    sub_heading: "REQUIREMENTS FOR",
                    heading: "Postgraduate Studies",
                    paragraphs: [],
                    inner_heading: "Admission requirements for Candidates/Master programmes are:",
                    listItems: [
                        {list: "An internationally recognized Bachelor’s degree of good standard or equivalent"},
                        {list: "Proof of proficiency in English (see above)"},
                        {list: "Proof of proficiency in Danish, if the programme is taught in Danish (se above)"}
                    ]

                },
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