import { useEffect, useRef, useState } from "react";
import sellerBanner from "../../assets/images/SELLOR.png";
/* Simple illustration icons for the process section */
const IconSketch = () => (
  <svg width="34" height="34" viewBox="0 0 48 48" fill="none">
    <circle cx="24" cy="24" r="22" fill="#e5f4fa" />
    <rect
      x="14"
      y="12"
      width="16"
      height="21"
      rx="2"
      fill="#fff"
      stroke="#0d8ec4"
      strokeWidth="2"
    />
    <path
      d="M18 18h8M18 22h8M18 26h5"
      stroke="#0d8ec4"
      strokeWidth="1.6"
      strokeLinecap="round"
    />
    <circle
      cx="30"
      cy="30"
      r="6"
      fill="#fff"
      stroke="#F59A1B"
      strokeWidth="2"
    />
    <path
      d="M34.2 34.2 37 37"
      stroke="#F59A1B"
      strokeWidth="2.2"
      strokeLinecap="round"
    />
  </svg>
);

const IconFrame = () => (
  <svg width="34" height="34" viewBox="0 0 48 48" fill="none">
    <circle cx="24" cy="24" r="22" fill="#e5f4fa" />
    <rect x="10" y="14" width="28" height="20" rx="3" fill="#0d3f57" />
    <path
      d="M17 21l-4 3 4 3"
      stroke="#5cc4ec"
      strokeWidth="2.2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M31 21l4 3-4 3"
      stroke="#5cc4ec"
      strokeWidth="2.2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M26 19l-4 10"
      stroke="#F59A1B"
      strokeWidth="2.2"
      strokeLinecap="round"
    />
  </svg>
);

