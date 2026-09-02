import React from "react";

const styles = `
  /* =========================================================
     ROOT
  ========================================================= */

  .hb-root{
    --blue:#11A7E6;
    --blue-deep:#0C7FB0;
    --orange:#F59A1B;
    --orange-deep:#C97A0E;

    --ink:#0F2A38;
    --ink-soft:#4C6675;

    --paper:#F4F8FA;
    --paper-2:#D9E1E3;
    --card:#FFFFFF;

    --line:rgba(15,42,56,0.12);

    background:var(--paper);
    color:var(--ink);

    font-family:'Inter', sans-serif;

    -webkit-font-smoothing:antialiased;
    -moz-osx-font-smoothing:grayscale;

    min-height:100vh;
    width:100%;
  }

  .hb-root *{
    box-sizing:border-box;
  }

  /* =========================================================
     FONTS
  ========================================================= */

  .hb-root h1,
  .hb-root h2,
  .hb-root h3,
  .hb-root .display,
  .hb-brand,
  .hb-score-card .hb-big,
  .hb-theme-name{
    font-family:'Sora', sans-serif;
    font-weight:600;
    letter-spacing:-0.025em;
  }

  .hb-root a{
    color:inherit;
  }

  .hb-wrap{
    max-width:1040px;
    margin:0 auto;
    padding:0 28px;
  }

  /* =========================================================
     TOP BAR
  ========================================================= */

  .hb-topbar{
    display:flex;
    align-items:center;
    justify-content:space-between;

    padding:26px 0 18px;

    border-bottom:1px solid var(--line);
  }

  .hb-brand{
    display:flex;
    align-items:center;
    gap:10px;

    font-size:20px;
    font-weight:700;
  }

  .hb-brand-mark{
    width:28px;
    height:28px;

    border-radius:50%;

    background:var(--blue);

    position:relative;
    flex:none;
  }

  .hb-brand-mark::after{
    content:"";

    position:absolute;
    left:50%;
    top:50%;

    width:9px;
    height:9px;

    border-radius:50%;

    background:var(--orange);

    transform:translate(-50%,-50%);
  }

  .hb-topbar nav{
    display:flex;
    gap:28px;

    font-family:'Inter',sans-serif;
    font-size:14px;
    font-weight:500;

    color:var(--ink-soft);
  }

  .hb-topbar nav a{
    text-decoration:none;

    transition:
      color 0.2s ease,
      transform 0.2s ease;
  }

  .hb-topbar nav a:hover{
    color:var(--blue-deep);
    transform:translateY(-1px);
  }

  /* =========================================================
     HERO
  ========================================================= */

  .hb-hero{
    padding:64px 0 40px;

    display:grid;

    grid-template-columns:1.15fr 0.85fr;

    gap:56px;

    align-items:end;
  }

  .hb-kicker{
    font-family:'Inter',sans-serif;

    font-size:14px;
    font-weight:500;

    color:var(--ink-soft);

    margin-bottom:18px;
  }

  .hb-hero h1{
    font-family:'Sora',sans-serif;

    font-size:clamp(38px,5.4vw,64px);

    line-height:1.05;

    font-weight:700;

    letter-spacing:-0.045em;
  }

  .hb-hero h1 em{
    font-family:'Sora',sans-serif;

    font-style:normal;

    color:var(--blue-deep);
  }

  .hb-hero p.hb-lede{
    margin-top:22px;

    max-width:46ch;

    font-family:'Inter',sans-serif;

    font-size:17px;
    font-weight:400;

    line-height:1.6;

    color:var(--ink-soft);
  }

  /* =========================================================
     SCORE CARD
  ========================================================= */

  .hb-score-card{
    background:var(--blue);

    color:#ffffff;

    border-radius:22px;

    padding:34px 32px;

    position:relative;

    overflow:hidden;

    box-shadow:
      0 18px 40px rgba(17,167,230,0.16);
  }

  .hb-score-card::before{
    content:"";

    position:absolute;

    width:180px;
    height:180px;

    right:-80px;
    top:-80px;

    border-radius:50%;

    background:
      rgba(255,255,255,0.08);
  }

  .hb-score-card .hb-big{
    font-family:'Sora',sans-serif;

    font-size:88px;

    line-height:0.9;

    font-weight:700;

    letter-spacing:-0.06em;
  }

  .hb-score-card .hb-label{
    margin-top:10px;

    font-family:'Inter',sans-serif;

    font-size:15px;
    font-weight:700;

    color:var(--orange);
  }

  .hb-score-card .hb-sub{
    margin-top:6px;

    font-family:'Inter',sans-serif;

    font-size:13px;
    font-weight:400;

    line-height:1.5;

    color:rgba(255,255,255,0.72);
  }

  /* =========================================================
     STARS
  ========================================================= */

  .hb-stars{
    display:flex;
    gap:4px;

    margin-top:20px;
  }

  .hb-stars svg{
    width:18px;
    height:18px;

    display:block;
  }

  /* =========================================================
     DISTRIBUTION
  ========================================================= */

  .hb-distribution{
    padding:8px 0 56px;

    border-bottom:1px solid var(--line);
  }

  .hb-dist-row{
    display:grid;

    grid-template-columns:70px 1fr 46px;

    align-items:center;

    gap:16px;

    padding:7px 0;

    font-family:'Inter',sans-serif;

    font-size:14px;
    font-weight:500;
  }

  .hb-dist-track{
    height:8px;

    border-radius:5px;

    background:var(--paper-2);

    overflow:hidden;
  }

  .hb-dist-fill{
    height:100%;

    border-radius:5px;

    background:var(--orange);

    transition:width 0.4s ease;
  }

  .hb-dist-row:first-child .hb-dist-fill{
    background:var(--blue);
  }

  /* =========================================================
     SUMMARY
  ========================================================= */

  .hb-summary{
    padding:56px 0;

    display:grid;

    grid-template-columns:0.9fr 1.1fr;

    gap:56px;

    border-bottom:1px solid var(--line);
  }

  .hb-summary h2{
    font-family:'Sora',sans-serif;

    font-size:28px;

    font-weight:700;

    line-height:1.2;

    margin:0 0 18px;
  }

  .hb-summary p{
    font-family:'Inter',sans-serif;

    color:var(--ink-soft);

    line-height:1.7;

    font-size:15.5px;

    font-weight:400;

    margin:0;
  }

  .hb-theme-list{
    display:flex;

    flex-direction:column;

    gap:0;
  }

  .hb-theme{
    display:flex;

    justify-content:space-between;

    align-items:baseline;

    padding:16px 0;

    border-top:1px solid var(--line);

    gap:20px;
  }

  .hb-theme:last-child{
    border-bottom:1px solid var(--line);
  }

  .hb-theme-name{
    font-family:'Sora',sans-serif;

    font-size:18px;

    font-weight:600;

    letter-spacing:-0.02em;
  }

  .hb-theme-tag{
    font-family:'Inter',sans-serif;

    font-size:12.5px;
    font-weight:400;

    color:var(--ink-soft);

    text-align:right;

    max-width:220px;

    line-height:1.5;
  }

  /* =========================================================
     REVIEWS
  ========================================================= */

  .hb-reviews{
    padding:56px 0 30px;
  }

  .hb-reviews-head{
    display:flex;

    justify-content:space-between;

    align-items:flex-end;

    margin-bottom:32px;

    gap:20px;

    flex-wrap:wrap;
  }

  .hb-reviews-head h2{
    font-family:'Sora',sans-serif;

    font-size:28px;

    font-weight:700;

    line-height:1.2;

    margin:0;
  }

  .hb-filter-chip{
    font-family:'Inter',sans-serif;

    font-size:13px;
    font-weight:500;

    border:1px solid var(--line);

    padding:7px 14px;

    border-radius:100px;

    color:var(--ink-soft);

    background:rgba(255,255,255,0.35);
  }

  /* =========================================================
     REVIEW GRID
  ========================================================= */

  .hb-grid{
    display:grid;

    grid-template-columns:repeat(3,1fr);

    gap:18px;
  }

  .hb-rcard{
    background:var(--card);

    border:1px solid var(--line);

    border-radius:16px;

    padding:22px;

    display:flex;

    flex-direction:column;

    gap:14px;

    transition:
      transform 0.25s ease,
      box-shadow 0.25s ease,
      border-color 0.25s ease;
  }

  .hb-rcard:hover{
    transform:translateY(-4px);

    border-color:
      rgba(17,167,230,0.28);

    box-shadow:
      0 14px 30px rgba(15,42,56,0.08);
  }

  .hb-rcard.hb-wide{
    grid-column:span 2;
  }

  .hb-rcard .hb-top{
    display:flex;

    justify-content:space-between;

    align-items:flex-start;

    gap:12px;
  }

  .hb-rcard .hb-who{
    display:flex;

    flex-direction:column;

    gap:2px;
  }

  .hb-rcard .hb-name{
    font-family:'Inter',sans-serif;

    font-size:14.5px;

    font-weight:700;
  }

  .hb-rcard .hb-meta{
    font-family:'Inter',sans-serif;

    font-size:12px;

    font-weight:400;

    color:var(--ink-soft);
  }

  .hb-rcard .hb-stars{
    margin-top:0;
  }

  .hb-rcard .hb-stars svg{
    width:14px;
    height:14px;
  }

  .hb-rcard .hb-body{
    font-family:'Inter',sans-serif;

    font-size:14.5px;

    line-height:1.6;

    font-weight:400;

    color:var(--ink);
  }

  /* =========================================================
     LOW REVIEW
  ========================================================= */

  .hb-rcard.hb-low{
    background:#FFF4E5;

    border-color:
      rgba(245,154,27,0.35);
  }

  .hb-rcard.hb-low .hb-body{
    color:#8a5a10;
  }

  .hb-badge{
    align-self:flex-start;

    font-family:'Inter',sans-serif;

    font-size:11px;

    font-weight:600;

    padding:4px 9px;

    border-radius:100px;

    background:var(--paper-2);

    color:var(--ink-soft);
  }

  /* =========================================================
     SEE ALL
  ========================================================= */

  .hb-see-all{
    display:flex;

    justify-content:center;

    padding:40px 0 64px;
  }

  .hb-see-all a{
    text-decoration:none;

    font-family:'Inter',sans-serif;

    font-size:14px;

    font-weight:600;

    color:var(--blue-deep);

    border-bottom:1px solid var(--blue);

    padding-bottom:3px;

    transition:
      color 0.2s ease,
      border-color 0.2s ease;
  }

  .hb-see-all a:hover{
    color:var(--orange-deep);

    border-color:var(--orange);
  }

  /* =========================================================
     FOOTER
  ========================================================= */

  .hb-root footer{
    border-top:1px solid var(--line);

    padding:34px 0 48px;

    display:flex;

    justify-content:space-between;

    font-family:'Inter',sans-serif;

    font-size:13px;

    font-weight:400;

    line-height:1.5;

    color:var(--ink-soft);

    flex-wrap:wrap;

    gap:10px;
  }

  /* =========================================================
     TABLET
  ========================================================= */

  @media (max-width:820px){

    .hb-wrap{
      padding:0 22px;
    }

    .hb-hero{
      grid-template-columns:1fr;

      gap:32px;

      padding-top:52px;
    }

    .hb-summary{
      grid-template-columns:1fr;

      gap:40px;
    }

    .hb-grid{
      grid-template-columns:1fr;
    }

    .hb-rcard.hb-wide{
      grid-column:span 1;
    }

    .hb-topbar nav{
      display:none;
    }

  }

  /* =========================================================
     MOBILE
  ========================================================= */

  @media (max-width:600px){

    .hb-wrap{
      padding:0 16px;
    }

    .hb-topbar{
      padding:20px 0 15px;
    }

    .hb-brand{
      font-size:18px;
    }

    .hb-brand-mark{
      width:25px;
      height:25px;
    }

    .hb-brand-mark::after{
      width:8px;
      height:8px;
    }

    .hb-hero{
      padding:42px 0 34px;

      gap:28px;
    }

    .hb-kicker{
      font-size:12px;

      line-height:1.5;

      margin-bottom:14px;
    }

    .hb-hero h1{
      font-size:
        clamp(32px,9vw,46px);

      line-height:1.08;

      letter-spacing:-0.045em;
    }

    .hb-hero p.hb-lede{
      font-size:15px;

      line-height:1.65;

      margin-top:18px;
    }

    .hb-score-card{
      border-radius:18px;

      padding:28px 24px;
    }

    .hb-score-card .hb-big{
      font-size:70px;
    }

    .hb-score-card .hb-label{
      font-size:14px;
    }

    .hb-score-card .hb-sub{
      font-size:12px;
    }

    .hb-distribution{
      padding-bottom:42px;
    }

    .hb-dist-row{
      grid-template-columns:58px 1fr 38px;

      gap:10px;

      font-size:12.5px;
    }

    .hb-summary{
      padding:44px 0;

      gap:34px;
    }

    .hb-summary h2{
      font-size:24px;
    }

    .hb-summary p{
      font-size:14px;

      line-height:1.7;
    }

    .hb-theme{
      flex-direction:column;

      align-items:flex-start;

      gap:6px;
    }

    .hb-theme-name{
      font-size:16px;
    }

    .hb-theme-tag{
      text-align:left;

      max-width:none;

      font-size:12px;
    }

    .hb-reviews{
      padding:44px 0 20px;
    }

    .hb-reviews-head{
      align-items:flex-start;

      flex-direction:column;

      margin-bottom:24px;
    }

    .hb-reviews-head h2{
      font-size:24px;
    }

    .hb-grid{
      gap:14px;
    }

    .hb-rcard{
      padding:19px;

      border-radius:14px;
    }

    .hb-rcard .hb-name{
      font-size:14px;
    }

    .hb-rcard .hb-body{
      font-size:14px;

      line-height:1.65;
    }

    .hb-root footer{
      padding:28px 0 38px;

      flex-direction:column;

      font-size:12px;
    }

  }

  /* =========================================================
     SMALL MOBILE
  ========================================================= */

  @media (max-width:380px){

    .hb-wrap{
      padding:0 13px;
    }

    .hb-hero h1{
      font-size:30px;
    }

    .hb-score-card{
      padding:24px 20px;
    }

    .hb-score-card .hb-big{
      font-size:62px;
    }

    .hb-dist-row{
      grid-template-columns:52px 1fr 34px;

      gap:8px;

      font-size:11.5px;
    }

    .hb-rcard{
      padding:17px;
    }

  }

  /* =========================================================
     REDUCED MOTION
  ========================================================= */

  @media (prefers-reduced-motion:reduce){

    .hb-rcard,
    .hb-topbar nav a,
    .hb-see-all a{
      transition:none !important;
    }

  }
`;

