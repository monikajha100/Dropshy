import React, { useState } from "react";
import { Plus, ArrowUpRight } from "lucide-react";
import "./Faq.css";

const FAQ_DATA = [
  {
    question: "Is it possible to start dropshipping with Dropshy zero investment?",
    answer:
      "Yes. You don't need to purchase inventory upfront. Dropshy's model is designed to help you start without holding stock, while also reducing the need for warehouses, staff, and other inventory-related costs. However, other business expenses such as advertising, website/platform fees, payment processing, or operating costs may still apply.",
  },
  {
    question: "What is Dropshy?",
    answer:
      "Dropshy is a dropshipping platform where you can sell products without keeping inventory yourself. You list and sell the products, and after the customer places an order and payment is received, the supplier or applicable fulfillment process handles the order.",
  },
  {
    question: "Can I run this business part-time while working a job?",
    answer:
      "Absolutely. Since inventory and shipping are handled through the Dropshy fulfillment model, you can manage the business alongside your job. Your regular activities may include monitoring orders, checking order status, managing product listings, marketing, and responding to customer queries.",
  },
  {
    question: "Is dropshipping still profitable in 2026–27?",
    answer:
      "Yes, but the strategy has evolved. Long-term success increasingly depends on building a strong brand, choosing the right products, creating a trustworthy customer experience, and using effective marketing rather than simply selling random products. Dropshy focuses on helping sellers build and grow their e-commerce businesses.",
  },
  {
    question: "Can I sell products globally from any country?",
    answer:
      "Yes. With the Dropshy model, sellers based in India can explore national as well as international markets, including countries such as the USA, UK and Europe. Dropshy currently states that its international model supports customers across more than 135 countries.",
  },
  {
    question: "Is it really zero inventory stock?",
    answer:
      "Yes. You don't have to purchase or store inventory upfront. In the dropshipping model, the product is sourced for fulfillment after a customer has placed an order, so you don't need to maintain your own stock or warehouse.",
  },
  {
    question: "Can I start with zero investment?",
    answer:
      "Dropshy describes its model as zero investment because you don't need to purchase inventory upfront. However, zero inventory investment does not necessarily mean zero overall business costs. You may still have expenses such as advertising, website or platform fees, payment processing, branding, and other operating costs.",
  },
  {
    question: "Can I sell in India or internationally?",
    answer:
      "Yes. Dropshy offers national and international dropshipping models. You can explore selling products across India, as well as international markets such as the USA, UK and Europe. Dropshy states that its international model supports more than 135 countries.",
  },
  {
    question: "How many products does Dropshy offer?",
    answer:
      "Dropshy currently claims to offer more than 5,000 product SKUs across 32+ categories, giving sellers a broad range of products to explore for their e-commerce business.",
  },
  {
    question: "What happens after a customer places an order?",
    answer:
      "Once a customer places an order, the order is submitted for fulfillment according to the applicable Dropshy process. The supplier or fulfillment team then prepares and dispatches the product to the customer.",
  },
];

export default function FAQ() {
  const [activeIndex, setActiveIndex] = useState(0);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const leftFAQs = FAQ_DATA.slice(0, 5);
  const rightFAQs = FAQ_DATA.slice(5, 10);

  const renderFAQ = (faq, index) => {
    const isOpen = activeIndex === index;
    return (
      <div
        key={index}
        className={`faq-row ${isOpen ? "faq-row-active" : ""}`}
      >
        <button
          className="faq-question-btn"
          onClick={() => toggleFAQ(index)}
          aria-expanded={isOpen}
        >
          <div className="faq-question-left">
            <span className="faq-index">
              {String(index + 1).padStart(2, "0")}
            </span>
            <span className="faq-question-text">{faq.question}</span>
          </div>

          <span className="faq-icon-wrap">
            <Plus size={17} strokeWidth={2.25} />
          </span>
        </button>

        <div
          className={`faq-answer-wrapper ${
            isOpen ? "faq-answer-open" : ""
          }`}
        >
          <div className="faq-answer-inner">
            <div className="faq-answer-content">{faq.answer}</div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <section className="faq-section">
      <div className="faq-bg faq-bg-one"></div>
      <div className="faq-bg faq-bg-two"></div>

      <div className="faq-container">
        {/* HEADER */}
        <div className="faq-header">
          <div className="faq-badge">
            <span className="faq-badge-dot"></span>
            FAQ
          </div>

          <h2 className="faq-title">
            Frequently asked <span>questions</span>
          </h2>

          <p className="faq-subtitle">
            Everything you need to know about the{" "}
            <strong>Dropshy Zero Investment Business Model</strong>
          </p>
        </div>

        {/* TWO COLUMNS — 5 QUESTIONS EACH */}
        <div className="faq-columns">
          <div className="faq-column">
            {leftFAQs.map((faq, index) => renderFAQ(faq, index))}
          </div>

          <div className="faq-column">
            {rightFAQs.map((faq, index) => renderFAQ(faq, index + 5))}
          </div>
        </div>

        {/* BOTTOM CONTACT */}
        <div className="faq-contact-box">
          <div className="faq-contact-text">
            <h3>Still have questions?</h3>
            <p>
              Our team is here to help you understand the Dropshy business
              model and get started.
            </p>
          </div>

          <button className="faq-contact-btn">
            Talk to us
            <ArrowUpRight size={17} strokeWidth={2.25} />
          </button>
        </div>
      </div>
    </section>
  );
}