import React from 'react';
import Heading from '../components/Headers/Heading';

import BlogContainer from '../components/BlogComponents/BlogContainer';
import BlogPagination from '../components/BlogComponents/BlogPagination';
import BlogWidgetsContainer from '../components/BlogComponents/BlogWidgetsContainer';

function Bloglist() {

    return (
        <>
            <Heading 
                heading={<h1 className="page-title">Read from recent blog writings.</h1>}
                headingColumn="col-lg-8"
                WrapperComponent={(props) => {
                    return (
                        <div className="container page-header">
                            {props.children}
                        </div>
                    )
                }}
            />

            <div className="container sidebar-page">
                <div className="row ">

                    {/* first column - start */}
                    <div className="col-lg-8">
                        <div className="content-column right-sidebar">
                            <div className="page-content-wrapper">
                                <div className="blog-list">
                                    <div className="container">
                                        <BlogContainer width="12" />
                                        <BlogPagination />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* first column - end */}
                    
                    {/* second column - start */}
                    <div className="col-lg-4 sidebar-column">
                        <div className="sidebar-column-wrapper">
                            <BlogWidgetsContainer/>
                        </div>
                    </div>
                    {/* second column - end */}

                </div>
            </div>
        </>
    );
}

export default Bloglist;
