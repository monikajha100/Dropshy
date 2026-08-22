import React, { useEffect, useState } from "react";

import logo from "../assets/images/dropsy.jpeg";


const NAV_LINKS = [
  {
    label: "Home",
    href: "/",
  },
  {
    label: "About Us",
    href: "/about",
  },
  {
    label: "Our Services",
    items: [
      "National E-Commerce",
      "International E-Commerce",
      "Website E-Commerce",
    ],
  },
  {
    label: "Products",
    items: [
      "Home Decor & Handicrafts",
      "Fashion & Clothing",
      "Bags & Luggage",
      "Footwear",
      "Jewellery & Accessories",
      "Beauty & Personal Care",
      "Kitchen & Dining",
      "Furniture",
      "Electronics Accessories",
      "Toys & Baby Products",
      "Pet Supplies",
      "Gardening Products",
      "Stationery & More",
    ],
  },
  {
    label: "Review",
    href: "/review",
  },
  {
    label: "Contact Us",
    href: "/contact-us",
  },
];

function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [openMenu, setOpenMenu] = useState(null);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 15);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const toggleMenu = (label) => {
    setOpenMenu((prev) => (prev === label ? null : label));
  };

  return (
    <>
      {/* =========================================================
          NAVBAR
      ========================================================= */}

      <header
        className={`dropsy-navbar ${
          scrolled ? "dropsy-navbar-scrolled" : ""
        }`}
      >
        <div className="dropsy-navbar-inner">

          {/* =====================================================
              LOGO
          ===================================================== */}

          <a href="/" className="dropsy-logo">
            <img
              src={logo}
              alt="Dropsy"
              className="dropsy-logo-image"
            />
          </a>

          {/* =====================================================
              DESKTOP NAVIGATION
          ===================================================== */}

          <nav className="dropsy-nav-links">
            {NAV_LINKS.map((link) => (
              <div
                key={link.label}
                className="dropsy-nav-item"
                onMouseEnter={() => {
                  if (link.items) {
                    setOpenMenu(link.label);
                  }
                }}
                onMouseLeave={() => {
                  if (link.items) {
                    setOpenMenu(null);
                  }
                }}
              >
                {/* NAV LINK ROW */}

                <div className="dropsy-nav-link-row">

                 <a
  href={link.href || `/${link.label
    .toLowerCase()
    .replace(/\s+/g, "-")}`}
  className="dropsy-nav-link"
>
  {link.label}
</a>

                  {/* DROPDOWN ARROW */}

                  {link.items && (
                    <button
                      type="button"
                      className={`dropsy-arrow ${
                        openMenu === link.label
                          ? "dropsy-arrow-open"
                          : ""
                      }`}
                      onClick={() => toggleMenu(link.label)}
                      aria-label={`Toggle ${link.label} menu`}
                    >
                      <svg
                        width="10"
                        height="6"
                        viewBox="0 0 10 6"
                        fill="none"
                      >
                        <path
                          d="M1 1L5 5L9 1"
                          stroke="currentColor"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </button>
                  )}

                </div>

                {/* =================================================
                    DROPDOWN
                ================================================= */}

                {link.items && openMenu === link.label && (
                  <div className="dropsy-dropdown">

                    {link.items.map((item) => (
                      <a
                        href="#"
                        key={item}
                        className="dropsy-dropdown-item"
                        onClick={() => setOpenMenu(null)}
                      >
                        <span>{item}</span>

                        <svg
                          width="12"
                          height="12"
                          viewBox="0 0 12 12"
                          fill="none"
                        >
                          <path
                            d="M3 9L9 3M4 3H9V8"
                            stroke="currentColor"
                            strokeWidth="1.3"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </a>
                    ))}

                  </div>
                )}

              </div>
            ))}
          </nav>

          {/* =====================================================
              RIGHT SIDE
          ===================================================== */}

          <div className="dropsy-actions">

            <a
              href="/login"
              className="dropsy-login"
            >
              Log In
            </a>

            <a
              href="/get-started"
              className="dropsy-cta"
            >
              Get Started
            </a>

          </div>

          {/* =====================================================
              MOBILE MENU BUTTON
          ===================================================== */}

          <button
            type="button"
            className={`dropsy-menu-button ${
              mobileOpen
                ? "dropsy-menu-open"
                : ""
            }`}
            onClick={() =>
              setMobileOpen((prev) => !prev)
            }
            aria-label="Toggle menu"
            aria-expanded={mobileOpen}
          >
            <span />
            <span />
            <span />
          </button>

        </div>

        {/* =========================================================
            MOBILE MENU
        ========================================================= */}

        <div
          className={`dropsy-mobile-menu ${
            mobileOpen
              ? "dropsy-mobile-menu-open"
              : ""
          }`}
        >

          {NAV_LINKS.map((link) => (

            <div
              key={link.label}
              className="dropsy-mobile-item"
            >

              <button
                type="button"
                onClick={() => {

                  if (link.items) {
                    toggleMenu(link.label);
                  } else {
                    setMobileOpen(false);
                  }

                }}
              >

                <span>{link.label}</span>

                {link.items && (
                  <svg
                    width="10"
                    height="6"
                    viewBox="0 0 10 6"
                    fill="none"
                  >
                    <path
                      d="M1 1L5 5L9 1"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                )}

              </button>

              {/* MOBILE SUBMENU */}

              {link.items &&
                openMenu === link.label && (

                  <div className="dropsy-mobile-submenu">

                    {link.items.map((item) => (

                      <a
                        href="#"
                        key={item}
                        onClick={() =>
                          setMobileOpen(false)
                        }
                      >
                        {item}
                      </a>

                    ))}

                  </div>

                )}

            </div>

          ))}

          {/* MOBILE ACTIONS */}

          <div className="dropsy-mobile-actions">

            <a href="/login">
              Log In
            </a>

            <a
              href="/get-started"
              className="dropsy-cta"
            >
              Get Started
            </a>

          </div>

        </div>

      </header>


      {/* =========================================================
          NAVBAR CSS
      ========================================================= */}

      <style>{`

        /* ========================================================
           NAVBAR DEFAULT
        ======================================================== */

        .dropsy-navbar {

          position: fixed;

          top: 0;

          left: 0;

          right: 0;

          width: 100%;

          z-index: 9999;

          background: transparent;

          border-radius: 0;

          box-shadow: none;

          backdrop-filter: none;

          -webkit-backdrop-filter: none;

          transition:
            top 0.3s ease,
            left 0.3s ease,
            right 0.3s ease,
            width 0.3s ease,
            border-radius 0.3s ease,
            background 0.3s ease,
            box-shadow 0.3s ease,
            backdrop-filter 0.3s ease;

          overflow: visible;
        }


        /* ========================================================
           NAVBAR AFTER SCROLL
        ======================================================== */

    .dropsy-navbar-scrolled {

  top: 10px;

  left: 8%;

  right: 8%;

  width: 84%;

  border-radius: 24px;

  background:
    rgba(224, 242, 254, 0.96);

  box-shadow:
    0 8px 30px
    rgba(15, 23, 42, 0.10);

  backdrop-filter:
    blur(14px);

  -webkit-backdrop-filter:
    blur(14px);

  overflow: hidden;
}
        /* ========================================================
           INNER NAVBAR
        ======================================================== */

        .dropsy-navbar-inner {

          position: relative;

          width: 100%;

          max-width: 1440px;

          height: 76px;

          margin: 0 auto;

          padding: 0 30px;

          display: flex;

          align-items: center;

          justify-content: space-between;

          box-sizing: border-box;
        }


        /* ========================================================
           LOGO
           ONLY LOGO SIZE INCREASED
        ======================================================== */

        .dropsy-logo {

          display: flex;

          align-items: center;

          justify-content: flex-start;

          flex: 0 0 auto;

          width: 175px;

          height: 70px;

          text-decoration: none;

          position: relative;

          z-index: 2;
        }


        .dropsy-logo-image {

          width: 375px;

          height: 108px;

        object-fit: contain;
  object-position: right center;

           display: block;

  transform: translateX(45px);
        }


        .dropsy-logo:hover
        .dropsy-logo-image {

          transform: scale(1.03);
        }


        /* ========================================================
           CENTER NAVIGATION
           SAME AS BEFORE
        ======================================================== */

        .dropsy-nav-links {

          position: absolute;

          left: 50%;

          top: 50%;

          transform:
            translate(-50%, -50%);

          display: flex;

          align-items: center;

          justify-content: center;

          gap: 4px;

          white-space: nowrap;

          z-index: 3;
        }


        .dropsy-nav-item {

          position: relative;

          flex-shrink: 0;
        }


        .dropsy-nav-link-row {

          display: flex;

          align-items: center;

          border-radius: 10px;
        }


        .dropsy-nav-link {

          display: flex;

          align-items: center;

          padding: 10px 10px;

          color: #374151;

          font-size: 15px;

          line-height: 1.2;

          font-weight: 600;

          text-decoration: none;

          white-space: nowrap;

          transition:
            color 0.2s ease,
            background 0.2s ease;
        }


        .dropsy-nav-link:hover {

          color: #4F46E5;

          background:
            rgba(79, 70, 229, 0.06);

          border-radius: 8px;
        }


        /* ========================================================
           DROPDOWN ARROW
        ======================================================== */

        .dropsy-arrow {

          border: 0;

          background: transparent;

          color: #6B7280;

          padding: 5px 4px;

          display: flex;

          align-items: center;

          justify-content: center;

          cursor: pointer;

          transition:
            transform 0.25s ease,
            color 0.25s ease;
        }


        .dropsy-arrow-open {

          transform:
            rotate(180deg);

          color: #4F46E5;
        }


        /* ========================================================
           DROPDOWN
        ======================================================== */

        .dropsy-dropdown {

          position: absolute;

          top: calc(100% + 8px);

          left: 50%;

          transform:
            translateX(-50%);

          width: 250px;

          max-height: 500px;

          overflow-y: auto;

          padding: 10px;

          background: #ffffff;

          border:
            1px solid
            rgba(15, 23, 42, 0.08);

          border-radius: 16px;

          box-shadow:
            0 20px 50px
            rgba(15, 23, 42, 0.13);

          animation:
            dropsyDrop 0.18s ease;

          z-index: 10000;
        }


        @keyframes dropsyDrop {

          from {

            opacity: 0;

            transform:
              translateX(-50%)
              translateY(-6px);
          }

          to {

            opacity: 1;

            transform:
              translateX(-50%)
              translateY(0);
          }
        }


        /* ========================================================
           DROPDOWN ITEM
        ======================================================== */

        .dropsy-dropdown-item {

          display: flex;

          align-items: center;

          justify-content: space-between;

          gap: 10px;

          padding: 11px 12px;

          border-radius: 9px;

          color: #374151;

          font-size: 13px;

          font-weight: 600;

          text-decoration: none;

          transition:
            background 0.2s ease,
            color 0.2s ease;
        }


        .dropsy-dropdown-item:hover {

          background:
            rgba(79, 70, 229, 0.07);

          color: #4F46E5;
        }


        /* ========================================================
           RIGHT ACTIONS
        ======================================================== */

        .dropsy-actions {

          display: flex;

          align-items: center;

          gap: 14px;

          flex-shrink: 0;

          position: relative;

          z-index: 2;
        }


        .dropsy-login {

          color: #374151;

          font-size: 15px;

          font-weight: 600;

          text-decoration: none;

          padding: 10px 4px;

          white-space: nowrap;

          transition:
            color 0.2s ease;
        }


        .dropsy-login:hover {

          color: #4F46E5;
        }


        /* ========================================================
           GET STARTED
        ======================================================== */

        .dropsy-cta {

          display: inline-flex;

          align-items: center;

          justify-content: center;

          min-height: 42px;

          padding: 0 20px;

          border-radius: 10px;

          background:
            linear-gradient(
              135deg,
              #4F46E5,
              #7C3AED
            );

          color: #ffffff;

          font-size: 14px;

          font-weight: 700;

          text-decoration: none;

          white-space: nowrap;

          box-shadow:
            0 7px 18px
            rgba(79, 70, 229, 0.20);

          transition:
            transform 0.2s ease,
            box-shadow 0.2s ease;
        }


        .dropsy-cta:hover {

          transform:
            translateY(-1px);

          box-shadow:
            0 10px 24px
            rgba(79, 70, 229, 0.28);
        }


        /* ========================================================
           MOBILE BUTTON
        ======================================================== */

        .dropsy-menu-button {

          display: none;

          margin-left: auto;

          width: 44px;

          height: 44px;

          border: 0;

          background: transparent;

          cursor: pointer;

          flex-direction: column;

          align-items: center;

          justify-content: center;

          gap: 5px;
        }


        .dropsy-menu-button span {

          width: 23px;

          height: 2px;

          border-radius: 5px;

          background: #374151;

          transition:
            transform 0.25s ease,
            opacity 0.25s ease;
        }


        .dropsy-menu-open
        span:nth-child(1) {

          transform:
            translateY(7px)
            rotate(45deg);
        }


        .dropsy-menu-open
        span:nth-child(2) {

          opacity: 0;
        }


        .dropsy-menu-open
        span:nth-child(3) {

          transform:
            translateY(-7px)
            rotate(-45deg);
        }


        /* ========================================================
           MOBILE MENU
        ======================================================== */

        .dropsy-mobile-menu {

          display: none;
        }


        /* ========================================================
           TABLET
        ======================================================== */

        @media (max-width: 1150px) {

          .dropsy-navbar-inner {

            padding: 0 20px;
          }


          .dropsy-logo {

            width: 150px;

            height: 64px;
          }


          .dropsy-logo-image {

            width: 150px;

            height: 60px;
          }


          .dropsy-nav-links {

            gap: 0;
          }


          .dropsy-nav-link {

            font-size: 14px;

            padding:
              9px 6px;
          }


          .dropsy-actions {

            gap: 9px;
          }


          .dropsy-login {

            font-size: 14px;
          }


          .dropsy-cta {

            padding:
              0 15px;

            font-size: 13px;
          }
        }


        /* ========================================================
           MOBILE / TABLET
        ======================================================== */

        @media (max-width: 900px) {

          .dropsy-navbar,
          .dropsy-navbar-scrolled {

            left: 12px;

            right: 12px;

            width: auto;

            top: 10px;

            border-radius: 22px;
          }


          .dropsy-navbar {

            background: transparent;

            box-shadow: none;

            backdrop-filter: none;

            -webkit-backdrop-filter: none;
          }


          .dropsy-navbar-scrolled {

            background:
              rgba(255, 255, 255, 0.97);

            box-shadow:
              0 8px 25px
              rgba(15, 23, 42, 0.10);

            backdrop-filter:
              blur(14px);

            -webkit-backdrop-filter:
              blur(14px);
          }


          .dropsy-navbar-inner {

            height: 70px;

            padding: 0 20px;
          }


          .dropsy-nav-links,
          .dropsy-actions {

            display: none;
          }


          .dropsy-logo {

            width: 145px;

            height: 60px;
          }


          .dropsy-logo-image {

            width: 145px;

            height: 56px;
          }


          .dropsy-menu-button {

            display: flex;
          }


          /* MOBILE MENU */

          .dropsy-mobile-menu {

            display: block;

            max-height: 0;

            overflow: hidden;

            opacity: 0;

            background:
              rgba(255, 255, 255, 0.98);

            border-top:
              1px solid
              rgba(15, 23, 42, 0.08);

            transition:
              max-height 0.35s ease,
              opacity 0.25s ease;
          }


          .dropsy-mobile-menu-open {

            max-height: 750px;

            opacity: 1;
          }


          .dropsy-mobile-item {

            border-bottom:
              1px solid
              rgba(15, 23, 42, 0.06);
          }


          .dropsy-mobile-item > button {

            width: 100%;

            padding:
              16px 22px;

            border: 0;

            background: transparent;

            display: flex;

            align-items: center;

            justify-content: space-between;

            color: #374151;

            font-size: 15px;

            font-weight: 600;

            cursor: pointer;
          }


          .dropsy-mobile-submenu {

            padding:
              0 22px 12px;
          }


          .dropsy-mobile-submenu a {

            display: block;

            padding: 10px;

            color: #6B7280;

            font-size: 14px;

            text-decoration: none;
          }


          .dropsy-mobile-actions {

            display: flex;

            flex-direction: column;

            gap: 12px;

            padding:
              20px 22px 25px;
          }


          .dropsy-mobile-actions > a:first-child {

            color: #374151;

            text-decoration: none;

            font-weight: 600;

            padding: 10px 0;
          }


          .dropsy-mobile-actions .dropsy-cta {

            width: 100%;
          }
        }


        /* ========================================================
           MOBILE
        ======================================================== */

        @media (max-width: 600px) {

          .dropsy-navbar,
        .dropsy-navbar-scrolled {

  background: rgba(224, 242, 254, 0.78);

  box-shadow:
    0 8px 25px rgba(56, 189, 248, 0.14);

  backdrop-filter: blur(18px) saturate(140%);

  -webkit-backdrop-filter: blur(18px) saturate(140%);

  border:
    1px solid rgba(255, 255, 255, 0.55);
}


          .dropsy-navbar-inner {

            height: 64px;

            padding:
              0 16px;
          }


          .dropsy-logo {

            width: 125px;

            height: 52px;
          }


          .dropsy-logo-image {

            width: 125px;

            height: 48px;
          }


          .dropsy-menu-button {

            width: 40px;

            height: 40px;
          }
        }


        /* ========================================================
           VERY SMALL MOBILE
        ======================================================== */

        @media (max-width: 400px) {

          .dropsy-navbar-inner {

            padding:
              0 13px;
          }


          .dropsy-logo {

            width: 115px;

            height: 48px;
          }


          .dropsy-logo-image {

            width: 115px;

            height: 44px;
          }
        }

      `}</style>
    </>
  );
}

export default Navbar;