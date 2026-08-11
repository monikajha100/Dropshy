import React from "react";
import "./Blog.css";

import blog1 from "../assets/images/blog1.webp";
import blog2 from "../assets/images/blog2.webp";
import blog3 from "../assets/images/blog3.webp";

import author from "../assets/images/auther.png";

const blogs = [
  {
    image: blog1,
    category: "Business",
    readTime: "6 min read",
    title: "How to Apply for a Business Loan as a Startup in India? (2026)",
    author: "Sahil Bajaj",
    role: "Senior Specialist @ Shiprocket",
    date: "August 4, 2026",
  },

  {
    image: blog2,
    category: "eCommerce Packaging",
    readTime: "9 min read",
    title:
      "Best Label Printers 2026: Top 10 Picks for Small Businesses, Shipping & Home Use",
    author: "Sahil Bajaj",
    role: "Senior Specialist @ Shiprocket",
    date: "July 31, 2026",
  },

  {
    image: blog3,
    category: "eCommerce",
    readTime: "7 min read",
    title:
      "Business Diversification: Types, Benefits and Examples",
    author: "Sahil Bajaj",
    role: "Senior Specialist @ Shiprocket",
    date: "July 30, 2026",
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

            <div className="blogCard" key={index}>

              <div className="blogImage">

                <img
                  src={blog.image}
                  alt={blog.title}
                />

              </div>

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

                <button className="readBtn">
                  Explore Article →
                </button>

              </div>

              <div className="blogFooter">

                <div className="authorBox">

                  <img
                    src={author}
                    alt=""
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