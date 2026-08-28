import React from "react";

import amazonLogo from "../assets/images/amazon.webp";
import flipkartLogo from "../assets/images/flipcarts.jpg";
import meeshoLogo from "../assets/images/meesho.jpg";
import shopifyLogo from "../assets/images/shopify.svg";

import etsyLogo from "../assets/images/etsy.png";
import ebayLogo from "../assets/images/ebay.jpg";
import walmartLogo from "../assets/images/walmart.png";
import alibabaLogo from "../assets/images/alibaba.jpg";


/* =========================================================
   INDIA MARKETPLACES
========================================================= */

const indiaMarkets = [
  {
    name: "Amazon",
    logo: amazonLogo,
  },
  {
    name: "Flipkart",
    logo: flipkartLogo,
  },
  {
    name: "Meesho",
    logo: meeshoLogo,
  },
  {
    name: "Shopify",
    logo: shopifyLogo,
  },
  {
    name: "Amazon",
    logo: amazonLogo,
  },
  {
    name: "Flipkart",
    logo: flipkartLogo,
  },
  {
    name: "Meesho",
    logo: meeshoLogo,
  },
];


/* =========================================================
   GLOBAL MARKETPLACES
========================================================= */

const globalMarkets = [
  {
    name: "Etsy",
    logo: etsyLogo,
  },
  {
    name: "eBay",
    logo: ebayLogo,
  },
  {
    name: "Amazon USA",
    logo: amazonLogo,
  },
  {
    name: "Walmart",
    logo: walmartLogo,
  },
  {
    name: "Alibaba",
    logo: alibabaLogo,
  },
  {
    name: "Amazon UAE",
    logo: amazonLogo,
  },
];


/* =========================================================
   MARKETPLACE LANE
========================================================= */

function Lane({ label, items, direction }) {

  const loop = [...items, ...items];

  return (
    <div className="lane">

      {/* LANE LABEL */}

      <span className="lane-tag">
        {label}
      </span>


      {/* MASK */}

      <div className="lane-mask">

        {/* MOVING TRACK */}

        <div
          className={`lane-track ${
            direction === "left"
              ? "dir-left"
              : "dir-right"
          }`}
        >

          {loop.map((market, i) => (

            <div
              className="market-card"
              key={`${market.name}-${i}`}
            >

              {/* ONLY LOGO */}

              <img
                src={market.logo}
                alt={`${market.name} logo`}
                className="market-logo"
              />

            </div>

          ))}

        </div>

      </div>

    </div>
  );
}


/* =========================================================
   SPONSER COMPONENT
========================================================= */

