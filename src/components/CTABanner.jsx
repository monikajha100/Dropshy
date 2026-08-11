import React from 'react';
import './CTABanner.css';

const CTABanner = () => (
    <section className="cta-banner" id="cta-banner">
        <div className="cta-banner__glow cta-banner__glow--left" aria-hidden="true" />
        <div className="cta-banner__glow cta-banner__glow--right" aria-hidden="true" />
        <div className="cta-banner__orb cta-banner__orb--top" aria-hidden="true" />
        <div className="cta-banner__orb cta-banner__orb--bottom" aria-hidden="true" />
        <div className="container cta-banner__inner">
            <div className="cta-banner__content">
                <p className="cta-banner__eyebrow">Ready to scale?</p>
                <h2 className="cta-banner__title">
                    Ready to grow your ecommerce business?
                </h2>
                <p className="cta-banner__sub">
                    Start managing, shipping and growing your business with Dropsy.
                </p>
                <div className="cta-banner__actions">
                    <a href="/get-started" className="cta-banner__btn cta-banner__btn--primary" id="cta-get-started">
                        Get Started Free
                    </a>
                </div>
            </div>
        </div>
    </section>
);

export default CTABanner;
