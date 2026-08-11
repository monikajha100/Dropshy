import React from "react";
import "./AISolutionsSection.css";

import senseImg from "../assets/images/sence.webp";
import trendsImg from "../assets/images/trends.webp";

const cards = [
  {
    title: "Sense",
    description:
      "Our advanced AI-driven API refines field operations, reduces Return to Origin (RTO) rates, and improves delivery accuracy with verified addresses and autofill checkout. With precise, automated data integration, we enhance customer experience, reduce cart abandonment, and streamline the shopping process.",
    image: senseImg,
  },
  {
    title: "Trends",
    description:
      "Successful eCommerce businesses need in-depth insights into market intelligence, industry trends, and consumer behaviour to stay ahead of the curve. Our AI-powered platform, TRENDS, offers market data tailored to your specific filtering criteria. Harness its power to drive business growth and outperform the competition.",
    image: trendsImg,
  },
];

export default function AISection() {
  return (
    <section className="ai-section">

      <div className="ai-container">

        {/* Heading */}

        <h2 className="ai-heading">
          <span>AI</span> Powered
          <br />
          Innovations
        </h2>

        {/* Cards */}

        <div className="ai-grid">

          {cards.map((card, index) => (

            <div className="ai-card" key={index}>

              {/* Left */}

              <div className="ai-content">

                <h3>{card.title}</h3>

                <p>{card.description}</p>

                <button className="know-btn">
                  Know more
                  <span>→</span>
                </button>

              </div>

              {/* Right */}

              <div className="ai-image">

                <img
                  src={card.image}
                  alt={card.title}
                />

              </div>

            </div>

          ))}

        </div>

      </div>

    </section>
  );
}