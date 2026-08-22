import { useEffect, useState } from "react";
import "./Dropshylanding.css";
import "./Dropshyinfo.css";

const benefits = [
  { icon: "ti-building-warehouse", glow: "#2F9BE0", text: "No need to maintain a large warehouse" },
  { icon: "ti-category-2", glow: "#7C5CFC", text: "Access to a broad product selection" },
  { icon: "ti-apps", glow: "#FF6B4A", text: "Sell through multiple Indian marketplaces" },
  { icon: "ti-map-2", glow: "#12B886", text: "Reach customers across India" },
  { icon: "ti-truck-delivery", glow: "#FFB020", text: "Simplified order fulfillment" },
  { icon: "ti-speakerphone", glow: "#7C5CFC", text: "Focus more on sales and marketing" },
  { icon: "ti-users", glow: "#2F9BE0", text: "Suitable for both new and experienced online sellers" },
];

const faqs = [
  {
    q: "Do I need to maintain my own warehouse?",
    a: "No. The dropshipping model is designed to remove the need for sellers to maintain their own inventory and warehouse.",
  },
  {
    q: "Can I sell on Amazon.in, Flipkart, Meesho, and Myntra?",
    a: "Dropshy supports national marketplace selling opportunities, subject to the eligibility, category restrictions, seller requirements, and policies of each marketplace.",
  },
  {
    q: "Do I need to purchase products in bulk?",
    a: "The dropshipping model allows you to avoid purchasing large quantities of inventory upfront.",
  },
  {
    q: "Who handles packing and shipping?",
    a: "The applicable Dropshy fulfillment process handles packing and dispatch according to the service arrangement and order requirements.",
  },
  {
    q: "Can I sell products anywhere in India?",
    a: "National dropshipping is designed to help sellers reach customers across India, subject to product and delivery availability.",
  },
  {
    q: "Do I have to handle customer service?",
    a: "As the marketplace seller, you remain responsible for your customer and marketplace obligations. Dropshy can support the relevant fulfillment and operational side according to its service scope.",
  },
  {
    q: "How much profit can I make?",
    a: "There is no fixed or guaranteed profit. Your results depend on product costs, selling price, marketplace fees, advertising, returns, taxes, competition, and other business expenses.",
  },
  {
    q: "Is national dropshipping risk-free?",
    a: "No. Dropshipping reduces certain inventory-related risks, but it is still a business and involves operational, financial, marketplace, and customer-service responsibilities.",
  },
];

const steps = [
  "Choose products",
  "List them online",
  "Get orders",
  "Let Dropshy help with fulfillment",
  "Focus on growing your sales",
  "Earn more",
];

function useExternalAssets() {
  useEffect(() => {
    const wanted = [
      {
        rel: "stylesheet",
        href:
          "https://fonts.googleapis.com/css2?family=Sora:wght@400;500;600;700;800&family=Inter:wght@400;500;600;700&family=JetBrains+Mono:wght@400;500&display=swap",
      },
      {
        rel: "stylesheet",
        href: "https://cdnjs.cloudflare.com/ajax/libs/tabler-icons/2.44.0/iconfont/tabler-icons.min.css",
      },
    ];
    const created = [];
    wanted.forEach((l) => {
      if (document.querySelector(`link[href="${l.href}"]`)) return;
      const el = document.createElement("link");
      Object.entries(l).forEach(([k, v]) => (el[k] = v));
      document.head.appendChild(el);
      created.push(el);
    });
    return () => created.forEach((el) => el.remove());
  }, []);
}

function FaqItem({ item, index, isOpen, onToggle }) {
  return (
    <div className={`faq-item ${isOpen ? "open" : ""}`}>
      <button className="faq-q" onClick={onToggle} aria-expanded={isOpen}>
        <span>
          <span className="faq-num">{String(index + 1).padStart(2, "0")}</span>
          {item.q}
        </span>
        <span className="faq-chevron">
          <i className="ti ti-chevron-down" aria-hidden="true"></i>
        </span>
      </button>
      <div className="faq-a-wrap">
        <div className="faq-a-inner">
          <p className="faq-a">{item.a}</p>
        </div>
      </div>
    </div>
  );
}

export default function DropshyInfo() {
  useExternalAssets();
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <div className="dropshy">
      <section className="info-section" id="why-dropshy">
        <div className="wrap">
          <div className="section-head reveal in-view">
            <div className="eyebrow" style={{ color: "var(--sky-deep)", background: "var(--sky-pale)", borderColor: "var(--line)" }}>
              <span className="dot" style={{ background: "var(--coral)", boxShadow: "0 0 0 4px rgba(255,107,74,0.18)" }}></span>
              Why Dropshy
            </div>
            <h2>Why choose Dropshy for national dropshipping?</h2>
          </div>
          <div className="benefit-grid">
            {benefits.map((b) => (
              <div className="benefit-card" key={b.text}>
                <div className="benefit-icon" style={{ background: b.glow }}>
                  <i className={`ti ${b.icon}`} aria-hidden="true"></i>
                </div>
                <p>{b.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="info-section" id="faq" style={{ background: "var(--sky-pale)" }}>
        <div className="wrap">
          <div className="section-head reveal in-view">
            <div className="eyebrow" style={{ color: "var(--sky-deep)", background: "#fff", borderColor: "var(--line)" }}>
              <span className="dot" style={{ background: "var(--violet)", boxShadow: "0 0 0 4px rgba(124,92,252,0.18)" }}></span>
              FAQs
            </div>
            <h2>Frequently asked questions</h2>
          </div>
          <div className="faq-list">
            {faqs.map((item, i) => (
              <FaqItem
                key={item.q}
                item={item}
                index={i}
                isOpen={openIndex === i}
                onToggle={() => setOpenIndex(openIndex === i ? -1 : i)}
              />
            ))}
          </div>
        </div>
      </section>

      <section className="info-section" id="start-selling">
        <div className="wrap">
          <div className="section-head reveal in-view">
            <div className="eyebrow" style={{ color: "var(--sky-deep)", background: "var(--sky-pale)", borderColor: "var(--line)" }}>
              <span className="dot" style={{ background: "var(--teal)", boxShadow: "0 0 0 4px rgba(18,184,134,0.18)" }}></span>
              Get started
            </div>
            <h2>Start selling across India with Dropshy</h2>
          </div>
          <p className="steps-tagline">Turn your e-commerce idea into a scalable online business.</p>
          <div className="steps-row">
            {steps.map((label, i) => (
              <div className="step-item" key={label}>
                <div className="step-circle mono">{i + 1}</div>
                <div className="step-label">{label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="call-section">
        <div className="wrap call-inner">
          <h2>Ready to start? Join Dropshy and explore national dropshipping today.</h2>
          <p>Talk to our team and get your seller accounts moving.</p>
          <a className="call-btn" href="tel:+918873768436">
            <i className="ti ti-phone-call" aria-hidden="true"></i>
            Call now — +91 88737 68436
          </a>
        </div>
      </section>
    </div>
  );
}