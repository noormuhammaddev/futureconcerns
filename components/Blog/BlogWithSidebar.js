import React from 'react';
import Link from 'next/link';
import BlogSidebar from './BlogSidebar';
import blogData from './BlogData';

const BlogWithSidebar = () => {
    console.log(blogData)
    return (
        <div className="blog-area ptb-100">
            <div className="container">
                <div className="row">
                    <div className="col-lg-8 col-md-12">
                        <div className="row">
                            {
                                blogData.map((item, index) => (
                                <div className="col-md-6" key={index}>
                                    <div className="single-blog-post bg-fffbf5">
                                    {/* #61608a */}
                                        <div className="post-image bg-secondary">
                                            <Link href={`/blog-details?postid=${item.id}`}>
                                                <a>
                                                    <img src={item.img} alt="image" />
                                                </a>
                                            </Link>
                                        </div>

                                        <div className="post-content">
                                            <ul className="post-meta d-flex justify-content-between align-items-center">
                                                <li>
                                                    <div className="post-author d-flex align-items-center">
                                                        <img src="/img/user1.jpg" className="rounded-circle" alt="image" />
                                                        <span>{item.author}</span>
                                                    </div>
                                                </li>
                                                <li>
                                                    <i className='flaticon-calendar'></i> {item.date}
                                                </li>
                                            </ul>
                                            <h3>
                                                <Link href={`/blog-details?postid=${item.id}`}>
                                                    <a>{item.title}</a>
                                                </Link>
                                            </h3>
                                            <p>{item.description}</p>
                                        </div>
                                    </div>
                                </div>
                            ))
                            }
                        </div>
                    </div>

                    <div className="col-lg-4 col-md-12">
                        <BlogSidebar />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BlogWithSidebar;