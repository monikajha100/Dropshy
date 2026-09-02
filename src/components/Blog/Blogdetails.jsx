import React, { useEffect, useState } from "react";
import "./Blogdetails.css";

import {
  UserPlus,
  ClipboardCheck,
  FileCheck2,
  Store,
  Globe2,
  BookOpen,
  Headphones,
  ArrowRight,
  Package,
  ShoppingCart,
  Truck,
  IndianRupee,
  Megaphone,
  Laptop,
} from "lucide-react";

import banner1 from "../../assets/images/BANNER 1 BLOGS.png";
import banner2 from "../../assets/images/banner 2 blogs.png";
import banner3 from "../../assets/images/BANNER 3 BLOGS.png";

/* ============================================================
   BLOG DATA
============================================================ */

export const CONTENTS = [
  {
    id: 1,

  

    image: banner1,

    selectorTitle: "International Seller Account Setup",

    selectorDesc:
      "Etsy, eBay, Amazon.com, Alibaba, Walmart & more",

    metaTitle:
      "International Seller Account Setup with Dropshy",

    metaDescription:
      "Start your global e-commerce business with Dropshy. Get international seller account setup support for Etsy, eBay, Amazon.com, Alibaba, Walmart, Amazon UAE & Amazon Dubai.",

    h1:
      "International Seller Account Setup Etsy, eBay, Amazon.com & Walmart – Dropshy",

    introTitle:
      "Sell Globally with Dropshy",

    intro: [
      "Dropshy helps entrepreneurs and businesses start selling internationally through leading global e-commerce marketplaces. Our International Seller Account Setup Service provides end-to-end assistance for account creation, registration, verification, documentation, store setup and marketplace onboarding.",

      "Whether you are a beginner, small business owner, manufacturer, retailer or aspiring online seller, Dropshy helps you take your business from local to global with professional e-commerce support.",
    ],

    marketplaceTitle:
      "Sell Globally with Dropshy",

    marketplaces: [
      "Etsy",
      "eBay",
      "Amazon.com",
      "Alibaba",
      "Walmart",
      "Amazon UAE",
      "Amazon Dubai",
    ],

    overviewTitle:
      "Expand Your Business Worldwide",

    overview: [
      "Selling on international marketplaces can open your business to customers across different countries and markets. However, seller registration, verification, documentation and marketplace requirements can be complicated.",

      "Dropshy simplifies the process.",

      "Our team helps you with the complete seller account setup journey, from initial registration to getting your marketplace account ready for selling.",
    ],

    servicesTitle:
      "Our International Seller Account Setup Services",

    services: [
      {
        icon: <UserPlus size={21} />,
        title: "Account Creation",
        desc:
          "Assistance with creating your international seller account according to marketplace requirements.",
      },

      {
        icon: <ClipboardCheck size={21} />,
        title: "Seller Registration",
        desc:
          "Support with entering business, seller and marketplace registration details correctly.",
      },

      {
        icon: <FileCheck2 size={21} />,
        title: "Document & Verification Support",
        desc:
          "Guidance for preparing and submitting the required business and identity documents.",
      },

      {
        icon: <Store size={21} />,
        title: "Store Setup",
        desc:
          "Assistance with basic seller/store configuration and marketplace profile setup.",
      },

      {
        icon: <Globe2 size={21} />,
        title: "Marketplace Onboarding",
        desc:
          "Get guided onboarding support for different international marketplaces.",
      },

      {
        icon: <BookOpen size={21} />,
        title: "Selling Guidance",
        desc:
          "Understand the basic process of listing products, managing orders and starting international sales.",
      },

      {
        icon: <Headphones size={21} />,
        title: "Expert Support",
        desc:
          "Get professional assistance throughout the seller account setup process.",
      },
    ],

    faqs: [
      {
        q: "What is an International Seller Account?",
        a:
          "An international seller account allows a business or seller to sell products through e-commerce marketplaces serving customers in other countries and regions.",
      },

      {
        q: "Does Dropshy provide international seller account setup?",
        a:
          "Yes. Dropshy provides assistance with international seller account creation, registration, verification, documentation and basic marketplace setup.",
      },

      {
        q: "Which international marketplaces does Dropshy support?",
        a:
          "Dropshy provides seller account setup support for Etsy, eBay, Amazon.com, Alibaba, Walmart, Amazon UAE and Amazon Dubai.",
      },

      {
        q: "Can beginners start international selling with Dropshy?",
        a:
          "Yes. Dropshy provides beginner-friendly guidance to help new sellers understand the international e-commerce account setup and selling process.",
      },

      {
        q: "What documents are required for an international seller account?",
        a:
          "Requirements vary by marketplace and seller type. Generally, marketplaces may request identity, business, address, tax, banking or other verification documents.",
      },

      {
        q: "Can I sell products from India to international customers?",
        a:
          "Yes, eligible Indian businesses can explore international selling through supported marketplaces, subject to marketplace rules, product requirements and applicable laws.",
      },

      {
        q: "How long does international seller account setup take?",
        a:
          "The timeline depends on the marketplace, verification process and accuracy of submitted information.",
      },

      {
        q: "Can Dropshy help with multiple international marketplaces?",
        a:
          "Yes. Dropshy can provide setup assistance across multiple supported platforms.",
      },

      {
        q: "Does Dropshy guarantee seller account approval?",
        a:
          "No service provider can guarantee approval because final account approval and verification are controlled by the respective marketplace.",
      },

      {
        q: "Why should I choose Dropshy for international seller account setup?",
        a:
          "Dropshy combines seller account setup assistance, documentation guidance, marketplace onboarding and e-commerce business support.",
      },
    ],

    ctaTitle:
      "Ready to Take Your Business Global?",

    ctaText:
      "Get professional international seller account setup support and start exploring global e-commerce marketplaces with Dropshy.",
  },

  /* ============================================================
     BLOG 2
  ============================================================ */

  {
    id: 2,

    slug: "website-dropshipping",

    image: banner2,

    selectorTitle:
      "Website Dropshipping",

    selectorDesc:
      "Build your own online store and grow your brand",

    metaTitle:
      "Start Your Own Online Store Website Dropshipping with Dropshy",

    metaDescription:
      "Start your own website dropshipping business with Dropshy. Launch an online store, sell products without maintaining inventory and get product, listing and fulfillment support.",

    h1:
      "Start Your Website Dropshipping Business with Dropshy",

    introTitle:
      "Start Your Own Website Dropshipping Business with Dropshy",

    intro: [
      "Dropshy Website Dropshipping helps aspiring entrepreneurs launch their own professional e-commerce website and start selling products online without the traditional requirement of maintaining large inventories or warehouse space.",

      "With Dropshy, you can build your own online store and brand, select products from available categories, add products to your website and promote your store through digital marketing channels such as Instagram, Facebook, Google and WhatsApp.",

      "Our website dropshipping model is designed to simplify the operational side of e-commerce. Product sourcing, product information, photography assets and fulfillment support can be provided through the Dropshy ecosystem, allowing you to focus more on marketing, customer acquisition, sales and brand building.",
    ],

    marketplaceTitle:
      "Build Your Online Store. Sell Products. Grow Your Brand.",

    marketplaces: [
      "Own Online Store",
      "Product Selection",
      "Product Listings",
      "Digital Marketing",
      "Order Processing",
      "Fulfillment Support",
    ],

    overviewTitle:
      "What is Website Dropshipping?",

    overview: [
      "Website dropshipping is an e-commerce business model where you sell products through your own online store without needing to maintain large quantities of inventory yourself.",

      "Instead of purchasing and storing products in advance, products can be processed when customers place orders, subject to the applicable supplier and fulfillment terms.",

      "With Dropshy, you can create a professional e-commerce website, select products, add product listings and promote your store online.",
    ],

    servicesTitle:
      "How Website Dropshipping with Dropshy Works",

    services: [
      {
        icon: <Package size={21} />,
        title: "Choose Products",
        desc:
          "Select products from available categories and product SKUs.",
      },

      {
        icon: <Laptop size={21} />,
        title: "Add Products to Your Website",
        desc:
          "Products are added to your online store with images, descriptions, pricing, keywords and other relevant information.",
      },

      {
        icon: <Megaphone size={21} />,
        title: "Promote Your Online Store",
        desc:
          "Use Instagram, Facebook, Google, WhatsApp and other marketing channels to attract potential customers.",
      },

      {
        icon: <ShoppingCart size={21} />,
        title: "Customer Places an Order",
        desc:
          "When a customer purchases a product from your website, the order is received through your online store.",
      },

      {
        icon: <ClipboardCheck size={21} />,
        title: "Dropshy Processes the Order",
        desc:
          "The order is processed through the applicable Dropshy supply and fulfillment system.",
      },

      {
        icon: <Truck size={21} />,
        title: "Product is Packed & Dispatched",
        desc:
          "Product handling, packaging, labeling and dispatch support are managed through the applicable fulfillment process.",
      },

      {
        icon: <IndianRupee size={21} />,
        title: "You Earn Your Margin",
        desc:
          "Your potential profit is based on your selling price minus applicable product/fulfillment costs and other business expenses.",
      },
    ],

    faqs: [
      {
        q: "What is website dropshipping?",
        a:
          "Website dropshipping is an e-commerce model where you sell products through your own online store without maintaining large quantities of inventory yourself.",
      },

      {
        q: "How can I start a website dropshipping business with Dropshy?",
        a:
          "You can start by setting up your online store, adding products and promoting your website through digital marketing channels.",
      },

      {
        q: "Do I need to keep inventory for website dropshipping?",
        a:
          "Generally, you do not need to purchase and store large quantities of inventory in advance.",
      },

      {
        q: "Can I create my own brand with Dropshy?",
        a:
          "Yes. Dropshy website dropshipping allows you to build your own online store and establish your own business or brand identity.",
      },

      {
        q: "How many products can I add to my Dropshy website?",
        a:
          "The number of products depends on your selected package.",
      },

      {
        q: "Who handles packaging and product dispatch?",
        a:
          "Packaging, labeling and dispatch support can be managed through the applicable Dropshy supply and fulfillment system.",
      },

      {
        q: "Do I need a warehouse to start dropshipping?",
        a:
          "You generally do not need your own warehouse for products handled through the Dropshy fulfillment system.",
      },

      {
        q: "How do I make money from website dropshipping?",
        a:
          "You earn a margin when you sell a product at a price higher than the applicable product and fulfillment costs.",
      },

      {
        q: "Can I promote my dropshipping website on Google and social media?",
        a:
          "Yes. You can promote your website through Google, Instagram, Facebook, WhatsApp, YouTube and other digital marketing channels.",
      },

      {
        q: "Is website dropshipping suitable for beginners?",
        a:
          "Website dropshipping can be suitable for beginners because it can reduce the need for upfront inventory and warehouse management.",
      },
    ],

    ctaTitle:
      "Ready to Build Your Own Online Store?",

    ctaText:
      "Launch your website dropshipping business with Dropshy and focus on growing your store, marketing and brand.",
  },

  /* ============================================================
     BLOG 3
  ============================================================ */

  {
    id: 3,

    slug: "dropshipping-business-india",

    image: banner3,

    selectorTitle:
      "Start Dropshipping Business in India",

    selectorDesc:
      "Start selling online with zero inventory",

    metaTitle:
      "Start Your Dropshipping Business in India",

    metaDescription:
      "Start your dropshipping business with Dropshy. Sell trending products online without inventory or warehouse.",

    h1:
      "Start Your Dropshipping Business in India with Zero Inventory with Dropshy",

    introTitle:
      "Start Your Dropshipping Business with Dropshy",

    intro: [
      "Dropshy is an e-commerce and dropshipping platform designed to help aspiring entrepreneurs start and grow an online business without maintaining their own inventory.",

      "With Dropshy, sellers can access products, create their online selling business and focus on marketing, customer acquisition and sales, while product handling and shipping support are managed through the Dropshy ecosystem.",

      "Dropshy offers National Dropshipping, International Dropshipping and Website Dropshipping solutions for entrepreneurs who want to sell products in India as well as international markets.",
    ],

    marketplaceTitle:
      "Start Your E-commerce Business Without the Traditional Burden",

    marketplaces: [
      "National Dropshipping",
      "International Dropshipping",
      "Website Dropshipping",
      "Product Access",
      "Shipping Support",
      "Fulfillment Support",
    ],

    overviewTitle:
      "Dropshy – Your E-commerce Business Partner",

    overview: [
      "Starting a traditional e-commerce business can require inventory investment, warehouse space, packaging, staff and logistics management.",

      "Dropshy follows a different approach.",

      "The goal is simple: Start your e-commerce business without the traditional burden of inventory, warehouse and logistics management.",
    ],

    servicesTitle:
      "How the Dropshy Business Model Works",

    services: [
      {
        icon: <Package size={21} />,
        title: "Choose Products",
        desc:
          "Select products from available categories and product SKUs.",
      },

      {
        icon: <ShoppingCart size={21} />,
        title: "List & Promote Products",
        desc:
          "Add products to your selling channel and promote them through digital marketing and social media.",
      },

      {
        icon: <ShoppingCart size={21} />,
        title: "Customer Places an Order",
        desc:
          "When a customer purchases your product, you receive the order.",
      },

      {
        icon: <ClipboardCheck size={21} />,
        title: "Order Processing",
        desc:
          "The product is processed through the Dropshy supply and fulfillment system.",
      },

      {
        icon: <Truck size={21} />,
        title: "Product Dispatch",
        desc:
          "Products are packed and dispatched to the customer.",
      },

      {
        icon: <IndianRupee size={21} />,
        title: "Earn Your Margin",
        desc:
          "Your selling price minus your product/fulfillment cost and applicable expenses determines your profit.",
      },
    ],

    faqs: [
      {
        q: "What is Dropshy?",
        a:
          "Dropshy is an e-commerce and dropshipping platform that helps entrepreneurs start and grow an online business without maintaining their own product inventory.",
      },

      {
        q: "Can I start a dropshipping business without inventory?",
        a:
          "Yes. Dropshy's dropshipping model allows sellers to select products and sell them through their chosen selling channels without maintaining their own inventory.",
      },

      {
        q: "How does the Dropshy dropshipping business model work?",
        a:
          "You select products, list and promote them, receive customer orders, and the order is processed through the Dropshy supply and fulfillment system.",
      },

      {
        q: "Do I need a warehouse to start dropshipping with Dropshy?",
        a:
          "No. The dropshipping model is designed to reduce the need for sellers to maintain their own inventory or warehouse.",
      },

      {
        q: "What products can I sell through Dropshy?",
        a:
          "You can choose from the available product categories and SKUs provided through the Dropshy ecosystem.",
      },

      {
        q: "Can I sell Dropshy products online in India?",
        a:
          "Yes. Dropshy provides National Dropshipping solutions for entrepreneurs who want to sell products through online channels in India.",
      },

      {
        q: "Can I sell products internationally with Dropshy?",
        a:
          "Yes. Dropshy also offers International Dropshipping solutions.",
      },

      {
        q: "How do I make a profit in dropshipping?",
        a:
          "Your profit generally depends on the difference between your selling price and your product/fulfillment cost after applicable expenses.",
      },

      {
        q: "Who can start a dropshipping business with Dropshy?",
        a:
          "Aspiring entrepreneurs, students, working professionals and small business owners can explore the Dropshy model.",
      },

      {
        q: "Does Dropshy provide shipping and fulfillment support?",
        a:
          "Dropshy provides product handling and shipping support through its ecosystem.",
      },
    ],

    ctaTitle:
      "Ready to Start Your Dropshipping Business?",

    ctaText:
      "Start selling online with Dropshy and explore National, International and Website Dropshipping solutions.",
  },
];

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

      <div
        className={`dss-faq-answer-wrap ${
          isOpen ? "dss-faq-answer-wrap--open" : ""
        }`}
      >
        <p className="dss-faq-answer">
          {item.a}
        </p>
      </div>
    </div>
  );
}

