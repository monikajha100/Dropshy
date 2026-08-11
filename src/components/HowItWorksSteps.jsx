import React from 'react';
import './HowItWorksSteps.css';

// Placeholder icons – replace with actual SVG paths as needed
import ConnectIcon from '../assets/icons/how-it-works/connect-store.svg';
import ManageIcon from '../assets/icons/how-it-works/manage-everything.svg';
import GrowIcon from '../assets/icons/how-it-works/grow-business.svg';

const steps = [
    {
        number: '01',
        title: 'Connect Your Store',
        description: 'Connect your e‑commerce store and sales channels.',
        icon: ConnectIcon,
    },
    {
        number: '02',
        title: 'Manage Everything',
        description: 'Manage orders, shipping, tracking and operations from one platform.',
        icon: ManageIcon,
    },
    {
        number: '03',
        title: 'Grow Your Business',
        description: 'Use analytics, automation and insights to scale.',
        icon: GrowIcon,
    },
];

const HowItWorksSteps = () => {
    return (
        <section className="how-it-works-steps">
            <div className="container">
                <h2 className="section-title">How It Works</h2>
                <div className="steps-wrapper">
                    {steps.map((step) => (
                        <div key={step.number} className="step-card">
                            <div className="icon-wrapper">
                                <img src={step.icon} alt={step.title} className="step-icon" />
                            </div>
                            <div className="step-number">{step.number}</div>
                            <h3 className="step-title">{step.title}</h3>
                            <p className="step-description">{step.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default HowItWorksSteps;
