import { useEffect, useRef } from "react";
import "./whydropsyslider.css";

const TAGS = [
  { title: "Global Business", copy: "Start an export business without buying any stock upfront." },
  { title: "Export Business", copy: "Learn to run exports with no upfront product purchase." },
  { title: "Ecommerce", copy: "Sell online with zero inventory — no stock needed." },
  { title: "Online Export", copy: "Skip the stress of purchasing and delivering yourself." },
];

const REASONS = [
  "Zero investment business model",
  "Zero inventory risk",
  "No warehouse required",
  "No staff hiring",
  "No dead stock loss",
  "Fast pan-India shipping",
  "International shipping support",
  "Complete business training",
  "Dedicated seller support",
  "High-profit margin opportunities",
];

const NODES = [
  { label: "You Sell", note: "Zero stock", active: true },
  { label: "Dropshy Fulfils", note: "No warehouse", active: true },
  { label: "Pan-India", note: "Fast dispatch", active: false },
  { label: "Worldwide", note: "Global reach", active: false },
];

function Tick() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"
      strokeLinecap="round" strokeLinejoin="round" width="12" height="12">
      <polyline points="20 6 9 17 4 12" />
    </svg>
  );
}

export default function DropshyWhyChoose() {
  const rowRefs = useRef([]);

  useEffect(() => {
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("reveal");
            io.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15 }
    );
    rowRefs.current.forEach((el) => el && io.observe(el));
    return () => io.disconnect();
  }, []);

  return (
    <div className="dw-wrap">
      <div className="dw-card">

        {/* HERO */}
        <div className="dw-hero">
          <span className="dw-eyebrow">
            <span className="dw-dot" />
            DROPSHY — INTERNATIONAL SELLER PROGRAM
          </span>

          <h1 className="dw-h1">
            Build a global company <em>without owning a single box.</em>
          </h1>

          <p className="dw-sub">
            Stop dreaming about the business, start running it. Dropshy hands you the playbook,
            the products and the fulfilment — you focus entirely on selling, and keep the margin.
          </p>

          {/* TRADE ROUTE */}
          <div className="dw-route">
            <div className="dw-route-label">Your Supply Chain, Simplified</div>
            <div className="dw-track" />
            <div className="dw-nodes">
              {NODES.map((n) => (
                <div key={n.label} className={`dw-node${n.active ? " active" : ""}`}>
                  <span className="dw-pip" />
                  <strong>{n.label}</strong>
                  {n.note}
                </div>
              ))}
            </div>
          </div>

          {/* TAGS */}
          <div className="dw-tags">
            {TAGS.map((t, i) => (
              <div key={t.title} className="dw-tag" style={{ animationDelay: `${0.3 + i * 0.06}s` }}>
                <h4>{t.title}</h4>
                <p>{t.copy}</p>
              </div>
            ))}
          </div>
        </div>

        {/* LEDGER */}
        <div className="dw-ledger">
          <div className="dw-ledger-head">
            <h2>Why sellers choose Dropshy</h2>
            <span>10 REASONS</span>
          </div>

          <div className="dw-grid">
            {REASONS.map((text, i) => (
              <div
                key={text}
                ref={(el) => (rowRefs.current[i] = el)}
                className="dw-row"
                style={{ animationDelay: `${i * 0.06}s` }}
              >
                <span className="dw-tick"><Tick /></span>
                <p>{text}</p>
              </div>
            ))}
          </div>
        </div>

        {/* CALLOUT */}
        <div className="dw-callout">
          <h3>Smart business. Smarter future.</h3>
          <p className="lead">
            Why invest lakhs in inventory when you can start online with almost no operational risk?
          </p>
          <div className="dw-flow">
            <span className="us">Dropshy handles products, inventory &amp; fulfilment</span>
            <span className="arrow">→</span>
            <span className="you">You focus on selling</span>
            <span className="arrow">→</span>
            <span className="you">You keep the profits</span>
          </div>
        </div>

        {/* FOOTER */}
        <div className="dw-foot">
          <div className="dw-foot-copy">
            <b>Start Today</b> · Sell Across India &amp; Worldwide · Grow Without Limits
          </div>
          <button className="dw-cta">
            Get Started Free
            <svg viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="3"
              strokeLinecap="round" strokeLinejoin="round" width="14" height="14">
              <line x1="5" y1="12" x2="19" y2="12" />
              <polyline points="12 5 19 12 12 19" />
            </svg>
          </button>
        </div>

      </div>
    </div>
  );
}