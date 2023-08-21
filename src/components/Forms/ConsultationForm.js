import React, { useState } from 'react'

import { Select } from './Select'

export const ConsultationForm = () => {

    const [name, setName] = useState('');
    const [company, setCompany] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [projectDetails, setProjectDetails] = useState('');

  return (
    <form>
        <div className="slope-contact-form">
            <div className="select-wrapper">
                <div>
                    <label>Select type of your project</label>
                    <span className="source-select">
                        <Select
                            options={[
                                { value: '', label: 'Select an option' },
                                { value: 'strategy', label: 'Strategy' },
                                {
                                    value: 'brand-identities',
                                    label: 'Brand Identities',
                                },
                                {
                                    value: 'print-design',
                                    label: 'Print Design',
                                },
                                {
                                    value: 'ui/ux design',
                                    label: 'UI/UX Design',
                                },
                                {
                                    value: 'art-direction',
                                    label: 'Art Direction',
                                },
                                { value: 'back-end', label: 'Back End' },
                                {
                                    value: 'admin-system',
                                    label: 'Admin System',
                                },
                                { value: 'front-end', label: 'Front End' },
                            ]}
                        />
                    </span>
                </div>
                <div>
                    <label>How did you find us?</label>
                    <span className="source-select">
                        <Select
                            options={[
                                { value: '', label: 'Select an option' },
                                { value: 'google', label: 'Google' },
                                { value: 'facebook', label: 'Facebook' },
                                { value: 'other', label: 'Other' },
                            ]}
                        />
                    </span>
                </div>
            </div>
            <div className="fields-wrapper">
                <div className="input-contact">
                    <span className="name-field">
                        <input
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            type="text"
                            name="name-field"
                            placeholder="Your name *"
                        />
                    </span>

                    <span className="company-field">
                        <input
                            value={company}
                            onChange={(e) => setCompany(e.target.value)}
                            type="text"
                            name="company-field"
                            placeholder="Your company *"
                        />
                    </span>

                    <span className="email-field">
                        <input
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            type="email"
                            name="email-field"
                            size="40"
                            placeholder="Email address *"
                        />
                    </span>

                    <span className="number-field">
                        <input
                            value={phone}
                            onChange={(e) => setPhone(e.target.value)}
                            type="tel"
                            name="number-field" 
                            placeholder="Phone"
                        />
                    </span>
                </div>
                <div className="textarea-contact">
                    <span className="message-field">
                        <textarea
                            value={projectDetails}
                            onChange={(e) => setProjectDetails(e.target.value)}
                            name="message-field"
                            placeholder="Tell us about the project *"
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
