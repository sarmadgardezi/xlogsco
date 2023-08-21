import React from 'react';
import BlogContainer from './BlogContainer';

function RelatedBlogs() {
    return (
        <>
            <div className="related-posts">
                <div className="container">
                    <div className="related-posts--heading">
                        <h2>Related Reads.</h2>
                    </div>

                    <BlogContainer numberOfPosts={2} width="6" />
                </div>
            </div>
        </>
    );
}

export default RelatedBlogs;
