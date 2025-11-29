import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Zap, Shield, Users, Play } from 'lucide-react';
import './Home.css';

const Home = () => {
    const [roiValue, setRoiValue] = useState(50000);

    return (
        <div className="home-page">
            {/* Hero Section */}
            <section className="hero-section">
                <div className="container hero-container">
                    <div className="hero-content animate-fade-in">
                        <h1 className="hero-title">
                            Accelerate AI Development with <br /> <span className="text-gradient">High-Quality Data</span>
                        </h1>
                        <p className="hero-subtitle animate-fade-in animate-delay-100">
                            The fastest way to get accurate training data. Combine automated active learning with expert human review to cut labeling costs by 60%.
                        </p>
                        <div className="hero-actions animate-fade-in animate-delay-200">
                            <Link to="/signup" className="btn btn-primary btn-lg">
                                Get Started Free <ArrowRight size={18} style={{ marginLeft: '8px' }} />
                            </Link>
                            <Link to="/contact" className="btn btn-outline btn-lg">
                                Book a Demo
                            </Link>
                        </div>

                        <div className="hero-trust animate-fade-in animate-delay-300">
                            <span>Trusted by AI teams at:</span>
                            <div className="trust-logos-container">
                                <div className="trust-logos">
                                    {/* Duplicated for infinite scroll effect */}
                                    <span className="trust-logo">Acme AI</span>
                                    <span className="trust-logo">TechCorp</span>
                                    <span className="trust-logo">DataFlow</span>
                                    <span className="trust-logo">Visionary</span>
                                    <span className="trust-logo">NeuralNet</span>
                                    <span className="trust-logo">DeepMind</span>
                                    <span className="trust-logo">OpenScale</span>
                                    <span className="trust-logo">Acme AI</span>
                                    <span className="trust-logo">TechCorp</span>
                                    <span className="trust-logo">DataFlow</span>
                                    <span className="trust-logo">Visionary</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="hero-visual animate-fade-in animate-delay-200">
                        <div className="hero-card glass-panel">
                            <div className="ui-header">
                                <div className="ui-dot red"></div>
                                <div className="ui-dot yellow"></div>
                                <div className="ui-dot green"></div>
                            </div>
                            <div className="ui-body">
                                <div className="scan-line"></div>
                                <div className="bounding-box">
                                    <span className="label-tag">
                                        Car <span className="confidence-score">98%</span>
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Value Props */}
            <section className="section value-props">
                <div className="container">
                    <div className="section-header text-center mb-2xl">
                        <h2 style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>Why Leading AI Teams Choose Us</h2>
                        <p className="text-muted" style={{ fontSize: '1.1rem' }}>Scale your data operations without compromising quality.</p>
                    </div>
                    <div className="grid grid-cols-3 gap-lg">
                        <div className="feature-card">
                            <div className="icon-box bg-blue">
                                <Zap size={28} />
                            </div>
                            <h3>Active Learning</h3>
                            <p className="text-muted mt-sm">Our AI pre-labels your data, so humans only review low-confidence samples. Speeds up labeling by 5x.</p>
                        </div>
                        <div className="feature-card">
                            <div className="icon-box bg-teal">
                                <Users size={28} />
                            </div>
                            <h3>Human-in-the-Loop</h3>
                            <p className="text-muted mt-sm">Access a vetted global workforce of subject matter experts for 99.9% accuracy on complex tasks.</p>
                        </div>
                        <div className="feature-card">
                            <div className="icon-box bg-purple">
                                <Shield size={28} />
                            </div>
                            <h3>Enterprise Security</h3>
                            <p className="text-muted mt-sm">SOC2 Type II compliant, GDPR ready, and on-premise deployment options for sensitive data.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Interactive Demo Teaser */}
            <section className="section demo-section bg-dark text-white">
                <div className="container text-center">
                    <h2 style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>Experience Magic Labeling</h2>
                    <p className="mb-xl text-muted" style={{ color: '#94a3b8' }}>Watch how our model learns from your corrections in real-time.</p>
                    <div className="video-placeholder">
                        <div className="play-button">
                            <Play fill="var(--color-secondary)" size={32} color="var(--color-secondary)" />
                        </div>
                        <span style={{ fontWeight: 600 }}>Interactive Demo Preview</span>
                    </div>
                </div>
            </section>

            {/* ROI Calculator */}
            <section className="section roi-section">
                <div className="container">
                    <div className="roi-grid">
                        <div className="roi-content">
                            <h2 style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>Calculate Your Savings</h2>
                            <p className="text-muted mb-lg">See how much time and money you can save by switching from manual labeling to our active learning platform.</p>
                            <div className="roi-result">
                                <span className="roi-label text-muted uppercase tracking-wider text-sm font-bold">Estimated Annual Savings</span>
                                <span className="roi-amount">${(roiValue * 0.6).toLocaleString()}</span>
                            </div>
                        </div>
                        <div className="roi-calculator">
                            <label className="font-bold block mb-sm">Annual Labeling Budget ($)</label>
                            <input
                                type="range"
                                min="10000"
                                max="500000"
                                step="5000"
                                value={roiValue}
                                onChange={(e) => setRoiValue(Number(e.target.value))}
                                className="range-slider"
                            />
                            <div className="range-value font-bold text-xl mb-lg">${roiValue.toLocaleString()}</div>
                            <div className="roi-breakdown">
                                <div className="breakdown-item">
                                    <span className="text-muted">Traditional Cost</span>
                                    <span className="font-bold">${roiValue.toLocaleString()}</span>
                                </div>
                                <div className="breakdown-item highlight">
                                    <span>With DataLabel AI</span>
                                    <span>${(roiValue * 0.4).toLocaleString()}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="section cta-section text-center">
                <div className="container">
                    <h2 style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>Ready to build better models?</h2>
                    <p className="mb-xl text-muted">Join 500+ AI teams shipping faster.</p>
                    <Link to="/signup" className="btn btn-primary btn-lg">Start Your Free Trial</Link>
                </div>
            </section>
        </div>
    );
};

export default Home;
