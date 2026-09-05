import React, { useEffect, useRef, useState } from "react";
import "./Web.css";

import {
  CheckCircle2,
  Rocket,
  Gem,
  Crown,
  Globe,
} from "lucide-react";

/* ===================================================
   PLANS
=================================================== */

const plans = [
  {
    tier: "basic",
    name: "BASIC",
    subtitle: "Perfect for New Entrepreneurs",
    price: "₹5,900 per platform" ,
   

    icon: <Rocket size={28} />,

    features: [
      "Domain & Hosting/Server - 1 Year",
      "Professional E-commerce Website",
      "Website Design & Development",
      "Responsive Mobile-Friendly Design",
      "Up to 200 Product Listings",
      "Up to 200 Product Photography / Model Shoot",
      "Product Titles, Keywords & Tags",
      "Product Description / Content",
      "3 Website Banners",
      "Product Categories Setup",
      "Contact Us / About Us / FAQ Pages",
      "WhatsApp Integration",
      "Payment Gateway Integration",
      "Admin or Order Panel Training",
    ],

    bottomText: "Perfect for New Entrepreneurs",

    featured: false,
  },

  {
    tier: "advance",
    name: "ADVANCE",
    subtitle: "Ideal for Growing Businesses",
    price: "₹11,800 per platform" ,
    

    icon: <Gem size={29} />,

    features: [
      "Domain & Hosting/Server - 1 Year",
      "Professional E-Commerce Website",
      "Custom Website Design & Development",
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
      "Social Media Management - 2 Months",
      "Admin, Order or Shipping Panel Training",
    ],

    bottomText: "Ideal for Growing Businesses",

    featured: true,
  },

  {
    tier: "royal",
    name: "ROYAL",
    subtitle: "Best for Scaling Your Business",
    price: "₹23,600 per platform" ,
    

    icon: <Crown size={29} />,

    features: [
      "Domain & Hosting/Server - 1 Year",
      "Professional Business Email",
      "Premium E-Commerce Website",
      "Custom UI/UX Design & Development",
      "Responsive Mobile-Friendly Website",
      "Up to 1000 Product Listings",
      "Up to 1000 Product Photography / Model Shoot",
      "Product Titles, Keywords, Tags & Content",
      "10 Premium Banners",
      "Professional Logo & Brand Identity",
      "WhatsApp Integration",
      "Payment Gateway - National + International",
      "SEO-Friendly Website Structure",
      "Social Media Integration",
      "Social Media Management - 6 Months",
      "All Admin Panel Training",
      "Order Management Training",
    ],

    bottomText: "Best for Scaling Your Business",

    featured: false,
  },
];


/* ===================================================
   SMALL REVEAL HOOK
=================================================== */

function useReveal() {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const node = ref.current;

    if (!node) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      {
        threshold: 0.12,
      }
    );

    observer.observe(node);

    return () => observer.disconnect();
  }, []);

  return [ref, visible];
}


/* ===================================================
   MAIN COMPONENT
=================================================== */

