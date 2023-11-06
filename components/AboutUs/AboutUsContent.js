import React from 'react';
import Link from 'next/link';

const AboutUsContent = () => {
    return (
        <section className="about-area ptb-100">
            <div className="container-fluid">
                <div className="row align-items-center">
                    <div className="col-lg-6 col-md-12">
                        <div className="about-image">
                            <img src="/img/about/about-img5.png" alt="image" />
                        </div>
                    </div>

                    <div className="col-lg-6 col-md-12">
                        <div className="about-content">
                            <div className="content">
                                <span className="sub-title">
                                    <img src="/img/star-icon.png" alt="image" /> 
                                    About Us
                                </span>
                                <h2>Welcome To Future Concerns</h2>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.</p>
                                
                                {/* <ul className="features-list">
                                    <li>
                                        <img src="/img/icons/icon4.png" alt="image" />
                                        <h3>10 Years</h3>
                                        <p>On the market</p>
                                    </li>
                                    <li>
                                        <img src="/img/icons/icon5.png" alt="image" />
                                        <h3>45+</h3>
                                        <p>Team members</p>
                                    </li>
                                    <li>
                                        <img src="/img/icons/icon6.png" alt="image" />
                                        <h3>100%</h3>
                                        <p>Satisfaction rate</p>
                                    </li>
                                    <li>
                                        <img src="/img/icons/icon7.png" alt="image" />
                                        <h3>80%</h3>
                                        <p>Senior scientist</p>
                                    </li>
                                </ul> */}
                                <p>FUTURE CONCERNS HB is a Manpower Services Provider Company that provides IT Employees to Swedish C companies along with relocation solutions.  We offer fully integrated solutions to companies with international talent.</p>
                                <p>The company is relatively new and established in 2020 in Sweden.</p>
                                <p>The company offers quality guidance, and effective advice and provides information to its clients to find the right talent for their organizations.</p>
                                <p>We provide solutions with Destination Services, Global Mobility Services, Immigration Services, Move Management, Intercultural Communication, and IT Solutions.</p>
                                
                                {/* <Link href="/about-us">
                                    <a className="default-btn">
                                        <i className="flaticon-right"></i>More About Us<span></span>
                                    </a>
                                </Link> */}
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* <div className="circle-shape1">
                <img src="/img/shape/circle-shape1.png" alt="image" />
            </div>

            <div className="container">
                <div className="about-inner-area">
                    <div className="row">
                        <div className="col-lg-4 col-md-6 col-sm-6">
                            <div className="about-text">
                                <h3>Our History</h3>
                                <p>Real innovations and a positive customer experience are the heart of successful communication.</p>
                                
                                <ul className="features-list">
                                    <li><i className="flaticon-tick"></i> Activate Listening</li>
                                    <li><i className="flaticon-tick"></i> Brilliant minds</li>
                                    <li><i className="flaticon-tick"></i> Better. Best. Wow!</li>
                                    <li><i className="flaticon-tick"></i> Branding it better!</li>
                                </ul>
                            </div>
                        </div>
    
                        <div className="col-lg-4 col-md-6 col-sm-6">
                            <div className="about-text">
                                <h3>Our Mission</h3>
                                <p>Real innovations and a positive customer experience are the heart of successful communication.</p>
                                
                                <ul className="features-list">
                                    <li><i className="flaticon-tick"></i> Creating. Results.</li>
                                    <li><i className="flaticon-tick"></i> Expect more</li>
                                    <li><i className="flaticon-tick"></i> Good thinking</li>
                                    <li><i className="flaticon-tick"></i> In real we trust</li>
                                </ul>
                            </div>
                        </div>
    
                        <div className="col-lg-4 col-md-6 col-sm-6 offset-lg-0 offset-md-3 offset-sm-3">
                            <div className="about-text">
                                <h3>Who we are</h3>
                                <p>Real innovations and a positive customer experience are the heart of successful communication.</p>
                                
                                <ul className="features-list">
                                    <li><i className="flaticon-tick"></i> Stay real. Always.</li>
                                    <li><i className="flaticon-tick"></i> We have you covered</li>
                                    <li><i className="flaticon-tick"></i> We turn heads</li>
                                    <li><i className="flaticon-tick"></i> Your brand, promoted</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="circle-shape1">
                <img src="/img/shape/circle-shape1.png" alt="image" />
            </div> */}
        </section>
    )
}

export default AboutUsContent;