import React from 'react';
import Link from 'next/link';

const TeamMembers = () => {
    return (
        <section className="scientist-area pb-70">
            <div className="container">
                <div className="section-title">
                    <span className="sub-title">
                        <img src="/img/star-icon.png" alt="image" /> 
                        Team Members
                    </span>
                    <h2>Our Awesome Team</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.</p>
                </div>

                <div className="row">
                    <div className="col-lg-4 col-sm-6">
                        <div className="single-scientist-item-box">
                            <div className="image">
                                <img src="/img/team/team5.jpg" alt="image" />

                                <ul className="social">
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
                            <div className="content">
                                <h3>Merv Adrian</h3>
                                <span>CEO & Founder</span>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-4 col-sm-6">
                        <div className="single-scientist-item-box">
                            <div className="image">
                                <img src="/img/team/team6.jpg" alt="image" />

                                <ul className="social">
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
                            <div className="content">
                                <h3>Kirk Borne</h3>
                                <span>UX/UI Designer</span>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-4 col-sm-6 offset-lg-0 offset-sm-3">
                        <div className="single-scientist-item-box">
                            <div className="image">
                                <img src="/img/team/team7.jpg" alt="image" />

                                <ul className="social">
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
                            <div className="content">
                                <h3>Carla Gentry</h3>
                                <span>Web Developer</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default TeamMembers;