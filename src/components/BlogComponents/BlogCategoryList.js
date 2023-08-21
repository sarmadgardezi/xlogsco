import React from 'react';
import { Link } from 'react-router-dom';

function BlogCategoryList(props) {
    
    return (
        <li className="widget widget_categories">
            <h2 className="widgettitle">{props.heading}</h2>
            <ul>
                {props.categories.map(category => {
                    return (
                        <li className="cat-item">
                            <Link to={category.link}>
                                {category.label}
                            </Link>
                        </li>
                    );
                })}
            </ul>
        </li>
    );
}

export default BlogCategoryList;
