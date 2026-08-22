import { useEffect, useRef } from "react";
import "./DropshyLanding.css";

const marketplaces = [
  {
    id: "amazon",
    className: "mp-amazon",
    icon: "ti-brand-amazon",
    index: "01 / Amazon.in",
    name: "Amazon dropshipping",
    desc: "Reach customers across India through one of the country's largest online marketplaces.",
  },
  {
    id: "flipkart",
    className: "mp-flipkart",
    icon: "ti-shopping-cart",
    index: "02 / Flipkart",
    name: "Flipkart dropshipping",
    desc: "List products and target customers across India's extensive e-commerce market.",
  },
  {
    id: "meesho",
    className: "mp-meesho",
    icon: "ti-heart-handshake",
    index: "03 / Meesho",
    name: "Meesho dropshipping",
    desc: "Explore selling opportunities through a marketplace widely used by value-conscious shoppers and resellers.",
  },
  {
    id: "myntra",
    className: "mp-myntra",
    icon: "ti-shirt",
    index: "04 / Myntra",
    name: "Myntra dropshipping",
    desc: "Suited to sellers in fashion and lifestyle categories, subject to Myntra's seller requirements.",
  },
];

const steps = [
  {
    num: "01",
    meta: "Registration",
    title: "Complete your registration",
    body: "Registration fee: ₹500 or ₹1,000, depending on the plan you choose.",
    bullets: [
      "Pick the plan that fits your goals",
      "Advance payment (50%) becomes due 5–10 days after registration",
    ],
  },
  {
    num: "02",
    meta: "Advance payment",
    title: "Pay 50% in advance",
    body: "This advance is required to create your seller accounts on national platforms.",
    bullets: [],
  },
  {
    num: "03",
    meta: "Setup & training",
    title: "Account setup and training",
    body: "",
    bullets: [
      "Your seller accounts are created across chosen marketplaces",
      "You receive complete onboarding training",
      "The remaining 50% is payable once you start earning",
    ],
  },
  {
    num: "04",
    meta: "Go live",
    title: "Start selling and earning",
    body: "With accounts ready and training complete, you can start receiving orders and begin earning.",
    bullets: [],
  },
];

function FlowPath({ id, stroke, y }) {
  const d = `M90,150 C260,150 320,${y} 500,${y} C680,${y} 740,150 910,150`;
  return <path id={id} className="flow-path" stroke={stroke} d={d} />;
}

function FlowDiagram() {
  return (
    <div className="flow-shell">
      <div className="flow-caption">
        <span>Seller</span>
        <span>Marketplaces</span>
        <span>Customer</span>
      </div>
      <svg className="flow" viewBox="0 0 1000 300" xmlns="http://www.w3.org/2000/svg">
        <FlowPath id="p-amazon" stroke="#FF6B4A" y={55} />
        <FlowPath id="p-flipkart" stroke="#7C5CFC" y={110} />
        <FlowPath id="p-meesho" stroke="#12B886" y={190} />
        <FlowPath id="p-myntra" stroke="#FFB020" y={245} />

        <circle r="4.5" fill="#FF6B4A">
          <animateMotion dur="4.2s" repeatCount="indefinite" begin="0s">
            <mpath href="#p-amazon" />
          </animateMotion>
        </circle>
        <circle r="4.5" fill="#7C5CFC">
          <animateMotion dur="4.2s" repeatCount="indefinite" begin="1s">
            <mpath href="#p-flipkart" />
          </animateMotion>
        </circle>
        <circle r="4.5" fill="#12B886">
          <animateMotion dur="4.2s" repeatCount="indefinite" begin="2s">
            <mpath href="#p-meesho" />
          </animateMotion>
        </circle>
        <circle r="4.5" fill="#FFB020">
          <animateMotion dur="4.2s" repeatCount="indefinite" begin="3s">
            <mpath href="#p-myntra" />
          </animateMotion>
        </circle>

        <circle className="node-circle" cx="90" cy="150" r="34" />
        <text x="90" y="147" textAnchor="middle" className="node-label">Seller</text>
        <text x="90" y="163" textAnchor="middle" className="node-sub">You</text>

        <circle className="node-circle" cx="910" cy="150" r="34" />
        <text x="910" y="147" textAnchor="middle" className="node-label">Customer</text>
        <text x="910" y="163" textAnchor="middle" className="node-sub">India-wide</text>

        <circle cx="500" cy="55" r="5" fill="#FF6B4A" />
        <text x="516" y="59" className="mp-label">Amazon.in</text>
        <circle cx="500" cy="110" r="5" fill="#7C5CFC" />
        <text x="516" y="114" className="mp-label">Flipkart</text>
        <circle cx="500" cy="190" r="5" fill="#12B886" />
        <text x="516" y="194" className="mp-label">Meesho</text>
        <circle cx="500" cy="245" r="5" fill="#FFB020" />
        <text x="516" y="249" className="mp-label">Myntra</text>
      </svg>
    </div>
  );
}

