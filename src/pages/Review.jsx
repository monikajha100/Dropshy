import React, { useState } from "react";
import "./Review.css";

export default function WriteReviewModal() {
  const [isOpen, setIsOpen] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [rating, setRating] = useState(0);
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    review: "",
  });
  const [errors, setErrors] = useState({});

  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);

  const resetForm = () => {
    setRating(0);
    setForm({ name: "", email: "", phone: "", review: "" });
    setErrors({});
    setSubmitted(false);
  };

  const handleChange = (field) => (e) => {
    setForm((prev) => ({ ...prev, [field]: e.target.value }));
  };

  const isValidEmail = (v) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v);
  const isValidPhone = (v) => /^[0-9+\-\s()]{7,15}$/.test(v);

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = {};

    if (!rating) newErrors.rating = "Please select a rating.";
    if (!form.name.trim()) newErrors.name = "Please enter your name.";
    if (!isValidEmail(form.email.trim()))
      newErrors.email = "Please enter a valid email.";
    if (!isValidPhone(form.phone.trim()))
      newErrors.phone = "Please enter a valid phone number.";
    if (!form.review.trim()) newErrors.review = "Please write your review.";

    setErrors(newErrors);
    if (Object.keys(newErrors).length > 0) return;

    // TODO: replace with your actual submit call (fetch/AJAX to your backend)
    const payload = { rating, ...form };
    console.log("Review submitted:", payload);

    setSubmitted(true);
  };

  return (
    <div className="review-wrapper">
      <button className="write-review-btn" onClick={openModal}>
        ★ Write Your Review
      </button>

      {isOpen && (
        <div
          className="review-overlay"
          onClick={(e) => {
            if (e.target === e.currentTarget) closeModal();
          }}
        >
          <div className="review-modal">
            <button
              className="review-close-btn"
              onClick={closeModal}
              aria-label="Close"
            >
              ✕
            </button>

            {!submitted ? (
              <>
                <h2>Write a Review</h2>

                <form onSubmit={handleSubmit} noValidate>
                  <Field label="Rating" required error={errors.rating}>
                    <div className="review-stars">
                      {[1, 2, 3, 4, 5].map((val) => (
                        <span
                          key={val}
                          className={val <= rating ? "filled" : ""}
                          onClick={() => {
                            setRating(val);
                            setErrors((prev) => ({ ...prev, rating: undefined }));
                          }}
                        >
                          ★
                        </span>
                      ))}
                    </div>
                  </Field>

                  <Field label="Your Name" required error={errors.name}>
                    <input
                      type="text"
                      placeholder="Your Name"
                      value={form.name}
                      onChange={handleChange("name")}
                    />
                  </Field>

                  <Field label="Email Address" required error={errors.email}>
                    <input
                      type="email"
                      placeholder="Your Email"
                      value={form.email}
                      onChange={handleChange("email")}
                    />
                  </Field>

                  <Field label="Phone Number" required error={errors.phone}>
                    <input
                      type="tel"
                      placeholder="Your phone"
                      value={form.phone}
                      onChange={handleChange("phone")}
                    />
                  </Field>

                  <Field label="Your Review" required error={errors.review}>
                    <textarea
                      placeholder="Share your experience..."
                      value={form.review}
                      onChange={handleChange("review")}
                      rows={4}
                    />
                  </Field>

                  <p className="review-required-note">
                    * All fields are required
                  </p>

                  <button type="submit" className="review-submit-btn">
                    Submit Review
                  </button>
                </form>
              </>
            ) : (
              <div className="review-success">
                <div className="tick">✓</div>
                <h3>Thank you for your review!</h3>
                <p>Your feedback has been submitted successfully.</p>
                <button onClick={resetForm}>Write another review</button>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}

function Field({ label, required, error, children }) {
  return (
    <div className={`review-field${error ? " error" : ""}`}>
      <label>
        {label} {required && <span className="req">*</span>}
      </label>
      {children}
      <div className="review-error-msg">{error}</div>
    </div>
  );
}