import React from 'react';
import BlogCard from './BlogCard';
import { RelatedBlogs } from '../../Data/RelatedBlogs';

function BlogContainer(props) {

    let blog = RelatedBlogs
    if (props.numberOfPosts != null) {
        blog = RelatedBlogs.slice(0, props.numberOfPosts);
    }

    return (
        <div
            className="row blog-list-container blog-isotope-container blog-list-container-7bddf04 blog-list-container-grid-1"
            id="7bddf04"
        >
            {blog.map((item, index) => (
                <BlogCard
                    key={index}
                    width={props.width}
                    image={item.image}
                    date={item.date}
                    designation={item.designation}
                    category={item.category}
                    title={item.title}
                    description={item.description}
                    index={item.index}
                />
            ))}
        </div>
    );
}

export default BlogContainer;
