import React, { useState } from 'react'

export const VisitForm = () => {

    const [name, setName] = useState('');
    const [company, setCompany] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [projectDetails, setProjectDetails] = useState('');

    return (
        <form>
            <div className="slope-contact-form">
                <div className="fields-wrapper">
                    <div className="input-contact">
                        <span className="wpcf7-form-control-wrap name-field">
                            <input
                                type="text"
                                name="name"
                                placeholder="Your name *"
                                value={name}
                                onChange={setName}
                            />
                        </span>
                        <span className="wpcf7-form-control-wrap company-field">
                            <input
                                type="text"
                                name="company"
                                placeholder="Your company *"
                                value={company}
                                onChange={setCompany}
                            />
                        </span>
                        <span className="wpcf7-form-control-wrap email-field">
                            <input
                                type="email"
                                name="email"
                                placeholder="Email address *"
                                value={email}
                                onChange={setEmail}
                            />
                        </span>
                        <span className="wpcf7-form-control-wrap number-field">
                            <input
                                type="tel"
                                name="phone"
                                placeholder="Phone"
                                value={phone}
                                onChange={setPhone}
                            />
                        </span>
                    </div>
                    <div className="textarea-contact">
                        <span className="wpcf7-form-control-wrap message-field">
                            <textarea
                                name="message"
                                cols="40"
                                rows="10"
                                placeholder="Write your message *"
                                value={projectDetails}
                                onChange={setProjectDetails}
                            ></textarea>
                        </span>
                    </div>
                </div>
                <div className="submit-contact">
                    <input type="submit" value="Submit" />
                </div>
            </div>
        </form>
    )
}
