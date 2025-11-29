import React from 'react';
import { Mail, Phone, MapPin, MessageSquare } from 'lucide-react';
import './Contact.css';

const Contact = () => {
    return (
        <div className="contact-page">
            <section className="contact-hero section text-center">
                <div className="container">
                    <h1 className="contact-title">Get in <span className="text-gradient">Touch</span></h1>
                    <p className="lead text-muted">
                        Have questions? We'd love to hear from you.
                    </p>
                </div>
            </section>

            <section className="section">
                <div className="container">
                    <div className="contact-grid">
                        {/* Contact Form */}
                        <div className="contact-form-container visual-card">
                            <h2>Send us a message</h2>
                            <form className="contact-form">
                                <div className="form-row">
                                    <div className="form-group">
                                        <label>First Name</label>
                                        <input type="text" placeholder="John" />
                                    </div>
                                    <div className="form-group">
                                        <label>Last Name</label>
                                        <input type="text" placeholder="Doe" />
                                    </div>
                                </div>
                                <div className="form-group">
                                    <label>Email Address</label>
                                    <input type="email" placeholder="john@example.com" />
                                </div>
                                <div className="form-group">
                                    <label>Subject</label>
                                    <select>
                                        <option>Sales Inquiry</option>
                                        <option>Technical Support</option>
                                        <option>Partnership</option>
                                        <option>Other</option>
                                    </select>
                                </div>
                                <div className="form-group">
                                    <label>Message</label>
                                    <textarea rows="5" placeholder="How can we help you?"></textarea>
                                </div>
                                <button type="submit" className="btn btn-primary full-width">Send Message</button>
                            </form>
                        </div>

                        {/* Contact Info */}
                        <div className="contact-info">
                            <div className="info-card visual-card">
                                <div className="icon-box bg-blue">
                                    <Mail size={24} />
                                </div>
                                <h3>Email Us</h3>
                                <p className="text-muted">Our friendly team is here to help.</p>
                                <a href="mailto:hello@datalabel.ai" className="contact-link">hello@datalabel.ai</a>
                            </div>
                            
                            <div className="info-card visual-card">
                                <div className="icon-box bg-purple">
                                    <MessageSquare size={24} />
                                </div>
                                <h3>Live Chat</h3>
                                <p className="text-muted">Chat with our sales team.</p>
                                <a href="#" className="contact-link">Start a chat</a>
                            </div>

                            <div className="info-card visual-card">
                                <div className="icon-box bg-teal">
                                    <MapPin size={24} />
                                </div>
                                <h3>Office</h3>
                                <p className="text-muted">Come say hello at our office HQ.</p>
                                <p className="address">100 Smith Street<br />Collingwood VIC 3066 AU</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Contact;
