import React, { useState } from 'react';
import { Check } from 'lucide-react';
import './Pricing.css';

const Pricing = () => {
    const [annual, setAnnual] = useState(true);

    return (
        <div className="pricing-page">
            <section className="section text-center">
                <div className="container">
                    <h1 className="hero-title">Simple, Transparent Pricing</h1>
                    <p className="hero-subtitle">Start small and scale as you grow.</p>

                    <div className="pricing-toggle">
                        <span className={!annual ? 'active' : ''}>Monthly</span>
                        <button
                            className={`toggle-switch ${annual ? 'on' : ''}`}
                            onClick={() => setAnnual(!annual)}
                        >
                            <div className="toggle-thumb"></div>
                        </button>
                        <span className={annual ? 'active' : ''}>Annual (Save 20%)</span>
                    </div>

                    <div className="grid grid-cols-3 gap-lg mt-3xl">
                        {/* Starter */}
                        <div className="visual-card pricing-card">
                            <h3>Starter</h3>
                            <div className="price">
                                <span className="currency">$</span>
                                <span className="amount">{annual ? '0' : '0'}</span>
                                <span className="period">/mo</span>
                            </div>
                            <p className="text-muted">Perfect for pilots and hobbyists.</p>
                            <button className="btn btn-outline full-width mt-md">Get Started</button>
                            <ul className="pricing-features mt-lg text-left">
                                <li><Check size={16} /> 5,000 labels / month</li>
                                <li><Check size={16} /> Basic Active Learning</li>
                                <li><Check size={16} /> Community Support</li>
                            </ul>
                        </div>

                        {/* Growth */}
                        <div className="visual-card pricing-card featured">
                            <div className="badge">Most Popular</div>
                            <h3>Growth</h3>
                            <div className="price">
                                <span className="currency">$</span>
                                <span className="amount">{annual ? '499' : '599'}</span>
                                <span className="period">/mo</span>
                            </div>
                            <p className="text-muted">For fast-growing AI startups.</p>
                            <button className="btn btn-primary full-width mt-md">Start Free Trial</button>
                            <ul className="pricing-features mt-lg text-left">
                                <li><Check size={16} /> 50,000 labels / month</li>
                                <li><Check size={16} /> Advanced Active Learning</li>
                                <li><Check size={16} /> Priority Support</li>
                                <li><Check size={16} /> 3 Team Members</li>
                            </ul>
                        </div>

                        {/* Enterprise */}
                        <div className="visual-card pricing-card">
                            <h3>Enterprise</h3>
                            <div className="price">
                                <span className="amount">Custom</span>
                            </div>
                            <p className="text-muted">For large-scale operations.</p>
                            <button className="btn btn-outline full-width mt-md">Contact Sales</button>
                            <ul className="pricing-features mt-lg text-left">
                                <li><Check size={16} /> Unlimited labels</li>
                                <li><Check size={16} /> On-premise Deployment</li>
                                <li><Check size={16} /> Dedicated Success Manager</li>
                                <li><Check size={16} /> SSO & Audit Logs</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Pricing;
