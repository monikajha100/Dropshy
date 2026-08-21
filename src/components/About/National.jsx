import React, { useState } from "react";
import {
  ArrowUpRight,
  Phone,
  Plus,
  Warehouse,
  Boxes,
  Store,
  MapPin,
  PackageCheck,
  Megaphone,
  Users,
} from "lucide-react";
import "./National.css";

const MARKETPLACES = [
  {
    tag: "01",
    name: "Amazon.in",
    desc: "Reach customers across India through one of the country's largest online marketplaces.",
  },
  {
    tag: "02",
    name: "Flipkart",
    desc: "List products and target customers across India's extensive e-commerce market.",
  },
  {
    tag: "03",
    name: "Meesho",
    desc: "Explore selling opportunities through a marketplace widely used by value-conscious online shoppers and resellers.",
  },
  {
    tag: "04",
    name: "Myntra",
    desc: "Suitable particularly for sellers operating in relevant fashion, lifestyle, and related categories, subject to Myntra's seller requirements.",
  },
];

const WHY_US = [
  { icon: Warehouse, text: "No need to maintain a large warehouse" },
  { icon: Boxes, text: "Access to a broad product selection" },
  { icon: Store, text: "Sell through multiple Indian marketplaces" },
  { icon: MapPin, text: "Reach customers across India" },
  { icon: PackageCheck, text: "Simplified order fulfillment" },
  { icon: Megaphone, text: "Focus more on sales and marketing" },
  { icon: Users, text: "Suitable for both new and experienced online sellers" },
];

const FAQ_DATA = [
  {
    q: "Do I need to maintain my own warehouse?",
    a: "No. The dropshipping model is designed to reduce the need for sellers to maintain their own inventory and warehouse.",
  },
  {
    q: "Can I sell on Amazon.in, Flipkart, Meesho, and Myntra?",
    a: "Dropshy supports national marketplace selling opportunities, subject to the eligibility, category restrictions, seller requirements, and policies of each marketplace.",
  },
  {
    q: "Do I need to purchase products in bulk?",
    a: "The dropshipping model allows you to avoid purchasing large quantities of inventory upfront.",
  },
  {
    q: "Who handles packing and shipping?",
    a: "The applicable Dropshy fulfillment process handles packing and dispatch according to the service arrangement and order requirements.",
  },
  {
    q: "Can I sell products anywhere in India?",
    a: "National dropshipping is designed to help sellers reach customers across India, subject to product and delivery availability.",
  },
  {
    q: "Do I have to handle customer service?",
    a: "As the marketplace seller, you remain responsible for your customer and marketplace obligations. Dropshy can support the relevant fulfillment and operational side according to its service scope.",
  },
  {
    q: "How much profit can I make?",
    a: "There is no fixed or guaranteed profit. Your results depend on product costs, selling price, marketplace fees, advertising, returns, taxes, competition, and other business expenses.",
  },
  {
    q: "Is national dropshipping risk-free?",
    a: "No. Dropshipping reduces certain inventory-related risks, but it is still a business and involves operational, financial, marketplace, and customer-service responsibilities.",
  },
];

const STEPS = [
  { n: "01", label: "Choose products" },
  { n: "02", label: "List them online" },
  { n: "03", label: "Get orders" },
  { n: "04", label: "Let Dropshy help with fulfillment" },
  { n: "05", label: "Focus on growing your sales" },
  { n: "06", label: "Earn more" },
];

