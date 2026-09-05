import React, { useEffect, useState } from "react";

/* =========================================================
   DROPSHY — NATIONAL E-COMMERCE WEBSITE DROPSHIPPING
   Blue / Orange theme — self-contained (no external assets)
   Drop this .jsx anywhere; the <style> block below carries
   all the CSS, scoped under `.dsy-*` classes.

   UPDATE: hero storefront banner and the 4 product tiles now
   use REAL photos (<img> tags) instead of lucide icons.
   Placeholder photos are pulled from picsum.photos (a free,
   always-available image service) — swap the `src` values
   below with your own product photography whenever you have
   it, the layout/CSS won't need to change.
========================================================= */

import heroEcommerceImage from "../../assets/images/dropshy_national_hero_image.png";
import cameraImg from "../../assets/images/store.png";
import flatImg from "../../assets/images/product.png";
import jeansImg from "../../assets/images/jeans.jpg";
import laptopImg from "../../assets/images/website.png";
import dropsy1 from "../../assets/images/dropsy1.png";
import dispatechd from "../../assets/images/dispatched.png";
import margin from "../../assets/images/margin.png";
import {
  
  Rocket,
  Gem,
  Crown,
  CheckCircle2,
  Store,
  Megaphone,
  ShoppingCart,
  Truck,
  Warehouse,
  Camera,
  Palette,
  Globe,
  Boxes,
  MessageCircle,
  Search,
  CreditCard,
  Share2,
  Server,
  Headphones,
  PackageOpen,
  ClipboardCheck,
  TrendingUp,
  PenSquare,
} from "lucide-react";
import WEB from "./WEB";
/* ---------------------------------------------------------
   IMAGES — replace these with your own product photos
--------------------------------------------------------- */

const heroBannerImg = heroEcommerceImage;

const productImages = [
  flatImg,
  jeansImg,
  laptopImg,
  cameraImg,
];

/* ---------------------------------------------------------
   DATA
--------------------------------------------------------- */

const channels = [
  "Instagram",
  "Facebook",
  "Google",
  "WhatsApp",
  "SEO",
  "Social Media",
  "200+ Products",
  "National Reach",
];

const processSteps = [
  {
    code: "01",
    title: "Choose Products",
    icon: <PackageOpen />,
    color: "blue",
    image: flatImg,
    label: "PRODUCT CATALOG",
    text: "Choose products from the Dropshy catalog and select the products you want to sell through your online store.",
  },
  {
    code: "02",
    title: "Add to Your Website",
    icon: <PenSquare />,
    color: "orange",
    image: laptopImg,
    label: "YOUR STORE",
    text: "Add selected products to your branded e-commerce website with images, pricing and product descriptions.",
  },
  {
    code: "03",
    title: "Promote Your Store",
    icon: <Megaphone />,
    color: "sky",
    image: cameraImg,
    label: "MARKETING",
    text: "Promote your online store through Instagram, Facebook, Google, WhatsApp and other marketing channels.",
  },
  {
    code: "04",
    title: "Customer Places an Order",
    icon: <ShoppingCart />,
    color: "amber",
    image: jeansImg,
    label: "NEW ORDER",
    text: "Customers visit your website, select products and place their orders through your online store.",
  },
  {
    code: "05",
    title: "Dropshy Processes the Order",
    icon: <ClipboardCheck />,
    color: "navy",
     image: dropsy1,
    label: "PROCESSING",
    text: "Once an order is received, Dropshy supports the product processing and fulfillment workflow.",
  },
  {
    code: "06",
    title: "Packed & Dispatched",
    icon: <Truck />,
    color: "purple",
    image: dispatechd,
    label: "FULFILLMENT",
    text: "The product is prepared, packed and dispatched through the fulfillment process.",
  },
  {
    code: "07",
    title: "You Earn Your Margin",
    icon: <TrendingUp />,
    color: "green",
    image: margin,
    label: "GROWTH",
    text: "You earn your margin from the difference between your selling price and applicable product and fulfillment costs.",
  },
];
const timeline = [
  {
    number: "01",
    tag: "Registration",
    title: "Complete your registration",
    text: "Registration fee is ₹500 or ₹1000, depending on the plan you choose. After registration, it takes approximately 5–10 days to pay 50% in advance.",
  },
  {
    number: "02",
    tag: "Advance payment",
    title: "Pay 50% in advance",
    text: "A 50% advance payment is required to create your seller account on national platforms and begin store setup.",
  },
  {
    number: "03",
    tag: "Setup & training",
    title: "Account setup & training",
    text: "Once your seller account is successfully created, you'll receive complete training. After training, you can pay the remaining 50%, or pay after you start earning.",
  },
  {
    number: "04",
    tag: "Start selling",
    title: "Start selling & earning",
    text: "After your account is ready and training is complete, you can start receiving orders and begin earning your margin.",
  },
];

const benefits = [
  {
    number: "01",
    icon: <Boxes />,
    title: "No Upfront Inventory Investment",
    text: "Products are processed after receiving an order, so you don't need to purchase large quantities of stock in advance.",
    color: "blue",
  },
  {
    number: "02",
    icon: <Warehouse />,
    title: "No Dead Stock",
    text: "Reduce the risk of holding unsold inventory in your warehouse.",
    color: "orange",
  },
  {
    number: "03",
    icon: <Camera />,
    title: "No Product Photography Expenses",
    text: "Get access to HD-quality product images and videos for supported products.",
    color: "sky",
  },
  {
    number: "04",
    icon: <Store />,
    title: "No Warehouse Cost",
    text: "You don't need to maintain your own warehouse for the products handled through the Dropshy fulfillment system.",
    color: "amber",
  },
  {
    number: "05",
    icon: <Truck />,
    title: "No Packaging & Dispatch Hassle",
    text: "Order processing, labeling, packaging and dispatch support are managed through the Dropshy ecosystem.",
    color: "navy",
  },
  {
    number: "06",
    icon: <Palette />,
    title: "Build Your Own Brand",
    text: "Create your own online store and establish a professional digital presence.",
    color: "purple",
  },
  {
    number: "07",
    icon: <Globe />,
    title: "Sell From Anywhere",
    text: "Manage your online business through your website and digital channels.",
    color: "green",
  },
  {
    number: "08",
    icon: <Megaphone />,
    title: "Focus on Sales & Marketing",
    text: "Spend more time attracting customers, building your brand and generating sales instead of managing inventory.",
    color: "red",
  },
];

const plans = [
  {
    tier: "basic",
    name: "BASIC",
    icon: <Rocket />,
    color: "sky",
    subtitle: "Perfect for new entrepreneurs starting their first online store.",
    priceLabel: "₹5,000 + 18% GST",
    price: "₹5,900",
    features: [
      "Domain & Hosting/Server – 1 Year",
      "Professional E-commerce Website",
      "Website Design & Development",
      "Responsive Mobile-Friendly Design",
      "Up to 200 Product Listings",
      "Up to 200 Product Photography / Model Shoot",
      "Product Titles, Keywords & Tags",
      "Product Description / Content",
      "3 Website Banners",
      "Product Categories Setup",
      "Contact Us / About Us / FAQ Pages",
      "WhatsApp Integration",
      "Payment Gateway Integration",
      "Admin or Order Panel Training",
    ],
  },
  {
    tier: "advance",
    name: "ADVANCE",
    icon: <Gem />,
    color: "orange",
    subtitle: "Ideal for growing businesses that need more reach and content.",
    priceLabel: "₹10,000 + 18% GST",
    price: "₹11,800",
    features: [
      "Domain & Hosting/Server – 1 Year",
      "Professional E-commerce Website",
      "Custom Website Design & Development",
      "Responsive Mobile-Friendly Design",
      "Up to 500 Product Listings",
      "Up to 500 Product Photography / Model Shoot",
      "Product Titles, Keywords & Tags",
      "SEO-Friendly Product Content",
      "6 Premium Banners",
      "Professional Logo Design",
      "WhatsApp Integration",
      "Payment Gateway Integration",
      "Social Media Integration",
      "Social Media Management – 2 Months",
      "Admin, Order or Shipping Panel Training",
    ],
    featured: true,
  },
  {
    tier: "royal",
    name: "ROYAL",
    icon: <Crown />,
    color: "blue",
    subtitle: "Best for scaling your business with a premium brand presence.",
    priceLabel: "₹20,000 + 18% GST",
    price: "₹23,600",
    features: [
      "Domain & Hosting/Server – 1 Year",
      "Professional E-commerce Email",
      "Premium E-commerce Website",
      "Custom UI/UX Design & Development",
      "Responsive Mobile-Friendly Design",
      "Up to 1000 Product Listings",
      "Up to 1000 Product Photography / Model Shoot",
      "Product Titles, Tags, Keywords & Content",
      "10 Premium Banners",
      "Professional Logo & Brand Identity",
      "WhatsApp Integration",
      "Payment Gateway Integration – National + International",
      "SEO-Friendly Website Structure",
      "Social Media Integration",
      "Social Media Management – 6 Months",
      "All Admin Panel Training",
      "Order Management Training",
    ],
  },
];

const faqs = [
  [
    "What is Website Dropshipping with Dropshy?",
    "Website Dropshipping with Dropshy allows you to launch your own e-commerce website and sell products without maintaining your own inventory or warehouse. You can focus on marketing, customers and sales while product processing and fulfillment support are managed through the Dropshy system.",
  ],
  [
    "Do I need to purchase inventory before starting?",
    "No. In the Dropshy model, products are generally processed after you receive an order, so you don't need to purchase large quantities of inventory in advance.",
  ],
  [
    "Can I create my own brand with Dropshy?",
    "Yes. You can operate your own professional e-commerce website under your chosen business or brand name and build your digital presence.",
  ],
  [
    "How many products can I add to my website?",
    "The number of products depends on your selected Dropshy package. Product listings can include product images, descriptions, pricing, keywords, tags and other relevant details.",
  ],
  [
    "Who will handle product packaging and dispatch?",
    "Orders are processed through the Dropshy supply and fulfillment system. Product handling, labeling, packaging and dispatch support are managed through the Dropshy ecosystem, subject to the applicable service terms.",
  ],
  [
    "Do I need my own warehouse for website dropshipping?",
    "No. You generally do not need to maintain your own warehouse for products handled through the Dropshy fulfillment system.",
  ],
  [
    "How do I get product photos and content for my website?",
    "For supported products, Dropshy can provide product photography/assets and product-related content. The exact number of products and creative services depends on your selected package.",
  ],
  [
    "How do I earn profit through website dropshipping?",
    "You set the selling price for your products, subject to applicable pricing and business rules. Your potential margin is generally the difference between your selling price and the applicable product/fulfillment cost, after considering payment gateway, marketing, taxes and other business expenses.",
  ],
  [
    "Can I promote my Dropshy website on social media and Google?",
    "Yes. You can promote your online store through platforms such as Instagram, Facebook, Google, WhatsApp and other digital marketing channels. SEO and digital marketing can help increase your website's visibility and reach.",
  ],
  [
    "Is Website Dropshipping suitable for beginners?",
    "Yes. Website dropshipping can be suitable for beginners because it can reduce the need for upfront inventory, warehouse management, packaging and dispatch operations. However, success depends on factors such as product selection, pricing, marketing, customer service and sales performance.",
  ],
];

/* ---------------------------------------------------------
   COMPONENT
--------------------------------------------------------- */

