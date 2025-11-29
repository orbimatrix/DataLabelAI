import React from 'react';

const CaseStudies = () => {
    return (
        <div className="case-studies-page section">
            <div className="container">
                <h1 className="text-center mb-xl">Customer Success Stories</h1>

                <div className="grid grid-cols-2 gap-lg">
                    <div className="visual-card" style={{ padding: '2rem' }}>
                        <div className="video-placeholder" style={{ height: '200px', marginBottom: '1rem' }}></div>
                        <h3>RetailAI Corp</h3>
                        <p className="text-muted">Reduced labeling costs by 60% while improving model accuracy by 15%.</p>
                        <a href="#" className="text-primary font-bold mt-sm block">Read Story &rarr;</a>
                    </div>
                    <div className="visual-card" style={{ padding: '2rem' }}>
                        <div className="video-placeholder" style={{ height: '200px', marginBottom: '1rem' }}></div>
                        <h3>MediScan</h3>
                        <p className="text-muted">Accelerated FDA approval with 99.9% accurate medical image annotation.</p>
                        <a href="#" className="text-primary font-bold mt-sm block">Read Story &rarr;</a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CaseStudies;
