import React, { useEffect, useState } from "react";
import "./Blogsp.css";

import {
  UserPlus,
  ClipboardCheck,
  FileCheck2,
  Store,
  Globe2,
  BookOpen,
  Headphones,
  ArrowRight,
  CheckCircle2,
} from "lucide-react";

/* ============================================================
   SEO
============================================================ */

const SEO = {
  metaTitle: "International Seller Account Setup with Dropshy",

  h1: "International Seller Account Setup — Etsy, eBay, Amazon.com & Walmart – Dropshy",

  metaDescription:
    "Start your global e-commerce business with Dropshy. Get international seller account setup support for Etsy, eBay, Amazon.com, Alibaba, Walmart, Amazon UAE & Amazon Dubai.",
};

/* ============================================================
   DATA
============================================================ */

const MARKETPLACES = [
  "Etsy",
  "eBay",
  "Amazon.com",
  "Alibaba",
  "Walmart",
  "Amazon UAE",
  "Amazon Dubai",
];

const SERVICES = [
  {
    icon: <UserPlus size={22} />,
    title: "Account Creation",
    desc: "Assistance with creating your international seller account according to marketplace requirements.",
  },
  {
    icon: <ClipboardCheck size={22} />,
    title: "Seller Registration",
    desc: "Support with entering business, seller and marketplace registration details correctly.",
  },
  {
    icon: <FileCheck2 size={22} />,
    title: "Document & Verification Support",
    desc: "Guidance for preparing and submitting the required business and identity documents.",
  },
  {
    icon: <Store size={22} />,
    title: "Store Setup",
    desc: "Assistance with basic seller/store configuration and marketplace profile setup.",
  },
  {
    icon: <Globe2 size={22} />,
    title: "Marketplace Onboarding",
    desc: "Get guided onboarding support for different international marketplaces.",
  },
  {
    icon: <BookOpen size={22} />,
    title: "Selling Guidance",
    desc: "Understand the basic process of listing products, managing orders and starting international sales.",
  },
  {
    icon: <Headphones size={22} />,
    title: "Expert Support",
    desc: "Get professional assistance throughout the seller account setup process.",
  },
];

const FAQS = [
  {
    q: "What is an International Seller Account?",
    a: "An international seller account allows a business or seller to sell products through e-commerce marketplaces serving customers in other countries and regions.",
  },
  {
    q: "Does Dropshy provide international seller account setup?",
    a: "Yes. Dropshy provides assistance with international seller account creation, registration, verification, documentation and basic marketplace setup.",
  },
  {
    q: "Which international marketplaces does Dropshy support?",
    a: "Dropshy provides seller account setup support for Etsy, eBay, Amazon.com, Alibaba, Walmart, Amazon UAE and Amazon Dubai.",
  },
  {
    q: "Can beginners start international selling with Dropshy?",
    a: "Yes. Dropshy provides beginner-friendly guidance to help new sellers understand the international e-commerce account setup and selling process.",
  },
  {
    q: "What documents are required for an international seller account?",
    a: "Requirements vary by marketplace and seller type. Generally, marketplaces may request identity, business, address, tax, banking or other verification documents.",
  },
  {
    q: "Can I sell products from India to international customers?",
    a: "Yes, eligible Indian businesses can explore international selling through supported marketplaces, subject to the marketplace's rules, product requirements and applicable laws.",
  },
  {
    q: "How long does international seller account setup take?",
    a: "The timeline depends on the marketplace, verification process and accuracy of submitted information. Some accounts may be approved quickly, while others can require additional verification.",
  },
  {
    q: "Can Dropshy help with multiple international marketplaces?",
    a: "Yes. Dropshy can provide setup assistance across multiple supported platforms, including Etsy, eBay, Amazon.com, Alibaba, Walmart and Amazon UAE.",
  },
  {
    q: "Does Dropshy guarantee seller account approval?",
    a: "No service provider can guarantee approval because final account approval and verification are controlled by the respective marketplace. Dropshy provides setup and guidance to help ensure information is submitted correctly.",
  },
  {
    q: "Why should I choose Dropshy for international seller account setup?",
    a: "Dropshy combines seller account setup assistance, documentation guidance, marketplace onboarding and e-commerce business support to make the process easier for entrepreneurs who want to expand globally.",
  },
];

