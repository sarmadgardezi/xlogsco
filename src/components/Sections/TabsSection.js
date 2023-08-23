import React from 'react';
import { useState } from 'react';
import { ApproachTabsContent } from '../../Data/ApproachTabsContent';

function TabsSection(props) {
    const [activeTab, setActiveTab] = useState(0);

    return (
        <div className="container">
            <div className="row">
                <div className="col-lg-12">
                    <div className="tabs">
                        <div className="text-list tabs-list text-list-large">
                            <h4 className={`heading tab-heading heading-small ${props.dark ? 'light-2' : 'dark-2'}`}>
                                APPROACH
                            </h4>

                            <div className="nav-pills-wrapper">
                                <ul className={`nav nav-pills ${props.dark ? 'light-1' : 'dark-1'}`} role="tablist">
                                    {ApproachTabsContent.map((item, index) => {
                                        return (
                                            <li key={index}>
                                                <a
                                                    className={`nav-link${activeTab === index ? ' active' : ''}`}
                                                    data-toggle="pill"
                                                    href="/"
                                                    role="tab"
                                                    onClick={(event) => {
                                                        event.preventDefault();
                                                        setActiveTab(index);
                                                    }}
                                                >
                                                    <span>{item.name}</span>
                                                </a>
                                            </li>
                                        );
                                    })}
                                </ul>
                            </div>
                        </div>
                        <div className="tabs-content tab-content">
                            <div className="tab-single show active tab-pane fade" role="tabpanel">
                                <h4 className={`heading heading-small ${props.dark ? 'light-2' : 'dark-2'}`}>
                                    {ApproachTabsContent[activeTab].name}
                                </h4>
                                <div className={`paragraph ${props.dark ? 'light-1' : 'dark-1'}`}>
                                    {ApproachTabsContent[activeTab].content}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default TabsSection;
