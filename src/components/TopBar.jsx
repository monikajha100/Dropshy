import React from 'react';
import './TopBar.css';

const TopBar = () => (
    <section className="top-bar" role="banner">
        <div className="top-bar__inner container">
            <span className="top-bar__text">🚀 Launch your business with Dropsy — Get started today</span>
            <a href="/get-started" className="top-bar__cta">Get Started</a>
        </div>
    </section>
);

export default TopBar;
