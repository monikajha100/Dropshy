import React, { useEffect, useMemo, useRef, useState } from "react";
import "./Blogsp.css";

import {
  Search,
  ArrowRight,
  CalendarDays,
} from "lucide-react";

import banner1 from "../../assets/images/BANNER 1 BLOGS.png";
import banner2 from "../../assets/images/banner 2 blogs.png";
import banner3 from "../../assets/images/BANNER 3 BLOGS.png";

const blogs = [
  {
    id: 1,
    slug: "international-seller-account-setup",
    title:
      "International Seller Account Setup Etsy, eBay, Amazon.com & Walmart",
    description:
      "Learn how to set up international seller accounts on Etsy, eBay, Amazon.com, Alibaba, Walmart and other global marketplaces with Dropshy.",
    category: "International E-Commerce",
    selectorTitle: "International Seller Account Setup",
    selectorDesc: "Etsy, eBay, Amazon.com, Alibaba, Walmart & more",
    date: "September 1, 2026",
    image: banner1,
  },
  {
    id: 2,
    slug: "website-dropshipping",
    title: "Start Your Website Dropshipping Business with Dropshy",
    description:
      "Build your own online store, select products, promote your business and start your website dropshipping journey with Dropshy.",
    category: "Website Dropshipping",
    selectorTitle: "Website Dropshipping",
    selectorDesc: "Build your own online store and grow your brand",
    date: "September 1, 2026",
    image: banner2,
  },
  {
    id: 3,
    slug: "dropshipping-business-in-india",
    title: "Start Your Dropshipping Business in India with Zero Inventory",
    description:
      "Discover how to start an online dropshipping business in India without maintaining your own inventory or warehouse.",
    category: "Dropshipping",
    selectorTitle: "Start Dropshipping Business in India",
    selectorDesc: "Start selling online with zero inventory",
    date: "September 1, 2026",
    image: banner3,
  },
];

/* ============================================================
   PROMO CARD
============================================================ */

function PromoCard() {
  return (
    <div className="dss-promo-card">
      <div className="dss-promo-glow" aria-hidden="true" />

      <span className="dss-promo-small">
        START YOUR E-COMMERCE BUSINESS
      </span>

      <h3>
        Sell Online
        <br />
        Without Inventory
      </h3>

      <div className="dss-promo-price">
        <span>₹</span>0
      </div>

      <p>
        Start your online business with
        Dropshy and focus on selling,
        marketing and growth.
      </p>

      <a href="/contact" className="dss-promo-btn">
        Get Started
        <ArrowRight size={15} />
      </a>
    </div>
  );
}

/* ============================================================
   BLOG CARD
============================================================ */

function BlogCard({ blog }) {
  const openBlog = () => {
    window.location.href = `/blog/${blog.slug}`;
  };

  return (
    <article
      className="blog-card"
      onClick={openBlog}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") {
          openBlog();
        }
      }}
    >
      <div className="blog-card-image">
        <img src={blog.image} alt={blog.title} />
      </div>

      <div className="blog-card-content">
        <div className="blog-card-top">
          <span className="blog-card-category">
            {blog.category}
          </span>

          <span className="blog-card-date">
            <CalendarDays size={13} />
            {blog.date}
          </span>
        </div>

        <h2>{blog.title}</h2>

        <p>{blog.description}</p>

        <button
          type="button"
          className="blog-read-more"
          onClick={(e) => {
            e.stopPropagation();
            openBlog();
          }}
        >
          Read More
          <ArrowRight size={16} />
        </button>
      </div>
    </article>
  );
}

/* ============================================================
   BLOG PAGE
============================================================ */

