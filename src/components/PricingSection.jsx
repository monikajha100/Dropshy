import React, { useState } from 'react';
import './PricingSection.css';

const PLANS = [
    {
        name: 'Starter',
        price: '₹0',
        period: '/month',
        tagline: 'Perfect for new stores',
        color: '#4F46E5',
        cta: 'Start Free',
        popular: false,
        features: [
            'Up to 500 shipments/month',
            '5 courier partners',
            'Basic tracking page',
            'Email support',
            'Shopify & WooCommerce integration',
            'COD remittance (T+7)',
        ],
    },
    {
        name: 'Growth',
        price: '₹2,999',
        period: '/month',
        tagline: 'For scaling businesses',
        color: '#7C3AED',
        cta: 'Get Started',
        popular: true,
        features: [
            'Up to 5,000 shipments/month',
            '20+ courier partners',
            'Branded tracking pages',
            'WhatsApp & SMS notifications',
            'NDR & returns automation',
            'COD remittance (T+2)',
            'Analytics dashboard',
            'Priority support',
        ],
    },
    {
        name: 'Enterprise',
        price: 'Custom',
        period: '',
        tagline: 'For high-volume operations',
        color: '#111827',
        cta: 'Contact Sales',
        popular: false,
        features: [
            'Unlimited shipments',
            '25+ courier partners',
            'Dedicated account manager',
            'SLA-backed support',
            'Custom integrations & APIs',
            'Advanced fraud protection',
            'Multi-warehouse support',
            'White-label tracking',
        ],
    },
];

const PricingSection = () => {
    const [annual, setAnnual] = useState(false);

    return (
        <section className="pricing" id="pricing">
            <div className="container">
                <div className="section-header">
                    <span className="section-eyebrow">Pricing</span>
                    <h2 className="section-title">Simple, transparent pricing</h2>
                    <p className="section-sub">No hidden fees. Scale up or down at any time.</p>
                    <div className="pricing__toggle" role="group" aria-label="Billing period">
                        <button
                            className={`pricing__toggle-btn${!annual ? ' pricing__toggle-btn--active' : ''}`}
                            onClick={() => setAnnual(false)}
                        >Monthly</button>
                        <button
                            className={`pricing__toggle-btn${annual ? ' pricing__toggle-btn--active' : ''}`}
                            onClick={() => setAnnual(true)}
                        >
                            Annual
                            <span className="pricing__save-badge">Save 20%</span>
                        </button>
                    </div>
                </div>

                <div className="pricing__grid">
                    {PLANS.map(p => (
                        <div key={p.name} className={`pricing__card${p.popular ? ' pricing__card--popular' : ''}`}>
                            {p.popular && <div className="pricing__popular-badge">Most Popular</div>}
                            <div className="pricing__plan-top">
                                <p className="pricing__plan-name">{p.name}</p>
                                <p className="pricing__plan-tag">{p.tagline}</p>
                                <div className="pricing__plan-price">
                                    <span className="pricing__price-val">{p.price}</span>
                                    {p.period && <span className="pricing__price-period">{p.period}</span>}
                                </div>
                            </div>
                            <ul className="pricing__features">
                                {p.features.map(f => (
                                    <li key={f} className="pricing__feature">
                                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                                            <circle cx="8" cy="8" r="8" fill={p.popular ? '#7C3AED' : '#E8FDF0'} />
                                            <path d="M5 8l2 2 4-4" stroke={p.popular ? '#fff' : '#10B981'} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                        </svg>
                                        {f}
                                    </li>
                                ))}
                            </ul>
                            <a href="/get-started" className="pricing__cta" style={{ background: p.popular ? 'linear-gradient(135deg, #4F46E5, #7C3AED)' : '#F3F4F6', color: p.popular ? '#fff' : '#374151' }}>
                                {p.cta}
                            </a>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default PricingSection;
