import React from 'react';
import RelatedBlogs from '../components/BlogComponents/RelatedBlogs';
import BlogPost from '../Data/BlogPost';
import BlogDetailedHeader from '../components/BlogComponents/BlogDetailedHeader';
import BlogTags from '../components/BlogComponents/BlogTags';
import BlogWidgetsContainer from '../components/BlogComponents/BlogWidgetsContainer';
import CommentForm from '../components/Forms/CommentForm';
import CommentsSection from '../components/BlogComponents/CommentsSection';
import authorImage from '../assets/images/author.png';
import thumbnail from '../assets/images/blog_thumbnail_img_1.jpg';

function BlogDetailed() {
    return (
        <>
            <BlogDetailedHeader
                heading="New developments on the way and the team couldn’t be more excited."
                author="Khalil"
                category="Company"
                date="23 Sep. 2020"
                authorImage={authorImage}
                thumbnail={thumbnail}
            />

            <div className="container sidebar-page blog-single-page">
                <div className="row">
                    {/* first column - start */}
                    <div className="col-lg-8">
                        <div className="blog-single-page-wrapper blog-single-page-wrapper-right">
                            {BlogPost.content}
                            <BlogTags heading={'Tags: '} detailPageStatus="true" tags={['agency', 'development', 'technology']} />

                            <CommentsSection />

                            <CommentForm />
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

            <RelatedBlogs />
        </>
    );
}

export default BlogDetailed;