/* ============================================================
   BLOG DETAIL PAGE
============================================================ */

export default function Blogdetails() {
  const getSlug = () => {
    const pathname = window.location.pathname;

    const parts = pathname
      .split("/")
      .filter(Boolean);

    const blogIndex = parts.indexOf("blog");

    if (blogIndex !== -1 && parts[blogIndex + 1]) {
      return decodeURIComponent(
        parts[blogIndex + 1]
      );
    }

    return "";
  };

  const [slug, setSlug] = useState(getSlug());

  const activeContent =
    CONTENTS.find(
      (item) => item.slug === slug
    ) || CONTENTS[0];

  const [openFaq, setOpenFaq] = useState(0);

  /* ==========================================================
     URL / SEO
  ========================================================== */

  useEffect(() => {
    const updatePage = () => {
      setSlug(getSlug());
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    };

    updatePage();

    document.title =
      activeContent.metaTitle;

    let metaDescription =
      document.querySelector(
        'meta[name="description"]'
      );

    if (!metaDescription) {
      metaDescription =
        document.createElement("meta");

      metaDescription.name =
        "description";

      document.head.appendChild(
        metaDescription
      );
    }

    metaDescription.setAttribute(
      "content",
      activeContent.metaDescription
    );

    setOpenFaq(0);
  }, [
    activeContent.metaTitle,
    activeContent.metaDescription,
  ]);

  /* ==========================================================
     RELATED BLOGS
  ========================================================== */

  const relatedBlogs = CONTENTS.filter(
    (item) =>
      item.id !== activeContent.id
  );

  /* ==========================================================
     OPEN BLOG
  ========================================================== */

  const openBlog = (blogSlug) => {
    window.location.href =
      `/blog/${blogSlug}`;
  };

  return (
    <div className="dss-page">

      {/* =====================================================
          ARTICLE
      ===================================================== */}

      <section className="dss-article-section">

        <div className="dss-wrap">

          {/* BREADCRUMB */}

          <div className="dss-breadcrumb">

            <a href="/blog">
              Blogs
            </a>

            <span>/</span>

            <span>
              {activeContent.selectorTitle}
            </span>

          </div>

          <div className="dss-article-layout">

            {/* =================================================
                MAIN ARTICLE
            ================================================= */}

            <main className="dss-main-article">

              {/* BANNER */}

              <div className="dss-main-banner">

                <img
                  src={activeContent.image}
                  alt={activeContent.h1}
                />

              </div>

              {/* BLOG BODY */}

              <article className="dss-blog-body">

                {/* CATEGORY */}

                <div className="dss-article-category">
                  {activeContent.selectorTitle}
                </div>

                {/* TITLE */}

                <h1 className="dss-article-title">
                  {activeContent.h1}
                </h1>

                {/* META */}

                <div className="dss-blog-meta">

                  <span>
                    Dropshy
                  </span>

                  <span>•</span>

                  <span>
                    E-Commerce
                  </span>

                  <span>•</span>

                  <span>
                    Dropshipping
                  </span>

                </div>

                {/* =================================================
                    INTRO
                ================================================= */}

                <section className="dss-content-block">

                  {activeContent.intro.map(
                    (para, index) => (
                      <p key={index}>
                        {para}
                      </p>
                    )
                  )}

                </section>

                {/* =================================================
                    MARKETPLACES
                ================================================= */}

                <section className="dss-content-block">

                  <h2>
                    {activeContent.marketplaceTitle}
                  </h2>

                  <ul className="dss-marketplace-list">

                    {activeContent.marketplaces.map(
                      (item, index) => (
                        <li key={index}>

                          <span className="dss-check">
                            ✓
                          </span>

                          <span>
                            {item}
                          </span>

                        </li>
                      )
                    )}

                  </ul>

                </section>

                {/* =================================================
                    OVERVIEW
                ================================================= */}

                <section className="dss-content-block">

                  <h2>
                    {activeContent.overviewTitle}
                  </h2>

                  {activeContent.overview.map(
                    (para, index) => (
                      <p key={index}>
                        {para}
                      </p>
                    )
                  )}

                </section>

                {/* =================================================
                    INLINE CTA
                ================================================= */}

                <div className="dss-inline-cta">

                  <div className="dss-inline-cta-content">

                    <strong>
                      Start Your E-Commerce Journey
                    </strong>

                    <span>
                      Build and grow your online business
                      with Dropshy.
                    </span>

                  </div>

                  <a href="/contact">
                    Get Started
                    <ArrowRight size={17} />
                  </a>

                </div>

                {/* =================================================
                    SERVICES
                ================================================= */}

                <section className="dss-content-block">

                  <h2>
                    {activeContent.servicesTitle}
                  </h2>

                  <div className="dss-service-list">

                    {activeContent.services.map(
                      (service, index) => (
                        <div
                          className="dss-service-item"
                          key={index}
                        >

                          <div className="dss-service-icon">
                            {service.icon}
                          </div>

                          <div className="dss-service-content">

                            <h3>
                              {index + 1}.{" "}
                              {service.title}
                            </h3>

                            <p>
                              {service.desc}
                            </p>

                          </div>

                        </div>
                      )
                    )}

                  </div>

                </section>

              </article>

            </main>

            {/* =================================================
                SIDEBAR
            ================================================= */}

            <aside className="dss-sidebar">

              {/* SEARCH */}

              <div className="dss-sidebar-box dss-search-box">

                <h3>
                  Search
                </h3>

                <div className="dss-search">

                  <input
                    type="text"
                    placeholder="Search Topic"
                  />

                  <button
                    type="button"
                  >
                    SEARCH
                  </button>

                </div>

              </div>

              {/* RECENT POSTS */}

              <div className="dss-sidebar-box">

                <div className="dss-sidebar-heading">

                  <span />

                  <h3>
                    Recent Posts
                  </h3>

                </div>

                <div className="dss-related-list">

                  {relatedBlogs.map(
                    (blog) => (
                      <button
                        type="button"
                        className="dss-related-item"
                        key={blog.id}
                        onClick={() =>
                          openBlog(blog.slug)
                        }
                      >

                        <img
                          src={blog.image}
                          alt={blog.h1}
                        />

                        <div>

                          <strong>
                            {blog.selectorTitle}
                          </strong>

                          <span>
                            {blog.selectorDesc}
                          </span>

                        </div>

                      </button>
                    )
                  )}

                </div>

              </div>

              {/* SIDEBAR CTA */}

              <div className="dss-side-cta">

                <div className="dss-side-cta-icon">

                  <Globe2 size={30} />

                </div>

                <h3>
                  Start Your Online Business
                </h3>

                <p>
                  Launch your e-commerce journey
                  with Dropshy.
                </p>

                <a href="/contact">

                  Get Started

                  <ArrowRight size={16} />

                </a>

              </div>

            </aside>

          </div>

        </div>

      </section>

      {/* =====================================================
          FAQ
      ===================================================== */}

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
              Common questions about{" "}
              {activeContent.selectorTitle.toLowerCase()}{" "}
              with Dropshy.
            </p>

          </div>

          <div className="dss-faq-grid">

            {activeContent.faqs.map(
              (item, index) => (

                <FaqItem
                  key={item.q}
                  item={item}
                  isOpen={
                    openFaq === index
                  }
                  onToggle={() =>
                    setOpenFaq(
                      openFaq === index
                        ? -1
                        : index
                    )
                  }
                />

              )
            )}

          </div>

        </div>

      </section>

      {/* =====================================================
          FINAL CTA
      ===================================================== */}

      <section className="dss-cta">

        <div className="dss-wrap">

          <span className="dss-cta-label">
            DROPSHY E-COMMERCE
          </span>

          <h2 className="dss-h2 dss-h2--white">
            {activeContent.ctaTitle}
          </h2>

          <p className="dss-cta-sub">
            {activeContent.ctaText}
          </p>

          <a
            href="/contact"
            className="dss-btn-primary"
          >
            Contact Dropshy
            <ArrowRight size={17} />
          </a>

        </div>

      </section>

    </div>
  );
}