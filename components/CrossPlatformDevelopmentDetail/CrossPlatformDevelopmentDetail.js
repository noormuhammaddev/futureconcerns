import React from 'react';
import Link from 'next/link';
import Sidebar from './Sidebar';

const CrossPlatformDevelopmentDetail = () => {
    return (
        <section className="services-details-area ptb-100">
            <div className="container">
                <div className="row">
                    <div className="col-lg-8 col-md-12">
                        <div className="services-details-image">
                            <img src="/img/services/software-development.jpg" alt="image" />
                        </div>

                        <div className="services-details-desc">
                        <section>
                            <p>Your gateway to innovative and efficient cross-platform development solutions. In a world where diversity in devices and operating systems is the norm, we empower businesses to create applications that work seamlessly across platforms, reaching a wider audience and saving time and resources.</p>
                        </section>
                            {/* section end */}

                            <section>
                            <p>Whether you’re a startup with limited resources or an enterprise seeking a wider reach, Our company is your partner in cross-platform development success. Let’s transform your app idea into a versatile reality. Contact us today to embark on a journey of efficient and impactful cross-platform development.</p>
                        </section>
                            {/* section end */}


                            <section>
                                <h3>Why Choose Us?</h3>
                                <div className="services-details-image">
                                    <img src="/img/services/services-details1.jpg" alt="image" />
                                </div>

                                <div className="content">
                                    <ul>   
                                        <li>Consistent User Experience</li>
                                        <li>Cost-Efficiency</li>
                                        <li>Expertise in Cross-Platform Tools</li>
                                        <li>Customized Solutions</li>
                                        <li>Performance and Quality</li>
                                        <li>Collaborative Approach</li>
                                        <li>Proven Track Record</li>
                                        <li>Proven Track Record</li>                             
                                    </ul>
                                </div>
                            </section>
                            {/* section end */}

                            <section>
                                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries,</p>
                            </section>
                            {/* section end */}

                            <section>
                                <h3>React Native Development</h3>
                                <p>Harness the capabilities of React Native to build native-like mobile applications for iOS and Android using a single codebase. Our experts ensure that your app delivers a consistent and compelling experience on both platforms.</p>
                            </section>
                            {/* section end */}

                            <section>
                                <h3>Flutter Development</h3>
                                <p>Flutter’s expressive UI framework allows us to craft stunning apps with a single codebase. From pixel-perfect designs to smooth animations, we create cross-platform applications that captivate users.</p>
                            </section>
                            {/* section end */}
                        </div>
                     
                    </div>

                    <div className="col-lg-4 col-md-12">
                        <Sidebar />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default CrossPlatformDevelopmentDetail;