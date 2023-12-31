import React from 'react';

const WhyChooseUs = () => {
    return (
        <section className="how-its-work-area ptb-100">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-6 col-md-12">
                        <div className="how-its-work-content">
                            <span className="sub-title">
                                <img src="/img/star-icon.png" alt="image" /> 
                                People Love Us
                            </span>
                            <h2>Why Choose Us?</h2>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.</p>
                            <div className="inner-box">
                                <div className="single-item">
                                    <div className="count-box">
                                        1
                                    </div>
                                    <h3>Data for All Your People</h3>
                                    <p>Dolor sit amet consectetur elit eiusmod tempor incidi dunt labore dolore magna aliqua enim.</p>
                                </div>
                                <div className="single-item">
                                    <div className="count-box">
                                        2
                                    </div>
                                    <h3>A New Breed of AI</h3>
                                    <p>Dolor sit amet consectetur elit eiusmod tempor incidi dunt labore dolore magna aliqua enim.</p>
                                </div>
                                <div className="single-item">
                                    <div className="count-box">
                                        3
                                    </div>
                                    <h3>Analytics Business</h3>
                                    <p>Dolor sit amet consectetur elit eiusmod tempor incidi dunt labore dolore magna aliqua enim.</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-6 col-md-12">
                        <div className="how-its-work-image">
                            <img src="/img/how-its-work.png" alt="image" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default WhyChooseUs;