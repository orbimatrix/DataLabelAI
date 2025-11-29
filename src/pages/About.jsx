import React from 'react';
import './About.css';

const About = () => {
    return (
        <div className="about-page">
            {/* Hero Section */}
            <section className="about-hero section text-center">
                <div className="container">
                    <h1 className="about-title">Empowering AI with <span className="text-gradient">Human Intelligence</span></h1>
                    <p className="lead text-muted">
                        We are on a mission to bridge the gap between raw data and intelligent algorithms.
                    </p>
                </div>
            </section>

            {/* Our Story */}
            <section className="section bg-alt">
                <div className="container">
                    <div className="about-grid">
                        <div className="about-content">
                            <h2>Our Story</h2>
                            <p>
                                Founded in 2023, DataLabel AI started with a simple observation: the bottleneck in AI development isn't algorithms, it's data.
                                While working on computer vision projects, our founders realized that high-quality, labeled data was scarce, expensive, and slow to produce.
                            </p>
                            <p>
                                We set out to build a platform that combines the speed of automated labeling with the precision of expert human review.
                                Today, we help hundreds of AI teams accelerate their development cycles and build better models.
                            </p>
                        </div>
                        <div className="about-image visual-card">
                            <div className="placeholder-image">
                                <span>Team at work</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Stats */}
            <section className="section">
                <div className="container">
                    <div className="stats-grid">
                        <div className="stat-card text-center">
                            <div className="stat-number text-gradient">50M+</div>
                            <div className="stat-label">Labels Created</div>
                        </div>
                        <div className="stat-card text-center">
                            <div className="stat-number text-gradient">99.9%</div>
                            <div className="stat-label">Accuracy Rate</div>
                        </div>
                        <div className="stat-card text-center">
                            <div className="stat-number text-gradient">500+</div>
                            <div className="stat-label">Happy Clients</div>
                        </div>
                        <div className="stat-card text-center">
                            <div className="stat-number text-gradient">24/7</div>
                            <div className="stat-label">Global Support</div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Values */}
            <section className="section bg-alt">
                <div className="container">
                    <h2 className="text-center mb-2xl">Our Core Values</h2>
                    <div className="values-grid">
                        <div className="value-card visual-card">
                            <h3>Quality First</h3>
                            <p className="text-muted">We believe that better data leads to better AI. We never compromise on accuracy.</p>
                        </div>
                        <div className="value-card visual-card">
                            <h3>Human-Centric</h3>
                            <p className="text-muted">We value our labelers as much as our technology. Fair pay and meaningful work are non-negotiable.</p>
                        </div>
                        <div className="value-card visual-card">
                            <h3>Transparency</h3>
                            <p className="text-muted">We operate with openness and honesty, building trust with our clients and community.</p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default About;