export default function GlobalEcommerce() {
  const [gridRef, gridVisible] = useReveal();

  return (
    <section className="gec-page">

      {/* ===================================================
          BACKGROUND ROUTES
      =================================================== */}

      <svg
        className="gec-bg-routes"
        viewBox="0 0 1200 1600"
        preserveAspectRatio="none"
      >
        <path
          className="gec-route-line"
          d="M60,120 Q300,40 520,180 T980,140"
        />

        <path
          className="gec-route-line gold"
          d="M40,340 Q320,260 560,420 T1020,380"
        />

        <path
          className="gec-route-line"
          d="M80,620 Q340,540 600,700 T1050,660"
        />

        <path
          className="gec-route-line gold"
          d="M50,900 Q330,820 580,980 T1040,940"
        />

        <path
          className="gec-route-line"
          d="M70,1180 Q320,1100 570,1260 T1000,1220"
        />

        <path
          className="gec-route-line gold"
          d="M60,1440 Q310,1360 560,1500 T980,1460"
        />

        {/* Nodes */}

        <circle
          className="gec-node"
          cx="60"
          cy="120"
          r="4"
        />

        <circle
          className="gec-node-pulse"
          cx="60"
          cy="120"
          r="4"
        />

        <circle
          className="gec-node"
          cx="520"
          cy="180"
          r="4"
        />

        <circle
          className="gec-node-pulse"
          cx="520"
          cy="180"
          r="4"
        />

        <circle
          className="gec-node"
          cx="980"
          cy="140"
          r="4"
        />

        <circle
          className="gec-node-pulse"
          cx="980"
          cy="140"
          r="4"
        />

        <circle
          className="gec-node"
          cx="560"
          cy="420"
          r="4"
        />

        <circle
          className="gec-node-pulse"
          cx="560"
          cy="420"
          r="4"
        />

        <circle
          className="gec-node"
          cx="1020"
          cy="380"
          r="4"
        />

        <circle
          className="gec-node-pulse"
          cx="1020"
          cy="380"
          r="4"
        />

        <circle
          className="gec-node"
          cx="600"
          cy="700"
          r="4"
        />

        <circle
          className="gec-node-pulse"
          cx="600"
          cy="700"
          r="4"
        />

        <circle
          className="gec-node"
          cx="1050"
          cy="660"
          r="4"
        />

        <circle
          className="gec-node-pulse"
          cx="1050"
          cy="660"
          r="4"
        />

        <circle
          className="gec-node"
          cx="580"
          cy="980"
          r="4"
        />

        <circle
          className="gec-node-pulse"
          cx="580"
          cy="980"
          r="4"
        />

        <circle
          className="gec-node"
          cx="570"
          cy="1260"
          r="4"
        />

        <circle
          className="gec-node-pulse"
          cx="570"
          cy="1260"
          r="4"
        />

        <circle
          className="gec-node"
          cx="560"
          cy="1500"
          r="4"
        />

        <circle
          className="gec-node-pulse"
          cx="560"
          cy="1500"
          r="4"
        />
      </svg>


      {/* ===================================================
          PRICING CARDS
      =================================================== */}

      <div
        ref={gridRef}
        className={`gec-grid ${
          gridVisible ? "gec-visible" : ""
        }`}
      >

        {plans.map((plan) => (

          <div
            className={`gec-card gec-${plan.tier} ${
              plan.featured ? "gec-featured" : ""
            }`}
            key={plan.tier}
          >

            {/* ==========================================
                TOP ICON
            ========================================== */}

            <div className="gec-badge">
              {plan.icon}
            </div>


            {/* ==========================================
                PLAN NAME
            ========================================== */}

            <h3 className="gec-name">
              {plan.name}
            </h3>


            {/* ==========================================
                PRICE
            ========================================== */}

            <div className="gec-price">

              <strong>
                {plan.price}
              </strong>

            </div>


            {/* GST */}
            <div className="gec-gst">
              {plan.gst}
            </div>


            {/* ==========================================
                FEATURES
            ========================================== */}

            <ul className="gec-features">

              {plan.features.map(
                (feature, index) => (

                  <li key={index}>

                    <CheckCircle2
                      size={15}
                      className="gec-check"
                    />

                    <span>
                      {feature}
                    </span>

                  </li>

                )
              )}

            </ul>


            {/* ==========================================
                BOTTOM LABEL
            ========================================== */}

            <div className="gec-note">

              <CheckCircle2
                size={17}
              />

              <span>
                {plan.bottomText}
              </span>

            </div>


            {/* ==========================================
                ENROLL BUTTON
            ========================================== */}

            <a
              href="https://wa.me/918873768436"
              target="_blank"
              rel="noopener noreferrer"
              className="gec-register-btn"
              aria-label={`Enroll for ${plan.name} plan`}
            >

              <span>
                Enroll Now
              </span>

              <span className="gec-register-arrow">
                →
              </span>

            </a>

          </div>

        ))}

      </div>


      {/* ===================================================
          SIMPLE GLOBAL SECTION
      =================================================== */}

     

    </section>
  );
}