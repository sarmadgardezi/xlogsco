import React from 'react';
import comments from '../../Data/CommentsData';
import CommentSingle from './CommentSingle';

function CommentsSection() {
    const getCommentsLength = (comment) => {
        let count = comment.length;
        comment.forEach((element) => {
            if (element.reply) count += getCommentsLength(element.reply);
        });
        return count;
    };

    const commentDisplay = (comment, depth = 1) => {
        const { image, name, date, commentBody, reply } = comment;

        return (
            <div className={`comment even thread-even depth-${depth} ${reply ? 'has-reply' : ''}`} key={name + date}>
                <CommentSingle image={image} name={name} date={date} commentBody={commentBody} />

                {reply && reply.map((replyComment) => commentDisplay(replyComment, depth + 1))}
            </div>
        );
    };

    return (
        <>
            <div className="comment-list">
                <div className="container">
                    <div className="row">
                        <div className="col">
                            <h3 className="comment-list--heading">{getCommentsLength(comments)} replies.</h3>
                            {comments.map((comment) => commentDisplay(comment))}
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default CommentsSection;
