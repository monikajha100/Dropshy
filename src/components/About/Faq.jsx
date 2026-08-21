import React, { useState } from "react";
import { Plus, ArrowUpRight } from "lucide-react";

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

  return (
    <section
      style={{
        position: "relative",
        background: "#FFFFFF",
        padding: "96px 24px",
        overflow: "hidden",
        fontFamily:
          "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
      }}
    >
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Source+Serif+4:opsz,wght@8..60,500;8..60,600&display=swap');

        .faq-fade-in {
          animation: faqFadeUp 0.7s cubic-bezier(0.22, 1, 0.36, 1) both;
        }
        @keyframes faqFadeUp {
          from { opacity: 0; transform: translateY(18px); }
          to { opacity: 1; transform: translateY(0); }
        }

        .faq-row {
          border-bottom: 1px solid #ECECEC;
          transition: border-color 0.3s ease;
        }
        .faq-row:first-child {
          border-top: 1px solid #ECECEC;
        }
        .faq-row:hover {
          border-color: #D8D8D8;
        }

        .faq-question-btn {
          all: unset;
          box-sizing: border-box;
          display: flex;
          align-items: center;
          justify-content: space-between;
          width: 100%;
          gap: 24px;
          padding: 28px 4px;
          cursor: pointer;
        }

        .faq-index {
          font-family: 'Source Serif 4', serif;
          font-size: 15px;
          font-weight: 500;
          color: #C9C9C9;
          min-width: 28px;
          transition: color 0.35s ease;
        }
        .faq-row-active .faq-index {
          color: #1D5BD9;
        }

        .faq-question-text {
          font-size: 17px;
          font-weight: 500;
          color: #16181D;
          line-height: 1.45;
          letter-spacing: -0.01em;
          transition: color 0.3s ease;
        }
        .faq-row:hover .faq-question-text {
          color: #1D5BD9;
        }

        .faq-icon-wrap {
          flex-shrink: 0;
          width: 30px;
          height: 30px;
          border-radius: 50%;
          border: 1px solid #E2E2E2;
          display: flex;
          align-items: center;
          justify-content: center;
          color: #16181D;
          transition: transform 0.4s cubic-bezier(0.22, 1, 0.36, 1),
            background 0.3s ease, border-color 0.3s ease, color 0.3s ease;
        }
        .faq-row-active .faq-icon-wrap {
          transform: rotate(135deg);
          background: #1D5BD9;
          border-color: #1D5BD9;
          color: #fff;
        }

        .faq-answer-wrapper {
          display: grid;
          grid-template-rows: 0fr;
          transition: grid-template-rows 0.45s cubic-bezier(0.22, 1, 0.36, 1);
        }
        .faq-answer-open {
          grid-template-rows: 1fr;
        }
        .faq-answer-inner {
          overflow: hidden;
        }
        .faq-answer-content {
          padding: 0 4px 30px 52px;
          font-size: 15px;
          line-height: 1.7;
          color: #62666D;
          max-width: 640px;
        }

        .faq-badge-dot {
          width: 6px;
          height: 6px;
          border-radius: 50%;
          background: #F0B429;
          display: inline-block;
        }

        .faq-contact-btn {
          all: unset;
          box-sizing: border-box;
          display: inline-flex;
          align-items: center;
          gap: 8px;
          background: #16181D;
          color: #fff;
          font-size: 14px;
          font-weight: 600;
          padding: 13px 22px;
          border-radius: 100px;
          cursor: pointer;
          transition: background 0.3s ease, transform 0.3s ease;
        }
        .faq-contact-btn:hover {
          background: #1D5BD9;
          transform: translateY(-1px);
        }

        @media (max-width: 640px) {
          .faq-answer-content { padding-left: 4px; }
        }
      `}</style>

      <div style={{ maxWidth: 760, margin: "0 auto", position: "relative" }}>
        {/* Heading */}
        <div className="faq-fade-in" style={{ marginBottom: 56 }}>
          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 8,
              padding: "6px 14px",
              borderRadius: 100,
              border: "1px solid #ECECEC",
              fontSize: 12,
              fontWeight: 600,
              letterSpacing: "0.06em",
              textTransform: "uppercase",
              color: "#62666D",
              marginBottom: 22,
            }}
          >
            <span className="faq-badge-dot" />
            FAQ
          </div>

          <h2
  style={{
    fontFamily: "'Playfair Display', serif",
    fontSize: "clamp(34px, 4.5vw, 48px)",
    fontWeight: 600,
    letterSpacing: "-0.025em",
    color: "#16181D",
    margin: 0,
    lineHeight: 1.12,
  }}
>
  Frequently asked{" "}
  <span
    style={{
      color: "#1D5BD9",
    }}
  >
    questions
  </span>
</h2>
          <p
            style={{
              marginTop: 14,
              fontSize: 16,
              color: "#62666D",
              lineHeight: 1.6,
            }}
          >
            Everything you need to know about the{" "}
            <strong style={{ color: "#16181D", fontWeight: 600 }}>
              Dropshy Zero Investment Business Model
            </strong>
          </p>
        </div>

        {/* FAQ List */}
        <div>
          {FAQ_DATA.map((faq, index) => {
            const isOpen = activeIndex === index;
            return (
              <div
                key={index}
                className={`faq-row faq-fade-in ${
                  isOpen ? "faq-row-active" : ""
                }`}
                style={{ animationDelay: `${0.06 * index}s` }}
              >
                <button
                  className="faq-question-btn"
                  onClick={() => toggleFAQ(index)}
                  aria-expanded={isOpen}
                >
                  <div
                    style={{
                      display: "flex",
                      alignItems: "flex-start",
                      gap: 20,
                    }}
                  >
                    <span className="faq-index">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <span className="faq-question-text">{faq.question}</span>
                  </div>
                  <span className="faq-icon-wrap">
                    <Plus size={15} strokeWidth={2.25} />
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
          })}
        </div>

        {/* Bottom message */}
        <div
          className="faq-fade-in"
          style={{
            marginTop: 64,
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            gap: 24,
            flexWrap: "wrap",
            padding: "28px 30px",
            borderRadius: 20,
            background: "#FAFAFA",
            border: "1px solid #F0F0F0",
          }}
        >
          <div>
            <h3
              style={{
                margin: 0,
                fontSize: 17,
                fontWeight: 600,
                color: "#16181D",
              }}
            >
              Still have questions?
            </h3>
            <p style={{ margin: "6px 0 0", fontSize: 14, color: "#62666D" }}>
              Our team is here to help you understand the Dropshy business
              model and get started.
            </p>
          </div>

          <button className="faq-contact-btn">
            Talk to us
            <ArrowUpRight size={16} strokeWidth={2.25} />
          </button>
        </div>
      </div>
    </section>
  );
}