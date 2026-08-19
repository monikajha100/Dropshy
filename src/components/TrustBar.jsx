import React from "react";
import './TrustBar.css'
import platformPreview from "../assets/images/platform-preview.jpg";

const pillars = [
  {
    icon: "💰",
    title: "Zero Inventory Risk",
    tagline: "Sell First. Source Later.",
    points: [
      "No upfront inventory investment",
      "No money blocked in stock",
      "No unsold inventory",
      "Better cash flow",
      "Focus entirely on growing sales",
    ],
  },
  {
    icon: "🏠",
    title: "No Warehouse Needed",
    tagline: "We Store. You Grow.",
    points: [
      "₹0 Warehouse Rent",
      "₹0 Storage Costs",
      "No Inventory Management",
      "Fast Pan-India Shipping",
      "International Shipping Support",
    ],
  },
  {
    icon: "🤝",
    title: "No Staff Management",
    tagline: "Run Your Business — Not a Team.",
    points: [
      "Product Picking",
      "Quality Inspection",
      "Professional Packaging",
      "Shipping",
      "Order Processing",
      "Delivery Coordination",
    ],
  },
  {
    icon: "🔥",
    title: "Zero Dead Stock Risk",
    tagline: "Sell What's Trending.",
    points: [
      "Zero Dead Stock Risk",
      "No Loss from Unsold Products",
      "No Storage Expenses",
      "Trending Products",
    ],
  },
];

export default function TrustBar() {
  return (
    <section className="dropshy-section">

      {/* HERO */}
      <div className="dropshy-hero">

        <div className="dropshy-hero-content">

          <div className="dropshy-badge">
            <span>🚀</span>
            Start Your Business With ₹0 Investment
          </div>

          <h1>
            Start Your Business with{" "}
            <span>₹0 Investment</span>
          </h1>

          <p className="dropshy-subtitle">
            Launch your own e-commerce business without inventory,
            warehouses, or staff. Dropshy manages products, packing,
            and shipping — so you can focus on selling and earning profits.
          </p>

          <div className="dropshy-highlights">
            <div>
              <span>🚀</span>
              Zero Investment
            </div>

            <div>
              <span>📦</span>
              Zero Inventory
            </div>

            <div>
              <span>🌍</span>
              India & Worldwide
            </div>
          </div>

          <div className="dropshy-buttons">
            <a href="#benefits" className="dropshy-btn-primary">
              Start Selling
              <span>→</span>
            </a>

            <a href="#how-it-works" className="dropshy-btn-secondary">
              See How It Works
            </a>
          </div>

        </div>

        {/* IMAGE */}
        <div className="dropshy-hero-image">

          <div className="image-glow"></div>

          <div className="image-card">
            <img
              src={platformPreview}
              alt="Dropshy e-commerce platform"
            />

            <div className="floating-card order-card">
              <div className="floating-icon">✓</div>

              <div>
                <small>Order Processed</small>
                <strong>+ ₹12,450 Profit</strong>
              </div>
            </div>

            <div className="floating-card growth-card">
              <div className="growth-icon">↗</div>

              <div>
                <small>Business Growth</small>
                <strong>+ 38.6%</strong>
              </div>
            </div>
          </div>

        </div>

      </div>


      {/* INTRO */}
      <div className="dropshy-intro" id="how-it-works">

        <div className="intro-number">01</div>

        <div>
          <h2>
            Traditional Business
            <span> vs Dropshy</span>
          </h2>

          <p>
            Starting a traditional business often requires an investment
            of ₹5–10 lakhs for inventory, warehouse space, staff and
            logistics. With <strong>Dropshy</strong>, you can launch
            your own online business with Zero Investment.
          </p>
        </div>

      </div>


      {/* COMPARISON */}
      <div className="comparison-wrapper">

        <div className="comparison-card traditional">

          <div className="comparison-heading">
            <span>✕</span>
            <div>
              <small>Traditional Model</small>
              <h3>High Investment</h3>
            </div>
          </div>

          <ul>
            <li>₹5–10 Lakhs Inventory Cost</li>
            <li>Monthly Warehouse Rent</li>
            <li>Staff Management & Payroll</li>
            <li>High Dead Stock Risk</li>
            <li>Money Blocked in Inventory</li>
          </ul>

        </div>


        <div className="comparison-card dropshy-way">

          <div className="comparison-heading">
            <span>✓</span>
            <div>
              <small>Dropshy Model</small>
              <h3>₹0 Investment</h3>
            </div>
          </div>

          <ul>
            <li>₹0 Initial Investment</li>
            <li>₹0 Warehouse Rent</li>
            <li>Operations Team Included</li>
            <li>Zero Dead Stock Risk</li>
            <li>Sell First. Source Later.</li>
          </ul>

        </div>

      </div>


      {/* BENEFITS */}
      <div className="benefits-section" id="benefits">

        <div className="benefits-heading">

          <span>WHY DROPSHY?</span>

          <h2>
            Build Your Business.
            <strong> Leave the Operations to Us.</strong>
          </h2>

          <p>
            You generate the orders — we handle the rest.
          </p>

        </div>


        <div className="benefits-grid">

          {pillars.map((pillar, index) => (

            <div
              className="benefit-card"
              key={pillar.title}
              style={{ "--delay": `${index * 0.1}s` }}
            >

              <div className="benefit-top">

                <div className="benefit-icon">
                  {pillar.icon}
                </div>

                <span className="benefit-number">
                  0{index + 1}
                </span>

              </div>

              <h3>{pillar.title}</h3>

              <p className="benefit-tagline">
                {pillar.tagline}
              </p>

              <div className="benefit-line"></div>

              <ul>
                {pillar.points.map((point) => (
                  <li key={point}>
                    <span>✓</span>
                    {point}
                  </li>
                ))}
              </ul>

              <div className="card-arrow">
                →
              </div>

            </div>

          ))}

        </div>

      </div>


      {/* FINAL CTA */}
      <div className="dropshy-final">

        <div className="final-glow"></div>

        <span className="final-badge">
          🚀 READY TO START?
        </span>

        <h2>
          Your Business.
          <br />
          <span>Our Operations.</span>
        </h2>

        <p>
          Sell across India and worldwide. We manage products,
          packing and shipping while you focus on sales and profits.
        </p>

        <button>
          Start Selling Today
          <span>→</span>
        </button>

        <small>
          No inventory • No warehouse • No staff
        </small>

      </div>

    </section>
  );
}