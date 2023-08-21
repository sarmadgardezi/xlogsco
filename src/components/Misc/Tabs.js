import React, { useState } from 'react'

export const Tabs = (props) => {
    const [activeTab, setActiveTab] = useState(props.tabs[0].id);


  return (
    <>
        <div className="nav-pills-wrapper">
            <ul className={`nav nav-pills ${props.labelListClass}`} role="tablist">
                {props.tabs.map(tab => {
                    return (
                        <li className="nav-item" key={tab.id}>
                            <button
                                className={`nav-link ${ tab.id === activeTab ? 'active': '' }`}
                                id={`${tab.id}-tab`}
                                data-toggle="pill"
                                role="tab"
                                aria-controls={tab.id}
                                aria-selected="true"
                                onClick={() => setActiveTab(tab.id)}
                            >
                                <span>{tab.tabLabel}</span>
                            </button>
                        </li>
                    )
                })}
            </ul>
        </div>
        <div className="form-wrapper tab-content">
            {props.tabs.map(tab => {
                return (
                    <div
                        className={`contact-form tab-pane fade ${ tab.id === activeTab ? 'active show' : '' }`}
                        id={tab.id}
                        role="tabpanel"
                        aria-labelledby={`${tab.id}-tab`}
                        key={tab.id}
                    >
                        {tab.content}
                    </div>
                )
            })}
        </div>
    </>
  )
}
