import React from "react";
import { Link } from "react-router-dom";
import "./Blog.css";

import blog1 from "../assets/images/BANNER 1 BLOGS.png";
import blog2 from "../assets/images/banner 2 blogs.png";
import blog3 from "../assets/images/BANNER 3 BLOGS.png";

import author from "../assets/images/auther.png";

const blogs = [
  {
    image: blog1,
    category: "International E-Commerce",
    readTime: "6 min read",
    title:
      "International Seller Account Setup Etsy, eBay, Amazon.com & Walmart",
    author: "Dropshy Team",
    role: "E-Commerce Specialist @ Dropshy",
    date: "September 1, 2026",
    slug: "international-seller-account-setup",
  },

  {
    image: blog2,
    category: "Website Dropshipping",
    readTime: "9 min read",
    title:
      "Start Your Website Dropshipping Business with Dropshy",
    author: "Dropshy Team",
    role: "E-Commerce Specialist @ Dropshy",
    date: "September 1, 2026",
    slug: "website-dropshipping-business",
  },

  {
    image: blog3,
    category: "Dropshipping",
    readTime: "7 min read",
    title:
      "Start Your Dropshipping Business in India with Zero Inventory",
    author: "Dropshy Team",
    role: "E-Commerce Specialist @ Dropshy",
    date: "September 1, 2026",
    slug: "dropshipping-business-india",
  },
];

export default function Blogs() {
  return (
    <section className="blogsSection">
      <div className="blogsContainer">

        <h2 className="blogsHeading">
          Discover Our Blogs
        </h2>

        <div className="blogsGrid">

          {blogs.map((blog, index) => (
            <div
              className="blogCard"
              key={index}
            >

              {/* BLOG IMAGE */}
              <div className="blogImage">
                <img
                  src={blog.image}
                  alt={blog.title}
                />
              </div>

              {/* BLOG CONTENT */}
              <div className="blogBody">

                <div className="blogTop">

                  <span className="blogCategory">
                    {blog.category}
                  </span>

                  <span className="blogRead">
                    ⏱ {blog.readTime}
                  </span>

                </div>

                <h3>
                  {blog.title}
                </h3>

                {/* BLOG DETAIL LINK */}
                <Link
                  to={`/blog/${blog.slug}`}
                  className="readBtn"
                >
                  Explore Article →
                </Link>

              </div>

              {/* BLOG FOOTER */}
              <div className="blogFooter">

                <div className="authorBox">

                  <img
                    src={author}
                    alt="Dropshy Team"
                    className="authorImg"
                  />

                  <div>
                    <h4>{blog.author}</h4>
                    <p>{blog.role}</p>
                  </div>

                </div>

                <span className="blogDate">
                  📅 {blog.date}
                </span>

              </div>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
}