import React from 'react';
import { ArrowRight, MapPin, Clock } from 'lucide-react';
import './Careers.css';

const Careers = () => {
    const positions = [
        {
            id: 1,
            title: "Senior Machine Learning Engineer",
            department: "Engineering",
            location: "Remote",
            type: "Full-time"
        },
        {
            id: 2,
            title: "Frontend Developer (React)",
            department: "Engineering",
            location: "San Francisco, CA",
            type: "Full-time"
        },
        {
            id: 3,
            title: "Product Manager",
            department: "Product",
            location: "New York, NY",
            type: "Full-time"
        },
        {
            id: 4,
            title: "Data Annotation Specialist",
            department: "Operations",
            location: "Remote",
            type: "Contract"
        }
    ];

    return (
        <div className="careers-page">
            <section className="careers-hero section text-center">
                <div className="container">
                    <h1 className="careers-title">Join the <span className="text-gradient">Data Revolution</span></h1>
                    <p className="lead text-muted">
                        Help us build the infrastructure for the next generation of AI.
                    </p>
                    <button className="btn btn-primary btn-lg mt-lg">View Open Roles</button>
                </div>
            </section>

            <section className="section bg-alt">
                <div className="container">
                    <h2 className="text-center mb-2xl">Why Work With Us?</h2>
                    <div className="benefits-grid">
                        <div className="benefit-card visual-card">
                            <h3>Remote-First</h3>
                            <p className="text-muted">Work from anywhere in the world. We trust our team to deliver results.</p>
                        </div>
                        <div className="benefit-card visual-card">
                            <h3>Competitive Pay</h3>
                            <p className="text-muted">We offer top-tier salaries and equity packages for all employees.</p>
                        </div>
                        <div className="benefit-card visual-card">
                            <h3>Growth</h3>
                            <p className="text-muted">Unlimited learning budget and clear career progression paths.</p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="section">
                <div className="container">
                    <h2 className="mb-xl">Open Positions</h2>
                    <div className="jobs-list">
                        {positions.map(job => (
                            <div key={job.id} className="job-card visual-card">
                                <div className="job-info">
                                    <h3>{job.title}</h3>
                                    <div className="job-meta">
                                        <span className="meta-item"><MapPin size={16} /> {job.location}</span>
                                        <span className="meta-item"><Clock size={16} /> {job.type}</span>
                                        <span className="department-tag">{job.department}</span>
                                    </div>
                                </div>
                                <button className="btn btn-outline btn-sm">
                                    Apply Now <ArrowRight size={16} style={{ marginLeft: '4px' }} />
                                </button>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Careers;
