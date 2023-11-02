import React from 'react';
import Link from 'next/link';
import Sidebar from './Sidebar';

const NewInSwedenDetail = () => {
    return (
        <section className="services-details-area ptb-100">
            <div className="container">
                <div className="row">
                    <div className="col-lg-8 col-md-12">
                        <div className="services-details-image">
                            <img src="/img/services/services-details1.jpg" alt="image" />
                        </div>

                        <div className="services-details-desc">
                            <span className="sub-title">Social Security Nummber</span>
                            <h3>Personnummer</h3>
                            <p>If you are new in Sweden then the first thing you must to do is to register yourself with swedish tax authority ‘Skatteverket’ to get your social security number also called as personal identity number or personnummer. As an EU/EEA-citizen you are entitled to live, work and study in Sweden with or without a personnummer.</p>
                            <p>It is a 12-digit number issued by Skatteverket to the persons registered in Sweden when they are convinced that you can support yourself and your family during the first year of your stay.</p>
                            <p>Personnummer is not only required to be a part of the social security and health care systems in Sweden, which is otherwise quite expensive to arrange through private insurance companies, but is often used as identification proof at all government offices, banks, insurances, subscriptions, collection of postal items at the post office etc.</p>

                            <br />
                            <span className="sub-title">Take</span>
                            <h3>All These Into Consideration</h3>
                            <div className="content">
                                <h3>Important Facts</h3>
                                <ul>
                                    <li>Employment contract(s),</li>
                                    <li>Proof of savings ex. Bank statement.</li>
                                    <li>Number of members in the family</li>
                                    <li>Place of residence(must be in Sweden). You can NOT apply for a personnummer while still living abroad. Neither is a holiday address enough. You must have a residential address in Sweden.</li>
                                    <li>You need to go in person (all the persons in the family) to an office of Skatteverket to apply for a personnummer.</li>
                                    <li>A legal ID-certificate, preferably a passport for every person applying.</li>
                                </ul>
                            </div>

                            <br />
                            <span className="sub-title">identification</span>
                            <h3>Swedish ID Card</h3>
                            <p>
                                Once you have received your Social Security number, you need to book an appointment with Swedish tax authority-Skatteverket to apply for a Swedish ID card.
                            </p>

                            <p>
                                Anyone who is at least 13 years old and registered for population purposes in Sweden may apply to the Swedish Tax Agency for Swedish ID card. You must be able to identify yourself, in other words prove who you are, with approved ID documentation or via an attester.
                            </p>

                            <br />
                            <span className="sub-title">Opening of A</span>
                            <h3>Bank Account</h3>
                            <h5>General requirements:</h5>
                            <p>In order to open a bank account, you must always be able to identify yourself.</p>

                            <div className="content">
                                <ul>
                                    <li>You can identify yourself with a valid Swedish identification document, such as a passport, a national identity card or a BankID. You can also identify yourself with a Swedish driving license.</li>
                                    <li>If you do not have Swedish identification documents, you can identify yourself with a valid foreign passport or other photo identification document that clearly shows your citizenship and is issued by an authority or some other authorised issuer. Note that the bank may request that you also present other documents.</li>
                                    <li>If you do not have any valid identity documents, you must be able to prove who you are and your citizenship by means of other documents issued by a competent authority.</li>
                                </ul>
                            </div>
                            

                            <h3>Application Areas</h3>

                            <div className="row">
                                <div className="col-lg-4 col-sm-6 col-md-6">
                                    <div className="single-industries-serve-box">
                                        <div className="icon">
                                            <i className="flaticon-factory"></i>
                                        </div>
                                        Manufacturing
                                    </div>
                                </div>
            
                                <div className="col-lg-4 col-sm-6 col-md-6">
                                    <div className="single-industries-serve-box">
                                        <div className="icon">
                                            <i className="flaticon-hospital"></i>
                                        </div>
                                        Healthcare
                                    </div>
                                </div>
            
                                <div className="col-lg-4 col-sm-6 col-md-6">
                                    <div className="single-industries-serve-box">
                                        <div className="icon">
                                            <i className="flaticon-tracking"></i>
                                        </div>
                                        Automobile
                                    </div>
                                </div>
            
                                <div className="col-lg-4 col-sm-6 col-md-6">
                                    <div className="single-industries-serve-box">
                                        <div className="icon">
                                            <i className="flaticon-investment"></i>
                                        </div>
                                        Banking
                                    </div>
                                </div>
            
                                <div className="col-lg-4 col-sm-6 col-md-6">
                                    <div className="single-industries-serve-box">
                                        <div className="icon">
                                            <i className="flaticon-house"></i>
                                        </div>
                                        Real Estate
                                    </div>
                                </div>
            
                                <div className="col-lg-4 col-sm-6 col-md-6">
                                    <div className="single-industries-serve-box">
                                        <div className="icon">
                                            <i className="flaticon-order"></i>
                                        </div>
                                        Logistics
                                    </div>
                                </div>
                            </div>

                            <h3>Technologies That We Use</h3>
                            <ul className="technologies-features">
                                <li><span>JavaScript</span></li>
                                <li><span>Python</span></li>
                                <li><span>Java</span></li>
                                <li><span>C/CPP</span></li>
                                <li><span>PHP</span></li>
                                <li><span>Swift</span></li>
                                <li><span>C# (C- Sharp)</span></li>
                                <li><span>Ruby</span></li>
                                <li><span>SQL</span></li>
                            </ul>
                            <div className="charts-image">
                                <img src="/img/services/charts.jpg" alt="image" />
                            </div>
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

export default NewInSwedenDetail;