import React, { useState } from "react";

import codeImage from "../../assets/images/code.jpg";
import collaborationImage from "../../assets/images/collaboration.jpg";
import domesticImage from "../../assets/images/domestic.png";

// Replace these with your real blog thumbnails when ready.
// (Reusing existing images below just as placeholders so the file runs as-is.)
import blog1 from "../../assets/images/code.jpg";
import blog2 from "../../assets/images/collaboration.jpg";
import blog3 from "../../assets/images/domestic.png";
import authorImg from "../../assets/images/collaboration.jpg";

/* ============================================================
   SERVICES
============================================================ */

const SERVICES = [
  {
    title: "Web Development",
    desc: "Fast, responsive, and SEO-ready websites designed to deliver better performance and higher conversions.",
    color: "#0EA5A0",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="#0EA5A0" strokeWidth="2">
        <rect x="3" y="4" width="18" height="14" rx="2" />
        <path d="M3 9h18M8 21h8M12 18v3" />
      </svg>
    ),
  },
  {
    title: "Mobile App Development",
    desc: "Native and cross-platform mobile applications for Android and iOS with smooth performance and modern user experiences.",
    color: "#F5A623",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="#F5A623" strokeWidth="2">
        <rect x="7" y="2" width="10" height="20" rx="2" />
        <path d="M11 18h2" />
      </svg>
    ),
  },
  {
    title: "Cloud Solutions",
    desc: "Scalable cloud infrastructure, migration, and management solutions built for reliability, flexibility, and growth.",
    color: "#0EA5A0",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="#0EA5A0" strokeWidth="2">
        <path d="M17.5 19a4.5 4.5 0 0 0 0-9 6 6 0 0 0-11.4-1.5A4 4 0 0 0 6 16.5" />
        <path d="M17.5 19H6.5" />
      </svg>
    ),
  },
  {
    title: "Cybersecurity",
    desc: "Protect your business with data security, threat monitoring, vulnerability assessment, and compliance-ready security frameworks.",
    color: "#F5A623",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="#F5A623" strokeWidth="2">
        <path d="M12 3l7 4v5c0 5-3.5 8-7 9-3.5-1-7-4-7-9V7z" />
        <path d="M9 12l2 2 4-4" />
      </svg>
    ),
  },
  {
    title: "IT Support & Maintenance",
    desc: "24/7 monitoring and rapid-response support to keep your systems secure, stable, and running smoothly.",
    color: "#0EA5A0",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="#0EA5A0" strokeWidth="2">
        <circle cx="12" cy="12" r="3" />
        <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z" />
      </svg>
    ),
  },
  {
    title: "Custom Software",
    desc: "Tailored business applications designed around your workflows, operational requirements, and long-term goals.",
    color: "#F5A623",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="#F5A623" strokeWidth="2">
        <path d="M16 18l6-6-6-6M8 6l-6 6 6 6" />
      </svg>
    ),
  },
];

/* ============================================================
   FAQS
============================================================ */

const FAQS = [
  {
    q: "What does an IT services company do?",
    a: "An IT services company provides technology solutions such as website development, mobile applications, cloud infrastructure, cybersecurity, software development, and technical support to help businesses operate efficiently and scale.",
  },
  {
    q: "How long does custom software development take?",
    a: "The timeline depends on the complexity and scope of the project. A simple website may take 2–3 weeks, while a custom business application can take 4–12 weeks or longer depending on the requirements.",
  },
  {
    q: "Are IT services affordable for small businesses?",
    a: "Yes. IT services can be customized according to the size, requirements, and budget of a small business or startup without compromising on quality.",
  },
  {
    q: "What are the benefits of cloud migration?",
    a: "Cloud migration can improve scalability, accessibility, reliability, backup capabilities, and operational efficiency while helping businesses manage infrastructure more effectively.",
  },
  {
    q: "How does website maintenance and support work?",
    a: "Website maintenance plans can include regular updates, security patches, performance monitoring, bug fixes, backups, and technical support to keep your website secure and reliable.",
  },
  {
    q: "What do cybersecurity services cover?",
    a: "Cybersecurity services can include vulnerability assessments, firewall configuration, data protection, encryption, security audits, threat monitoring, and security awareness training.",
  },
  {
    q: "Can you develop mobile apps for both Android and iOS?",
    a: "Yes. Mobile applications can be developed using native technologies or cross-platform frameworks such as React Native and Flutter for Android and iOS.",
  },
  {
    q: "What is the process for starting a project?",
    a: "The process generally starts with a requirement discovery call, followed by planning, proposal and quotation, UI/UX design, development, testing, deployment, and ongoing support.",
  },
  {
    q: "Can existing legacy systems be upgraded?",
    a: "Yes. Existing systems can be assessed and modernized through a structured technology roadmap while minimizing disruption to your business operations.",
  },
  {
    q: "How can I contact the support team?",
    a: "You can contact the support team through email, phone, or a dedicated ticketing system. Support plans can also include defined response-time service levels.",
  },
];