const Star = ({ filled = true }) => (
  <svg
    viewBox="0 0 20 20"
    fill={filled ? "#F59A1B" : "none"}
    stroke={filled ? "none" : "#F59A1B"}
  >
    <polygon points="10,1 12.6,7 19,7.6 14,12 15.5,18.5 10,15 4.5,18.5 6,12 1,7.6 7.4,7" />
  </svg>
);

const StarRow = ({ count = 5, total = 5 }) => (
  <div className="hb-stars">
    {Array.from({ length: total }).map((_, i) => (
      <Star key={i} filled={i < count} />
    ))}
  </div>
);

const distribution = [
  {
    label: "5 star",
    pct: 88,
    display: "88%",
    color: "var(--blue)",
  },
  {
    label: "4 star",
    pct: 5,
    display: "5%",
    color: "#D9E1E3",
  },
  {
    label: "3 star",
    pct: 2,
    display: "2%",
    color: "#D9E1E3",
  },
  {
    label: "2 star",
    pct: 1,
    display: "<1%",
    color: "#F59A1B",
  },
  {
    label: "1 star",
    pct: 4,
    display: "4%",
    color: "#F59A1B",
  },
];

const themes = [
  {
    name: "Application & funding speed",
    tag: "Same-day to 2-day deposits, most-cited positive",
  },
  {
    name: "Website experience",
    tag: "Called simple and easy to follow",
  },
  {
    name: "Customer service",
    tag: "Praised often, occasional access complaints",
  },
  {
    name: "Rates & fees",
    tag: "A minority found offers costlier than hoped",
  },
];

