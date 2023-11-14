import React from 'react';
import Link from 'next/link';
import Sidebar from './Sidebar';



const ServicesInnerDetail = ({data}) => {
    console.log('data ', data)
    return (
        <section className="services-details-area ptb-100">
            <div className="container">
                <div className="row">
                    <div className="col-lg-8 col-md-12">
                        <div className="services-details-image">
                            <img src={`/img/services/${data.image1}`} alt="image" />
                        </div>

                        <div className="services-details-desc">
                            {
                                data.sections.map((item, index ) => (
                                    <section key={index}> 
                                        { 
                                            item.sub_heading !== '' ? <span class="sub-title">{item.sub_heading}</span> : ''
                                        }
                                        {
                                            <h3>{item.heading}</h3>
                                        }
                                        {
                                            item.paragraphs.map((para, key) => (
                                                <p key={key} className="noor">{para.para}</p>
                                            ))
                                        }
                                        {
                                            item.inner_heading !== '' ? <strong>{item.inner_heading}</strong> : ''
                                        }
                                        {
                                            item.listItems ? <div className="content"><ul>
                                            {
                                                item.listItems.map((listItem, keyIndex) => (
                                                    <li key={keyIndex}>{listItem.list}</li>
                                                ))
                                            }
                                            </ul></div> : ''
                                        }
                                        {/* {
                                            item.paragraphs2.map((para2, paraKey) => (
                                                <p key={paraKey}>{para2}</p>
                                            ))
                                        } */}
                                        <br />
                                    </section>
                                ))
                            }
                            {/* section end */}

                        </div>
                     
                    </div>

                    <div className="col-lg-4 col-md-12">
                        <Sidebar />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default ServicesInnerDetail;