/* ============================================================
   BLOGS
   Add / edit entries here. `desc` = short teaser shown on the card,
   `fullDesc` = complete article body shown when the card is opened.
============================================================ */

const BLOGS = [
  {
    image: blog1,
    category: "Web Development",
    readTime: "6 min read",
    title: "7 Signs Your Business Website Needs a Technology Upgrade in 2026",
    desc: "Slow load times, outdated design, and poor mobile experience quietly cost businesses customers every day.",
    fullDesc:
      "Most businesses don't realize their website is losing them customers until conversions start dropping. In this article we walk through seven concrete warning signs — from slow load times and outdated frameworks to poor mobile responsiveness and weak SEO structure — that indicate it's time for a technology refresh. We cover how to audit your current site's performance using free tools, what a modern rebuild typically costs and takes in timeline, and how to prioritize fixes based on impact versus effort. We also share a simple checklist you can run through today: check your Core Web Vitals score, test your site on three different mobile devices, review your last security patch date, and compare your page speed against two competitors. Businesses that acted on these signals reported measurable gains in organic traffic and conversion rate within the first quarter after launch. The article closes with guidance on choosing between a full rebuild versus an incremental modernization, depending on your budget and how mission-critical your current site's uptime is.",
    author: "Sahil Bajaj",
    role: "Senior Specialist @ NexCore IT",
    date: "August 18, 2026",
  },
  {
    image: blog2,
    category: "Cloud Infrastructure",
    readTime: "8 min read",
    title: "Cloud Migration Checklist: A Practical Guide for Growing Businesses",
    desc: "Moving to the cloud can cut costs and boost reliability — if it's planned correctly from day one.",
    fullDesc:
      "Cloud migration promises lower costs, better uptime, and easier scaling, but a rushed migration can just as easily create downtime, data loss, or ballooning bills. This guide breaks the migration process into five phases: assessment, planning, pilot migration, full rollout, and optimization. In the assessment phase we explain how to inventory your existing workloads and classify them as 'lift and shift', 'refactor', or 'rebuild' candidates. The planning phase covers choosing between AWS, Azure, and Google Cloud based on your existing stack, compliance needs, and team familiarity. We walk through setting up a pilot migration with a low-risk, non-critical workload first, so you can validate your runbooks before touching production systems. The rollout section includes a rollback plan template, and the optimization phase covers right-sizing instances, setting up auto-scaling, and configuring cost alerts so your cloud bill doesn't creep up unnoticed. We close with three real mistakes we've seen businesses make during migration and how each was avoided or fixed.",
    author: "Sahil Bajaj",
    role: "Senior Specialist @ NexCore IT",
    date: "August 10, 2026",
  },
  {
    image: blog3,
    category: "Cybersecurity",
    readTime: "7 min read",
    title: "Cybersecurity Basics Every Small Business Should Have in Place by 2026",
    desc: "A single unpatched system or weak password policy is often all it takes for a breach to happen.",
    fullDesc:
      "Small businesses are increasingly targeted precisely because attackers assume their defenses are weaker than an enterprise's. This article lays out the non-negotiable baseline every business, regardless of size, should have in place: multi-factor authentication on all admin accounts, a documented patch management schedule, encrypted backups stored off-site, and a written incident response plan that non-technical staff can actually follow. We explain the difference between a vulnerability assessment and a penetration test, and when a small business needs one versus the other. There's a section on phishing awareness training, including how to run a simple internal simulated-phishing test to gauge your team's current risk level. We also cover firewall configuration basics, why default router and admin passwords are one of the most common breach vectors, and how to set up basic threat monitoring without hiring a full-time security analyst. The piece ends with a short, prioritized action list you can start implementing this week, ordered by effort versus risk reduction.",
    author: "Sahil Bajaj",
    role: "Senior Specialist @ NexCore IT",
    date: "August 2, 2026",
  },
  {
    image: blog1,
    category: "Mobile Apps",
    readTime: "6 min read",
    title: "Native vs Cross-Platform: Choosing the Right Approach for Your App in 2026",
    desc: "The right choice depends less on trends and more on your budget, timeline, and long-term product goals.",
    fullDesc:
      "One of the first decisions in any mobile project is whether to build natively for iOS and Android separately, or use a cross-platform framework like React Native or Flutter. This article compares both approaches across five dimensions: development cost, time to market, performance, access to platform-specific features, and long-term maintenance. Native development typically offers the best performance and the fastest access to new OS features, but requires two separate codebases and roughly doubles ongoing maintenance cost. Cross-platform frameworks let you ship to both platforms from a single codebase, cutting initial development time significantly, but can introduce friction when you need deep integration with native hardware features or the latest OS-specific APIs. We include a simple decision framework: if your app is content or workflow-driven with modest native feature needs, cross-platform is usually the more cost-effective choice; if your app depends heavily on camera processing, AR, or platform-exclusive APIs, native is worth the extra investment. The article closes with a short case comparison of two similar apps built each way, including approximate cost and timeline differences.",
    author: "Sahil Bajaj",
    role: "Senior Specialist @ NexCore IT",
    date: "July 26, 2026",
  },
  {
    image: blog2,
    category: "Custom Software",
    readTime: "9 min read",
    title: "When Off-the-Shelf Software Stops Working: Signs You Need a Custom Build",
    desc: "Off-the-shelf tools are great until your workflow starts bending around the software instead of the other way around.",
    fullDesc:
      "Most businesses start with off-the-shelf software because it's fast to deploy and inexpensive. But as a business grows, its processes often become too specific for generic tools to handle well — and that's when teams start building workarounds, spreadsheets, and manual steps to patch the gaps. This article identifies the clearest signs it's time to consider custom software: your team maintains more than two spreadsheets just to bridge disconnected tools, you're paying for multiple subscriptions that only get partially used, your process requires manual data re-entry between systems, or your growth is being limited by a tool's plan limits rather than your actual demand. We walk through how to scope a custom software project properly — starting with a process audit rather than a feature wishlist — and how to estimate a realistic budget and timeline range for a first version. We also cover the build-vs-buy-vs-customize decision, including when extending an existing platform via its API is actually a better answer than a full custom build. The article ends with a short framework for prioritizing which workflows to automate first based on time saved versus implementation complexity.",
    author: "Sahil Bajaj",
    role: "Senior Specialist @ NexCore IT",
    date: "July 19, 2026",
  },
  {
    image: blog3,
    category: "IT Support",
    readTime: "5 min read",
    title: "In-House vs Outsourced IT Support: What Actually Fits Your Business",
    desc: "The right support model depends on your team size, downtime tolerance, and how specialized your systems are.",
    fullDesc:
      "Deciding between building an in-house IT team and outsourcing to a managed IT provider comes down to a few practical questions rather than a one-size-fits-all rule. This article walks through the true cost of an in-house hire — salary, benefits, training, and the coverage gap when that person is on leave — compared against a managed support retainer that provides 24/7 coverage across a team of specialists. We cover how to evaluate response-time SLAs, what 'coverage hours' actually means in a contract, and questions to ask a potential IT partner before signing, including how they handle after-hours emergencies and how quickly they can onboard new systems. For businesses with highly specialized or proprietary systems, we discuss a hybrid model: a small in-house point of contact paired with an outsourced team for deeper technical work and after-hours monitoring. The piece closes with a short comparison table businesses can use internally to score their own situation against team size, budget, and system complexity.",
    author: "Sahil Bajaj",
    role: "Senior Specialist @ NexCore IT",
    date: "July 12, 2026",
  },
];

