import React from 'react';
import Link from 'next/link';

const Footer = () => {

    const currentYear = new Date().getFullYear();

    return (
        <footer className="footer-area bg-color">
            <div className="container">
                <div className="row">
                    <div className="col-lg-4 col-sm-6">
                        <div className="single-footer-widget">
                            <a href="/" className="logo">
                                <img src="/img/logo.png" alt="logo" width="220" />
                            </a>
                            <p>We are Relocation Services Provider Company which deals with all sort of legal relocation to Sweden. We offers quality guidance, effective advice and provides information to our clients to settle down in the country.</p>

                            <ul className="social-link">
                                <li>
                                    <Link href="https://www.facebook.com/">
                                        <a className="d-block" target="_blank">
                                            <i className='bx bxl-facebook'></i>
                                        </a>
                                    </Link>
                                </li>
                                <li>
                                    <Link href="https://www.twitter.com/">
                                        <a className="d-block" target="_blank">
                                            <i className='bx bxl-twitter'></i>
                                        </a>
                                    </Link>
                                </li>
                                <li>
                                    <Link href="https://www.instagram.com/">
                                        <a className="d-block" target="_blank">
                                            <i className='bx bxl-instagram'></i>
                                        </a>
                                    </Link>
                                </li>
                                <li>
                                    <Link href="https://www.linkedin.com/">
                                        <a className="d-block" target="_blank">
                                            <i className='bx bxl-linkedin'></i>
                                        </a>
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>

                    <div className="col-lg-2 col-sm-6">
                        <div className="single-footer-widget pl-5">
                            <h3>Useful Links</h3>
                            
                            <ul className="footer-links-list">
                                <li>
                                    <Link href="/about-us">
                                        <a>About</a>
                                    </Link>
                                </li>

                                <li>
                                    <Link href="/contact">
                                        <a href="contact.html">Contact</a>
                                    </Link>
                                </li>

                                <li>
                                    <Link href="/services">
                                        <a>Services</a>
                                    </Link>
                                </li>

                                <li>
                                    <Link href="/blog">
                                        <a>Blog</a>
                                    </Link>
                                </li>

                                <li>
                                    <Link href="/faq">
                                        <a>FAQs</a>
                                    </Link>
                                </li>

                                <li>
                                    <Link href="/testimonials">
                                        <a>Testimonials</a>
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>

                    <div className="col-lg-2 col-sm-6">
                        <div className="single-footer-widget">
                            <h3>Resources</h3>

                            <ul className="footer-links-list">
                                <li>
                                    <Link href="/team">
                                        <a>Our Scientists</a>
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/services">
                                        <a>Our Services</a>
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/testimonials">
                                        <a>Testimonials</a>
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/services">
                                        <a>SaaS Solutions</a>
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/case-studies-2-columns">
                                        <a>Case Studies</a>
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>

                    <div className="col-lg-4 col-sm-6">
                        <div className="single-footer-widget">
                            <h3>Get in Touch</h3>

                            <ul className="footer-contact-info">
                                <li>
                                    <i className='bx bx-map'></i> 
                                    Sallerupsvägen 28D Malmö, <br />Sweden
                                </li>
                                <li>
                                    <i className='bx bx-phone-call'></i>
                                    <a href="tel:++46723276276">+46 723 276 276</a>
                                </li>
                                <li>
                                    <i className='bx bx-envelope'></i>
                                    <a href="mailto:hello@tarn.com">info@futureconcerns.se</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div className="footer-bottom-area">
                    <div className="row align-items-center">
                        <div className="col-lg-6 col-md-6">
                            <p>
                                Copyright &copy;{currentYear} <a target="_blank" href="https://www.futureconcerns.se/">FUTURE CONCERNS </a> 
                                Powered By - 
                                <a href="https://sweden4allab.se/" target="_blank">SWEDEN 4 ALL AB </a> 
                                <a href="https://globalvisa.eu/" target="_blank">GLOBALVISA.EU.</a>
                            </p>
                        </div>

                        <div className="col-lg-6 col-md-6">
                            <ul>
                                <li>
                                    <Link href="/privacy-policy">
                                        <a>Privacy Policy</a>
                                    </Link>
                                </li>
                                <li>*
                                    <Link href="/terms-of-service">
                                        <a>Terms & Conditions</a>
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

            <div className="footer-map">
                <img src="/img/footer-map.png" alt="image" />
            </div>
        </footer>
    );
}

export default Footer;