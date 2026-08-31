import { useEffect, useRef, useState } from "react";
import heroImg from "../assets/images/HOME PAGE WHY CHOOSE US.png";
import Grobal from "../assets/images/2.png"
import Export from "../assets/images/WHY CHOOSE US 1.png"
import Ecommerce from "../assets/images/3.png"
import online from "../assets/images/4.png"

const PILLARS = [
  {
    tag: "Global Business",
    title: "Start an export business without buying any stock",
    copy: "The full guide to building a worldwide brand with nothing sitting in a warehouse.",
    icon: "M12 2a10 10 0 100 20 10 10 0 000-20zM2 12h20M12 2c3 3.5 3 15.5 0 20M12 2c-3 3.5-3 15.5 0 20",
    img: Grobal,
  },
  {
    tag: "Export Business",
    title: "Run exports with zero upfront purchase",
    copy: "Learn how to start your own export business without buying products in advance.",
    icon: "M3 16V8l9-5 9 5v8l-9 5-9-5zM3 8l9 5 9-5M12 13v8",
    img: Export,
  },
  {
    tag: "Ecommerce",
    title: "Sell online with zero inventory",
    copy: "No stock needed. Start a smart online business today and scale on your own terms.",
    icon: "M4 5h2l2.2 10.4A2 2 0 0010.2 17h6.9a2 2 0 002-1.6L21 8H7M10 21h.01M18 21h.01",
    img: Ecommerce,
  },
  {
    tag: "Online Export",
    title: "Forget the stress of purchasing & delivery",
    copy: "We buy, pack and ship worldwide. You keep the customer and the margin.",
    icon: "M3 13h10V6H3zM13 9h4l4 4v3h-8zM7.5 19a1.5 1.5 0 100-3 1.5 1.5 0 000 3zM17.5 19a1.5 1.5 0 000-3 1.5 1.5 0 000 3z",
    img: online,
  },
];
const REASONS = [
  "Zero Investment Business Model",
  "Zero Inventory Risk",
  "No Warehouse Required",
  "No Staff Hiring",
  "No Dead Stock Loss",
  "Fast Pan-India Shipping",
  "International Shipping Support",
  "Complete Business Training",
  "Dedicated Seller Support",
  "High-Profit Margin Opportunities",
];

const STATS = [
  { value: 0, label: "Investment needed", suffix: "₹" },
  { value: 100, label: "Pan-India coverage", suffix: "%" },
  { value: 24, label: "Seller support", suffix: "/7" },
];

const HEADLINE = ["Why", "choose", "Dropshy", "for", "your"];

const HERO_IMG = heroImg;

function Counter({ to, suffix }) {
  const [n, setN] = useState(0);
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const io = new IntersectionObserver(
      ([e]) => {
        if (!e.isIntersecting) return;

        io.disconnect();

        const dur = 1200;
        const t0 = performance.now();

        const tick = (t) => {
          const p = Math.min(1, (t - t0) / dur);

          setN(
            Math.round(
              to * (1 - Math.pow(1 - p, 3))
            )
          );

          if (p < 1) {
            requestAnimationFrame(tick);
          }
        };

        requestAnimationFrame(tick);
      },
      { threshold: 0.4 }
    );

    io.observe(el);

    return () => io.disconnect();
  }, [to]);

  return (
    <span ref={ref} className="wd-count">
      {suffix === "₹" ? `₹${n}` : `${n}${suffix}`}
    </span>
  );
}

function Tick() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="3.4"
      strokeLinecap="round"
      strokeLinejoin="round"
      width="12"
      height="12"
    >
      <polyline points="20 6 9 17 4 12" />
    </svg>
  );
}

