import React from 'react';
import { Upload, Settings, Cpu, UserCheck, Download } from 'lucide-react';
import './HowItWorks.css';

const HowItWorks = () => {
    const steps = [
        { icon: <Upload />, title: "1. Upload Data", desc: "Connect your S3 bucket or drag-and-drop files." },
        { icon: <Settings />, title: "2. Define Ontology", desc: "Set up your classes and labeling instructions." },
        { icon: <Cpu />, title: "3. Auto-Labeling", desc: "Our AI pre-labels your dataset instantly." },
        { icon: <UserCheck />, title: "4. Human Review", desc: "Experts verify low-confidence predictions." },
        { icon: <Download />, title: "5. Export", desc: "Download clean, training-ready data." }
    ];

    return (
        <div className="how-it-works-page">
            <section className="section text-center">
                <div className="container">
                    <h1 className="hero-title">From Raw Data to Model-Ready in Minutes</h1>
                    <div className="timeline">
                        {steps.map((step, index) => (
                            <div key={index} className={`timeline-item animate-fade-in animate-delay-${(index + 1) * 100}`}>
                                <div className="timeline-icon glass-panel">
                                    {step.icon}
                                </div>
                                <h3>{step.title}</h3>
                                <p className="text-muted">{step.desc}</p>
                                {index < steps.length - 1 && <div className="timeline-connector"></div>}
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default HowItWorks;