const NationalEcommerceweb = () => {
  const [openFaq, setOpenFaq] = useState(null);
  const [activeStep, setActiveStep] = useState(1);

  useEffect(() => {
    const revealElements = document.querySelectorAll(".dsy-reveal");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add("dsy-in");
        });
      },
      { threshold: 0.12 }
    );
    revealElements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const timelineElements = document.querySelectorAll(".dsy-tl-item");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveStep(Number(entry.target.dataset.step));
        });
      },
      { threshold: 0.45 }
    );
    timelineElements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <div className="dsy-page">
      <style>{CSS}</style>

      {/* ===================== HERO ===================== */}
      <section className="dsy-hero dsy-modern-hero">
        <div className="dsy-hero-grid">
          <div className="dsy-hero-content dsy-modern-content">
            <span className="dsy-eyebrow">🇮🇳 National E‑Commerce · Dropshipping</span>
            <h1 className="dsy-headline">
              Sell across India<br />
              without running<br />
              a <em>warehouse.</em>
            </h1>
            <p className="dsy-hero-sub">
              Launch and grow your online business without worrying about inventory,
              warehouse space, packing or dispatch. Dropshy helps you focus on
              products, customers, marketing and sales.
            </p>
            <div className="dsy-hero-pills">
              <span><PackageOpen /> Zero Inventory</span>
              <span><Truck /> Pan India Shipping</span>
              <span><TrendingUp /> Better Margins</span>
            </div>
            <div className="dsy-hero-cta">
              <a className="dsy-btn-primary" href="#pricing">Start Your Store Now <span>→</span></a>
              <a className="dsy-btn-ghost" href="tel:+918873768436"><MessageCircle /> Talk to Our Expert</a>
            </div>
            <div className="dsy-trust-row">
              <div className="dsy-trust-avatars">10K+</div>
              <div><strong>10,000+ Happy Entrepreneurs</strong><small>★★★★★</small></div>
            </div>
          </div>
          <div className="dsy-modern-visual">
            <div className="dsy-visual-glow"></div>
            <div className="dsy-visual-badge dsy-badge-order">
              <span>✓</span><div><strong>Order Received!</strong><small>Your product is on the way</small></div>
            </div>
            <img className="dsy-main-hero-image" src={heroBannerImg} alt="Dropshy e-commerce store and pan-India delivery" />
          </div>
        </div>
      </section>

      {/* ===================== HOW IT WORKS ===================== */}
      {/* ===================== HOW IT WORKS ===================== */}
      
<section
  className="dsy-section dsy-register-section"
  id="register"
  style={{ paddingTop: "30px" }}
>

  <div className="dsy-process-bg-circle dsy-process-circle-one"></div>
  <div className="dsy-process-bg-circle dsy-process-circle-two"></div>

  <div className="dsy-wrap">

    {/* HEADER */}
    <div className="dsy-process-header dsy-reveal">

      <div className="dsy-process-title-wrap">

        <span className="dsy-process-kicker">
          <span className="dsy-kicker-dot"></span>
          HOW IT WORKS
        </span>

        <h2 className="dsy-process-title">
          From choosing products
          <br />
          to <span>earning your margin.</span>
        </h2>

      </div>

      <p className="dsy-process-description">
        Start your online business with a simple, step-by-step
        workflow. You focus on customers, sales and marketing —
        Dropshy supports the product fulfillment journey.
      </p>

    </div>


    {/* PROCESS TIMELINE */}
    <div className="dsy-process-wrapper">

      <div className="dsy-process-line">
        <span></span>
      </div>


      <div className="dsy-process-grid">

        {processSteps.map((step, index) => (

          <div
            className={`dsy-process-card dsy-process-${step.color} dsy-reveal`}
            key={step.code}
            style={{
              transitionDelay: `${index * 90}ms`,
            }}
          >

            {/* CARD TOP */}
            <div className="dsy-process-card-top">

              <div className="dsy-process-number">
                {step.code}
              </div>

              <div className="dsy-process-status">
                STEP {step.code}
              </div>

            </div>


            {/* IMAGE AREA */}
            {step.image ? (

              <div className="dsy-process-image-wrap">

                <img
                  src={step.image}
                  alt={step.title}
                  className="dsy-process-image"
                  loading="lazy"
                />

                <div className="dsy-process-image-overlay"></div>

                <span className="dsy-process-image-label">
                  {step.label}
                </span>

                <div className="dsy-process-floating-icon">
                  {step.icon}
                </div>

              </div>

            ) : (

              <div className="dsy-process-icon-stage">

                <div className="dsy-process-icon-glow"></div>

                <div className="dsy-process-big-icon">
                  {step.icon}
                </div>

                <span>{step.label}</span>

              </div>

            )}


            {/* CONTENT */}
            <div className="dsy-process-card-content">

              <h3>{step.title}</h3>

              <p>{step.text}</p>

            </div>


            {/* BOTTOM */}
            <div className="dsy-process-card-footer">

              <span>
                {index === processSteps.length - 1
                  ? "Your Business Grows"
                  : "Next Step"}
              </span>

              <div className="dsy-process-arrow">
                →
              </div>

            </div>

          </div>

        ))}

      </div>

    </div>


    {/* BOTTOM MESSAGE */}
    <div className="dsy-process-bottom dsy-reveal">

      <div className="dsy-process-bottom-left">

        <div className="dsy-process-bottom-icon">
          <TrendingUp />
        </div>

        <div>
          <strong>
            Simple process. <span>Powerful business model.</span>
          </strong>

          <p>
            No inventory headache. No warehouse management.
            Just choose, sell, grow and earn.
          </p>
        </div>

      </div>

      <a
        href="#pricing"
        className="dsy-process-bottom-btn"
      >
        Start Your Store
        <span>→</span>
      </a>

    </div>

  </div>

</section>
      {/* ===================== BENEFITS ===================== */}
      {/* ===================== WHY DROPSHY / BENEFITS ===================== */}
<section
  className="dsy-section dsy-register-section"
  id="register"
  style={{ paddingTop: "30px" }}
>
  <div className="dsy-wrap">

    <div className="dsy-benefits-heading dsy-reveal">
      <div className="dsy-benefits-heading-left">
        <span className="dsy-benefits-kicker">
          WHY DROPSHY
        </span>

        <h2 className="dsy-sec-title">
          Everything you need to sell.
          <span> Nothing you need to store.</span>
        </h2>
      </div>

      <p className="dsy-benefits-intro">
        Build and manage your online business without the traditional
        headaches of inventory, warehouse management, packaging and
        product photography.
      </p>
    </div>

    <div className="dsy-benefits-grid-new">
      {benefits.map((benefit, index) => (
        <div
          className={`dsy-benefit-card dsy-benefit-${benefit.color} dsy-reveal`}
          key={benefit.number}
          style={{ transitionDelay: `${index * 70}ms` }}
        >
          <div className="dsy-benefit-top">
            <span className="dsy-benefit-number">
              {benefit.number}
            </span>

            <div className="dsy-benefit-icon-new">
              {benefit.icon}
            </div>
          </div>

          <div className="dsy-benefit-content">
            <h3>{benefit.title}</h3>
            <p>{benefit.text}</p>
          </div>

          <div className="dsy-benefit-arrow">
            →
          </div>
        </div>
      ))}
    </div>

    <div className="dsy-benefits-bottom dsy-reveal">
      <div className="dsy-benefits-bottom-icon">
        <TrendingUp />
      </div>

      <div>
        <strong>
          You focus on <span>growth.</span> We support the operations.
        </strong>
        <p>
          Dropshy helps simplify the operational side of your e-commerce
          business so you can spend more time selling, marketing and
          building your brand.
        </p>
      </div>

      <a href="#pricing" className="dsy-benefits-bottom-btn">
        Start Selling →
      </a>
    </div>

  </div>
</section>
      {/* ===================== REGISTRATION / JOURNEY ===================== */}
      <section
  className="dsy-section dsy-register-section"
  id="register"
  style={{ paddingTop: "30px" }}
>
        <div className="dsy-wrap">

          <div className="dsy-sec-head dsy-reveal">
            <span className="dsy-journey-kicker">🚀 START YOUR JOURNEY</span>
            <h2 className="dsy-sec-title">
              Start your journey towards <span>online success</span>
            </h2>
            <p className="dsy-sec-sub">
              We make e-commerce simple, profitable and stress-free.
              You focus on growing your business, we handle the rest.
            </p>
          </div>

          <div className="dsy-journey-panel dsy-reveal">

            {/* LEFT — PRODUCT / STORE VISUAL */}
            <div className="dsy-journey-visual">

              <div className="dsy-journey-glow"></div>

              <div className="dsy-journey-photo-card">
                <div className="dsy-photo-browser">
                  <span></span>
                  <span></span>
                  <span></span>
                  <b>yourstore.com</b>
                </div>

                <div className="dsy-photo-main">
                  <img
                    src={laptopImg}
                    alt="Dropshy e-commerce store"
                    loading="lazy"
                  />

                  <div className="dsy-photo-overlay">
                    <strong>YOUR ONLINE STORE</strong>
                    <small>Products · Orders · Growth</small>
                  </div>
                </div>
              </div>

              <div className="dsy-product-float dsy-product-camera">
                <img src={cameraImg} alt="Camera product" />
              </div>

              <div className="dsy-product-float dsy-product-jeans">
                <img src={jeansImg} alt="Fashion product" />
              </div>

              <div className="dsy-product-float dsy-product-flat">
                <img src={flatImg} alt="Home product" />
              </div>

              <div className="dsy-product-float dsy-product-box">
                <div className="dsy-mini-box">D</div>
                <span>Dropshy</span>
              </div>

            </div>

            {/* RIGHT — SIMPLE STEPS */}
            <div className="dsy-journey-content">

              <div className="dsy-journey-heading">
                <span className="dsy-journey-line"></span>
                <h3>Simple Steps to Your <em>Success</em></h3>
                <span className="dsy-journey-line"></span>
              </div>

              <div className="dsy-journey-steps">
                {timeline.map((item, index) => {
                  const step = index + 1;

                  const stepIcons = [
                    <ClipboardCheck />,
                    <Store />,
                    <Boxes />,
                    <TrendingUp />,
                  ];

                  return (
                    <div
                      className={`dsy-journey-step ${
                        activeStep >= step ? "dsy-step-active" : ""
                      }`}
                      data-step={step}
                      key={item.number}
                    >
                      <div className="dsy-journey-icon">
                        {stepIcons[index]}
                        <span>{item.number}</span>
                      </div>

                      <div className="dsy-journey-step-body">
                        <span>{item.tag}</span>
                        <h4>{item.title}</h4>
                        <p>{item.text}</p>
                      </div>

                      {index < timeline.length - 1 && (
                        <div className="dsy-journey-arrow">→</div>
                      )}
                    </div>
                  );
                })}
              </div>

              <div className="dsy-success-box">
                <div className="dsy-success-icon">
                  <TrendingUp />
                </div>

                <div>
                  <strong>
                    Your Success is <em>Our Mission</em>
                  </strong>
                  <p>
                    Partner with Dropshy and build a profitable online
                    business without inventory or warehouse hassle.
                  </p>
                </div>
              </div>

              <div className="dsy-journey-actions">
                <a className="dsy-btn-primary" href="#pricing">
                  Enrol Now  <span>→</span>
                </a>
                
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* ===================== PRICING ===================== */}
    
