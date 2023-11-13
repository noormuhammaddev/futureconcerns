import React from 'react';
import Link from 'next/link';

const listData = [
    {
        label: 'Asylum',
        url: '/service-detail/asylum'
    },
    {
        label: 'Investment',
        url: '/service-detail/investment'
    },
    {
        label: 'Citizenship',
        url: '/service-detail/citizenship'
    },
    {
        label: 'Study in EU',
        url: '/service-detail/study-in-eu'
    },
    {
        label: 'Work Permit',
        url: '/service-detail/work-permit'
    },
    {
        label: 'Appeal Cases',
        url: '/service-detail/appeal-cases'
    },
    {
        label: 'Eea Permits',
        url: '/service-detail/eea-permits'
    },
    {
        label: 'Business Visit',
        url: '/service-detail/business-visit'
    },
    {
        label: 'House & Offices',
        url: '/service-detail/house-and-offices'
    },
    {
        label: 'Business Permit',
        url: '/service-detail/business-permit'
    },
    {
        label: 'Global Visit Visas',
        url: '/service-detail/global-visit-visas'
    },
    {
        label: 'Marriage & Divorce',
        url: '/service-detail/marriage-and-divorce'
    },
    {
        label: 'Parents EU Permit',
        url: '/service-detail/parents-eu-permit'
    },
    {
        label: 'System Developers',
        url: '/service-detail/system-developers'
    },
    {
        label: 'Company Registration',
        url: '/service-detail/company-registration'
    },
    {
        label: 'CPR Number Denmark',
        url: '/service-detail/cpr-number-denmark'
    },
    {
        label: 'EU Family Reunification',
        url: '/service-detail/eu-family-reunification'
    },
    {
        label: 'Permanent Residence',
        url: '/service-detail/permanent-residence'
    },
    {
        label: 'Personnummer Sweden',
        url: '/service-detail/personnummer-sweden'
    },
    {
        label: 'Golden Visa (greece-portugal)',
        url: '/service-detail/golden-visa'
    },
    {
        label: 'Direct Citizenship by Investments',
        url: '/service-detail/direct-citizenship-by-investments'
    },
    
]

const Sidebar = () => {
    return (
        <div className="services-details-info">
            <ul className="services-list">
                {listData.map((item, index) => (
                <li key={index}>
                    <Link href={item.url}>
                        <a href="#">{item.label}</a>
                    </Link>
                </li>
            ))}
            </ul>
        </div>
    )
}

export default Sidebar;