export default function DropshyLanding() {
  const timelineRef = useRef(null);
  const fillRef = useRef(null);
  const stepRefs = useRef([]);
  const revealRefs = useRef([]);

  const scrollToId = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    // Load fonts and icon webfont once
    const links = [
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;500;600;700&family=Inter:wght@400;500;600;700&family=JetBrains+Mono:wght@400;500&display=swap",
      },
      {
        rel: "stylesheet",
        href: "https://cdnjs.cloudflare.com/ajax/libs/tabler-icons/2.44.0/iconfont/tabler-icons.min.css",
      },
    ];
    const created = links.map((l) => {
      const el = document.createElement("link");
      Object.entries(l).forEach(([k, v]) => (el[k] = v));
      document.head.appendChild(el);
      return el;
    });
    return () => created.forEach((el) => el.remove());
  }, []);

  useEffect(() => {
    const updateTimeline = () => {
      const timeline = timelineRef.current;
      const fill = fillRef.current;
      if (!timeline || !fill) return;
      const rect = timeline.getBoundingClientRect();
      const vh = window.innerHeight;
      const progressPx = Math.min(Math.max(vh * 0.75 - rect.top, 0), rect.height);
      const pct = (progressPx / rect.height) * 100;
      fill.style.height = pct + "%";

      stepRefs.current.forEach((step) => {
        if (!step) return;
        const r = step.getBoundingClientRect();
        if (r.top < vh * 0.8) step.classList.add("active");
      });
    };

    window.addEventListener("scroll", updateTimeline);
    window.addEventListener("resize", updateTimeline);
    updateTimeline();
    return () => {
      window.removeEventListener("scroll", updateTimeline);
      window.removeEventListener("resize", updateTimeline);
    };
  }, []);

  useEffect(() => {
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("in-view");
            io.unobserve(e.target);
          }
        });
      },
      { threshold: 0.15 }
    );
    revealRefs.current.forEach((el) => el && io.observe(el));
    return () => io.disconnect();
  }, []);

  const addReveal = (el) => {
    if (el && !revealRefs.current.includes(el)) revealRefs.current.push(el);
  };

  return (
    <div className="dropshy">
      <nav>
        <div className="nav-inner">
          <div className="logo">
            <span className="logo-mark">
              <i className="ti ti-truck-delivery" aria-hidden="true"></i>
            </span>
            Dropshy
          </div>
          <div className="nav-links">
            <a href="#marketplaces" onClick={(e) => { e.preventDefault(); scrollToId("marketplaces"); }}>Marketplaces</a>
            <a href="#process" onClick={(e) => { e.preventDefault(); scrollToId("process"); }}>Process</a>
          </div>
          <button className="btn btn-primary" style={{ padding: "10px 20px" }} onClick={() => scrollToId("process")}>
            Get started
          </button>
        </div>
      </nav>

      <div className="hero">
        <div className="wrap hero-inner">
          <div className="eyebrow">
            <span className="dot"></span>Dropshy · National E-Commerce
          </div>
          <h1>
            Sell across India.
            <br />
            Let <em>fulfillment</em> follow.
          </h1>
          <p className="lede">
            Dropshy gets your products listed on India's leading marketplaces — Amazon, Flipkart,
            Meesho and Myntra — while your dropshipping partner handles the fulfillment, subject
            to each marketplace's policies. You focus on product selection, listings and pricing.
          </p>
          <div className="hero-cta">
            <button className="btn btn-primary" onClick={() => scrollToId("process")}>Start registration</button>
            <button className="btn btn-ghost" onClick={() => scrollToId("marketplaces")}>See marketplaces</button>
          </div>

          <div className="stat-strip">
            <div className="stat-chip">
              <i className="ti ti-building-store" aria-hidden="true"></i>
              <div className="stat-num">4</div>
              <div className="stat-lab">Major marketplaces</div>
            </div>
            <div className="stat-chip">
              <i className="ti ti-currency-rupee" aria-hidden="true"></i>
              <div className="stat-num">₹500+</div>
              <div className="stat-lab">Starting registration</div>
            </div>
            <div className="stat-chip">
              <i className="ti ti-school" aria-hidden="true"></i>
              <div className="stat-num">Full</div>
              <div className="stat-lab">Onboarding training</div>
            </div>
            <div className="stat-chip">
              <i className="ti ti-map-2" aria-hidden="true"></i>
              <div className="stat-num">Pan-India</div>
              <div className="stat-lab">Customer reach</div>
            </div>
          </div>

          <FlowDiagram />
        </div>
      </div>

      <section id="marketplaces">
        <div className="wrap">
          <div className="section-head reveal" ref={addReveal}>
            <div className="eyebrow">
              <span className="dot"></span>Where you sell
            </div>
            <h2>India's major marketplaces</h2>
            <p>
              One dropshipping setup, four routes to customers — each marketplace has its own
              audience and onboarding requirements.
            </p>
          </div>
          <div className="mp-grid">
            {marketplaces.map((m) => (
              <div key={m.id} className={`mp-card ${m.className} reveal`} ref={addReveal}>
                <div className="mp-chip">
                  <i className={`ti ${m.icon}`} aria-hidden="true"></i>
                </div>
                <div className="mp-index">{m.index}</div>
                <div className="mp-name">{m.name}</div>
                <p className="mp-desc">{m.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section
        id="process"
        style={{ background: "var(--sky-pale)", borderTop: "1px solid var(--line)", borderBottom: "1px solid var(--line)" }}
      >
        <div className="wrap">
          <div className="section-head reveal" ref={addReveal}>
            <div className="eyebrow">
              <span className="dot"></span>Seller registration process
            </div>
            <h2>Start your journey toward online success</h2>
            <p>Four steps from registration to your first payout.</p>
          </div>

          <div className="timeline" ref={timelineRef}>
            <div className="timeline-fill" ref={fillRef}></div>

            {steps.map((s, i) => (
              <div
                key={s.num}
                className="step reveal"
                ref={(el) => {
                  stepRefs.current[i] = el;
                  addReveal(el);
                }}
              >
                <div className="step-num mono">{s.num}</div>
                <div className="step-card">
                  <span className="step-meta">{s.meta}</span>
                  <h3>{s.title}</h3>
                  {s.body && <p>{s.body}</p>}
                  {s.bullets.length > 0 && (
                    <ul>
                      {s.bullets.map((b) => (
                        <li key={b}>{b}</li>
                      ))}
                    </ul>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="cta-section">
        <div className="wrap reveal" ref={addReveal}>
          <div className="cta-box">
            <h2>Ready to list your products across India?</h2>
            <button className="btn btn-primary" onClick={() => scrollToId("process")}>Begin registration</button>
          </div>
        </div>
      </section>

      <footer>
        <div className="wrap">
          <span>Dropshy · National Dropshipping Services</span>
          <span>Onboarding is subject to each marketplace's seller policies.</span>
        </div>
      </footer>
    </div>
  );
}