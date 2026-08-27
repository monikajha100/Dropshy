import React, { useState } from "react";
import {
  Mail,
  Phone,
  MapPin,
  ArrowUpRight,
  Send,
  Clock,
  MessageCircle,
  CheckCircle2,
} from "lucide-react";
import "./Contactus.css";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);

    setTimeout(() => {
      setSubmitted(false);
      setFormData({
        name: "",
        email: "",
        phone: "",
        subject: "",
        message: "",
      });
    }, 3000);
  };

  return (
    <main className="contact-page">

      {/* Background Elements */}
      <div className="contact-glow contact-glow-one"></div>
      <div className="contact-glow contact-glow-two"></div>

      {/* HERO */}
      <section className="contact-hero">
        <div className="contact-hero-inner">

          <div className="contact-badge">
            <span className="badge-dot"></span>
            WE'D LOVE TO HEAR FROM YOU
          </div>

          <h1>
            Let's Build Something
            <span> Great Together.</span>
          </h1>

          <p>
            Have a question, need help with your store, or want to explore
            Dropsy services? Our team is here to help you move forward.
          </p>

        </div>
      </section>

      {/* MAIN CONTACT */}
      <section className="contact-main">
        <div className="contact-container">

          {/* LEFT */}
          <div className="contact-left">

            <div className="section-label">
              <span></span>
              GET IN TOUCH
            </div>

            <h2>
              We're here to
              <br />
              <span>help you grow.</span>
            </h2>

            <p className="contact-description">
              Whether you're starting your first online store or scaling an
              existing e-commerce business, reach out to our team and we'll
              help you find the right solution.
            </p>

            {/* CONTACT CARDS */}
            <div className="contact-info-list">

              <a
                href="mailto:hello@dropsy.com"
                className="contact-info-card"
              >
                <div className="contact-icon">
                  <Mail size={22} />
                </div>

                <div>
                  <small>Email us</small>
                  <strong>hello@dropsy.com</strong>
                </div>

                <ArrowUpRight className="info-arrow" size={20} />
              </a>

              <a
                href="tel:+919876543210"
                className="contact-info-card"
              >
                <div className="contact-icon">
                  <Phone size={22} />
                </div>

                <div>
                  <small>Call us</small>
                  <strong>+91 98765 43210</strong>
                </div>

                <ArrowUpRight className="info-arrow" size={20} />
              </a>

              <div className="contact-info-card">
                <div className="contact-icon">
                  <MapPin size={22} />
                </div>

                <div>
                  <small>Our office</small>
                  <strong>New Delhi, India</strong>
                </div>
              </div>

            </div>

            {/* AVAILABILITY */}
            <div className="availability-card">
              <div className="availability-icon">
                <Clock size={20} />
              </div>

              <div>
                <strong>We're available</strong>
                <p>Monday – Saturday · 10:00 AM – 7:00 PM</p>
              </div>

              <span className="online-status">
                <i></i>
                Online
              </span>
            </div>

          </div>

          {/* RIGHT FORM */}
          <div className="contact-form-wrapper">

            <div className="form-top">
              <div>
                <span>CONTACT FORM</span>
                <h3>Tell us about your project.</h3>
              </div>

              <MessageCircle size={30} />
            </div>

            {submitted ? (
              <div className="success-message">

                <div className="success-icon">
                  <CheckCircle2 size={48} />
                </div>

                <h3>Message Sent!</h3>

                <p>
                  Thanks for reaching out. Our team will get back to you
                  shortly.
                </p>

              </div>
            ) : (
              <form onSubmit={handleSubmit}>

                <div className="form-row">

                  <div className="input-group">
                    <label>Your Name</label>
                    <input
                      type="text"
                      name="name"
                      placeholder="John Doe"
                      value={formData.name}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  <div className="input-group">
                    <label>Email Address</label>
                    <input
                      type="email"
                      name="email"
                      placeholder="john@example.com"
                      value={formData.email}
                      onChange={handleChange}
                      required
                    />
                  </div>

                </div>

                <div className="form-row">

                  <div className="input-group">
                    <label>Phone Number</label>
                    <input
                      type="tel"
                      name="phone"
                      placeholder="+91 98765 43210"
                      value={formData.phone}
                      onChange={handleChange}
                    />
                  </div>

                  <div className="input-group">
                    <label>Subject</label>

                    <select
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                    >
                      <option value="">Select a subject</option>
                      <option value="dropshipping">
                        Dropshipping
                      </option>
                      <option value="ecommerce">
                        E-Commerce Services
                      </option>
                      <option value="seller">
                        Seller Registration
                      </option>
                      <option value="partnership">
                        Partnership
                      </option>
                      <option value="support">
                        General Support
                      </option>
                    </select>
                  </div>

                </div>

                <div className="input-group">
                  <label>Your Message</label>

                  <textarea
                    name="message"
                    rows="6"
                    placeholder="Tell us how we can help..."
                    value={formData.message}
                    onChange={handleChange}
                    required
                  ></textarea>
                </div>

                <button type="submit" className="submit-btn">
                  <span>Send Message</span>
                  <Send size={19} />
                </button>

                <p className="form-note">
                  By submitting this form, you agree to our terms and privacy
                  policy.
                </p>

              </form>
            )}

          </div>

        </div>
      </section>

      {/* BOTTOM CTA */}
      <section className="contact-cta">

        <div className="cta-content">

          <div className="cta-small">
            <span></span>
            READY TO GET STARTED?
          </div>

          <h2>
            Your next big idea
            <br />
            <span>starts here.</span>
          </h2>

          <p>
            Join thousands of sellers building and growing their online
            businesses with Dropsy.
          </p>

          <button
            className="cta-button"
            onClick={() =>
              document
                .querySelector(".contact-form-wrapper")
                ?.scrollIntoView({ behavior: "smooth" })
            }
          >
            Talk to our team
            <ArrowUpRight size={20} />
          </button>

        </div>

      </section>

    </main>
  );
};

export default Contact;