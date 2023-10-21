import React from 'react';
import Link from 'next/link';

const MainBanner = () => {
    return (
        <div className="it-services-banner">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-6 col-md-12">
                        <div className="main-banner-content">
                            <p>WE PROVIDE YOUR RIGHT EMPLOYEES TO  GROW YOUR BUSINESS</p>
							
                            <h1
                                className="
                                    animate__animated 
                                    animate__fadeInLeft 
                                    animate__delay-0.1s
                                "
                            >Grow Your Business with Right Employees</h1>
                     
                            <p
                                className="
                                    animate__animated 
                                    animate__fadeInLeft 
                                    animate__delay-0.1s
                                "
                            >
                                We provide highly skilled workers from all over the world for Swedish Companies to grow!
                                Web, App, Software Developers, IT Consultants, Solar Panel Specialist, Construction workers.
                            </p>

                        
                            <div className="btn-box animate__animated animate__fadeInRight animate__delay-0.1s d-flex gap-2">
                                <Link href="/contact">
                                    <a className="default-btn">
                                        <i className="flaticon-right"></i> 
                                        Our Services <span></span>
                                    </a> 
                                </Link>

                                <Link href="/contact">
                                    <a className="default-btn">
                                        <i className="flaticon-right"></i> 
                                        Contact Us <span></span>
                                    </a> 
                                </Link>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-6 col-md-12">
                        <div className="main-banner-image animate__animated animate__fadeInUp animate__delay-0.1s">
                            <img src="/img/banner-img1.png" alt="image" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default MainBanner;