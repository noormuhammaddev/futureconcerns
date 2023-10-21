import React from 'react';
import Link from 'next/link';

const OurSolutions = () => {
    return (
        <section className="solutions-area pb-70">
            <div className="container">
                <div className="section-title">
                    <span className="sub-title">
                        <img src="/img/star-icon.png" alt="image" /> 
                        WE EMPOWER YOUR SKILLS TO SUCCEED IN SWEDEN!
                    </span>
                    <h2>IT Manpower Solutions For Swedish Companies</h2>
                </div>

                <div className="row">
                    <div className="col-lg-4 col-sm-6">
                        <div className="single-solutions-box">
                            <div className="icon">
                                <i className="flaticon-rocket"></i>
                            </div>
                            <h3>
                                <Link href="/service-details">
                                    <a>Software Development</a>
                                </Link>
                            </h3>
                            <p>We combine our tech expertise and industry-specific knowledge to provide you develop outstanding software solutions for your projects. With a sharp focus on quality-driven results, we have proven to be a reliable partner for companies looking to propel their growth through software development services.</p>

                            <Link href="/service-details">
                                <a className="view-details-btn">View Details</a>
                            </Link>
                        </div>
                    </div>

                    <div className="col-lg-4 col-sm-6">
                        <div className="single-solutions-box">
                            <div className="icon">
                                <i className="flaticon-laptop"></i>
                            </div>

                            <h3>
                                <Link href="/service-details">
                                    <a>API Integrations</a>
                                </Link>
                            </h3>

                            <p>We can provide you with the team to embed customizable integrations into your product. This will solve your integration backlog and give you more time to actually build your product. You can connect virous services which can give your business a sudden boost.</p>
                            
                            <Link href="/service-details">
                                <a className="view-details-btn">View Details</a>
                            </Link>
                        </div>
                    </div>

                    <div className="col-lg-4 col-sm-6 offset-lg-0 offset-sm-3">
                        <div className="single-solutions-box">
                            <div className="icon">
                                <i className="flaticon-money"></i>
                            </div>

                            <h3>
                                <Link href="/service-details">
                                    <a>App Development</a>
                                </Link>
                            </h3> 

                            <p>The world went mobile. To keep up to date use the resources and expertise of the Top Software Development Company and let us lead you through the process of creating an intelligent solution that will be a good fit for mobile users. Our developer’s team provide you with instant solution for modern business.</p>
                            
                            <Link href="/service-details">
                                <a className="view-details-btn">View Details</a>
                            </Link>
                        </div>
                    </div>

                    <div className="col-lg-4 col-sm-6 offset-lg-0 offset-sm-3">
                        <div className="single-solutions-box">
                            <div className="icon">
                                <i className="flaticon-money"></i>
                            </div>

                            <h3>
                                <Link href="/service-details">
                                    <a>Digital Marketing</a>
                                </Link>
                            </h3> 

                            <p>Sales and marketing go hand in hand. Marketing attracts the right audience, and sales take mature prospects through their buying journey and eventually to a sale. Given the relationship between the two teams, you can improve their conversion rates by connecting them seamlessly through integrations.</p>
                            
                            <Link href="/service-details">
                                <a className="view-details-btn">View Details</a>
                            </Link>
                        </div>
                    </div>

                    <div className="col-lg-4 col-sm-6 offset-lg-0 offset-sm-3">
                        <div className="single-solutions-box">
                            <div className="icon">
                                <i className="flaticon-money"></i>
                            </div>

                            <h3>
                                <Link href="/service-details">
                                    <a>Cross Platform Development</a>
                                </Link>
                            </h3> 

                            <p>Take advantage of modern frameworks which make coding easier and create interactive mobile applications for both iOS and Android platforms, with a single JavaScript codebase. We can provide you right manpower services for instant solution.</p>
                            
                            <Link href="/service-details">
                                <a className="view-details-btn">View Details</a>
                            </Link>
                        </div>
                    </div>

                    <div className="col-lg-4 col-sm-6 offset-lg-0 offset-sm-3">
                        <div className="single-solutions-box">
                            <div className="icon">
                                <i className="flaticon-money"></i>
                            </div>

                            <h3>
                                <Link href="/service-details">
                                    <a>Business Visa</a>
                                </Link>
                            </h3> 

                            <p>For the persons whose jobs require a minimum work experience.</p>
                            
                            <Link href="/service-details">
                                <a className="view-details-btn">View Details</a>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default OurSolutions;