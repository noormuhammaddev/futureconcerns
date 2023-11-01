import React from 'react';
import { useRecoilState } from 'recoil'
import { collapsedState } from '../../utils/recoil-atoms'
import Link from '../../utils/ActiveLink';

const Navbar = () => {
    const [collapsed, setCollapsed] = useRecoilState(collapsedState);

    const toggleNavbar = () => {
        setCollapsed(!collapsed);
    }

    React.useEffect(() => {
        let elementId = document.getElementById("navbar");
        document.addEventListener("scroll", () => {
            if (window.scrollY > 170) {
                elementId.classList.add("is-sticky");
            } else {
                elementId.classList.remove("is-sticky");
            }
        });
        window.scrollTo(0, 0);
    })

    const classOne = collapsed ? 'collapse navbar-collapse' : 'collapse navbar-collapse show';
    const classTwo = collapsed ? 'navbar-toggler navbar-toggler-right collapsed' : 'navbar-toggler navbar-toggler-right';

    return (
        <>
            <div id="navbar" className="navbar-area">
                <div className="tarn-nav">
                    <div className="container-fluid">
                        <nav className="navbar navbar-expand-lg navbar-light">
                            <Link href="/">
                                <a onClick={() => setCollapsed(true)} className="navbar-brand">
                                    <img src="/img/logo.png" alt="logo" width="240" />
                                </a>
                            </Link>

                            <button 
                                onClick={toggleNavbar} 
                                className={classTwo}
                                type="button" 
                                data-toggle="collapse" 
                                data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" 
                                aria-expanded="false" 
                                aria-label="Toggle navigation"
                            >
                                <span className="icon-bar top-bar"></span>
                                <span className="icon-bar middle-bar"></span>
                                <span className="icon-bar bottom-bar"></span>
                            </button>

                            <div className={classOne} id="navbarSupportedContent">
                                <ul className="navbar-nav">
                                    <li className="nav-item">
                                        <Link href="/" activeClassName="active">
                                            <a onClick={e => e.preventDefault()} className="nav-link">
                                                Home
                                            </a>
                                        </Link>
                                    </li>

                                    <li className="nav-item">
                                        <Link href="/services" activeClassName="active">
                                            <a onClick={e => e.preventDefault()} className="nav-link">
                                                Services <i className='bx bx-chevron-down'></i>
                                            </a>
                                        </Link>

                                        <ul className="dropdown-menu">
                                            <li className="nav-item">
                                                <Link href="/services" activeClassName="active">
                                                    <a onClick={() => setCollapsed(true)} className="nav-link">Software Development</a>
                                                </Link>
                                            </li>
                                            <li className="nav-item">
                                                <Link href="/services" activeClassName="active">
                                                    <a onClick={() => setCollapsed(true)} className="nav-link">Digital Marketing</a>
                                                </Link>
                                            </li>
                                            <li className="nav-item">
                                                <Link href="/services" activeClassName="active">
                                                    <a onClick={() => setCollapsed(true)} className="nav-link">API Integrations</a>
                                                </Link>
                                            </li>
                                            <li className="nav-item">
                                                <Link href="/services" activeClassName="active">
                                                    <a onClick={() => setCollapsed(true)} className="nav-link">Cross Platform Development</a>
                                                </Link>
                                            </li>
                                            <li className="nav-item">
                                                <Link href="/services" activeClassName="active">
                                                    <a onClick={() => setCollapsed(true)} className="nav-link">App Development</a>
                                                </Link>
                                            </li>
                                        </ul>
                                    </li>

                                    <li className="nav-item">
                                        <Link href="#" activeClassName="active">
                                            <a onClick={e => e.preventDefault()} className="nav-link">
                                                New in Sweden
                                            </a>
                                        </Link>
                                    </li>

                                    <li className="nav-item">
                                        <Link href="#" activeClassName="active">
                                            <a onClick={e => e.preventDefault()} className="nav-link">
                                                Work Permit
                                            </a>
                                        </Link>
                                    </li>

                                    <li className="nav-item">
                                        <Link href="#" activeClassName="active">
                                            <a onClick={e => e.preventDefault()} className="nav-link">
                                                About Us
                                            </a>
                                        </Link>
                                    </li>

                                    <li className="nav-item">
                                        <Link href="/contact" activeClassName="active">
                                            <a onClick={e => e.preventDefault()} className="nav-link">
                                                Contact Us
                                            </a>
                                        </Link>
                                    </li>

                                    {/* <li className="nav-item">
                                        <Link href="#" activeClassName="active">
                                            <a onClick={e => e.preventDefault()} className="nav-link">
                                                Services <i className='bx bx-chevron-down'></i>
                                            </a>
                                        </Link>
                                        
                                        <ul className="dropdown-menu">
                                            <li className="nav-item">
                                                <Link href="/services" activeClassName="active">
                                                    <a onClick={() => setCollapsed(true)} className="nav-link">Services One</a>
                                                </Link>
                                            </li>
                                        </ul>
                                    </li>

                                    <li className="nav-item">
                                        <Link href="#" activeClassName="active">
                                            <a onClick={e => e.preventDefault()} className="nav-link">
                                                Case Studies <i className='bx bx-chevron-down'></i>
                                            </a>
                                        </Link>
                                        
                                        <ul className="dropdown-menu">
                                            <li className="nav-item">
                                                <Link href="/case-studies-2-columns" activeClassName="active">
                                                    <a onClick={() => setCollapsed(true)} className="nav-link">Case Studies 2 Columns</a>
                                                </Link>
                                            </li>
                                        </ul>
                                    </li>

                                    <li className="nav-item">
                                        <Link href="#">
                                            <a onClick={e => e.preventDefault()} className="nav-link">
                                                Pages <i className='bx bx-chevron-down'></i>
                                            </a>
                                        </Link>

                                        <ul className="dropdown-menu">
                                            <li className="nav-item">
                                                <Link href="#">
                                                    <a onClick={e => e.preventDefault()} className="nav-link">
                                                        Courses <i className='bx bx-chevron-down'></i>
                                                    </a>
                                                </Link>

                                                <ul className="dropdown-menu">
                                                    <li className="nav-item">
                                                        <Link href="/courses-grid" activeClassName="active">
                                                            <a onClick={() => setCollapsed(true)} className="nav-link">Courses Grid</a>
                                                        </Link>
                                                    </li>

                                                    <li className="nav-item">
                                                        <Link href="/courses-right-sidebar" activeClassName="active">
                                                            <a onClick={() => setCollapsed(true)} className="nav-link">Courses Right Sidebar</a>
                                                        </Link>
                                                    </li>

                                                    <li className="nav-item">
                                                        <Link href="/course-details" activeClassName="active">
                                                            <a onClick={() => setCollapsed(true)} className="nav-link">Course Details</a>
                                                        </Link>
                                                    </li>
                                                </ul>
                                            </li>

                                            <li className="nav-item">
                                                <Link href="#">
                                                    <a onClick={e => e.preventDefault()} className="nav-link">
                                                        Events <i className='bx bx-chevron-down'></i>
                                                    </a>
                                                </Link>

                                                <ul className="dropdown-menu">
                                                    <li className="nav-item">
                                                        <Link href="/events" activeClassName="active">
                                                            <a onClick={() => setCollapsed(true)} className="nav-link">Events</a>
                                                        </Link>
                                                    </li>

                                                    <li className="nav-item">
                                                        <Link href="/event-details" activeClassName="active">
                                                            <a onClick={() => setCollapsed(true)} className="nav-link">Event Details</a>
                                                        </Link>
                                                    </li>
                                                </ul>
                                            </li>

                                            <li className="nav-item">
                                                <Link href="/contact" activeClassName="active">
                                                    <a onClick={() => setCollapsed(true)} className="nav-link">Contact</a>
                                                </Link>
                                            </li>

                                            <li className="nav-item">
                                                <Link href="/gallery" activeClassName="active">
                                                    <a onClick={() => setCollapsed(true)} className="nav-link">Gallery</a>
                                                </Link>
                                            </li>

                                            <li className="nav-item">
                                                <Link href="/faq" activeClassName="active">
                                                    <a onClick={() => setCollapsed(true)} className="nav-link">FAQ</a>
                                                </Link>
                                            </li>

                                            <li className="nav-item">
                                                <Link href="/coming-soon" activeClassName="active">
                                                    <a onClick={() => setCollapsed(true)} className="nav-link">Coming Soon</a>
                                                </Link>
                                            </li>

                                            <li className="nav-item">
                                                <Link href="/membership-levels" activeClassName="active">
                                                    <a onClick={() => setCollapsed(true)} className="nav-link">Membership Levels</a>
                                                </Link>
                                            </li>

                                            <li className="nav-item">
                                                <Link href="/profile-authentication" activeClassName="active">
                                                    <a onClick={() => setCollapsed(true)} className="nav-link">Login/Register</a>
                                                </Link>
                                            </li>

                                            <li className="nav-item">
                                                <Link href="/privacy-policy" activeClassName="active">
                                                    <a onClick={() => setCollapsed(true)} className="nav-link">Privacy Policy</a>
                                                </Link>
                                            </li>

                                            <li className="nav-item">
                                                <Link href="/terms-of-service" activeClassName="active">
                                                    <a onClick={() => setCollapsed(true)} className="nav-link">Terms of Service</a>
                                                </Link>
                                            </li>
                                        </ul>
                                    </li>

                                    <li className="nav-item">
                                        <Link href="#">
                                            <a onClick={e => e.preventDefault()} className="nav-link">
                                                Blog <i className='bx bx-chevron-down'></i>
                                            </a>
                                        </Link>

                                        <ul className="dropdown-menu">
                                            <li className="nav-item">
                                                <Link href="/blog" activeClassName="active">
                                                    <a onClick={() => setCollapsed(true)} className="nav-link">Blog Grid</a>
                                                </Link>
                                            </li>

                                            <li className="nav-item">
                                                <Link href="/blog2" activeClassName="active">
                                                    <a onClick={() => setCollapsed(true)} className="nav-link">Blog Right Sidebar</a>
                                                </Link>
                                            </li>

                                            <li className="nav-item">
                                                <Link href="/blog-details" activeClassName="active">
                                                    <a onClick={() => setCollapsed(true)} className="nav-link">Blog Details</a>
                                                </Link>
                                            </li>
                                        </ul>
                                    </li> */}
                                </ul>
                            
                                <div className="others-option d-flex align-items-center">
                                    <div className="option-item">
                                        <form className="search-box">
                                            <input type="text" className="input-search" placeholder="Search for anything" />
                                            <button type="submit">
                                                <i className="flaticon-loupe"></i>
                                            </button>
                                        </form>
                                    </div>

                                    <div className="option-item">
                                        <Link href="/contact">
                                            <a onClick={() => setCollapsed(true)} className="default-btn">
                                                <i className="flaticon-right"></i> Get Started <span></span>
                                            </a>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </nav>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Navbar;