export default function Blogs() {
  const [search, setSearch] = useState("");
  const sidebarRef = useRef(null);

  /* ------------------------------------------------------------
     STICKY FIX
     position: sticky stops working when any parent (body, #root,
     layout wrapper, App.css etc.) has overflow hidden/auto/scroll
     but is NOT the element that actually scrolls.
     This finds such parents and switches them to overflow: clip /
     visible (same look, but sticky works). Everything is restored
     when the page unmounts.
  ------------------------------------------------------------ */
  useEffect(() => {
    const sidebar = sidebarRef.current;
    if (!sidebar) return undefined;

    const changed = [];

    const fixAncestors = () => {
      let node = sidebar.parentElement;

      while (node && node !== document.documentElement) {
        const cs = window.getComputedStyle(node);
        const blocksSticky = /(hidden|auto|scroll|overlay)/.test(
          `${cs.overflowX} ${cs.overflowY}`
        );

        // only touch parents that are NOT really scrolling
        const isRealScroller = node.scrollHeight > node.clientHeight + 1;

        if (blocksSticky && !isRealScroller) {
          changed.push({
            node,
            x: node.style.overflowX,
            y: node.style.overflowY,
          });

          node.style.overflowX = "clip";
          node.style.overflowY = "visible";
        }

        node = node.parentElement;
      }
    };

    fixAncestors();

    return () => {
      changed.forEach(({ node, x, y }) => {
        node.style.overflowX = x;
        node.style.overflowY = y;
      });
    };
  }, []);

  const filteredBlogs = useMemo(() => {
    const value = search.trim().toLowerCase();

    if (!value) {
      return blogs;
    }

    return blogs.filter((blog) => {
      const searchableText = [
        blog.title,
        blog.description,
        blog.category,
        blog.selectorTitle,
        blog.selectorDesc,
        blog.slug,
      ]
        .filter(Boolean)
        .join(" ")
        .toLowerCase();

      return searchableText.includes(value);
    });
  }, [search]);

  const handleBlogClick = (blog) => {
    window.location.href = `/blog/${blog.slug}`;
  };

  return (
    <div className="dss-page">

      <section className="dss-blog-section">

        <div className="dss-wrap">

          {/* ==================================================
              MAIN TWO COLUMN AREA
          ================================================== */}

          <div className="dss-blog-layout">

            {/* ==================================================
                LEFT SIDE - ONLY THIS AREA WILL SCROLL
            ================================================== */}

            <main className="dss-blog-main">

              <div className="dss-blog-heading">
                <h1>
                  Latest E-Commerce
                  <br />
                  <span>Insights & Guides</span>
                </h1>

                <p>
                  Discover practical e-commerce,
                  dropshipping and online business
                  guides to help you start and grow
                  your business.
                </p>
              </div>

              <div className="dss-blog-toolbar">
                <span>
                  {filteredBlogs.length}{" "}
                  {filteredBlogs.length === 1
                    ? "Article"
                    : "Articles"}
                </span>
              </div>

              <div className="dss-blog-list">

                {filteredBlogs.length > 0 ? (
                  filteredBlogs.map((blog) => (
                    <BlogCard
                      key={blog.id}
                      blog={blog}
                      onClick={() => handleBlogClick(blog)}
                    />
                  ))
                ) : (
                  <div className="dss-no-results">

                    <div className="dss-no-results-icon">
                      <Search size={30} />
                    </div>

                    <h3>No blogs found</h3>

                    <p>
                      We couldn't find any article
                      matching "{search}".
                    </p>

                    <button
                      type="button"
                      onClick={() => setSearch("")}
                    >
                      View All Blogs
                    </button>

                  </div>
                )}

              </div>

            </main>

            {/* ==================================================
                RIGHT SIDE - COMPLETELY FROZEN
            ================================================== */}

            <aside className="dss-blog-sidebar" ref={sidebarRef}>

              <PromoCard />

              <div className="dss-sidebar-box dss-recent-box">

                <div className="dss-recent-heading">
                  <span />
                  <h3>Recent Posts</h3>
                </div>

                <div className="dss-recent-list">

                  {blogs.map((blog) => (
                    <button
                      key={blog.id}
                      type="button"
                      className="dss-recent-item"
                      onClick={() => handleBlogClick(blog)}
                    >

                      <div className="dss-recent-image">
                        <img
                          src={blog.image}
                          alt={blog.title}
                        />
                      </div>

                      <div className="dss-recent-content">

                        <strong>
                          {blog.title}
                        </strong>

                        <small>
                          <CalendarDays size={12} />
                          {blog.date}
                        </small>

                      </div>

                    </button>
                  ))}

                </div>

              </div>

            </aside>

          </div>

        </div>

      </section>

      <section
        className="dss-blog-cta"
        id="contact"
      >

        <div
          className="dss-cta-glow"
          aria-hidden="true"
        />

        <div className="dss-wrap">

          <span className="dss-cta-label">
            START YOUR JOURNEY
          </span>

          <h2>
            Ready to Start Your
            <br />
            Online Business?
          </h2>

          <p>
            Build your e-commerce business
            with Dropshy and focus on growing
            your brand.
          </p>

          <a
            href="/contact"
            className="dss-cta-button"
          >
            Get Started
            <ArrowRight size={17} />
          </a>

        </div>

      </section>

      <footer className="dss-footer">
        © 2026 Dropshy. All rights reserved.
      </footer>

    </div>
  );
}