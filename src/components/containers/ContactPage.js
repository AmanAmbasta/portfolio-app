import React, { Component } from 'react';
import ContactForm from './ModelView/ContactForm';
import Social from './ModelView/Contacts';

class Contact extends Component {
    render() {
        return (
            <div className="contact-area" id="contact">
                <div className="text-part">
                    <h1>Contact Area</h1>
                    <div className="container">
                        <div className="row">
                            <div className="column">
                            <ContactForm />
                            </div>
                            <div className="column">
                                     <Social />                           
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Contact;