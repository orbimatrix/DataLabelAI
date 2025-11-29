import React from 'react';
import { Link } from 'react-router-dom';
import './Login.css';

const Login = () => {
    return (
        <div className="login-page">
            <div className="login-container visual-card">
                <div className="text-center mb-lg">
                    <h2>Welcome Back</h2>
                    <p className="text-muted">Log in to your DataLabel AI account</p>
                </div>

                <form className="login-form">
                    <div className="form-group">
                        <label>Email Address</label>
                        <input type="email" placeholder="you@company.com" />
                    </div>
                    <div className="form-group">
                        <label>Password</label>
                        <input type="password" placeholder="••••••••" />
                    </div>
                    <button type="submit" className="btn btn-primary full-width">Log In</button>
                </form>

                <div className="divider">OR</div>

                <button className="btn btn-outline full-width mb-sm">
                    Continue with Google
                </button>
                <button className="btn btn-outline full-width">
                    Continue with GitHub
                </button>

                <p className="text-center mt-lg text-sm">
                    Don't have an account? <Link to="/signup" className="text-primary">Sign up</Link>
                </p>
            </div>
        </div>
    );
};

export default Login;
