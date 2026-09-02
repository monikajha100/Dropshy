import React, { useEffect, useState } from "react";
import "./Hero.css";

import banner1 from "../../assets/images/about1.jpg";
import banner2 from "../../assets/images/about2.jpg";
import banner3 from "../../assets/images/about3.jpg";

const SLIDES = [
  {
    eyebrow: "Ecommerce shipping OS",
    title: "Ship smarter,\nGrow faster with Dropsy",
    subtitle:
      "Bring every parcel, return, and customer update into one premium operations hub.",
    image: banner1,
  },
  {
    eyebrow: "Modern commerce stack",
    title: "Powerful tools for\nmodern eCommerce",
    subtitle:
      "Unify your orders, inventory, and customer experience from one elegant dashboard.",
    image: banner2,
  },
  {
    eyebrow: "One place to lead",
    title: "Manage your business\nfrom one place",
    subtitle:
      "Track performance, automate communications, and make shipping decisions with confidence.",
    image: banner3,
  },
];

const Hero = () => {
  const [activeSlide, setActiveSlide] = useState(0);
  const [imageLoaded, setImageLoaded] = useState(true);

  useEffect(() => {
    const timer = window.setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % SLIDES.length);
    }, 5000);

    return () => window.clearInterval(timer);
  }, []);

  const nextSlide = () => {
    setActiveSlide((prev) => (prev + 1) % SLIDES.length);
  };

  const prevSlide = () => {
    setActiveSlide(
      (prev) => (prev - 1 + SLIDES.length) % SLIDES.length
    );
  };

  const goToSlide = (index) => {
    setActiveSlide(index);
  };

  const currentSlide = SLIDES[activeSlide];

  useEffect(() => {
    setImageLoaded(false);

    const img = new Image();

    img.src = currentSlide.image;

    img.onload = () => {
      setImageLoaded(true);
    };

    img.onerror = () => {
      setImageLoaded(true);
    };
  }, [currentSlide.image]);

  return (
    <section className="hero" id="hero">
      {/* BACKGROUND */}
      <div className="hero__bg" aria-hidden="true">
        <div className="hero__blob hero__blob--sky" />
        <div className="hero__blob hero__blob--yellow" />
      </div>

      <div className="hero__inner container">

        {/* =====================================================
            LEFT CONTENT
        ===================================================== */}

        <div
          className="hero__left hero__slide"
          key={`left-${activeSlide}`}
        >
          <p className="hero__eyebrow">
            {currentSlide.eyebrow}
          </p>

          <h1 className="hero__headline">
            {currentSlide.title.split("\n").map((line, index) => (
              <span
                key={index}
                className="hero__headline-line"
              >
                {line}
              </span>
            ))}
          </h1>

          <p className="hero__sub">
            {currentSlide.subtitle}
          </p>

          <div className="hero__ctas">
            <a
              href="/get-started"
              className="hero__cta-primary"
            >
              Get Started Free

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
              Explore Solutions
            </a>
          </div>

          {/* =================================================
              CONTROLS
          ================================================= */}

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
                  className={`hero__indicator ${
                    index === activeSlide
                      ? "hero__indicator--active"
                      : ""
                  }`}
                  onClick={() => goToSlide(index)}
                  aria-label={`Go to slide ${index + 1}`}
                  aria-current={
                    index === activeSlide
                      ? "true"
                      : undefined
                  }
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

        {/* =====================================================
            RIGHT IMAGE
        ===================================================== */}

        <div className="hero__right hero__slide hero__slide--right">

          <div className="hero__photo-frame">

            <div
              className="hero__photo-ring"
              aria-hidden="true"
            />

           <img
  src={currentSlide.image}
  alt={currentSlide.title.replace(/\n/g, " ")}
  className="hero__photo"
/>

            <div className="hero__badge hero__badge--top">
              <strong>
                {String(activeSlide + 1).padStart(2, "0")}
              </strong>
              <span>/ 03</span>
            </div>

            <div className="hero__badge hero__badge--bottom">
              Dropsy
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};

export default Hero;