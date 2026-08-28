import React, { useEffect, useRef } from "react";
import "./Dropsyoperation.css";

const operations = [
  {
    number: "01",
    title: "Product Manufacturing",
    icon: "🏭",
  },
  {
    number: "02",
    title: "Inventory Management",
    icon: "📦",
  },
  {
    number: "03",
    title: "Professional Packaging",
    icon: "📋",
  },
  {
    number: "04",
    title: "Shipping & Logistics",
    icon: "🚚",
  },
  {
    number: "05",
    title: "Order Fulfillment",
    icon: "✓",
  },
  {
    number: "06",
    title: "Shipment Tracking",
    icon: "📍",
  },
  {
    number: "07",
    title: "Dispatch Support",
    icon: "⚡",
  },
];

export default function OperationsSection() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const section = sectionRef.current;

    if (!section) return;

    const items = section.querySelectorAll(".ops-item");

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          items.forEach((item, index) => {
            setTimeout(() => {
              item.classList.add("ops-item-show");
            }, index * 80);
          });

          observer.disconnect();
        }
      },
      {
        threshold: 0.15,
      }
    );

    observer.observe(section);

    return () => observer.disconnect();
  }, []);

  return (
    <section
      className="operations-section"
      ref={sectionRef}
    >
      {/* BACKGROUND CIRCLES */}
      <div className="ops-bg-circle ops-circle-one" />
      <div className="ops-bg-circle ops-circle-two" />

      <div className="operations-container">

        {/* ================= HEADER ================= */}
        <div className="operations-heading">

          <div className="operations-heading-left">

            <div className="operations-title-row">
              <span className="operations-label">
                DROPSHY OPERATIONS
              </span>

              <div className="operations-mini-icon">
                <svg
                  viewBox="0 0 64 64"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect
                    x="11"
                    y="18"
                    width="42"
                    height="32"
                    rx="6"
                    stroke="currentColor"
                    strokeWidth="3"
                  />

                  <path
                    d="M21 18V14C21 11.8 22.8 10 25 10H39C41.2 10 43 11.8 43 14V18"
                    stroke="currentColor"
                    strokeWidth="3"
                    strokeLinecap="round"
                  />

                  <path
                    d="M11 30H53"
                    stroke="currentColor"
                    strokeWidth="3"
                  />

                  <circle
                    cx="32"
                    cy="30"
                    r="4"
                    fill="currentColor"
                  />

                  <path
                    d="M22 42H42"
                    stroke="currentColor"
                    strokeWidth="3"
                    strokeLinecap="round"
                  />
                </svg>

                <span className="icon-pulse" />
              </div>
            </div>

            <h2>
              We Handle the Operations.
              <br />
              <span>You Focus on Growth.</span>
            </h2>

          </div>

          <div className="operations-heading-right">
            <div className="heading-line" />

            <p>
              Dropshy manages every operational
              aspect of your business, including:
            </p>
          </div>

        </div>


        {/* ================= OPERATIONS GRID ================= */}
        <div className="ops-list">

          {operations.map((operation) => (
            <div
              className="ops-item"
             
            >

              <div className="ops-item-top">
                <span className="ops-item-number">
                  {operation.number}
                </span>

                <span className="ops-item-icon">
                  {operation.icon}
                </span>
              </div>

              <div className="ops-item-title">
                {operation.title}
              </div>

              <div className="ops-item-bottom">
               

                
              </div>

            </div>
          ))}

        </div>


        {/* ================= FOOTER ================= */}
        <div className="operations-footer">

          <div className="footer-line" />

          <div className="footer-content">

            <div className="footer-icon">
              ↗
            </div>

            <p>
              This allows you to focus on
              <strong> marketing, sales, </strong>
              and
              <strong> growing your brand.</strong>
            </p>

          </div>

          <div className="footer-line" />

        </div>

      </div>
    </section>
  );
}