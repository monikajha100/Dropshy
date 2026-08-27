import React, { useState } from "react";
import "./ContactUs.css";

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: "",
    mobile: "",
    email: "",
    subject: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    setSubmitted(true);

    setFormData({
      name: "",
      mobile: "",
      email: "",
      subject: "",
      message: "",
    });

    setTimeout(() => {
      setSubmitted(false);
    }, 5000);
  };

  return (
    <main className="contact-page">

      {/* =====================================================
          HERO
      ===================================================== */}

      <section className="contact-hero">

        <div className="contact-hero-glow glow-one"></div>
        <div className="contact-hero-glow glow-two"></div>

        <div className="contact-hero-inner">

          <div className="contact-hero-content">

            <span className="contact-eyebrow">
              CONTACT DROPSHY
            </span>

            <h1>
              Let's Build Your
              <span> E-Commerce Journey </span>
              Together
            </h1>

            <p>
              Have a question, need seller support, or want to know how
              DROPSHY can help you start your online business?
              Our team is here to help you take the next step.
            </p>

            <div className="contact-hero-points">

              <div>
                <span className="point-icon">✓</span>
                <span>Seller Support</span>
              </div>

              <div>
                <span className="point-icon">✓</span>
                <span>E-Commerce Guidance</span>
              </div>

              <div>
                <span className="point-icon">✓</span>
                <span>Business Assistance</span>
              </div>

            </div>

          </div>

          <div className="contact-hero-card">

            <div className="hero-card-top">

              <div className="hero-card-icon">
                💬
              </div>

              <div>
                <span>Need Assistance?</span>
                <strong>We're Here For You</strong>
              </div>

            </div>

            <div className="hero-card-line"></div>

            <p>
              Connect with the DROPSHY team and get the guidance
              you need to start, manage and grow your online business.
            </p>

            <a href="#contact-form" className="hero-card-button">
              Talk to Our Team
              <span>→</span>
            </a>

          </div>

        </div>

      </section>


      {/* =====================================================
          CONTACT INFO
      ===================================================== */}

      <section className="contact-info-section">

        <div className="contact-container">

          <div className="section-heading center-heading">

            <span className="small-label">
              GET IN TOUCH
            </span>

            <h2>
              We're Just a Message Away
            </h2>

            <p>
              Whether you're starting your first online business or
              looking to scale your existing store, our team is ready
              to assist you.
            </p>

          </div>


          <div className="contact-info-grid">

            {/* PHONE */}

            <div className="contact-info-card">

              <div className="info-icon">
                📞
              </div>

              <div>
                <span>Call Us</span>

                <h3>
                  +91 XXXXX XXXXX
                </h3>

                <p>
                  Speak with our support team
                </p>
              </div>

              <div className="info-arrow">
                →
              </div>

            </div>


            {/* EMAIL */}

            <div className="contact-info-card">

              <div className="info-icon">
                ✉️
              </div>

              <div>
                <span>Email Us</span>

                <h3>
                  support@dropshy.com
                </h3>

                <p>
                  Send us your query anytime
                </p>
              </div>

              <div className="info-arrow">
                →
              </div>

            </div>


            {/* WHATSAPP */}

            <div className="contact-info-card">

              <div className="info-icon">
                💬
              </div>

              <div>
                <span>WhatsApp</span>

                <h3>
                  Chat With Us
                </h3>

                <p>
                  Quick assistance from our team
                </p>
              </div>

              <div className="info-arrow">
                →
              </div>

            </div>

          </div>

        </div>

      </section>


      {/* =====================================================
          MAIN CONTACT AREA
      ===================================================== */}

      <section
        className="contact-main-section"
        id="contact-form"
      >

        <div className="contact-container">

          <div className="contact-main-grid">


            {/* LEFT CONTENT */}

            <div className="contact-left">

              <span className="small-label">
                HAVE A QUESTION?
              </span>

              <h2>
                Tell Us How
                <span> We Can Help</span>
              </h2>

              <p>
                Fill out the form and our team will get back to you
                with the right information and guidance.
              </p>


              <div className="contact-benefits">

                <div className="benefit-item">

                  <div className="benefit-number">
                    01
                  </div>

                  <div>
                    <h4>
                      Share Your Requirement
                    </h4>

                    <p>
                      Tell us what you need help with.
                    </p>
                  </div>

                </div>


                <div className="benefit-item">

                  <div className="benefit-number">
                    02
                  </div>

                  <div>
                    <h4>
                      Our Team Connects
                    </h4>

                    <p>
                      A DROPSHY representative will review your query.
                    </p>
                  </div>

                </div>


                <div className="benefit-item">

                  <div className="benefit-number">
                    03
                  </div>

                  <div>
                    <h4>
                      Get the Right Guidance
                    </h4>

                    <p>
                      We'll help you understand the next steps.
                    </p>
                  </div>

                </div>

              </div>

            </div>


            {/* FORM */}

            <div className="contact-form-card">

              <div className="form-header">

                <span>
                  CONTACT FORM
                </span>

                <h3>
                  Send Us a Message
                </h3>

                <p>
                  We'll get back to you as soon as possible.
                </p>

              </div>


              {submitted && (
                <div className="success-message">
                  <span>✓</span>

                  <div>
                    <strong>
                      Message Sent Successfully!
                    </strong>

                    <p>
                      Thank you for contacting DROPSHY.
                      Our team will get in touch with you.
                    </p>
                  </div>
                </div>
              )}


              <form onSubmit={handleSubmit}>

                <div className="form-row">

                  <div className="form-group">

                    <label>
                      Full Name
                    </label>

                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Enter your name"
                      required
                    />

                  </div>


                  <div className="form-group">

                    <label>
                      Mobile Number
                    </label>

                    <input
                      type="tel"
                      name="mobile"
                      value={formData.mobile}
                      onChange={handleChange}
                      placeholder="Enter mobile number"
                      required
                    />

                  </div>

                </div>


                <div className="form-group">

                  <label>
                    Email Address
                  </label>

                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Enter your email"
                    required
                  />

                </div>


                <div className="form-group">

                  <label>
                    How Can We Help?
                  </label>

                  <select
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                  >

                    <option value="">
                      Select a subject
                    </option>

                    <option value="national">
                      National E-Commerce
                    </option>

                    <option value="international">
                      International E-Commerce
                    </option>

                    <option value="website">
                      Website E-Commerce
                    </option>

                    <option value="products">
                      Products & Catalog
                    </option>

                    <option value="seller">
                      Seller Support
                    </option>

                    <option value="other">
                      Other Query
                    </option>

                  </select>

                </div>


                <div className="form-group">

                  <label>
                    Message
                  </label>

                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell us about your requirement..."
                    rows="5"
                    required
                  ></textarea>

                </div>


                <button
                  type="submit"
                  className="contact-submit"
                >

                  Send Message

                  <span>
                    →
                  </span>

                </button>

                <p className="form-note">
                  🔒 Your information is safe with us.
                </p>

              </form>

            </div>

          </div>

        </div>

      </section>


      {/* =====================================================
          WHY CONTACT DROPSHY
      ===================================================== */}

      <section className="contact-why-section">

        <div className="contact-container">

          <div className="section-heading">

            <span className="small-label">
              WHY DROPSHY
            </span>

            <h2>
              More Than Just
              <span> Customer Support</span>
            </h2>

            <p>
              We believe entrepreneurs need more than technology.
              They need guidance, support and a reliable partner
              throughout their e-commerce journey.
            </p>

          </div>


          <div className="why-grid">

            <div className="why-card">

              <div className="why-number">
                01
              </div>

              <div className="why-icon">
                🚀
              </div>

              <h3>
                Start Your Business
              </h3>

              <p>
                Get guidance on starting your e-commerce journey
                with the right products and selling channels.
              </p>

            </div>


            <div className="why-card">

              <div className="why-number">
                02
              </div>

              <div className="why-icon">
                🌐
              </div>

              <h3>
                Expand Online
              </h3>

              <p>
                Explore national and international e-commerce
                opportunities for your business.
              </p>

            </div>


            <div className="why-card">

              <div className="why-number">
                03
              </div>

              <div className="why-icon">
                📈
              </div>

              <h3>
                Grow With Confidence
              </h3>

              <p>
                Get continuous support while you build and grow
                your online business.
              </p>

            </div>


            <div className="why-card">

              <div className="why-number">
                04
              </div>

              <div className="why-icon">
                🤝
              </div>

              <h3>
                Dedicated Support
              </h3>

              <p>
                Our team is here to help you understand the process
                and move forward with confidence.
              </p>

            </div>

          </div>

        </div>

      </section>


      {/* =====================================================
          FAQ
      ===================================================== */}

      <section className="contact-faq-section">

        <div className="contact-container">

          <div className="section-heading center-heading">

            <span className="small-label">
              QUICK ANSWERS
            </span>

            <h2>
              Frequently Asked Questions
            </h2>

            <p>
              Have a quick question? Here are some common things
              sellers want to know.
            </p>

          </div>


          <div className="faq-list">

            <details>
              <summary>
                How can I start my e-commerce business with DROPSHY?
                <span>+</span>
              </summary>

              <p>
                You can connect with our team through the contact
                form and share your requirements. Our team can guide
                you through the available e-commerce solutions.
              </p>

            </details>


            <details>
              <summary>
                Does DROPSHY provide national e-commerce solutions?
                <span>+</span>
              </summary>

              <p>
                Yes. DROPSHY provides solutions designed to help
                sellers explore national e-commerce marketplaces
                and grow their online business.
              </p>

            </details>


            <details>
              <summary>
                Can I sell internationally?
                <span>+</span>
              </summary>

              <p>
                DROPSHY also supports international e-commerce
                opportunities for sellers who want to explore
                global marketplaces.
              </p>

            </details>


            <details>
              <summary>
                How can I contact the DROPSHY support team?
                <span>+</span>
              </summary>

              <p>
                You can use the contact form on this page or
                reach out through the contact details provided above.
              </p>

            </details>

          </div>

        </div>

      </section>


      {/* =====================================================
          FINAL CTA
      ===================================================== */}

      <section className="contact-final-cta">

        <div className="contact-final-glow"></div>

        <div className="contact-container">

          <div className="final-cta-content">

            <span className="small-label">
              YOUR E-COMMERCE JOURNEY STARTS HERE
            </span>

            <h2>
              Ready to Take Your
              <span> First Step?</span>
            </h2>

            <p>
              Talk to DROPSHY today and discover how you can
              build and grow your online business.
            </p>

            <a
              href="#contact-form"
              className="final-cta-button"
            >
              Get in Touch
              <span>→</span>
            </a>

          </div>

        </div>

      </section>

    </main>
  );
};

export default ContactUs;