/* ============================================================
   PLAYLIST DATA
   Each item now carries: a thumbnail (left list), a full image
   (right panel), a publish date, and a multi-paragraph description.
============================================================ */

const PLAYLIST_ITEMS = [
  {
    title: "Getting Started",
    shortDesc: "A quick intro to our platform",
    date: "Aug 12, 2026",
    image: "https://picsum.photos/seed/getting-started/900/500",
    paras: [
      "Starting your international selling journey can feel overwhelming, especially if you have never dealt with marketplace registration, verification or store setup before. This guide is designed to walk you through the very first steps in plain language, without assuming you already know how any of it works.",
      "The first thing we help you do is choose the right marketplace for your product category. Etsy suits handmade and craft goods, eBay works well for both new and used items, while Amazon and Walmart are better suited to branded retail at scale. Picking the wrong platform early on often means redoing your listings later, so we spend real time on this decision with you.",
      "Once a marketplace is chosen, account creation is next. This involves entering your business details, contact information and basic seller preferences. We flag the fields that commonly cause rejections so you do not have to find out the hard way.",
      "After your account exists, the dashboard becomes your daily workspace — this is where you will manage listings, track orders, and monitor account health. We give you a full walkthrough of every section so nothing feels unfamiliar on day one.",
      "By the time you finish this guide, you should have an active seller profile, a clear understanding of your dashboard, and enough confidence to publish your very first listing without hesitation.",
    ],
  },
  {
    title: "Best Practices",
    shortDesc: "Tips from our top users",
    date: "Aug 05, 2026",
    image: "https://picsum.photos/seed/best-practices/900/500",
    paras: [
      "Every marketplace rewards sellers who consistently follow a handful of core habits, and this guide collects the ones we see repeated across our highest performing accounts.",
      "Product photography is the first thing customers judge before reading a single word of your description. Sellers who invest in clean, well-lit, multi-angle images consistently see higher click-through rates than those relying on a single low-resolution photo.",
      "Pricing discipline matters just as much as presentation. Rather than competing purely on the lowest price, top sellers price to reflect quality and shipping speed, then let reviews and repeat customers do the rest of the work.",
      "Response time to buyer questions is another quiet differentiator. Marketplaces track how quickly you reply to messages, and slow response times can quietly hurt your visibility in search results even if your product itself is strong.",
      "Finally, treat your first thirty days on any new marketplace as a data-gathering phase. Track which listings get views but no sales, adjust titles and images accordingly, and resist the urge to list everything at once before you understand what is actually working.",
    ],
  },
  {
    title: "Advanced Features",
    shortDesc: "Unlock the full toolkit",
    date: "Jul 28, 2026",
    image: "https://picsum.photos/seed/advanced-features/900/500",
    paras: [
      "Once your first store is running smoothly, a second layer of tools becomes available to sellers who want to operate at a larger scale, and this guide covers the most useful ones.",
      "Bulk listing management lets you upload, edit and update hundreds of products in a single spreadsheet-style action instead of editing each listing individually. This alone can save established sellers several hours a week.",
      "Automated inventory sync keeps your stock counts accurate across every marketplace you sell on simultaneously, so you never oversell a product that has already run out on another platform.",
      "Multi-store analytics brings all your marketplace performance data into a single view, letting you compare conversion rates, average order value and return rates side by side rather than logging into four different seller dashboards every morning.",
      "These tools are not necessary on day one, but sellers who adopt them as soon as order volume increases tend to avoid the operational headaches that come with manual, spreadsheet-free scaling.",
    ],
  },
  {
    title: "Case Studies",
    shortDesc: "Success stories from clients",
    date: "Jul 15, 2026",
    image: "https://picsum.photos/seed/case-studies/900/500",
    paras: [
      "Nothing explains what is possible better than real examples, so this guide profiles a handful of sellers who started exactly where you are now.",
      "One home-goods seller from Jaipur began with a single Etsy listing for hand-block-printed textiles. Within eight months, consistent photography and honest customer communication took them from occasional sales to a steady stream of repeat international buyers.",
      "A small electronics accessories brand expanded from a single domestic marketplace to Amazon.com and Amazon UAE within the same quarter, using shared product data to avoid duplicating listing work across regions.",
      "A family-run spice business faced early rejection during document verification, resolved it by resubmitting clearer business registration paperwork, and went on to become one of the more established sellers in their category within a year.",
      "What unites all of these stories is not luck — it is patience with the setup process, attention to documentation, and a willingness to adjust based on what each marketplace's data was telling them.",
    ],
  },
  {
    title: "Document Checklist",
    shortDesc: "What you need before you apply",
    date: "Jul 08, 2026",
    image: "https://picsum.photos/seed/document-checklist/900/500",
    paras: [
      "Verification delays are one of the most common reasons seller account setup takes longer than expected, and in almost every case the cause is incomplete or mismatched documentation.",
      "Most marketplaces will ask for proof of identity, such as a government-issued ID, along with proof of business registration if you are applying as a company rather than an individual seller.",
      "Address verification is also standard, usually satisfied with a recent utility bill or bank statement showing your registered business address clearly and matching the details entered during signup.",
      "Banking details are required so the marketplace can pay out your earnings, and these typically need to match the legal name on your business registration exactly — a common and easily avoidable rejection reason.",
      "We recommend gathering every document listed here before you start the application, scanning them clearly in good lighting, and double-checking that names and addresses match across every document before you submit.",
    ],
  },
  {
    title: "Choosing a Marketplace",
    shortDesc: "Etsy vs eBay vs Amazon vs Walmart",
    date: "Jun 30, 2026",
    image: "https://picsum.photos/seed/choosing-marketplace/900/500",
    paras: [
      "Choosing where to sell first shapes almost every decision that follows, from your pricing strategy to the kind of photography your listings need, so it deserves real thought before you commit.",
      "Etsy is built around handmade, vintage and craft goods, and its audience actively searches for unique, story-driven products rather than the lowest price available.",
      "eBay works well for both new and used inventory, and rewards sellers who are comfortable with auction-style listings as well as fixed-price sales, making it flexible for clearing stock or selling collectible items.",
      "Amazon.com and Walmart are better suited to branded, retail-ready products sold at volume, with stricter listing standards but access to a much larger built-in customer base.",
      "Amazon UAE and Amazon Dubai open the door to Middle Eastern customers specifically, which can be a strong option for sellers whose products already do well with a similar demographic elsewhere.",
      "Most sellers eventually operate on more than one marketplace, but starting with the platform that best matches your product type gives you a much stronger foundation to expand from later.",
    ],
  },
  {
    title: "Pricing & Fees Explained",
    shortDesc: "Understand what you actually pay",
    date: "Jun 22, 2026",
    image: "https://picsum.photos/seed/pricing-fees/900/500",
    paras: [
      "It is easy to underestimate how much of your revenue goes to fees until you have actually shipped a few orders, so this guide breaks down where your money goes on each marketplace.",
      "Referral fees are the marketplace's cut of each sale, typically calculated as a percentage of the item price, and they vary by product category rather than being a single flat rate.",
      "Payment processing fees are charged separately on top of referral fees in most cases, and they can be easy to miss if you are only looking at the headline commission rate advertised by the platform.",
      "Shipping costs are often the least predictable line item, especially for international orders where customs handling and last-mile delivery in the destination country can add unexpected surcharges.",
      "We encourage every new seller to build a simple spreadsheet estimating all of these costs against a realistic sale price before listing a product, rather than discovering the true margin after the first few orders have already shipped.",
    ],
  },
  {
    title: "Shipping Internationally",
    shortDesc: "Getting orders to customers abroad",
    date: "Jun 14, 2026",
    image: "https://picsum.photos/seed/shipping-international/900/500",
    paras: [
      "International shipping introduces a layer of complexity that domestic sellers rarely have to think about, from customs declarations to delivery timelines that can stretch to several weeks.",
      "Every international shipment needs accurate customs paperwork, including a clear description of the item's contents and declared value, since mistakes here are one of the most common reasons packages get held at the border.",
      "Carrier choice matters more than most new sellers expect. Some carriers are faster but significantly more expensive, while others are affordable but come with longer, less predictable delivery windows.",
      "Setting honest delivery time expectations with your customers upfront avoids the majority of shipping-related complaints, even when the actual delivery takes longer than a domestic order would.",
      "We recommend starting with a small, trusted set of destination countries rather than offering worldwide shipping from day one, so you can learn the customs process for a few markets before expanding further.",
    ],
  },
  {
    title: "Handling Returns & Disputes",
    shortDesc: "Keep your seller rating healthy",
    date: "Jun 02, 2026",
    image: "https://picsum.photos/seed/returns-disputes/900/500",
    paras: [
      "Returns and disputes are a normal part of selling on any marketplace, and how quickly and fairly you handle them affects your account health far more than the fact that they happened at all.",
      "Each marketplace enforces its own return window, ranging from a few days to a full month depending on the platform and product category, and missing these deadlines in your responses can automatically count against you.",
      "Clear, calm communication resolves the majority of disputes before they escalate. Buyers who feel heard early in the process are far less likely to leave a negative review or open a formal marketplace case.",
      "Your seller rating is a cumulative score built from response time, dispute resolution and order accuracy, and a small number of poorly handled returns can outweigh dozens of smooth, successful orders.",
      "We recommend setting aside time each day specifically for messages and returns, rather than letting them pile up alongside new orders, since resolution speed is one of the most heavily weighted factors in most marketplace algorithms.",
    ],
  },
  {
    title: "Scaling to Multiple Stores",
    shortDesc: "Growing beyond your first marketplace",
    date: "May 20, 2026",
    image: "https://picsum.photos/seed/scaling-stores/900/500",
    paras: [
      "Once your first store is stable and generating consistent orders, the natural next step for most sellers is expanding onto a second or third marketplace, but this brings operational challenges that are easy to underestimate.",
      "Inventory synchronization becomes critical the moment you sell the same product in more than one place. Without a shared system, it becomes very easy to oversell a product that has already run out on another platform.",
      "Order management also grows more complex, since each marketplace has its own dashboard, notification system and fulfilment deadlines, and juggling all of them manually quickly becomes unsustainable as order volume grows.",
      "Established multi-store sellers typically centralize their operations around a single inventory and order management tool, checking in on individual marketplace dashboards only when something specifically needs attention.",
      "The sellers who scale successfully are rarely the ones who expand the fastest — they are the ones who put basic systems in place before adding a new marketplace, rather than after problems have already started piling up.",
    ],
  },
];

