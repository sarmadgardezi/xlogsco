import React from 'react';

import { Link } from 'react-router-dom';

function BlogCard(props) {
    return (
        <div className={`grid-1 blog-list-item ${props.category} col-lg-${props.width}`}>
            <div className="blog-list-single">
                <div className="blog-list-single--thumbnail blog">
                    <Link to="/BlogDetailed">
                        <img
                            style={{
                                height: '43.4rem',
                            }}
                            src={props.image}
                            alt={`blog-${props.index + 1}`}
                        />
                        <div className="hover">
                            <div className="circle">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 43.75 43.564">
                                    <title>arrow</title>
                                    <path
                                        d="M1027.744,1417.179l20.61,20.61a1.172,1.172,0,0,1,0,1.658l-20.61,20.611a1.174,1.174,0,0,1-1.658,0l-.69-.692a1.171,1.171,0,0,1,0-1.657l17.431-17.431h-36.708a1.172,1.172,0,0,1-1.172-1.172v-.976a1.172,1.172,0,0,1,1.172-1.172h36.708l-17.431-17.431a1.171,1.171,0,0,1,0-1.657l.69-.691A1.174,1.174,0,0,1,1027.744,1417.179Z"
                                        transform="translate(-1004.947 -1416.836)"
                                    ></path>
                                </svg>
                            </div>
                        </div>
                    </Link>
                </div>

                <div className="blog-list-single--content">
                    <div className="details">
                        <h6>{props.date}</h6>
                        <span>|</span>
                        <h6>{props.category}</h6>
                    </div>
                    <Link to="blogDetailed">
                        <h2>{props.title}</h2>
                    </Link>
                    <div className="paragraph excerpt">
                        <p>{props.description}</p>
                    </div>
                    <Link to="/blogDetailed" className="button">
                        <span>Read More</span>
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default BlogCard;
