import React, { useEffect } from 'react';
import Navbar from '../../components/_App/Navbar';
import PageBanner from '../../components/Common/PageBanner';
import Footer from '../../components/_App/Footer';
import ServicesInnerDetail from '../../components/ServicesInnerDetail/ServicesInnerDetail';

const data = {
    title: "EEA PERMITS",
    image1: "eea-permits-1536x1097.png",
    sections: [
        {
            sub_heading: "EEA",
            heading: "Family Permit",
            paragraphs: [
                {para: "Any EU citizen getting a residence in the UK according to the EU rules, can bring their family with them. The EEA permit allows the family member to work in the UK. The permit is valid for only 6 months."},
                {para: "You can get refused when entering the UK without a permit. You can apply for the EU card which is valid for 5 years, once you are in the UK. The residence card makes it easier for a person to work in the UK. However, The extended family has to apply for a residence card."}
            ],
            inner_heading: "",
            listItems: []

        },

        {
            sub_heading: "HOW TO QUALIFY FOR THE",
            heading: "EEA Family Permit",
            paragraphs: [
                {para: "You can apply for an EEA permit if you are a family member of an EU citizen or a Swiss citizen. You can stay in Uk for more than 3 months if your EU family member sponsors you or has a permanent residence in the UK. It is also possible when your EU family member is working, studying, or running a business. Although you should have complete health insurance."},
            ],
            inner_heading: "",
            listItems: []

        },

        {
            sub_heading: "WHO IS A",
            heading: "Family Member",
            paragraphs: [
                {para: "You must be the EEA citizen’s spouse or civil partner, or the child or grandchild under 21 of the EU national or his spouse/civil partner. Dependent parents, grandparents, children or grandchildren over 21 (of the EU national or his spouse) can be taken as family at any age if they can prove to be financially dependant on the EU sponsor."},
            ],
            inner_heading: "",
            listItems: []

        },

        {
            sub_heading: "EXTENDED",
            heading: "Family Member",
            paragraphs: [
                {para: "It is also possible to apply as an extended family member of the EU national. It can be, for example, an unmarried partner who has been in a relationship with the EU citizen and has, in general, lived with him/her for at least 2 years, brother, sister, aunt, uncle, cousin, or niece."},
                {para: "Except for unmarried partners, all other extended family members must prove to be or have been dependent on the EU citizen or being a member of their household. The extended family member can also have to prove."}
            ],
            inner_heading: "",
            listItems: []

        },

        {
            sub_heading: "DERIVATIVE",
            heading: "Right Of Residence",
            paragraphs: [
                {para: "It is possible to apply for an EEA Family Permit if you have a derivative right of residence."},
                {para: "The Home Office defines the primary caretaker as someone who has the responsibility for the day-to-day care of the person. This includes decision-making about education, health, and finance."},
                {para: "The primary caretaker must be a family member or the legal guardian. This person can be the main caretaker or can share the responsibility with someone else. You must fulfill very strict requirements to qualify under this route."}
            ],
            inner_heading: "You will have a derivative right of residence if you are:",
            listItems: [
                    {list: "The primary caretaker of an EEA child in the UK, and financially independent."},
                    {list: "A child of an EEA former worker and you are currently in education in the UK."},
                    {list: "The primary caretaker of a child of an EEA former worker. This child is currently in education in the UK."},
                    {list: "A primary caretaker of a British child."},
                    {list: "The primary caretaker of a British dependent adult; or"},
                    {list: "A child of a primary caretaker who qualifies through one of these categories."}
            ]

        },

        {
            sub_heading: "RETAINED",
            heading: "Right Of Residence",
            paragraphs: [
                {para: "One can apply for an EEA Family Permit if you previously had a right to reside in the UK as the family member of an EEA national who either had a permanent right of residence in the UK or was a worker, student, self-employed person, self-sufficient person or someone looking for work in the UK."},
            ],
            inner_heading: "",
            listItems: []

        },

        {
            sub_heading: "YOU CAN RECEIVE A RETAINED",
           heading: "Right Of Residence In One Of The Following Ways",
            paragraphs: [],
            inner_heading: "",
            listItems: [
                    {list: "Your marriage or civil partnership to that person has ended due to a divorce, annulment or dissolution."},
                    {list: "The person died, and you have lived in the UK for at least one year before their death."},
                    {list: "You are the child of an EEA national who has died or left the UK. Or you are the child of their spouse or civil partner, or former spouse or civil partner, and you were in education when that person left the UK or died, and you continue to be in education."},
                    {list: "You are the parent and have custody, of a child who has a retained right of residence because they are in education in the UK."}
            ]

        },

        {
            sub_heading: "SPECIFIC REQUIREMENTS",
           heading: "In Cases Of Divorces",
            paragraphs: [
                {para: "It is only possible to apply if you were in the UK as the EEA national’s family member on the date the divorce/civil partnership was ended and one of the following applies;"},
                {para: "After spending five years in the UK, from the first date of entry, with the EEA family visa, it is possible to apply for Indefinite Leave to Remain in the UK. It is important though to note that the EU citizen must fulfill the requirements throughout the 5-year period."}
            ],
            inner_heading: "",
            listItems: [
                {list: "The civil partnership or marriage lasted 3 years before legal proceedings began. The couple lived in the UK for at least 1 year before the divorce, annulment or dissolution was finalized."},
                {list: "You have custody of a child of the relevant EEA national."},
                {list: "You have access rights to the child of the relevant EEA national. The judge ordered access to the child in the UK, and the child is younger than 18 years of age."},
                {list: "You, or a family member, have been a victim of domestic violence during the marriage or civil partnership."},
                {list: "Any other particularly difficult circumstances that will justify the retaining right of residence."},
                {list: "Indefinite Leave to Remain in the UK and the EEA Family Permit"}
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