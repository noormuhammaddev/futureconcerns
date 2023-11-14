import React, { useState, useEffect } from 'react';
import Navbar from '../components/_App/Navbar';
import PageBanner from '../components/Common/PageBanner';
import BlogDetailsContent from '../components/Blog/BlogDetailsContent';
import Footer from '../components/_App/Footer';
import blogData from '../components/blog/BlogData';

const BlogDetails = () => {
    // const [postID, setPostID] = useState();
    // const [currentPost, setCurrentPost] = useState();

    // useEffect(() => {
    //     const currentUrl = window.location.href;
    //     setPostID(currentUrl.split('=')[1]);
    //     // console.log('current ID: ', currentUrl.split('=')[1]);

    //     const objectWithIdOne = findObjectById(postID);
    // }, []);

    // const findObjectById = (id) => {
    //     return blogData.find(item => item.id === id);
    // };

    // useEffect(() => {
    //     const objectWithIdOne = findObjectById(postID);
    //     setCurrentPost(objectWithIdOne);
    //     console.log('Object with ID: ', currentPost);
    // }, [blogData]);


    return (
        <>
            <Navbar />

            <PageBanner
                pageTitle="Blog Details" 
                homePageText="Home" 
                homePageUrl="/" 
                activePageText="Blog Details" 
            /> 

            <BlogDetailsContent />
            
            <Footer />
        </>
    )
}

export default BlogDetails;