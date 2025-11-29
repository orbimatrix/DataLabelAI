import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Features from './pages/Features';
import Pricing from './pages/Pricing';
import HowItWorks from './pages/HowItWorks';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Docs from './pages/Docs';

import About from './pages/About';
import Careers from './pages/Careers';
import Contact from './pages/Contact';
import Legal from './pages/Legal';

// Placeholder components for now
const Placeholder = ({ title }) => (
    <div className="container section text-center">
        <h1>{title}</h1>
        <p className="text-muted">Coming soon...</p>
    </div>
);

function App() {
    return (
        <Router>
            <div className="app-wrapper">
                <Navbar />
                <main>
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/features" element={<Features />} />
                        <Route path="/pricing" element={<Pricing />} />
                        <Route path="/how-it-works" element={<HowItWorks />} />
                        <Route path="/login" element={<Login />} />
                        <Route path="/signup" element={<Signup />} />
                        <Route path="/case-studies" element={<Placeholder title="Case Studies" />} />
                        <Route path="/docs" element={<Docs />} />
                        
                        {/* Company Pages */}
                        <Route path="/about" element={<About />} />
                        <Route path="/careers" element={<Careers />} />
                        <Route path="/contact" element={<Contact />} />
                        
                        {/* Legal Pages */}
                        <Route path="/legal" element={<Legal />} />
                        <Route path="/privacy" element={<Legal />} />
                        <Route path="/terms" element={<Legal />} />
                        <Route path="/security" element={<Legal />} />
                    </Routes>
                </main>
                <Footer />
            </div>
        </Router>
    );
}

export default App;
