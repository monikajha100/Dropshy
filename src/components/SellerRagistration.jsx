import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";

const API_URL = "http://localhost:5000/api";

const initialFormData = {
  fullName: "",
  mobile: "",
  altMobile: "",
  email: "",
  whatsapp: "",
  address: "",
  city: "",
  state: "",
  pincode: "",
  password: "",
  confirmPassword: "",
};

const SellerRegistration = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState(initialFormData);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [enrollmentNumber, setEnrollmentNumber] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    setError("");
  };

  const validate = () => {
    if (!formData.fullName.trim()) {
      return "Please enter your full name.";
    }

    if (!formData.mobile.trim()) {
      return "Please enter your mobile number.";
    }

    if (!/^\d{10}$/.test(formData.mobile.trim())) {
      return "Enter a valid 10-digit mobile number.";
    }

    if (!formData.email.trim()) {
      return "Please enter your Gmail ID.";
    }

    if (!/^\S+@\S+\.\S+$/.test(formData.email.trim())) {
      return "Enter a valid email address.";
    }

    if (!formData.address.trim()) {
      return "Please enter your full address.";
    }

    if (!formData.city.trim()) {
      return "Please enter your city.";
    }

    if (!formData.state.trim()) {
      return "Please enter your state.";
    }

    if (
      formData.pincode.trim() &&
      !/^\d{6}$/.test(formData.pincode.trim())
    ) {
      return "PIN code should be 6 digits.";
    }

    if (!formData.password) {
      return "Please enter your password.";
    }

    if (formData.password.length < 6) {
      return "Password must be at least 6 characters.";
    }

    if (!formData.confirmPassword) {
      return "Please confirm your password.";
    }

    if (formData.password !== formData.confirmPassword) {
      return "Password and confirm password do not match.";
    }

    return "";
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const validationError = validate();

    if (validationError) {
      setError(validationError);
      return;
    }

    try {
      setLoading(true);
      setError("");

      // confirmPassword backend ko nahi bhejna
      const registrationData = {
        fullName: formData.fullName.trim(),
        mobile: formData.mobile.trim(),
        altMobile: formData.altMobile.trim(),
        email: formData.email.trim().toLowerCase(),
        whatsapp: formData.whatsapp.trim(),
        address: formData.address.trim(),
        city: formData.city.trim(),
        state: formData.state.trim(),
        pincode: formData.pincode.trim(),
        password: formData.password,
      };

      console.log("SELLER REGISTER REQUEST:", registrationData);

      const response = await fetch(`${API_URL}/sellers/register`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(registrationData),
      });

      const data = await response.json().catch(() => ({}));

      console.log("SELLER REGISTER RESPONSE:", data);

      if (!response.ok || data.status === false || data.success === false) {
        throw new Error(
          data.message || "Registration failed. Please try again."
        );
      }

      // Enrollment number backend se aayega
      setEnrollmentNumber(
        data.enrollmentNumber ||
        data.data?.enrollmentNumber ||
        data.seller?.enrollmentNumber
      );

      // Form clear
      setFormData(initialFormData);

    } catch (err) {
      console.error("SELLER REGISTER ERROR:", err);

      setError(
        err.message || "Something went wrong. Please try again."
      );
    } finally {
      setLoading(false);
    }
  };

  const closeModal = () => {
    setEnrollmentNumber(null);
  };

  const goToPayment = () => {
    setEnrollmentNumber(null);
    navigate("/payment");
  };

  return (
    <div className="dropshy-page">

      <style>{`
        .dropshy-page {
          min-height: 100vh;
          width: 100%;
          display: flex;
          font-family: Arial, sans-serif;
          color: #1a1a16;
        }

        .dropshy-hero {
          width: 44%;
          background: #ffcc00;
          padding: 70px 55px;
          display: flex;
          flex-direction: column;
          justify-content: center;
          box-sizing: border-box;
        }

        .dropshy-hero-tag {
          font-size: 12px;
          margin-bottom: 20px;
          opacity: 0.7;
        }

        .dropshy-hero h1 {
          font-size: 42px;
          margin: 0 0 15px;
        }

        .dropshy-hero p {
          max-width: 380px;
          line-height: 1.6;
          font-size: 15px;
        }

        .dropshy-form-side {
          width: 56%;
          background: #fffcf2;
          display: flex;
          justify-content: center;
          align-items: center;
          padding: 50px 30px;
          box-sizing: border-box;
          overflow-y: auto;
        }

        .dropshy-card {
          width: 100%;
          max-width: 500px;
        }

        .dropshy-card h2 {
          font-size: 27px;
          margin-bottom: 5px;
        }

        .dropshy-card p.sub {
          color: #7a7566;
          margin-bottom: 28px;
        }

        .dropshy-banner {
          background: #ffe5e5;
          color: #c1443c;
          padding: 12px;
          margin-bottom: 20px;
          border-radius: 5px;
        }

        .dropshy-row {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 20px;
        }

        .dropshy-field {
          margin-bottom: 20px;
        }

        .dropshy-field-top {
          display: flex;
          justify-content: space-between;
          margin-bottom: 7px;
        }

        .dropshy-field label {
          font-size: 14px;
        }

        .req {
          color: red;
          margin-left: 3px;
        }

        .code {
          font-size: 10px;
          color: #999;
        }

        .dropshy-field input,
        .dropshy-field textarea {
          width: 100%;
          box-sizing: border-box;
          padding: 10px 3px;
          border: none;
          border-bottom: 1px solid #ddd5bc;
          background: transparent;
          outline: none;
          font-size: 15px;
        }

        .dropshy-field textarea {
          min-height: 60px;
          resize: vertical;
        }

        .dropshy-field input:focus,
        .dropshy-field textarea:focus {
          border-bottom-color: #0ea5e9;
        }

        .dropshy-password-note {
          font-size: 11px;
          color: #888;
          margin-top: 6px;
        }

        .dropshy-submit {
          width: 100%;
          padding: 14px;
          margin-top: 8px;
          border: none;
          border-radius: 6px;
          background: #1a1a16;
          color: white;
          font-size: 15px;
          font-weight: 600;
          cursor: pointer;
        }

        .dropshy-submit:disabled {
          opacity: 0.6;
          cursor: not-allowed;
        }

        .dropshy-login {
          text-align: center;
          margin-top: 22px;
          color: #7a7566;
          font-size: 14px;
        }

        .dropshy-login a {
          color: #1a1a16;
          font-weight: bold;
          text-decoration: none;
        }

        .dropshy-overlay {
          position: fixed;
          inset: 0;
          background: rgba(0,0,0,0.55);
          display: flex;
          justify-content: center;
          align-items: center;
          padding: 20px;
          z-index: 1000;
        }

        .dropshy-modal {
          width: 100%;
          max-width: 400px;
          background: #fffcf2;
          padding: 35px;
          border-radius: 10px;
          text-align: center;
          box-sizing: border-box;
        }

        .dropshy-modal h2 {
          margin-bottom: 10px;
        }

        .dropshy-modal p {
          color: #7a7566;
          line-height: 1.5;
        }

        .dropshy-seal {
          width: 160px;
          height: 160px;
          border-radius: 50%;
          border: 2px dashed #0ea5e9;
          margin: 25px auto;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
        }

        .dropshy-seal .label {
          font-size: 10px;
          color: #777;
          margin-bottom: 8px;
        }

        .dropshy-seal .value {
          font-size: 15px;
          font-weight: bold;
          word-break: break-word;
        }

        .dropshy-modal-actions {
          display: flex;
          flex-direction: column;
          gap: 10px;
        }

        .dropshy-btn-primary,
        .dropshy-btn-secondary {
          width: 100%;
          padding: 12px;
          border-radius: 6px;
          cursor: pointer;
          font-weight: 600;
        }

        .dropshy-btn-primary {
          border: none;
          background: #1a1a16;
          color: white;
        }

        .dropshy-btn-secondary {
          background: transparent;
          border: 1px solid #ddd5bc;
        }

        @media (max-width: 900px) {
          .dropshy-page {
            flex-direction: column;
          }

          .dropshy-hero,
          .dropshy-form-side {
            width: 100%;
          }

          .dropshy-hero {
            padding: 40px 25px;
          }

          .dropshy-hero h1 {
            font-size: 30px;
          }

          .dropshy-form-side {
            padding: 35px 20px;
          }

          .dropshy-row {
            grid-template-columns: 1fr;
            gap: 0;
          }
        }
      `}</style>

      <div className="dropshy-hero">
        <div className="dropshy-hero-tag">
          Dropshy · Seller enrollment
        </div>

        <h1>Become a seller</h1>

        <p>
          Register your business and get your seller enrollment
          number so you can start listing products right away.
        </p>
      </div>

      <div className="dropshy-form-side">
        <div className="dropshy-card">

          <h2>Seller registration</h2>

          <p className="sub">
            Fill in your details below.
          </p>

          {error && (
            <div className="dropshy-banner">
              {error}
            </div>
          )}

          <form onSubmit={handleSubmit}>

            {/* FULL NAME */}
            <div className="dropshy-field">
              <div className="dropshy-field-top">
                <label>
                  Full name<span className="req">*</span>
                </label>

                <span className="code">NAME</span>
              </div>

              <input
                type="text"
                name="fullName"
                value={formData.fullName}
                onChange={handleChange}
                placeholder="Full name"
              />
            </div>

            {/* MOBILE + ALT MOBILE */}
            <div className="dropshy-row">

              <div className="dropshy-field">
                <div className="dropshy-field-top">
                  <label>
                    Mobile number<span className="req">*</span>
                  </label>

                  <span className="code">MOB</span>
                </div>

                <input
                  type="tel"
                  name="mobile"
                  value={formData.mobile}
                  onChange={handleChange}
                  placeholder="10-digit number"
                  maxLength="10"
                />
              </div>

              <div className="dropshy-field">
                <div className="dropshy-field-top">
                  <label>
                    Alternative number
                  </label>

                  <span className="code">ALT</span>
                </div>

                <input
                  type="tel"
                  name="altMobile"
                  value={formData.altMobile}
                  onChange={handleChange}
                  placeholder="Optional"
                />
              </div>

            </div>

            {/* EMAIL */}
            <div className="dropshy-field">

              <div className="dropshy-field-top">
                <label>
                  Gmail ID<span className="req">*</span>
                </label>

                <span className="code">MAIL</span>
              </div>

              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="you@gmail.com"
              />

            </div>

            {/* WHATSAPP + PIN */}
            <div className="dropshy-row">

              <div className="dropshy-field">

                <div className="dropshy-field-top">
                  <label>
                    WhatsApp number
                  </label>

                  <span className="code">WA</span>
                </div>

                <input
                  type="tel"
                  name="whatsapp"
                  value={formData.whatsapp}
                  onChange={handleChange}
                  placeholder="Optional"
                />

              </div>

              <div className="dropshy-field">

                <div className="dropshy-field-top">
                  <label>
                    PIN code
                  </label>

                  <span className="code">PIN</span>
                </div>

                <input
                  type="text"
                  name="pincode"
                  value={formData.pincode}
                  onChange={handleChange}
                  placeholder="6-digit PIN code"
                  maxLength="6"
                />

              </div>

            </div>

            {/* ADDRESS */}
            <div className="dropshy-field">

              <div className="dropshy-field-top">
                <label>
                  Full address<span className="req">*</span>
                </label>

                <span className="code">ADDR</span>
              </div>

              <textarea
                name="address"
                value={formData.address}
                onChange={handleChange}
                placeholder="House / street / area"
              />

            </div>

            {/* CITY + STATE */}
            <div className="dropshy-row">

              <div className="dropshy-field">

                <div className="dropshy-field-top">
                  <label>
                    City<span className="req">*</span>
                  </label>

                  <span className="code">CITY</span>
                </div>

                <input
                  type="text"
                  name="city"
                  value={formData.city}
                  onChange={handleChange}
                  placeholder="City"
                />

              </div>

              <div className="dropshy-field">

                <div className="dropshy-field-top">
                  <label>
                    State<span className="req">*</span>
                  </label>

                  <span className="code">STATE</span>
                </div>

                <input
                  type="text"
                  name="state"
                  value={formData.state}
                  onChange={handleChange}
                  placeholder="State"
                />

              </div>

            </div>

            {/* PASSWORD */}
            <div className="dropshy-field">

              <div className="dropshy-field-top">
                <label>
                  Password<span className="req">*</span>
                </label>

                <span className="code">PASS</span>
              </div>

              <input
                type="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                placeholder="Create password"
                autoComplete="new-password"
              />

              <div className="dropshy-password-note">
                Password must be at least 6 characters.
              </div>

            </div>

            {/* CONFIRM PASSWORD */}
            <div className="dropshy-field">

              <div className="dropshy-field-top">
                <label>
                  Confirm password<span className="req">*</span>
                </label>

                <span className="code">CONFIRM</span>
              </div>

              <input
                type="password"
                name="confirmPassword"
                value={formData.confirmPassword}
                onChange={handleChange}
                placeholder="Re-enter password"
                autoComplete="new-password"
              />

            </div>

            <button
              type="submit"
              className="dropshy-submit"
              disabled={loading}
            >
              {loading ? "Submitting..." : "Submit registration"}
            </button>

          </form>

          <div className="dropshy-login">
            Already registered?{" "}
            <Link to="/seller-login">
              Log in
            </Link>
          </div>

        </div>
      </div>

      {/* SUCCESS MODAL */}
      {enrollmentNumber && (
        <div
          className="dropshy-overlay"
          onClick={closeModal}
        >

          <div
            className="dropshy-modal"
            onClick={(e) => e.stopPropagation()}
          >

            <h2>Registration successful</h2>

            <p>
              Thank you for registering with Dropshy National
              Dropshipping. Your seller registration has been submitted.
            </p>

            <div className="dropshy-seal">

              <div className="label">
                ENROLLMENT NO.
              </div>

              <div className="value">
                {enrollmentNumber}
              </div>

            </div>

            <div className="dropshy-modal-actions">

              <button
                className="dropshy-btn-primary"
                onClick={goToPayment}
              >
                Continue to payment
              </button>

              <button
                className="dropshy-btn-secondary"
                onClick={closeModal}
              >
                Close
              </button>

            </div>

          </div>

        </div>
      )}

    </div>
  );
};

export default SellerRegistration;