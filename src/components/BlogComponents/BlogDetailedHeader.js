import React from 'react';

function BlogDetailedHeader(props) {
    return (
        <div>
            <div className="blog-single-header">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="blog-single-header--heading">
                                <h1>{props.heading}</h1>
                            </div>
                            <div className="blog-single-header--detail">
                                <div className="author">
                                    <div className="author-image">
                                        <img alt="author" src={props.authorImage} height="64" width="64" />
                                    </div>
                                    <div className="author-name">
                                        <h6>Author</h6>
                                        <h5>{props.author}</h5>
                                    </div>
                                </div>
                                <div className="category">
                                    <h6>Category</h6>
                                    <h5>
                                        <span>{props.category}</span>
                                    </h5>
                                </div>
                                <div className="date">
                                    <h6>Date</h6>
                                    <h5>{props.date}</h5>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="blog-thumbnail">
                    <img width="1844" height="819" src={props.thumbnail} alt="blog-thumbnail" />
                </div>
            </div>
        </div>
    );
}

export default BlogDetailedHeader;
