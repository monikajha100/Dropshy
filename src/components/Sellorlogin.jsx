
import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";

const API_URL = "http://localhost:5000/api";

const SellerLogin = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    identifier: "",
    password: "",
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  // =========================================================
  // HANDLE INPUT
  // =========================================================
  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    setError("");
  };

  // =========================================================
  // VALIDATION
  // =========================================================
  const validate = () => {
    const identifier = formData.identifier.trim();
    const password = formData.password;

    if (!identifier) {
      return "Please enter enrollment number, mobile number or email.";
    }

    if (!password) {
      return "Please enter your password.";
    }

    return "";
  };

  // =========================================================
  // LOGIN
  // =========================================================
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

      console.log("SELLER LOGIN REQUEST:", formData);

      const response = await fetch(`${API_URL}/sellers/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          identifier: formData.identifier.trim(),
          password: formData.password,
        }),
      });

      const data = await response.json().catch(() => ({}));

      console.log("SELLER LOGIN RESPONSE:", data);

      if (!response.ok || data.status === false) {
        throw new Error(
          data.message ||
            "Login failed. Please check your login details."
        );
      }

      // =====================================================
      // LOGIN SUCCESS
      // =====================================================
      if (data.status === true || response.ok) {
        /*
          Backend should return:

          {
            status: true,
            message: "Login successful",
            data: {
              id,
              enrollmentNumber,
              fullName,
              mobile,
              altMobile,
              email,
              whatsapp,
              address,
              city,
              state,
              pincode,
              created_at,
              updated_at
            },
            token: "..."
          }
        */

        // ---------------------------------------------------
        // SAVE COMPLETE SELLER DATA
        // ---------------------------------------------------
        const sellerData = data.data || data.seller || {};

        localStorage.setItem(
          "DROPSHY_SELLER",
          JSON.stringify(sellerData)
        );

        // ---------------------------------------------------
        // SAVE TOKEN IF BACKEND SENDS TOKEN
        // ---------------------------------------------------
        if (data.token) {
          localStorage.setItem(
            "dropshy_seller_token",
            data.token
          );
        }

        // ---------------------------------------------------
        // ALSO SAVE IMPORTANT LOGIN DETAILS
        // ---------------------------------------------------
        if (sellerData.id) {
          localStorage.setItem(
            "SELLER_ID",
            String(sellerData.id)
          );
        }

        if (sellerData.enrollmentNumber) {
          localStorage.setItem(
            "SELLER_ENROLLMENT",
            String(sellerData.enrollmentNumber)
          );
        }

        if (sellerData.fullName) {
          localStorage.setItem(
            "SELLER_NAME",
            sellerData.fullName
          );
        }

        if (sellerData.email) {
          localStorage.setItem(
            "SELLER_EMAIL",
            sellerData.email
          );
        }

        if (sellerData.mobile) {
          localStorage.setItem(
            "SELLER_MOBILE",
            sellerData.mobile
          );
        }

        console.log(
          "SELLER DATA SAVED:",
          sellerData
        );

        // ---------------------------------------------------
        // GO TO DASHBOARD
        // ---------------------------------------------------
        navigate("/dashboard", {
          replace: true,
        });

        return;
      }

      throw new Error(
        data.message || "Invalid seller login."
      );
    } catch (err) {
      console.error("SELLER LOGIN ERROR:", err);

      setError(
        err.message ||
          "Something went wrong. Please try again."
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="dropshy-login-page">

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@500;700&family=IBM+Plex+Mono:wght@400;600&family=Inter:wght@400;500;600;700&display=swap');

        .dropshy-login-page {
          --yellow: #ffcc00;
          --yellow-deep: #e0b400;
          --cream: #fffcf2;
          --paper-line: #ece4c8;
          --sky: #38bdf8;
          --sky-deep: #0ea5e9;
          --ink: #1a1a16;
          --muted: #7a7566;
          --err: #c1443c;

          min-height: 100vh;
          width: 100%;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 24px;
          box-sizing: border-box;

          font-family: 'Inter',
            -apple-system,
            BlinkMacSystemFont,
            sans-serif;

          color: var(--ink);

          background:
            repeating-linear-gradient(
              135deg,
              rgba(0,0,0,0.035) 0px,
              rgba(0,0,0,0.035) 10px,
              transparent 10px,
              transparent 34px
            ),
            var(--yellow);
        }

        .dropshy-login-card {
          width: 100%;
          max-width: 380px;
          background: var(--cream);
          border-radius: 10px;
          padding: 40px 32px 32px;
          box-shadow:
            0 12px 32px rgba(26, 26, 22, 0.14);
        }

        .dropshy-login-tag {
          font-family: 'IBM Plex Mono', monospace;
          font-size: 11px;
          letter-spacing: 0.03em;
          color: var(--muted);
          margin-bottom: 10px;
        }

        .dropshy-login-card h1 {
          font-family: 'Space Grotesk', sans-serif;
          margin: 0 0 6px;
          font-size: 26px;
          font-weight: 700;
        }

        .dropshy-login-card p.sub {
          margin: 0 0 26px;
          color: var(--muted);
          font-size: 14px;
          line-height: 1.5;
        }

        .dropshy-banner {
          padding: 12px 14px;
          border-radius: 4px;
          margin-bottom: 18px;
          font-size: 14px;
          border-left: 3px solid var(--err);
          background: rgba(193, 68, 60, 0.08);
          color: var(--err);
        }

        .dropshy-field {
          margin-bottom: 18px;
        }

        .dropshy-field label {
          display: block;
          font-size: 13.5px;
          font-weight: 500;
          margin-bottom: 6px;
        }

        .dropshy-field input {
          width: 100%;
          box-sizing: border-box;
          padding: 9px 2px;
          border: none;
          border-bottom: 1.5px solid var(--paper-line);
          background: transparent;
          font-size: 15px;
          font-family: 'Inter', sans-serif;
          color: var(--ink);
          outline: none;
          transition: border-color 0.15s ease;
        }

        .dropshy-field input::placeholder {
          color: #bcb298;
        }

        .dropshy-field input:focus {
          border-bottom-color: var(--sky-deep);
        }

        .dropshy-forgot {
          display: block;
          text-align: right;
          font-size: 13px;
          color: var(--muted);
          text-decoration: none;
          margin: -8px 0 20px;
        }

        .dropshy-forgot:hover {
          color: var(--sky-deep);
        }

        .dropshy-submit {
          width: 100%;
          border: none;
          border-radius: 6px;
          padding: 13px;
          background: var(--ink);
          color: var(--cream);
          font-size: 15px;
          font-weight: 600;
          font-family: 'Inter', sans-serif;
          cursor: pointer;
          transition:
            box-shadow 0.15s ease,
            transform 0.15s ease;
        }

        .dropshy-submit:hover:not(:disabled) {
          box-shadow:
            0 0 0 3px rgba(56, 189, 248, 0.35);
        }

        .dropshy-submit:disabled {
          background: #c9c3ae;
          color: #8c8271;
          cursor: not-allowed;
        }

        .dropshy-submit:not(:disabled):active {
          transform: scale(0.98);
        }

        .dropshy-signup {
          text-align: center;
          margin-top: 22px;
          font-size: 14px;
          color: var(--muted);
        }

        .dropshy-signup a {
          color: var(--ink);
          font-weight: 600;
          text-decoration: none;
          border-bottom: 1px solid var(--yellow-deep);
        }

        @media (max-width: 500px) {
          .dropshy-login-page {
            padding: 15px;
          }

          .dropshy-login-card {
            padding: 30px 22px 25px;
          }
        }
      `}</style>

      <div className="dropshy-login-card">

        <div className="dropshy-login-tag">
          Dropshy · Seller login
        </div>

        <h1>Log in</h1>

        <p className="sub">
          Use your enrollment number, mobile number
          or Gmail ID to login.
        </p>

        {error && (
          <div className="dropshy-banner">
            {error}
          </div>
        )}

        <form onSubmit={handleSubmit}>

          {/* =================================================
              LOGIN ID
          ================================================= */}

          <div className="dropshy-field">

            <label htmlFor="identifier">
              Enrollment number, mobile or Gmail ID
            </label>

            <input
              id="identifier"
              type="text"
              name="identifier"
              value={formData.identifier}
              onChange={handleChange}
              placeholder="Enrollment / Mobile / Email"
              autoComplete="username"
            />

          </div>

          {/* =================================================
              PASSWORD
          ================================================= */}

          <div className="dropshy-field">

            <label htmlFor="password">
              Password
            </label>

            <input
              id="password"
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="Enter your password"
              autoComplete="current-password"
            />

          </div>

          <Link
            to="/forgot-password"
            className="dropshy-forgot"
          >
            Forgot password?
          </Link>

          <button
            type="submit"
            className="dropshy-submit"
            disabled={loading}
          >
            {loading ? "Logging in..." : "Log in"}
          </button>

        </form>

        <div className="dropshy-signup">
          New seller?{" "}
          <Link to="/register">
            Register here
          </Link>
        </div>

      </div>
    </div>
  );
};

export default SellerLogin;

