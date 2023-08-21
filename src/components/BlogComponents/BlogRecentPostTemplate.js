import React from 'react';
import { Link } from 'react-router-dom';

function BlogRecentPostTemplate(props) {
    const truncateDescription = (description) => {
        const maxLength = 40; // Maximum characters to display
        if (description.length <= maxLength) {
            return description;
        }
        return description.substr(0, maxLength) + '...';
    };

    return (
        <>
            <li className="recent-posts-single">
                <div className="recent-posts-single--thumbnail">
                    <Link to="/blogDetailed">
                        <img width="150" height="150" src={props.image} alt="blog-wid-1" />
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
                <div className="recent-posts-single--content">
                    <div>
                        <p>{props.date}</p>
                        <span>|</span>
                        <p>{props.category}</p>
                    </div>
                    <h6>
                        <Link to="/blogDetailed">{truncateDescription(props.description)}</Link>
                    </h6>
                </div>
            </li>
        </>
    );
}

export default BlogRecentPostTemplate;
