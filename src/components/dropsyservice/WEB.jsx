import React, { useEffect, useRef, useState } from "react";
import "./Web.css";
import {
  Globe,
  ShoppingCart,
  TrendingUp,
  CheckCircle2,
  Rocket,
  Gem,
  Crown,
  Shield,
  Award,
  Users,
  Sparkles,
} from "lucide-react";

/* ===================================================
   DATA — swap these for your real content / props
   =================================================== */

const platforms = [
  "Amazon",
  "eBay",
  "Etsy",
  "Walmart",
  "Shopify",
  "Flipkart",
  "AliExpress",
  "Noon",
];

const plans = [
  {
    tier: "basic",
    name: "BASIC",
    subtitle: "Launch your first global storefront",
    price: "₹5,900",
    priceNote: "₹5,000 + 18% GST = ₹5,900/-",
    features: [
      "Domain & Hosting/Server – 1 Year",
      "Professional E-commerce Website",
      "Website Design & Development",
      "Responsive Mobile-Friendly Design",
      "Up to 200 Product Listings",
      "Up to 200 Product Photography / Mood Shoot",
      "Product Titles, Keywords & Tags",
      "Product Description / Content",
      "3 Website Banners",
      "Product Categories Setup",
      "Contact Us / About Us / FAQ Pages",
      "WhatsApp Integration",
      "Payment Gateway Integration",
      "Admin or Order Panel Training",
    ],
    note: "Perfect for New Entrepreneurs",
    icon: <Rocket size={22} />,
    featured: false,
  },
  {
    tier: "advance",
    name: "ADVANCE",
    subtitle: "Scale across multiple marketplaces",
    price: "₹11,800",
    priceNote: "₹10,000 + 18% GST = ₹11,800/-",
    features: [
      "Domain & Hosting/Server – 1 Year",
      "Professional E-commerce Website",
      "Responsive Mobile-Friendly Design",
      "Up to 500 Product Listings",
      "Up to 500 Product Photography / Model Shoot",
      "Product Titles, Keywords & Tags",
      "SEO-Friendly Product Content",
      "6 Premium Banners",
      "Professional Logo Design",
      "WhatsApp Integration",
      "Payment Gateway Integration",
      "Social Media Integration",
      "Social Media Management – 2 Months",
      "Admin, Order or Shipping Panel Training",
    ],
    note: "Ideal for Growing Businesses",
    icon: <Gem size={22} />,
    featured: true,
  },
  {
    tier: "royal",
    name: "ROYAL",
    subtitle: "Full-service global expansion",
    price: "₹23,600",
    priceNote: "₹20,000 + 18% GST = ₹23,600/-",
    features: [
      "Domain & Hosting/Server – 1 Year",
      "Professional E-commerce Website",
      "Premium E-commerce Website",
      "Custom UI/UX Design & Development",
      "Responsive Mobile-Friendly Design",
      "Up to 1000 Product Listings",
      "Up to 1000 Product Photography / Model Shoot",
      "Product Titles, Tags, Keywords & Content",
      "10 Premium Banners",
      "Professional Logo & Brand Identity",
      "WhatsApp Integration",
      "Payment Gateway Integration – National + International",
      "SEO-Friendly Website Structure",
      "Social Media Integration",
      "Social Media Management – 6 Months",
      "All Admin Panel Training",
      "Order Management Training",
    ],
    note: "Best for Scaling Your Business",
    icon: <Crown size={22} />,
    featured: false,
  },
];

const growthStats = [
  {
    tier: "Starter sellers",
    totalPlatforms: 3,
    growthScore: 65,
    lines: [
      "Listing setup on 3 major platforms",
      "Basic catalog & pricing optimisation",
      "Monthly performance report",
    ],
    earning: "₹5L",
  },
  {
    tier: "Growth sellers",
    totalPlatforms: 6,
    growthScore: 88,
    lines: [
      "Multi-platform inventory sync",
      "Ad campaigns & SEO optimisation",
      "Dedicated account manager",
    ],
    earning: "₹18L",
  },
];

