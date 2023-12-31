import React from 'react';
import Link from 'next/link';

const OurMission = () => {
    return (
        <section className="our-mission-area ptb-100">
            <div className="container-fluid">
                <div className="row align-items-center">
                    <div className="col-lg-6 col-md-12">
                        <div className="our-mission-content">
                            <div className="content">
                                <span className="sub-title">
                                    <img src="/img/star-icon.png" alt="image" /> Our Mission
                                </span>
                                <h2>Data Science & Data Analysis Agency</h2>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.</p>
                                <ul className="our-mission-list">
                                    <li>
                                        <i className="flaticon-tick"></i>
                                        Global Experience
                                        <img src="/img/our-mission/our-mission-shape2.png" alt="image" />
                                    </li>
                                    <li>
                                        <i className="flaticon-tick"></i>
                                        Value for Results
                                        <img src="/img/our-mission/our-mission-shape2.png" alt="image" />
                                    </li>
                                    <li>
                                        <i className="flaticon-tick"></i>
                                        User Prespective
                                        <img src="/img/our-mission/our-mission-shape2.png" alt="image" />
                                    </li>
                                    <li>
                                        <i className="flaticon-tick"></i>
                                        Business Prespective
                                        <img src="/img/our-mission/our-mission-shape2.png" alt="image" />
                                    </li>
                                    <li>
                                        <i className="flaticon-tick"></i>
                                        Expert Prepective
                                        <img src="/img/our-mission/our-mission-shape2.png" alt="image" />
                                    </li>
                                    <li>
                                        <i className="flaticon-tick"></i>
                                        Retail Solutions
                                        <img src="/img/our-mission/our-mission-shape2.png" alt="image" />
                                    </li>
                                </ul>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.</p>
                                
                                <Link href="/about-us-two">
                                    <a className="default-btn">
                                        <i className="flaticon-right"></i>
                                        Read More
                                        <span></span>
                                    </a>
                                </Link>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-6 col-md-12">
                        <div className="our-mission-image">
                            <img src="/img/our-mission/our-mission1.png" alt="image" />
                            <div className="shape">
                                <img src="/img/our-mission/our-mission-shape1.png" alt="image" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default OurMission;