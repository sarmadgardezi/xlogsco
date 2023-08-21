import React, { useState } from 'react';

function CommentForm() {
    const [author, setAuthor] = useState('');
    const [email, setEmail] = useState('');
    const [website, setWebsite] = useState('');
    const [comment, setComment] = useState('');
    const [saveInfo, setSaveInfo] = useState(false);

    const handleSubmit = (event) => {
        event.preventDefault();
        // Handle form submission
    };

    return (
        <div>
            <div className="comment-form--wrapper">
                <div className="container">
                    <div className="row">
                        <div className="col">
                            <div className="comment-respond">
                                <h3 id="reply-title" className="comment-reply-title">
                                    Write Reply.
                                </h3>
                                <form className="comment-form" onSubmit={handleSubmit}>
                                    <div className="comment-form">
                                        <div className="comment-form--inner row">
                                            <div className="col-lg-6">
                                                <div className="field-group">
                                                    <input
                                                        required
                                                        type="text"
                                                        id="author"
                                                        name="author"
                                                        placeholder="Name *"
                                                        className="input-field"
                                                        value={author}
                                                        onChange={(event) => setAuthor(event.target.value)}
                                                    />
                                                    <input
                                                        required
                                                        type="text"
                                                        id="email"
                                                        name="email"
                                                        placeholder="Email *"
                                                        className="input-field"
                                                        value={email}
                                                        onChange={(event) => setEmail(event.target.value)}
                                                    />
                                                    <input
                                                        type="text"
                                                        placeholder="Website"
                                                        className="input-field"
                                                        value={website}
                                                        onChange={(event) => setWebsite(event.target.value)}
                                                    />
                                                </div>
                                            </div>

                                            <div className="col-lg-6">
                                                <div className="textarea-group">
                                                    <textarea
                                                        required
                                                        placeholder="Your reply *"
                                                        id="comment"
                                                        name="comment"
                                                        className="input-field"
                                                        value={comment}
                                                        onChange={(event) => setComment(event.target.value)}
                                                    ></textarea>
                                                </div>
                                            </div>

                                            <div className="col">
                                                <div className="cookies-consent">
                                                    <label htmlFor="wp-comment-cookies-consent" className="paragraph">
                                                        Save my name, email, and website in this browser for the next
                                                        time I comment.
                                                        <input
                                                            id="wp-comment-cookies-consent"
                                                            name="wp-comment-cookies-consent"
                                                            type="checkbox"
                                                            value="yes"
                                                            checked={saveInfo}
                                                            onChange={() => setSaveInfo(!saveInfo)}
                                                        />
                                                        <span className="checkmark"></span>
                                                    </label>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="row form-submit-row">
                                        <div className="col-lg-6">
                                            <p className="form-submit button">
                                                <input
                                                    name="submit"
                                                    type="submit"
                                                    className="submit"
                                                    value="Post Reply"
                                                />
                                            </p>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CommentForm;