const trustBadges = [
  { icon: <Shield size={20} />, label: "Secure payments" },
  { icon: <Globe size={20} />, label: "190+ countries" },
  { icon: <Award size={20} />, label: "ISO certified" },
  { icon: <Users size={20} />, label: "10,000+ sellers" },
];

/* ===================================================
   Small reveal-on-scroll hook
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

function CountUp({ target, duration = 1400, visible, suffix = "" }) {
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (!visible) return;
    let start = null;
    let raf;
    const step = (ts) => {
      if (start === null) start = ts;
      const progress = Math.min((ts - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setValue(Math.round(eased * target));
      if (progress < 1) raf = requestAnimationFrame(step);
    };
    raf = requestAnimationFrame(step);
    return () => cancelAnimationFrame(raf);
  }, [visible, target, duration]);

  return (
    <>
      {value}
      {suffix}
    </>
  );
}

/* ===================================================
   MAIN COMPONENT
   =================================================== */

export default function GlobalEcommerce() {
  const [gridRef, gridVisible] = useReveal();
  const [growthRef, growthVisible] = useReveal();
  const [trustRef, trustVisible] = useReveal();

  return (
    <section className="gec-page">

      {/* ---------------- AMBIENT BACKGROUND (sits behind every card) ---------------- */}
      <svg className="gec-bg-routes" viewBox="0 0 1200 1600" preserveAspectRatio="none">
        <path className="gec-route-line" d="M60,120 Q300,40 520,180 T980,140" />
        <path className="gec-route-line gold" d="M40,340 Q320,260 560,420 T1020,380" />
        <path className="gec-route-line" d="M80,620 Q340,540 600,700 T1050,660" />
        <path className="gec-route-line gold" d="M50,900 Q330,820 580,980 T1040,940" />
        <path className="gec-route-line" d="M70,1180 Q320,1100 570,1260 T1000,1220" />
        <path className="gec-route-line gold" d="M60,1440 Q310,1360 560,1500 T980,1460" />

        <circle className="gec-node" cx="60" cy="120" r="4" />
        <circle className="gec-node-pulse" cx="60" cy="120" r="4" />
        <circle className="gec-node" cx="520" cy="180" r="4" />
        <circle className="gec-node-pulse" cx="520" cy="180" r="4" />
        <circle className="gec-node" cx="980" cy="140" r="4" />
        <circle className="gec-node-pulse" cx="980" cy="140" r="4" />

        <circle className="gec-node" cx="560" cy="420" r="4" />
        <circle className="gec-node-pulse" cx="560" cy="420" r="4" />
        <circle className="gec-node" cx="1020" cy="380" r="4" />
        <circle className="gec-node-pulse" cx="1020" cy="380" r="4" />

        <circle className="gec-node" cx="600" cy="700" r="4" />
        <circle className="gec-node-pulse" cx="600" cy="700" r="4" />
        <circle className="gec-node" cx="1050" cy="660" r="4" />
        <circle className="gec-node-pulse" cx="1050" cy="660" r="4" />

        <circle className="gec-node" cx="580" cy="980" r="4" />
        <circle className="gec-node-pulse" cx="580" cy="980" r="4" />
        <circle className="gec-node" cx="570" cy="1260" r="4" />
        <circle className="gec-node-pulse" cx="570" cy="1260" r="4" />
        <circle className="gec-node" cx="560" cy="1500" r="4" />
        <circle className="gec-node-pulse" cx="560" cy="1500" r="4" />
      </svg>

      {/* ---------------- HERO ---------------- */}
      <div className="gec-hero">
        <svg className="gec-routes" viewBox="0 0 900 260" preserveAspectRatio="none">
          <path className="gec-route-line" d="M60,210 Q280,40 450,110 T820,60" />
          <path className="gec-route-line gold" d="M40,90 Q260,220 470,150 T860,190" />
          <circle className="gec-node" cx="60" cy="210" r="5" />
          <circle className="gec-node-pulse" cx="60" cy="210" r="5" />
          <circle className="gec-node" cx="450" cy="110" r="5" />
          <circle className="gec-node-pulse" cx="450" cy="110" r="5" />
          <circle className="gec-node" cx="820" cy="60" r="5" />
          <circle className="gec-node-pulse" cx="820" cy="60" r="5" />
        </svg>

        <div className="gec-hero-inner">
          <div className="gec-hero-icons">
            <Globe size={28} />
            <ShoppingCart size={26} />
          </div>

          <span className="gec-hero-eyebrow">Global</span>
          <h1 className="gec-hero-title">E-commerce Business</h1>
          <span className="gec-hero-eyebrow">Sell worldwide, grow big</span>

          <p className="gec-hero-sub">
            List, sell, and ship across the world's biggest marketplaces —
            we handle setup, ads, and logistics so you focus on your brand
            and generating sales instead of managing inventory.
          </p>

          <div className="gec-platform-strip">
            <div className="gec-platform-track">
              {[...platforms, ...platforms].map((p, i) => (
                <span className="gec-platform-chip" key={p + i}>
                  {p}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* ---------------- PLAN CARDS ---------------- */}
      <div ref={gridRef} className={`gec-grid ${gridVisible ? "gec-visible" : ""}`}>
        {plans.map((plan) => (
          <div
            className={`gec-card gec-${plan.tier} ${plan.featured ? "gec-featured" : ""}`}
            key={plan.tier}
          >
            {plan.featured && (
              <span className="gec-featured-tag">
                <Sparkles size={12} /> Most popular
              </span>
            )}

            <div className="gec-badge">{plan.icon}</div>
            <h3 className="gec-name">{plan.name}</h3>
            <p className="gec-subtitle">{plan.subtitle}</p>

            <div className="gec-price">
              <div className="gec-price-row">
                <span>Starting at</span>
                <strong>{plan.price}</strong>
              </div>
              <div className="gec-price-note">{plan.priceNote}</div>
            </div>

            <ul className="gec-features">
              {plan.features.map((feature) => (
                <li key={feature}>
                  <CheckCircle2 size={16} className="gec-check" />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>

            <div className="gec-note">{plan.note}</div>
          </div>
        ))}
      </div>

      {/* ---------------- GROWTH PANEL ---------------- */}
      <div ref={growthRef} className={`gec-growth-panel ${growthVisible ? "gec-visible" : ""}`}>
        {growthStats.map((stat, index) => (
          <React.Fragment key={stat.tier}>
            <div className="gec-growth-card">
              <div className="gec-growth-head">
                <span>{stat.tier}</span>
                <strong>
                  <CountUp target={stat.totalPlatforms} visible={growthVisible} /> platforms
                </strong>
              </div>

              <div className="gec-growth-bar-track">
                <div
                  className="gec-growth-bar-fill"
                  style={{ width: growthVisible ? `${stat.growthScore}%` : "0%" }}
                />
              </div>

              <ul className="gec-growth-lines">
                {stat.lines.map((line, lineIndex) => (
                  <li key={lineIndex}>
                    <span className="gec-growth-arrow">›</span>
                    {line}
                  </li>
                ))}
              </ul>

              <div className="gec-growth-earning">
                Earning up to <strong>{stat.earning}</strong> / year
              </div>
            </div>

            {index === 0 && (
              <div className="gec-growth-center">
                <Globe className="gec-growth-globe" size={28} />
              </div>
            )}
          </React.Fragment>
        ))}
      </div>

      {/* ---------------- TRUST ROW ---------------- */}
      <div ref={trustRef} className={`gec-trust-row ${trustVisible ? "gec-visible" : ""}`}>
        {trustBadges.map((badge) => (
          <div className="gec-trust-item" key={badge.label}>
            <div className="gec-trust-icon">{badge.icon}</div>
            <span>{badge.label}</span>
          </div>
        ))}
      </div>
    </section>
  );
}