function Sponser() {

  return (
    <section className="route-section">


      {/* =====================================================
         HEADER
      ===================================================== */}

      <div className="route-container">

        <p className="route-eyebrow">
          India → World
        </p>


        <h2 className="route-heading">

          Sell across India's and the world's{" "}

          <strong>
            top marketplaces
          </strong>

        </h2>


        <p className="route-subtitle">

          Start selling on India's leading marketplaces
          and expand globally with Dropshy. We manage
          products, inventory, fulfillment and shipping
          while you focus on growing your business.

        </p>

      </div>


      {/* =====================================================
         MARKETPLACE LANES
      ===================================================== */}

      <div className="route-lanes">


        {/* INDIA */}

        <Lane
          label="India Marketplaces"
          items={indiaMarkets}
          direction="left"
        />


        {/* DIVIDER */}

        <div className="route-divider">

          <div className="divider-line" />

          <span className="divider-dot" />

        </div>


        {/* GLOBAL */}

        <Lane
          label="Global Marketplaces"
          items={globalMarkets}
          direction="right"
        />

      </div>


      {/* =====================================================
         CSS
      ===================================================== */}

      <style>{`

        /* =====================================================
           MAIN SECTION
        ===================================================== */

        .route-section {

          --sky: #38b6ff;
          --sky-deep: #0b76c4;
          --sun: #ffc72c;

          width: 100%;

          position: relative;

          background:

            radial-gradient(
              900px 420px at 12% -10%,
              rgba(56, 182, 255, 0.22),
              transparent 65%
            ),

            radial-gradient(
              760px 380px at 92% 8%,
              rgba(255, 199, 44, 0.20),
              transparent 62%
            ),

            #ffffff;

          padding: 72px 0 66px;

          overflow: hidden;

          color: #0f2233;

          font-family:
            "Inter",
            system-ui,
            -apple-system,
            BlinkMacSystemFont,
            "Segoe UI",
            sans-serif;
        }


        /* =====================================================
           HEADER CONTAINER
        ===================================================== */

        .route-container {

          width: 100%;

          max-width: 760px;

          margin: 0 auto 52px;

          padding: 0 30px;

          box-sizing: border-box;

          text-align: center;
        }


        /* =====================================================
           EYEBROW
        ===================================================== */

        .route-eyebrow {

          display: inline-block;

          margin: 0 0 16px;

          padding: 6px 14px;

          border-radius: 999px;

          border:
            1px solid
            rgba(56, 182, 255, 0.35);

          background:
            rgba(56, 182, 255, 0.10);

          font-size: 12px;

          font-weight: 700;

          letter-spacing: 3px;

          text-transform: uppercase;

          color: var(--sky-deep);
        }


        /* =====================================================
           HEADING
        ===================================================== */

        .route-heading {

          margin: 0 0 16px;

          font-size: 34px;

          line-height: 1.25;

          font-weight: 500;

          letter-spacing: -0.6px;

          color: #5b6b7a;
        }


        .route-heading strong {

          font-weight: 800;

          background:

            linear-gradient(
              100deg,
              var(--sky-deep),
              var(--sky) 55%,
              var(--sun)
            );

          -webkit-background-clip: text;

          background-clip: text;

          color: transparent;
        }


        /* =====================================================
           SUBTITLE
        ===================================================== */

        .route-subtitle {

          margin: 0 auto;

          max-width: 570px;

          color: #728496;

          font-size: 16px;

          line-height: 1.75;
        }


        /* =====================================================
           LANES
        ===================================================== */

        .route-lanes {

          width: 100%;

          display: flex;

          flex-direction: column;

          gap: 10px;
        }


        .lane {

          width: 100%;

          position: relative;
        }


        /* =====================================================
           LANE LABEL
        ===================================================== */

        .lane-tag {

          display: block;

          max-width: 1310px;

          margin: 0 auto;

          padding:
            0 30px 12px;

          box-sizing: border-box;

          font-size: 11px;

          font-weight: 700;

          letter-spacing: 2px;

          text-transform: uppercase;

          color: #9bb0c2;
        }


        /* =====================================================
           MASK
        ===================================================== */

        .lane-mask {

          width: 100%;

          overflow: hidden;

          position: relative;

          -webkit-mask-image:

            linear-gradient(
              to right,
              transparent,
              #000 90px,
              #000 calc(100% - 90px),
              transparent
            );

          mask-image:

            linear-gradient(
              to right,
              transparent,
              #000 90px,
              #000 calc(100% - 90px),
              transparent
            );
        }


        /* =====================================================
           TRACK
        ===================================================== */

        .lane-track {

          display: flex;

          align-items: center;

          gap: 14px;

          width: max-content;

          will-change: transform;
        }


        /* =====================================================
           LEFT ANIMATION
        ===================================================== */

        .dir-left {

          animation:
            slide-left
            34s
            linear
            infinite;
        }


        /* =====================================================
           RIGHT ANIMATION
        ===================================================== */

        .dir-right {

          animation:
            slide-right
            34s
            linear
            infinite;
        }


        /* =====================================================
           PAUSE ON HOVER
        ===================================================== */

        .lane:hover .lane-track {

          animation-play-state: paused;
        }


        /* =====================================================
           SLIDE LEFT
        ===================================================== */

        @keyframes slide-left {

          from {
            transform: translateX(0);
          }

          to {
            transform: translateX(-50%);
          }

        }


        /* =====================================================
           SLIDE RIGHT
        ===================================================== */

        @keyframes slide-right {

          from {
            transform: translateX(-50%);
          }

          to {
            transform: translateX(0);
          }

        }


        /* =====================================================
           MARKET CARD
           ONLY LOGO
        ===================================================== */

        .market-card {

          width: 150px;

          height: 72px;

          flex:
            0 0 150px;

          display: flex;

          align-items: center;

          justify-content: center;

          padding: 10px;

          box-sizing: border-box;

          overflow: hidden;

          background:
            rgba(255, 255, 255, 0.96);

          border:
            1px solid
            rgba(56, 182, 255, 0.18);

          border-radius: 14px;

          box-shadow:
            0 3px 14px
            rgba(11, 118, 196, 0.07);

          transition:
            border-color 0.25s ease,
            box-shadow 0.25s ease,
            transform 0.25s ease;
        }


        /* =====================================================
           CARD HOVER
        ===================================================== */

        .market-card:hover {

          border-color:
            rgba(255, 199, 44, 0.75);

          box-shadow:
            0 10px 26px
            rgba(255, 199, 44, 0.18);

          transform:
            translateY(-4px);
        }


        /* =====================================================
           LOGO
        ===================================================== */

        .market-logo {

          width: 90px;

          height: 45px;

          object-fit: contain;

          display: block;

          transition:
            transform 0.25s ease,
            filter 0.25s ease;
        }


        /* =====================================================
           LOGO HOVER
        ===================================================== */

        .market-card:hover .market-logo {

          transform:
            scale(1.08);
        }


        /* =====================================================
           DIVIDER
        ===================================================== */

        .route-divider {

          position: relative;

          height: 24px;

          margin: 12px auto;

          max-width: 1310px;

          width:
            calc(100% - 60px);
        }


        .divider-line {

          position: absolute;

          top: 50%;

          left: 0;

          right: 0;

          height: 2px;

          background:

            repeating-linear-gradient(
              to right,
              rgba(56, 182, 255, 0.45) 0,
              rgba(56, 182, 255, 0.45) 7px,
              transparent 7px,
              transparent 14px
            );
        }


        /* =====================================================
           DIVIDER DOT
        ===================================================== */

        .divider-dot {

          position: absolute;

          top: 50%;

          width: 8px;

          height: 8px;

          margin-top: -4px;

          border-radius: 50%;

          background: var(--sun);

          box-shadow:
            0 0 12px 2px
            rgba(255, 199, 44, 0.7);

          animation:
            travel
            5s
            ease-in-out
            infinite;
        }


        /* =====================================================
           DIVIDER ANIMATION
        ===================================================== */

        @keyframes travel {

          0% {

            left: 0%;

            opacity: 0;
          }

          10% {

            opacity: 1;
          }

          90% {

            opacity: 1;
          }

          100% {

            left: 100%;

            opacity: 0;
          }

        }


        /* =====================================================
           REDUCED MOTION
        ===================================================== */

        @media (prefers-reduced-motion: reduce) {

          .dir-left,
          .dir-right,
          .divider-dot {

            animation: none;
          }

        }


        /* =====================================================
           TABLET
        ===================================================== */

        @media (max-width: 768px) {

          .route-section {

            padding:
              48px 0 44px;
          }


          .route-container {

            margin-bottom: 38px;
          }


          .route-heading {

            font-size: 24px;
          }


          .route-subtitle {

            font-size: 14.5px;
          }


          /* MOBILE CARD */

          .market-card {

            width: 130px;

            height: 62px;

            flex-basis: 130px;

            padding: 9px;

            border-radius: 12px;
          }


          .market-logo {

            width: 78px;

            height: 40px;
          }


          .lane-mask {

            -webkit-mask-image:

              linear-gradient(
                to right,
                transparent,
                #000 40px,
                #000 calc(100% - 40px),
                transparent
              );

            mask-image:

              linear-gradient(
                to right,
                transparent,
                #000 40px,
                #000 calc(100% - 40px),
                transparent
              );
          }


          .route-divider {

            display: none;
          }

        }


        /* =====================================================
           SMALL MOBILE
        ===================================================== */

        @media (max-width: 480px) {

          .route-container {

            padding: 0 18px;
          }


          .route-heading {

            font-size: 22px;

            line-height: 1.3;
          }


          .route-subtitle {

            font-size: 13.5px;

            line-height: 1.65;
          }


          .lane-tag {

            padding-left: 18px;

            font-size: 10px;
          }


          /* SMALL MOBILE CARD */

          .market-card {

            width: 115px;

            height: 56px;

            flex-basis: 115px;

            padding: 8px;

            border-radius: 11px;
          }


          .market-logo {

            width: 68px;

            height: 36px;
          }

        }

      `}</style>

    </section>
  );
}


export default Sponser;