import React, { useState } from "react";
import "./LiveDemo.css";

export default function LiveDemo() {
  const tabs = ["fastrr Identify", "Shipping", "fastrr Checkout"];
  const [activeTab, setActiveTab] = useState("Shipping");

  const cards = [
    {
      title: "Shipping",
      desc: "Explore our detailed demo to see how our comprehensive shipping services and solutions can streamline and elevate your logistics operations.",
      btn: "Live Demo",
      image: "/images/shipping.png",
    },
    {
      title: "fastrr Checkout",
      desc: "Elevate your customers' shopping with our one-click smooth checkout experience.",
      btn: "Live Demo",
      image: "/images/checkout.png",
    },
    {
      title: "Customer Engagement",
      desc: "Increase repeat purchases with WhatsApp automation and customer engagement.",
      btn: "Live Demo",
      image: "/images/engagement.png",
    },
  ];

  return (
    <section className="liveDemo">
      <h2 className="liveTitle">
        Experience Shiprocket Products
        <br />
        Through Live Demos
      </h2>

      {/* Tabs */}
      <div className="demoTabs">
        {tabs.map((tab, index) => (
          <button
            key={index}
            className={`demoTab ${tab === activeTab ? "active" : ""}`}
            onClick={() => setActiveTab(tab)}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Cards */}
      <div className="demoCards">
        {cards.map((card, index) => (
          <div
            className="demoCard"
            key={index}
            style={{ animationDelay: `${index * 0.15}s` }}
          >
            <div className="demoContent">
              <h2>{card.title}</h2>
              <p>{card.desc}</p>
              <button className="liveBtn">
                {card.btn}
                <span>→</span>
              </button>
            </div>

            <div className="demoImage">
              <img src={card.image} alt={card.title} />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}