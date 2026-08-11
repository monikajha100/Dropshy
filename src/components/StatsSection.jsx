import React, { useEffect, useRef, useState } from 'react';
import './StatsSection.css';

const STATS = [
    { value: 10000, suffix: '+', label: 'Businesses Powered', icon: '🏪', display: '10K+' },
    { value: 99, suffix: '%', label: 'Delivery Success Rate', icon: '✅', display: '99%' },
    { value: 25000, suffix: '+', label: 'Pin Codes Covered', icon: '📍', display: '25K+' },
    { value: 24, suffix: '/7', label: 'Expert Support', icon: '💬', display: '24/7' },
];

const StatCard = ({ stat }) => {
    const ref = useRef(null);
    const [animated, setAnimated] = useState(false);

    useEffect(() => {
        const el = ref.current;
        const observer = new IntersectionObserver(
            ([entry]) => { if (entry.isIntersecting) { setAnimated(true); observer.disconnect(); } },
            { threshold: 0.4 }
        );
        if (el) observer.observe(el);
        return () => observer.disconnect();
    }, []);

    return (
        <div ref={ref} className={`stats__card${animated ? ' stats__card--animate' : ''}`}>
            <div className="stats__icon">{stat.icon}</div>
            <p className="stats__value">{stat.display}</p>
            <p className="stats__label">{stat.label}</p>
        </div>
    );
};

const StatsSection = () => (
    <section className="stats" id="stats">
        <div className="container">
            <div className="stats__grid">
                {STATS.map(s => <StatCard key={s.label} stat={s} />)}
            </div>
        </div>
    </section>
);

export default StatsSection;
