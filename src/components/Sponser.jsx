import React from "react";

const indiaMarkets = [
  { name: "Amazon India", src: "/logos/amazon.png" },
  { name: "Flipkart", src: "/logos/flipkart.png" },
  { name: "Meesho", src: "/logos/meesho.png" },
  { name: "Myntra", src: "/logos/myntra.png" },
  { name: "Amazon Business", src: "/logos/amazon-business.png" },
];

const globalMarkets = [
  { name: "Etsy", src: "/logos/etsy.png" },
  { name: "eBay", src: "/logos/ebay.png" },
  { name: "Amazon USA", src: "/logos/amazon-us.png" },
  { name: "Walmart", src: "/logos/walmart.png" },
  { name: "Alibaba", src: "/logos/alibaba.png" },
  { name: "Amazon UAE", src: "/logos/amazon-uae.png" },
];

function Lane({ label, items, direction }) {
  const loop = [...items, ...items];
  return (
    <div className="lane">
      <span className="lane-tag">{label}</span>
      <div className="lane-mask">
        <div className={`lane-track dir-${direction}`}>
          {loop.map((logo, i) => (
            <div className="market-card" key={`${logo.name}-${i}`}>
              <img src={logo.src} alt={logo.name} />
              <span>{logo.name}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function Sponser() {
  return (
    <>
      <section className="route-section">
        <div className="route-container">
          <p className="route-eyebrow">India → World</p>
          <h2 className="route-heading">
            Sell across India's <strong>and</strong> the world's top marketplaces
          </h2>
          <p className="route-subtitle">
            Start selling on India's leading marketplaces and expand globally with Dropshy.
            We manage products, inventory, fulfillment and shipping while you focus on growing your business.
          </p>
        </div>

        <div className="route-lanes">
          <Lane label="Domestic — India" items={indiaMarkets} direction="left" />

          <div className="route-divider">
            <div className="divider-line" />
            <span className="divider-dot" />
          </div>

          <Lane label="Global Markets" items={globalMarkets} direction="right" />
        </div>
      </section>

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@500;700&family=Inter:wght@400;500&display=swap');

        .route-section {
          width: 100%;
          background: #fdfdfb;
          padding: 64px 0 60px;
          overflow: hidden;
          color: #1a1a1d;
          font-family: 'Inter', sans-serif;
        }

        .route-container {
          width: 100%;
          max-width: 720px;
          margin: 0 auto 48px;
          padding: 0 30px;
          box-sizing: border-box;
          text-align: center;
        }

        .route-eyebrow {
          margin: 0 0 14px;
          font-family: 'Space Grotesk', sans-serif;
          font-size: 13px;
          font-weight: 700;
          letter-spacing: 3px;
          text-transform: uppercase;
          color: #c99a12;
        }

        .route-heading {
          margin: 0 0 16px;
          font-family: 'Space Grotesk', sans-serif;
          font-size: 32px;
          line-height: 1.3;
          font-weight: 500;
          letter-spacing: -0.5px;
          color: #55555c;
        }

        .route-heading strong {
          color: #111114;
          font-weight: 700;
        }

        .route-subtitle {
          margin: 0 auto;
          max-width: 560px;
          color: #7d7d84;
          font-size: 16px;
          line-height: 1.75;
        }

        /* ==============================
           LANES
        ============================== */

        .route-lanes {
          width: 100%;
          display: flex;
          flex-direction: column;
          gap: 6px;
        }

        .lane {
          width: 100%;
          position: relative;
        }

        .lane-tag {
          display: block;
          max-width: 1310px;
          margin: 0 auto;
          padding: 0 30px 10px;
          box-sizing: border-box;
          font-family: 'Space Grotesk', sans-serif;
          font-size: 11px;
          font-weight: 700;
          letter-spacing: 2px;
          text-transform: uppercase;
          color: #a3a3aa;
        }

        .lane-mask {
          width: 100%;
          overflow: hidden;
          position: relative;
          -webkit-mask-image: linear-gradient(to right, transparent, #000 90px, #000 calc(100% - 90px), transparent);
          mask-image: linear-gradient(to right, transparent, #000 90px, #000 calc(100% - 90px), transparent);
        }

        .lane-track {
          display: flex;
          align-items: center;
          gap: 12px;
          width: max-content;
          will-change: transform;
        }

        .dir-left {
          animation: slide-left 34s linear infinite;
        }

        .dir-right {
          animation: slide-right 34s linear infinite;
        }

        .lane:hover .lane-track {
          animation-play-state: paused;
        }

        @keyframes slide-left {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }

        @keyframes slide-right {
          from { transform: translateX(-50%); }
          to { transform: translateX(0); }
        }

        /* ==============================
           CARD
        ============================== */

        .market-card {
          width: 176px;
          height: 64px;
          flex: 0 0 176px;
          border: 1px solid #eaeae5;
          border-radius: 8px;
          background: #ffffff;
          display: flex;
          align-items: center;
          justify-content: center;
          box-sizing: border-box;
          overflow: hidden;
          box-shadow: 0 1px 2px rgba(20, 20, 15, 0.03);
          transition: border-color 0.25s ease, box-shadow 0.25s ease, transform 0.25s ease;
        }

        .market-card:hover {
          border-color: #e8c145;
          box-shadow: 0 6px 16px rgba(201, 154, 18, 0.14);
          transform: translateY(-2px);
        }

        .market-card img {
          width: 78%;
          max-width: 130px;
          max-height: 38px;
          object-fit: contain;
          display: block;
          filter: grayscale(1) brightness(0.35);
          opacity: 0.75;
          transition: filter 0.25s ease, opacity 0.25s ease;
        }

        .market-card:hover img {
          filter: grayscale(0);
          opacity: 1;
        }

        .market-card span {
          display: none;
          color: #1a1a1d;
          font-size: 17px;
          font-weight: 600;
          white-space: nowrap;
        }

        /* ==============================
           DIVIDER — route line
        ============================== */

        .route-divider {
          position: relative;
          height: 22px;
          margin: 10px auto;
          max-width: 1310px;
          width: calc(100% - 60px);
        }

        .divider-line {
          position: absolute;
          top: 50%;
          left: 0;
          right: 0;
          height: 1px;
          background: repeating-linear-gradient(
            to right,
            #e2e2dc 0,
            #e2e2dc 6px,
            transparent 6px,
            transparent 12px
          );
        }

        .divider-dot {
          position: absolute;
          top: 50%;
          width: 6px;
          height: 6px;
          margin-top: -3px;
          border-radius: 50%;
          background: #e8b923;
          box-shadow: 0 0 8px 1px rgba(232, 185, 35, 0.55);
          animation: travel 5s ease-in-out infinite;
        }

        @keyframes travel {
          0% { left: 0%; opacity: 0; }
          10% { opacity: 1; }
          90% { opacity: 1; }
          100% { left: 100%; opacity: 0; }
        }

        @media (prefers-reduced-motion: reduce) {
          .dir-left, .dir-right, .divider-dot {
            animation: none;
          }
        }

        /* ==============================
           MOBILE
        ============================== */

        @media (max-width: 768px) {
          .route-section {
            padding: 46px 0 42px;
          }

          .route-heading {
            font-size: 23px;
          }

          .route-subtitle {
            font-size: 14.5px;
          }

          .market-card {
            width: 148px;
            height: 56px;
            flex-basis: 148px;
          }

          .market-card img {
            max-width: 108px;
            max-height: 32px;
          }

          .lane-mask {
            -webkit-mask-image: linear-gradient(to right, transparent, #000 40px, #000 calc(100% - 40px), transparent);
            mask-image: linear-gradient(to right, transparent, #000 40px, #000 calc(100% - 40px), transparent);
          }

          .route-divider {
            display: none;
          }
        }
      `}</style>
    </>
  );
}

export default Sponser;