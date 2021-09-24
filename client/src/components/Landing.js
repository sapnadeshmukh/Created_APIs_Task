import React from 'react';
import {Link} from 'react-router-dom';


const Landing = () => {
    
    return ( 
        <section className="landing">
        <div className="dark-overlay">
            <div className="landing-inner">
                <h1 className="x-large">Documents Saver</h1>
                <p className="lead">
                </p>
                To Upload,View,Download the File
                <div className="buttons">
                    <Link to="/signup-user" className="btn btn-primary">Sign Up</Link>
                    <Link to="/login-user" className="btn btn-dark">Login</Link>
                </div>
            </div>
        </div>
    </section>
    )
};




export default Landing