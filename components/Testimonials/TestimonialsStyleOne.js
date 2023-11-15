import React from 'react';

const testimonialData = [
    {
        testimonialComments: 'Have used their services for getting advice for moving to Sweden, I found them to be resonantly professional and yet cost-effective',
        auther: 'AB Mack',
        profileImg: 'https://www.futureconcerns.se/wp-content/uploads/2020/06/review-2.jpg'
    },
    {
        testimonialComments: 'I thought I knew everything but there is always something which can make your application process smooth.I am sure their services make the difference. Thanks Future Concerns,truly appreciated your advise for this business permit.',
        auther: 'Brian',
        profileImg: 'https://www.futureconcerns.se/wp-content/uploads/2020/06/review-2.jpg'
    },
    {
        testimonialComments: 'Moved from UK and in 90 days my family is here with me. Quite straight forward and honest people. I like the way they work.',
        auther: 'Hina Yousof',
        profileImg: 'https://www.futureconcerns.se/wp-content/uploads/2020/06/review-1.jpg'
    },
    {
        testimonialComments: 'Got my Schengen visa in 12 days. Well prepared file which I received via DHL in Lahore and submit in Gerry’s office. Thanks, its smooth process better than local consultants at least.',
        auther: 'Ali Azmat',
        profileImg: 'https://www.futureconcerns.se/wp-content/uploads/2020/06/review-2.jpg'
    },
    {
        testimonialComments: 'From booking online appointment till my visa everything was transparent. I have everything on my online portal. Like this idea. Recommended',
        auther: 'Jawad haider',
        profileImg: 'https://www.futureconcerns.se/wp-content/uploads/2020/06/review-2.jpg'
    },
    {
        testimonialComments: 'I like the way they worked, specially online system. I believe this system make them different from others, from day one till the decision they keep me updated that whats going on with my application and i update all the documents from my phone. I recommend to those who are curious like me and really wants to know whats going on with their application.',
        auther: 'Arfa Hashmat',
        profileImg: 'https://www.futureconcerns.se/wp-content/uploads/2020/06/review-1.jpg'
    },
    {
        testimonialComments: 'Excellent service and good commitment I really appreciated to all teamwork.',
        auther: 'Denial Jhon',
        profileImg: 'https://www.futureconcerns.se/wp-content/uploads/2020/06/review-1.jpg'
    },
    {
        testimonialComments: 'I was really disturbed as i tried myself with the help of my friends and its get more complicated for me. I wasted 2 years of my life. I google lawyer’s in Malmø and contact many of them but they act so busy. I find them in the consulting list and in 6 weeks i get my 5 years residence card. At that point I realize how important to have a good advice in the beginning. They are amazing and very straightforward, i like the way  they opens everything about my case. In short highly recommended for EU family cases.',
        auther: 'Umar M Khan',
        profileImg: 'https://www.futureconcerns.se/wp-content/uploads/2020/06/review-2.jpg'
    },
]

const TestimonialsStyleOne = () => {
    return (
        <div className="testimonials-area pt-100 pb-70 bg-f1f8fb">
            <div className="container">
                <div className="section-title">
                    <span className="sub-title">
                        <img src="/img/star-icon.png" alt="image" /> 
                        Testimonials
                    </span>
                    <h2>What Our Clients Say?</h2>
                    <p>Hear what our clients have to say about partnering with us for corporate and development. We assist our customers in home finding, children’s school, Moving Services, and we can take care of all the paperwork from day one till you moved to your new home.</p>
                </div>

                <div className="row">
                    {
                        testimonialData.map((item, index) => (
                            <div key={index} className="col-lg-6 col-md-6">
                                <div className="single-testimonials-item">
                                    <p>{item.testimonialComments}</p>
                                    <div className="client-info">
                                        <div className="d-flex justify-content-center align-items-center">
                                            <img src={item.profileImg} alt="image" />
                                            <div className="title">
                                                <h3>{item.auther}</h3>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))
                    }
                    
                </div>
            </div>
        </div>
    )
}

export default TestimonialsStyleOne;