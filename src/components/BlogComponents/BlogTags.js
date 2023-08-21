import React from 'react';
import { Link } from 'react-router-dom';

function BlogTags(props) {
    const tags = props.tags;
    const detailPageStatus = props.detailPageStatus;

    if (detailPageStatus) {
        return (
            <div className="post-tags">
                <h6>{props.heading}</h6>
                <ul>
                    {tags.map((item, index) => (
                        <li key={index}>
                            <Link to="/BlogDetailed " className="tag-cloud-link">
                                {item}
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>
        );
    } else
        return (
            <li className="widget widget_tag_cloud">
                <h2 className="widgettitle">{props.heading}</h2>
                <div className="tagcloud">
                    {tags.map((item, index) => (
                        <Link to="/BlogDetailed " className="tag-cloud-link" key={index}>
                            {item}
                        </Link>
                    ))}
                </div>
            </li>
        );
}

export default BlogTags;
