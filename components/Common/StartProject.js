import React from 'react';
import Link from 'next/link';

const StartProject = ({
    heading,
    description,
    btnLabel,
    btnLink,
}) => {
    return (
        <div className="project-start-area bg-color ptb-100">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-6 col-md-12">
                        <div className="project-start-image">
                            <img src="/img/project-start1.png" alt="image" />
                        </div>
                    </div>

                    <div className="col-lg-6 col-md-12">
                        <div className="project-start-content">
                            <h2>{heading}</h2>
                            <p>{description}</p>

                            <Link href={`${btnLink}`}>
                                <a className="default-btn">
                                    <i className="flaticon-web"></i> 
                                    {btnLabel}
                                    <span></span>
                                </a>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>

            <div className="vector-shape9">
                <img src="/img/shape/vector-shape9.png" alt="image" />
            </div>
            <div className="vector-shape10">
                <img src="/img/shape/vector-shape10.png" alt="image" />
            </div>
        </div>
    )
}

export default StartProject;