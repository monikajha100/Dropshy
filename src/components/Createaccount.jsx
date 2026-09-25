import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";

const API_URL = "http://localhost:5000/api";

const Register = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    password: "",
    confirmPassword: "",
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    setError("");
    setSuccess("");
  };

  const handleRegister = async (e) => {
    e.preventDefault();

    const { name, email, phone, password, confirmPassword } = formData;

    // Validation
    if (!name.trim()) {
      setError("Please enter your name.");
      return;
    }

    if (!email.trim()) {
      setError("Please enter your email.");
      return;
    }

    if (!phone.trim()) {
      setError("Please enter your phone number.");
      return;
    }

    if (!password) {
      setError("Please enter a password.");
      return;
    }

    if (password.length < 6) {
      setError("Password must be at least 6 characters.");
      return;
    }

    if (password !== confirmPassword) {
      setError("Passwords do not match.");
      return;
    }

    try {
      setLoading(true);
      setError("");
      setSuccess("");

      const response = await fetch(`${API_URL}/users/register`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: name.trim(),
          email: email.trim(),
          phone: phone.trim(),
          password,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || "Registration failed.");
      }

      setSuccess("Account created. Redirecting to login...");

      setFormData({
        name: "",
        email: "",
        phone: "",
        password: "",
        confirmPassword: "",
      });

      setTimeout(() => {
        navigate("/login");
      }, 1500);
    } catch (error) {
      console.error("REGISTER ERROR:", error);
      setError(error.message || "Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const fields = [
    { name: "name", label: "Full name", type: "text", placeholder: "Alex Rivera", autoComplete: "name", code: "NAME" },
    { name: "email", label: "Email", type: "email", placeholder: "alex@example.com", autoComplete: "email", code: "MAIL" },
    { name: "phone", label: "Phone number", type: "tel", placeholder: "+1 (555) 000-0000", autoComplete: "tel", code: "TEL" },
    { name: "password", label: "Password", type: "password", placeholder: "At least 6 characters", autoComplete: "new-password", code: "PASS" },
    { name: "confirmPassword", label: "Confirm password", type: "password", placeholder: "Type it again", autoComplete: "new-password", code: "CONF" },
  ];

  return (
    <div className="dropshy-page">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Space+Mono:wght@400;700&family=Inter:wght@400;500;600;700&display=swap');

        .dropshy-page {
          --ink: #22271f;
          --kraft: #c7a567;
          --kraft-deep: #93743f;
          --kraft-line: rgba(34, 39, 31, 0.35);
          --stamp: #b23a2e;
          --paper: #fbf8f2;
          --paper-line: #e4dbc4;
          --text: #2b2b26;
          --text-soft: #6b6455;
          --ok: #3f7a54;

          min-height: 100vh;
          width: 100%;
          display: flex;
          font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
          color: var(--text);
        }

        .dropshy-kraft {
          position: relative;
          flex: 0 0 42%;
          background:
            repeating-linear-gradient(135deg, rgba(255,255,255,0.05) 0px, rgba(255,255,255,0.05) 2px, transparent 2px, transparent 26px),
            radial-gradient(ellipse at 30% 20%, rgba(255,255,255,0.18), transparent 60%),
            var(--kraft);
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          padding: 60px 40px;
          overflow: hidden;
        }

        .dropshy-kraft::after {
          content: "";
          position: absolute;
          top: 0;
          right: -1px;
          bottom: 0;
          width: 22px;
          background-image: radial-gradient(circle, var(--paper) 3px, transparent 3.5px);
          background-size: 22px 22px;
          background-position: center;
          box-shadow: 12px 0 0 -6px var(--paper-line);
        }

        .dropshy-stamp {
          width: 200px;
          height: 200px;
          border-radius: 50%;
          border: 3px dashed rgba(34, 39, 31, 0.55);
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          transform: rotate(-7deg);
          background: rgba(251, 248, 242, 0.15);
          animation: stampIn 0.6s cubic-bezier(0.22, 1.4, 0.36, 1) both;
        }

        @keyframes stampIn {
          0% { transform: rotate(-7deg) scale(1.6); opacity: 0; }
          60% { opacity: 1; }
          100% { transform: rotate(-7deg) scale(1); opacity: 1; }
        }

        .dropshy-stamp span {
          font-family: 'Space Mono', monospace;
          font-weight: 700;
          color: var(--ink);
          letter-spacing: 0.04em;
        }

        .dropshy-stamp .brand {
          font-size: 26px;
        }

        .dropshy-stamp .sub {
          font-size: 11px;
          margin-top: 6px;
          color: var(--stamp);
        }

        .dropshy-tagline {
          margin-top: 40px;
          max-width: 320px;
          text-align: center;
          font-size: 16px;
          line-height: 1.6;
          color: rgba(34, 39, 31, 0.8);
        }

        .dropshy-tagline strong {
          display: block;
          font-family: 'Space Mono', monospace;
          font-size: 13px;
          color: var(--ink);
          margin-bottom: 10px;
        }

        .dropshy-paper {
          flex: 1;
          background: var(--paper);
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 40px 24px;
        }

        .dropshy-card {
          width: 100%;
          max-width: 400px;
        }

        .dropshy-card h1 {
          margin: 0 0 6px;
          font-size: 28px;
          font-weight: 700;
          letter-spacing: -0.01em;
        }

        .dropshy-card p.lede {
          margin: 0 0 32px;
          color: var(--text-soft);
          font-size: 15px;
        }

        .dropshy-banner {
          padding: 12px 14px;
          border-radius: 4px;
          margin-bottom: 20px;
          font-size: 14px;
          border-left: 3px solid transparent;
        }

        .dropshy-banner.error {
          background: rgba(178, 58, 46, 0.08);
          border-color: var(--stamp);
          color: var(--stamp);
        }

        .dropshy-banner.success {
          background: rgba(63, 122, 84, 0.1);
          border-color: var(--ok);
          color: var(--ok);
        }

        .dropshy-field {
          margin-bottom: 20px;
        }

        .dropshy-field-top {
          display: flex;
          justify-content: space-between;
          align-items: baseline;
          margin-bottom: 6px;
        }

        .dropshy-field label {
          font-size: 14px;
          font-weight: 500;
          color: var(--text);
        }

        .dropshy-field .code {
          font-family: 'Space Mono', monospace;
          font-size: 10px;
          color: var(--text-soft);
          letter-spacing: 0.06em;
        }

        .dropshy-field input {
          width: 100%;
          box-sizing: border-box;
          padding: 10px 2px;
          border: none;
          border-bottom: 1.5px solid var(--paper-line);
          background: transparent;
          font-size: 15px;
          font-family: 'Inter', sans-serif;
          color: var(--text);
          outline: none;
          transition: border-color 0.15s ease;
        }

        .dropshy-field input::placeholder {
          color: #b9b0a0;
        }

        .dropshy-field input:focus {
          border-bottom-color: var(--ink);
        }

        .dropshy-submit {
          width: 100%;
          border: none;
          border-radius: 4px;
          padding: 14px;
          margin-top: 8px;
          background: var(--ink);
          color: var(--paper);
          font-size: 15px;
          font-weight: 600;
          font-family: 'Inter', sans-serif;
          cursor: pointer;
          transition: transform 0.15s ease, background 0.15s ease;
        }

        .dropshy-submit:disabled {
          background: #a39c8c;
          cursor: not-allowed;
        }

        .dropshy-submit:not(:disabled):active {
          transform: scale(0.98);
        }

        .dropshy-login {
          text-align: center;
          margin-top: 24px;
          font-size: 14px;
          color: var(--text-soft);
        }

        .dropshy-login a {
          color: var(--ink);
          font-weight: 600;
          text-decoration: none;
          border-bottom: 1px solid var(--kraft-deep);
        }

        @media (max-width: 880px) {
          .dropshy-page {
            flex-direction: column;
          }

          .dropshy-kraft {
            flex: 0 0 auto;
            flex-direction: row;
            gap: 20px;
            padding: 28px 24px;
          }

          .dropshy-kraft::after {
            display: none;
          }

          .dropshy-stamp {
            width: 96px;
            height: 96px;
            flex-shrink: 0;
          }

          .dropshy-stamp .brand {
            font-size: 14px;
          }

          .dropshy-stamp .sub {
            font-size: 8px;
          }

          .dropshy-tagline {
            margin-top: 0;
            text-align: left;
            font-size: 14px;
          }

          .dropshy-paper {
            padding: 32px 20px 48px;
          }
        }
      `}</style>

      <div className="dropshy-kraft">
        <div className="dropshy-stamp">
          <span className="brand">DROPSHY</span>
          <span className="sub">EST. ACCOUNT</span>
        </div>
        <div className="dropshy-tagline">
          <strong>Every order starts with a label.</strong>
          Set up your account and start listing products in minutes.
        </div>
      </div>

      <div className="dropshy-paper">
        <div className="dropshy-card">
          <h1>Create your account</h1>
          <p className="lede">Fill in your details to get started.</p>

          {error && <div className="dropshy-banner error">{error}</div>}
          {success && <div className="dropshy-banner success">{success}</div>}

          <form onSubmit={handleRegister}>
            {fields.map((field) => (
              <div className="dropshy-field" key={field.name}>
                <div className="dropshy-field-top">
                  <label htmlFor={field.name}>{field.label}</label>
                  <span className="code">{field.code}</span>
                </div>
                <input
                  id={field.name}
                  type={field.type}
                  name={field.name}
                  value={formData[field.name]}
                  onChange={handleChange}
                  placeholder={field.placeholder}
                  autoComplete={field.autoComplete}
                />
              </div>
            ))}

            <button type="submit" className="dropshy-submit" disabled={loading}>
              {loading ? "Creating account..." : "Create account"}
            </button>
          </form>

          <div className="dropshy-login">
            Already have an account? <Link to="/login">Log in</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;