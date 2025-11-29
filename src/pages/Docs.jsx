import React, { useState } from 'react';
import { Book, Code, Terminal, FileText, Search, ChevronRight } from 'lucide-react';
import './Docs.css';

const Docs = () => {
    const [activeSection, setActiveSection] = useState('introduction');

    const sidebarLinks = [
        {
            category: "Getting Started",
            items: [
                { id: 'introduction', label: 'Introduction', icon: <Book size={16} /> },
                { id: 'installation', label: 'Installation', icon: <Terminal size={16} /> },
                { id: 'quick-start', label: 'Quick Start', icon: <FileText size={16} /> }
            ]
        },
        {
            category: "Core Concepts",
            items: [
                { id: 'data-labeling', label: 'Data Labeling', icon: <ChevronRight size={16} /> },
                { id: 'models', label: 'Training Models', icon: <ChevronRight size={16} /> },
                { id: 'workflows', label: 'Workflows', icon: <ChevronRight size={16} /> }
            ]
        },
        {
            category: "API Reference",
            items: [
                { id: 'api-overview', label: 'Overview', icon: <Code size={16} /> },
                { id: 'authentication', label: 'Authentication', icon: <Code size={16} /> },
                { id: 'endpoints', label: 'Endpoints', icon: <Code size={16} /> }
            ]
        }
    ];

    const contentMap = {
        'introduction': {
            title: "Introduction to DataLabel AI",
            lead: "Learn how to integrate high-quality data labeling into your AI development workflow.",
            content: (
                <>
                    <section className="doc-section">
                        <h2>What is DataLabel AI?</h2>
                        <p>
                            DataLabel AI is a comprehensive platform designed to streamline the process of creating high-quality training data for machine learning models. By combining automated active learning with human-in-the-loop review, we help teams reduce labeling costs by up to 60% while maintaining 99.9% accuracy.
                        </p>
                    </section>

                    <section className="doc-section">
                        <h2>Key Features</h2>
                        <div className="features-grid">
                            <div className="doc-card">
                                <h3>Automated Labeling</h3>
                                <p>Use our pre-trained models to automatically label your data, only sending low-confidence items for human review.</p>
                            </div>
                            <div className="doc-card">
                                <h3>Quality Assurance</h3>
                                <p>Built-in consensus algorithms and gold standard testing ensure your data meets the highest quality standards.</p>
                            </div>
                        </div>
                    </section>
                </>
            ),
            next: { id: 'installation', label: 'Installation' }
        },
        'installation': {
            title: "Installation",
            lead: "Get DataLabel AI set up in your environment in minutes.",
            content: (
                <>
                    <section className="doc-section">
                        <h2>Prerequisites</h2>
                        <p>Before you begin, ensure you have Python 3.8 or higher installed on your system. You will also need an API key, which you can generate in your dashboard settings.</p>
                    </section>
                    <section className="doc-section">
                        <h2>Install via PIP</h2>
                        <p>The easiest way to install the DataLabel AI SDK is via pip:</p>
                        <div className="code-block">
                            <div className="code-header">
                                <span>bash</span>
                                <button className="copy-btn">Copy</button>
                            </div>
                            <pre><code>pip install datalabel-ai</code></pre>
                        </div>
                    </section>
                    <section className="doc-section">
                        <h2>Verify Installation</h2>
                        <p>To verify that the installation was successful, run the following command:</p>
                        <div className="code-block">
                            <div className="code-header">
                                <span>bash</span>
                                <button className="copy-btn">Copy</button>
                            </div>
                            <pre><code>python -c "import datalabel; print(datalabel.__version__)"</code></pre>
                        </div>
                    </section>
                </>
            ),
            next: { id: 'quick-start', label: 'Quick Start' }
        },
        'quick-start': {
            title: "Quick Start Guide",
            lead: "Build your first labeling project in under 5 minutes.",
            content: (
                <>
                    <section className="doc-section">
                        <h2>1. Initialize the Client</h2>
                        <p>First, import the library and initialize the client with your API key.</p>
                        <div className="code-block">
                            <div className="code-header">
                                <span>python</span>
                                <button className="copy-btn">Copy</button>
                            </div>
                            <pre><code>{`import datalabel

client = datalabel.Client(api_key="YOUR_API_KEY")`}</code></pre>
                        </div>
                    </section>
                    <section className="doc-section">
                        <h2>2. Create a Project</h2>
                        <p>Create a new project for your labeling task. We'll create an object detection project.</p>
                        <div className="code-block">
                            <div className="code-header">
                                <span>python</span>
                                <button className="copy-btn">Copy</button>
                            </div>
                            <pre><code>{`project = client.create_project(
    name="Traffic Sign Detection",
    type="object_detection",
    labels=["stop_sign", "yield_sign", "traffic_light"]
)`}</code></pre>
                        </div>
                    </section>
                    <section className="doc-section">
                        <h2>3. Upload Data</h2>
                        <p>Upload your raw images to the project.</p>
                        <div className="code-block">
                            <div className="code-header">
                                <span>python</span>
                                <button className="copy-btn">Copy</button>
                            </div>
                            <pre><code>{`dataset = client.upload_dataset(
    project_id=project.id,
    path="./images",
    batch_size=100
)`}</code></pre>
                        </div>
                    </section>
                </>
            ),
            next: { id: 'data-labeling', label: 'Data Labeling' }
        },
        'data-labeling': {
            title: "Data Labeling",
            lead: "Understand the core labeling capabilities and interfaces.",
            content: (
                <>
                    <section className="doc-section">
                        <h2>Supported Data Types</h2>
                        <p>DataLabel AI supports a wide range of data types including:</p>
                        <ul>
                            <li><strong>Images:</strong> Bounding boxes, polygons, keypoints, and semantic segmentation.</li>
                            <li><strong>Text:</strong> Named entity recognition (NER), sentiment analysis, and classification.</li>
                            <li><strong>Video:</strong> Temporal segmentation and object tracking.</li>
                            <li><strong>Audio:</strong> Transcription and event detection.</li>
                        </ul>
                    </section>
                    <section className="doc-section">
                        <h2>Labeling Interface</h2>
                        <p>Our labeling interface is designed for speed and accuracy. It supports keyboard shortcuts, customizable layouts, and real-time collaboration.</p>
                    </section>
                </>
            ),
            next: { id: 'models', label: 'Training Models' }
        },
        'models': {
            title: "Training Models",
            lead: "Train and deploy models directly from your labeled data.",
            content: (
                <>
                    <section className="doc-section">
                        <h2>AutoML Training</h2>
                        <p>Once you have enough labeled data, you can start a training job with a single click. Our AutoML engine automatically selects the best architecture for your data.</p>
                    </section>
                    <section className="doc-section">
                        <h2>Model Versioning</h2>
                        <p>Every model trained is versioned and linked to the specific dataset snapshot used for training, ensuring full reproducibility.</p>
                    </section>
                </>
            ),
            next: { id: 'workflows', label: 'Workflows' }
        },
        'workflows': {
            title: "Workflows",
            lead: "Automate your data pipeline with custom workflows.",
            content: (
                <>
                    <section className="doc-section">
                        <h2>Active Learning Loop</h2>
                        <p>Configure an active learning loop to continuously improve your model. The system will automatically select the most informative samples for human review.</p>
                    </section>
                    <section className="doc-section">
                        <h2>Webhooks</h2>
                        <p>Integrate with your existing tools using webhooks. Trigger actions when a labeling job is complete or when model performance reaches a certain threshold.</p>
                    </section>
                </>
            ),
            next: { id: 'api-overview', label: 'API Overview' }
        },
        'api-overview': {
            title: "API Overview",
            lead: "Programmatic access to the DataLabel AI platform.",
            content: (
                <>
                    <section className="doc-section">
                        <h2>Base URL</h2>
                        <p>All API requests should be made to the following base URL:</p>
                        <div className="code-block">
                            <div className="code-header">
                                <span>text</span>
                                <button className="copy-btn">Copy</button>
                            </div>
                            <pre><code>https://api.datalabel.ai/v1</code></pre>
                        </div>
                    </section>
                    <section className="doc-section">
                        <h2>Rate Limits</h2>
                        <p>The API is rate limited to 1000 requests per minute for standard accounts. Enterprise accounts have custom limits.</p>
                    </section>
                </>
            ),
            next: { id: 'authentication', label: 'Authentication' }
        },
        'authentication': {
            title: "Authentication",
            lead: "Secure your API requests with API keys.",
            content: (
                <>
                    <section className="doc-section">
                        <h2>API Keys</h2>
                        <p>Authenticate your requests by including your API key in the header. You can manage your API keys in the dashboard.</p>
                        <div className="code-block">
                            <div className="code-header">
                                <span>bash</span>
                                <button className="copy-btn">Copy</button>
                            </div>
                            <pre><code>Authorization: Bearer YOUR_API_KEY</code></pre>
                        </div>
                    </section>
                    <section className="doc-section">
                        <h2>Security Best Practices</h2>
                        <p>Never commit your API keys to version control. Use environment variables to store them securely.</p>
                    </section>
                </>
            ),
            next: { id: 'endpoints', label: 'Endpoints' }
        },
        'endpoints': {
            title: "Endpoints",
            lead: "Detailed reference for available API endpoints.",
            content: (
                <>
                    <section className="doc-section">
                        <h2>Projects</h2>
                        <p>Manage your labeling projects.</p>
                        <ul>
                            <li><code>GET /projects</code> - List all projects</li>
                            <li><code>POST /projects</code> - Create a new project</li>
                            <li><code>GET /projects/:id</code> - Get project details</li>
                        </ul>
                    </section>
                    <section className="doc-section">
                        <h2>Datasets</h2>
                        <p>Upload and manage datasets.</p>
                        <ul>
                            <li><code>POST /projects/:id/datasets</code> - Upload data</li>
                            <li><code>GET /projects/:id/datasets</code> - List datasets</li>
                        </ul>
                    </section>
                </>
            ),
            next: null
        }
    };

    const currentContent = contentMap[activeSection] || contentMap['introduction'];

    return (
        <div className="docs-page">
            <div className="docs-container container">
                {/* Sidebar */}
                <aside className="docs-sidebar">
                    <div className="docs-search">
                        <Search size={18} className="search-icon" />
                        <input type="text" placeholder="Search docs..." />
                    </div>
                    
                    <nav className="docs-nav">
                        {sidebarLinks.map((section, index) => (
                            <div key={index} className="nav-section">
                                <h3>{section.category}</h3>
                                <ul>
                                    {section.items.map(item => (
                                        <li key={item.id}>
                                            <button 
                                                className={`nav-item ${activeSection === item.id ? 'active' : ''}`}
                                                onClick={() => setActiveSection(item.id)}
                                            >
                                                {item.icon}
                                                <span>{item.label}</span>
                                            </button>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </nav>
                </aside>

                {/* Main Content */}
                <main className="docs-content">
                    <div className="content-header">
                        <div className="breadcrumbs">
                            <span>Docs</span>
                            <ChevronRight size={14} />
                            <span>{sidebarLinks.find(cat => cat.items.some(item => item.id === activeSection))?.category || 'Getting Started'}</span>
                            <ChevronRight size={14} />
                            <span className="current">{sidebarLinks.flatMap(cat => cat.items).find(item => item.id === activeSection)?.label || 'Introduction'}</span>
                        </div>
                        <h1>{currentContent.title}</h1>
                        <p className="lead">
                            {currentContent.lead}
                        </p>
                    </div>

                    <div className="content-body">
                        {currentContent.content}
                    </div>
                    
                    <div className="docs-footer">
                        <div className="feedback">
                            <span>Was this page helpful?</span>
                            <button className="btn-sm btn-outline">Yes</button>
                            <button className="btn-sm btn-outline">No</button>
                        </div>
                        {currentContent.next && (
                            <div className="next-page">
                                <span>Next</span>
                                <button 
                                    className="link-arrow btn-link" 
                                    onClick={() => setActiveSection(currentContent.next.id)}
                                    style={{ background: 'none', border: 'none', padding: 0, cursor: 'pointer', fontSize: '1rem' }}
                                >
                                    {currentContent.next.label} <ChevronRight size={16} />
                                </button>
                            </div>
                        )}
                    </div>
                </main>
            </div>
        </div>
    );
};

export default Docs;
