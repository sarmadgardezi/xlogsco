import React from 'react';
import BlogRecentPostTemplate from './BlogRecentPostTemplate';
import { RelatedBlogs } from '../../Data/RelatedBlogs';

function BlogRecentPosts() {
    return (
        <li className="widget widget_slope_recent_posts">
            <h2 className="widgettitle">Recent Posts</h2>
            <ul className="recent-posts">
                {RelatedBlogs.slice(0, 3).map((item, index) => {
                    return (
                        <BlogRecentPostTemplate
                            key={index}
                            image={item.image}
                            date={item.date}
                            designation={item.designation}
                            category={item.category}
                            title={item.title}
                            description={item.description}
                        />
                    );
                })}
            </ul>
        </li>
    );
}

export default BlogRecentPosts;
