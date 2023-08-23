import React from 'react';
import BlogSearch from './BlogSearch';
import BlogCategoryList from './BlogCategoryList';
import BlogRecentPosts from './BlogRecentPosts';
import BlogTags from './BlogTags';

function BlogWidgetsContainer() {
    const tagarray = ['company', 'technology', 'development', 'agency'];

    const categories = [
        { link: '!#', label: 'Company' },
        { link: '!#', label: 'Design' },
        { link: '!#', label: 'Development' },
        { link: '!#', label: 'Technology' }
    ];
    return (
        <>
            <ul className="widget widget-container">
                <BlogSearch />
                <BlogCategoryList heading='Categories' categories={categories}/>
                <BlogRecentPosts />
                <BlogTags heading='Popular Tags' tags={tagarray} />
            </ul>
        </>
    );
}

export default BlogWidgetsContainer;