const IconCheck = () => (
  <svg width="34" height="34" viewBox="0 0 48 48" fill="none">
    <circle cx="24" cy="24" r="22" fill="#e5f4fa" />
    <path
      d="M24 10l12 4v9c0 8-5 13-12 15-7-2-12-7-12-15v-9l12-4Z"
      fill="#fff"
      stroke="#0d8ec4"
      strokeWidth="2"
      strokeLinejoin="round"
    />
    <path
      d="M18.5 24 22.5 28 30 20"
      stroke="#F59A1B"
      strokeWidth="2.6"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const IconLaunch = () => (
  <svg width="34" height="34" viewBox="0 0 48 48" fill="none">
    <circle cx="24" cy="24" r="22" fill="#e5f4fa" />
    <circle
      cx="24"
      cy="26"
      r="10"
      fill="none"
      stroke="#0d8ec4"
      strokeWidth="2"
    />
    <path
      d="M14 26h20M24 16c3 3 4 7 4 10s-1 7-4 10c-3-3-4-7-4-10s1-7 4-10Z"
      stroke="#0d8ec4"
      strokeWidth="1.5"
      fill="none"
    />
    <path
      d="M24 10v6M21 12l3 4 3-4"
      stroke="#F59A1B"
      strokeWidth="2.2"
      strokeLinecap="round"
      strokeLinejoin="round"
      fill="none"
    />
  </svg>
);

const STEPS = [
  {
    code: "STEP / 01",
    title: "Plan the idea",
    sub: "Discovery",
    text: "We understand your goals, audience, and requirements before starting the actual work.",
    nextLabel: "Next step",
    icon: <IconSketch />,
  },
  {
    code: "STEP / 02",
    title: "Build the structure",
    sub: "Development",
    text: "The layout, content, and important features are organized into a clear and usable structure.",
    nextLabel: "Next step",
    icon: <IconFrame />,
  },
  {
    code: "STEP / 03",
    title: "Test everything",
    sub: "Quality Check",
    text: "We review the complete experience, fix issues, and make sure everything works smoothly.",
    nextLabel: "Next step",
    icon: <IconCheck />,
  },
  {
    code: "STEP / 04",
    title: "Launch the project",
    sub: "Launch",
    text: "Once everything is ready, the final project goes live and is prepared for real users.",
    nextLabel: "Completed",
    icon: <IconLaunch />,
  },
];

const TOKENS = `
  .procedure-section {
    --sky: #11A7E6;
    --sky-dark: #0d8ec4;
    --sky-light: #5cc4ec;
    --sky-pale: #e5f4fa;
    --navy: #0d3f57;
    --navy-dark: #082f3f;
    --yellow: #F59A1B;
    --yellow-dark: #d6820a;
    --white: #ffffff;
    --ink: #103450;
    --ink-soft: #3c5a72;
    --ink-muted: #648097;
    --line: #D9E1E3;

    --shadow-lg: 0 24px 60px -24px rgba(12, 59, 94, 0.22);
    --shadow-sm: 0 8px 24px -12px rgba(12, 59, 94, 0.14);

    --font-display: "Sora", "Segoe UI", sans-serif;
    --font-body: "Inter", "Segoe UI", sans-serif;

    position: relative;
    width: 100%;
    min-width: 100%;
    background: linear-gradient(
      180deg,
      #ffffff 0%,
      #F4F8FA 55%,
      #e5f4fa 100%
    );

    color: var(--ink);
    padding: 100px 40px;
    overflow: hidden;
    font-family: var(--font-body);
  }

  .procedure-section *,
  .procedure-section *::before,
  .procedure-section *::after {
    box-sizing: border-box;
  }

  .procedure-bg {
    position: absolute;
    border-radius: 50%;
    filter: blur(90px);
    pointer-events: none;
    z-index: 0;
  }

  .procedure-bg-one {
    width: 480px;
    height: 480px;
    top: -140px;
    right: -120px;

    background: radial-gradient(
      circle,
      rgba(92,196,236,0.38) 0%,
      rgba(17,167,230,0.10) 45%,
      transparent 70%
    );

    animation: driftOne 18s ease-in-out infinite;
  }

  .procedure-bg-two {
    width: 420px;
    height: 420px;
    bottom: -100px;
    left: -140px;

    background: radial-gradient(
      circle,
      rgba(245,154,27,0.18) 0%,
      rgba(253,234,208,0.28) 45%,
      transparent 70%
    );

    animation: driftTwo 22s ease-in-out infinite;
  }

  @keyframes driftOne {
    0%,
    100% {
      transform: translate(0,0) scale(1);
    }

    50% {
      transform: translate(-30px,40px) scale(1.08);
    }
  }

  @keyframes driftTwo {
    0%,
    100% {
      transform: translate(0,0) scale(1);
    }

    50% {
      transform: translate(40px,-30px) scale(1.06);
    }
  }

  .procedure-grid-overlay {
    position: absolute;
    inset: 0;
    z-index: 0;
    opacity: 0.30;

    background-image:
      linear-gradient(var(--line) 1px, transparent 1px),
      linear-gradient(90deg, var(--line) 1px, transparent 1px);

    background-size: 64px 64px;

    mask-image: radial-gradient(
      ellipse at center,
      black 0%,
      transparent 75%
    );

    -webkit-mask-image: radial-gradient(
      ellipse at center,
      black 0%,
      transparent 75%
    );
  }

  /* FULL WIDTH CONTAINER */
  .procedure-container {
    position: relative;
    z-index: 1;

    width: 100%;
    max-width: none;

    margin: 0 auto;
  }

  .procedure-heading {
    text-align: center;

    width: 100%;
    max-width: 720px;

    margin: 0 auto 64px;
  }

  .procedure-badge {
    display: inline-flex;
    align-items: center;
    gap: 8px;

    padding: 7px 16px;

    border-radius: 999px;

    background: rgba(229,244,250,0.65);

    border: 1px solid rgba(17,167,230,0.22);

    font-size: 11px;
    letter-spacing: 0.14em;
    font-weight: 700;

    text-transform: uppercase;

    color: var(--sky-dark);

    box-shadow: 0 6px 20px rgba(17,167,230,0.08);
  }

  .badge-dot {
    width: 7px;
    height: 7px;

    border-radius: 50%;

    background: var(--yellow);

    animation: badgePulse 2.2s ease-out infinite;
  }

  @keyframes badgePulse {
    0% {
      box-shadow: 0 0 0 0 rgba(245,154,27,0.55);
    }

    70% {
      box-shadow: 0 0 0 8px rgba(245,154,27,0);
    }

    100% {
      box-shadow: 0 0 0 0 rgba(245,154,27,0);
    }
  }

  .procedure-heading h2 {
    font-family: var(--font-display);

    font-size: clamp(34px, 5vw, 52px);

    font-weight: 800;

    line-height: 1.08;

    letter-spacing: -0.025em;

    color: var(--navy);

    margin: 18px 0 14px;
  }

  .procedure-heading h2 span {
    background: linear-gradient(
      90deg,
      var(--sky-dark),
      var(--sky) 55%,
      var(--yellow-dark)
    );

    -webkit-background-clip: text;
    background-clip: text;

    color: transparent;
  }

  .procedure-heading p {
    color: var(--ink-soft);

    font-size: 16.5px;

    line-height: 1.7;

    max-width: 620px;

    margin: 0 auto;
  }

  /* TIMELINE */
  .procedure-timeline {
    position: relative;

    width: 100%;

    padding: 40px 0 0;

    overflow: visible;
  }

  .timeline-track {
    position: relative;

    width: 100%;

    display: grid;

    grid-template-columns:
      repeat(4, minmax(0, 1fr));

    align-items: start;

    padding: 0 12px 24px;

    gap: 0;
  }

  .timeline-line {
    position: absolute;

    left: 12.5%;
    right: 12.5%;

    top: 26px;

    height: 3px;

    background: repeating-linear-gradient(
      to right,
      var(--line) 0,
      var(--line) 8px,
      transparent 8px,
      transparent 16px
    );

    border-radius: 3px;

    z-index: 0;
  }

  .timeline-progress {
    position: absolute;

    top: 26px;

    left: 12.5%;

    height: 3px;

    width: 0%;

    max-width: 75%;

    background: linear-gradient(
      to right,
      var(--sky-dark),
      var(--sky),
      var(--yellow)
    );

    border-radius: 3px;

    transition: width 0.15s linear;

    z-index: 1;
  }

  .route-marker {
    position: relative;

    z-index: 3;

    width: 52px;
    height: 52px;

    margin: 0 auto;

    display: flex;

    align-items: center;
    justify-content: center;

    border-radius: 50%;

    background: var(--navy);

    color: var(--white);

    font-family: var(--font-display);

    font-weight: 700;

    font-size: 15px;

    box-shadow:
      0 10px 25px rgba(12,59,94,0.16);

    transition:
      background 0.2s ease,
      transform 0.3s ease;
  }

  .route-marker.is-active {
    background: var(--sky);
  }

  .route-marker-pulse {
    position: absolute;

    inset: -6px;

    border-radius: 50%;

    border: 2px solid var(--sky);

    opacity: 0.5;

    animation: markerRing 1.8s ease-out infinite;
  }

  @keyframes markerRing {
    0% {
      transform: scale(0.8);
      opacity: 0.6;
    }

    100% {
      transform: scale(1.5);
      opacity: 0;
    }
  }

  .procedure-col {
    position: relative;

    width: 100%;

    display: flex;

    flex-direction: column;

    align-items: center;

    padding: 0 16px;

    scroll-snap-align: start;
  }

  /* CARD FULL WIDTH */
  .procedure-card-wrapper {
    width: 100%;

    max-width: 360px;

    margin-top: 24px;
  }

  .procedure-card {
    position: relative;

    width: 100%;

    min-height: 315px;

    display: flex;

    flex-direction: column;

    background: linear-gradient(
      145deg,
      rgba(255,255,255,0.98),
      rgba(229,244,250,0.38)
    );

    border: 1px solid rgba(92,196,236,0.30);

    border-radius: 20px;

    padding: 26px 22px;

    overflow: hidden;

    box-shadow: var(--shadow-sm);

    transition:
      transform 0.4s cubic-bezier(0.16,1,0.3,1),
      box-shadow 0.4s cubic-bezier(0.16,1,0.3,1),
      border-color 0.4s ease;
  }

  .procedure-card:hover {
    transform: translateY(-6px);

    box-shadow: var(--shadow-lg);

    border-color: rgba(17,167,230,0.50);
  }

  .procedure-card:hover .procedure-icon {
    background: var(--sky);

    color: var(--white);

    transform: rotate(-8deg) scale(1.05);
  }

  .procedure-card:hover .step-label svg {
    transform: translateX(4px);
  }

  .procedure-card:hover .card-shine {
    transform: translateX(120%);
  }

  .card-top {
    display: flex;

    align-items: center;

    justify-content: space-between;

    margin-bottom: 14px;
  }

  .procedure-icon {
    width: 56px;
    height: 56px;

    border-radius: 16px;

    display: flex;

    align-items: center;
    justify-content: center;

    background: var(--sky-pale);

    color: var(--sky-dark);

    border: 1px solid rgba(17,167,230,0.15);

    transition:
      transform 0.4s cubic-bezier(0.16,1,0.3,1),
      background 0.4s ease,
      color 0.4s ease;
  }

  .waypoint-code {
    display: inline-block;

    width: fit-content;

    font-family: "JetBrains Mono", monospace;

    font-size: 10.5px;

    letter-spacing: 0.08em;

    font-weight: 600;

    color: var(--sky-dark);

    background: var(--sky-pale);

    padding: 3px 9px;

    border-radius: 6px;

    margin-bottom: 10px;
  }

  .procedure-card h3 {
    font-family: var(--font-display);

    font-size: 18px;

    line-height: 1.25;

    font-weight: 700;

    color: var(--navy);

    margin: 0 0 4px;
  }

  .procedure-card h4 {
    font-size: 13px;

    font-weight: 600;

    color: var(--sky-dark);

    margin: 0 0 10px;
  }

  .procedure-card p {
    font-size: 13.8px;

    line-height: 1.65;

    color: var(--ink-soft);

    margin: 0;
  }

  .step-label {
    display: flex;

    align-items: center;

    gap: 6px;

    font-size: 12px;

    font-weight: 700;

    color: var(--navy);

    margin-top: auto;

    padding-top: 18px;
  }

  .step-label svg {
    transition:
      transform 0.35s cubic-bezier(0.16,1,0.3,1);
  }

  .card-shine {
    position: absolute;

    top: 0;
    left: -60%;

    width: 40%;
    height: 100%;

    background: linear-gradient(
      115deg,
      transparent 0%,
      rgba(255,255,255,0.65) 50%,
      transparent 100%
    );

    transform: translateX(-120%);

    transition: transform 0.7s ease;

    pointer-events: none;
  }

  .scroll-hint {
    display: none;

    align-items: center;

    justify-content: center;

    gap: 6px;

    margin-top: 6px;

    font-size: 12px;

    font-weight: 600;

    color: var(--ink-muted);
  }

  /* CTA FULL WIDTH */
  .procedure-cta {
    position: relative;

    width: 100%;

    margin-top: 80px;

    padding: 56px 40px;

    border-radius: 26px;

    background: linear-gradient(
      135deg,
      var(--navy-dark),
      var(--navy)
    );

    color: var(--white);

    text-align: center;

    overflow: hidden;

    box-shadow:
      0 25px 60px rgba(12,59,94,0.18);
  }

  .cta-decoration {
    position: absolute;

    inset: 0;

    background:
      radial-gradient(
        circle at 20% 20%,
        rgba(17,167,230,0.32),
        transparent 55%
      ),
      radial-gradient(
        circle at 80% 80%,
        rgba(245,154,27,0.22),
        transparent 55%
      );

    animation: ctaGlow 8s ease-in-out infinite;
  }

  @keyframes ctaGlow {
    0%,
    100% {
      opacity: 0.7;
    }

    50% {
      opacity: 1;
    }
  }

  .procedure-cta h3 {
    position: relative;

    font-family: var(--font-display);

    font-size: clamp(24px,4vw,32px);

    line-height: 1.2;

    font-weight: 800;

    color: var(--white);

    margin: 0 0 12px;
  }

  .procedure-cta h3 span {
    background: linear-gradient(
      90deg,
      var(--sky-light),
      var(--yellow)
    );

    -webkit-background-clip: text;

    background-clip: text;

    color: transparent;
  }

  .procedure-cta p {
    position: relative;

    color: rgba(255,255,255,0.72);

    max-width: 480px;

    margin: 0 auto 28px;

    line-height: 1.7;
  }

  .procedure-cta button {
    position: relative;

    display: inline-flex;

    align-items: center;

    gap: 8px;

    background: linear-gradient(
      135deg,
      var(--sky),
      var(--sky-dark)
    );

    color: var(--white);

    border: none;

    padding: 14px 28px;

    border-radius: 999px;

    font-weight: 700;

    font-size: 15px;

    cursor: pointer;

    transition:
      transform 0.3s cubic-bezier(0.16,1,0.3,1),
      box-shadow 0.3s ease;

    box-shadow:
      0 12px 30px -10px rgba(17,167,230,0.55);
  }

  .procedure-cta button:hover {
    transform: translateY(-3px) scale(1.03);

    box-shadow:
      0 18px 40px -10px rgba(17,167,230,0.70);
  }

  .procedure-cta button svg {
    transition: transform 0.3s ease;
  }

  .procedure-cta button:hover svg {
    transform: translateX(4px);
  }

  /* TABLET */
  @media (max-width: 1000px) {
    .procedure-section {
      padding: 80px 24px;
    }

    .timeline-track {
      grid-template-columns:
        repeat(2, minmax(0, 1fr));

      row-gap: 45px;
    }

    .timeline-line,
    .timeline-progress {
      display: none;
    }

    .procedure-card-wrapper {
      max-width: 390px;
    }
  }

  /* MOBILE */
  @media (max-width: 650px) {
    .procedure-section {
      padding: 70px 16px;
    }

    .procedure-heading {
      padding: 0 8px;

      margin-bottom: 45px;
    }

    .procedure-heading h2 {
      font-size: 32px;

      letter-spacing: -0.02em;
    }

    .procedure-heading p {
      font-size: 15px;
    }

    .procedure-timeline {
      overflow-x: auto;

      overflow-y: hidden;

      scroll-snap-type: x proximity;

      -webkit-overflow-scrolling: touch;

      padding-bottom: 8px;
    }

    .timeline-track {
      display: grid;

      grid-auto-flow: column;

      grid-auto-columns: minmax(270px, 82vw);

      grid-template-columns: none;

      width: max-content;

      min-width: max-content;

      padding: 0 10px 24px;

      gap: 8px;
    }

    .procedure-col {
      width: 100%;

      padding: 0 8px;

      scroll-snap-align: center;
    }

    .procedure-card-wrapper {
      width: 100%;

      max-width: none;
    }

    .procedure-card {
      min-height: 300px;

      padding: 22px 18px;

      border-radius: 18px;
    }

    .procedure-card h3 {
      font-size: 17px;
    }

    .route-marker {
      width: 44px;
      height: 44px;

      font-size: 13px;
    }

    .scroll-hint {
      display: flex;
    }

    .procedure-cta {
      margin-top: 55px;

      padding: 40px 22px;

      border-radius: 22px;
    }

    .procedure-cta h3 {
      font-size: 24px;
    }
  }

  @media (prefers-reduced-motion: reduce) {
    .procedure-bg-one,
    .procedure-bg-two,
    .badge-dot,
    .route-marker-pulse,
    .cta-decoration {
      animation: none !important;
    }

    .procedure-card,
    .procedure-icon,
    .procedure-cta button {
      transition: none !important;
    }
  }
    /* =========================================================
   SELLER BANNER
========================================================= */

.seller-banner {
  width: 100%;
  margin-top: 70px;
  overflow: hidden;
  border-radius: 24px;
  position: relative;
  z-index: 2;
}

.seller-banner img {
  display: block;
  width: 100%;
  height: auto;
  max-width: 100%;
  object-fit: cover;
  border-radius: 24px;
}

/* ================= TABLET ================= */

@media (max-width: 1000px) {
  .seller-banner {
    margin-top: 55px;
    border-radius: 20px;
  }

  .seller-banner img {
    border-radius: 20px;
  }
}

/* ================= MOBILE ================= */

@media (max-width: 650px) {
  .seller-banner {
    margin-top: 45px;
    border-radius: 16px;
  }

  .seller-banner img {
    width: 100%;
    border-radius: 16px;
  }
}
`;

export default function HorizontalTimeline() {
  const timelineRef = useRef(null);

  const [progressPct, setProgressPct] = useState(0);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const el = timelineRef.current;

    if (!el) return;

    const update = () => {
      const maxScroll = el.scrollWidth - el.clientWidth;

      const pct =
        maxScroll > 0
          ? (el.scrollLeft / maxScroll) * 100
          : 100;

      setProgressPct(pct);

      const markers =
        el.querySelectorAll(".route-marker");

      const trackRect =
        el.getBoundingClientRect();

      let lastActive = 0;

      markers.forEach((m, i) => {
        const mRect =
          m.getBoundingClientRect();

        const center =
          mRect.left + mRect.width / 2;

        if (
          center <=
          trackRect.left +
            trackRect.width * (pct / 100) +
            40
        ) {
          lastActive = i;
        }
      });

      setActiveIndex(lastActive);
    };

    update();

    el.addEventListener("scroll", update);

    window.addEventListener("resize", update);

    return () => {
      el.removeEventListener("scroll", update);

      window.removeEventListener(
        "resize",
        update
      );
    };
  }, []);

  return (
    <section className="procedure-section">

      <style>{TOKENS}</style>

      <div className="procedure-bg procedure-bg-one" />

      <div className="procedure-bg procedure-bg-two" />

      <div className="procedure-grid-overlay" />

      <div className="procedure-container">

        {/* HEADING */}
        <div className="procedure-heading">

          <span className="procedure-badge">
            <span className="badge-dot" />

            How it works
          </span>

          <h2>
            From idea to{" "}
            <span>launch</span>, mapped out
          </h2>

          <p>
            A simple process that takes your project
            from the first idea to a complete,
            ready-to-use solution.
          </p>

        </div>

        {/* TIMELINE */}
        <div
          className="procedure-timeline"
          ref={timelineRef}
        >

          <div className="timeline-track">

            <div className="timeline-line" />

            <div
              className="timeline-progress"
              style={{
                width: `${progressPct}%`,
              }}
            />

            {STEPS.map((step, i) => (

              <div
                className="procedure-col"
                key={step.code}
              >

                {/* NUMBER */}
                <div
                  className={`route-marker${
                    i <= activeIndex
                      ? " is-active"
                      : ""
                  }`}
                >

                  {i + 1}

                  {i === 0 && (
                    <span className="route-marker-pulse" />
                  )}

                </div>

                {/* CARD */}
                <div className="procedure-card-wrapper">

                  <div className="procedure-card">

                    <div className="card-shine" />

                    <div className="card-top">

                      <div className="procedure-icon">
                        {step.icon}
                      </div>

                    </div>

                    <span className="waypoint-code">
                      {step.code}
                    </span>

                    <h3>
                      {step.title}
                    </h3>

                    <h4>
                      {step.sub}
                    </h4>

                    <p>
                      {step.text}
                    </p>

                    <div className="step-label">

                      {step.nextLabel}

                      {step.nextLabel ===
                      "Completed" ? (

                        <svg
                          width="14"
                          height="14"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <polyline points="20 6 9 17 4 12" />
                        </svg>

                      ) : (

                        <svg
                          width="14"
                          height="14"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <path d="M5 12h14" />

                          <path d="m12 5 7 7-7 7" />
                        </svg>

                      )}

                    </div>

                  </div>

                </div>

              </div>

            ))}

          </div>

          <div className="scroll-hint">
            ← swipe to see all steps →
          </div>

        </div>

        {/* CTA */}
       
{/* CTA */}

<div className="seller-banner">
  <img
    src={sellerBanner}
    alt="Start your e-commerce business with Dropshy"
  />
</div>

</div>

</section>
      
  );
}