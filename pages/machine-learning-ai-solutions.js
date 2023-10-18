import React from 'react';
import NavbarTwo from '../components/_App/NavbarTwo';
import MainBanner from '../components/MachineLearningAISolutions/MainBanner';
import Solutions from '../components/MachineLearningAISolutions/Solutions';
import AboutUs from '../components/MachineLearningAISolutions/AboutUs';
import Services from '../components/MachineLearningAISolutions/Services';
import HowItWork from '../components/MachineLearningAISolutions/HowItWork';
import RecentProjects from '../components/MachineLearningAISolutions/RecentProjects';
import TeamMember from '../components/MachineLearningAISolutions/TeamMember';
import Testimonials from '../components/MachineLearningAISolutions/Testimonials';
import Partner from '../components/MachineLearningAISolutions/Partner';
import OurBlog from '../components/MachineLearningAISolutions/OurBlog';
import ProjectStartArea from '../components/MachineLearningAISolutions/ProjectStartArea';
import Footer from '../components/_App/Footer';

const MachineLearningAISolutions = () => {
    return (
        <>
            <NavbarTwo />
            <MainBanner />
            <Solutions />
            <AboutUs />
            <Services />
            <HowItWork />
            <RecentProjects />
            <TeamMember />
            <Testimonials />
            <Partner />
            <OurBlog />
            <ProjectStartArea />
            <Footer />
        </>
    );
}

export default MachineLearningAISolutions;