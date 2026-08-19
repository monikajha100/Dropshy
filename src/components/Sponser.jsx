const indiaMarkets = [
  { name: "Amazon India", tint: "#FF9900" },
  { name: "Flipkart", tint: "#2874F0" },
  { name: "Meesho", tint: "#9F2089" },
  { name: "Myntra", tint: "#FF3F6C" },
  { name: "Amazon Business", tint: "#146EB4" },
];

const globalMarkets = [
  { name: "Etsy", tint: "#F1641E" },
  { name: "eBay", tint: "#E53238" },
  { name: "Amazon USA", tint: "#FF9900" },
  { name: "Walmart", tint: "#0071CE" },
  { name: "Alibaba", tint: "#FF6A00" },
  { name: "Amazon UAE", tint: "#232F3E" },
];


function Lane({ label, items, direction }) {
  const loop = [...items, ...items];

  return (
    <div className="lane">

      <span className="lane-tag">
        {label}
      </span>

      <div className="lane-mask">

        <div
          className={`lane-track ${
            direction === "left"
              ? "dir-left"
              : "dir-right"
          }`}
        >

          {loop.map((logo, i) => (
            <div
              className="market-card"
              key={`${logo.name}-${i}`}
            >
              <span
                className="dot"
                style={{
                  background: logo.tint,
                }}
              />

              <span className="market-name">
                {logo.name}
              </span>
            </div>
          ))}

        </div>

      </div>
    </div>
  );
}


function Sponser() {
  return (
    <section className="route-section">

      {/* ================= HEADER ================= */}

      <div className="route-container">

        <p className="route-eyebrow">
          India → World
        </p>

        <h2 className="route-heading">
          Sell across India's and the world's{" "}
          <strong>top marketplaces</strong>
        </h2>

        <p className="route-subtitle">
          Start selling on India's leading marketplaces
          and expand globally with Dropshy. We manage
          products, inventory, fulfillment and shipping
          while you focus on growing your business.
        </p>

      </div>


      {/* ================= MARKETPLACE LANES ================= */}

      <div className="route-lanes">

        <Lane
          label="India Marketplaces"
          items={indiaMarkets}
          direction="left"
        />

        <div className="route-divider">

          <div className="divider-line" />

          <span className="divider-dot" />

        </div>

        <Lane
          label="Global Marketplaces"
          items={globalMarkets}
          direction="right"
        />

      </div>


      {/* ================= CSS ================= */}

      <style>{`

        /* =========================================
           MAIN SECTION
        ========================================= */

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
            'Inter',
            system-ui,
            sans-serif;
        }


        /* =========================================
           HEADER CONTAINER
        ========================================= */

        .route-container {
          width: 100%;

          max-width: 760px;

          margin: 0 auto 52px;

          padding: 0 30px;

          box-sizing: border-box;

          text-align: center;
        }


        /* =========================================
           EYEBROW
        ========================================= */

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


        /* =========================================
           HEADING
        ========================================= */

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

          color: #0f2233;

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


        /* =========================================
           SUBTITLE
        ========================================= */

        .route-subtitle {
          margin: 0 auto;

          max-width: 570px;

          color: #728496;

          font-size: 16px;

          line-height: 1.75;
        }


        /* =========================================
           LANES
        ========================================= */

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


        /* =========================================
           LANE LABEL
        ========================================= */

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


        /* =========================================
           MASK
        ========================================= */

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


        /* =========================================
           TRACK
        ========================================= */

        .lane-track {
          display: flex;

          align-items: center;

          gap: 14px;

          width: max-content;

          will-change: transform;
        }


        .dir-left {
          animation:
            slide-left
            34s
            linear
            infinite;
        }


        .dir-right {
          animation:
            slide-right
            34s
            linear
            infinite;
        }


        .lane:hover .lane-track {
          animation-play-state: paused;
        }


        /* =========================================
           SLIDE ANIMATIONS
        ========================================= */

        @keyframes slide-left {

          from {
            transform: translateX(0);
          }

          to {
            transform: translateX(-50%);
          }

        }


        @keyframes slide-right {

          from {
            transform: translateX(-50%);
          }

          to {
            transform: translateX(0);
          }

        }


        /* =========================================
           MARKET CARD
        ========================================= */

        .market-card {
          width: 200px;

          height: 68px;

          flex:
            0 0 200px;

          border:
            1px solid
            rgba(56, 182, 255, 0.22);

          border-radius: 14px;

          background:
            rgba(255, 255, 255, 0.92);

          backdrop-filter: blur(6px);

          display: flex;

          align-items: center;

          justify-content: center;

          gap: 10px;

          box-sizing: border-box;

          overflow: hidden;

          box-shadow:
            0 2px 10px
            rgba(11, 118, 196, 0.07);

          transition:
            border-color 0.25s ease,
            box-shadow 0.25s ease,
            transform 0.25s ease;
        }


        .market-card:hover {

          border-color: var(--sun);

          box-shadow:
            0 10px 24px
            rgba(255, 199, 44, 0.28);

          transform:
            translateY(-3px);
        }


        /* =========================================
           DOT
        ========================================= */

        .dot {
          width: 9px;

          height: 9px;

          border-radius: 50%;

          flex:
            0 0 9px;

          opacity: 0.8;
        }


        .market-card:hover .dot {
          opacity: 1;
        }


        /* =========================================
           MARKET NAME
        ========================================= */

        .market-name {

          font-size: 15.5px;

          font-weight: 700;

          letter-spacing: -0.2px;

          white-space: nowrap;

          color: #14324a;
        }


        /* =========================================
           DIVIDER
        ========================================= */

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


        /* =========================================
           DIVIDER ANIMATION
        ========================================= */

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


        /* =========================================
           REDUCED MOTION
        ========================================= */

        @media (prefers-reduced-motion: reduce) {

          .dir-left,
          .dir-right,
          .divider-dot {

            animation: none;
          }

        }


        /* =========================================
           TABLET / MOBILE
        ========================================= */

        @media (max-width: 768px) {

          .route-section {

            padding:
              48px 0 44px;
          }


          .route-heading {

            font-size: 24px;
          }


          .route-subtitle {

            font-size: 14.5px;
          }


          .market-card {

            width: 162px;

            height: 58px;

            flex-basis: 162px;
          }


          .market-name {

            font-size: 14px;
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

      `}</style>

    </section>
  );
}


export default Sponser;