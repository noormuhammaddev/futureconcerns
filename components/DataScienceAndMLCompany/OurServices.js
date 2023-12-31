import React from 'react';
import Link from 'next/link';

const OurServices = () => {
    return (
        <section className="services-area ptb-100 bg-f1f8fb">
            <div className="container">
                <div className="section-title">
                    <span className="sub-title">
                        <img src="/img/star-icon.png" alt="image" /> 
                        Our Services
                    </span>
                    <h2>We Offer Professional Solutions For Business</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.</p>
                </div>

                <div className="row">
                    <div className="col-lg-4 col-md-6 col-sm-6">
                        <div className="single-services-box">
                            <div className="icon">
                                <img src="/img/services/service-icon1.png" alt="image" />
                            </div>
                            <h3>
                                <Link href="/service-details">
                                    <a>Data Analytics</a>
                                </Link>
                            </h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.</p>
                            
                            <Link href="/service-details">
                                <a className="read-more-btn">
                                    Read More <i className="flaticon-right"></i>
                                </a>
                            </Link>
                        </div>
                    </div>

                    <div className="col-lg-4 col-md-6 col-sm-6">
                        <div className="single-services-box">
                            <div className="icon">
                                <img src="/img/services/service-icon2.png" alt="image" />
                            </div>
                            <h3>
                                <Link href="/service-details">
                                    <a>AI & ML Development</a>
                                </Link>
                            </h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.</p>
                            
                            <Link href="/service-details">
                                <a className="read-more-btn">
                                    Read More <i className="flaticon-right"></i>
                                </a>
                            </Link>
                        </div>
                    </div>
                    
                    <div className="col-lg-4 col-md-6 col-sm-6">
                        <div className="single-services-box">
                            <div className="icon">
                                <img src="/img/services/service-icon3.png" alt="image" />
                            </div>
                            <h3>
                                <Link href="/service-details">
                                    <a>Data Science</a>
                                </Link>
                            </h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.</p>
                            
                            <Link href="/service-details">
                                <a className="read-more-btn">
                                    Read More <i className="flaticon-right"></i>
                                </a>
                            </Link>
                        </div>
                    </div>
                    
                    <div className="col-lg-4 col-md-6 col-sm-6">
                        <div className="single-services-box">
                            <div className="icon">
                                <img src="/img/services/service-icon4.png" alt="image" />
                            </div>
                            <h3>
                                <Link href="/service-details">
                                    <a>Predictive Analytics</a>
                                </Link>
                            </h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.</p>
                            
                            <Link href="/service-details">
                                <a className="read-more-btn">
                                    Read More <i className="flaticon-right"></i>
                                </a>
                            </Link>
                        </div>
                    </div>
                    
                    <div className="col-lg-4 col-md-6 col-sm-6">
                        <div className="single-services-box">
                            <div className="icon">
                                <img src="/img/services/service-icon5.png" alt="image" />
                            </div>
                            <h3>
                                <Link href="/service-details">
                                    <a>Software Development</a>
                                </Link>
                            </h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.</p>
                            
                            <Link href="/service-details">
                                <a className="read-more-btn">
                                    Read More <i className="flaticon-right"></i>
                                </a>
                            </Link>
                        </div>
                    </div>
                    
                    <div className="col-lg-4 col-md-6 col-sm-6">
                        <div className="single-services-box">
                            <div className="icon">
                                <img src="/img/services/service-icon6.png" alt="image" />
                            </div>
                            <h3>
                                <Link href="/service-details">
                                    <a>Elastic Solutions</a>
                                </Link>
                            </h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.</p>
                            
                            <Link href="/service-details">
                                <a className="read-more-btn">
                                    Read More <i className="flaticon-right"></i>
                                </a>
                            </Link>
                        </div>
                    </div>

                    <div className="col-lg-12 col-md-12">
                        <div className="load-more-btn text-center">
                            <Link href="/services-two">
                                <a className="default-btn">
                                    <i className="flaticon-refresh"></i> Load More <span></span>
                                </a>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>

            <div className="circle-shape2">
                <img src="/img/shape/circle-shape2.png" alt="image" />
            </div>
            <div className="lines">
                <div className="line"></div>
                <div className="line"></div>
                <div className="line"></div>
                <div className="line"></div>
                <div className="line"></div>
            </div>
        </section>
    )
}

export default OurServices;