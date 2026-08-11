import React, { useEffect, useRef } from 'react';
import './Strength.css';

/**
 * NOTE ON FONTS:
 * The original page loaded Google Fonts via <link> tags in <head>.
 * Add these to your document's <head> (e.g. public/index.html or
 * a Next.js <Head> component) — they can't live inside this component:
 *
 * <link rel="preconnect" href="https://fonts.googleapis.com">
 * <link href="https://fonts.googleapis.com/css2?family=Fraunces:ital,opsz,wght@0,9..144,400;0,9..144,600;0,9..144,700;1,9..144,500&family=Inter:wght@400;500;600;700&family=JetBrains+Mono:wght@500;700&display=swap" rel="stylesheet">
 */

const STATS = [
  {
    target: 190,
    label: 'Active Sellers',
    desc: 'Entrepreneurs building successful online businesses with Dropshy.',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
        <path d="M4 20 v-6 a2 2 0 0 1 2 -2 h12 a2 2 0 0 1 2 2 v6 M6 12 V7 a2 2 0 0 1 2-2 h8 a2 2 0 0 1 2 2 v5" stroke="#0F6E5C" strokeWidth="1.8" strokeLinecap="round"/>
        <circle cx="12" cy="4" r="1.6" stroke="#0F6E5C" strokeWidth="1.8"/>
      </svg>
    ),
  },
  {
    target: 32,
    label: 'Product Categories',
    desc: 'From home décor and handicrafts to fashion and lifestyle.',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
        <rect x="4" y="4" width="7" height="7" rx="1.4" stroke="#0F6E5C" strokeWidth="1.8"/>
        <rect x="13" y="4" width="7" height="7" rx="1.4" stroke="#0F6E5C" strokeWidth="1.8"/>
        <rect x="4" y="13" width="7" height="7" rx="1.4" stroke="#0F6E5C" strokeWidth="1.8"/>
        <rect x="13" y="13" width="7" height="7" rx="1.4" stroke="#0F6E5C" strokeWidth="1.8"/>
      </svg>
    ),
  },
  {
    target: 5000,
    label: 'Product SKUs',
    desc: 'A wide range of high-quality, trending products ready to sell.',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
        <path d="M12 3 L20 7.5 V16.5 L12 21 L4 16.5 V7.5 Z" stroke="#0F6E5C" strokeWidth="1.8" strokeLinejoin="round"/>
        <path d="M4 7.5 L12 12 L20 7.5 M12 12 V21" stroke="#0F6E5C" strokeWidth="1.8" strokeLinejoin="round"/>
      </svg>
    ),
  },
  {
    target: 1000,
    label: 'Daily Orders Processed',
    desc: 'Efficient fulfillment with fast shipping across India and worldwide.',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
        <rect x="3" y="9" width="12" height="8" rx="1.3" stroke="#0F6E5C" strokeWidth="1.8"/>
        <path d="M15 12 h3.5 l2.5 3 v2 h-6" stroke="#0F6E5C" strokeWidth="1.8" strokeLinejoin="round"/>
        <circle cx="7.5" cy="19" r="1.6" stroke="#0F6E5C" strokeWidth="1.8"/>
        <circle cx="17.5" cy="19" r="1.6" stroke="#0F6E5C" strokeWidth="1.8"/>
      </svg>
    ),
  },
];

const CHECK_ITEMS = [
  'Trusted by hundreds of entrepreneurs',
  'Thousands of ready-to-sell products',
  'Growing every day with new sellers',
  'Reliable fulfillment and logistics support',
  'Built for scalable e‑commerce growth',
];

function StatCard({ target, label, desc, icon, index }) {
  const cardRef = useRef(null);
  const countRef = useRef(null);

  useEffect(() => {
    const card = cardRef.current;
    const countEl = countRef.current;
    if (!card || !countEl) return;

    const animateCount = () => {
      const duration = 1400;
      const start = performance.now();
      const step = (now) => {
        const p = Math.min((now - start) / duration, 1);
        const eased = 1 - Math.pow(1 - p, 3);
        const val = Math.floor(eased * target);
        countEl.textContent = val.toLocaleString('en-IN');
        if (p < 1) requestAnimationFrame(step);
        else countEl.textContent = target.toLocaleString('en-IN');
      };
      requestAnimationFrame(step);
    };

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            card.classList.add('in-view');
            animateCount();
            observer.unobserve(card);
          }
        });
      },
      { threshold: 0.35 }
    );
    observer.observe(card);
    return () => observer.disconnect();
  }, [target]);

  return (
    <div className="stat-card" ref={cardRef} data-index={index}>
      <span className="dot"></span>
      <div className="stat-icon">{icon}</div>
      <div className="stat-number">
        <span className="count" ref={countRef}>0</span>
        <span className="plus">+</span>
      </div>
      <div className="stat-label">{label}</div>
      <div className="stat-desc">{desc}</div>
    </div>
  );
}

