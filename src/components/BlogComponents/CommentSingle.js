import React from 'react';
import { Link } from 'react-router-dom';

function CommentSingle(props) {
    return (
        <div className="parent--comment">
            <div className="comment--avatar">
                <img alt={props.image.alt} src={props.image.src} height="64" width="64" />
            </div>
            <div className="comment--content">
                <div className="comment-inner-wrapper">
                    <Link to="/BlogDetailed">
                        <h4 className="name">{props.name}</h4>
                    </Link>
                    <h5 className="date">{props.date}</h5>
                </div>
                <p>{props.commentBody}</p>

                <div className="reply-button">
                    <Link className="comment-reply-link" to="/BlogDetailed">
                        Reply
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default CommentSingle;
