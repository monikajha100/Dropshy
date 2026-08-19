import React, { useState } from "react";
import "./LiveDemo.css";

export default function LiveDemo() {
  const services = [
    {
      id: "national",
      tab: "National",
      title: "National E-Commerce",
      tag: "Sell Pan-India",
      desc:
        "Start your online business on leading marketplaces like Amazon.in, Flipkart, Meesho and Myntra. We manage products, inventory, packing and Pan-India shipping — you focus on growing sales.",
      btn: "Start Selling in India",
      icon: (
        <svg viewBox="0 0 64 64" fill="none">
          <path
            d="M14 24h36l-4 24a4 4 0 0 1-4 3.4H22a4 4 0 0 1-4-3.4L14 24Z"
            stroke="currentColor"
            strokeWidth="3"
            strokeLinejoin="round"
          />
          <path
            d="M22 24v-4a10 10 0 0 1 20 0v4"
            stroke="currentColor"
            strokeWidth="3"
            strokeLinecap="round"
          />
          <circle cx="27" cy="33" r="2.4" fill="currentColor" />
          <circle cx="37" cy="33" r="2.4" fill="currentColor" />
        </svg>
      ),
    },
    {
      id: "international",
      tab: "International",
      title: "International E-Commerce",
      tag: "💰 Earn in Dollars",
      desc:
        "Sell across 135+ countries on Etsy, eBay, Amazon.com, Walmart, Alibaba, Amazon UAE and Amazon Business (B2B). Dropshy handles inventory, international shipping and fulfillment — grow worldwide, zero investment.",
      btn: "Go Global",
      icon: (
        <svg viewBox="0 0 64 64" fill="none">
          <circle cx="32" cy="32" r="19" stroke="currentColor" strokeWidth="3" />
          <path
            d="M13 32h38M32 13c5.5 5.2 8.5 11.9 8.5 19S37.5 46.8 32 51c-5.5-4.2-8.5-11.9-8.5-19S26.5 18.2 32 13Z"
            stroke="currentColor"
            strokeWidth="3"
          />
        </svg>
      ),
    },
    {
      id: "website",
      tab: "Website",
      title: "Website E-Commerce",
      tag: "Your Own Brand",
      desc:
        "Launch your own branded online store — just like Flipkart or Amazon. Dropshy provides a professional website, product integration, secure payments and complete order management under your name.",
      btn: "Build My Store",
      icon: (
        <svg viewBox="0 0 64 64" fill="none">
          <rect
            x="10"
            y="16"
            width="44"
            height="28"
            rx="3"
            stroke="currentColor"
            strokeWidth="3"
          />
          <path d="M24 50h16M32 44v6" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
          <path d="M10 24h44" stroke="currentColor" strokeWidth="3" />
        </svg>
      ),
    },
  ];

  const [activeTab, setActiveTab] = useState("national");

  return (
    <section className="dropshySection">
      <div className="bgBlob blobOne" />
      <div className="bgBlob blobTwo" />

      <div className="dropshyEyebrow">Complete E-Commerce Solutions Under One Roof</div>

      <h2 className="dropshyTitle">
        Launch &amp; Grow Your Online Business
        <br />
        with <span>Dropshy</span>
      </h2>

      <p className="dropshySubtitle">
        Partner with Dropshy — we handle the products &amp; shipping, you keep the
        profits. <strong>Zero investment required.</strong>
      </p>

      {/* Tabs */}
      <div className="demoTabs">
        {services.map((s) => (
          <button
            key={s.id}
            className={`demoTab ${s.id === activeTab ? "active" : ""}`}
            onClick={() => setActiveTab(s.id)}
          >
            {s.tab}
          </button>
        ))}
      </div>

      {/* Cards */}
      <div className="demoCards">
        {services.map((service, index) => (
          <div
            className={`demoCard ${service.id === activeTab ? "isActive" : ""}`}
            key={service.id}
            style={{ animationDelay: `${index * 0.15}s` }}
            onMouseEnter={() => setActiveTab(service.id)}
          >
            <span className="cardTag">{service.tag}</span>

            <div className="demoIcon">{service.icon}</div>

            <div className="demoContent">
              <h3>{service.title}</h3>
              <p>{service.desc}</p>
              <button className="liveBtn">
                {service.btn}
                <span className="arrow">→</span>
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}