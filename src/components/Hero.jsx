
import React, { useEffect, useState } from "react";
import "./Hero.css";

//import banner1 from "../assets/images/banner-1.webp";
import banner2 from "../assets/images/banner-2.webp";
import banner3 from "../assets/images/banner-3.webp";

const SLIDES = [
  {
    eyebrow: "AWB-000-ZERO-INV",
    title: "Launch Your Online Business\nwith Zero Investment",
    subtitle:
      "Partner with Dropshy. We handle products, inventory, packing and shipping while you focus on selling and earning profits.",
    highlights: ["Zero Investment", "Zero Inventory", "Sell Worldwide"],
    // image: banner1,
  },
  {
    eyebrow: "AWB-001-IN-DOMESTIC",
    title: "Sell on India's\nTop Marketplaces",
    subtitle:
      "Start selling on Amazon.in, Flipkart, Meesho and Myntra. We manage inventory, packing and Pan-India shipping for you.",
    highlights: ["Amazon.in", "Flipkart", "Meesho"],
    image: banner2,
  },
  {
    eyebrow: "AWB-002-INTERNATIONAL",
    title: "Sell Across\n135+ Countries",
    subtitle:
      "Expand globally with Etsy, eBay, Amazon.com, Walmart, Alibaba and Amazon UAE. Earn in Dollars with Zero Investment.",
    highlights: ["135+ Countries", "Earn in Dollars", "Global Shipping"],
    image: banner3,
  },
];

const Hero = () => {
  const [activeSlide, setActiveSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % SLIDES.length);
    }, 7000);

    return () => clearInterval(interval);
  }, []);

  const currentSlide = SLIDES[activeSlide];

  const nextSlide = () => {
    setActiveSlide((prev) => (prev + 1) % SLIDES.length);
  };

  const prevSlide = () => {
    setActiveSlide(
      (prev) => (prev - 1 + SLIDES.length) % SLIDES.length
    );
  };

  return (
    <section className="hero" id="hero">
      <div className="hero__inner container">

        {/* LEFT CONTENT */}
        <div
          className="hero__left hero__slide"
          key={`left-${activeSlide}`}
        >
          <p className="hero__eyebrow">
            {currentSlide.eyebrow}
          </p>

          <h1 className="hero__headline">
            {currentSlide.title.split("\n").map((line, index) => (
              <span key={index} className="hero__headline-line">
                {line}
              </span>
            ))}
          </h1>

          <p className="hero__sub">
            {currentSlide.subtitle.split("\n").map((line, index) => (
              <span key={index} className="hero__sub-line">
                {line}
              </span>
            ))}
          </p>

          {/* BUTTONS */}
          <div className="hero__ctas">
            <a
              href="/get-started"
              className="hero__cta-primary"
            >
              Sign up for Free

              <svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                aria-hidden="true"
              >
                <path
                  d="M3 8h10M9 4l4 4-4 4"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </a>

            <a
              href="/solutions"
              className="hero__cta-secondary"
            >
              Our Services
            </a>
          </div>

          {/* HIGHLIGHTS */}
          <div className="hero__meta">
            {currentSlide.highlights.map((item) => (
              <span
                key={item}
                className="hero__meta-pill"
              >
                {item}
              </span>
            ))}
          </div>

          {/* SLIDER CONTROLS */}
          <div className="hero__controls">

            <button
              className="hero__control"
              type="button"
              onClick={prevSlide}
              aria-label="Previous slide"
            >
              ←
            </button>

            <div className="hero__indicators">
              {SLIDES.map((slide, index) => (
                <button
                  key={slide.eyebrow}
                  type="button"
                  className={`hero__indicator ${index === activeSlide
                      ? "hero__indicator--active"
                      : ""
                    }`}
                  onClick={() => setActiveSlide(index)}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>

            <button
              className="hero__control"
              type="button"
              onClick={nextSlide}
              aria-label="Next slide"
            >
              →
            </button>

          </div>
        </div>

        {/* RIGHT SIDE — ONLY IMAGE */}
        {/* <div
          className="hero__right hero__slide--right"
          key={`right-${activeSlide}`}
        >
          <img
            src={currentSlide.image}
            alt="Dropshy"
            className="hero__photo"
          />
        </div> */}

      </div>
    </section>
  );
};

export default Hero;

