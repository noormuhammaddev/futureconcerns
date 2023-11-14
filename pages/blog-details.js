import React, { useState, useEffect } from 'react';
import Navbar from '../components/_App/Navbar';
import PageBanner from '../components/Common/PageBanner';
import BlogDetailsContent from '../components/Blog/BlogDetailsContent';
import Footer from '../components/_App/Footer';
import blogData from '../components/blog/BlogData';

const BlogDetails = () => {
    const [postID, setPostID] = useState();
    const [currentPost, setCurrentPost] = useState();

    useEffect(() => {
        const currentUrl = window.location.href;
        setPostID(currentUrl.split('=')[1]);
        console.log('current ID: ', currentUrl.split('=')[1]);

        // const objectWithIdOne = findObjectById(postID);
    }, []);

    const currentPostData = blogData.filter(item => item.id === postID)[0];

    console.log('curent object->: ', currentPostData);




    return (
        <>
            <Navbar />
            {
                currentPostData && (
                    <PageBanner
                        pageTitle={currentPostData.title} 
                        homePageText="Home" 
                        homePageUrl="/" 
                        activePageText={currentPostData.title}
                    /> 

                )
            }
            
            {
                currentPostData && <BlogDetailsContent postData={currentPostData} /> 
            }
            
            
            <Footer />
        </>
    )
}

export default BlogDetails;