/* ============================================================
   FAQ ITEM
============================================================ */

function FaqItem({ item, isOpen, onToggle }) {
  return (
    <div style={styles.faqItem}>
      <button style={styles.faqSummary} onClick={onToggle}>
        <span>{item.q}</span>
        <span
          style={{
            ...styles.faqPlus,
            transform: isOpen ? "rotate(45deg)" : "none",
          }}
        >
          +
        </span>
      </button>

      {isOpen && <p style={styles.faqAnswer}>{item.a}</p>}
    </div>
  );
}

/* ============================================================
   BLOG PLAYER (main "now viewing" panel — like the YouTube video area)
============================================================ */

function BlogPlayer({ blog }) {
  return (
    <div style={styles.playerCard}>
      <div style={styles.playerImageWrap}>
        <img src={blog.image} alt={blog.title} style={styles.playerImage} />
      </div>

      <div style={styles.playerBody}>
        <div style={styles.blogTop}>
          <span style={styles.blogCategory}>{blog.category}</span>
          <span style={styles.blogRead}>⏱ {blog.readTime}</span>
        </div>

        <h2 style={styles.playerTitle}>{blog.title}</h2>

        <div style={styles.playerAuthorRow}>
          <img src={authorImg} alt="" style={styles.authorImg} />
          <div>
            <h4 style={styles.authorName}>{blog.author}</h4>
            <p style={styles.authorRole}>
              {blog.role} · 📅 {blog.date}
            </p>
          </div>
        </div>

        <p style={styles.playerFullDesc}>{blog.fullDesc}</p>
      </div>
    </div>
  );
}

/* ============================================================
   BLOG SIDEBAR ITEM (like a YouTube "up next" row)
============================================================ */

