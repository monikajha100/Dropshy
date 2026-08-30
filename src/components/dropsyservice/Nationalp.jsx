import React, { useEffect, useRef, useState } from "react";
import "./national.css";
import {
  Shield,
  Crown,
  Star,
  CheckCircle2,
  TrendingUp,
  PiggyBank,
  Coins,
  Gift,
  Sparkles,
  ArrowUpRight,
} from "lucide-react";

/* ===================================================
   DATA — swap for your real content / props
   =================================================== */

const platformBar = [
  { name: "Flipkart", cls: "gec-brand-flipkart" },
  { name: "Amazon.in", cls: "gec-brand-amazon" },
  { name: "Meesho", cls: "gec-brand-meesho" },
  { name: "Myntra", cls: "gec-brand-myntra" },
];

const plans = [
  {
    tier: "basic",
    name: "Basic",
    platforms: "Flipkart, Amazon.in, Meesho & Myntra",
    priceLines: ["₹4,999 +18% GST", "= ₹5,900 / per year"],
    features: [
      "250 listing",
      "Photo shoot",
      "Pricing & Margin Setup",
      "Title & subtitles or Full Description",
      "Keywords & Tags",
      "Dispatch Manager",
      "Services Agreement",
    ],
    note: "Top 10 Member Products",
    icon: <Shield size={22} />,
  },
  {
    tier: "advance",
    name: "Advance",
    platforms: "Flipkart, Amazon.in, Meesho and Myntra",
    priceLines: ["₹5,900 x 4 platform", "= ₹23,600 /-"],
    features: [
      "Personal Manager - B form (KYC)",
      "500/-per listing - (100 mix)",
      "Photoshoot",
      "Pricing & Margin Setup",
      "Title & subtitles or Full Description",
      "Keywords & Tags",
      "Dispatch Manager",
      "Services Agreement",
    ],
    note: "Top 5 Member products",
    icon: <Shield size={22} />,
  },
  {
    tier: "royal",
    name: "Royal",
    platforms: "Flipkart, Amazon.in, Meesho and Myntra",
    priceLines: ["₹23,600 + ₹49,999", "= ₹73,599"],
    features: [
      "Personal Manager - B form (Kyc)",
      { text: "Govt Documents - Gst, Msme etc..", highlight: true },
      "500-1000 listing - (100 unique)",
      "Photoshoot",
      "Pricing & Margin Setup",
      "Title & subtitles or Full Description",
      "Keywords & Tags",
      "Dispatch Manager",
      "Legality services Agreement",
    ],
    note: "Top 1 Member Products",
    icon: <Crown size={22} />,
  },
];

const growthPanels = [
  {
    tier: "advance",
    label: "Advance",
    total: "₹23,600",
    lines: [
      "Flipkart, amazon.in, Meesho and Myntra",
      "20 order Months – 20 x ₹700 = ₹14,000/-",
      "₹14,000 x 12 Months = 1,68,000 year",
    ],
    earning: "1-2 lakh",
    icon: <PiggyBank size={30} />,
  },
  {
    tier: "royal",
    label: "Royal",
    total: "₹73,599",
    lines: [
      "Flipkart, amazon.in, Meesho and Myntra",
      "30 order Months – 30 x ₹700 = ₹21,000/-",
      "₹21,000 x 12 Months = 2,52,000 year",
    ],
    earning: "2-3 lakh",
    icon: <Coins size={30} />,
  },
];

/* ===================================================
   Reveal-on-scroll hook
   =================================================== */

function useReveal() {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          obs.disconnect();
        }
      },
      { threshold: 0.15 }
    );
    obs.observe(node);
    return () => obs.disconnect();
  }, []);

  return [ref, visible];
}

/* ===================================================
   MAIN COMPONENT
   =================================================== */

export default function GlobalEcommerce() {
  const [gridRef, gridVisible] = useReveal();
  const [growthRef, growthVisible] = useReveal();

  return (
    <section className="gec-page">
      <div className="gec-blob-c" aria-hidden="true" />

      {/* ---------------- TOP BAR ---------------- */}
      <div className="gec-topbar">
        <div className="gec-topbar-logos">
          {platformBar.map((p) => (
            <span key={p.name} className={`gec-brand ${p.cls}`}>
              {p.name}
            </span>
          ))}
        </div>
        <button className="gec-buy-btn">Buy now</button>
      </div>

      {/* ---------------- PLAN CARDS ---------------- */}
      <div ref={gridRef} className={`gec-grid ${gridVisible ? "gec-visible" : ""}`}>
        {plans.map((plan) => (
          <div className={`gec-card gec-${plan.tier}`} key={plan.tier}>
            <div className="gec-shield-wrap">
              <div className="gec-shield">
                <span className="gec-shield-shine" />
                {plan.icon}
              </div>
            </div>

            <div className="gec-card-head">
              <h3 className="gec-name">{plan.name}</h3>
              <p className="gec-platforms">{plan.platforms}</p>
            </div>

            <div className="gec-price-block">
              <span className="gec-price-line">{plan.priceLines[0]}</span>
              <strong className="gec-price-total">{plan.priceLines[1]}</strong>
            </div>

            <ul className="gec-features">
              {plan.features.map((feature, i) => {
                const isObj = typeof feature === "object";
                return (
                  <li key={i} className={isObj && feature.highlight ? "gec-feature-alert" : ""}>
                    <CheckCircle2 size={15} className="gec-check" />
                    <span>{isObj ? feature.text : feature}</span>
                  </li>
                );
              })}
            </ul>

            <div className="gec-note-ribbon">
              <span>Note - {plan.note}</span>
            </div>
          </div>
        ))}
      </div>

      {/* ---------------- GROWTH PANEL ---------------- */}
      <div ref={growthRef} className={`gec-growth-panel ${growthVisible ? "gec-visible" : ""}`}>
        <svg className="gec-growth-links" viewBox="0 0 1000 260" preserveAspectRatio="none">
          <path className="gec-link-path" d="M230,200 Q400,120 480,130" />
          <path className="gec-link-path" d="M770,200 Q600,120 520,130" />
        </svg>

        {growthPanels.map((panel) => (
          <div className={`gec-growth-card gec-growth-${panel.tier}`} key={panel.tier}>
            <div className="gec-growth-head">
              <span className="gec-growth-label">{panel.label} :- ( {panel.total} )</span>
            </div>

            <ul className="gec-growth-lines">
              {panel.lines.map((line, i) => (
                <li key={i}>
                  <TrendingUp size={13} className="gec-growth-arrow" />
                  {line}
                </li>
              ))}
            </ul>

            <div className="gec-growth-earning">
              {panel.icon}
              <span>
                Earning up to <strong>{panel.earning}</strong> / 1 year
              </span>
            </div>
          </div>
        ))}

        <div className="gec-growth-center">
          <div className="gec-growth-badge">
            <Sparkles size={20} className="gec-badge-star gec-badge-star-a" />
            <Sparkles size={14} className="gec-badge-star gec-badge-star-b" />
            <TrendingUp size={26} />
            <span className="gec-growth-badge-title">Grow your business</span>
            <span className="gec-growth-badge-sub">Earn more</span>
          </div>
        </div>

        <Gift className="gec-float-icon gec-float-1" size={30} />
        <PiggyBank className="gec-float-icon gec-float-2" size={26} />
        <Coins className="gec-float-icon gec-float-3" size={28} />
        <ArrowUpRight className="gec-float-icon gec-float-4" size={24} />
      </div>
    </section>
  );
}