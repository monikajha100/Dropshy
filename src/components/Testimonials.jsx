import React, { useRef, useEffect, useState } from 'react';
import './Testimonials.css';

const TESTIMONIALS = [
    {
        name: 'Anika Sharma',
        business: 'Kova Cosmetics',
        avatar: 'AS',
        avatarColor: 'linear-gradient(135deg, #5b4dff 0%, #7c3aed 100%)',
        stars: 5,
        quote: 'Dropsy made our shipping feel premium and predictable. We saw stronger delivery performance, clearer visibility, and happier customers in just a few weeks.',
    },
    {
        name: 'Rohan Mehta',
        business: 'GrowNest',
        avatar: 'RM',
        avatarColor: 'linear-gradient(135deg, #3b82f6 0%, #4f46e5 100%)',
        stars: 5,
        quote: 'The experience feels refined from day one. Routing, tracking, and reporting all work together beautifully and save our operations team valuable time.',
    },
    {
        name: 'Priya Nair',
        business: 'LuxeLayer',
        avatar: 'PN',
        avatarColor: 'linear-gradient(135deg, #ec4899 0%, #8b5cf6 100%)',
        stars: 5,
        quote: 'Our customers now get a more polished post-purchase experience, and our team finally has the clarity it needed to grow confidently.',
    },
    {
        name: 'Devansh Rao',
        business: 'Northstar Store',
        avatar: 'DR',
        avatarColor: 'linear-gradient(135deg, #0f172a 0%, #4338ca 100%)',
        stars: 5,
        quote: 'The dashboard feels effortless and premium. It gives our team instant signals on how to improve fulfillment and customer loyalty without extra complexity.',
    },
];

const Testimonials = () => {
    const ref = useRef(null);
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        const el = ref.current;
        const obs = new IntersectionObserver(([e]) => {
            if (e.isIntersecting) {
                setVisible(true);
                obs.disconnect();
            }
        }, { threshold: 0.15 });

        if (el) obs.observe(el);
        return () => obs.disconnect();
    }, []);

    return (
        <section className="testi" id="testimonials">
            <div className="container">
                <div className="section-header">
                    <span className="section-eyebrow">Testimonials</span>
                    <h2 className="section-title">Trusted by ambitious ecommerce teams</h2>
                    <p className="section-sub">A premium experience that helps growing brands move faster and feel more confident at every step.</p>
                </div>

                <div ref={ref} className={`testi__grid${visible ? ' testi__grid--visible' : ''}`}>
                    {TESTIMONIALS.map((t, i) => (
                        <article key={t.name} className="testi__card" style={{ transitionDelay: `${i * 100}ms` }}>
                            <div className="testi__stars" aria-label={`${t.stars} out of 5 stars`}>
                                {'★'.repeat(t.stars)}
                            </div>
                            <p className="testi__quote">“{t.quote}”</p>
                            <div className="testi__author">
                                <div className="testi__avatar" style={{ background: t.avatarColor }}>
                                    {t.avatar}
                                </div>
                                <div>
                                    <p className="testi__name">{t.name}</p>
                                    <p className="testi__business">{t.business}</p>
                                </div>
                            </div>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Testimonials;