/* ============================================================
   REVEAL ON SCROLL
============================================================ */

function useReveal() {
  const [ref, setRef] = useState(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (!ref) return;

    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          obs.disconnect();
        }
      },
      { threshold: 0.15 }
    );

    obs.observe(ref);

    return () => obs.disconnect();
  }, [ref]);

  return [setRef, visible];
}

/* ============================================================
   FAQ ITEM
============================================================ */

function FaqItem({ item, isOpen, onToggle }) {
  return (
    <div className="dss-faq-item">
      <button
        type="button"
        className="dss-faq-summary"
        onClick={onToggle}
        aria-expanded={isOpen}
      >
        <span>{item.q}</span>

        <span
          className={`dss-faq-plus ${
            isOpen ? "dss-faq-plus--open" : ""
          }`}
        >
          +
        </span>
      </button>

      {isOpen && (
        <p className="dss-faq-answer">
          {item.a}
        </p>
      )}
    </div>
  );
}

/* ============================================================
   PAGE
============================================================ */

export default function DropshySellerSetup() {
  const [openFaq, setOpenFaq] = useState(0);

  const [servicesRef, servicesVisible] = useReveal();
  const [faqRef, faqVisible] = useReveal();

  /* Playlist state */
  const [activePlaylist, setActivePlaylist] = useState(0);

  /* ============================================================
     SEO
  ============================================================ */

  useEffect(() => {
    document.title = SEO.metaTitle;

    let metaDesc = document.querySelector(
      'meta[name="description"]'
    );

    if (!metaDesc) {
      metaDesc = document.createElement("meta");

      metaDesc.name = "description";

      document.head.appendChild(metaDesc);
    }

    metaDesc.setAttribute(
      "content",
      SEO.metaDescription
    );
  }, []);

  const activeItem = PLAYLIST_ITEMS[activePlaylist];

  return (
    <div className="dss-page">

      {/* ========================================================
          HERO
      ======================================================== */}

      <section className="dss-hero">
        <div
          className="dss-hero-glow"
          aria-hidden="true"
        />

        <div className="dss-wrap">

          <span className="dss-eyebrow">
            <span className="dss-eyebrow-dot" />
            Global Marketplace Setup
          </span>

          <h1 className="dss-h1">
            {SEO.h1}
          </h1>

          <p className="dss-lead">
            {SEO.metaDescription}
          </p>

          <div className="dss-hero-ctas">

            <a
              href="#contact"
              className="dss-btn-primary"
            >
              Get Started
              <ArrowRight size={17} />
            </a>

            <a
              href="#services"
              className="dss-btn-secondary"
            >
              View Services
            </a>

          </div>

          <div className="dss-marketplace-strip">
            {[...MARKETPLACES, ...MARKETPLACES].map(
              (marketplace, index) => (
                <span
                  className="dss-marketplace-chip"
                  key={`${marketplace}-${index}`}
                >
                  {marketplace}
                </span>
              )
            )}
          </div>

        </div>
      </section>

      {/* ========================================================
          BUSINESS INTRODUCTION
      ======================================================== */}

      <section className="dss-intro">

        <div className="dss-wrap dss-intro-wrap">

          <div>

            <span className="dss-eyebrow">
              <span className="dss-eyebrow-dot" />
              Business Introduction
            </span>

            <h2 className="dss-h2">
              Sell Globally with Dropshy
            </h2>

            <p className="dss-p">
              Dropshy helps entrepreneurs and businesses start
              selling internationally through leading global
              e-commerce marketplaces. Our International Seller
              Account Setup Service provides end-to-end assistance
              for account creation, registration, verification,
              documentation, store setup and marketplace onboarding.
            </p>

            <p className="dss-p">
              Whether you are a beginner, small business owner,
              manufacturer, retailer or aspiring online seller,
              Dropshy helps you take your business from local to
              global with professional e-commerce support.
            </p>

            <ul className="dss-marketplace-list">

              {MARKETPLACES.map((marketplace) => (
                <li key={marketplace}>

                  <CheckCircle2
                    size={16}
                    className="dss-check"
                  />

                  {marketplace}

                </li>
              ))}

            </ul>

          </div>

          <div className="dss-intro-visual">

            <Globe2
              size={140}
              strokeWidth={1}
            />

          </div>

        </div>

      </section>

      {/* ========================================================
          BUSINESS OVERVIEW / SERVICES
      ======================================================== */}

      <section
        className="dss-overview"
        id="services"
      >

        <div className="dss-wrap">

          <div className="dss-overview-heading">

            <span className="dss-eyebrow">
              <span className="dss-eyebrow-dot" />
              Business Overview
            </span>

            <h2 className="dss-h2">
              🌍 Expand Your Business Worldwide
            </h2>

            <p className="dss-p dss-overview-p">
              Selling on international marketplaces can open your
              business to customers across different countries and
              markets. However, seller registration, verification,
              documentation and marketplace requirements can be
              complicated. Dropshy simplifies the process — our team
              helps you with the complete seller account setup journey,
              from initial registration to getting your marketplace
              account ready for selling.
            </p>

          </div>

          <div
            ref={servicesRef}
            className={`dss-service-grid ${
              servicesVisible ? "dss-visible" : ""
            }`}
          >

            {SERVICES.map((service, index) => (

              <div
                className="dss-service-card"
                key={service.title}
                style={{
                  "--i": index,
                }}
              >

                <div className="dss-service-icon">
                  {service.icon}
                </div>

                <h3 className="dss-service-title">
                  {service.title}
                </h3>

                <p className="dss-service-desc">
                  {service.desc}
                </p>

              </div>

            ))}

          </div>

        </div>

      </section>

      {/* ========================================================
          PLAYLIST / INSIGHTS
          Left: scrollable list with thumbnail + title (YouTube style)
          Right: selected item's full image, date and full description
      ======================================================== */}

      <section className="dss-playlist">

        <div className="dss-wrap">

          <div className="dss-playlist-heading">

            <span className="dss-eyebrow">
              <span className="dss-eyebrow-dot" />
              Explore
            </span>

            <h2 className="dss-h2">
              Browse Our Insights
            </h2>

          </div>

          <div className="dss-playlist-wrap">

            {/* LEFT LIST */}

            <div className="dss-playlist-list">

              {PLAYLIST_ITEMS.map((item, index) => (

                <button
                  type="button"
                  key={item.title}
                  className={`dss-playlist-item ${
                    activePlaylist === index
                      ? "dss-playlist-item--active"
                      : ""
                  }`}
                  onClick={() =>
                    setActivePlaylist(index)
                  }
                >

                  <img
                    className="dss-playlist-thumb"
                    src={item.image}
                    alt=""
                  />

                  <span className="dss-playlist-item-text">

                    <span className="dss-playlist-item-title">
                      {item.title}
                    </span>

                    <span className="dss-playlist-item-desc">
                      {item.shortDesc}
                    </span>

                  </span>

                </button>

              ))}

            </div>

            {/* RIGHT CONTENT */}

            <div className="dss-playlist-content">

              <img
                className="dss-playlist-image"
                src={activeItem.image}
                alt={activeItem.title}
              />

              <div className="dss-playlist-body">

                <div className="dss-playlist-meta">

                  <span className="dss-playlist-number">
                    0{activePlaylist + 1}
                  </span>

                  <span className="dss-playlist-date">
                    {activeItem.date}
                  </span>

                </div>

                <h3 className="dss-playlist-content-title">
                  {activeItem.title}
                </h3>

                {activeItem.paras.map((para, i) => (
                  <p
                    className="dss-playlist-content-body"
                    key={i}
                  >
                    {para}
                  </p>
                ))}

              </div>

            </div>

          </div>

        </div>

      </section>

      {/* ========================================================
          FAQ
      ======================================================== */}

      <section
        className="dss-faq"
        id="faq"
      >

        <div className="dss-wrap">

          <div className="dss-faq-heading">

            <span className="dss-eyebrow">
              <span className="dss-eyebrow-dot" />
              FAQs
            </span>

            <h2 className="dss-h2">
              Your questions, answered.
            </h2>

            <p className="dss-p">
              Common questions about international seller account
              setup with Dropshy.
            </p>

          </div>

          <div
            ref={faqRef}
            className={`dss-faq-grid ${
              faqVisible ? "dss-visible" : ""
            }`}
          >

            {FAQS.map((item, index) => (

              <FaqItem
                key={item.q}
                item={item}
                isOpen={openFaq === index}
                onToggle={() =>
                  setOpenFaq(
                    openFaq === index
                      ? -1
                      : index
                  )
                }
              />

            ))}

          </div>

        </div>

      </section>

      {/* ========================================================
          CTA
      ======================================================== */}

      <section
        className="dss-cta"
        id="contact"
      >

        <div
          className="dss-cta-glow"
          aria-hidden="true"
        />

        <div className="dss-wrap">

          <h2 className="dss-h2 dss-h2--white">
            Ready to take your business global?
          </h2>

          <p className="dss-cta-sub">
            Talk to our team and get your international seller
            account set up on Etsy, eBay, Amazon.com, Alibaba,
            Walmart, Amazon UAE and Amazon Dubai.
          </p>

          <a
            href="#"
            className="dss-btn-primary"
          >
            Contact Dropshy
            <ArrowRight size={17} />
          </a>

        </div>

      </section>

      {/* ========================================================
          FOOTER
      ======================================================== */}

      <footer className="dss-footer">
        © 2026 Dropshy. All rights reserved.
      </footer>

    </div>
  );
}