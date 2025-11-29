import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import './Legal.css';

const Legal = () => {
    const location = useLocation();
    const [activeTab, setActiveTab] = useState('privacy');

    useEffect(() => {
        if (location.pathname.includes('terms')) {
            setActiveTab('terms');
        } else {
            setActiveTab('privacy');
        }
    }, [location]);

    return (
        <div className="legal-page">
            <div className="legal-header text-center">
                <div className="container">
                    <h1>Legal Center</h1>
                    <p className="text-muted">Transparency and trust are core to our business.</p>
                </div>
            </div>

            <div className="container section">
                <div className="legal-container visual-card">
                    <div className="legal-sidebar">
                        <button 
                            className={`legal-nav-item ${activeTab === 'privacy' ? 'active' : ''}`}
                            onClick={() => setActiveTab('privacy')}
                        >
                            Privacy Policy
                        </button>
                        <button 
                            className={`legal-nav-item ${activeTab === 'terms' ? 'active' : ''}`}
                            onClick={() => setActiveTab('terms')}
                        >
                            Terms of Service
                        </button>
                        <button 
                            className={`legal-nav-item ${activeTab === 'security' ? 'active' : ''}`}
                            onClick={() => setActiveTab('security')}
                        >
                            Security
                        </button>
                    </div>

                    <div className="legal-content">
                        {activeTab === 'privacy' && (
                            <div className="legal-section animate-fade-in">
                                <h2>Privacy Policy</h2>
                                <p className="last-updated">Last updated: November 29, 2024</p>
                                
                                <h3>1. Introduction</h3>
                                <p>At DataLabel AI, we take your privacy seriously. This Privacy Policy explains how we collect, use, disclosure, and safeguard your information when you visit our website or use our services.</p>
                                
                                <h3>2. Information We Collect</h3>
                                <p>We collect information that you provide directly to us, such as when you create an account, subscribe to our newsletter, or contact us for support.</p>
                                
                                <h3>3. How We Use Your Information</h3>
                                <p>We use the information we collect to provide, maintain, and improve our services, to process your transactions, and to communicate with you.</p>
                            </div>
                        )}

                        {activeTab === 'terms' && (
                            <div className="legal-section animate-fade-in">
                                <h2>Terms of Service</h2>
                                <p className="last-updated">Last updated: November 29, 2024</p>
                                
                                <h3>1. Acceptance of Terms</h3>
                                <p>By accessing or using our services, you agree to be bound by these Terms of Service and all applicable laws and regulations.</p>
                                
                                <h3>2. Use License</h3>
                                <p>Permission is granted to temporarily download one copy of the materials (information or software) on DataLabel AI's website for personal, non-commercial transitory viewing only.</p>
                                
                                <h3>3. Disclaimer</h3>
                                <p>The materials on DataLabel AI's website are provided on an 'as is' basis. DataLabel AI makes no warranties, expressed or implied, and hereby disclaims and negates all other warranties.</p>
                            </div>
                        )}

                        {activeTab === 'security' && (
                            <div className="legal-section animate-fade-in">
                                <h2>Security</h2>
                                <p className="last-updated">Last updated: November 29, 2024</p>
                                
                                <h3>1. Data Encryption</h3>
                                <p>All data transmitted to and from our services is encrypted using TLS 1.2 or higher. Data at rest is encrypted using AES-256.</p>
                                
                                <h3>2. Access Control</h3>
                                <p>We implement strict access controls and authentication mechanisms to ensure that only authorized personnel have access to your data.</p>
                                
                                <h3>3. Compliance</h3>
                                <p>We are SOC 2 Type II compliant and regularly undergo third-party security audits.</p>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Legal;