const reviews = [
  {
    wide: true,
    name: "Darius Browning",
    meta: "2 reviews · 2 hours ago",
    stars: 5,
    body: "Applying was quick and painless. He also made an error on his own end during the process, but the support team fixed it within minutes — and they were real people on the phone, not a bot.",
  },
  {
    name: "Wes",
    meta: "4 reviews · 2 hours ago",
    stars: 5,
    body: "Called it a smooth, top-notch experience from pre-approval right through to the loan being completed.",
  },
  {
    low: true,
    badge: "1 star",
    name: "Oscar Luna",
    meta: "1 review · 19 hours ago",
    body: "Short and blunt — a one-line complaint with no detail given.",
  },
  {
    name: "Charles Devous",
    meta: "7 reviews · 20 hours ago",
    stars: 5,
    body: "Consolidated high-interest credit card debt into one loan with a much lower monthly payment — funds landed within two days, and Happen even called to congratulate him.",
  },
  {
    wide: true,
    name: "Sandy Sharp",
    meta: "3 reviews · 19 hours ago",
    stars: 5,
    body: "Tired of high credit card interest, she looked into a Happen loan on a whim — ended up paying everything off, landing a good rate, and still had a bit left over for savings.",
  },
  {
    name: "Erin",
    meta: "2 reviews · 20 hours ago",
    stars: 4,
    body: "Her rep laid out the options clearly and never pushed her toward taking the loan — just helped her land on what actually fit.",
  },
];