export default function WhyChooseDropshy() {
  const refs = useRef([]);

  useEffect(() => {
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("is-in");
            io.unobserve(e.target);
          }
        });
      },
      { threshold: 0.12 }
    );

    refs.current.forEach(
      (el) => el && io.observe(el)
    );

    return () => io.disconnect();
  }, []);

  const setRef = (i) => (el) => {
    refs.current[i] = el;
  };

  const tilt = (e) => {
    const card = e.currentTarget;
    const r = card.getBoundingClientRect();

    const px =
      (e.clientX - r.left) / r.width - 0.5;

    const py =
      (e.clientY - r.top) / r.height - 0.5;

    card.style.setProperty(
      "--rx",
      `${(-py * 6).toFixed(2)}deg`
    );

    card.style.setProperty(
      "--ry",
      `${(px * 8).toFixed(2)}deg`
    );
  };

  const untilt = (e) => {
    e.currentTarget.style.setProperty(
      "--rx",
      "0deg"
    );

    e.currentTarget.style.setProperty(
      "--ry",
      "0deg"
    );
  };

  const marquee = [...REASONS, ...REASONS];

  return (
    <section className="wd">

      {/* BACKGROUND */}
      <div
        className="wd-aurora"
        aria-hidden="true"
      >
        <span className="blob b1" />
        <span className="blob b2" />
        <span className="blob b3" />
        <span className="grid" />
      </div>

      {/* ================================
          HEADER / HERO
      ================================= */}

      <div
        className="wd-head"
        ref={setRef(0)}
      >
        <div className="wd-head-copy">

          <span className="wd-eyebrow">
            <span className="wd-dot" />
            Dropshy — International Seller Program
          </span>

          <h2 className="wd-title">
            {HEADLINE.map((w, i) => (
              <span
                key={w}
                className="w"
                style={{
                  animationDelay:
                    `${0.1 + i * 0.09}s`,
                }}
              >
                {w}&nbsp;
              </span>
            ))}

            <span
              className="w grad"
              style={{
                animationDelay:
                  `${0.1 + HEADLINE.length * 0.09}s`,
              }}
            >
              e-commerce?
            </span>
          </h2>

          <p className="wd-lede">
            Launch your international company with
            Dropshy. Put an end to fantasising about
            starting a business — we share the keys
            to creating a multinational company that
            makes millions, without a physical
            warehouse or a sizable workforce.
          </p>

          <div className="wd-stats">
            {STATS.map((s) => (
              <div
                className="wd-stat"
                key={s.label}
              >
                <Counter
                  to={s.value}
                  suffix={s.suffix}
                />

                <span>{s.label}</span>
              </div>
            ))}
          </div>

        </div>

        {/* ================================
            HERO IMAGE
        ================================= */}

        <div className="wd-head-visual">

          <div className="wd-hero-frame">

            <span
              className="wd-hero-backdrop"
              aria-hidden="true"
            />

            <img
              src={HERO_IMG}
              alt="Why Choose Dropshy"
              loading="lazy"
            />

            <span
              className="wd-hero-glow"
              aria-hidden="true"
            />

          </div>

          <div className="wd-hero-badge">

            <span
              className="wd-hero-badge-ico"
              aria-hidden="true"
            >
              <svg
                viewBox="0 0 24 24"
                width="16"
                height="16"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M3 13h10V6H3zM13 9h4l4 4v3h-8z" />
              </svg>
            </span>

            <div>
              <b>0 stock</b>
              <span>held by you, ever</span>
            </div>

          </div>

        </div>

      </div>

      {/* ================================
          PILLARS
      ================================= */}

      <div
        className="wd-pillars"
        ref={setRef(1)}
      >
        {PILLARS.map((p, i) => (
          <article
            key={p.tag}
            className="wd-pillar"
            style={{
              transitionDelay:
                `${i * 0.09}s`,
            }}
            onMouseMove={tilt}
            onMouseLeave={untilt}
          >

            <div className="wd-pillar-media">

              <img
                src={p.img}
                alt={p.title}
                loading="lazy"
              />

              <span
                className="wd-pillar-fade"
                aria-hidden="true"
              />

              <span
                className="wd-ico"
                aria-hidden="true"
              >
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  width="20"
                  height="20"
                >
                  <path d={p.icon} />
                </svg>
              </span>

            </div>

            <div className="wd-pillar-body">

              <span className="wd-tag">
                {p.tag}
              </span>

              <h3>{p.title}</h3>

              <p>{p.copy}</p>

            </div>

          </article>
        ))}
      </div>

      {/* ================================
          TICKER
      ================================= */}

      <div
        className="wd-ticker"
        ref={setRef(2)}
      >
        <div className="wd-ticker-track">

          {marquee.map((r, i) => (
            <span
              className="chip"
              key={`${r}-${i}`}
            >
              <span className="wd-tick">
                <Tick />
              </span>

              {r}
            </span>
          ))}

        </div>
      </div>

      {/* ================================
          BUSINESS BELT
      ================================= */}

      <div
        className="wd-belt"
        ref={setRef(3)}
      >

        <div className="wd-belt-head">

          <h3>

            <span
              className="wd-heart"
              aria-hidden="true"
            >
              <svg
                viewBox="0 0 24 24"
                width="20"
                height="20"
                fill="currentColor"
              >
                <path d="M12 21s-7.5-4.7-9.5-9A5.3 5.3 0 0 1 12 6.2 5.3 5.3 0 0 1 21.5 12c-2 4.3-9.5 9-9.5 9z" />
              </svg>
            </span>

            Smart business. Smarter future.

          </h3>

          <p>
            Why invest lakhs in inventory when you
            can start an online business with almost
            no operational risk?
          </p>

        </div>

        <div className="wd-rail">

          <div className="rail-line">
            <span
              className="parcel"
              aria-hidden="true"
            />
          </div>

          <div className="rail-steps">

            <div className="step us">
              <b>Dropshy handles it</b>
              Products, inventory, fulfilment
              &amp; shipping
            </div>

            <div className="step">
              <b>You focus on selling</b>
              Across India &amp; worldwide
              marketplaces
            </div>

            <div className="step">
              <b>You earn the profits</b>
              High-margin orders, zero dead stock
            </div>

          </div>

        </div>

        <div className="wd-foot">

          <div className="wd-foot-copy">
            <b>Start Today</b>
            {" · "}
            Sell Across India &amp; Worldwide
            {" · "}
            Grow Without Limits
          </div>

          <button
            className="wd-cta"
            type="button"
          >

            <span
              className="glow"
              aria-hidden="true"
            />

            Get Started Free

            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="3"
              strokeLinecap="round"
              strokeLinejoin="round"
              width="14"
              height="14"
            >
              <line
                x1="5"
                y1="12"
                x2="19"
                y2="12"
              />

              <polyline points="12 5 19 12 12 19" />
            </svg>

          </button>

        </div>

      </div>

      {/* ================================
          COMPLETE CSS
      ================================= */}

      <style>{`

        /* =====================================
           ROOT
        ===================================== */

        .wd {
          --sky: #38b6ff;
          --sky-deep: #0b76c4;
          --sun: #ffc72c;
          --ink: #0f2233;
          --muted: #728496;

          position: relative;
          isolation: isolate;

          width: 100%;
          box-sizing: border-box;

          padding: 84px 26px 92px;

          background: #ffffff;
          color: var(--ink);

          overflow: hidden;

          font-family:
            'Inter',
            system-ui,
            -apple-system,
            BlinkMacSystemFont,
            "Segoe UI",
            sans-serif;
        }

        .wd *,
        .wd *::before,
        .wd *::after {
          box-sizing: border-box;
        }


        /* =====================================
           BACKGROUND
        ===================================== */

        .wd-aurora {
          display: none;
        }

        .wd-aurora .blob {
          position: absolute;
          border-radius: 50%;
          filter: blur(70px);
          opacity: .55;
        }

        .b1 {
          width: 460px;
          height: 460px;
          background: rgba(56,182,255,.55);
          top: -140px;
          left: -80px;
          animation: float1 16s ease-in-out infinite;
        }

        .b2 {
          width: 400px;
          height: 400px;
          background: rgba(255,199,44,.5);
          bottom: -150px;
          right: -60px;
          animation: float2 19s ease-in-out infinite;
        }

        .b3 {
          width: 340px;
          height: 340px;
          background: rgba(11,118,196,.32);
          top: 40%;
          left: 55%;
          animation: float3 22s ease-in-out infinite;
        }

        @keyframes float1 {
          0%,100% {
            transform: translate(0,0) scale(1);
          }

          50% {
            transform: translate(70px,50px) scale(1.12);
          }
        }

        @keyframes float2 {
          0%,100% {
            transform: translate(0,0) scale(1);
          }

          50% {
            transform: translate(-80px,-40px) scale(1.15);
          }
        }

        @keyframes float3 {
          0%,100% {
            transform: translate(0,0) scale(1);
          }

          50% {
            transform: translate(-60px,60px) scale(.9);
          }
        }


        /* =====================================
           SCROLL REVEAL
        ===================================== */

        .wd-head,
        .wd-pillars,
        .wd-ticker,
        .wd-belt {
          opacity: 0;
          transform: translateY(26px);

          transition:
            opacity .8s ease,
            transform .8s cubic-bezier(.2,.7,.3,1);
        }

        .wd .is-in {
          opacity: 1;
          transform: translateY(0);
        }


        /* =====================================
           HERO LAYOUT
        ===================================== */

        .wd-head {
          width: 100%;
          max-width: 1180px;

          margin: 0 auto 70px;

          display: grid;

          grid-template-columns:
            minmax(0, 1.02fr)
            minmax(0, .98fr);

          align-items: center;

          gap: 70px;
        }

        .wd-head-copy {
          min-width: 0;
          text-align: left;
        }


        /* =====================================
           EYEBROW
        ===================================== */

        .wd-eyebrow {
          display: inline-flex;
          align-items: center;
          gap: 8px;

          padding: 7px 15px;

          border-radius: 999px;

          border:
            1px solid
            rgba(56,182,255,.35);

          background:
            rgba(255,255,255,.75);

          backdrop-filter: blur(8px);

          font-size: 11.5px;
          font-weight: 700;

          letter-spacing: 2.2px;

          text-transform: uppercase;

          color: var(--sky-deep);
        }

        .wd-dot {
          width: 8px;
          height: 8px;

          flex: 0 0 8px;

          border-radius: 50%;

          background: var(--sun);

          animation:
            pulse 2.2s ease-out infinite;
        }

        @keyframes pulse {

          0% {
            box-shadow:
              0 0 0 0
              rgba(255,199,44,.75);
          }

          70% {
            box-shadow:
              0 0 0 11px
              rgba(255,199,44,0);
          }

          100% {
            box-shadow:
              0 0 0 0
              rgba(255,199,44,0);
          }

        }


        /* =====================================
           HERO TITLE
        ===================================== */

        .wd-title {
          margin: 20px 0 14px;

          font-size: clamp(34px, 4vw, 48px);

          line-height: 1.16;

          font-weight: 500;

          letter-spacing: -1.3px;

          color: #5b6b7a;
        }

        .wd-title .w {
          display: inline-block;

          opacity: 0;

          transform:
            translateY(18px)
            rotate(2deg);

          animation:
            word .7s
            cubic-bezier(.2,.7,.3,1)
            forwards;
        }

        @keyframes word {

          to {
            opacity: 1;

            transform:
              translateY(0)
              rotate(0);
          }

        }

        .wd-title .grad {
          font-weight: 800;

          background:
            linear-gradient(
              100deg,
              var(--sky-deep),
              var(--sky) 45%,
              var(--sun) 90%
            );

          background-size: 220% 100%;

          -webkit-background-clip: text;
          background-clip: text;

          color: transparent;

          animation:
            word .7s
            cubic-bezier(.2,.7,.3,1)
            forwards,
            sheen 5s linear infinite 1s;
        }

        @keyframes sheen {
          to {
            background-position: 220% 0;
          }
        }


        /* =====================================
           HERO DESCRIPTION
        ===================================== */

        .wd-lede {
          margin: 0;

          max-width: 590px;

          font-size: 15.5px;

          line-height: 1.8;

          color: var(--muted);
        }


        /* =====================================
           STATS
        ===================================== */

        .wd-stats {
          display: flex;

          flex-wrap: wrap;

          gap: 12px;

          margin-top: 28px;
        }

        .wd-stat {
          display: flex;

          flex-direction: column;

          align-items: flex-start;

          gap: 2px;

          min-width: 148px;

          padding: 14px 18px;

          border-radius: 16px;

          border:
            1px solid
            rgba(56,182,255,.22);

          background:
            rgba(255,255,255,.82);

          backdrop-filter: blur(8px);

          box-shadow:
            0 10px 26px -18px
            rgba(11,118,196,.8);

          transition:
            transform .25s ease,
            box-shadow .25s ease;
        }

        .wd-stat:hover {
          transform: translateY(-4px);

          box-shadow:
            0 18px 30px -18px
            rgba(255,199,44,.9);
        }

        .wd-count {
          font-size: 26px;

          font-weight: 800;

          letter-spacing: -.6px;

          color: var(--sky-deep);
        }

        .wd-stat span:last-child {
          font-size: 12px;

          font-weight: 600;

          color: var(--muted);
        }


        /* =====================================
           HERO IMAGE (FIXED)
        ===================================== */

        .wd-head-visual {
          position: relative;

          width: 100%;

          min-width: 0;

          display: flex;

          align-items: center;

          justify-content: center;
        }

        .wd-hero-frame {
          position: relative;

          width: 100%;

          max-width: 560px;

          /*
             4:3 fits most product/hero
             screenshots better than 16:10 —
             less empty side space.
          */
          aspect-ratio: 4 / 3;

          overflow: hidden;

          border-radius: 26px;

          background: #ffffff;

          border:
            1px solid
            rgba(56,182,255,.18);

          box-shadow:
            0 24px 55px -28px
            rgba(11,118,196,.55);

          display: flex;

          align-items: center;

          justify-content: center;

          padding: 18px;
        }

        .wd-hero-backdrop {
          position: absolute;

          inset: 0;

          background:
            radial-gradient(
              120% 100% at 30% 20%,
              rgba(56,182,255,.14),
              transparent 60%
            ),
            radial-gradient(
              100% 90% at 90% 90%,
              rgba(255,199,44,.16),
              transparent 60%
            );
        }

        .wd-hero-frame img {
          position: relative;
          z-index: 1;

          width: 100%;

          height: 100%;

          display: block;

          /*
             IMPORTANT:
             contain keeps the entire
             uploaded PNG visible.
          */
          object-fit: contain;

          object-position: center;

          border-radius: 14px;

          transition:
            transform .5s ease,
            filter .5s ease;
        }

        .wd-hero-frame:hover img {
          transform: scale(1.025);
        }

        .wd-hero-glow {
          position: absolute;

          inset: 0;

          pointer-events: none;

          background:
            linear-gradient(
              135deg,
              rgba(56,182,255,.05),
              transparent 45%
            ),
            linear-gradient(
              0deg,
              rgba(15,34,51,.03),
              transparent 50%
            );

          border-radius: 26px;
        }


        /* =====================================
           HERO BADGE
        ===================================== */

        .wd-hero-badge {
          position: absolute;

          left: -22px;

          bottom: -20px;

          display: flex;

          align-items: center;

          gap: 10px;

          padding: 12px 16px;

          border-radius: 16px;

          background:
            rgba(255,255,255,.98);

          border:
            1px solid
            rgba(56,182,255,.18);

          box-shadow:
            0 16px 35px -18px
            rgba(11,118,196,.55);

          z-index: 5;
        }

        .wd-hero-badge-ico {
          display: grid;

          place-items: center;

          width: 36px;
          height: 36px;

          flex: 0 0 36px;

          border-radius: 11px;

          background:
            linear-gradient(
              135deg,
              var(--sun),
              #ffe08a
            );

          color: #0b3a5c;
        }

        .wd-hero-badge b {
          display: block;

          font-size: 14px;

          line-height: 1.3;

          color: #14324a;
        }

        .wd-hero-badge span {
          display: block;

          margin-top: 2px;

          font-size: 11.5px;

          line-height: 1.3;

          color: var(--muted);
        }


        /* =====================================
           PILLARS
        ===================================== */

        .wd-pillars {
          max-width: 1180px;

          margin: 0 auto 26px;

          perspective: 1100px;

          display: grid;

          grid-template-columns:
            repeat(4, 1fr);

          gap: 16px;
        }

        .wd-pillar {
          position: relative;

          overflow: hidden;

          border-radius: 20px;

          border:
            1px solid
            rgba(56,182,255,.2);

          background:
            rgba(255,255,255,.9);

          box-shadow:
            0 14px 34px -26px
            rgba(11,118,196,.9);

          transform:
            rotateX(var(--rx,0))
            rotateY(var(--ry,0));

          transform-style: preserve-3d;

          transition:
            transform .25s ease,
            border-color .25s ease,
            box-shadow .25s ease,
            opacity .8s ease;
        }

        .wd-pillar:hover {
          border-color:
            rgba(255,199,44,.7);

          box-shadow:
            0 24px 44px -24px
            rgba(11,118,196,.75);
        }

        .wd-pillar-media {
          position: relative;

          height: 128px;

          overflow: hidden;
        }

        .wd-pillar-media img {
          width: 100%;
          height: 100%;

          object-fit: cover;

          display: block;

          transition:
            transform .5s
            cubic-bezier(.2,.7,.3,1);
        }

        .wd-pillar:hover
        .wd-pillar-media img {
          transform: scale(1.08);
        }

        .wd-pillar-fade {
          position: absolute;

          inset: 0;

          background:
            linear-gradient(
              180deg,
              rgba(11,54,84,.05),
              rgba(11,54,84,.55)
            );
        }

        .wd-pillar-body {
          padding: 18px 20px 22px;
        }

        .wd-ico {
          position: absolute;

          left: 14px;
          bottom: -18px;

          display: grid;

          place-items: center;

          width: 42px;
          height: 42px;

          border-radius: 13px;

          color: #0b3a5c;

          background:
            linear-gradient(
              135deg,
              var(--sun),
              #ffe08a
            );

          border: 3px solid #fff;

          box-shadow:
            0 8px 18px -8px
            rgba(11,54,84,.6);

          transition:
            transform .35s
            cubic-bezier(.2,.7,.3,1);
        }

        .wd-pillar:hover .wd-ico {
          transform:
            translateY(-3px)
            rotate(-8deg)
            scale(1.06);
        }

        .wd-tag {
          display: block;

          margin: 8px 0 6px;

          font-size: 10.5px;

          font-weight: 800;

          letter-spacing: 1.8px;

          text-transform: uppercase;

          color: #9bb0c2;
        }

        .wd-pillar h3 {
          margin: 0 0 8px;

          font-size: 15.5px;

          font-weight: 800;

          color: #14324a;

          letter-spacing: -.3px;

          line-height: 1.35;
        }

        .wd-pillar p {
          margin: 0;

          font-size: 13.5px;

          line-height: 1.65;

          color: var(--muted);
        }


        /* =====================================
           TICKER
        ===================================== */

        .wd-ticker {
          width: 100%;

          max-width: none;

          margin: 0 0 30px;

          padding: 8px 0;

          background: transparent;

          border: none;

          border-radius: 0;

          box-shadow: none;

          overflow: hidden;
        }

        .wd-ticker-track {
          display: flex;

          gap: 12px;

          width: max-content;

          animation:
            slide 38s linear infinite;
        }

        .wd-ticker:hover
        .wd-ticker-track {
          animation-play-state: paused;
        }

        @keyframes slide {
          from {
            transform: translateX(0);
          }

          to {
            transform: translateX(-50%);
          }
        }

        .chip {
          display: inline-flex;

          align-items: center;

          gap: 9px;

          white-space: nowrap;

          padding: 10px 18px;

          border-radius: 999px;

          background: #fff;

          border: 1px solid #e5e9ed;

          font-size: 13px;

          font-weight: 700;

          color: #243746;

          box-shadow:
            0 4px 12px
            rgba(15,34,51,.07);

          transition:
            transform .25s ease,
            border-color .25s ease,
            box-shadow .25s ease;
        }

        .chip:hover {
          transform: translateY(-2px);

          border-color: var(--sun);

          box-shadow:
            0 8px 18px
            rgba(15,34,51,.09);
        }

        .wd-tick {
          flex: 0 0 20px;

          width: 20px;
          height: 20px;

          border-radius: 50%;

          display: grid;

          place-items: center;

          color: #0b3a5c;

          background:
            linear-gradient(
              135deg,
              var(--sun),
              #ffe08a
            );
        }


        /* =====================================
           BELT
        ===================================== */

        .wd-belt {
          max-width: 1180px;

          margin: 0 auto;

          padding: 34px 32px 28px;

          border-radius: 24px;

          border:
            1px solid
            rgba(56,182,255,.26);

          background:
            rgba(255,255,255,.86);

          backdrop-filter: blur(10px);

          box-shadow:
            0 30px 60px -40px
            rgba(11,118,196,.9);
        }

        .wd-belt-head {
          text-align: center;

          margin-bottom: 26px;
        }

        .wd-belt-head h3 {
          margin: 0 0 8px;

          font-size: 23px;

          font-weight: 800;

          letter-spacing: -.5px;

          display: inline-flex;

          align-items: center;

          gap: 9px;
        }

        .wd-heart {
          display: inline-flex;

          color: var(--sky-deep);

          animation:
            beat 2.4s
            ease-in-out infinite;
        }

        @keyframes beat {

          0%,100% {
            transform: scale(1);
          }

          50% {
            transform: scale(1.18);
          }

        }

        .wd-belt-head p {
          margin: 0 auto;

          max-width: 620px;

          font-size: 14.5px;

          line-height: 1.7;

          color: #5b6b7a;
        }

        .wd-rail {
          position: relative;
        }

        .rail-line {
          position: relative;

          height: 3px;

          border-radius: 3px;

          margin: 0 6% 20px;

          background:
            repeating-linear-gradient(
              to right,
              rgba(56,182,255,.5) 0 8px,
              transparent 8px 16px
            );
        }

        .parcel {
          position: absolute;

          top: 50%;

          width: 14px;
          height: 14px;

          margin-top: -7px;

          border-radius: 4px;

          background:
            linear-gradient(
              135deg,
              var(--sun),
              #ffb703
            );

          box-shadow:
            0 0 14px 3px
            rgba(255,199,44,.75);

          animation:
            travel 6s
            cubic-bezier(.5,0,.5,1)
            infinite;
        }

        @keyframes travel {

          0% {
            left: 0;
            opacity: 0;
            transform: rotate(0deg);
          }

          8% {
            opacity: 1;
          }

          92% {
            opacity: 1;
          }

          100% {
            left: 100%;
            opacity: 0;
            transform: rotate(320deg);
          }

        }

        .rail-steps {
          display: grid;

          grid-template-columns:
            repeat(3, 1fr);

          gap: 14px;
        }

        .step {
          display: flex;

          flex-direction: column;

          gap: 4px;

          padding: 18px;

          border-radius: 16px;

          font-size: 13px;

          color: var(--muted);

          background: #fff;

          border:
            1px solid
            rgba(56,182,255,.22);

          transition:
            transform .25s ease,
            box-shadow .25s ease,
            border-color .25s ease;
        }

        .step b {
          font-size: 15px;

          font-weight: 800;

          color: #14324a;
        }

        .step:hover {
          transform: translateY(-5px);

          border-color: var(--sun);

          box-shadow:
            0 18px 32px -22px
            rgba(255,199,44,.95);
        }

        .step.us {
          background:
            linear-gradient(
              135deg,
              var(--sky-deep),
              var(--sky)
            );

          border-color: transparent;

          color:
            rgba(255,255,255,.86);
        }

        .step.us b {
          color: #fff;
        }


        /* =====================================
           FOOTER CTA
        ===================================== */

        .wd-foot {
          display: flex;

          flex-wrap: wrap;

          align-items: center;

          justify-content: space-between;

          gap: 22px;

          margin-top: 30px;

          padding: 22px 24px;

          background: #f8fafc;

          border: 1px solid #e5eaf0;

          border-radius: 18px;

          box-shadow:
            0 10px 30px
            rgba(15,34,51,.06);
        }

        .wd-foot-copy {
          font-size: 13.5px;

          color: #647586;

          line-height: 1.6;
        }

        .wd-foot-copy b {
          color: #14324a;

          font-size: 15px;
        }

        .wd-cta {
          position: relative;

          overflow: hidden;

          display: inline-flex;

          align-items: center;

          justify-content: center;

          gap: 10px;

          cursor: pointer;

          padding: 14px 24px;

          border: none;

          border-radius: 12px;

          white-space: nowrap;

          font-size: 14px;

          font-weight: 800;

          color: #fff;

          background: #14324a;

          box-shadow:
            0 10px 24px
            rgba(20,50,74,.22);

          transition:
            transform .25s ease,
            box-shadow .25s ease,
            background .25s ease;
        }

        .wd-cta:hover {
          transform:
            translateY(-2px)
            scale(1.02);

          background:
            linear-gradient(
              100deg,
              var(--sky),
              var(--sun)
            );

          box-shadow:
            0 20px 34px -14px
            rgba(255,199,44,.95);
        }

        .wd-cta .glow {
          position: absolute;

          top: 0;
          bottom: 0;

          width: 40%;

          background:
            linear-gradient(
              90deg,
              transparent,
              rgba(255,255,255,.25),
              transparent
            );

          animation:
            sweep 2.8s
            ease-in-out infinite;
        }

        @keyframes sweep {

          0% {
            left: -60%;
          }

          60%,100% {
            left: 120%;
          }

        }


        /* =====================================
           TABLET
        ===================================== */

        @media (max-width: 1020px) {

          .wd-pillars {
            grid-template-columns:
              repeat(2, 1fr);
          }

          .wd-head {
            gap: 45px;
          }

        }


        /* =====================================
           MOBILE / TABLET HERO
        ===================================== */

        @media (max-width: 940px) {

          .wd {
            padding:
              65px 22px 75px;
          }

          .wd-head {
            grid-template-columns: 1fr;

            text-align: center;

            gap: 35px;

            margin-bottom: 60px;
          }

          .wd-head-copy {
            text-align: center;
          }

          .wd-title {
            max-width: 700px;

            margin-left: auto;
            margin-right: auto;
          }

          .wd-lede {
            margin: 0 auto;
          }

          .wd-stats {
            justify-content: center;
          }

          .wd-head-visual {
            width: 100%;

            max-width: 620px;

            margin:
              5px auto 35px;
          }

          .wd-hero-frame {
            width: 100%;

            max-width: 600px;

            aspect-ratio: 4 / 3;

            margin: 0 auto;
          }

          .wd-hero-badge {
            left: 50%;

            bottom: -20px;

            transform:
              translateX(-50%);

            white-space: nowrap;
          }

        }


        /* =====================================
           SMALL TABLET
        ===================================== */

        @media (max-width: 900px) {

          .wd-title {
            font-size: 34px;
          }

          .rail-steps {
            grid-template-columns: 1fr;
          }

          .rail-line {
            margin:
              0 0 18px;
          }

        }


        /* =====================================
           MOBILE
        ===================================== */

        @media (max-width: 560px) {

          .wd {
            padding:
              52px 14px 62px;
          }

          .wd-eyebrow {
            max-width: 100%;

            padding:
              7px 11px;

            font-size: 9.5px;

            letter-spacing: 1.3px;
          }

          .wd-title {
            font-size: 27px;

            line-height: 1.2;

            letter-spacing: -.8px;
          }

          .wd-lede {
            font-size: 14px;

            line-height: 1.7;
          }

          .wd-stats {
            gap: 8px;

            margin-top: 22px;
          }

          .wd-stat {
            min-width: 0;

            flex: 1 1 30%;

            padding:
              11px 10px;

            border-radius: 13px;
          }

          .wd-count {
            font-size: 21px;
          }

          .wd-stat span:last-child {
            font-size: 10px;
          }


          /* HERO IMAGE */

          .wd-head-visual {
            width: 100%;

            max-width: 100%;

            margin:
              8px auto 42px;
          }

          .wd-hero-frame {
            width: 100%;

            max-width: 100%;

            /*
              Keep a clean mobile
              banner ratio.
            */
            aspect-ratio: 4 / 3;

            border-radius: 20px;

            padding: 14px;
          }

          .wd-hero-frame img {
            width: 100%;
            height: 100%;

            object-fit: contain;

            border-radius: 12px;
          }

          .wd-hero-glow {
            border-radius: 20px;
          }

          .wd-hero-badge {
            left: 50%;

            bottom: -18px;

            max-width:
              calc(100% - 20px);

            padding:
              9px 12px;

            border-radius: 13px;

            gap: 8px;
          }

          .wd-hero-badge-ico {
            width: 32px;
            height: 32px;

            flex-basis: 32px;
          }

          .wd-hero-badge b {
            font-size: 12px;
          }

          .wd-hero-badge span {
            font-size: 10px;
          }


          /* PILLARS */

          .wd-pillars {
            grid-template-columns: 1fr;

            gap: 14px;
          }

          .wd-pillar-media {
            height: 145px;
          }

          .wd-pillar-body {
            padding:
              18px 18px 21px;
          }


          /* TICKER */

          .wd-ticker {
            margin-bottom: 24px;
          }

          .chip {
            padding:
              9px 14px;

            font-size: 12px;
          }


          /* BELT */

          .wd-belt {
            padding:
              25px 16px 20px;

            border-radius: 20px;
          }

          .wd-belt-head h3 {
            font-size: 19px;
          }

          .wd-belt-head p {
            font-size: 13px;
          }

          .step {
            padding: 15px;

            font-size: 12.5px;
          }

          .step b {
            font-size: 14px;
          }

          .wd-foot {
            flex-direction: column;

            align-items: stretch;

            text-align: center;

            padding:
              18px 16px;
          }

          .wd-cta {
            width: 100%;
          }

        }


        /* =====================================
           VERY SMALL MOBILE
        ===================================== */

        @media (max-width: 380px) {

          .wd {
            padding-left: 12px;
            padding-right: 12px;
          }

          .wd-title {
            font-size: 24px;
          }

          .wd-stat {
            padding:
              10px 8px;
          }

          .wd-count {
            font-size: 19px;
          }

          .wd-stat span:last-child {
            font-size: 9px;
          }

          .wd-hero-frame {
            aspect-ratio: 4 / 3;

            border-radius: 17px;

            padding: 10px;
          }

          .wd-hero-frame img {
            border-radius: 10px;
          }

          .wd-hero-glow {
            border-radius: 17px;
          }

        }


        /* =====================================
           REDUCED MOTION
        ===================================== */

        @media (prefers-reduced-motion: reduce) {

          .wd-head,
          .wd-pillars,
          .wd-ticker,
          .wd-belt,
          .wd-title .w {
            opacity: 1;

            transform: none;

            transition: none;

            animation: none;
          }

          .blob,
          .grid,
          .parcel,
          .wd-dot,
          .wd-heart,
          .wd-ticker-track,
          .wd-cta .glow {
            animation: none;
          }

        }

      `}</style>

    </section>
  );
}