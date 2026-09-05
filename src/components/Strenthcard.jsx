import React, { useEffect, useRef, useState } from "react";
import "./Strength.css";

import author from "../assets/images/auther.png";

const stats = [
  {
    code: "DPY-SEL-01",
    number: 190,
    label: "Active Sellers",
    rotate: "-4deg",
    delay: "0s",
  },
  {
    code: "DPY-CAT-02",
    number: 32,
    label: "Product Categories",
    rotate: "3deg",
    delay: ".3s",
  },
  {
    code: "DPY-SKU-03",
    number: 5000,
    label: "Product SKUs",
    rotate: "-3deg",
    delay: ".6s",
  },
  {
    code: "DPY-ORD-04",
    number: 1000,
    label: "Daily Orders Processed",
    rotate: "4deg",
    delay: ".9s",
  },
];

const reasons = [
  "Trusted by hundreds of entrepreneurs",
  "Thousands of ready-to-sell products",
  "Growing every day with new sellers",
  "Reliable fulfillment and logistics support",
  "Built for scalable e-commerce growth",
];

/* =========================================================
   TESTIMONIAL DATA
========================================================= */

const testimonials = [
  {
    name: "Rahul Sharma",
    role: "Online Seller",
    image: author,
    text:
      "Dropshy made my e-commerce journey very simple. I was able to start selling online without worrying about inventory, packing or shipping.",
    rating: 5,
  },
  {
    name: "Priya Verma",
    role: "E-Commerce Entrepreneur",
    image: author,
    text:
      "The complete support from Dropshy has helped me understand online selling better and grow my business with confidence.",
    rating: 5,
  },
  {
    name: "Amit Kumar",
    role: "Dropshipping Seller",
    image: author,
    text:
      "I really liked the hassle-free process. Dropshy handles the operational work so I can focus more on marketing and sales.",
    rating: 5,
  },
];

function CountNumber({ target, active }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!active) return;

    let start = null;
    const duration = 1400;

    const animate = (time) => {
      if (!start) start = time;

      const progress = Math.min((time - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);

      setCount(Math.floor(eased * target));

      if (progress < 1) {
        requestAnimationFrame(animate);
      } else {
        setCount(target);
      }
    };

    requestAnimationFrame(animate);
  }, [active, target]);

  return <>{count.toLocaleString("en-IN")}</>;
}

function NumberTag({ item }) {
  const ref = useRef(null);
  const [active, setActive] = useState(false);

  useEffect(() => {
    const element = ref.current;

    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setActive(true);
          element.classList.add("success-in-view");
          observer.unobserve(element);
        }
      },
      { threshold: 0.25 }
    );

    observer.observe(element);

    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className="success-tag-wrap"
      style={{
        "--rotate": item.rotate,
        "--delay": item.delay,
      }}
    >
      <div className="success-thread" />

      <div className="success-tag">
        <svg
          viewBox="0 0 200 258"
          preserveAspectRatio="none"
          className="success-tag-svg"
        >
          <path
            d="M20,2 H180 a18,18 0 0 1 18,18 V182 L100,254 L2,182 V20 a18,18 0 0 1 18,-18 Z"
            fill="#ffffff"
            stroke="#dce7ee"
            strokeWidth="2"
          />

          <circle
            cx="100"
            cy="28"
            r="9"
            fill="#ffffff"
            stroke="#1c6fa5"
            strokeWidth="2"
          />
        </svg>

        <div className="success-tag-content">
          <div className="success-tag-code">
            {item.code}
          </div>

          <div className="success-number-row">
            <span className="success-number">
              <CountNumber
                target={item.number}
                active={active}
              />
            </span>

            <span className="success-plus">+</span>
          </div>

          <div className="success-tag-label">
            {item.label}
          </div>

          <div className="success-barcode" />
        </div>
      </div>
    </div>
  );
}

export default function SuccessNumbers() {
  const rowsRef = useRef(null);
  const [rowsVisible, setRowsVisible] = useState(false);

  useEffect(() => {
    const element = rowsRef.current;

    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setRowsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );

    observer.observe(element);

    return () => observer.disconnect();
  }, []);

  return (
    <section className="success-section">

      {/* =====================================================
          STATS
      ===================================================== */}

      <section className="success-stats-section">

        <div className="success-heading">

          <div className="success-eyebrow">
            THE SHIPMENT MANIFEST
          </div>

          <h2>
            FOUR NUMBERS THAT MOVE US
          </h2>

          <p>
            Real numbers. Real sellers. Real growth.
          </p>

        </div>

        <div className="success-rail" />

        <div
          ref={rowsRef}
          className={`success-tag-grid ${
            rowsVisible ? "success-grid-visible" : ""
          }`}
        >
          {stats.map((item) => (
            <NumberTag
              key={item.code}
              item={item}
            />
          ))}
        </div>

      </section>


      {/* =====================================================
          TESTIMONIALS
      ===================================================== */}

      <section className="testimonialSection">

        <div className="testimonialContainer">

          {/* HEADER */}

          <div className="testimonialHeader">

            <div className="testimonialEyebrow">
              CUSTOMER STORIES
            </div>

            <h2>
              What Our <span>Customers Say</span>
            </h2>

            <p>
              Real experiences from entrepreneurs building and growing
              their online businesses with Dropshy.
            </p>

          </div>


          {/* TESTIMONIAL CARDS */}

          <div className="testimonialGrid">

            {testimonials.map((item, index) => (

              <article
                className="testimonialCard"
                key={index}
              >

                <div className="testimonialQuote">
                  “
                </div>

                <div className="testimonialStars">
                  {"★".repeat(item.rating)}
                </div>

                <p className="testimonialText">
                  {item.text}
                </p>

                <div className="testimonialUser">

                  <img
                    src={item.image}
                    alt={item.name}
                  />

                  <div>
                    <h4>
                      {item.name}
                    </h4>

                    <span>
                      {item.role}
                    </span>
                  </div>

                </div>

              </article>

            ))}

          </div>

        </div>

      </section>

    </section>
  );
}