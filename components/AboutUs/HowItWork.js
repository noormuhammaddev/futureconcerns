import React from 'react';

const HowItWork = () => {
    return (
        <section className="process-area pb-70">
            <div className="container">
                <div className="section-title" style={{marginLeft: '0'}}>
                    <span className="sub-title">
                        <img src="/img/star-icon.png" alt="image" /> 
                        OUR SPECIALIZATION
                    </span>
                    <h2>GLOBAL E-VISA SERVICES</h2>
                    <div className="services-details-desc">
                        <div className="content">
                            <ul style={{textAlign: 'left'}}>
                                <li>Complete our easy online application form and pay with credit card or PayPal.</li>
                                <li>No need to deal with the embassy. We do it for you so you don't lose valuable time.</li>
                                <li>We will complete the visas file and post you to your home address or you can download from our portal.</li>
                                <li>We take care of processing your visa at the consulate / embassy.</li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div className="row">
                    <div className="col-md-6">
                        <div className="single-process-box">
                            <div className="number">1</div>
                            <div className="image">
                                <img src="/img/process/process5.png" alt="image" />
                            </div>
                            <h3>Study in Europe</h3>
                            <p>Assistance in choosing the right degree program and Residence Permit processing for international Students.</p>
                        </div>
                    </div>

                    <div className="col-md-6">
                        <div className="single-process-box">
                            <div className="number">2</div>
                            <div className="image">
                                <img src="/img/process/process2.png" alt="image" />
                            </div>
                            <h3>Work & Business</h3>
                            <p>Assistance in Registering a business, Buying a new Business, Preparing the work permit applications for Employer and Employees.</p>
                        </div>
                    </div>

                    <div className="col-md-6">
                        <div className="single-process-box">
                            <div className="number">3</div>
                            <div className="image">
                                <img src="/img/process/process3.png" alt="image" />
                            </div>
                            <h3>Family Relocation</h3>
                            <p>We provide assistance in your family visa processing including your dependent parents and other family members.</p>
                        </div>
                    </div>

                    <div className="col-md-6">
                        <div className="single-process-box ">
                            <div className="number">4</div>
                            <div className="image">
                                <img src="/img/process/process4.png" alt="image" />
                            </div>
                            <h3>Investment Solutions</h3>
                            <p>There are various opportunities for business ventures, Look for the best opportunity. We provide you assistance in the right investments in Sweden.</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="circle-shape1">
                <img src="/img/shape/circle-shape1.png" alt="image" />
            </div>
        </section>
    )
}

export default HowItWork;