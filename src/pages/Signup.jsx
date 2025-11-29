import React from 'react';
import { Link } from 'react-router-dom';
import './Signup.css';

const Signup = () => {
    return (
        <div className="signup-page">
            <div className="signup-container visual-card">
                <div className="text-center mb-lg">
                    <h2>Create Account</h2>
                    <p className="text-muted">Get started with DataLabel AI today</p>
                </div>

                <form className="signup-form">
                    <div className="form-group">
                        <label>Full Name</label>
                        <input type="text" placeholder="John Doe" />
                    </div>
                    <div className="form-group">
                        <label>Email Address</label>
                        <input type="email" placeholder="you@company.com" />
                    </div>
                    <div className="form-group">
                        <label>Password</label>
                        <input type="password" placeholder="••••••••" />
                    </div>
                    <div className="form-group">
                        <label>Confirm Password</label>
                        <input type="password" placeholder="••••••••" />
                    </div>
                    <button type="submit" className="btn btn-primary full-width">Sign Up</button>
                </form>

                <div className="divider">OR</div>

                <button className="btn btn-outline full-width mb-sm">
                    Sign up with Google
                </button>
                <button className="btn btn-outline full-width">
                    Sign up with GitHub
                </button>

                <p className="text-center mt-lg text-sm">
                    Already have an account? <Link to="/login" className="text-primary">Log in</Link>
                </p>
            </div>
        </div>
    );
};

export default Signup;
