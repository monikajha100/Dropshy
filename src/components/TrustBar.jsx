import React from "react";
import "./TrustBar.css";


import platformPreview from "../assets/images/platform-preview.jpg";
import noInventory from "../assets/images/invester.webp";
import noWarehouse from "../assets/images/wirehouse.webp";
import noManpower from "../assets/images/manpower.webp";
import zeroLoss from "../assets/images/OIP.jpg";

const pillars = [
  {
    image: noInventory,
    title: "Zero Inventory Risk",
    text: "Traditional businesses may require ₹5–10 Lakhs in inventory. With Dropshy, you don't buy the product until the customer pays you.",
  },
  {
    image: noWarehouse,
    title: "No Warehouse Needed",
    text: "We store the products in our high-tech facilities. You save 100% on warehouse rent and maintenance.",
  },
  {
    image: noManpower,
    title: "No Staff Management",
    text: "From picking and packing to shipping—our team handles everything. You work from your phone.",
  },
  {
    image: zeroLoss,
    title: "Zero Loss Guarantee",
    text: "Since you don't buy bulk stock, there is no Dead Stock. You only sell what is currently trending.",
  },
];

export default function TrustBar() {
  return (
    <section className="dropshy-section">

      {/* =====================================================
          HERO
      ===================================================== */}

      <div className="dropshy-hero">

        {/* LEFT CONTENT */}
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

            <a
              href="#benefits"
              className="dropshy-btn-primary"
            >
              Start Selling
              <span>→</span>
            </a>

            <a
              href="#how-it-works"
              className="dropshy-btn-secondary"
            >
              See How It Works
            </a>

          </div>

        </div>


        {/* RIGHT IMAGE */}
        <div className="dropshy-hero-image">

          <div className="image-glow"></div>

          <div className="image-card">

            <img
              src={platformPreview}
              alt="Dropshy e-commerce platform"
            />

            {/* ORDER FLOATING CARD */}
            <div className="floating-card order-card">

              <div className="floating-icon">
                ✓
              </div>

              <div>
                <small>Order Processed</small>
                <strong>+ ₹12,450 Profit</strong>
              </div>

            </div>


            {/* GROWTH FLOATING CARD */}
            <div className="floating-card growth-card">

              <div className="growth-icon">
                ↗
              </div>

              <div>
                <small>Business Growth</small>
                <strong>+ 38.6%</strong>
              </div>

            </div>

          </div>

        </div>

      </div>


      {/* =====================================================
          HOW IT WORKS / INTRO
      ===================================================== */}

      <div
        className="dropshy-intro"
        id="how-it-works"
      >

        <div className="intro-number">
          01
        </div>

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


      {/* =====================================================
          COMPARISON
      ===================================================== */}

      <div className="comparison-wrapper">

        {/* TRADITIONAL */}
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


        {/* DROPSHY */}
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


      {/* =====================================================
          WHY DROPSHY
      ===================================================== */}

      <section
        className="why-dropshy-section"
        id="benefits"
      >

        <div className="why-dropshy-heading">

          <span>WHY DROPSHY?</span>

          <h2>
            Everything You Need.
            <strong> Nothing You Don't.</strong>
          </h2>

          <p>
            Start and scale your online business without the
            traditional headaches of inventory, warehousing,
            staffing and dead stock.
          </p>

        </div>


        <div className="why-dropshy-container">

          <div className="why-dropshy-grid">

            {pillars.map((pillar, index) => (

              <div
                className="why-dropshy-card"
                key={pillar.title}
              >

                {/* IMAGE */}
                <div className="why-dropshy-image-wrap">

                  <img
                    src={pillar.image}
                    alt={pillar.title}
                    className="why-dropshy-image"
                  />

                  <div className="why-dropshy-cross">
                    ✕
                  </div>

                </div>


                {/* CONTENT */}
                <div className="why-dropshy-content">

                  <div className="why-dropshy-card-top">

                    <span>
                      0{index + 1}
                    </span>

                  </div>

                  <h3>
                    {pillar.title}
                  </h3>

                  <p>
                    {pillar.text}
                  </p>

                  <div className="why-dropshy-arrow">
                    →
                  </div>

                </div>

              </div>

            ))}

          </div>

        </div>

      </section>


      {/* =====================================================
          FINAL CTA
      ===================================================== */}

      

    </section>
  );
}