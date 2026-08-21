import React, { useEffect, useRef } from "react";
import "./Commimission.css";

const PURPOSE_DATA = [
  {
    number: "01",
    icon: "✦",
    label: "OUR COMMITMENT",
    title: "Building Trust. Creating Growth.",
    text: "At DROPSHY, we believe E-commerce is not just about selling products—it is about building a brand, creating customer trust, and developing a sustainable business.",
    bottom:
      "We continuously improve our products, services, technology, and seller support so entrepreneurs can confidently take their next step in the digital marketplace.",
  },
  {
    number: "02",
    icon: "◎",
    label: "OUR MISSION",
    title: "Empowering Entrepreneurs",
    text: "Our mission is to empower aspiring entrepreneurs with the products, knowledge, technology, and support required to build sustainable e-commerce businesses.",
    bottom:
      "DROPSHY simplifies the journey from business idea → online store → first order → scalable E-commerce brand.",
  },
  {
    number: "03",
    icon: "◈",
    label: "OUR VISION",
    title: "Think Local. Sell Global.",
    text: "Our vision is to build a trusted Global E-commerce ecosystem that connects Indian products and entrepreneurs with customers and opportunities around the world.",
    bottom:
      "We aim to help businesses move from local opportunities to national and international markets through technology, innovation, reliable operations, and continuous support.",
  },
];

const CommitmentMissionVision = () => {
  const sectionRef = useRef(null);
  const cardsRef = useRef([]);

  useEffect(() => {
    const section = sectionRef.current;

    if (!section) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            section.classList.add("cmv-visible");
          }
        });
      },
      {
        threshold: 0.15,
      }
    );

    observer.observe(section);

    return () => observer.disconnect();
  }, []);

  const addCardRef = (el) => {
    if (el && !cardsRef.current.includes(el)) {
      cardsRef.current.push(el);
    }
  };

  return (
    <section className="cmv-section" ref={sectionRef}>
      <div className="cmv-container">

        {/* Heading */}
        <div className="cmv-heading">
          <span className="cmv-eyebrow">
            WHAT DRIVES DROPSHY
          </span>

          <h2>
            Built With Purpose.
            <br />
            <span>Driven By Growth.</span>
          </h2>

          <p>
            Our commitment, mission, and vision shape everything we do —
            from empowering entrepreneurs to creating opportunities across
            global markets.
          </p>
        </div>

        {/* Cards */}
        <div className="cmv-grid">
          {PURPOSE_DATA.map((item, index) => (
            <article
              className={`cmv-card cmv-card-${index + 1}`}
              key={item.number}
              ref={addCardRef}
            >
              {/* Background number */}
              <span className="cmv-number">
                {item.number}
              </span>

              {/* Top */}
              <div className="cmv-card-top">
                <div className="cmv-icon">
                  {item.icon}
                </div>

                <span className="cmv-label">
                  {item.label}
                </span>
              </div>

              {/* Content */}
              <div className="cmv-content">
                <h3>{item.title}</h3>

                <p className="cmv-main-text">
                  {item.text}
                </p>

                <p className="cmv-bottom-text">
                  {item.bottom}
                </p>
              </div>

              {/* Bottom line */}
              <div className="cmv-card-footer">
                <span>01</span>

                <div className="cmv-line">
                  <span></span>
                </div>

                <span>03</span>
              </div>

              {/* Hover arrow */}
              <div className="cmv-arrow">
                ↗
              </div>
            </article>
          ))}
        </div>

      </div>
    </section>
  );
};

export default CommitmentMissionVision;