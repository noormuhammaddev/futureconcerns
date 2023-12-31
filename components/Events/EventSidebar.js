import React from 'react';
import Link from 'next/link';

const EventSidebar = () => {
    return (
        <div className="events-details-info">
            <ul className="info">
                <li className="price">
                    <div className="d-flex justify-content-between align-items-center">
                        <span>Cost</span>
                        $149
                    </div>
                </li>
                <li>
                    <div className="d-flex justify-content-between align-items-center">
                        <span>Total Slot</span>
                        1500
                    </div>
                </li>
                <li>
                    <div className="d-flex justify-content-between align-items-center">
                        <span>Booked Slot</span>
                        350
                    </div>
                </li>
                <li>
                    <div className="d-flex justify-content-between align-items-center">
                        <span>Pay With</span>
                        <div className="payment-method">
                            <img src="/img/payment/payment1.png" className="shadow" alt="image" />
                            <img src="/img/payment/payment2.png" className="shadow" alt="image" />
                            <img src="/img/payment/payment3.png" className="shadow" alt="image" />
                        </div>
                    </div>
                </li>
            </ul>

            <div className="btn-box">
                <Link href="#">
                    <a className="default-btn">
                        <i className="flaticon-user"></i> 
                        Book Now <span></span>
                    </a>
                </Link>
                <p>You must <Link href="/profile-authentication"><a>login</a></Link> before register event.</p>
            </div>

            <div className="events-share">
                <div className="share-info">
                    <span>Share This Course <i className="flaticon-share"></i></span>

                    <ul className="social-link">
                        <li>
                            <a href="https://www.facebook.com/" className="d-block" target="_blank">
                                <i className='bx bxl-facebook'></i>
                            </a>
                        </li>
                        <li>
                            <a href="https://www.twitter.com/" className="d-block" target="_blank">
                                <i className='bx bxl-twitter'></i>
                            </a>
                        </li>
                        <li>
                            <a href="https://www.instagram.com/" className="d-block" target="_blank">
                                <i className='bx bxl-instagram'></i>
                            </a>
                        </li>
                        <li>
                            <a href="https://www.linkedin.com/" className="d-block" target="_blank">
                                <i className='bx bxl-linkedin'></i>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default EventSidebar;