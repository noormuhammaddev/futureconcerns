import React from 'react';
import {
    Accordion,
    AccordionItem,
    AccordionItemHeading,
    AccordionItemPanel,
    AccordionItemButton
} from 'react-accessible-accordion';

const faqData= [
    {
        question: 'What is a Visa?',
        answer: 'A Visa is an authorization issued by the representative of the Government of a country permitting a person, not resident in that country, to enter its boundaries.',
        uuid: 'faq1'
    },
    {
        question: 'How do I know if I need a visa?',
        answer: 'Depending on your purpose of travel, you can visit our website to check the eligibility.',
        uuid: 'faq2'
    },
    {
        question: 'Is the visa valid for Sweden only?',
        answer: 'The Embassy of Sweden issues visas for Sweden and for the other Schengen states. The Schengen visa issued by the Embassy of Sweden gives access to 26 Schengen countries in total. However, the Schengen Visa applications will only be accepted by The Sweden Visa Application Centre if Sweden is the country of maximum stay. Should the duration of the stay be the same in several Schengen States, Sweden must be the first point of entry if making an application at the Sweden Visa Application Centre.',
        uuid: 'faq3'
    },
    {
        question: 'How Future Concerns can provide assistance?',
        answer: 'We can provide you legal assistance from day one until you get your residence permit. We must arrange personal meeting to discuss client’s background.',
        uuid: 'faq4'
    },
    {
        question: 'Is Future Concerns registered company?',
        answer: 'Yes. We are registered company for Public Assistance (Offentliga Biträden) based in Malmö, Sweden',
        uuid: 'faq5'
    },
    {
        question: 'How to sign up on your website and why its important?',
        answer: 'You must have a valid email ID to sign up on our website. We collect basic information’s to avoid the spam accounts.You can Upload Documents, Check your Application Status, Send-Receive messages, invoices, Manage your appointments through our online portal.',
        uuid: 'faq6'
    },
    {
        question: 'What is Assessment?',
        answer: 'We made this assessment tool to make sure, if you are eligible for your desired Visa or residence Permit. In the end of your assessment process you would receive your Result. Positive-Negative-Not Sure.',
        uuid: 'faq7'
    },
    {
        question: 'How can I use the assessment tool?',
        answer: 'You can see the video https://youtu.be/3BHe-pJDF4U.',
        uuid: 'faq8'
    },
    {
        question: 'Do you have any office here in Copenhagen,Denmark?',
        answer: 'Yes, Every Friday we are available in Smedeland 7 1. Sal 2600 Glostrup, Denmark, you can book online appointment.',
        uuid: 'faq9'
    },
    {
        question: 'Do I need to pay any fee for consultation?',
        answer: 'Yes, We charge one-time appointment fee of 1000 Kr which we adjust once you choose any of our services.',
        uuid: 'faq10'
    },
    {
        question: 'How can I sign up ?',
        answer: 'You can see this video, this explains in detail how to sign up https://www.youtube.com/watch?v=ojC4080yZdI.',
        uuid: 'faq11'
    },
    {
        question: 'What are the documents required for a Sweden Visa?',
        answer: 'Depends on what type of Visa, Residence permit you are applying.You can visit Assessment to find out more.',
        uuid: 'faq12'
    },
    {
        question: 'I am living in Denmark and I want to move to Sweden I don’t know where to start?',
        answer: 'We can provide you complete assistance to relocate to Sweden, Like Housing, Registration, Residence Permit, Health, School etc.',
        uuid: 'faq13'
    },
    {
        question: 'How do I submit my application for my wife and children’s?',
        answer: 'You can book an appointment for this purpose.',
        uuid: 'faq14'
    },
    {
        question: 'My wife visa has been refused twice, and I want to make an appeal and looking for lawyer?',
        answer: 'Yes, we can make an appeal against the decision.',
        uuid: 'faq15'
    },
    {
        question: 'Can I apply for my husband visa as we recently got married in India and I am Danish Citizen?',
        answer: 'Yes, You can. For more details you need to visit us.',
        uuid: 'faq16'
    },
    {
        question: 'I have Long-Term or Permanent Residence permit from EU country, can I move to Sweden?',
        answer: 'Yes, If you have permanent residence permit from any EU country except (Denmark,England,Ireland) you are eligible to move to Sweden and can work. For more information please book an appointment with us.',
        uuid: 'faq17'
    },
    {
        question: 'I am planning to get married in Sweden with my partner, but I don’t know about the rules?',
        answer: 'We can provide your complete assistance. Make an appointment.',
        uuid: 'faq18'
    },
    {
        question: 'I tried to sign up but did not received any activation email?',
        answer: 'Kindly check you Junk or Spam email if you did not received an email. You can send us an email to Support@futureconcerns.se if you are not able to login.',
        uuid: 'faq19'
    },
    {
        question: 'Can you help me about the housing in Sweden; I want to move to Sweden with my Small family?',
        answer: 'You are always welcome to leave a query and see available apartments on our website.You can rent out your apartment through us.',
        uuid: 'faq20'
    },
    {
        question: 'I am looking to setup business in Sweden; can you help me out in documentation process?',
        answer: 'Yes, we do. Make an appointment.',
        uuid: 'faq21'
    },
    {
        question: 'I want to rent out my apartment but why should I rent out my apartment through Future Concerns?',
        answer: 'If you will rent out your apartment through us, we will offer you commission which we get from tenants. We can manage the first connections between landlord and potential tenant(s), and then organize a meeting in order to let you meet in person. We will help you with the rental contract, and we are available for any basic question and doubt that you may have when renting your property.',
        list: [
            'Commission only valid if you rent out for minimum one year.'
        ],
        uuid: 'faq22'
    },
    {
        question: 'I moved to Sweden from Denmark around 10 years ago but now I want to move back and selling my apartment, are you interested to buy?',
        answer: 'In Sweden only, Property Broker can sell the apartment and we are working with them so we can help you to sell your apartment/villas.',
        uuid: 'faq23'
    },
    {
        question: 'I want to move with my family to Sweden from Ireland and looking for complete relocation consulting until my kids starts school?',
        answer: 'Please arrange a meeting or contact us via email/Phone.',
        uuid: 'faq24'
    },
    {
        question: 'I want to study in Sweden, my friend got scholarship last year through your services, can I?',
        answer: 'You are always wellcome to contact us regarding your admission process, but scholarship is really depending on your previous educational background. You can visit our website and make an assessment.',
        uuid: 'faq25'
    },
    {
        question: 'What if I do not have all the documents?',
        answer: 'If your application is not accompanied by the documents that are recommended by the Embassy of Sweden, Incomplete applications may lead to processing delays or rejected.',
        uuid: 'faq26'
    },
    {
        question: 'I am looking to setup business in Sweden; can you help me out in documentation process?',
        answer: 'Yes, we do. Make an appointment.',
        uuid: 'faq27'
    },
    {
        question: 'Can you help in Company registration process and if yes how long it will take to register company in Sweden?',
        answer: 'Yes, In Sweden we have different type of companies so processing time is very depending on what kind of company you are looking to start. Make an Appointment',
        uuid: 'faq28'
    },
    {
        question: 'I am looking an office or Temporary address for company registration?',
        answer: 'Kindly make an appointment for this purpose.',
        uuid: 'faq29'
    },
    {
        question: 'Where can I find my payment invoice?',
        answer: 'You can see the video https://youtu.be/qhARniXraNA',
        uuid: 'faq30'
    },
    {
        question: 'What is Complete IT solution for business?',
        answer: 'As I saw on your website. Now a days every business needs a modern shape, like website, Software’s, mobile apps etc. We develop everything for your business and provide you complete IT solutions.',
        uuid: 'faq31'
    },
    {
        question: 'I have got contract from my company where I am currently working, and now want to apply for Work permit, can you make my application?',
        answer: 'Yes, we can take care of complete process.For more you can visit our website',
        uuid: 'faq32'
    },
    {
        question: 'I need to apply for my citizenship for Sweden; can I come to you and how much it will cost?',
        answer: 'Yes, you are always welcome. Cost depends on number of hours spending on your application.',
        uuid: 'faq33'
    },
    {
        question: 'I am running my IT company in India can i open a branch office in Sweden?',
        answer: 'Yes, You Can. Get an appointment for details informations.',
        uuid: 'faq34'
    },
    {
        question: 'How E-Visa Services Works?',
        answer: 'In the first step we must find out either you are eligible for E-Visa-click here to find out Assessment. If you are eligible for E-Visa, you can simply fill our E-Visa form and attach the documents you will receive your E-Visa in the email, or you can download from our portal. IF you are not eligible then you can fill our Visa by Embassy Form and we will prepare your application and send you via post or you can download from our online portal.',
        uuid: 'faq35'
    },
    {
        question: 'Where can I see the service charges?',
        answer: 'You can see the video https://www.youtube.com/watch?v=nKlzDFUKdtc',
        uuid: 'faq36'
    },
    {
        question: 'How can I upload my documents',
        answer: 'You can see the video https://youtu.be/bz3KVaFUlJA',
        uuid: 'faq37'
    },
    {
        question: 'I am EU citizen how can i get ETA-ESTA for USA,CANADA, AUSTRALIA?',
        answer: 'Its very simple.If you are EU citizen then Choose your visiting country for ETA-ESTA and fill out our simple ETA form, attach the documents. If we need further informations we will contact you otherwise You will received your E-Visa in your email.',
        uuid: 'faq38'
    },
    {
        question: 'We are Danish company and want to send our employees to india for business trip. Can you prepare visa applications?',
        answer: 'Yes, For most of the EU citizens these visa or online so you just need to provide us information and we will do it on company behalf. You can provide us details on under E-Visa Section.',
        uuid: 'faq39'
    },
    {
        question: 'I am living outside of Europe and want to apply for UK, USA, Canada, visit visas?',
        answer: 'Can i? Yes, we can help you to make application for visit visas globally, you must have stable income to apply for visa.You can use our assessment tool to find out either you are eligible for this. You don’t need to visit us in our office just provide all the information’s under Visa by Embassy section we prepare your file and you can download it from our Online Portal, or we can post it to you anywhere in the world.',
        uuid: 'faq40'
    },
    {
        question: 'Do you provide consulting for immigration to CANADA, AUS, NEW ZEALAND?',
        answer: 'Yes, we have recently started these services. For more information you can contact us via email.',
        uuid: 'faq41'
    },
    {
        question: 'I have already signed up with Future Concerns and now want to upload my documents but it’s not working?',
        answer: 'We already make sure that everything working properly. If you still have any sort of issue you can contact on support@futureconcerns.se',
        uuid: 'faq42'
    },
    {
        question: 'Can I pay on behalf of my cousin as transferring money from Pakistan to Sweden cost a lot?',
        answer: 'Once we create the invoice you find bank details on that so anyone can pay the invoice before the due date.',
        uuid: 'faq43'
    },
    {
        question: 'Can you promote/introduce our product in Europe?',
        answer: 'Yes, You can Sign Up and fill the query form under MY Business (Import-Export Services)',
        uuid: 'faq44'
    },
    {
        question: 'Can we book appointment via telephone?',
        answer: 'Yes, but we recommend book it online.',
        uuid: 'faq45'
    },
    {
        question: 'I booked an appointment online and already paid but now i want to change it. Can i?',
        answer: 'Yes, every time when you booked an appointment you will receive a confirmation email where you can find the link Manage Appointment, or you can login to our website and go to appointments and manage your appointment. Remember you can’t reschedule the appointment on the same day.',
        uuid: 'faq46'
    },
    {
        question: 'I made an appointment on Future Concerns mobile app and paid online, but did not received any confirmation email?',
        answer: 'In that case you must check your spam or junk folder, or you can login Future Concerns app and you would find that in invoice section.',
        uuid: 'faq47'
    },
    {
        question: 'Can you provide management services regarding my investment?',
        answer: 'Or do you have persons who are looking for investors? Yes,We introduce young entrepreneurs and investors to each other. You can sign up and send us query under the My Business Section.',
        uuid: 'faq48'
    },
    {
        question: 'How can I see my visa status?',
        answer: 'You can see the video https://youtu.be/qhARniXraNA',
        uuid: 'faq49'
    },
    {
        question: 'Where can I send query?',
        answer: 'You can see the video https://www.youtube.com/watch?v=aPXZtKUhQYc',
        uuid: 'faq50'
    },
    {
        question: 'How can I become an agent ?',
        answer: 'You can see the video https://www.youtube.com/watch?v=wQLMbDMEoTE',
        uuid: 'faq51'
    },
    {
        question: 'Where can I see the list of available apartments?',
        answer: 'You can visit https://futureconcerns.se/pages/Apartment/looking_for_apartment and see the video https://www.youtube.com/watch?v=IpYhpYYO2os',
        uuid: 'faq52'
    },
    {
        question: 'How can I contact you ?',
        answer: 'You can reach out tous through the user portal or by the given numbers: +46 766 276 276, +45 53 766 276',
        uuid: 'faq53'
    },
    {
        question: 'Does FAQs not able to answer your questions?',
        answer: 'Send email and ask support@futureconcerns.se',
        uuid: 'faq54'
    },
]

const FaqContent = () => {
    return (
        <div className="ptb-100">
            <div className="container">
                <div className="section-title">
                    <span className="sub-title">
                        <img src="/img/star-icon.png" alt="image" /> 
                        What We Offer
                    </span>
                    <h2>Do You Have Questions ?</h2>
                </div>

                <div className="faq-accordion">
                    <Accordion allowZeroExpanded preExpanded={['a']}>
                        {
                            faqData.map((item, index) => (
                                <AccordionItem uuid={item.uuid}>
                                    <AccordionItemHeading>
                                        <AccordionItemButton>
                                            {item.question}
                                        </AccordionItemButton>
                                    </AccordionItemHeading>
                                    <AccordionItemPanel>
                                        <p>{item.answer}</p>
                                    </AccordionItemPanel>
                                </AccordionItem>
                            ))
                        }
                    </Accordion>
                </div>

       
            </div>
        </div>
    )
}

export default FaqContent;