<WEB/>
      {/* ===================== FAQ ===================== */}
      <section className="dsy-section dsy-faq-section">
        <div className="dsy-wrap">
          <div className="dsy-sec-head dsy-reveal">
            <h2 className="dsy-sec-title">Frequently asked questions</h2>
          </div>

          <div className="dsy-faq-list dsy-reveal">
            {faqs.map(([question, answer], index) => {
              const isOpen = openFaq === index;
              return (
                <div className={`dsy-faq-item ${isOpen ? "dsy-faq-open" : ""}`} key={question}>
                  <button className="dsy-faq-question" onClick={() => setOpenFaq(isOpen ? null : index)}>
                    <span>
                      <span className="dsy-faq-index">{String(index + 1).padStart(2, "0")}</span>
                      {question}
                    </span>
                    <span className="dsy-faq-plus"></span>
                  </button>
                  <div className="dsy-faq-answer" style={{ maxHeight: isOpen ? "350px" : "0px" }}>
                    <p>{answer}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ===================== CTA ===================== */}
      <section className="dsy-final-cta">
        <div className="dsy-wrap dsy-final-cta-inner dsy-reveal">
          <h2>Ready to launch your own store?</h2>
          <p>Registration takes minutes. Your branded website can be live in days.</p>
          <a className="dsy-btn-primary dsy-btn-light" href="#pricing">
            View packages
          </a>
        </div>
      </section>
    </div>
  );
};

/* ---------------------------------------------------------
   STYLES — blue / orange theme
   base:  #F4F8FA  ink: #12283A  gray: #D9E1E3
   blue:  #11A7E6  orange: #F59A1B
--------------------------------------------------------- */
const CSS = `
@import url('https://fonts.googleapis.com/css2?family=Sora:wght@400;600;700;800&family=Inter:wght@400;500;600&display=swap');

.dsy-page {
  --ink: #12283A;
  --muted: #5B7480;
  --base: #F4F8FA;
  --gray: #D9E1E3;
  --blue: #11A7E6;
  --blue-dark: #0B84B8;
  --sky: #5FC7ED;
  --navy: #0D5A7A;
  --orange: #F59A1B;
  --orange-dark: #D97F06;
  --amber: #FFC15C;
  font-family: 'Inter', sans-serif;
  color: var(--ink);
  background: var(--base);
  overflow-x: hidden;
}

.dsy-page h1, .dsy-page h2, .dsy-page h3 {
  font-family: 'Sora', sans-serif;
  margin: 0;
}

.dsy-page svg { width: 1em; height: 1em; stroke-width: 2; }

.dsy-wrap { max-width: 1180px; margin: 0 auto; padding: 0 24px; }
.dsy-section { padding: 90px 0; }

.dsy-reveal { opacity: 0; transform: translateY(24px); transition: opacity .7s ease, transform .7s ease; }
.dsy-reveal.dsy-in { opacity: 1; transform: translateY(0); }

/* ---------- HERO ---------- */
.dsy-hero {
  position: relative;
  padding: 70px 0 0;
  background: linear-gradient(160deg, #EAF7FD 0%, #F4F8FA 45%, #FDF3E4 100%);
  overflow: hidden;
}
.dsy-blob { position: absolute; border-radius: 50%; filter: blur(50px); opacity: .3; z-index: 0; }
.dsy-blob-a { width: 340px; height: 340px; background: var(--blue); top: -100px; left: -80px; }
.dsy-blob-b { width: 280px; height: 280px; background: var(--orange); bottom: -60px; right: 10%; }
.dsy-blob-c { width: 220px; height: 220px; background: var(--sky); top: 30%; right: -60px; }

.dsy-hero-grid {
  position: relative; z-index: 1;
  display: grid; grid-template-columns: 1.05fr .95fr; gap: 56px; align-items: center;
  padding-bottom: 70px;
}

.dsy-eyebrow {
  display: inline-block; font-weight: 600; font-size: 13px; letter-spacing: .3px;
  color: var(--blue-dark); background: rgba(17,167,230,.1); padding: 7px 14px; border-radius: 999px;
  margin-bottom: 20px;
}

.dsy-headline { font-size: 44px; line-height: 1.15; font-weight: 800; max-width: 560px; }

.dsy-hero-sub { font-size: 17px; line-height: 1.6; color: var(--muted); max-width: 500px; margin: 20px 0 0; }
.dsy-hero-sub-secondary { margin-top: 12px; }

.dsy-hero-cta { display: flex; gap: 14px; margin: 32px 0 40px; flex-wrap: wrap; }
.dsy-btn-primary {
  background: linear-gradient(120deg, var(--blue), var(--blue-dark));
  color: #fff; font-weight: 600; padding: 14px 28px; border-radius: 12px;
  text-decoration: none; box-shadow: 0 10px 24px rgba(17,167,230,.35);
  transition: transform .2s ease;
}
.dsy-btn-primary:hover { transform: translateY(-2px); }
.dsy-btn-ghost {
  border: 2px solid var(--ink); color: var(--ink); font-weight: 600; padding: 12px 26px;
  border-radius: 12px; text-decoration: none; transition: background .2s ease;
}
.dsy-btn-ghost:hover { background: var(--ink); color: #fff; }

.dsy-stats { display: flex; gap: 36px; }
.dsy-stats strong { display: block; font-size: 24px; font-weight: 800; }
.dsy-stats span { font-size: 13px; color: var(--muted); }

/* storefront illustration */
.dsy-storefront { position: relative; }
.dsy-sf-card {
  background: #fff; border-radius: 22px; box-shadow: 0 30px 60px rgba(18,40,58,.15);
  overflow: hidden; transform: rotate(2deg);
}
.dsy-sf-top { display: flex; align-items: center; gap: 8px; padding: 14px 18px; border-bottom: 1px solid var(--gray); }
.dsy-sf-dot { width: 10px; height: 10px; border-radius: 50%; }
.dsy-sf-url { margin-left: 10px; font-size: 12px; color: var(--muted); font-weight: 600; }
.dsy-sf-body { padding: 20px; }
.dsy-sf-hero-banner {
  background: linear-gradient(120deg, #E4F4FB, #FDECD1);
  border-radius: 16px; padding: 16px; display: flex; align-items: center; gap: 18px; margin-bottom: 18px;
}
.dsy-sf-store-photo {
  width: 72px; height: 72px; border-radius: 12px; object-fit: cover; flex-shrink: 0;
  box-shadow: 0 8px 16px rgba(18,40,58,.18);
}
.dsy-sf-banner-lines { flex: 1; }
.dsy-sf-line { display: block; height: 10px; border-radius: 6px; background: rgba(18,40,58,.12); margin-bottom: 8px; }
.dsy-sf-line.long { width: 100%; }
.dsy-sf-line.short { width: 55%; }
.dsy-sf-products { display: grid; grid-template-columns: repeat(4, 1fr); gap: 12px; }
.dsy-sf-product {
  aspect-ratio: 1; border-radius: 14px; overflow: hidden;
}
.dsy-sf-product img { width: 100%; height: 100%; object-fit: cover; display: block; }

.dsy-node {
  position: absolute; display: flex; align-items: center; gap: 6px;
  background: #fff; border-radius: 999px; padding: 8px 14px; font-size: 12px; font-weight: 700;
  box-shadow: 0 10px 20px rgba(18,40,58,.12); color: var(--ink);
  animation: dsy-float 4s ease-in-out infinite;
}
.dsy-node svg { color: var(--nc); font-size: 14px; }
.node-1 { top: 8%; left: -6%; animation-delay: 0s; }
.node-2 { top: 2%; right: 4%; animation-delay: .5s; }
.node-3 { top: 46%; right: -10%; animation-delay: 1s; }
.node-4 { bottom: 10%; right: 8%; animation-delay: 1.5s; }
.node-5 { bottom: -4%; left: 14%; animation-delay: 2s; }
.node-6 { top: 44%; left: -12%; animation-delay: 2.5s; }

@keyframes dsy-float { 0%,100% { transform: translateY(0); } 50% { transform: translateY(-8px); } }

.dsy-ticker-wrap { border-top: 1px solid var(--gray); overflow: hidden; background: var(--ink); }
.dsy-ticker { display: flex; gap: 48px; padding: 14px 0; white-space: nowrap; animation: dsy-scroll 22s linear infinite; }
.dsy-ticker span { color: #fff; font-weight: 600; font-size: 13px; opacity: .85; }
@keyframes dsy-scroll { from { transform: translateX(0); } to { transform: translateX(-50%); } }

/* ---------- SECTION HEAD ---------- */
.dsy-sec-head { text-align: center; max-width: 620px; margin: 0 auto 50px; }
.dsy-sec-title { font-size: 32px; font-weight: 800; line-height: 1.25; }
.dsy-sec-sub { color: var(--muted); font-size: 16px; margin-top: 14px; }

/* ---------- STEPS ---------- */
.dsy-steps-grid { display: grid; grid-template-columns: repeat(4, 1fr); gap: 22px; }
.dsy-step-card {
  background: #fff; border-radius: 18px; padding: 26px; position: relative;
  border: 1px solid var(--gray); transition: transform .2s ease;
}
.dsy-step-card:hover { transform: translateY(-6px); }
.dsy-step-num { position: absolute; top: 20px; right: 22px; font-size: 13px; font-weight: 800; color: rgba(18,40,58,.18); }
.dsy-step-icon {
  width: 48px; height: 48px; border-radius: 14px; display: flex; align-items: center; justify-content: center;
  font-size: 20px; color: #fff; margin-bottom: 16px;
}
.dsy-step-card h3 { font-size: 17px; margin-bottom: 8px; }
.dsy-step-card p { font-size: 14px; color: var(--muted); line-height: 1.55; }
.c-blue .dsy-step-icon { background: var(--blue); }
.c-orange .dsy-step-icon { background: var(--orange); }
.c-sky .dsy-step-icon { background: var(--sky); }
.c-amber .dsy-step-icon { background: var(--amber); }
.c-navy .dsy-step-icon { background: var(--navy); }
/* =========================================================
   PREMIUM BENEFITS / WHY DROPSHY
========================================================= */

.dsy-benefits-section {
  position: relative;
  overflow: hidden;
  background:
    radial-gradient(
      circle at 5% 15%,
      rgba(17, 167, 230, .08),
      transparent 25%
    ),
    radial-gradient(
      circle at 95% 85%,
      rgba(245, 154, 27, .08),
      transparent 25%
    ),
    #ffffff;
}

/* subtle background grid */

.dsy-benefits-section::before {
  content: "";
  position: absolute;
  inset: 0;
  pointer-events: none;
  opacity: .45;
  background-image:
    linear-gradient(
      rgba(18,40,58,.025) 1px,
      transparent 1px
    ),
    linear-gradient(
      90deg,
      rgba(18,40,58,.025) 1px,
      transparent 1px
    );
  background-size: 55px 55px;
}

/* ---------- HEADING ---------- */

.dsy-benefits-heading {
  position: relative;
  z-index: 2;

  display: grid;
  grid-template-columns: 1.1fr .9fr;
  align-items: end;
  gap: 70px;

  margin-bottom: 48px;
}

.dsy-benefits-heading-left {
  max-width: 700px;
}

.dsy-benefits-kicker {
  display: inline-flex;
  align-items: center;
  gap: 8px;

  margin-bottom: 16px;
  padding: 7px 13px;

  border-radius: 999px;

  background: rgba(17,167,230,.08);
  border: 1px solid rgba(17,167,230,.13);

  color: var(--blue-dark);

  font-size: 11px;
  font-weight: 800;
  letter-spacing: .13em;
}

.dsy-benefits-kicker::before {
  content: "";
  width: 7px;
  height: 7px;
  border-radius: 50%;
  background: var(--orange);
  box-shadow: 0 0 0 5px rgba(245,154,27,.10);
}

.dsy-benefits-heading .dsy-sec-title {
  font-size: clamp(32px, 4vw, 48px);
  line-height: 1.12;
  letter-spacing: -.045em;
  color: #101a3a;
}

.dsy-benefits-heading .dsy-sec-title span {
  color: var(--blue);
}

.dsy-benefits-intro {
  max-width: 440px;
  margin: 0;

  color: var(--muted);
  font-size: 15px;
  line-height: 1.75;
}

/* ---------- GRID ---------- */

.dsy-benefits-grid-new {
  position: relative;
  z-index: 2;

  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 18px;
}

/* ---------- CARD ---------- */

.dsy-benefit-card {
  position: relative;
  min-height: 245px;

  padding: 23px;

  border-radius: 22px;
  border: 1px solid #e4edf2;

  background: rgba(255,255,255,.94);

  overflow: hidden;

  box-shadow:
    0 10px 30px rgba(18,40,58,.045);

  transition:
    transform .35s ease,
    box-shadow .35s ease,
    border-color .35s ease;
}

.dsy-benefit-card::before {
  content: "";

  position: absolute;

  width: 140px;
  height: 140px;

  right: -70px;
  bottom: -70px;

  border-radius: 50%;

  background: var(--benefit-soft);

  transition:
    transform .45s ease,
    opacity .35s ease;

  opacity: .75;
}

.dsy-benefit-card::after {
  content: "";

  position: absolute;

  left: 0;
  top: 0;

  width: 100%;
  height: 3px;

  background: var(--benefit-color);

  transform: scaleX(0);
  transform-origin: left;

  transition: transform .35s ease;
}

.dsy-benefit-card:hover {
  transform: translateY(-8px);

  border-color: var(--benefit-border);

  box-shadow:
    0 22px 45px rgba(18,40,58,.10);
}

.dsy-benefit-card:hover::before {
  transform: scale(1.7);
}

.dsy-benefit-card:hover::after {
  transform: scaleX(1);
}

/* ---------- TOP ---------- */

.dsy-benefit-top {
  position: relative;
  z-index: 2;

  display: flex;
  align-items: flex-start;
  justify-content: space-between;

  margin-bottom: 24px;
}

.dsy-benefit-number {
  font-family: "Sora", sans-serif;

  font-size: 12px;
  font-weight: 800;

  color: #a6b8c2;
  letter-spacing: .08em;
}

/* ---------- ICON ---------- */

.dsy-benefit-icon-new {
  width: 52px;
  height: 52px;

  display: flex;
  align-items: center;
  justify-content: center;

  border-radius: 16px;

  background: var(--benefit-soft);
  color: var(--benefit-color);

  font-size: 22px;

  transition:
    transform .35s ease,
    background .35s ease;
}

.dsy-benefit-card:hover .dsy-benefit-icon-new {
  transform: rotate(-5deg) scale(1.08);
}

/* ---------- CONTENT ---------- */

.dsy-benefit-content {
  position: relative;
  z-index: 2;
  padding-right: 8px;
}

.dsy-benefit-content h3 {
  margin: 0 0 10px;

  color: #12283a;

  font-family: "Sora", sans-serif;
  font-size: 16px;
  font-weight: 700;

  line-height: 1.35;
  letter-spacing: -.015em;
}

.dsy-benefit-content p {
  margin: 0;

  color: #647b88;

  font-size: 13px;
  line-height: 1.65;
}

/* ---------- ARROW ---------- */

.dsy-benefit-arrow {
  position: absolute;

  right: 20px;
  bottom: 18px;

  width: 30px;
  height: 30px;

  display: flex;
  align-items: center;
  justify-content: center;

  border-radius: 50%;

  background: #f4f8fa;

  color: #91a5af;

  font-size: 16px;
  font-weight: 800;

  transition:
    background .3s ease,
    color .3s ease,
    transform .3s ease;
}

.dsy-benefit-card:hover .dsy-benefit-arrow {
  background: var(--benefit-color);
  color: #fff;

  transform: translateX(3px);
}

/* =========================================================
   BENEFIT COLOR THEMES
========================================================= */

.dsy-benefit-blue {
  --benefit-color: #11A7E6;
  --benefit-soft: rgba(17,167,230,.10);
  --benefit-border: rgba(17,167,230,.25);
}

.dsy-benefit-orange {
  --benefit-color: #F59A1B;
  --benefit-soft: rgba(245,154,27,.11);
  --benefit-border: rgba(245,154,27,.25);
}

.dsy-benefit-sky {
  --benefit-color: #42B8E5;
  --benefit-soft: rgba(66,184,229,.11);
  --benefit-border: rgba(66,184,229,.25);
}

.dsy-benefit-amber {
  --benefit-color: #E9A52C;
  --benefit-soft: rgba(233,165,44,.11);
  --benefit-border: rgba(233,165,44,.25);
}

.dsy-benefit-navy {
  --benefit-color: #0D5A7A;
  --benefit-soft: rgba(13,90,122,.10);
  --benefit-border: rgba(13,90,122,.25);
}

.dsy-benefit-purple {
  --benefit-color: #7357E8;
  --benefit-soft: rgba(115,87,232,.10);
  --benefit-border: rgba(115,87,232,.22);
}

.dsy-benefit-green {
  --benefit-color: #10A66A;
  --benefit-soft: rgba(16,166,106,.10);
  --benefit-border: rgba(16,166,106,.22);
}

.dsy-benefit-red {
  --benefit-color: #E85D5D;
  --benefit-soft: rgba(232,93,93,.10);
  --benefit-border: rgba(232,93,93,.22);
}

/* =========================================================
   BOTTOM HIGHLIGHT
========================================================= */

.dsy-benefits-bottom {
  position: relative;
  z-index: 2;

  display: flex;
  align-items: center;
  gap: 18px;

  margin-top: 24px;
  padding: 22px 24px;

  border-radius: 20px;

  background:
    linear-gradient(
      110deg,
      #f3fbff 0%,
      #ffffff 55%,
      #fff8ed 100%
    );

  border: 1px solid rgba(17,167,230,.12);

  box-shadow:
    0 15px 35px rgba(18,40,58,.055);
}

.dsy-benefits-bottom-icon {
  flex: 0 0 48px;

  width: 48px;
  height: 48px;

  display: flex;
  align-items: center;
  justify-content: center;

  border-radius: 14px;

  background: var(--blue);
  color: #fff;

  font-size: 21px;

  box-shadow:
    0 10px 22px rgba(17,167,230,.20);
}

.dsy-benefits-bottom strong {
  display: block;

  margin-bottom: 4px;

  color: var(--navy);

  font-family: "Sora", sans-serif;
  font-size: 14px;
}

.dsy-benefits-bottom strong span {
  color: var(--blue);
}

.dsy-benefits-bottom p {
  margin: 0;

  color: var(--muted);

  font-size: 12px;
  line-height: 1.55;
}

.dsy-benefits-bottom-btn {
  margin-left: auto;

  flex-shrink: 0;

  padding: 12px 19px;

  border-radius: 10px;

  background: var(--ink);
  color: #fff;

  text-decoration: none;

  font-size: 12px;
  font-weight: 700;

  transition:
    transform .25s ease,
    background .25s ease;
}

.dsy-benefits-bottom-btn:hover {
  transform: translateY(-2px);
  background: var(--blue);
}

/* =========================================================
   RESPONSIVE
========================================================= */

@media (max-width: 1050px) {

  .dsy-benefits-grid-new {
    grid-template-columns: repeat(2, 1fr);
  }

  .dsy-benefits-heading {
    grid-template-columns: 1fr;
    gap: 18px;
    align-items: start;
  }

  .dsy-benefits-intro {
    max-width: 650px;
  }
}

@media (max-width: 700px) {

  .dsy-benefits-grid-new {
    grid-template-columns: 1fr 1fr;
    gap: 12px;
  }

  .dsy-benefit-card {
    min-height: 235px;
    padding: 18px;
    border-radius: 18px;
  }

  .dsy-benefit-content h3 {
    font-size: 14px;
  }

  .dsy-benefit-content p {
    font-size: 12px;
  }

  .dsy-benefit-icon-new {
    width: 45px;
    height: 45px;
    border-radius: 13px;
  }

  .dsy-benefits-bottom {
    align-items: flex-start;
    flex-wrap: wrap;
  }

  .dsy-benefits-bottom-btn {
    margin-left: 66px;
  }
}

@media (max-width: 480px) {

  .dsy-benefits-section {
    padding: 65px 0;
  }

  .dsy-benefits-heading {
    margin-bottom: 30px;
  }

  .dsy-benefits-heading .dsy-sec-title {
    font-size: 29px;
  }

  .dsy-benefits-intro {
    font-size: 13px;
  }

  .dsy-benefits-grid-new {
    grid-template-columns: 1fr;
    gap: 12px;
  }

  .dsy-benefit-card {
    min-height: auto;
    padding: 20px;
  }

  .dsy-benefit-top {
    margin-bottom: 18px;
  }

  .dsy-benefit-content {
    padding-right: 25px;
  }

  .dsy-benefit-content h3 {
    font-size: 15px;
  }

  .dsy-benefit-content p {
    font-size: 12px;
    line-height: 1.6;
  }

  .dsy-benefits-bottom {
    padding: 18px;
    gap: 12px;
  }

  .dsy-benefits-bottom-icon {
    width: 42px;
    height: 42px;
    flex-basis: 42px;
  }

  .dsy-benefits-bottom > div:nth-child(2) {
    flex: 1;
  }

  .dsy-benefits-bottom strong {
    font-size: 12px;
  }

  .dsy-benefits-bottom p {
    font-size: 11px;
  }

  .dsy-benefits-bottom-btn {
    width: 100%;
    margin-left: 0;

    text-align: center;
  }
}

/* ---------- REGISTRATION / JOURNEY ---------- */
.dsy-register-section {
  position: relative;
  overflow: hidden;
  background:
    radial-gradient(circle at 8% 70%, rgba(17,167,230,.08), transparent 28%),
    radial-gradient(circle at 92% 20%, rgba(245,154,27,.07), transparent 25%),
    linear-gradient(180deg, #fff, #F3F9FC);
}

.dsy-journey-kicker {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 9px 18px;
  border: 1px solid rgba(245,154,27,.35);
  border-radius: 999px;
  color: var(--orange-dark);
  background: rgba(255,255,255,.85);
  font-size: 12px;
  font-weight: 800;
  letter-spacing: .08em;
}

.dsy-register-section .dsy-sec-title span {
  color: var(--blue);
}

.dsy-register-section .dsy-sec-sub {
  max-width: 720px;
}

.dsy-journey-panel {
  position: relative;
  display: grid;
  grid-template-columns: .82fr 1.18fr;
  gap: 42px;
  align-items: center;
  padding: 38px;
  margin-top: 34px;
  border: 1px solid rgba(17,167,230,.13);
  border-radius: 30px;
  background: rgba(255,255,255,.92);
  box-shadow: 0 25px 70px rgba(18,40,58,.09);
  overflow: hidden;
}

.dsy-journey-panel::before {
  content: "";
  position: absolute;
  width: 420px;
  height: 420px;
  left: -180px;
  bottom: -230px;
  border-radius: 50%;
  background: rgba(17,167,230,.08);
  pointer-events: none;
}

.dsy-journey-visual {
  position: relative;
  min-height: 430px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.dsy-journey-glow {
  position: absolute;
  width: 330px;
  height: 330px;
  border-radius: 50%;
  background: radial-gradient(circle, rgba(17,167,230,.16), transparent 68%);
}

.dsy-journey-photo-card {
  position: relative;
  width: min(100%, 455px);
  padding: 10px;
  border-radius: 25px;
  background: #fff;
  border: 1px solid rgba(17,167,230,.15);
  box-shadow: 0 24px 55px rgba(18,40,58,.13);
  transform: rotate(-2deg);
  z-index: 2;
}

.dsy-photo-browser {
  height: 34px;
  display: flex;
  align-items: center;
  gap: 7px;
  padding: 0 13px;
  border-bottom: 1px solid #edf2f5;
  color: var(--muted);
  font-size: 10px;
}

.dsy-photo-browser span {
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: #dfe7eb;
}

.dsy-photo-browser b {
  margin-left: 8px;
  font-weight: 700;
}

.dsy-photo-main {
  position: relative;
  height: 350px;
  overflow: hidden;
  border-radius: 17px;
  background: linear-gradient(145deg, #eaf7fd, #fff4e5);
}

.dsy-photo-main img {
  width: 100%;
  height: 100%;
  display: block;
  object-fit: cover;
  object-position: center;
}

.dsy-photo-overlay {
  position: absolute;
  left: 18px;
  bottom: 18px;
  display: flex;
  flex-direction: column;
  gap: 3px;
  padding: 12px 15px;
  border-radius: 12px;
  background: rgba(255,255,255,.94);
  box-shadow: 0 10px 25px rgba(18,40,58,.12);
}

.dsy-photo-overlay strong {
  color: var(--navy);
  font-size: 11px;
  letter-spacing: .06em;
}

.dsy-photo-overlay small {
  color: var(--muted);
  font-size: 10px;
}

.dsy-product-float {
  position: absolute;
  width: 72px;
  height: 72px;
  padding: 6px;
  border-radius: 17px;
  background: #fff;
  border: 1px solid rgba(17,167,230,.14);
  box-shadow: 0 14px 35px rgba(18,40,58,.13);
  z-index: 4;
  animation: dsyFloatProduct 4s ease-in-out infinite;
}

.dsy-product-float img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 12px;
}

.dsy-product-camera {
  top: 36px;
  left: 0;
}

.dsy-product-jeans {
  right: 2px;
  top: 82px;
  animation-delay: .7s;
}

.dsy-product-flat {
  left: 24px;
  bottom: 40px;
  animation-delay: 1.2s;
}

.dsy-product-box {
  right: 28px;
  bottom: 22px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 5px;
  width: 92px;
  height: 48px;
  padding: 5px 9px;
  animation-delay: 1.8s;
}

.dsy-mini-box {
  width: 28px;
  height: 28px;
  display: grid;
  place-items: center;
  border-radius: 8px;
  background: var(--blue);
  color: #fff;
  font-weight: 800;
}

.dsy-product-box span {
  color: var(--navy);
  font-size: 10px;
  font-weight: 800;
}

@keyframes dsyFloatProduct {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-8px); }
}

.dsy-journey-content {
  position: relative;
  z-index: 2;
}

.dsy-journey-heading {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 12px;
  margin-bottom: 26px;
}

.dsy-journey-heading h3 {
  margin: 0;
  color: var(--navy);
  font-family: "Sora", sans-serif;
  font-size: 25px;
  text-align: center;
}

.dsy-journey-heading h3 em {
  color: var(--blue);
  font-style: normal;
}

.dsy-journey-line {
  width: 38px;
  height: 3px;
  border-radius: 99px;
  background: var(--orange);
}

.dsy-journey-line:last-child {
  background: var(--blue);
}

.dsy-journey-steps {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 13px;
}

.dsy-journey-step {
  position: relative;
  min-width: 0;
  padding: 18px 11px 17px;
  border-radius: 18px;
  border: 1px solid #e3edf2;
  background: #fff;
  text-align: center;
  transition: transform .3s ease, box-shadow .3s ease, border-color .3s ease;
}

.dsy-journey-step:hover,
.dsy-journey-step.dsy-step-active {
  transform: translateY(-5px);
  border-color: rgba(17,167,230,.28);
  box-shadow: 0 15px 30px rgba(18,40,58,.09);
}

.dsy-journey-icon {
  position: relative;
  width: 58px;
  height: 58px;
  margin: 0 auto 12px;
  display: grid;
  place-items: center;
  border-radius: 50%;
  color: var(--blue);
  background: #eef9fe;
  border: 1px solid rgba(17,167,230,.2);
}

.dsy-journey-step:nth-child(2) .dsy-journey-icon {
  color: var(--orange);
  background: #fff5e8;
  border-color: rgba(245,154,27,.25);
}

.dsy-journey-step:nth-child(3) .dsy-journey-icon {
  color: #6347e8;
  background: #f3efff;
  border-color: rgba(99,71,232,.2);
}

.dsy-journey-step:nth-child(4) .dsy-journey-icon {
  color: #10a66a;
  background: #ecfbf4;
  border-color: rgba(16,166,106,.2);
}

.dsy-journey-icon svg {
  width: 24px;
  height: 24px;
}

.dsy-journey-icon span {
  position: absolute;
  right: -3px;
  bottom: -2px;
  width: 21px;
  height: 21px;
  display: grid;
  place-items: center;
  border-radius: 50%;
  background: var(--blue);
  color: #fff;
  font-size: 9px;
  font-weight: 800;
}

.dsy-journey-step:nth-child(2) .dsy-journey-icon span {
  background: var(--orange);
}

.dsy-journey-step:nth-child(3) .dsy-journey-icon span {
  background: #6347e8;
}

.dsy-journey-step:nth-child(4) .dsy-journey-icon span {
  background: #10a66a;
}

.dsy-journey-step-body > span {
  display: block;
  margin-bottom: 5px;
  color: var(--orange-dark);
  font-size: 9px;
  font-weight: 800;
  text-transform: uppercase;
  letter-spacing: .08em;
}

.dsy-journey-step-body h4 {
  margin: 0 0 7px;
  color: var(--navy);
  font-family: "Sora", sans-serif;
  font-size: 14px;
  line-height: 1.3;
}

.dsy-journey-step-body p {
  margin: 0;
  color: var(--muted);
  font-size: 11px;
  line-height: 1.55;
}

.dsy-journey-arrow {
  position: absolute;
  top: 46%;
  right: -18px;
  color: var(--blue);
  font-size: 20px;
  font-weight: 800;
  z-index: 5;
}

.dsy-success-box {
  display: flex;
  align-items: center;
  gap: 14px;
  margin-top: 20px;
  padding: 17px 18px;
  border-radius: 17px;
  background: linear-gradient(120deg, #eef8fd, #f5fbff);
  border: 1px solid rgba(17,167,230,.14);
}

.dsy-success-icon {
  width: 48px;
  height: 48px;
  flex: 0 0 48px;
  display: grid;
  place-items: center;
  border-radius: 14px;
  background: var(--blue);
  color: #fff;
}

.dsy-success-icon svg {
  width: 22px;
}

.dsy-success-box strong {
  display: block;
  margin-bottom: 3px;
  color: var(--navy);
  font-family: "Sora", sans-serif;
  font-size: 14px;
}

.dsy-success-box strong em {
  color: var(--blue);
  font-style: normal;
}

.dsy-success-box p {
  margin: 0;
  color: var(--muted);
  font-size: 11px;
  line-height: 1.5;
}

.dsy-journey-actions {
  display: flex;
  gap: 12px;
  margin-top: 19px;
}

.dsy-journey-actions .dsy-btn-primary {
  padding: 13px 20px;
}

.dsy-journey-actions .dsy-btn-ghost {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 13px 20px;
  border-radius: 10px;
  border: 1px solid #dbe7ec;
  color: var(--navy);
  font-size: 13px;
  font-weight: 700;
  text-decoration: none;
  background: #fff;
}

/* ---------- RESPONSIVE JOURNEY ---------- */
@media (max-width: 1100px) {
  .dsy-journey-panel {
    grid-template-columns: .9fr 1.1fr;
    gap: 25px;
    padding: 28px;
  }

  .dsy-journey-steps {
    grid-template-columns: repeat(2, 1fr);
  }

  .dsy-journey-arrow {
    display: none;
  }

  .dsy-journey-photo-card {
    max-width: 400px;
  }

  .dsy-photo-main {
    height: 310px;
  }
}

@media (max-width: 980px) {
  .dsy-journey-panel {
    grid-template-columns: 1fr;
  }

  .dsy-journey-visual {
    min-height: 390px;
    max-width: 600px;
    width: 100%;
    margin: 0 auto;
  }

  .dsy-journey-content {
    width: 100%;
  }
}

@media (max-width: 560px) {
  .dsy-journey-panel {
    padding: 18px;
    border-radius: 22px;
    margin-top: 25px;
  }

  .dsy-journey-visual {
    min-height: 310px;
  }

  .dsy-photo-main {
    height: 255px;
  }

  .dsy-product-float {
    width: 55px;
    height: 55px;
    border-radius: 13px;
  }

  .dsy-product-camera {
    left: -2px;
    top: 22px;
  }

  .dsy-product-jeans {
    right: -2px;
    top: 50px;
  }

  .dsy-product-flat {
    left: 2px;
    bottom: 20px;
  }

  .dsy-product-box {
    right: 0;
    bottom: 5px;
    width: 78px;
    height: 40px;
  }

  .dsy-journey-heading {
    gap: 7px;
  }

  .dsy-journey-heading h3 {
    font-size: 19px;
  }

  .dsy-journey-line {
    width: 25px;
  }

  .dsy-journey-steps {
    grid-template-columns: 1fr 1fr;
    gap: 10px;
  }

  .dsy-journey-step {
    padding: 14px 8px;
  }

  .dsy-journey-icon {
    width: 48px;
    height: 48px;
  }

  .dsy-journey-step-body h4 {
    font-size: 12px;
  }

  .dsy-journey-step-body p {
    font-size: 10px;
  }

  .dsy-success-box {
    align-items: flex-start;
  }

  .dsy-journey-actions {
    flex-direction: column;
  }

  .dsy-journey-actions .dsy-btn-primary,
  .dsy-journey-actions .dsy-btn-ghost {
    width: 100%;
  }
}

/* ---------- FINAL CTA ---------- */
.dsy-final-cta { background: linear-gradient(120deg, var(--blue), var(--orange)); padding: 80px 0; }
.dsy-final-cta-inner { text-align: center; }
.dsy-final-cta h2 { color: #fff; font-size: 30px; margin-bottom: 12px; }
.dsy-final-cta p { color: rgba(255,255,255,.85); margin-bottom: 26px; }
.dsy-btn-light { background: #fff; color: var(--ink); box-shadow: none; }

/* =========================================================
   MODERN NATIONAL E-COMMERCE HERO
========================================================= */
.dsy-modern-hero {
  padding: 58px 0 72px;
  background: radial-gradient(circle at 78% 45%, rgba(17,167,230,.15), transparent 30%), radial-gradient(circle at 8% 85%, rgba(245,154,27,.10), transparent 24%), linear-gradient(135deg, #f7fcff 0%, #ffffff 58%, #fffaf3 100%);
}
.dsy-modern-hero .dsy-hero-grid {
  max-width: 1240px; margin: 0 auto; padding: 0 24px;
  grid-template-columns: minmax(0,1.05fr) minmax(0,.95fr); gap: 76px; min-height: 620px;
}
.dsy-modern-content { padding-left: 0; z-index: 4; }
.dsy-modern-content .dsy-eyebrow { padding: 9px 16px; background: rgba(255,255,255,.86); box-shadow: 0 8px 24px rgba(17,167,230,.08); }
.dsy-modern-content .dsy-headline { max-width: 620px; font-size: clamp(48px,5.2vw,72px); line-height: 1.02; letter-spacing: -.055em; color: #101a3a; }
.dsy-modern-content .dsy-headline em { color: var(--blue); font-style: normal; position: relative; display: inline-block; }
.dsy-modern-content .dsy-headline em::after { content: ""; position: absolute; left: 0; right: 8%; bottom: -9px; height: 6px; border-radius: 99px; background: var(--orange); }
.dsy-modern-content .dsy-hero-sub { max-width: 570px; margin-top: 26px; font-size: 16px; line-height: 1.75; color: #5c7287; }
.dsy-hero-pills { display: flex; flex-wrap: wrap; gap: 10px; margin-top: 24px; }
.dsy-hero-pills span { display: inline-flex; align-items: center; gap: 8px; padding: 10px 13px; border: 1px solid rgba(17,167,230,.12); background: rgba(255,255,255,.88); border-radius: 13px; color: #18334a; font-size: 12px; font-weight: 700; box-shadow: 0 8px 22px rgba(18,40,58,.06); }
.dsy-hero-pills svg { color: var(--blue); font-size: 17px; }
.dsy-modern-content .dsy-hero-cta { margin: 27px 0 25px; gap: 12px; }
.dsy-modern-content .dsy-btn-primary, .dsy-modern-content .dsy-btn-ghost { min-height: 52px; display: inline-flex; align-items: center; justify-content: center; gap: 9px; }
.dsy-modern-content .dsy-btn-ghost { border: 1px solid #d9e5ec; background: #fff; }
.dsy-trust-row { display: flex; align-items: center; gap: 12px; margin-top: 10px; }
.dsy-trust-avatars { width: 48px; height: 38px; border-radius: 19px; background: linear-gradient(135deg,#e7f8ff,#fff1db); display: flex; align-items: center; justify-content: center; color: #0d5a7a; font-size: 12px; font-weight: 800; border: 2px solid #fff; box-shadow: 0 8px 18px rgba(18,40,58,.10); }
.dsy-trust-row strong, .dsy-trust-row small { display: block; }
.dsy-trust-row strong { font-size: 12px; color: #29445b; }
.dsy-trust-row small { margin-top: 3px; color: #f59a1b; letter-spacing: 2px; }
.dsy-modern-visual { position: relative; min-height: 590px; display: flex; align-items: center; justify-content: center; }
.dsy-main-hero-image { position: relative; z-index: 2; width: min(100%,690px); height: auto; display: block; border-radius: 30px; object-fit: cover; filter: drop-shadow(0 30px 55px rgba(13,90,122,.16)); animation: dsyHeroFloat 6s ease-in-out infinite; }
.dsy-visual-glow { position: absolute; width: 520px; height: 520px; border-radius: 50%; background: radial-gradient(circle,rgba(95,199,237,.25),transparent 68%); }
.dsy-visual-badge { position: absolute; z-index: 5; display: flex; align-items: center; gap: 10px; padding: 12px 16px; border-radius: 16px; background: rgba(255,255,255,.94); border: 1px solid rgba(17,167,230,.12); box-shadow: 0 18px 35px rgba(18,40,58,.13); backdrop-filter: blur(10px); }
.dsy-visual-badge span { width: 32px; height: 32px; border-radius: 50%; display: flex; align-items: center; justify-content: center; background: #e9fff3; color: #14a65b; font-weight: 900; }
.dsy-visual-badge strong, .dsy-visual-badge small { display: block; }
.dsy-visual-badge strong { font-size: 11px; color: #18334a; }
.dsy-visual-badge small { margin-top: 2px; font-size: 9px; color: #7890a2; }
.dsy-badge-order { top: 6%; left: 3%; }
@keyframes dsyHeroFloat { 0%,100% { transform: translateY(0); } 50% { transform: translateY(-8px); } }

/* ---------- RESPONSIVE ---------- */
@media (max-width: 980px) {
  .dsy-hero-grid { grid-template-columns: 1fr; }
  .dsy-steps-grid { grid-template-columns: repeat(2, 1fr); }
  .dsy-benefits-grid { grid-template-columns: repeat(2, 1fr); }
  .dsy-pricing-grid { grid-template-columns: 1fr; }
  .dsy-plan-featured { transform: none; }
  .dsy-register-layout { grid-template-columns: 1fr; }
  .dsy-headline { font-size: 34px; }
  .dsy-node { display: none; }
}
@media (max-width: 560px) {
  .dsy-steps-grid, .dsy-benefits-grid { grid-template-columns: 1fr 1fr; }
}

@media (max-width: 980px) {
  .dsy-modern-hero .dsy-hero-grid { grid-template-columns: 1fr; gap: 40px; min-height: auto; }
  .dsy-modern-content { text-align: center; }
  .dsy-modern-content .dsy-headline, .dsy-modern-content .dsy-hero-sub { margin-left: auto; margin-right: auto; }
  .dsy-hero-pills, .dsy-modern-content .dsy-hero-cta, .dsy-trust-row { justify-content: center; }
  .dsy-modern-visual { min-height: 460px; }
  .dsy-badge-order { left: 5%; }
}
@media (max-width: 560px) {
  .dsy-modern-hero { padding-top: 35px; }
  .dsy-modern-hero .dsy-hero-grid { padding: 0 16px; }
  .dsy-modern-content .dsy-headline { font-size: 40px; }
  .dsy-modern-content .dsy-hero-sub { font-size: 14px; }
  .dsy-hero-pills span { font-size: 10px; padding: 8px 10px; }
  .dsy-modern-content .dsy-hero-cta { flex-direction: column; }
  .dsy-modern-content .dsy-btn-primary, .dsy-modern-content .dsy-btn-ghost { width: 100%; }
  .dsy-modern-visual { min-height: 330px; }
  .dsy-main-hero-image { border-radius: 20px; }
  .dsy-badge-order { top: -2%; left: 2%; transform: scale(.82); transform-origin: left top; }
}

/* =========================================================
   FINAL HERO OVERRIDE — IMAGE LEFT / CONTENT RIGHT
   No floating Hosting / Support / SEO / Payments labels.
========================================================= */
.dsy-modern-hero .dsy-hero-grid {
  grid-template-columns: minmax(0, 1.02fr) minmax(0, 0.98fr) !important;
  gap: 78px !important;
  align-items: center !important;
}

.dsy-modern-hero .dsy-modern-visual {
  order: 1 !important;
  min-height: 560px !important;
  justify-content: flex-start !important;
}

.dsy-modern-hero .dsy-modern-content {
  order: 2 !important;
  padding-left: 0 !important;
  text-align: left !important;
}

.dsy-modern-hero .dsy-main-hero-image {
  width: min(100%, 650px) !important;
  max-height: 560px !important;
  object-fit: contain !important;
  border-radius: 30px !important;
  filter: drop-shadow(0 28px 55px rgba(13,90,122,.15)) !important;
}

.dsy-modern-hero .dsy-hero-pills {
  justify-content: flex-start !important;
}

.dsy-modern-hero .dsy-hero-cta {
  justify-content: flex-start !important;
}

.dsy-modern-hero .dsy-trust-row {
  justify-content: flex-start !important;
}

/* Keep only the useful order badge; all old node labels stay hidden. */
.dsy-modern-hero .dsy-node,
.dsy-modern-hero .node-1,
.dsy-modern-hero .node-2,
.dsy-modern-hero .node-3,
.dsy-modern-hero .node-4,
.dsy-modern-hero .node-5,
.dsy-modern-hero .node-6 {
  display: none !important;
}

@media (max-width: 980px) {
  .dsy-modern-hero .dsy-hero-grid {
    grid-template-columns: 1fr !important;
    gap: 42px !important;
  }

  .dsy-modern-hero .dsy-modern-visual {
    order: 1 !important;
    min-height: 420px !important;
    justify-content: center !important;
  }

  .dsy-modern-hero .dsy-modern-content {
    order: 2 !important;
    text-align: center !important;
  }

  .dsy-modern-hero .dsy-headline,
  .dsy-modern-hero .dsy-hero-sub {
    margin-left: auto !important;
    margin-right: auto !important;
  }

  .dsy-modern-hero .dsy-hero-pills,
  .dsy-modern-hero .dsy-hero-cta,
  .dsy-modern-hero .dsy-trust-row {
    justify-content: center !important;
  }
}

@media (max-width: 560px) {
  .dsy-modern-hero .dsy-hero-grid {
    padding: 0 16px !important;
    gap: 34px !important;
  }

  .dsy-modern-hero .dsy-modern-visual {
    min-height: 300px !important;
  }

  .dsy-modern-hero .dsy-main-hero-image {
    width: 100% !important;
    border-radius: 20px !important;
  }

  .dsy-modern-hero .dsy-visual-badge {
    transform: scale(.82);
    transform-origin: left top;
  }
}
/* =========================================================
   PREMIUM HOW IT WORKS / PROCESS SECTION
========================================================= */

.dsy-process-section {
  position: relative;
  overflow: hidden;

  padding: 105px 0;

  background:
    radial-gradient(
      circle at 10% 20%,
      rgba(17,167,230,.08),
      transparent 27%
    ),
    radial-gradient(
      circle at 90% 75%,
      rgba(245,154,27,.08),
      transparent 28%
    ),
    #f8fbfd;
}


/* ---------- BACKGROUND DECORATION ---------- */

.dsy-process-bg-circle {
  position: absolute;

  border-radius: 50%;

  pointer-events: none;

  filter: blur(2px);

  opacity: .7;
}

.dsy-process-circle-one {
  width: 330px;
  height: 330px;

  left: -170px;
  top: 20%;

  border: 1px solid rgba(17,167,230,.10);
}

.dsy-process-circle-two {
  width: 280px;
  height: 280px;

  right: -130px;
  bottom: 12%;

  border: 1px solid rgba(245,154,27,.10);
}


/* =========================================================
   HEADER
========================================================= */

.dsy-process-header {
  position: relative;
  z-index: 2;

  display: grid;

  grid-template-columns: 1.1fr .9fr;

  align-items: end;

  gap: 70px;

  margin-bottom: 55px;
}


.dsy-process-title-wrap {
  max-width: 700px;
}


.dsy-process-kicker {
  display: inline-flex;

  align-items: center;

  gap: 9px;

  margin-bottom: 17px;

  padding: 8px 14px;

  border-radius: 999px;

  background: rgba(17,167,230,.07);

  border: 1px solid rgba(17,167,230,.14);

  color: var(--blue-dark);

  font-size: 11px;

  font-weight: 800;

  letter-spacing: .13em;
}


.dsy-kicker-dot {
  width: 7px;
  height: 7px;

  border-radius: 50%;

  background: var(--orange);

  box-shadow:
    0 0 0 5px rgba(245,154,27,.10);
}


.dsy-process-title {
  margin: 0;

  color: #101a3a;

  font-family: "Sora", sans-serif;

  font-size: clamp(34px, 4.2vw, 53px);

  font-weight: 800;

  line-height: 1.08;

  letter-spacing: -.05em;
}


.dsy-process-title span {
  color: var(--blue);
}


.dsy-process-description {
  max-width: 440px;

  margin: 0 0 4px;

  color: var(--muted);

  font-size: 15px;

  line-height: 1.75;
}


/* =========================================================
   PROCESS WRAPPER
========================================================= */

.dsy-process-wrapper {
  position: relative;

  z-index: 2;
}


/* CONNECTING LINE */

.dsy-process-line {
  position: absolute;

  left: 5%;

  right: 5%;

  top: 72px;

  height: 2px;

  background:
    linear-gradient(
      90deg,
      rgba(17,167,230,.12),
      rgba(17,167,230,.32),
      rgba(245,154,27,.25),
      rgba(17,167,230,.12)
    );

  z-index: 0;
}


.dsy-process-line::before,
.dsy-process-line::after {
  content: "";

  position: absolute;

  top: 50%;

  width: 9px;
  height: 9px;

  border-radius: 50%;

  transform: translateY(-50%);

  background: var(--blue);

  box-shadow:
    0 0 0 6px rgba(17,167,230,.08);
}


.dsy-process-line::before {
  left: 0;
}


.dsy-process-line::after {
  right: 0;

  background: var(--orange);

  box-shadow:
    0 0 0 6px rgba(245,154,27,.08);
}


.dsy-process-line span {
  position: absolute;

  left: 0;
  top: 0;

  width: 30%;

  height: 100%;

  border-radius: 999px;

  background:
    linear-gradient(
      90deg,
      var(--blue),
      var(--orange)
    );

  animation:
    dsyProcessLine 5s ease-in-out infinite;
}


@keyframes dsyProcessLine {

  0% {
    left: 0;
    width: 8%;
  }

  50% {
    left: 45%;
    width: 15%;
  }

  100% {
    left: 92%;
    width: 8%;
  }

}


/* =========================================================
   GRID
========================================================= */

.dsy-process-grid {

  display: grid;

  grid-template-columns:
    repeat(4, 1fr);

  gap: 18px;
}


/* =========================================================
   CARD
========================================================= */

.dsy-process-card {

  position: relative;

  z-index: 1;

  min-height: 430px;

  padding: 17px;

  overflow: hidden;

  border-radius: 23px;

  border: 1px solid #e2edf2;

  background:
    rgba(255,255,255,.95);

  box-shadow:
    0 12px 35px rgba(18,40,58,.055);

  transition:
    transform .4s cubic-bezier(.2,.8,.2,1),
    box-shadow .4s ease,
    border-color .4s ease;
}


.dsy-process-card:hover {

  transform:
    translateY(-10px);

  box-shadow:
    0 28px 55px rgba(18,40,58,.12);

  border-color:
    var(--process-border);
}


/* TOP */

.dsy-process-card-top {

  display: flex;

  align-items: center;

  justify-content: space-between;

  margin-bottom: 13px;
}


.dsy-process-number {

  font-family: "Sora", sans-serif;

  font-size: 14px;

  font-weight: 800;

  color: var(--process-color);
}


.dsy-process-status {

  padding: 5px 8px;

  border-radius: 7px;

  background:
    var(--process-soft);

  color:
    var(--process-color);

  font-size: 8px;

  font-weight: 800;

  letter-spacing: .08em;
}


/* =========================================================
   IMAGE
========================================================= */

.dsy-process-image-wrap {

  position: relative;

  height: 180px;

  overflow: hidden;

  border-radius: 17px;

  background:
    var(--process-soft);

  margin-bottom: 20px;
}


.dsy-process-image {

  width: 100%;
  height: 100%;

  display: block;

  object-fit: cover;

  transition:
    transform .6s cubic-bezier(.2,.8,.2,1);
}


.dsy-process-card:hover
.dsy-process-image {

  transform:
    scale(1.09);
}


.dsy-process-image-overlay {

  position: absolute;

  inset: 0;

  background:
    linear-gradient(
      180deg,
      transparent 35%,
      rgba(18,40,58,.38)
    );
}


.dsy-process-image-label {

  position: absolute;

  left: 11px;
  bottom: 10px;

  padding: 6px 9px;

  border-radius: 7px;

  background:
    rgba(255,255,255,.91);

  backdrop-filter: blur(8px);

  color: #18334a;

  font-size: 8px;

  font-weight: 800;

  letter-spacing: .08em;
}


/* FLOATING ICON */

.dsy-process-floating-icon {

  position: absolute;

  right: 11px;
  top: 11px;

  width: 43px;
  height: 43px;

  display: flex;

  align-items: center;
  justify-content: center;

  border-radius: 13px;

  background:
    rgba(255,255,255,.95);

  color:
    var(--process-color);

  font-size: 18px;

  box-shadow:
    0 10px 22px rgba(18,40,58,.12);

  transition:
    transform .35s ease;
}


.dsy-process-card:hover
.dsy-process-floating-icon {

  transform:
    rotate(-8deg)
    scale(1.08);
}


/* =========================================================
   ICON STAGE FOR CARDS WITHOUT IMAGES
========================================================= */

.dsy-process-icon-stage {

  position: relative;

  height: 180px;

  margin-bottom: 20px;

  overflow: hidden;

  display: flex;

  flex-direction: column;

  align-items: center;

  justify-content: center;

  border-radius: 17px;

  background:
    linear-gradient(
      145deg,
      var(--process-soft),
      #fff
    );
}


.dsy-process-icon-glow {

  position: absolute;

  width: 150px;
  height: 150px;

  border-radius: 50%;

  background:
    var(--process-soft);

  filter: blur(5px);
}


.dsy-process-big-icon {

  position: relative;

  z-index: 2;

  width: 72px;
  height: 72px;

  display: flex;

  align-items: center;
  justify-content: center;

  border-radius: 21px;

  background:
    #fff;

  color:
    var(--process-color);

  font-size: 30px;

  box-shadow:
    0 15px 35px rgba(18,40,58,.10);

  transition:
    transform .4s ease;
}


.dsy-process-card:hover
.dsy-process-big-icon {

  transform:
    scale(1.08)
    rotate(-5deg);
}


.dsy-process-icon-stage > span {

  position: relative;

  z-index: 2;

  margin-top: 12px;

  color:
    var(--process-color);

  font-size: 8px;

  font-weight: 800;

  letter-spacing: .1em;
}


/* =========================================================
   CONTENT
========================================================= */

.dsy-process-card-content {

  min-height: 118px;
}


.dsy-process-card-content h3 {

  margin: 0 0 9px;

  color: #12283a;

  font-family: "Sora", sans-serif;

  font-size: 16px;

  font-weight: 700;

  line-height: 1.35;

  letter-spacing: -.02em;
}


.dsy-process-card-content p {

  margin: 0;

  color: #657b88;

  font-size: 12px;

  line-height: 1.65;
}


/* =========================================================
   FOOTER
========================================================= */

.dsy-process-card-footer {

  display: flex;

  align-items: center;

  justify-content: space-between;

  padding-top: 15px;

  border-top:
    1px solid #edf2f5;
}


.dsy-process-card-footer > span {

  color: #9aadb6;

  font-size: 9px;

  font-weight: 700;

  text-transform: uppercase;

  letter-spacing: .06em;
}


.dsy-process-arrow {

  width: 30px;
  height: 30px;

  display: flex;

  align-items: center;
  justify-content: center;

  border-radius: 50%;

  background:
    var(--process-soft);

  color:
    var(--process-color);

  font-size: 15px;

  font-weight: 800;

  transition:
    transform .3s ease,
    background .3s ease,
    color .3s ease;
}


.dsy-process-card:hover
.dsy-process-arrow {

  transform:
    translateX(4px);

  background:
    var(--process-color);

  color: #fff;
}


/* =========================================================
   COLOR THEMES
========================================================= */

.dsy-process-blue {

  --process-color: #11A7E6;

  --process-soft: rgba(17,167,230,.10);

  --process-border: rgba(17,167,230,.25);
}


.dsy-process-orange {

  --process-color: #F59A1B;

  --process-soft: rgba(245,154,27,.11);

  --process-border: rgba(245,154,27,.25);
}


.dsy-process-sky {

  --process-color: #3EB7E5;

  --process-soft: rgba(62,183,229,.10);

  --process-border: rgba(62,183,229,.24);
}


.dsy-process-amber {

  --process-color: #E6A52D;

  --process-soft: rgba(230,165,45,.11);

  --process-border: rgba(230,165,45,.24);
}


.dsy-process-navy {

  --process-color: #0D5A7A;

  --process-soft: rgba(13,90,122,.10);

  --process-border: rgba(13,90,122,.24);
}


.dsy-process-purple {

  --process-color: #7659E8;

  --process-soft: rgba(118,89,232,.10);

  --process-border: rgba(118,89,232,.23);
}


.dsy-process-green {

  --process-color: #10A66A;

  --process-soft: rgba(16,166,106,.10);

  --process-border: rgba(16,166,106,.23);
}


/* =========================================================
   BOTTOM CTA
========================================================= */

.dsy-process-bottom {

  position: relative;

  z-index: 2;

  display: flex;

  align-items: center;

  justify-content: space-between;

  gap: 25px;

  margin-top: 28px;

  padding: 20px 23px;

  border-radius: 20px;

  background:
    linear-gradient(
      110deg,
      #eef9fe,
      #ffffff 55%,
      #fff7ea
    );

  border:
    1px solid rgba(17,167,230,.12);

  box-shadow:
    0 15px 35px rgba(18,40,58,.05);
}


.dsy-process-bottom-left {

  display: flex;

  align-items: center;

  gap: 14px;
}


.dsy-process-bottom-icon {

  flex: 0 0 48px;

  width: 48px;
  height: 48px;

  display: flex;

  align-items: center;
  justify-content: center;

  border-radius: 14px;

  background:
    linear-gradient(
      135deg,
      var(--blue),
      var(--blue-dark)
    );

  color: #fff;

  font-size: 21px;

  box-shadow:
    0 10px 25px rgba(17,167,230,.18);
}


.dsy-process-bottom strong {

  display: block;

  margin-bottom: 3px;

  color: var(--navy);

  font-family: "Sora", sans-serif;

  font-size: 14px;
}


.dsy-process-bottom strong span {

  color: var(--blue);
}


.dsy-process-bottom p {

  margin: 0;

  color: var(--muted);

  font-size: 11px;

  line-height: 1.5;
}


.dsy-process-bottom-btn {

  display: inline-flex;

  align-items: center;

  gap: 8px;

  flex-shrink: 0;

  padding: 12px 18px;

  border-radius: 10px;

  background:
    var(--ink);

  color: #fff;

  text-decoration: none;

  font-size: 11px;

  font-weight: 700;

  transition:
    transform .25s ease,
    background .25s ease;
}


.dsy-process-bottom-btn:hover {

  transform:
    translateY(-2px);

  background:
    var(--blue);
}


/* =========================================================
   TABLET
========================================================= */

@media (max-width: 1100px) {

  .dsy-process-header {

    grid-template-columns: 1fr;

    gap: 18px;
  }


  .dsy-process-description {

    max-width: 680px;
  }


  .dsy-process-grid {

    grid-template-columns:
      repeat(2, 1fr);

    gap: 18px;
  }


  .dsy-process-line {

    display: none;
  }

}


/* =========================================================
   MOBILE
========================================================= */

@media (max-width: 650px) {

  .dsy-process-section {

    padding: 70px 0;
  }


  .dsy-process-header {

    margin-bottom: 32px;

    gap: 15px;
  }


  .dsy-process-title {

    font-size: 31px;

    line-height: 1.12;
  }


  .dsy-process-description {

    font-size: 13px;

    line-height: 1.7;
  }


  .dsy-process-grid {

    grid-template-columns: 1fr;

    gap: 14px;
  }


  .dsy-process-card {

    min-height: auto;

    padding: 15px;

    border-radius: 19px;
  }


  .dsy-process-image-wrap,
  .dsy-process-icon-stage {

    height: 190px;

    margin-bottom: 17px;
  }


  .dsy-process-card-content {

    min-height: auto;

    padding-bottom: 18px;
  }


  .dsy-process-card-content h3 {

    font-size: 15px;
  }


  .dsy-process-card-content p {

    font-size: 12px;
  }


  .dsy-process-bottom {

    flex-direction: column;

    align-items: stretch;

    padding: 17px;
  }


  .dsy-process-bottom-left {

    align-items: flex-start;
  }


  .dsy-process-bottom strong {

    font-size: 12px;
  }


  .dsy-process-bottom-btn {

    justify-content: center;

    width: 100%;
  }

}


/* =========================================================
   SMALL MOBILE
========================================================= */

@media (max-width: 400px) {

  .dsy-process-title {

    font-size: 28px;
  }


  .dsy-process-image-wrap,
  .dsy-process-icon-stage {

    height: 175px;
  }


  .dsy-process-card {

    padding: 13px;
  }

}
  /* =========================================================
   DROPSHY FAQ — 2 COLUMN / 5 + 5 PREMIUM DESIGN
========================================================= */

.dsy-faq-section {
  position: relative;
  padding: 100px 0;
  background:
    radial-gradient(circle at 0% 20%, rgba(17, 167, 230, 0.07), transparent 28%),
    radial-gradient(circle at 100% 80%, rgba(245, 154, 27, 0.07), transparent 28%),
    #f7fafc;
  overflow: hidden;
}

/* ---------- FAQ HEADER ---------- */

.dsy-faq-section .dsy-sec-head {
  max-width: 760px;
  margin: 0 auto 55px;
  text-align: center;
}

.dsy-faq-section .dsy-sec-title {
  position: relative;
  display: inline-block;
  font-family: "Sora", sans-serif;
  font-size: clamp(32px, 4vw, 48px);
  line-height: 1.15;
  font-weight: 800;
  letter-spacing: -0.04em;
  color: #12283a;
}

/* orange underline */

.dsy-faq-section .dsy-sec-title::after {
  content: "";
  display: block;
  width: 70px;
  height: 5px;
  margin: 16px auto 0;
  border-radius: 50px;
  background: linear-gradient(
    90deg,
    #11a7e6,
    #f59a1b
  );
}

/* ---------- FAQ GRID ---------- */

.dsy-faq-list {
  max-width: 1120px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 18px 22px;
  align-items: start;
}

/* ---------- FAQ CARD ---------- */

.dsy-faq-item {
  position: relative;
  overflow: hidden;
  background: #ffffff;
  border: 1px solid #e3ebf0;
  border-radius: 18px;
  box-shadow: 0 8px 25px rgba(18, 40, 58, 0.055);
  transition:
    transform 0.3s ease,
    box-shadow 0.3s ease,
    border-color 0.3s ease;
}

/* top accent */

.dsy-faq-item::before {
  content: "";
  position: absolute;
  left: 0;
  top: 0;
  width: 4px;
  height: 0;
  background: linear-gradient(
    180deg,
    #11a7e6,
    #f59a1b
  );
  border-radius: 0 0 6px 0;
  transition: height 0.35s ease;
}

.dsy-faq-item:hover {
  transform: translateY(-4px);
  border-color: rgba(17, 167, 230, 0.22);
  box-shadow: 0 18px 38px rgba(18, 40, 58, 0.09);
}

/* active card */

.dsy-faq-item.dsy-faq-open {
  border-color: rgba(17, 167, 230, 0.3);
  box-shadow: 0 18px 40px rgba(17, 167, 230, 0.1);
}

.dsy-faq-item.dsy-faq-open::before {
  height: 100%;
}

/* ---------- QUESTION BUTTON ---------- */

.dsy-faq-question {
  position: relative;
  width: 100%;
  min-height: 78px;
  padding: 19px 62px 19px 20px;

  display: flex;
  align-items: center;
  justify-content: space-between;

  border: 0;
  outline: none;
  background: transparent;

  text-align: left;
  cursor: pointer;

  color: #12283a;
  font-family: "Sora", sans-serif;
  font-size: 14px;
  font-weight: 700;
  line-height: 1.45;

  transition: color 0.25s ease;
}

.dsy-faq-question:hover {
  color: #0b84b8;
}

.dsy-faq-open .dsy-faq-question {
  color: #0b84b8;
}

/* ---------- QUESTION CONTENT ---------- */

.dsy-faq-question > span:first-child {
  display: flex;
  align-items: center;
  gap: 13px;
  min-width: 0;
}

/* ---------- NUMBER ---------- */

.dsy-faq-index {
  flex: 0 0 38px;

  width: 38px;
  height: 38px;

  display: inline-flex;
  align-items: center;
  justify-content: center;

  border-radius: 11px;

  background: #eef9fe;
  border: 1px solid rgba(17, 167, 230, 0.16);

  color: #11a7e6;

  font-family: "Sora", sans-serif;
  font-size: 11px;
  font-weight: 800;

  transition:
    background 0.3s ease,
    color 0.3s ease,
    transform 0.3s ease;
}

.dsy-faq-item:nth-child(even) .dsy-faq-index {
  background: #fff5e7;
  border-color: rgba(245, 154, 27, 0.2);
  color: #d97f06;
}

.dsy-faq-item:hover .dsy-faq-index {
  transform: scale(1.06);
}

.dsy-faq-open .dsy-faq-index {
  background: #11a7e6;
  color: #ffffff;
  border-color: #11a7e6;
}

.dsy-faq-item:nth-child(even).dsy-faq-open .dsy-faq-index {
  background: #f59a1b;
  border-color: #f59a1b;
  color: #ffffff;
}

/* ---------- PLUS / MINUS ---------- */

.dsy-faq-plus {
  position: absolute;
  right: 20px;
  top: 50%;
  transform: translateY(-50%);

  width: 32px;
  height: 32px;

  display: flex;
  align-items: center;
  justify-content: center;

  border-radius: 50%;

  background: #f3f8fb;
  border: 1px solid #e2ebef;

  flex-shrink: 0;

  transition:
    transform 0.35s ease,
    background 0.3s ease,
    border-color 0.3s ease;
}

/* horizontal line */

.dsy-faq-plus::before {
  content: "";
  position: absolute;

  width: 12px;
  height: 2px;

  border-radius: 5px;
  background: #0d5a7a;
}

/* vertical line */

.dsy-faq-plus::after {
  content: "";
  position: absolute;

  width: 2px;
  height: 12px;

  border-radius: 5px;
  background: #0d5a7a;

  transition:
    transform 0.3s ease,
    opacity 0.3s ease;
}

/* open */

.dsy-faq-open .dsy-faq-plus {
  background: #11a7e6;
  border-color: #11a7e6;
  transform: translateY(-50%) rotate(180deg);
}

.dsy-faq-open .dsy-faq-plus::before {
  background: #ffffff;
}

.dsy-faq-open .dsy-faq-plus::after {
  background: #ffffff;
  transform: rotate(90deg);
  opacity: 0;
}

/* ---------- ANSWER ---------- */

.dsy-faq-answer {
  overflow: hidden;
  max-height: 0;
  opacity: 0;

  transition:
    max-height 0.45s ease,
    opacity 0.35s ease;
}

.dsy-faq-open .dsy-faq-answer {
  opacity: 1;
}

.dsy-faq-answer p {
  margin: 0;
  padding: 0 62px 22px 71px;

  color: #617786;

  font-family: "Inter", sans-serif;
  font-size: 13px;
  line-height: 1.7;
}

/* small separator */

.dsy-faq-open .dsy-faq-answer::before {
  content: "";
  display: block;
  height: 1px;
  margin: 0 20px 16px 71px;
  background: #edf2f5;
}

/* =========================================================
   5 + 5 VISUAL BALANCE
========================================================= */

.dsy-faq-item:nth-child(1),
.dsy-faq-item:nth-child(3),
.dsy-faq-item:nth-child(5),
.dsy-faq-item:nth-child(7),
.dsy-faq-item:nth-child(9) {
  transform-origin: right center;
}

.dsy-faq-item:nth-child(2),
.dsy-faq-item:nth-child(4),
.dsy-faq-item:nth-child(6),
.dsy-faq-item:nth-child(8),
.dsy-faq-item:nth-child(10) {
  transform-origin: left center;
}

/* =========================================================
   TABLET
========================================================= */

@media (max-width: 850px) {

  .dsy-faq-section {
    padding: 80px 0;
  }

  .dsy-faq-list {
    grid-template-columns: 1fr 1fr;
    gap: 14px;
  }

  .dsy-faq-question {
    min-height: 72px;
    padding: 17px 55px 17px 16px;
    font-size: 13px;
  }

  .dsy-faq-question > span:first-child {
    gap: 10px;
  }

  .dsy-faq-index {
    width: 34px;
    height: 34px;
    flex-basis: 34px;
    border-radius: 9px;
    font-size: 10px;
  }

  .dsy-faq-plus {
    right: 15px;
    width: 29px;
    height: 29px;
  }

  .dsy-faq-answer p {
    padding: 0 45px 20px 60px;
    font-size: 12px;
  }

  .dsy-faq-open .dsy-faq-answer::before {
    margin-left: 60px;
    margin-right: 15px;
  }
}

/* =========================================================
   MOBILE
========================================================= */

@media (max-width: 600px) {

  .dsy-faq-section {
    padding: 65px 0;
  }

  .dsy-faq-section .dsy-sec-head {
    margin-bottom: 35px;
  }

  .dsy-faq-section .dsy-sec-title {
    font-size: 30px;
  }

  .dsy-faq-list {
    grid-template-columns: 1fr;
    gap: 12px;
  }

  .dsy-faq-item {
    border-radius: 15px;
  }

  .dsy-faq-question {
    min-height: 68px;
    padding: 15px 52px 15px 14px;
    font-size: 12.5px;
  }

  .dsy-faq-question > span:first-child {
    gap: 9px;
  }

  .dsy-faq-index {
    width: 32px;
    height: 32px;
    flex-basis: 32px;
    font-size: 9px;
  }

  .dsy-faq-plus {
    right: 14px;
    width: 28px;
    height: 28px;
  }

  .dsy-faq-answer p {
    padding: 0 17px 19px 55px;
    font-size: 12px;
    line-height: 1.65;
  }

  .dsy-faq-open .dsy-faq-answer::before {
    margin: 0 14px 14px 55px;
  }
}

/* =========================================================
   VERY SMALL MOBILE
========================================================= */

@media (max-width: 380px) {

  .dsy-faq-section .dsy-sec-title {
    font-size: 27px;
  }

  .dsy-faq-question {
    font-size: 11.5px;
    padding-right: 48px;
  }

  .dsy-faq-index {
    width: 29px;
    height: 29px;
    flex-basis: 29px;
  }

  .dsy-faq-answer p {
    padding-left: 48px;
  }

  .dsy-faq-open .dsy-faq-answer::before {
    margin-left: 48px;
  }
}
`;

export default NationalEcommerceweb;