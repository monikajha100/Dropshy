import React, { useEffect, useRef } from "react";
import "./Services.css";
import domesticImg from "../assets/images/domestic.png";
import fulfillmentImg from "../assets/images/fullfiment.webp";
import internationalImg from "../assets/images/fastrr.webp";
import warehousingImg from "../assets/images/quick.webp";

const services = [
  {
    code: "DS-01",
    title: "National Dropshipping",
    description:
      "Launch your online business across India by selling on Amazon.in, Flipkart, Meesho and Myntra. With Zero Investment, Dropshy manages inventory, product sourcing, packing, order fulfillment and Pan-India shipping while you focus on growing your sales.",
    image: domesticImg,
  },
  {
    code: "DS-02",
    title: "International Dropshipping",
    description:
      "Sell across 135+ countries through Etsy, eBay, Amazon.com, Walmart, Alibaba, Amazon UAE and Amazon Business (B2B). Earn in Dollars while Dropshy handles sourcing, inventory, international shipping and complete order fulfillment.",
    image: internationalImg,
  },
  {
    code: "DS-03",
    title: "E-Commerce Website Development",
    description:
      "Launch your own branded online store just like Amazon or Flipkart. Get a modern website with product integration, secure payment gateway, order management and everything needed to sell across India and worldwide.",
    image: fulfillmentImg,
  },
  {
    code: "DS-04",
    title: "Product & Inventory Management",
    description:
      "Choose from 5,000+ ready-to-sell premium products across multiple categories. We manage inventory, stock updates, product availability and sourcing so you never have to purchase inventory in advance.",
    image: warehousingImg,
  },
  {
    code: "DS-05",
    title: "Order Fulfillment & Shipping",
    description:
      "From product picking and professional packaging to dispatch, tracking and doorstep delivery, our logistics team manages complete order fulfillment across India and international markets.",
    image: domesticImg,
  },
  {
    code: "DS-06",
    title: "Seller Account Setup & Business Training",
    description:
      "Get complete support with seller account creation, product listing, pricing strategy, marketplace onboarding, digital marketing guidance and dedicated business training to help you scale faster.",
    image: internationalImg,
  },
];

export default function Services() {
  const rowRefs = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.2, rootMargin: "0px 0px -60px 0px" }
    );

    rowRefs.current.forEach((row) => row && observer.observe(row));
    return () => observer.disconnect();
  }, []);

  return (
    <section className="services-section">
      {/* ambient manifest grid backdrop */}
      <div className="services-backdrop" aria-hidden="true" />

      <div className="services-container">
        {/* Heading */}
        <div className="services-eyebrow">
          <span className="eyebrow-dot" />
          MANIFEST&nbsp;/&nbsp;OUR SERVICES
        </div>

        <h1 className="services-heading">
          Our Services
          <br />
          &amp; Solutions
          <span className="heading-route" aria-hidden="true" />
        </h1>

        <p className="services-subheading">
          Everything you need to start, manage &amp; scale your e-commerce
          business. Dropshy provides complete end-to-end e-commerce solutions
          with Zero Investment. We manage the operations while you focus on
          growing your brand and increasing your sales.
        </p>

        {/* Services */}
        <div className="services-list">
          {services.map((service, index) => (
            <div
              className={`service-row ${index % 2 !== 0 ? "reverse" : ""}`}
              key={service.title}
              ref={(el) => (rowRefs.current[index] = el)}
              style={{ transitionDelay: `${(index % 2) * 90}ms` }}
            >
              {/* Text */}
              <div className="service-content">
                <span className="service-code">{service.code}</span>
                <h2>{service.title}</h2>
                <p>{service.description}</p>
              </div>

              {/* Image */}
              <div className="service-image-wrapper">
                <span className="service-stamp">{service.code}</span>
                <div className="service-image-frame">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="service-image"
                    loading="lazy"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}