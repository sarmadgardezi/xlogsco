
import ContactHeader from '../components/Headers/ContactHeader.js';
import { Tabs } from '../components/Misc/Tabs.js';
import { ConsultationForm } from '../components/Forms/ConsultationForm.js';
import { VisitForm } from '../components/Forms/VisitForm.js';

function Contact() {
    return (
        <>
            <ContactHeader />            
            <div className="contact-section">
                <div className="contact-section-wrapper">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-8">
                                <div className="contact-form-wrapper">
                                    <Tabs
                                        labelListClass={'contact-form-tab'}
                                        tabs={[
                                            {
                                                id: 'tab-1',
                                                tabLabel: 'Strategy Session',
                                                content: <ConsultationForm/>
                                            },
                                            {
                                                id: 'tab-2',
                                                tabLabel: 'Say Hello',
                                                content: <VisitForm/>
                                            }
                                        ]}
                                    />                              
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Contact;
