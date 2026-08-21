import React, { useEffect, useRef, useState } from "react";
import {
  UserPlus,
  Headphones,
  Settings,
  Package,
  ShoppingCart,
  Truck,
  TrendingUp,
  ArrowRight,
  Sparkles,
} from "lucide-react";

import "./Product.css";
//import procedureImage from "../../assets/images/procedue.png";

const PROCEDURE_STEPS = [
  {
    number: "01",
    title: "Get Started",
    subtitle: "Choose Your Plan & Enroll with DROPSHY",
    description:
      "Complete your registration and select the e-commerce business model that best fits your goals.",
    icon: UserPlus,
  },
  {
    number: "02",
    title: "Dedicated Support",
    subtitle: "Your Support Manager Will Assist You",
    description:
      "A dedicated support manager will guide you through the setup process, documentation, platform requirements, and next steps.",
    icon: Headphones,
  },
  {
    number: "03",
    title: "Account Setup",
    subtitle: "Create Your E-commerce Accounts",
    description:
      "Our team assists with setting up your seller accounts on the selected national and international e-commerce platforms.",
    icon: Settings,
  },
  {
    number: "04",
    title: "Product Listing",
    subtitle: "Products Are Listed & Optimized",
    description:
      "Our team helps with product selection, titles, descriptions, keywords, images, pricing, and other listing requirements.",
    icon: Package,
  },
  {
    number: "05",
    title: "Receive Your Order",
    subtitle: "Customer Places an Order",
    description:
      "Once your product receives an order, the order details are processed through the e-commerce workflow.",
    icon: ShoppingCart,
  },
  {
    number: "06",
    title: "Fulfillment & Dispatch",
    subtitle: "We Process & Dispatch the Order",
    description:
      "The order is prepared and dispatched through the applicable fulfillment/warehouse process, helping you manage the operational side of your business.",
    icon: Truck,
  },
  {
    number: "07",
    title: "Track & Grow",
    subtitle: "Focus on Sales & Business Growth",
    description:
      "Track your orders, improve your listings, promote your products, and continuously grow your e-commerce business with DROPSHY support.",
    icon: TrendingUp,
  },
];

export default function OurProcedure() {
  const sectionRef = useRef(null);
  const railRef = useRef(null);
  const [progress, setProgress] = useState(0);
  const reduceMotionRef = useRef(false);

  // ---- Scroll-linked "route progress" (the traveling truck marker) ----
  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    reduceMotionRef.current = mq.matches;

    let ticking = false;

    const computeProgress = () => {
      ticking = false;
      const rail = railRef.current;
      if (!rail) return;
      const rect = rail.getBoundingClientRect();
      const viewportH = window.innerHeight || document.documentElement.clientHeight;

      // 0 when rail top hits ~80% of viewport, 1 when rail bottom hits ~30% of viewport
      const start = viewportH * 0.85;
      const end = viewportH * 0.25;
      const total = rect.height + (start - end);
      const traveled = start - rect.top;
      const pct = Math.min(1, Math.max(0, traveled / total));
      setProgress(pct);
    };

    const onScroll = () => {
      if (!ticking) {
        ticking = true;
        window.requestAnimationFrame(computeProgress);
      }
    };

    computeProgress();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  // ---- Reveal-on-scroll for headings, cards, CTA ----
  useEffect(() => {
    const targets = sectionRef.current
      ? sectionRef.current.querySelectorAll(".procedure-reveal")
      : [];

    if (reduceMotionRef.current || typeof IntersectionObserver === "undefined") {
      targets.forEach((el) => el.classList.add("is-visible"));
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.18, rootMargin: "0px 0px -8% 0px" }
    );

    targets.forEach((el, i) => {
      el.style.setProperty("--reveal-delay", `${Math.min(i, 6) * 90}ms`);
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const progressPercent = Math.round(progress * 100);

  return (
    <section className="procedure-section" ref={sectionRef}>
      {/* Ambient background */}
      <div className="procedure-bg procedure-bg-one"></div>
      <div className="procedure-bg procedure-bg-two"></div>
      <div className="procedure-grid-overlay"></div>

      <div className="procedure-container">
        {/* ================= HEADING ================= */}
        <div className="procedure-heading procedure-reveal">
          <span className="procedure-badge">
            <span className="badge-dot"></span>
            HOW IT WORKS
          </span>

          <h2>
            The DROPSHY <span>Route</span>
          </h2>

          <p>
            From enrollment to a delivered parcel — every stop on the way your
            products travel from idea to income.
          </p>
        </div>

        {/* ================= FLOATING IMAGE ================= */}
        {/* <div className="procedure-floating-image procedure-reveal">
          <img src={procedureImage} alt="DROPSHY E-commerce" />
          <div className="floating-sparkle sparkle-one">
            <Sparkles size={13} />
          </div>
          <div className="floating-sparkle sparkle-two">
            <Sparkles size={11} />
          </div>
        </div> */}

        {/* ================= ROUTE / TIMELINE ================= */}
        <div className="procedure-timeline" ref={railRef}>
          {/* Track + progress fill */}
          <div className="timeline-line">
            <div
              className="timeline-progress"
              style={{ height: `${progressPercent}%` }}
            ></div>
          </div>

          {/* Traveling marker */}
          <div
            className="route-marker"
            style={{ top: `${progressPercent}%` }}
            aria-hidden="true"
          >
            <span className="route-marker-pulse"></span>
            <Truck size={16} strokeWidth={2.4} />
          </div>

          {PROCEDURE_STEPS.map((step, index) => {
            const Icon = step.icon;
            const isLeft = index % 2 === 0;

            return (
              <div
                className={`procedure-row procedure-reveal ${
                  isLeft ? "row-left" : "row-right"
                }`}
                key={step.number}
              >
                {/* CARD */}
                <div className="procedure-card-wrapper">
                  <div className="procedure-card">
                    <div className="card-top">
                      <div className="procedure-icon">
                        <Icon size={24} strokeWidth={2} />
                      </div>
                      <span className="big-number">{step.number}</span>
                    </div>

                    <span className="waypoint-code">WP-{step.number}</span>

                    <h3>{step.title}</h3>
                    <h4>{step.subtitle}</h4>
                    <p>{step.description}</p>

                    <div className="step-label">
                      <span>Step {step.number}</span>
                      <ArrowRight size={16} />
                    </div>

                    <div className="card-shine"></div>
                  </div>
                </div>

                {/* CENTER WAYPOINT NODE */}
                <div className="timeline-number">
                  {step.number}
                  <span className="timeline-ring"></span>
                </div>

                <div className="timeline-spacer"></div>
              </div>
            );
          })}
        </div>

        {/* ================= CTA ================= */}
        <div className="procedure-cta procedure-reveal">
          <div className="cta-decoration"></div>

          <h3>
            From Setup to Sales,
            <span> We Support Your Journey.</span>
          </h3>

          <p>
            Build, launch and grow your e-commerce business with DROPSHY's
            dedicated support and end-to-end assistance.
          </p>

          <button>
            Get Started
            <ArrowRight size={18} />
          </button>
        </div>
      </div>
    </section>
  );
}