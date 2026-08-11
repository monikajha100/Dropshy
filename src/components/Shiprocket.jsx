import React from "react";
import "./Sponser2.css";

const logos = [
  { name: "STUDD", src: "/logos/studd.png" },
  { name: "RELAXO", src: "/logos/relaxo.png" },
  { name: "zomato", src: "/logos/zomato.png" },
  { name: "m caffeine", src: "/logos/mcaffeine.png" },
  { name: "mamaearth", src: "/logos/mamaearth.png" },
  { name: "Kellogg's", src: "/logos/kelloggs.png" },
  { name: "DAMILANO", src: "/logos/damilano.png" },
  { name: "Aakash", src: "/logos/aakash.png" },
  { name: "Samsung", src: "/logos/samsung.png" },
];

export default function Sponser() {
  return (
    <section className="sponsor-section">

      {/* Heading */}
      <div className="sponsor-container">
        <h1 className="sponsor-heading">
          Shiprocket Making Headlines
          
        </h1>
      </div>

      {/* Logo Slider */}
      <div className="sponsor-slider">

        {/* ROW 1 */}
       <div className="sponsor-track">
  {[...logos, ...logos, ...logos].map((logo, index) => (
    <div className="sponsor-card" key={`row1-${index}`}>
      <img
        src={logo.src}
        alt={logo.name}
        className="sponsor-logo"
      />
    </div>
  ))}
</div>


      </div>
    </section>
  );
}