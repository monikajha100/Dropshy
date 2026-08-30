import React, { useEffect, useRef, useState } from "react";

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

      {/* ================= HERO ================= */}

     

      {/* ================= STATS ================= */}

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

        <div className="success-tag-grid">

          {stats.map((item) => (
            <NumberTag
              key={item.code}
              item={item}
            />
          ))}

        </div>

      </section>

      {/* ================= WHY NUMBERS ================= */}

     

      <style>{`

        * {
          box-sizing: border-box;
        }

        .success-section {
          width: 100%;
          background: #ffffff;
          color: #16324a;
          overflow: hidden;
          font-family: "Inter", sans-serif;
        }

        /* ================= HERO ================= */

        .success-hero {
          position: relative;
          background: #ffffff;
          color: #16324a;
          padding: 70px 24px 90px;
          overflow: hidden;
        }

        .success-grid-bg {
          position: absolute;
          inset: 0;

          background-image:
            linear-gradient(
              rgba(28,111,165,.035) 1px,
              transparent 1px
            ),
            linear-gradient(
              90deg,
              rgba(28,111,165,.035) 1px,
              transparent 1px
            );

          background-size: 42px 42px;

          pointer-events: none;

          animation:
            successGridMove 20s linear infinite;
        }

        @keyframes successGridMove {
          from {
            background-position: 0 0, 0 0;
          }

          to {
            background-position: 42px 42px, 42px 42px;
          }
        }

        .success-floating-dot {
          position: absolute;

          width: 7px;
          height: 7px;

          border-radius: 50%;

          background: #3aa6e8;

          opacity: .25;

          animation: successFloat 5s ease-in-out infinite;
        }

        .dot-one {
          top: 30%;
          left: 8%;
        }

        .dot-two {
          right: 12%;
          top: 58%;

          width: 5px;
          height: 5px;

          animation-delay: 1.5s;
        }

        @keyframes successFloat {

          0%,100% {
            transform: translateY(0);
          }

          50% {
            transform: translateY(-14px);
          }

        }

        .success-hero-inner {
          position: relative;
          max-width: 1080px;
          margin: 0 auto;
        }

        /* WORDMARK */

        .success-wordmark-row {
          display: flex;
          align-items: center;
          justify-content: space-between;

          gap: 16px;

          margin-bottom: 62px;

          flex-wrap: wrap;

          opacity: 0;

          animation:
            successFadeDown .7s ease .1s
            forwards;
        }

        .success-wordmark {
          display: flex;
          align-items: center;
          gap: 10px;

          font-size: 24px;
          font-weight: 900;
          letter-spacing: .03em;

          color: #16324a;
        }

        .success-box-icon {
          width: 23px;
          height: 23px;

          border: 2px solid #1c6fa5;

          transform: rotate(45deg);

          animation:
            successIconPulse 4s ease-in-out infinite;
        }

        @keyframes successIconPulse {

          0%,100% {
            transform: rotate(45deg) scale(1);
          }

          50% {
            transform: rotate(45deg) scale(1.12);
          }

        }

        .success-route {
          padding: 7px 13px;

          border: 1px dashed #cfdde6;

          border-radius: 100px;

          font-size: 10px;
          letter-spacing: .08em;

          color: #647887;

          background: #ffffff;
        }

        /* HERO CONTENT */

        .success-hero-content {
          position: relative;

          max-width: 900px;

          margin: 0 auto;

          text-align: center;
        }

        .success-hero-content h1 {
          margin: 0 0 20px;

          font-size: clamp(
            40px,
            7vw,
            78px
          );

          line-height: 1;

          font-weight: 900;

          letter-spacing: -.035em;

          color: #16324a;

          opacity: 0;

          animation:
            successFadeUp .8s ease .25s
            forwards;
        }

        .success-hero-content h1 span {
          background:
            linear-gradient(
              90deg,
              #1c6fa5,
              #4aa9d8,
              #1c6fa5
            );

          background-size: 200% auto;

          -webkit-background-clip: text;
          background-clip: text;

          color: transparent;

          animation:
            successGradient 4s ease-in-out infinite;
        }

        @keyframes successGradient {

          0% {
            background-position: 0% center;
          }

          50% {
            background-position: 100% center;
          }

          100% {
            background-position: 0% center;
          }

        }

        .success-hero-content p {
          max-width: 620px;

          margin: 0 auto;

          font-size: 17px;

          line-height: 1.65;

          color: #71808d;

          opacity: 0;

          animation:
            successFadeUp .8s ease .45s
            forwards;
        }

        @keyframes successFadeDown {

          from {
            opacity: 0;
            transform: translateY(-12px);
          }

          to {
            opacity: 1;
            transform: translateY(0);
          }

        }

        @keyframes successFadeUp {

          from {
            opacity: 0;
            transform: translateY(18px);
          }

          to {
            opacity: 1;
            transform: translateY(0);
          }

        }

        /* STAMP */

        .success-stamp {
          position: absolute;

          top: -20px;
          right: 0;

          width: 105px;
          height: 105px;

          border: 2px solid #3aa6e8;

          border-radius: 50%;

          display: flex;
          align-items: center;
          justify-content: center;

          transform: rotate(-14deg);

          opacity: .7;

          animation:
            successStampIn .8s
            cubic-bezier(.2,1.4,.4,1)
            .5s both,
            successStampFloat 5s ease-in-out
            infinite 1.4s;
        }

        .success-stamp::before {
          content: "";

          position: absolute;

          inset: 8px;

          border: 1px dashed #9fd4ed;

          border-radius: 50%;
        }

        .success-stamp-text {
          position: relative;

          font-size: 9px;

          font-weight: 800;

          line-height: 1.5;

          letter-spacing: .12em;

          color: #1c6fa5;

          text-align: center;
        }

        @keyframes successStampIn {

          from {
            opacity: 0;
            transform:
              rotate(25deg)
              scale(.5);
          }

          to {
            opacity: .7;
            transform:
              rotate(-14deg)
              scale(1);
          }

        }

        @keyframes successStampFloat {

          0%,100% {
            transform:
              rotate(-14deg)
              translateY(0);
          }

          50% {
            transform:
              rotate(-11deg)
              translateY(-6px);
          }

        }

        /* SCAN */

        .success-scan {
          position: relative;

          height: 30px;

          max-width: 620px;

          margin: 46px auto 0;

          display: flex;

          align-items: center;

          justify-content: center;

          gap: 2px;

          overflow: hidden;
        }

        .success-scan-bar {
          width: 2px;

          border-radius: 2px;

          background: #cbdce6;
        }

        .success-scan-bar:nth-child(3n) {
          height: 28px;
        }

        .success-scan-bar:nth-child(3n + 1) {
          height: 17px;
        }

        .success-scan-bar:nth-child(3n + 2) {
          height: 23px;
        }

        .success-laser {
          position: absolute;

          top: 0;
          bottom: 0;

          left: -15%;

          width: 18%;

          background:
            linear-gradient(
              90deg,
              transparent,
              rgba(58,166,232,.35),
              transparent
            );

          animation:
            successScan 3.5s ease-in-out
            infinite;
        }

        @keyframes successScan {

          0% {
            left: -18%;
          }

          50% {
            left: 100%;
          }

          100% {
            left: -18%;
          }

        }

        /* ================= STATS ================= */

        .success-stats-section {
          position: relative;

          max-width: 1100px;

          margin: 0 auto;

          padding: 95px 24px 70px;

          background: #ffffff;
        }

        .success-heading {
          text-align: center;

          margin-bottom: 68px;
        }

        .success-eyebrow {
          font-size: 11px;

          font-weight: 800;

          letter-spacing: .18em;

          text-transform: uppercase;

          color: #1c6fa5;
        }

        .success-heading h2 {
          margin: 10px 0 8px;

          font-size: clamp(
            27px,
            4vw,
            40px
          );

          line-height: 1.1;

          font-weight: 900;

          color: #16324a;
        }

        .success-heading p {
          margin: 0;

          color: #84929d;

          font-size: 14px;
        }

        .success-rail {
          position: absolute;

          top: 192px;

          left: 8%;
          right: 8%;

          height: 1px;

          background:
            repeating-linear-gradient(
              90deg,
              #bdd6e4 0 9px,
              transparent 9px 17px
            );

          z-index: 0;
        }

        .success-tag-grid {
          position: relative;

          z-index: 1;

          display: grid;

          grid-template-columns:
            repeat(4, 1fr);

          gap: 28px;
        }

        .success-tag-wrap {
          display: flex;

          flex-direction: column;

          align-items: center;

          opacity: 0;

          transform:
            translateY(28px)
            scale(.97);

          transition:
            opacity .7s ease,
            transform .7s
            cubic-bezier(.2,.8,.2,1);
        }

        .success-tag-wrap.success-in-view {
          opacity: 1;

          transform:
            translateY(0)
            scale(1);
        }

        .success-thread {
          width: 1px;

          height: 32px;

          background:
            repeating-linear-gradient(
              180deg,
              #9fc9dc 0 4px,
              transparent 4px 8px
            );
        }

        .success-tag {
          width: 100%;

          max-width: 220px;

          aspect-ratio: 200 / 258;

          position: relative;

          transform:
            rotate(var(--rotate));

          transition:
            transform .4s ease,
            filter .4s ease;

          animation:
            successSwing
            6s ease-in-out infinite;

          animation-delay: var(--delay);

          filter:
            drop-shadow(
              0 12px 18px
              rgba(19,34,66,.09)
            );
        }

        .success-tag:hover {
          transform:
            rotate(0deg)
            translateY(-8px)
            scale(1.035);

          filter:
            drop-shadow(
              0 20px 28px
              rgba(19,34,66,.14)
            );

          animation-play-state: paused;
        }

        @keyframes successSwing {

          0%,100% {
            transform:
              rotate(var(--rotate))
              translateY(0);
          }

          50% {
            transform:
              rotate(calc(var(--rotate) * -1))
              translateY(-5px);
          }

        }

        .success-tag-svg {
          position: absolute;

          inset: 0;

          width: 100%;
          height: 100%;
        }

        .success-tag-content {
          position: absolute;

          inset: 0;

          display: flex;

          flex-direction: column;

          align-items: center;

          padding: 38px 16px 0;

          text-align: center;
        }

        .success-tag-code {
          font-size: 9px;

          letter-spacing: .1em;

          color: #7b8e9b;

          margin-bottom: 14px;
        }

        .success-number-row {
          display: flex;

          align-items: baseline;

          gap: 2px;

          color: #16324a;
        }

        .success-number {
          font-size: 40px;

          line-height: 1;

          font-weight: 900;
        }

        .success-plus {
          font-size: 22px;

          color: #1c6fa5;
        }

        .success-tag-label {
          margin-top: 9px;

          padding: 0 8px;

          font-size: 14px;

          font-weight: 700;

          color: #526674;

          line-height: 1.25;
        }

        .success-barcode {
          margin-top: auto;

          margin-bottom: 17px;

          width: 70%;

          height: 12px;

          background:
            repeating-linear-gradient(
              90deg,
              #1c6fa5 0 2px,
              transparent 2px 4px,
              #1c6fa5 4px 5px,
              transparent 5px 8px
            );

          opacity: .18;
        }

        /* ================= INVOICE ================= */

        .success-invoice-section {
          max-width: 900px;

          margin: 0 auto;

          padding: 35px 24px 100px;
        }

        .success-invoice {
          background: #ffffff;

          border: 1px solid #e5edf2;

          border-radius: 16px;

          box-shadow:
            0 18px 50px
            rgba(19,34,66,.07);

          overflow: hidden;

          transition:
            transform .35s ease,
            box-shadow .35s ease;
        }

        .success-invoice:hover {
          transform: translateY(-3px);

          box-shadow:
            0 22px 55px
            rgba(19,34,66,.10);
        }

        .success-invoice-head {
          display: flex;

          justify-content: space-between;

          align-items: center;

          gap: 20px;

          padding: 26px 30px;

          border-bottom: 1px solid #e7eef3;
        }

        .success-small-label {
          display: block;

          margin-bottom: 5px;

          font-size: 9px;

          font-weight: 800;

          letter-spacing: .13em;

          color: #1c6fa5;
        }

        .success-invoice-head h3 {
          margin: 0;

          font-size: 22px;

          font-weight: 900;

          color: #16324a;
        }

        .success-meta {
          font-size: 10px;

          line-height: 1.7;

          color: #81919c;

          text-align: right;
        }

        .success-invoice-rows {
          padding: 6px 30px 26px;
        }

        .success-inv-row {
          display: flex;

          align-items: center;

          gap: 16px;

          padding: 16px 0;

          border-bottom: 1px dashed #e2eaf0;

          opacity: 0;

          transform: translateX(-15px);

          transition:
            opacity .5s ease,
            transform .5s ease;
        }

        .success-inv-row.success-row-visible {
          opacity: 1;

          transform: translateX(0);
        }

        .success-inv-row:last-child {
          border-bottom: none;
        }

        .success-row-index {
          width: 22px;

          flex: 0 0 auto;

          font-size: 10px;

          color: #9aa8b2;
        }

        .success-check {
          width: 28px;
          height: 28px;

          flex: 0 0 auto;

          display: flex;

          align-items: center;

          justify-content: center;

          border-radius: 50%;

          background: #eef7fc;

          color: #1c6fa5;

          border: 1px solid #d6eaf4;

          font-size: 13px;

          font-weight: 800;

          transition:
            transform .25s ease,
            background .25s ease;
        }

        .success-inv-row:hover .success-check {
          transform: scale(1.12);

          background: #e3f2fa;
        }

        .success-inv-text {
          font-size: 16px;

          font-weight: 600;

          color: #526674;
        }

        /* ================= CTA ================= */

        .success-cta {
          position: relative;

          padding: 85px 24px 55px;

          background: #ffffff;

          color: #16324a;

          text-align: center;

          overflow: hidden;

          border-top: 1px solid #edf1f4;
        }

        .success-cta-grid {
          position: absolute;

          inset: 0;

          background-image:
            linear-gradient(
              rgba(28,111,165,.025) 1px,
              transparent 1px
            ),
            linear-gradient(
              90deg,
              rgba(28,111,165,.025) 1px,
              transparent 1px
            );

          background-size: 40px 40px;

          animation:
            successGridMove 20s linear infinite;
        }

        .success-cta-glow {
          position: absolute;

          width: 280px;
          height: 280px;

          left: 50%;
          top: -170px;

          transform: translateX(-50%);

          border-radius: 50%;

          background:
            rgba(58,166,232,.07);

          filter: blur(55px);

          animation:
            successGlow 5s ease-in-out
            infinite;
        }

        @keyframes successGlow {

          0%,100% {
            transform:
              translateX(-50%)
              scale(.9);

            opacity: .5;
          }

          50% {
            transform:
              translateX(-50%)
              scale(1.15);

            opacity: 1;
          }

        }

        .success-cta-inner {
          position: relative;

          max-width: 700px;

          margin: 0 auto;
        }

        .success-cta-label {
          display: inline-block;

          margin-bottom: 13px;

          padding: 6px 12px;

          border-radius: 100px;

          background: #f2f8fb;

          border: 1px solid #dcebf2;

          color: #1c6fa5;

          font-size: 10px;

          font-weight: 800;

          letter-spacing: .13em;
        }

        .success-cta h2 {
          margin: 0 auto 15px;

          font-size: clamp(
            30px,
            4.5vw,
            46px
          );

          line-height: 1.05;

          font-weight: 900;

          color: #16324a;
        }

        .success-cta p {
          max-width: 480px;

          margin: 0 auto 32px;

          font-size: 16px;

          line-height: 1.6;

          color: #7a8994;
        }

        .success-cta-button {
          display: inline-flex;

          align-items: center;

          justify-content: center;

          gap: 12px;

          padding: 15px 25px;

          border: none;

          border-radius: 100px;

          cursor: pointer;

          font-size: 12px;

          font-weight: 800;

          letter-spacing: .08em;

          text-transform: uppercase;

          background: #1c6fa5;

          color: #ffffff;

          box-shadow:
            0 10px 24px
            rgba(28,111,165,.18);

          transition:
            transform .3s ease,
            box-shadow .3s ease,
            background .3s ease;
        }

        .success-cta-button span {
          font-size: 17px;

          transition:
            transform .3s ease;
        }

        .success-cta-button:hover {
          transform: translateY(-4px);

          background: #155d8b;

          box-shadow:
            0 16px 30px
            rgba(28,111,165,.24);
        }

        .success-cta-button:hover span {
          transform: translateX(4px);
        }

        .success-footer-barcode {
          width: min(360px, 80%);

          height: 20px;

          margin: 46px auto 0;

          background:
            repeating-linear-gradient(
              90deg,
              #1c6fa5 0 2px,
              transparent 2px 5px,
              #1c6fa5 5px 6px,
              transparent 6px 10px
            );

          opacity: .12;
        }

        .success-footer-note {
          margin-top: 13px;

          font-size: 9px;

          letter-spacing: .13em;

          color: #a1adb5;

          text-transform: uppercase;
        }

        /* ================= RESPONSIVE ================= */

        @media (max-width: 820px) {

          .success-rail {
            display: none;
          }

          .success-tag-grid {
            grid-template-columns:
              repeat(2, 1fr);

            row-gap: 55px;
          }

        }

        @media (max-width: 600px) {

          .success-hero {
            padding:
              48px 18px 70px;
          }

          .success-wordmark-row {
            justify-content: center;

            margin-bottom: 45px;
          }

          .success-route {
            width: 100%;

            text-align: center;
          }

          .success-stamp {
            position: relative;

            top: auto;
            right: auto;

            margin: 0 auto 25px;

            width: 88px;
            height: 88px;
          }

          .success-hero-content h1 {
            font-size: 42px;
          }

          .success-tag-grid {
            grid-template-columns: 1fr;

            max-width: 260px;

            margin: 0 auto;
          }

          .success-invoice-head {
            flex-direction: column;

            align-items: flex-start;
          }

          .success-meta {
            text-align: left;
          }

          .success-invoice-rows {
            padding-left: 18px;
            padding-right: 18px;
          }

          .success-inv-row {
            gap: 10px;
          }

          .success-inv-text {
            font-size: 15px;
          }

        }

        @media (prefers-reduced-motion: reduce) {

          .success-tag,
          .success-stamp,
          .success-laser,
          .success-grid-bg,
          .success-cta-grid,
          .success-cta-glow,
          .success-box-icon {
            animation: none;
          }

          .success-tag-wrap,
          .success-inv-row,
          .success-wordmark-row,
          .success-hero-content h1,
          .success-hero-content p {
            opacity: 1;

            transform: none;

            transition: none;
          }

        }

      `}</style>

    </section>
  );
}