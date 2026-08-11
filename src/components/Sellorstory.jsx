import React, { useState } from "react";
import "./Sellorstory.css";
import warehousingImg from "../assets/images/image.png";
import adivasi from "../assets/images/adivasi.webp";

import pool from "../assets/images/pool.webp";

import dhanda from "../assets/images/dhanda.webp";




const sellers = [
  {
    name: "Blur.",
    founder: "Riya Pant - Founder",
    company: "Blur India",
    text: "I started my makeup business out of pure passion, and Shiprocket has really helped me grow it. As someone just starting out, I needed a shipping partner I could trust—and Shiprocket made things super easy. Their quick and smooth deliveries meant my customers got their orders on time, and that’s helped me keep them happy and coming back for more.",
   image: warehousingImg,
  },
  {
    name: "PHOOL",
    founder: "Founder",
    company: "Phool",
    text: "Our business has grown tremendously with the right shipping partner. Seamless deliveries and a smooth customer experience have helped us scale confidently.",
    image: pool,
  },
  {
    name: "The Platinum",
    founder: "Founder",
    company: "The Platinum",
    text: "Reliable deliveries have played a huge role in helping us build trust with our customers and grow our business.",
    //image: with,
  },
  {
    name: "Adivasi Hair Oil",
    founder: "Founder",
    company: "Adivasi Hair Oil",
    text: "From managing orders to delivering products across the country, shipping has become much easier and more efficient for our business.",
    image: adivasi
  },
  {
    name: "ADILAQADRI",
    founder: "Founder",
    company: "Adil Qadri",
    text: "With a reliable shipping experience, we have been able to focus more on our customers and continue growing our brand.",
    image: dhanda,
  },
];

export default function SellerStories() {
  const [active, setActive] = useState(0);

  const seller = sellers[active];

  return (
    <section className="seller-section">

      <div className="seller-container">

        {/* Heading */}
        <h2 className="seller-heading">
          Voices of Our Sellers
        </h2>

        {/* Seller Tabs */}
        <div className="seller-tabs">

          {sellers.map((item, index) => (
            <button
              key={item.name}
              className={`seller-tab ${
                active === index ? "active" : ""
              }`}
              onClick={() => setActive(index)}
            >
              {item.name}
            </button>
          ))}

        </div>

        {/* Story */}
        <div className="seller-story">

          {/* Text */}
          <div className="seller-content">

            <p className="seller-description">
              {seller.text}
            </p>

            <div className="seller-author">
              <strong>{seller.founder}</strong>
              <span>{seller.company}</span>
            </div>

          </div>

          {/* Image */}
          <div className="seller-image-wrapper">

            <img
              src={seller.image}
              alt={seller.company}
              className="seller-image"
            />

          </div>

        </div>

      </div>

    </section>
  );
}