function BlogSidebarItem({ blog, isActive, onSelect }) {
  return (
    <button
      style={{
        ...styles.sidebarItem,
        ...(isActive ? styles.sidebarItemActive : null),
      }}
      onClick={() => onSelect(blog)}
    >
      <div style={styles.sidebarThumbWrap}>
        <img src={blog.image} alt={blog.title} style={styles.sidebarThumb} />
      </div>

      <div style={styles.sidebarInfo}>
        <span style={styles.sidebarCategory}>{blog.category}</span>

        <h4 style={styles.sidebarTitle}>{blog.title}</h4>

        <p style={styles.sidebarMeta}>
          {blog.author} · {blog.readTime}
        </p>
      </div>
    </button>
  );
}

/* ============================================================
   BLOG PAGE
============================================================ */

export default function ITServicesBlog() {
  const [openFaq, setOpenFaq] = useState(0);
  const [activeBlog, setActiveBlog] = useState(BLOGS[0]);

  return (
    <div style={styles.body}>
      {/* =========================
          HERO
      ========================= */}

      <section style={styles.hero}>
        <div style={styles.heroGrid}>
          <div>
            <span style={styles.eyebrow}>
              <span style={styles.eyebrowDot} />
              IT Services & Technology Solutions
            </span>

            <h1 style={styles.h1}>
              Your business needs technology that{" "}
              <span style={{ color: "#0A7E7A" }}>never slows you down.</span>
            </h1>

            <p style={styles.lead}>
              Web development, mobile applications, cloud infrastructure,
              cybersecurity, and custom software solutions — all from one
              reliable technology partner.
            </p>

            <div style={styles.heroCtas}>
              <a href="#contact" style={styles.btnPrimary}>
                Book a Free Consultation
              </a>

              <a href="#services" style={styles.btnSecondary}>
                Explore Services
              </a>
            </div>

            <div style={styles.heroStats}>
              <div style={styles.statBox}>
                <b style={styles.statNum}>120+</b>
                <span style={styles.statLabel}>Projects Delivered</span>
              </div>

              <div style={styles.statBox}>
                <b style={styles.statNum}>99.9%</b>
                <span style={styles.statLabel}>Uptime Guarantee</span>
              </div>

              <div style={styles.statBox}>
                <b style={styles.statNum}>24/7</b>
                <span style={styles.statLabel}>Support Available</span>
              </div>
            </div>
          </div>

          {/* SYSTEM STATUS */}

          <div style={styles.statusPanel}>
            <div style={styles.statusTop}>
              <span>SYSTEM STATUS</span>

              <span style={styles.liveTag}>
                <span style={styles.liveDot} />
                ALL SYSTEMS LIVE
              </span>
            </div>

            {[
              ["Web Development", "ACTIVE"],
              ["Cloud Infrastructure", "99.98%"],
              ["Mobile App Delivery", "ON TRACK"],
              ["Cybersecurity Monitoring", "SECURE"],
              ["24/7 Support Desk", "ONLINE"],
            ].map(([label, val]) => (
              <div style={styles.nodeRow} key={label}>
                <span style={styles.nodeDot} />
                <span style={styles.nodeLabel}>{label}</span>
                <span style={styles.nodeVal}>{val}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =========================
          TEAM BANNER
      ========================= */}

      <section style={styles.photoBanner}>
        <img
          src={collaborationImage}
          alt="Technology team collaborating"
          style={styles.photoBannerImg}
        />

        <div style={styles.photoBannerOverlay} />

        <div style={styles.wrap_photo}>
          <div style={styles.photoContent}>
            <span style={{ ...styles.eyebrow, color: "#0EA5A0" }}>
              <span style={styles.eyebrowDot} />
              Our Team
            </span>

            <h2 style={styles.photoH2}>
              The people behind your technology.
            </h2>

            <p style={styles.photoP}>
              Experienced developers, technology specialists, and
              problem-solvers working together to build reliable digital
              solutions that support your business goals.
            </p>
          </div>
        </div>
      </section>

      {/* =========================
          BUSINESS INTRODUCTION
      ========================= */}

      <section style={styles.intro} id="about">
        <div style={styles.introWrap}>
          <div>
            <span style={styles.eyebrow}>
              <span style={styles.eyebrowDot} />
              Business Introduction
            </span>

            <h2 style={styles.h2}>
              A technology partner focused on your growth.
            </h2>

            <p style={styles.introP}>
              NexCore IT is a full-service technology solutions company
              helping startups, growing businesses, and enterprises build
              reliable and scalable digital solutions.
            </p>

            <p style={styles.introP}>
              Our team brings together developers, designers, cloud
              specialists, and security professionals to handle projects
              from strategy and design to development, deployment, and
              support.
            </p>

            <p style={styles.introP}>
              We do more than write code. We understand your business
              objectives and create technology strategies designed to
              deliver practical and measurable results.
            </p>

            <p style={styles.introP}>
              Transparency, reliable delivery, technical excellence, and
              long-term support are at the core of how we work.
            </p>
          </div>

          <div style={styles.introVisual}>
            <svg viewBox="0 0 320 260" fill="none" style={{ width: "88%", height: "88%" }}>
              <circle cx="60" cy="50" r="5" fill="#0EA5A0" />
              <circle cx="160" cy="30" r="5" fill="#F5A623" />
              <circle cx="260" cy="70" r="5" fill="#0EA5A0" />
              <circle cx="90" cy="140" r="5" fill="#0EA5A0" />
              <circle cx="220" cy="150" r="5" fill="#F5A623" />
              <circle cx="150" cy="210" r="5" fill="#0EA5A0" />
              <circle cx="40" cy="220" r="5" fill="#0EA5A0" />

              <path
                d="M60 50 L160 30 L260 70 M60 50 L90 140 L150 210 L40 220 M160 30 L220 150 M90 140 L220 150 M150 210 L260 70"
                stroke="#2A3A66"
                strokeWidth="1.5"
              />

              <path d="M60 50 L90 140" stroke="#0EA5A0" strokeWidth="1.5" strokeDasharray="4 4" />
              <path d="M160 30 L220 150" stroke="#F5A623" strokeWidth="1.5" strokeDasharray="4 4" />
            </svg>
          </div>
        </div>
      </section>

      {/* =========================
          PHOTO GALLERY
      ========================= */}

      <section style={styles.gallery}>
        <div style={styles.wrap}>
          <div style={{ maxWidth: 600, marginBottom: 36 }}>
            <span style={styles.eyebrow}>
              <span style={styles.eyebrowDot} />
              Behind The Work
            </span>

            <h2 style={styles.h2sm}>Real people building real solutions.</h2>

            <p style={styles.introP}>
              From development and collaboration to deployment and
              optimization, our team works closely together at every stage
              of the project.
            </p>
          </div>

          <div style={styles.galleryGrid}>
            <figure style={styles.galleryFigure}>
              <img src={collaborationImage} alt="Team collaboration" style={styles.galleryImg} />
              <figcaption style={styles.galleryCaption}>Team Collaboration</figcaption>
            </figure>

            <figure style={styles.galleryFigure}>
              <img src={codeImage} alt="Software development and coding" style={styles.galleryImg} />
              <figcaption style={styles.galleryCaption}>Software Development</figcaption>
            </figure>

            <figure style={styles.galleryFigure}>
              <img src={domesticImage} alt="Business operations and technology" style={styles.galleryImg} />
              <figcaption style={styles.galleryCaption}>Business Operations</figcaption>
            </figure>
          </div>
        </div>
      </section>

      {/* =========================
          BUSINESS OVERVIEW
      ========================= */}

      <section style={styles.overview} id="services">
        <div style={styles.wrap}>
          <div style={{ maxWidth: 600, marginBottom: 44 }}>
            <span style={styles.eyebrow}>
              <span style={styles.eyebrowDot} />
              Business Overview
            </span>

            <h2 style={styles.h2}>
              Complete technology solutions under one roof.
            </h2>

            <p style={styles.introP}>
              From websites and mobile applications to cloud infrastructure
              and cybersecurity, every service is aligned with your business
              objectives.
            </p>
          </div>

          <div style={styles.serviceGrid}>
            {SERVICES.map((service) => (
              <div style={styles.serviceCard} key={service.title}>
                <div style={styles.iconBadge}>{service.icon}</div>
                <h3 style={styles.h3}>{service.title}</h3>
                <p style={styles.serviceDesc}>{service.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =========================
          BLOGS — YouTube-style watch layout
          (main article left, scrollable "up next" list right)
      ========================= */}

      <section style={styles.blogsSection} id="blogs">
        <div style={styles.wrap}>
          <div style={styles.blogsHeadingRow}>
            <div style={{ maxWidth: 600 }}>
              <span style={styles.eyebrow}>
                <span style={styles.eyebrowDot} />
                From Our Blog
              </span>

              <h2 style={styles.h2}>Insights worth reading.</h2>

              <p style={styles.introP}>
                Pick an article from the list to open it here — scroll the
                side panel for more.
              </p>
            </div>
          </div>

          <div style={styles.blogsWatchGrid}>
            <BlogPlayer blog={activeBlog} />

            <div style={styles.blogsSidebar} className="blogsSidebar">
              {BLOGS.map((blog, index) => (
                <BlogSidebarItem
                  blog={blog}
                  key={index}
                  isActive={activeBlog.title === blog.title}
                  onSelect={setActiveBlog}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* =========================
          FAQ
      ========================= */}

      <section style={styles.faq} id="faq">
        <div style={styles.wrap}>
          <div style={{ maxWidth: 600, margin: "0 auto 40px", textAlign: "center" }}>
            <span style={styles.eyebrow}>
              <span style={styles.eyebrowDot} />
              FAQs
            </span>

            <h2 style={styles.h2}>Your questions, answered.</h2>

            <p style={styles.introP}>
              Find answers to common questions about IT services, technology
              solutions, development, and support.
            </p>
          </div>

          <div style={styles.faqGrid}>
            {FAQS.map((item, index) => (
              <FaqItem
                key={item.q}
                item={item}
                isOpen={openFaq === index}
                onToggle={() => setOpenFaq(openFaq === index ? -1 : index)}
              />
            ))}
          </div>
        </div>
      </section>

      {/* =========================
          CTA
      ========================= */}

      <section style={styles.ctaStrip} id="contact">
        <div style={styles.wrap}>
          <h2 style={{ ...styles.h2, color: "#fff" }}>
            Ready to build technology that scales?
          </h2>

          <p style={{ color: "#AEB9D6", marginBottom: 28, fontSize: 15 }}>
            Talk to our team for a free consultation and discover the right
            technology solution for your business.
          </p>

          <a href="#contact" style={styles.btnPrimary}>
            Contact Us
          </a>
        </div>
      </section>

      <footer style={styles.footer}>© 2026 NexCore IT. All rights reserved.</footer>
    </div>
  );
}

/* ============================================================
   STYLES
============================================================ */

const navy = "#0B1633";
const navySoft = "#131E44";
const bg = "#F4F6FA";
const paper = "#FFFFFF";

const teal = "#0EA5A0";
const tealDark = "#0A7E7A";
const amber = "#F5A623";

const ink = "#10152B";
const inkSoft = "#55607A";
const line = "#DDE3EE";

const styles = {
  body: {
    background: bg,
    color: ink,
    fontFamily: "'Inter', system-ui, sans-serif",
    lineHeight: 1.6,
  },

  wrap: {
    maxWidth: 1120,
    margin: "0 auto",
    padding: "0 24px",
  },

  wrap_photo: {
    maxWidth: 1120,
    margin: "0 auto",
    padding: "0 24px",
    position: "relative",
    zIndex: 2,
    width: "100%",
  },

  hero: {
    padding: "88px 0 64px",
    background: `linear-gradient(180deg, ${bg} 0%, #EEF1F8 100%)`,
  },

  heroGrid: {
    maxWidth: 1120,
    margin: "0 auto",
    padding: "0 24px",
    display: "grid",
    gridTemplateColumns: "1.15fr 0.85fr",
    gap: 56,
    alignItems: "center",
  },

  eyebrow: {
    fontFamily: "'JetBrains Mono', monospace",
    fontSize: 12,
    letterSpacing: "0.14em",
    textTransform: "uppercase",
    color: tealDark,
    display: "inline-flex",
    alignItems: "center",
    gap: 8,
  },

  eyebrowDot: {
    width: 7,
    height: 7,
    background: teal,
    borderRadius: "50%",
    boxShadow: "0 0 0 4px rgba(14,165,160,0.15)",
  },

  h1: {
    fontFamily: "'Sora', sans-serif",
    fontSize: 44,
    lineHeight: 1.12,
    margin: "18px 0 20px",
    fontWeight: 700,
    color: navy,
    letterSpacing: "-0.02em",
  },

  h2: {
    fontFamily: "'Sora', sans-serif",
    fontSize: 30,
    margin: "14px 0 18px",
    color: navy,
    letterSpacing: "-0.02em",
  },

  h2sm: {
    fontFamily: "'Sora', sans-serif",
    fontSize: 28,
    margin: "14px 0 12px",
    color: navy,
  },

  h3: {
    fontFamily: "'Sora', sans-serif",
    fontSize: 17,
    marginBottom: 8,
    color: navy,
  },

  lead: {
    fontSize: 17,
    color: inkSoft,
    maxWidth: 520,
    marginBottom: 32,
  },

  heroCtas: {
    display: "flex",
    gap: 14,
    flexWrap: "wrap",
  },

  btnPrimary: {
    background: teal,
    color: "#fff",
    padding: "14px 26px",
    borderRadius: 9,
    fontWeight: 600,
    fontSize: 15,
    textDecoration: "none",
    display: "inline-block",
    boxShadow: "0 10px 24px -8px rgba(14,165,160,0.55)",
  },

  btnSecondary: {
    border: `1.5px solid ${line}`,
    background: "#fff",
    color: navy,
    padding: "14px 26px",
    borderRadius: 9,
    fontWeight: 600,
    fontSize: 15,
    textDecoration: "none",
    display: "inline-block",
  },

  heroStats: {
    display: "flex",
    gap: 28,
    marginTop: 44,
    flexWrap: "wrap",
  },

  statBox: {
    borderLeft: `2px solid ${teal}`,
    paddingLeft: 12,
  },

  statNum: {
    fontFamily: "'Sora', sans-serif",
    fontSize: 22,
    color: navy,
    display: "block",
  },

  statLabel: {
    fontSize: 12,
    color: inkSoft,
  },

  statusPanel: {
    background: navy,
    borderRadius: 18,
    padding: 26,
    color: "#fff",
    boxShadow: "0 30px 60px -20px rgba(11,22,51,0.45)",
  },

  statusTop: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    fontFamily: "'JetBrains Mono', monospace",
    fontSize: 12,
    color: "#8FA0C7",
    marginBottom: 18,
    paddingBottom: 14,
    borderBottom: "1px solid rgba(255,255,255,0.1)",
  },

  liveTag: {
    color: teal,
    display: "flex",
    alignItems: "center",
    gap: 6,
  },

  liveDot: {
    width: 6,
    height: 6,
    background: teal,
    borderRadius: "50%",
    boxShadow: "0 0 0 4px rgba(14,165,160,0.25)",
    display: "inline-block",
  },

  nodeRow: {
    display: "flex",
    alignItems: "center",
    gap: 12,
    padding: "11px 0",
    borderBottom: "1px dashed rgba(255,255,255,0.08)",
    fontSize: 13.5,
  },

  nodeDot: {
    width: 8,
    height: 8,
    borderRadius: "50%",
    background: teal,
    flexShrink: 0,
  },

  nodeLabel: {
    flex: 1,
    color: "#D7DFF2",
  },

  nodeVal: {
    fontFamily: "'JetBrains Mono', monospace",
    fontSize: 11.5,
    color: amber,
  },

  photoBanner: {
    position: "relative",
    height: 380,
    overflow: "hidden",
    display: "flex",
    alignItems: "center",
  },

  photoBannerImg: {
    position: "absolute",
    inset: 0,
    width: "100%",
    height: "100%",
    objectFit: "cover",
  },

  photoBannerOverlay: {
    position: "absolute",
    inset: 0,
    background:
      "linear-gradient(105deg, rgba(11,22,51,0.92) 0%, rgba(11,22,51,0.75) 40%, rgba(11,22,51,0.25) 75%)",
  },

  photoContent: {
    maxWidth: 520,
    color: "#fff",
  },

  photoH2: {
    fontFamily: "'Sora', sans-serif",
    color: "#fff",
    fontSize: 30,
    margin: "14px 0 14px",
  },

  photoP: {
    color: "#C3CCE6",
    fontSize: 15,
  },

  intro: {
    padding: "80px 0",
    background: paper,
  },

  introWrap: {
    maxWidth: 1120,
    margin: "0 auto",
    padding: "0 24px",
    display: "grid",
    gridTemplateColumns: "0.9fr 1.1fr",
    gap: 60,
    alignItems: "start",
  },

  introP: {
    color: inkSoft,
    fontSize: 15.5,
    marginBottom: 14,
  },

  introVisual: {
    background: `linear-gradient(155deg, ${navy}, ${navySoft})`,
    borderRadius: 14,
    aspectRatio: "4/3.1",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },

  gallery: {
    padding: "70px 0",
    background: paper,
  },

  galleryGrid: {
    display: "grid",
    gridTemplateColumns: "1fr 1fr 1fr",
    gap: 18,
    height: 340,
  },

  galleryFigure: {
    margin: 0,
    borderRadius: 14,
    overflow: "hidden",
    position: "relative",
  },

  galleryImg: {
    width: "100%",
    height: "100%",
    objectFit: "cover",
    display: "block",
  },

  galleryCaption: {
    position: "absolute",
    left: 0,
    right: 0,
    bottom: 0,
    padding: "16px 18px",
    background: "linear-gradient(180deg, transparent, rgba(11,22,51,0.85))",
    color: "#fff",
    fontSize: 13.5,
    fontWeight: 600,
  },

  overview: {
    padding: "80px 0",
    background: bg,
  },

  serviceGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(3,1fr)",
    gap: 22,
  },

  serviceCard: {
    background: paper,
    border: `1px solid ${line}`,
    borderRadius: 14,
    padding: 26,
  },

  iconBadge: {
    width: 44,
    height: 44,
    borderRadius: 10,
    background: `linear-gradient(155deg, ${navy}, ${navySoft})`,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 16,
  },

  serviceDesc: {
    fontSize: 14,
    color: inkSoft,
  },

  /* ---------- BLOGS (YouTube-style watch layout) ---------- */

  blogsSection: {
    padding: "80px 0 90px",
    background: paper,
    borderTop: `1px solid ${line}`,
  },

  blogsHeadingRow: {
    marginBottom: 32,
  },

  blogsWatchGrid: {
    display: "grid",
    gridTemplateColumns: "1.7fr 1fr",
    gap: 28,
    alignItems: "start",
  },

  blogTop: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 12,
  },

  blogCategory: {
    fontFamily: "'JetBrains Mono', monospace",
    fontSize: 11,
    letterSpacing: "0.06em",
    textTransform: "uppercase",
    color: tealDark,
    background: "rgba(14,165,160,0.1)",
    padding: "4px 9px",
    borderRadius: 6,
  },

  blogRead: {
    fontSize: 12,
    color: inkSoft,
  },

  authorImg: {
    width: 34,
    height: 34,
    borderRadius: "50%",
    objectFit: "cover",
    flexShrink: 0,
  },

  authorName: {
    fontSize: 13,
    color: navy,
    margin: 0,
    fontWeight: 600,
  },

  authorRole: {
    fontSize: 11.5,
    color: inkSoft,
    margin: 0,
  },

  /* main "now viewing" panel */

  playerCard: {
    background: paper,
    border: `1px solid ${line}`,
    borderRadius: 16,
    overflow: "hidden",
    boxShadow: "0 10px 30px -18px rgba(11,22,51,0.25)",
  },

  playerImageWrap: {
    height: 320,
    overflow: "hidden",
  },

  playerImage: {
    width: "100%",
    height: "100%",
    objectFit: "cover",
    display: "block",
  },

  playerBody: {
    padding: "26px 30px 32px",
  },

  playerTitle: {
    fontFamily: "'Sora', sans-serif",
    fontSize: 25,
    lineHeight: 1.3,
    color: navy,
    margin: "0 0 18px",
  },

  playerAuthorRow: {
    display: "flex",
    alignItems: "center",
    gap: 10,
    paddingBottom: 18,
    marginBottom: 18,
    borderBottom: `1px solid ${line}`,
  },

  playerFullDesc: {
    fontSize: 15,
    color: inkSoft,
    whiteSpace: "pre-line",
  },

  /* right-side scrollable "up next" list */

  blogsSidebar: {
    display: "flex",
    flexDirection: "column",
    gap: 10,
    maxHeight: 620,
    overflowY: "auto",
    paddingRight: 6,
    scrollbarWidth: "thin",
    scrollbarColor: `${teal} ${bg}`,
  },

  sidebarItem: {
    display: "flex",
    gap: 12,
    textAlign: "left",
    background: "none",
    border: "1px solid transparent",
    borderRadius: 12,
    padding: 8,
    cursor: "pointer",
    fontFamily: "inherit",
  },

  sidebarItemActive: {
    background: "rgba(14,165,160,0.08)",
    border: `1px solid rgba(14,165,160,0.35)`,
  },

  sidebarThumbWrap: {
    flex: "0 0 112px",
    height: 72,
    borderRadius: 8,
    overflow: "hidden",
  },

  sidebarThumb: {
    width: "100%",
    height: "100%",
    objectFit: "cover",
    display: "block",
  },

  sidebarInfo: {
    flex: 1,
    minWidth: 0,
  },

  sidebarCategory: {
    fontFamily: "'JetBrains Mono', monospace",
    fontSize: 10,
    letterSpacing: "0.06em",
    textTransform: "uppercase",
    color: tealDark,
  },

  sidebarTitle: {
    fontFamily: "'Sora', sans-serif",
    fontSize: 13.5,
    lineHeight: 1.35,
    color: navy,
    margin: "4px 0 4px",
    display: "-webkit-box",
    WebkitLineClamp: 2,
    WebkitBoxOrient: "vertical",
    overflow: "hidden",
  },

  sidebarMeta: {
    fontSize: 11.5,
    color: inkSoft,
    margin: 0,
  },

  faq: {
    padding: "80px 0 100px",
    background: paper,
  },

  faqGrid: {
    maxWidth: 1000,
    margin: "0 auto",
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    gridAutoFlow: "column",
    gridTemplateRows: "repeat(5, auto)",
    columnGap: 56,
    rowGap: 0,
  },

  faqItem: {
    borderBottom: `1px solid ${line}`,
    padding: "20px 4px",
  },

  faqSummary: {
    cursor: "pointer",
    width: "100%",
    background: "none",
    border: "none",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    gap: 16,
    fontWeight: 600,
    fontSize: 15.5,
    color: navy,
    fontFamily: "inherit",
    padding: 0,
    textAlign: "left",
  },

  faqPlus: {
    fontFamily: "'JetBrains Mono', monospace",
    fontSize: 18,
    color: teal,
    flexShrink: 0,
    transition: "transform 0.2s ease",
  },

  faqAnswer: {
    color: inkSoft,
    fontSize: 14.5,
    marginTop: 12,
    paddingRight: 26,
  },

  ctaStrip: {
    background: navy,
    padding: "64px 0",
    textAlign: "center",
  },

  footer: {
    background: "#0A1330",
    color: "#8FA0C7",
    padding: "36px 0",
    textAlign: "center",
    fontSize: 13,
  },
};