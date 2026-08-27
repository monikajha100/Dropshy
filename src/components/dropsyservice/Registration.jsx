import React, { useState } from "react";
import "./Ragistration.css";

const Registration = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    mobile: "",
    alternative: "",
    email: "",
    whatsapp: "",
    address: "",
    city: "",
    state: "",
    pin: "",
  });

  const [showPopup, setShowPopup] = useState(false);
  const [enrollmentNumber, setEnrollmentNumber] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const generateEnrollmentNumber = () => {
    const now = new Date();

    const day = String(now.getDate()).padStart(2, "0");
    const month = String(now.getMonth() + 1).padStart(2, "0");
    const year = String(now.getFullYear()).slice(-2);

    // Demo unique number
    const uniqueNumber = String(
      Math.floor(100 + Math.random() * 900)
    );

    return `DSH-${day}${month}${year}-${uniqueNumber}`;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const enrollment = generateEnrollmentNumber();

    setEnrollmentNumber(enrollment);
    setShowPopup(true);
  };

  const closePopup = () => {
    setShowPopup(false);
  };

  return (
    <section className="registration-section">

      {/* Header */}
      <div className="registration-heading">
        <span>NATIONAL DROPSHIPPING</span>

        <h1>
          Start Your Online Business
          <strong> With Dropshy</strong>
        </h1>

        <p>
          Register with Dropshy and start selling across India
          without worrying about inventory, warehouse or shipping.
        </p>
      </div>

      <div className="registration-container">

        {/* LEFT SIDE */}
        <div className="registration-info">

          <div className="info-badge">
            DROPSHY NATIONAL DROPSHIPPING
          </div>

          <h2>
            Why Choose
            <br />
            <span>Dropshy?</span>
          </h2>

          <p className="info-description">
            Everything you need to build and grow your online
            selling business in one place.
          </p>

          <div className="benefits-list">

            <div className="benefit-item">
              <div className="benefit-icon">✓</div>
              <div>
                <h3>No Large Warehouse</h3>
                <p>
                  No need to maintain a large warehouse for your business.
                </p>
              </div>
            </div>

            <div className="benefit-item">
              <div className="benefit-icon">✓</div>
              <div>
                <h3>Broad Product Selection</h3>
                <p>
                  Access a wide range of products ready to sell.
                </p>
              </div>
            </div>

            <div className="benefit-item">
              <div className="benefit-icon">✓</div>
              <div>
                <h3>Multiple Marketplaces</h3>
                <p>
                  Sell through multiple Indian marketplaces.
                </p>
              </div>
            </div>

            <div className="benefit-item">
              <div className="benefit-icon">✓</div>
              <div>
                <h3>Reach Customers Across India</h3>
                <p>
                  Expand your business and reach customers nationwide.
                </p>
              </div>
            </div>

            <div className="benefit-item">
              <div className="benefit-icon">✓</div>
              <div>
                <h3>Simplified Order Fulfillment</h3>
                <p>
                  Make order processing and fulfillment easier.
                </p>
              </div>
            </div>

            <div className="benefit-item">
              <div className="benefit-icon">✓</div>
              <div>
                <h3>Focus on Sales & Marketing</h3>
                <p>
                  Spend more time growing your business.
                </p>
              </div>
            </div>

          </div>

          <div className="seller-note">
            <span>🚀</span>
            <p>
              Suitable for both <strong>new and experienced</strong> online sellers.
            </p>
          </div>

        </div>

        {/* RIGHT SIDE FORM */}
        <div className="registration-form-card">

          <div className="form-top">
            <div>
              <span>SELLER REGISTRATION</span>
              <h2>Create Your Seller Account</h2>
            </div>

            <div className="form-number">
              01
            </div>
          </div>

          <form onSubmit={handleSubmit}>

            <div className="form-grid">

              {/* Full Name */}
              <div className="input-group">
                <label>
                  Full Name <span>*</span>
                </label>

                <input
                  type="text"
                  name="fullName"
                  placeholder="Enter your full name"
                  value={formData.fullName}
                  onChange={handleChange}
                  required
                />
              </div>

              {/* Mobile */}
              <div className="input-group">
                <label>
                  Mobile Number <span>*</span>
                </label>

                <input
                  type="tel"
                  name="mobile"
                  placeholder="Enter mobile number"
                  value={formData.mobile}
                  onChange={handleChange}
                  pattern="[0-9]{10}"
                  maxLength="10"
                  required
                />
              </div>

              {/* Alternative */}
              <div className="input-group">
                <label>Alternative Number</label>

                <input
                  type="tel"
                  name="alternative"
                  placeholder="Alternative number"
                  value={formData.alternative}
                  onChange={handleChange}
                  maxLength="10"
                />
              </div>

              {/* Gmail */}
              <div className="input-group">
                <label>
                  Gmail ID <span>*</span>
                </label>

                <input
                  type="email"
                  name="email"
                  placeholder="example@gmail.com"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>

              {/* WhatsApp */}
              <div className="input-group full-width">
                <label>WhatsApp Number</label>

                <input
                  type="tel"
                  name="whatsapp"
                  placeholder="WhatsApp number"
                  value={formData.whatsapp}
                  onChange={handleChange}
                  maxLength="10"
                />
              </div>

              {/* Address */}
              <div className="input-group full-width">
                <label>
                  Full Address <span>*</span>
                </label>

                <textarea
                  name="address"
                  placeholder="Enter your complete address"
                  value={formData.address}
                  onChange={handleChange}
                  required
                />
              </div>

              {/* City */}
              <div className="input-group">
                <label>
                  City <span>*</span>
                </label>

                <input
                  type="text"
                  name="city"
                  placeholder="Enter city"
                  value={formData.city}
                  onChange={handleChange}
                  required
                />
              </div>

              {/* State */}
              <div className="input-group">
                <label>
                  State <span>*</span>
                </label>

                <input
                  type="text"
                  name="state"
                  placeholder="Enter state"
                  value={formData.state}
                  onChange={handleChange}
                  required
                />
              </div>

              {/* PIN */}
              <div className="input-group">
                <label>
                  PIN Code <span>*</span>
                </label>

                <input
                  type="text"
                  name="pin"
                  placeholder="6 digit PIN code"
                  value={formData.pin}
                  onChange={handleChange}
                  pattern="[0-9]{6}"
                  maxLength="6"
                  required
                />
              </div>

            </div>

            <button
              type="submit"
              className="register-button"
            >
              <span>Register Now</span>
              <span className="button-arrow">→</span>
            </button>

            <p className="secure-text">
              🔒 Your information is securely submitted to Dropshy.
            </p>

          </form>

        </div>

      </div>

      {/* SUCCESS POPUP */}
      {showPopup && (
        <div className="popup-overlay">

          <div className="success-popup">

            <button
              className="popup-close"
              onClick={closePopup}
            >
              ×
            </button>

            <div className="success-icon">
              🎉
            </div>

            <span className="success-label">
              REGISTRATION COMPLETE
            </span>

            <h2>
              Registration Successful!
            </h2>

            <p>
              Thank you for registering with
              <strong> Dropshy National Dropshipping.</strong>
            </p>

            <p className="success-subtext">
              Your seller registration has been successfully submitted.
            </p>

            <div className="enrollment-box">

              <span>
                SELLER ENROLLMENT NUMBER
              </span>

              <strong>
                {enrollmentNumber}
              </strong>

            </div>

            <button
              className="done-button"
              onClick={closePopup}
            >
              Done
            </button>

          </div>

        </div>
      )}

    </section>
  );
};

export default Registration;