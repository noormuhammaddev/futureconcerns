import React from 'react';
import Link from 'next/link';

const OurMission = () => {
    return (
        <div className="our-mission-area ptb-100">
            <div className="container-fluid">
                <div className="row align-items-center">
                    <div className="col-lg-6 col-md-12">
                        <div className="our-mission-content">
                            <div className="content">
                                <h2>Real-world Data Challenges Prepare to Be A Data Science Leader</h2>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.</p>
                                <ul className="features-list">
                                    <li><i className="flaticon-tick"></i> Leadership-Focused Learning</li>
                                    <li><i className="flaticon-tick"></i> Experts at Teaching Online</li>
                                    <li><i className="flaticon-tick"></i> Proven Career Outcomes</li>
                                    <li><i className="flaticon-tick"></i> Diverse Backgrounds Welcome</li>
                                    <li><i className="flaticon-tick"></i> The Basics of Machine Learning</li>
                                </ul>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.</p>

                                <Link href="/membership-levels">
                                    <a className="default-btn">
                                        <i className="flaticon-right"></i> 
                                        Apply Now <span></span>
                                    </a>
                                </Link>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-6 col-md-12">
                        <div className="our-mission-image">
                            <img src="/img/our-mission/our-mission2.png" alt="image" />
                            <div className="shape">
                                <img src="/img/our-mission/our-mission-shape1.png" alt="image" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default OurMission;