export default function HappenBankReviews() {
  return (
    <div className="hb-root">
      <style>{styles}</style>

      {/* =====================================================
          GOOGLE FONTS
      ===================================================== */}

      <link
        rel="preconnect"
        href="https://fonts.googleapis.com"
      />

      <link
        rel="preconnect"
        href="https://fonts.gstatic.com"
        crossOrigin="true"
      />

      <link
        href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Sora:wght@500;600;700;800&display=swap"
        rel="stylesheet"
      />

      <div className="hb-wrap">

        {/* ===================================================
            TOP BAR
        =================================================== */}

        

        {/* ===================================================
            HERO
        =================================================== */}

        <section className="hb-hero">

          <div>

            

            <h1>
              What 14,512 people
              <br />
              are saying about
              <br />
              <em>Happen Bank.</em>
            </h1>

            <p className="hb-lede">
              Started life as LendingClub in 2006, now a digital
              bank built around fixed-rate loans, checking and
              savings — reviewed here by the people who've
              actually used it.
            </p>

          </div>

          <div className="hb-score-card">

            <div className="hb-big">
              4.7
            </div>

            <div className="hb-label">
              Excellent
            </div>

            <StarRow count={5} />

            <div className="hb-sub">
              Based on 14,512 reviews · 7,239 in the last 12
              months
            </div>

          </div>

        </section>

        {/* ===================================================
            DISTRIBUTION
        =================================================== */}

        <section className="hb-distribution">

          {distribution.map((row) => (
            <div
              className="hb-dist-row"
              key={row.label}
            >

              <span>
                {row.label}
              </span>

              <div className="hb-dist-track">

                <div
                  className="hb-dist-fill"
                  style={{
                    width: `${row.pct}%`,
                    background: row.color,
                  }}
                ></div>

              </div>

              <span>
                {row.display}
              </span>

            </div>
          ))}

        </section>

        {/* ===================================================
            SUMMARY
        =================================================== */}

        <section className="hb-summary">

          <div>

            <h2>
              The short version
            </h2>

            <p>
              Most reviewers describe a loan process that moves
              fast — approvals and deposits landing within hours
              or a couple of days — paired with a website people
              find genuinely easy to navigate and clear about
              repayment terms.
            </p>

            <p style={{ marginTop: "14px" }}>
              The recurring complaint is reaching a live,
              empowered person when something goes wrong, and a
              smaller group flags rates or fees that came in
              higher than expected on certain loan offers.
            </p>

          </div>

          <div className="hb-theme-list">

            {themes.map((theme) => (
              <div
                className="hb-theme"
                key={theme.name}
              >

                <span className="hb-theme-name">
                  {theme.name}
                </span>

                <span className="hb-theme-tag">
                  {theme.tag}
                </span>

              </div>
            ))}

          </div>

        </section>

        {/* ===================================================
            REVIEWS
        =================================================== */}

        <section className="hb-reviews">

          <div className="hb-reviews-head">

            <h2>
              Recent reviews
            </h2>

            <span className="hb-filter-chip">
              Sorted by most recent
            </span>

          </div>

          <div className="hb-grid">

            {reviews.map((r, i) => (

              <div
                className={`hb-rcard ${
                  r.wide ? "hb-wide" : ""
                } ${
                  r.low ? "hb-low" : ""
                }`}
                key={i}
              >

                <div className="hb-top">

                  <div className="hb-who">

                    <span className="hb-name">
                      {r.name}
                    </span>

                    <span className="hb-meta">
                      {r.meta}
                    </span>

                  </div>

                  {r.badge ? (
                    <span className="hb-badge">
                      {r.badge}
                    </span>
                  ) : (
                    <StarRow count={r.stars} />
                  )}

                </div>

                <div className="hb-body">
                  {r.body}
                </div>

              </div>

            ))}

          </div>

          {/* =================================================
              SEE ALL
          ================================================= */}

          <div className="hb-see-all">

            <a
              href="https://www.trustpilot.com/review/happen.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              See all 14,512 reviews on Trustpilot →
            </a>

          </div>

        </section>

        {/* ===================================================
            FOOTER
        =================================================== */}

        <footer>

          <span>
            88 Kearny Street, Suite 600, San Francisco, CA 94108
          </span>

          <span>
            Reviews sourced from Trustpilot · Design mockup,
            not affiliated with Happen Bank
          </span>

        </footer>

      </div>
    </div>
  );
}