import React from 'react';
import { Check } from 'lucide-react';

const Features = () => {
    return (
        <div className="features-page">
            <section className="section text-center bg-alt">
                <div className="container">
                    <h1 className="hero-title">A Complete Suite for Data-Centric AI</h1>
                    <p className="hero-subtitle">Everything you need to manage the entire data lifecycle.</p>
                </div>
            </section>

            <section className="section">
                <div className="container">
                    <div className="grid grid-cols-2 gap-lg items-center mb-xl">
                        <div>
                            <h2>Computer Vision</h2>
                            <p className="text-muted mb-md">Pixel-perfect annotation for any visual task.</p>
                            <ul className="feature-list">
                                <li className="flex items-center gap-sm mb-sm"><Check size={16} color="var(--color-secondary)" /> Bounding Boxes & Polygons</li>
                                <li className="flex items-center gap-sm mb-sm"><Check size={16} color="var(--color-secondary)" /> Semantic Segmentation</li>
                                <li className="flex items-center gap-sm mb-sm"><Check size={16} color="var(--color-secondary)" /> Video Object Tracking</li>
                            </ul>
                        </div>
                        <div className="visual-card glass-panel" style={{ height: '300px' }}>
                            {/* Placeholder for CV UI */}
                            <div className="ui-body">CV Interface Placeholder</div>
                        </div>
                    </div>

                    <div className="grid grid-cols-2 gap-lg items-center">
                        <div className="order-2">
                            <h2>Natural Language Processing</h2>
                            <p className="text-muted mb-md">Understand text with nuance and context.</p>
                            <ul className="feature-list">
                                <li className="flex items-center gap-sm mb-sm"><Check size={16} color="var(--color-secondary)" /> Named Entity Recognition (NER)</li>
                                <li className="flex items-center gap-sm mb-sm"><Check size={16} color="var(--color-secondary)" /> Sentiment Analysis</li>
                                <li className="flex items-center gap-sm mb-sm"><Check size={16} color="var(--color-secondary)" /> Text Classification</li>
                            </ul>
                        </div>
                        <div className="visual-card glass-panel order-1" style={{ height: '300px' }}>
                            {/* Placeholder for NLP UI */}
                            <div className="ui-body">NLP Interface Placeholder</div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Features;
