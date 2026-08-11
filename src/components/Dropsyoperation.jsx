import { useEffect, useRef } from "react";
import "./Dropsyoperation.css";

const HANDLED = [
  "Product Manufacturing",
  "Inventory Management",
  "Professional Packaging",
  "Shipping & Logistics",
  "Order Fulfillment",
  "Shipment Tracking",
  "Dispatch Support",
];

const FOCUS = [
  {
    title: "Marketing",
    copy: "Build campaigns and reach the right audience.",
    icon: <path d="M3 11l18-7-7 18-2-8-9-3z" />,
  },
  {
    title: "Sales",
    copy: "Close deals and drive revenue growth.",
    icon: <path d="M3 17l6-6 4 4 8-8M15 7h6v6" />,
  },
  {
    title: "Your Brand",
    copy: "Shape the story customers fall in love with.",
    icon: <path d="M12 2l2.4 6.9L21 11l-6.6 2.1L12 20l-2.4-6.9L3 11l6.6-2.1L12 2z" />,
  },
];

function Check() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"
      strokeLinecap="round" strokeLinejoin="round" width="12" height="12" className="do-check-svg">
      <polyline points="20 6 9 17 4 12" />
    </svg>
  );
}

export default function DropshyOperations() {
  const itemRefs = useRef([]);
  const cardRef = useRef(null);

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
    itemRefs.current.forEach((el) => el && io.observe(el));
    return () => io.disconnect();
  }, []);

  // subtle mouse-parallax tilt on the card (skipped for touch / reduced-motion)
  useEffect(() => {
    const card = cardRef.current;
    if (!card) return;
    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReduced || window.matchMedia("(pointer: coarse)").matches) return;

    const onMove = (e) => {
      const r = card.getBoundingClientRect();
      const px = (e.clientX - r.left) / r.width - 0.5;
      const py = (e.clientY - r.top) / r.height - 0.5;
      card.style.transform = `rotateX(${(-py * 2.2).toFixed(2)}deg) rotateY(${(px * 2.6).toFixed(2)}deg)`;
    };
    const onLeave = () => { card.style.transform = "rotateX(0deg) rotateY(0deg)"; };

    card.addEventListener("mousemove", onMove);
    card.addEventListener("mouseleave", onLeave);
    return () => {
      card.removeEventListener("mousemove", onMove);
      card.removeEventListener("mouseleave", onLeave);
    };
  }, []);

  return (
    <div className="do-wrap">
      <div className="do-blob do-blob-a" />
      <div className="do-blob do-blob-b" />

      <div className="do-card" ref={cardRef}>

        {/* HEADER */}
        <div className="do-head">
          <span className="do-eyebrow">
            <span className="do-dot" />
            OPERATIONS HANDOFF
          </span>
          <h1 className="do-h1">
            We handle the operations. <em>You focus on growth.</em>
          </h1>
          <p className="do-sub">
            Dropshy manages every operational aspect of your business — end to end —
            so your time goes into building the brand, not running the backend.
          </p>
        </div>

        {/* SPLIT */}
        <div className="do-split">

          {/* LEFT: what Dropshy handles */}
          <div className="do-panel do-panel-left">
            <div className="do-panel-label">
              <span className="do-panel-index">01</span>
              Dropshy Manages
            </div>
            <div className="do-list">
              {HANDLED.map((item, i) => (
                <div
                  key={item}
                  ref={(el) => (itemRefs.current[i] = el)}
                  className="do-item"
                  style={{ animationDelay: `${i * 0.07}s` }}
                >
                  <span className="do-check"><Check /></span>
                  <p>{item}</p>
                </div>
              ))}
            </div>
          </div>

          {/* HANDOFF DIVIDER — animated particle flow */}
          <div className="do-divider" aria-hidden="true">
            <div className="do-divider-line" />
            <span className="do-particle p1" />
            <span className="do-particle p2" />
            <span className="do-particle p3" />
            <div className="do-baton">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4"
                strokeLinecap="round" strokeLinejoin="round" width="18" height="18">
                <line x1="5" y1="12" x2="19" y2="12" />
                <polyline points="13 6 19 12 13 18" />
              </svg>
            </div>
          </div>

          {/* RIGHT: what founder focuses on */}
          <div className="do-panel do-panel-right">
            <div className="do-panel-label right">
              <span className="do-panel-index">02</span>
              You Focus On
            </div>
            <div className="do-focus-list">
              {FOCUS.map((f, i) => (
                <div className="do-focus-item" key={f.title} style={{ animationDelay: `${0.25 + i * 0.1}s` }}>
                  <span className="do-focus-icon">
                    <span className="do-focus-ring" />
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"
                      strokeLinecap="round" strokeLinejoin="round" width="18" height="18">
                      {f.icon}
                    </svg>
                  </span>
                  <div>
                    <h4>{f.title}</h4>
                    <p>{f.copy}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* FOOTER STRIP */}
        <div className="do-foot">
          <p>This allows you to focus on marketing, sales, and growing your brand.</p>
          <button className="do-cta">
            <span className="do-cta-shine" />
            <span className="do-cta-label">
              Start Selling
              <svg viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="3"
                strokeLinecap="round" strokeLinejoin="round" width="14" height="14">
                <line x1="5" y1="12" x2="19" y2="12" />
                <polyline points="12 5 19 12 12 19" />
              </svg>
            </span>
          </button>
        </div>

      </div>
    </div>
  );
}