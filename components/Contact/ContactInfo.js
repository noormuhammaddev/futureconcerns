import React from 'react';
import Link from 'next/link';

const ContactInfo = () => {
    return (
        <div className="contact-info-area pt-100 pb-70">
            <div className="container">
                <div className="row">
                    <div className="col-md-6">
                        <div className="contact-info-box">
                            <div className="back-icon">
                                <i className='bx bx-map'></i>
                            </div>
                            <div className="icon">
                                <i className='bx bx-map'></i>
                            </div>
                            <h3>Sweden Office</h3>
                            <p>Sallerupsvägen 28D 212 18 Malmö, Sweden</p>
                        </div>
                    </div>

                    <div className="col-md-6">
                        <div className="contact-info-box">
                            <div className="back-icon">
                                <i className='bx bx-map'></i>
                            </div>
                            <div className="icon">
                                <i className='bx bx-map'></i>
                            </div>
                            <h3>Denmark Office</h3>
                            <p>Smedeland 7 1.Sal 2600 Glostrup, Denmark</p>
                        </div>
                    </div>

                    <div className="col-md-6">
                        <div className="contact-info-box">
                            <div className="back-icon">
                                <i className='bx bx-phone-call'></i>
                            </div>
                            <div className="icon">
                                <i className='bx bx-phone-call'></i>
                            </div>
                            <h3>Contact</h3>
                            <p><a href="tel:+46 766 276 276">+46 766 276 276</a></p>
                            <p><a href="tel:+46 102 146 276">+46 102 146 276</a></p>
                            <p><a href="tel:+45 53 766 276">+45 53 766 276</a></p>
                            <p>E-mail: <a href="mailto:hello@tracer.com">hello@tarn.com</a></p>
                        </div>
                    </div>

                    <div className="col-lg-4 col-md-6 offset-lg-0 offset-md-3">
                        <div className="contact-info-box">
                            <div className="back-icon">
                                <i className='bx bx-time-five'></i>
                            </div>
                            <div className="icon">
                                <i className='bx bx-time-five'></i>
                            </div>
                            <h3>Quick Contact</h3>
                            <p>E-mail: <a href="mailto:info@futureconcerns.se">info@futureconcerns.se</a></p>
                            <p>Technical Issues: <a href="mailto:support@futureconcerns.se">support@futureconcerns.se</a></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ContactInfo;