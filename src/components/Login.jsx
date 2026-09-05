import React, { useEffect, useState } from "react";
import "./Login.css";

import login1 from "../assets/images/login1.svg";
import login2 from "../assets/images/login2.svg";
import login3 from "../assets/images/login3.svg";
import login4 from "../assets/images/login4.svg";

const loginImages = [login1, login2, login3, login4];

const Login = () => {
  const [currentImage, setCurrentImage] = useState(0);
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);

  /* ==========================================
     AUTO IMAGE SLIDER
  ========================================== */
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => {
        return prev === loginImages.length - 1 ? 0 : prev + 1;
      });
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  /* ==========================================
     LOGIN
  ========================================== */
  const handleLogin = (e) => {
    e.preventDefault();

    console.log("Login submitted");
  };

  return (
    <div className="dropshy-login-page">

      {/* =====================================================
          LEFT IMAGE SECTION
      ===================================================== */}
      <section className="dropshy-login-left">

        {/* LOGO */}
        <div className="dropshy-login-logo">
          <div className="dropshy-logo-icon">
            D
          </div>

          <div className="dropshy-logo-name">
            DROPSHY
          </div>
        </div>


        {/* IMAGE SLIDER */}
        <div className="dropshy-login-slider">

          <div className="dropshy-login-images">

            {loginImages.map((image, index) => (
              <img
                key={index}
                src={image}
                alt={`Dropshy login ${index + 1}`}
                className={`dropshy-login-slide ${
                  currentImage === index ? "active" : ""
                }`}
              />
            ))}

          </div>


          {/* DOTS */}
          <div className="dropshy-slider-dots">

            {loginImages.map((_, index) => (
              <button
                key={index}
                type="button"
                className={currentImage === index ? "active" : ""}
                onClick={() => setCurrentImage(index)}
                aria-label={`Slide ${index + 1}`}
              />
            ))}

          </div>

        </div>

      </section>


      {/* =====================================================
          RIGHT LOGIN SECTION
      ===================================================== */}
      <section className="dropshy-login-right">

        {/* TOP RIGHT TRACK ORDER */}
        <button
          type="button"
          className="top-track-order"
          onClick={() => {
            window.location.href = "/track-order";
          }}
        >
          <svg
            width="17"
            height="17"
            viewBox="0 0 24 24"
            fill="none"
          >
            <path
              d="M3 12L21 3L15 21L11 14L3 12Z"
              stroke="currentColor"
              strokeWidth="1.8"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M11 14L16 9"
              stroke="currentColor"
              strokeWidth="1.8"
              strokeLinecap="round"
            />
          </svg>

          <span>Track Order</span>
        </button>


        {/* FORM CONTAINER */}
        <div className="dropshy-login-form-container">

          {/* HEADING */}
          <div className="dropshy-login-heading">

            <h1>
              Login to Dropshy
            </h1>

            <p>
              OR Simply want to track your order?{" "}
              <button
                type="button"
                onClick={() => {
                  window.location.href = "/track-order";
                }}
              >
                Track Order
              </button>
            </p>

          </div>


          {/* LOGIN FORM */}
          <form
            className="dropshy-login-form"
            onSubmit={handleLogin}
          >

            {/* EMAIL */}
            <div className="dropshy-field">

              <label htmlFor="email">
                Email or phone
              </label>

              <div className="dropshy-input-box">

                <div className="dropshy-input-icon">

                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                  >
                    <path
                      d="M20 21V19C20 16.8 18.2 15 16 15H8C5.8 15 4 16.8 4 19V21"
                      stroke="currentColor"
                      strokeWidth="1.7"
                      strokeLinecap="round"
                    />

                    <circle
                      cx="12"
                      cy="7"
                      r="4"
                      stroke="currentColor"
                      strokeWidth="1.7"
                    />
                  </svg>

                </div>

                <input
                  id="email"
                  type="text"
                  placeholder="Enter your email or phone"
                  autoComplete="username"
                  required
                />

              </div>

            </div>


            {/* PASSWORD */}
            <div className="dropshy-field password-field">

              <label htmlFor="password">
                Password
              </label>

              <div className="dropshy-input-box password-input-box">

                <div className="dropshy-input-icon">

                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                  >
                    <rect
                      x="5"
                      y="10"
                      width="14"
                      height="11"
                      rx="2"
                      stroke="currentColor"
                      strokeWidth="1.7"
                    />

                    <path
                      d="M8 10V7C8 4.8 9.8 3 12 3C14.2 3 16 4.8 16 7V10"
                      stroke="currentColor"
                      strokeWidth="1.7"
                      strokeLinecap="round"
                    />

                    <circle
                      cx="12"
                      cy="15.5"
                      r="1"
                      fill="currentColor"
                    />
                  </svg>

                </div>


                <input
                  id="password"
                  type={showPassword ? "text" : "password"}
                  placeholder="Enter your password"
                  autoComplete="current-password"
                  required
                />


                {/* EYE */}
                <button
                  type="button"
                  className="password-eye"
                  onClick={() =>
                    setShowPassword((prev) => !prev)
                  }
                  aria-label={
                    showPassword
                      ? "Hide password"
                      : "Show password"
                  }
                >

                  {showPassword ? (
                    <svg
                      width="19"
                      height="19"
                      viewBox="0 0 24 24"
                      fill="none"
                    >
                      <path
                        d="M3 3L21 21"
                        stroke="currentColor"
                        strokeWidth="1.7"
                        strokeLinecap="round"
                      />

                      <path
                        d="M10.6 10.6C10.2 11 10 11.5 10 12C10 13.1 10.9 14 12 14C12.5 14 13 13.8 13.4 13.4"
                        stroke="currentColor"
                        strokeWidth="1.7"
                        strokeLinecap="round"
                      />

                      <path
                        d="M9.9 4.3C10.6 4.1 11.3 4 12 4C17.2 4 20.5 8.4 21 9.2C21.2 9.5 21.2 9.7 21 10C20.7 10.5 19.8 11.7 18.4 12.9"
                        stroke="currentColor"
                        strokeWidth="1.7"
                        strokeLinecap="round"
                      />

                      <path
                        d="M6.1 6.1C4.3 7.4 3.2 9 3 9.3C2.8 9.6 2.8 9.8 3 10.1C3.5 10.9 6.8 15.3 12 15.3C12.7 15.3 13.4 15.2 14.1 15"
                        stroke="currentColor"
                        strokeWidth="1.7"
                        strokeLinecap="round"
                      />
                    </svg>
                  ) : (
                    <svg
                      width="19"
                      height="19"
                      viewBox="0 0 24 24"
                      fill="none"
                    >
                      <path
                        d="M2.5 12C4.2 7.8 7.5 5 12 5C16.5 5 19.8 7.8 21.5 12C19.8 16.2 16.5 19 12 19C7.5 19 4.2 16.2 2.5 12Z"
                        stroke="currentColor"
                        strokeWidth="1.7"
                      />

                      <circle
                        cx="12"
                        cy="12"
                        r="3"
                        stroke="currentColor"
                        strokeWidth="1.7"
                      />
                    </svg>
                  )}

                </button>

              </div>

            </div>


            {/* REMEMBER + FORGOT */}
            <div className="dropshy-login-options">

              <label className="dropshy-remember">

                <input
                  type="checkbox"
                  checked={rememberMe}
                  onChange={(e) =>
                    setRememberMe(e.target.checked)
                  }
                />

                <span className="dropshy-checkmark">
                  {rememberMe && "✓"}
                </span>

                <span>
                  Remember me
                </span>

              </label>


              <button
                type="button"
                className="dropshy-forgot"
                onClick={() => {
                  console.log("Forgot password");
                }}
              >
                Forgot Password?
              </button>

            </div>


            {/* LOGIN BUTTON */}
            <button
              type="submit"
              className="dropshy-login-button"
            >
              Log In
            </button>


            {/* GOOGLE */}
            <button
              type="button"
              className="dropshy-google-button"
              onClick={() => {
                console.log("Google login");
              }}
            >

              <span className="google-g">
                G
              </span>

              <span>
                Login with Google
              </span>

            </button>


            {/* CREATE ACCOUNT */}
            <div className="dropshy-create-account">

              <span>
                New to Dropshy?
              </span>

              <a href="/register">
                Create an account
              </a>

            </div>


            {/* TRACK ORDER */}
            <button
              type="button"
              className="dropshy-bottom-track"
              onClick={() => {
                window.location.href = "/track-order";
              }}
            >

              <span>
                Track Order
              </span>

              <svg
                width="17"
                height="17"
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  d="M14 3H21V10"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />

                <path
                  d="M10 14L21 3"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                />

                <path
                  d="M21 14V19C21 20.1 20.1 21 19 21H5C3.9 21 3 20.1 3 19V5C3 3.9 3.9 3 5 3H10"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                />
              </svg>

            </button>


            {/* FOOTER LINKS */}
            <div className="dropshy-login-footer">

              <a href="/privacy-policy">
                Privacy policy
              </a>

              <a href="/refund-cancellation">
                Refund &amp; Cancellation
              </a>

              <a href="/terms">
                Terms and Conditions
              </a>

            </div>

          </form>

        </div>

      </section>

    </div>
  );
};

export default Login;