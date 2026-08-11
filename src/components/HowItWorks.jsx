import React, { useRef, useEffect, useState } from 'react';
import './HowItWorks.css';

const STEPS = [
  {
    num: '01',
    title: 'Connect Your Store',
    desc: 'Integrate Dropsy with your storefront in minutes and unlock shipping, tracking, and automation from day one.',
    icon: '🔗',
    color: '#4F46E5',
  },
  {
    num: '02',
    title: 'Manage Your Orders',
    desc: 'Bring every order, pickup, and exception into one command center with real-time orchestration.',
    icon: '⚡',
    color: '#7C3AED',
  },
  {
    num: '03',
    title: 'Ship & Grow',
    desc: 'Deliver faster, delight customers, and turn every shipment into an opportunity to scale.',
    icon: '🚀',
    color: '#10B981',
  },
];

const HowItWorks = () => {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          obs.disconnect();
        }
      },
      { threshold: 0.15 }
    );

    if (el) obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <section className="hiw" id="how-it-works">
      <div className="container">
        <div className="section-header">
          <span className="section-eyebrow">How It Works</span>
          <h2 className="section-title">How Dropsy Works</h2>
          <p className="section-sub">Launch faster, operate smarter, and grow with a shipping experience built for modern brands.</p>
        </div>

        <div ref={ref} className={`hiw__steps${visible ? ' hiw__steps--visible' : ''}`}>
          {STEPS.map((step, index) => (
            <React.Fragment key={step.num}>
              <div className="hiw__step" style={{ transitionDelay: `${index * 120}ms` }}>
                <div className="hiw__step-top">
                  <div className="hiw__step-icon" style={{ background: `${step.color}18`, color: step.color }}>
                    {step.icon}
                  </div>
                  <div className="hiw__step-num" style={{ color: step.color }}>
                    {step.num}
                  </div>
                </div>
                <h3 className="hiw__step-title">{step.title}</h3>
                <p className="hiw__step-desc">{step.desc}</p>
              </div>
              {index < STEPS.length - 1 && (
                <div className="hiw__connector" aria-hidden="true">
                  <div className="hiw__connector-line" />
                  <svg className="hiw__connector-arrow" width="16" height="16" viewBox="0 0 16 16" fill="none">
                    <path d="M3 8h10M9 4l4 4-4 4" stroke="#CBD5E1" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
              )}
            </React.Fragment>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
