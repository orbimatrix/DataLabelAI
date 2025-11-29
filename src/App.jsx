import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Features from './pages/Features';
import Pricing from './pages/Pricing';
import HowItWorks from './pages/HowItWorks';
import Login from './pages/Login';

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
                        <Route path="/case-studies" element={<Placeholder title="Case Studies" />} />
                        <Route path="/docs" element={<Placeholder title="Documentation" />} />
                        <Route path="/contact" element={<Placeholder title="Contact" />} />
                    </Routes>
                </main>
                <Footer />
            </div>
        </Router>
    );
}

export default App;
