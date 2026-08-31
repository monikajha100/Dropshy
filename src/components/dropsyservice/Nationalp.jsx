import React, { useEffect, useRef, useState } from "react";
import "./Global.css";
import {
  Globe,
  ShoppingCart,
  TrendingUp,
  CheckCircle2,
  Rocket,
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
    tier: "starter",
    name: "Starter",
    subtitle: "Launch your first global storefront",
    priceLines: ["Starting at", "₹14,999"],
    features: [
      "Store setup on 2 platforms",
      "Product listing & SEO basics",
      "Payment gateway integration",
      "Email support",
    ],
    note: "Best for new sellers",
    icon: <Rocket size={22} />,
    featured: false,
  },
  {
    tier: "growth",
    name: "Growth",
    subtitle: "Scale across multiple marketplaces",
    priceLines: ["Starting at", "₹34,999"],
    features: [
      "Store setup on 5+ platforms",
      "Ad campaigns & catalog optimisation",
      "Inventory & order sync",
      "Dedicated account manager",
      "Priority support",
    ],
    note: "Most sellers choose this",
    icon: <TrendingUp size={22} />,
    featured: true,
  },
  {
    tier: "pro",
    name: "Enterprise",
    subtitle: "Full-service global expansion",
    priceLines: ["Starting at", "₹79,999"],
    features: [
      "Unlimited platform onboarding",
      "Custom logistics & warehousing",
      "Brand protection & compliance",
      "24/7 dedicated support pod",
    ],
    note: "For established brands",
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
              <span>{plan.priceLines[0]}</span>
              <strong>{plan.priceLines[1]}</strong>
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