function CheckItem({ text, index }) {
  const itemRef = useRef(null);

  useEffect(() => {
    const el = itemRef.current;
    if (!el) return;
    el.style.animationDelay = `${index * 0.08}s`;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('in-view');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.4 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [index]);

  return (
    <div className="check-item" ref={itemRef}>
      <span className="check-mark">✓</span>
      <span className="check-text">{text}</span>
    </div>
  );
}

export default function Dropshy() {
  return (
    <div className="dropshy-page">
      
<section className="hero wrap">
      
        <div>
          <span className="eyebrow">Success by the numbers</span>
          <h1 className="headline">
            Empowering entrepreneurs. Driving <em>e‑commerce</em> success.
          </h1>
          <p className="sub">
            At Dropshy, we help entrepreneurs build and grow successful online businesses across India and international markets. Our growing network of sellers, extensive product catalog, and reliable fulfillment system reflect our commitment to making e-commerce simple, scalable, and profitable.

          </p>
          
        </div>

        <div className="illustration">
          <svg viewBox="0 0 460 420" fill="none">
            <ellipse cx="235" cy="230" rx="190" ry="150" fill="#FFF3E9"/>
            <ellipse cx="235" cy="230" rx="190" ry="150" fill="none" stroke="#F3D9BE" strokeWidth="1"/>

            <circle className="spin-slow" cx="230" cy="230" r="150" fill="none" stroke="#E9C7A4" strokeWidth="1.4" strokeDasharray="2 10"/>

            <g transform="translate(150,150)">
              <polygon points="80,0 160,42 80,84 0,42" fill="#FFB37A"/>
              <polygon points="0,42 80,84 80,164 0,122" fill="#E35F10"/>
              <polygon points="160,42 80,84 80,164 160,122" fill="#FF7A29"/>
              <line x1="80" y1="84" x2="80" y2="164" stroke="#FFD9B8" strokeWidth="3"/>
              <line x1="0" y1="72" x2="80" y2="114" stroke="#FFD9B8" strokeWidth="2" opacity=".7"/>
              <line x1="160" y1="72" x2="80" y2="114" stroke="#FFD9B8" strokeWidth="2" opacity=".7"/>
              <circle cx="80" cy="60" r="13" fill="#FCFBF6"/>
              <path d="M74 60 L78 64 L87 55" stroke="#E35F10" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"/>
            </g>

            <g className="float-a" transform="translate(60,90)">
              <circle cx="24" cy="24" r="24" fill="#fff" stroke="#E9E3D4"/>
              <path d="M14 26 L24 16 L34 26 M17 24 V33 H31 V24" stroke="#0F6E5C" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
            </g>
            <text x="20" y="150" fontFamily="Inter" fontSize="11" fontWeight="600" fill="#56626D" className="float-a">Home Décor</text>

            <g className="float-b" transform="translate(370,110)">
              <circle cx="24" cy="24" r="24" fill="#fff" stroke="#E9E3D4"/>
              <path d="M17 15 h14 l4 6 -11 5 -11 -5 z M20 21 v18 h8 v-18" stroke="#FF7A29" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
            </g>
            <text x="368" y="176" fontFamily="Inter" fontSize="11" fontWeight="600" fill="#56626D" className="float-b">Fashion</text>

            <g className="float-c" transform="translate(330,300)">
              <circle cx="24" cy="24" r="24" fill="#fff" stroke="#E9E3D4"/>
              <path d="M24 14 L27 21 L34 22 L29 27 L30 34 L24 30 L18 34 L19 27 L14 22 L21 21 Z" stroke="#0F6E5C" strokeWidth="1.8" strokeLinejoin="round" fill="none"/>
            </g>
            <text x="326" y="366" fontFamily="Inter" fontSize="11" fontWeight="600" fill="#56626D" className="float-c">Lifestyle</text>

            <g className="float-b" transform="translate(50,300)">
              <circle cx="24" cy="24" r="24" fill="#fff" stroke="#E9E3D4"/>
              <path d="M15 30 h6 v-8 h6 v8 h6 v-14 l-9 -8 -9 8 z" stroke="#FF7A29" strokeWidth="1.8" strokeLinejoin="round" fill="none"/>
            </g>
            <text x="34" y="366" fontFamily="Inter" fontSize="11" fontWeight="600" fill="#56626D" className="float-b">Handicrafts</text>

            <path d="M150 190 Q110 150 84 114" stroke="#E9C7A4" strokeWidth="1.2" strokeDasharray="2 6" fill="none"/>
            <path d="M310 200 Q350 160 394 134" stroke="#E9C7A4" strokeWidth="1.2" strokeDasharray="2 6" fill="none"/>
            <path d="M300 300 Q330 320 354 324" stroke="#E9C7A4" strokeWidth="1.2" strokeDasharray="2 6" fill="none"/>
            <path d="M160 300 Q120 320 74 324" stroke="#E9C7A4" strokeWidth="1.2" strokeDasharray="2 6" fill="none"/>
          </svg>
        </div>
      </section>

      

      <section className="route-section wrap">
        <div style={{ position: 'relative' }}>
          <svg className="route-svg" viewBox="0 0 1076 190" preserveAspectRatio="none">
            <path className="route-path" d="M 60 95 C 300 20, 420 170, 538 95 S 780 20, 1016 95" />
            <circle className="route-marker" r="5" fill="#FF7A29">
              <animateMotion dur="7s" repeatCount="indefinite" path="M 60 95 C 300 20, 420 170, 538 95 S 780 20, 1016 95" />
            </circle>
          </svg>

          <div className="stats-grid">
            {STATS.map((stat, i) => (
              <StatCard key={stat.label} index={i} {...stat} />
            ))}
          </div>
        </div>
      </section>

      <section className="matters">
        <div className="wrap matters-inner">
          <div className="matters-visual">
            <svg viewBox="0 0 280 300" fill="none">
              <circle cx="140" cy="150" r="130" fill="#fff" stroke="#E9E3D4"/>
              <circle cx="140" cy="150" r="94" fill="var(--teal-soft)"/>
              <g transform="translate(90,100)">
                <rect x="0" y="30" width="100" height="70" rx="8" fill="#FF7A29"/>
                <rect x="10" y="15" width="80" height="26" rx="6" fill="#E35F10"/>
                <circle cx="24" cy="86" r="12" fill="#16232E"/>
                <circle cx="76" cy="86" r="12" fill="#16232E"/>
                <circle cx="24" cy="86" r="5" fill="#fff"/>
                <circle cx="76" cy="86" r="5" fill="#fff"/>
                <path d="M6 55 h88" stroke="#FFD9B8" strokeWidth="3"/>
              </g>
              <g className="float-a" transform="translate(30,40)">
                <circle r="16" fill="#fff" stroke="#E9E3D4"/>
                <path d="M-6 0 L-2 4 L6 -5" stroke="#0F6E5C" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
              </g>
              <g className="float-b" transform="translate(230,60)">
                <circle r="14" fill="#fff" stroke="#E9E3D4"/>
                <path d="M-5 0 L-1.5 3.5 L5 -4.5" stroke="#FF7A29" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
              </g>
              <g className="float-c" transform="translate(220,240)">
                <circle r="15" fill="#fff" stroke="#E9E3D4"/>
                <path d="M-5.5 0 L-2 4 L5.5 -5" stroke="#0F6E5C" strokeWidth="2.3" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
              </g>
            </svg>
          </div>

          <div>
            <div className="matters-head">
              <h2>Why these numbers matter</h2>
              <p>Every stat above translates into something concrete for the sellers who build with us.</p>
            </div>
            <div className="check-list">
              {CHECK_ITEMS.map((text, i) => (
                <CheckItem key={text} text={text} index={i} />
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="cta" id="cta">
        <h3>Join the Dropshy community and become part of India's next generation of successful online entrepreneurs.</h3>
        <a className="btn-primary" href="#">
          Get Started
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
            <path d="M3 8H13M13 8L9 4M13 8L9 12" stroke="white" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </a>
      </section>

      <footer>© Dropshy — Built for India's next generation of online entrepreneurs.</footer>
    </div>
  );
}