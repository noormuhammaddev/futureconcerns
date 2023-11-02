import React from 'react';
import Link from 'next/link';

const services = [
    {
        icon: 'flaticon-house',
        heading: 'Asylum',
        description: 'You have to be in Sweden or on the Swedish border in order to apply for asylum.',
        url: '#'
    },
    {
        icon: 'flaticon-team',
        heading: 'Family Reunification',
        description: 'Family reunification is a recognized reason for the immigration of family members to a country.',
        url: '#'
    },
    {
        icon: 'flaticon-rocket',
        heading: 'Personnummer Sweden',
        description: 'The personal identification is a number that the Swedish Tax Agency assigns to person registered in Sweden.',
        url: '#'
    },
    {
        icon: 'flaticon-rocket',
        heading: 'CPR Number Denmark',
        description: 'CPR stands for Det Centrale Personregister, which translates to the Civil Registration System',
        url: '#'
    },
    {
        icon: 'flaticon-rocket',
        heading: 'Work Permit',
        description: 'Permit To Work refers to management systems used to ensure that work is done safely and efficiently.',
        url: '#'
    },
    {
        icon: 'flaticon-rocket',
        heading: 'Business Permit',
        description: 'Swedish business culture is open and innovative, and starting a business there is relatively simple',
        url: '#'
    },
    {
        icon: 'flaticon-rocket',
        heading: 'Business Visit',
        description: 'Foreign people who want to invest in Sweden and stay temporarily for that purpose can apply for business visa.',
        url: '#'
    },
    {
        icon: 'flaticon-rocket',
        heading: 'Citizenship',
        description: 'When you have lived in Sweden for a specified period and meet requirements, you can apply for Swedish citizenship.',
        url: '#'
    },
    {
        icon: 'flaticon-rocket',
        heading: 'Study in EU',
        description: 'If you are thinking about studying abroad, then visit Sweden. Sweden is well known for its world-class academic opportunities.',
        url: '#'
    },
    {
        icon: 'flaticon-rocket',
        heading: 'Global Visit Visas',
        description: 'For visiting Sweden for a short period you will need a visit visa. Sweden follows the same visa rules as others.',
        url: '#'
    },
    {
        icon: 'flaticon-rocket',
        heading: 'EEA Permits',
        description: 'Any EU citizen getting residence in the UK according to the EU rules, can bring their family with them.',
        url: '#'
    },
    {
        icon: 'flaticon-rocket',
        heading: 'Parents EU Permit',
        description: 'Parents of a child under 18 years who is in Sweden can move to sweden if they will live with the child.',
        url: '#'
    },
    {
        icon: 'flaticon-rocket',
        heading: 'Marriage & Divorce',
        description: 'Getting married is beautiful. But to make sure that it will be a good experience, it is important to have legal control.',
        url: '#'
    },
    {
        icon: 'flaticon-rocket',
        heading: 'Company Registration',
        description: 'If you are planning to register your company inside Sweden, you can reach us anytime if you have some queries about it.',
        url: '#'
    },
    {
        icon: 'flaticon-rocket',
        heading: 'House & Offices',
        description: 'we offer you an easy and painless solution where you can get a place to live without any worries.',
        url: '#'
    },
    {
        icon: 'flaticon-rocket',
        heading: 'Appeal Cases',
        description: 'Have you been denied? let’s take a look at your case so that the decision can hopefully be overturned.',
        url: '#'
    },
    {
        icon: 'flaticon-rocket',
        heading: 'EU Citizens Relocation',
        description: 'Family reunification means that a family that has been split up can apply to be allowed to live together.',
        url: '#'
    },
    {
        icon: 'flaticon-rocket',
        heading: 'Investment',
        description: 'There are various opportunities for business ventures, Look for the best opportunity, grab it and do your best.',
        url: '#'
    },
    {
        icon: 'flaticon-rocket',
        heading: 'Direct Citizenship by Investments',
        description: 'citizenship-by-investment programs provide ultra-wealthy families with the privilege of a second or third passport.',
        url: '#'
    },
    {
        icon: 'flaticon-rocket',
        heading: 'Permanent Residence',
        description: 'If you lived in Sweden for more than 5 years with the EU right of residence you can get the permanent residence permit.',
        url: '#'
    },
    {
        icon: 'flaticon-rocket',
        heading: 'Golden Visa (Greece - Portugal)',
        description: 'As a member state of the EU, They offer its residents and citizens a number of reassuring benefits.',
        url: '#'
    },

]

console.log(services[0].heading)

const ServicesOne = () => {
    return (
        <section className="solutions-area pt-100 pb-70">
            <div className="container">
                <div className="row">
                    {
                        services.map((item, index) => (
                            <div className="col-lg-4 col-md-6 col-sm-6" key={index}>
                                <div className="single-solutions-box">
                                    <div className="icon">
                                        <i className={item.icon}></i>
                                    </div>
                                    <h3>
                                        <Link href="/service-details">
                                            <a>{item.heading}</a>
                                        </Link>
                                    </h3>
                                    <p>{item.description}</p>

                                    <Link href="/service-details">
                                        <a className="view-details-btn">View Details</a>
                                    </Link>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
        </section>
    )
}

export default ServicesOne;