export default function National() {
  const [openFaq, setOpenFaq] = useState(0);

  return (
    <div className="ntl-page">
      {/* ================= HERO ================= */}
      <section className="ntl-hero">
        <div className="ntl-container">
          <div className="ntl-hero-inner ntl-reveal">
            <div className="ntl-badge">
              <span className="ntl-badge-dot" />
              National E-Commerce
            </div>

            <h1>
              Sell across India <span>with Dropshy</span>
            </h1>

            <p className="ntl-hero-sub">
              National Dropshy Services enable sellers to explore national
              dropshipping through India's leading e-commerce marketplaces,
              including Amazon, Flipkart, Meesho, and Myntra.
            </p>

            <p className="ntl-hero-note">
              With a dropshipping model, you focus on product selection,
              listings, pricing, and sales — while the fulfillment side can be
              managed through your dropshipping supplier or partner, subject
              to each marketplace's policies.
            </p>

            <div className="ntl-hero-cta">
              <a href="tel:+918873768436" className="ntl-btn-primary">
                <Phone size={16} strokeWidth={2.25} />
                +91-8873768436
              </a>
              <span className="ntl-hero-cta-note">Call now to get started</span>
            </div>
          </div>
        </div>
      </section>

      {/* ================= MARKETPLACES ================= */}
      <section className="ntl-section">
        <div className="ntl-container">
          <div className="ntl-section-head ntl-reveal">
            <span className="ntl-eyebrow">Where you sell</span>
            <h2>India's major marketplaces</h2>
          </div>

          <div className="ntl-marketplace-grid">
            {MARKETPLACES.map((m, i) => (
              <div
                className="ntl-marketplace-card ntl-reveal"
                style={{ animationDelay: `${0.08 * i}s` }}
                key={m.name}
              >
                <span className="ntl-marketplace-tag">{m.tag}</span>
                <h3>{m.name}</h3>
                <p>{m.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= IMAGE / SCHEME BANNER ================= */}
      <section className="ntl-container">
        <div className="ntl-banner ntl-reveal">
          <div className="ntl-banner-text">
            <span className="ntl-eyebrow ntl-eyebrow-light">
              National scheme
            </span>
            <p>Visual overview of the national dropshipping scheme</p>
          </div>
        </div>
      </section>

      {/* ================= WHY CHOOSE US ================= */}
      <section className="ntl-section">
        <div className="ntl-container">
          <div className="ntl-section-head ntl-reveal">
            <span className="ntl-eyebrow">Why Dropshy</span>
            <h2>Why choose Dropshy for national dropshipping?</h2>
          </div>

          <div className="ntl-why-grid">
            {WHY_US.map((item, i) => {
              const Icon = item.icon;
              return (
                <div
                  className="ntl-why-item ntl-reveal"
                  style={{ animationDelay: `${0.05 * i}s` }}
                  key={item.text}
                >
                  <span className="ntl-why-icon">
                    <Icon size={18} strokeWidth={2} />
                  </span>
                  <span>{item.text}</span>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ================= FAQ ================= */}
      <section className="ntl-section">
        <div className="ntl-container ntl-faq-container">
          <div className="ntl-section-head ntl-reveal">
            <span className="ntl-eyebrow">FAQ</span>
            <h2>Frequently asked questions</h2>
          </div>

          <div className="ntl-faq-list">
            {FAQ_DATA.map((item, index) => {
              const isOpen = openFaq === index;
              return (
                <div
                  className={`ntl-faq-item ${isOpen ? "ntl-faq-active" : ""}`}
                  key={index}
                >
                  <button
                    className="ntl-faq-question"
                    onClick={() => setOpenFaq(isOpen ? null : index)}
                    aria-expanded={isOpen}
                  >
                    <div className="ntl-faq-question-left">
                      <span className="ntl-faq-number">
                        {String(index + 1).padStart(2, "0")}
                      </span>
                      <span>{item.q}</span>
                    </div>
                    <span className="ntl-faq-plus">
                      <Plus size={15} strokeWidth={2.25} />
                    </span>
                  </button>

                  <div
                    className={`ntl-faq-answer-wrap ${
                      isOpen ? "ntl-faq-answer-open" : ""
                    }`}
                  >
                    <div className="ntl-faq-answer-inner">
                      <p>{item.a}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ================= STEPS / CTA ================= */}
      <section className="ntl-section ntl-cta-section">
        <div className="ntl-container">
          <div className="ntl-cta-head ntl-reveal">
            <h2>
              Start selling across India <span>with Dropshy</span>
            </h2>
            <p>Turn your e-commerce idea into a scalable online business.</p>
          </div>

          <div className="ntl-steps">
            {STEPS.map((step, i) => (
              <div
                className="ntl-step ntl-reveal"
                style={{ animationDelay: `${0.06 * i}s` }}
                key={step.n}
              >
                <span className="ntl-step-n">{step.n}</span>
                <span className="ntl-step-label">{step.label}</span>
              </div>
            ))}
          </div>

          <div className="ntl-cta-final ntl-reveal">
            <div>
              <h3>Ready to start?</h3>
              <p>Join Dropshy and explore national dropshipping today.</p>
            </div>
            <a href="tel:+918873768436" className="ntl-btn-primary">
              <Phone size={16} strokeWidth={2.25} />
              Call now — +91-8873768436
              <ArrowUpRight size={16} strokeWidth={2.25} />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}