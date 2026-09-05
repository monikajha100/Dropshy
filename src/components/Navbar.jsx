import React, { useEffect, useState } from "react";
import logo from "../assets/images/dropsy.jpeg";

const NAV_LINKS = [
  {
    label: "Home",
    href: "/",
  },

  {
    label: "About",
    href: "/about",
  },

  {
    label: "Service",
    items: [
      {
        label: "National E-Commerce",
        href: "/services/national-ecommerce",
      },
      {
        label: "International E-Commerce",
        href: "/services/international-ecommerce",
      },
      {
  label: "Website E-Commerce",
  href: "/services/nationaleweb",
}
    ],
  },

  {
    label: "Products",
    items: [
      {
        label: "Home Decor & Handicrafts",
        href: "/products/home-decor",
      },
      // {
      //   label: "Fashion & Clothing",
      //   href: "/products/fashion-clothing",
      // },
      // {
      //   label: "Bags & Luggage",
      //   href: "/products/bags-luggage",
      // },
      // {
      //   label: "Footwear",
      //   href: "/products/footwear",
      // },
      // {
      //   label: "Jewellery & Accessories",
      //   href: "/products/jewellery-accessories",
      // },
      // {
      //   label: "Beauty & Personal Care",
      //   href: "/products/beauty-personal-care",
      // },
      // {
      //   label: "Kitchen & Dining",
      //   href: "/products/kitchen-dining",
      // },
      // {
      //   label: "Furniture",
      //   href: "/products/furniture",
      // },
      // {
      //   label: "Electronics Accessories",
      //   href: "/products/electronics-accessories",
      // },
      // {
      //   label: "Toys & Baby Products",
      //   href: "/products/toys-baby",
      // },
      // {
      //   label: "Pet Supplies",
      //   href: "/products/pet-supplies",
      // },
      // {
      //   label: "Gardening Products",
      //   href: "/products/gardening",
      // },
      // {
      //   label: "Stationery & More",
      //   href: "/products/stationery",
      // },
    ],
  },

// {
//   label: "Review",
//   href: "/review",
// },

  {
    label: "Contact Us",
    href: "/contactus",
  },
   {
    label: "Blog",
    href: "/blogs",
  },
];

function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [openMenu, setOpenMenu] = useState(null);
  const [mobileOpen, setMobileOpen] = useState(false);

  /* =========================================================
     SCROLL
  ========================================================= */

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  /* =========================================================
     DROPDOWN TOGGLE
  ========================================================= */

  const toggleMenu = (label) => {
    setOpenMenu((prev) => {
      if (prev === label) {
        return null;
      }

      return label;
    });
  };

  /* =========================================================
     CLOSE EVERYTHING
  ========================================================= */

  const closeMenus = () => {
    setOpenMenu(null);
    setMobileOpen(false);
  };

  /* =========================================================
     NAVIGATION
  ========================================================= */

  const navigateTo = (href) => {
    closeMenus();

    if (!href || href === "#") return;

    window.location.href = href;
  };

  /* =========================================================
     ITEM LABEL
  ========================================================= */

  const getItemLabel = (item) => {
    if (typeof item === "string") {
      return item;
    }

    return item.label;
  };

  /* =========================================================
     ITEM HREF
  ========================================================= */

  const getItemHref = (item) => {
    if (typeof item === "string") {
      return "#";
    }

    return item.href || "#";
  };

  return (
    <>
      {/* =====================================================
          NAVBAR
      ===================================================== */}

      <header
        className={`dropsy-navbar ${
          scrolled ? "dropsy-navbar-scrolled" : ""
        }`}
      >
        <div className="dropsy-navbar-inner">

          {/* =================================================
              LOGO
          ================================================= */}

          <a
            href="/"
            className="dropsy-logo"
            onClick={closeMenus}
          >
            <img
              src={logo}
              alt="DROPSHY"
              className="dropsy-logo-image"
            />
          </a>

          {/* =================================================
              DESKTOP NAVIGATION
          ================================================= */}

          <nav className="dropsy-nav-links">

            {NAV_LINKS.map((link) => (
              <div
                key={link.label}
                className={`dropsy-nav-item ${
                  openMenu === link.label
                    ? "dropsy-nav-item-open"
                    : ""
                }`}
                onMouseEnter={() => {
                  if (link.items) {
                    setOpenMenu(link.label);
                  }
                }}
              >

                {/* ===========================================
                    LINK ROW
                =========================================== */}

                <div className="dropsy-nav-link-row">

                  {/* =========================================
                      NORMAL LINK
                  ========================================= */}

                  {!link.items ? (
                    <a
                      href={link.href}
                      className="dropsy-nav-link"
                      onClick={closeMenus}
                    >
                      {link.label}
                    </a>
                  ) : (
                    <>
                      {/* =====================================
                          DROPDOWN BUTTON
                      ===================================== */}

                      <button
                        type="button"
                        className="dropsy-nav-link dropsy-nav-link-button"
                        onClick={() => toggleMenu(link.label)}
                      >
                        {link.label}
                      </button>

                      {/* =====================================
                          ARROW
                      ===================================== */}

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
                    </>
                  )}

                </div>

                {/* ===========================================
                    DESKTOP DROPDOWN
                =========================================== */}

                {link.items &&
                  openMenu === link.label && (
                    <div
                      className="dropsy-dropdown"
                      onMouseEnter={() =>
                        setOpenMenu(link.label)
                      }
                      onMouseLeave={() =>
                        setOpenMenu(null)
                      }
                    >

                      {link.items.map((item, index) => {
                        const itemLabel =
                          getItemLabel(item);

                        const itemHref =
                          getItemHref(item);

                        return (
                          <a
                            key={`${link.label}-${itemLabel}-${index}`}
                            href={itemHref}
                            className="dropsy-dropdown-item"
                            onClick={closeMenus}
                          >
                            <span>
                              {itemLabel}
                            </span>

                            {typeof item !== "string" && (
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
                            )}
                          </a>
                        );
                      })}

                    </div>
                  )}

              </div>
            ))}

          </nav>

          {/* =================================================
              RIGHT ACTIONS
          ================================================= */}

          <div className="dropsy-actions">

            <a
              href="/login"
              className="dropsy-login"
              onClick={closeMenus}
            >
              Log In
            </a>

            <a
              href="/get-started"
              className="dropsy-cta"
              onClick={closeMenus}
            >
              Get Started
            </a>

          </div>

          {/* =================================================
              MOBILE BUTTON
          ================================================= */}

          <button
            type="button"
            className={`dropsy-menu-button ${
              mobileOpen
                ? "dropsy-menu-open"
                : ""
            }`}
            onClick={() => {
              setMobileOpen((prev) => !prev);
              setOpenMenu(null);
            }}
            aria-label="Toggle menu"
            aria-expanded={mobileOpen}
          >
            <span />
            <span />
            <span />
          </button>

        </div>

        {/* ===================================================
            MOBILE MENU
        =================================================== */}

        <div
          className={`dropsy-mobile-menu ${
            mobileOpen
              ? "dropsy-mobile-menu-open"
              : ""
          }`}
        >

          {NAV_LINKS.map((link) => (

            <div
              key={`mobile-${link.label}`}
              className="dropsy-mobile-item"
            >

              {/* =============================================
                  NORMAL MOBILE LINK
              ============================================= */}

              {!link.items ? (
                <a
                  href={link.href}
                  className="dropsy-mobile-link"
                  onClick={closeMenus}
                >
                  {link.label}
                </a>
              ) : (

                /* ===========================================
                   MOBILE DROPDOWN BUTTON
                =========================================== */

                <button
                  type="button"
                  className="dropsy-mobile-dropdown-button"
                  onClick={() =>
                    toggleMenu(link.label)
                  }
                >
                  <span>
                    {link.label}
                  </span>

                  <svg
                    width="10"
                    height="6"
                    viewBox="0 0 10 6"
                    fill="none"
                    className={
                      openMenu === link.label
                        ? "dropsy-mobile-arrow-open"
                        : ""
                    }
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

              {/* =============================================
                  MOBILE SUBMENU
              ============================================= */}

              {link.items &&
                openMenu === link.label && (

                  <div className="dropsy-mobile-submenu">

                    {link.items.map((item, index) => {

                      const itemLabel =
                        getItemLabel(item);

                      const itemHref =
                        getItemHref(item);

                      return (
                        <a
                          key={`mobile-${link.label}-${itemLabel}-${index}`}
                          href={itemHref}
                          onClick={closeMenus}
                        >
                          {itemLabel}
                        </a>
                      );

                    })}

                  </div>
                )}

            </div>
          ))}

          {/* =================================================
              MOBILE ACTIONS
          ================================================= */}

          <div className="dropsy-mobile-actions">

          <a
  href="/login"
  onClick={closeMenus}
>
  Log In
</a>

<a
  href="/get-started"
  className="dropsy-cta"
  onClick={closeMenus}
>
  Get Started
</a>

          </div>

        </div>

      </header>

      {/* =====================================================
          CSS
      ===================================================== */}

      <style>{`

        * {
          box-sizing: border-box;
        }

        /* ===================================================
           NAVBAR
        =================================================== */

        .dropsy-navbar {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          width: 100%;
          z-index: 9999;

          background: transparent;

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

        /* ===================================================
           SCROLLED
        =================================================== */

        .dropsy-navbar-scrolled {
          top: 10px;
          left: 7%;
          right: 7%;
          width: 86%;

          border-radius: 24px;

          background:
            linear-gradient(
              120deg,
              rgba(224, 242, 254, 0.95),
              rgba(255, 243, 224, 0.93)
            );

          border: 1px solid rgba(17, 167, 230, 0.20);

          box-shadow:
            0 12px 35px rgba(17, 167, 230, 0.16),
            0 5px 18px rgba(245, 154, 27, 0.10);

          backdrop-filter: blur(18px) saturate(160%);
          -webkit-backdrop-filter: blur(18px) saturate(160%);
        }

        /* ===================================================
           INNER
        =================================================== */

        .dropsy-navbar-inner {
          position: relative;

          width: 100%;
          max-width: 1450px;

          height: 76px;

          margin: 0 auto;

          padding: 0 30px;

          display: flex;
          align-items: center;
          justify-content: space-between;
        }

        /* ===================================================
           LOGO
        =================================================== */

        .dropsy-logo {
          display: flex;
          align-items: center;

          width: 175px;
          height: 70px;

          flex-shrink: 0;

          text-decoration: none;

          overflow: visible;
        }

        .dropsy-logo-image {
          width: 220px;
          height: 75px;

          object-fit: contain;

          display: block;

          transition: transform 0.25s ease;
        }

        .dropsy-logo:hover .dropsy-logo-image {
          transform: scale(1.03);
        }

        /* ===================================================
           DESKTOP NAV
        =================================================== */

        .dropsy-nav-links {
          position: absolute;

          left: 50%;
          top: 50%;

          transform: translate(-50%, -50%);

          display: flex;
          align-items: center;
          justify-content: center;

          gap: 3px;

          white-space: nowrap;

          z-index: 3;
        }

        .dropsy-nav-item {
          position: relative;
          flex-shrink: 0;
        }

        /* ===================================================
           LINK ROW
        =================================================== */

        .dropsy-nav-link-row {
          display: flex;
          align-items: center;
          justify-content: center;

          border-radius: 9px;
        }

        /* ===================================================
           NORMAL LINK
        =================================================== */

        .dropsy-nav-link {
          display: flex;
          align-items: center;
          justify-content: center;

          padding: 10px 9px;

          color: #374151;

          font-size: 17px;
          line-height: 1.2;
          font-weight: 650;

          text-decoration: none;

          white-space: nowrap;

          border: none;
          outline: none;

          transition:
            color 0.2s ease,
            background 0.2s ease;
        }

        .dropsy-nav-link:hover {
          color: #4f46e5;

          background:
            rgba(79, 70, 229, 0.06);

          border-radius: 8px;
        }

        /* ===================================================
           DROPDOWN BUTTON
        =================================================== */

        .dropsy-nav-link-button {
          appearance: none;
          -webkit-appearance: none;

          background: transparent;

          cursor: pointer;

          font-family: inherit;
        }

        .dropsy-nav-link-button:focus {
          outline: none;
        }

        /* ===================================================
           ARROW
        =================================================== */

        .dropsy-arrow {
          appearance: none;
          -webkit-appearance: none;

          border: none;
          outline: none;

          background: transparent;

          color: #6b7280;

          padding: 5px 4px;

          display: flex;
          align-items: center;
          justify-content: center;

          cursor: pointer;

          transition:
            transform 0.25s ease,
            color 0.25s ease;
        }

        .dropsy-arrow:hover {
          color: #4f46e5;
        }

        .dropsy-arrow-open {
          transform: rotate(180deg);
          color: #4f46e5;
        }

        /* ===================================================
           DROPDOWN
        =================================================== */

        .dropsy-dropdown {
          position: absolute;

          top: calc(100% + 8px);

          left: 50%;

          transform: translateX(-50%);

          width: 270px;

          max-height: 500px;

          overflow-y: auto;

          padding: 10px;

          background: #ffffff;

          border:
            1px solid rgba(15, 23, 42, 0.08);

          border-radius: 16px;

          box-shadow:
            0 20px 55px
            rgba(15, 23, 42, 0.14);

          animation: dropsyDrop 0.18s ease;

          z-index: 10000;
        }

        .dropsy-dropdown::-webkit-scrollbar {
          width: 5px;
        }

        .dropsy-dropdown::-webkit-scrollbar-thumb {
          background: #d1d5db;
          border-radius: 20px;
        }

        @keyframes dropsyDrop {

          from {
            opacity: 0;

            transform:
              translateX(-50%)
              translateY(-7px);
          }

          to {
            opacity: 1;

            transform:
              translateX(-50%)
              translateY(0);
          }

        }

        /* ===================================================
           DROPDOWN ITEM
        =================================================== */

        .dropsy-dropdown-item {
          display: flex;

          align-items: center;
          justify-content: space-between;

          gap: 12px;

          padding: 11px 12px;

          border-radius: 9px;

          color: #374151;

          font-size: 13px;
          font-weight: 600;

          text-decoration: none;

          transition:
            background 0.2s ease,
            color 0.2s ease,
            transform 0.2s ease;
        }

        .dropsy-dropdown-item:hover {
          background:
            rgba(79, 70, 229, 0.07);

          color: #4f46e5;

          transform: translateX(2px);
        }

        /* ===================================================
           RIGHT ACTIONS
        =================================================== */

        .dropsy-actions {
          display: flex;

          align-items: center;

          gap: 14px;

          flex-shrink: 0;

          position: relative;

          z-index: 4;
        }

        /* ===================================================
           LOGIN
        =================================================== */

        .dropsy-login {
          color: #374151;

          font-size: 14px;
          font-weight: 600;

          text-decoration: none;

          padding: 10px 4px;

          white-space: nowrap;

          transition: color 0.2s ease;
        }

        .dropsy-login:hover {
          color: #4f46e5;
        }

        /* ===================================================
           CTA
        =================================================== */

        .dropsy-cta {
          display: inline-flex;

          align-items: center;
          justify-content: center;

          min-height: 42px;

          padding: 0 20px;

          border-radius: 11px;

          background:
            linear-gradient(
              135deg,
              #4f46e5,
              #7c3aed
            );

          color: #ffffff;

          font-size: 14px;
          font-weight: 700;

          text-decoration: none;

          white-space: nowrap;

          box-shadow:
            0 8px 22px
            rgba(79, 70, 229, 0.20);

          transition:
            transform 0.2s ease,
            box-shadow 0.2s ease;
        }

        .dropsy-cta:hover {
          transform: translateY(-2px);

          box-shadow:
            0 12px 28px
            rgba(79, 70, 229, 0.28);
        }

        /* ===================================================
           MOBILE BUTTON
        =================================================== */

        .dropsy-menu-button {
          display: none;

          margin-left: auto;

          width: 44px;
          height: 44px;

          border: 0;
          outline: none;

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

        .dropsy-menu-open span:nth-child(1) {
          transform:
            translateY(7px)
            rotate(45deg);
        }

        .dropsy-menu-open span:nth-child(2) {
          opacity: 0;
        }

        .dropsy-menu-open span:nth-child(3) {
          transform:
            translateY(-7px)
            rotate(-45deg);
        }

        /* ===================================================
           MOBILE MENU
        =================================================== */

        .dropsy-mobile-menu {
          display: none;
        }

        /* ===================================================
           TABLET
        =================================================== */

        @media (max-width: 1150px) {

          .dropsy-navbar-inner {
            padding: 0 20px;
          }

          .dropsy-logo {
            width: 150px;
          }

          .dropsy-logo-image {
            width: 170px;
            height: 65px;
          }

          .dropsy-nav-links {
            gap: 0;
          }

          .dropsy-nav-link {
            font-size: 13px;
            padding: 9px 6px;
          }

          .dropsy-nav-link-button {
            font-size: 13px;
          }

          .dropsy-actions {
            gap: 8px;
          }

          .dropsy-login {
            font-size: 13px;
          }

          .dropsy-cta {
            padding: 0 15px;
            font-size: 13px;
          }

        }

        /* ===================================================
           MOBILE / TABLET
        =================================================== */

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
              linear-gradient(
                120deg,
                rgba(224, 242, 254, 0.96),
                rgba(255, 243, 224, 0.94)
              );

            border:
              1px solid rgba(17, 167, 230, 0.18);

            box-shadow:
              0 10px 28px
              rgba(17, 167, 230, 0.15),
              0 4px 16px
              rgba(245, 154, 27, 0.09);

            backdrop-filter: blur(18px) saturate(160%);
            -webkit-backdrop-filter: blur(18px) saturate(160%);
          }

          .dropsy-navbar-inner {

            height: 70px;

            padding: 0 18px;
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

            width: 155px;
            height: 58px;
          }

          .dropsy-menu-button {

            display: flex;
          }

          /* ===============================================
             MOBILE MENU
          =============================================== */

          .dropsy-mobile-menu {

            display: block;

            max-height: 0;

            overflow: hidden;

            opacity: 0;

            background:
              rgba(255, 255, 255, 0.98);

            border-top:
              1px solid
              rgba(15, 23, 42, 0.07);

            border-radius:
              0 0 22px 22px;

            transition:
              max-height 0.4s ease,
              opacity 0.25s ease;
          }

          .dropsy-mobile-menu-open {

            max-height: 1000px;

            opacity: 1;
          }

          .dropsy-mobile-item {

            border-bottom:
              1px solid
              rgba(15, 23, 42, 0.06);
          }

          /* ===============================================
             MOBILE LINK
          =============================================== */

          .dropsy-mobile-link {

            display: block;

            width: 100%;

            padding: 16px 22px;

            color: #374151;

            text-decoration: none;

            font-size: 15px;

            font-weight: 600;
          }

          .dropsy-mobile-link:hover {

            color: #4f46e5;

            background:
              rgba(79, 70, 229, 0.04);
          }

          /* ===============================================
             MOBILE DROPDOWN BUTTON
          =============================================== */

          .dropsy-mobile-dropdown-button {

            width: 100%;

            padding: 16px 22px;

            border: 0;
            outline: none;

            background: transparent;

            display: flex;

            align-items: center;

            justify-content: space-between;

            color: #374151;

            font-family: inherit;

            font-size: 15px;

            font-weight: 600;

            cursor: pointer;
          }

          .dropsy-mobile-dropdown-button:hover {

            color: #4f46e5;

            background:
              rgba(79, 70, 229, 0.04);
          }

          /* ===============================================
             MOBILE ARROW
          =============================================== */

          .dropsy-mobile-dropdown-button svg {

            transition:
              transform 0.25s ease;
          }

          .dropsy-mobile-arrow-open {

            transform: rotate(180deg);
          }

          /* ===============================================
             MOBILE SUBMENU
          =============================================== */

          .dropsy-mobile-submenu {

            padding:
              0 22px 13px;
          }

          .dropsy-mobile-submenu a {

            display: block;

            padding: 10px 11px;

            color: #6b7280;

            font-size: 14px;

            text-decoration: none;

            border-radius: 8px;

            transition:
              background 0.2s ease,
              color 0.2s ease;
          }

          .dropsy-mobile-submenu a:hover {

            color: #4f46e5;

            background:
              rgba(79, 70, 229, 0.05);
          }

          /* ===============================================
             MOBILE ACTIONS
          =============================================== */

          .dropsy-mobile-actions {

            display: flex;

            flex-direction: column;

            gap: 10px;

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

        /* ===================================================
           SMALL MOBILE
        =================================================== */

        @media (max-width: 600px) {

          .dropsy-navbar,
          .dropsy-navbar-scrolled {

            left: 10px;
            right: 10px;

            border-radius: 19px;

            background:
              linear-gradient(
                120deg,
                rgba(224, 242, 254, 0.94),
                rgba(255, 243, 224, 0.92)
              );

            border:
              1px solid rgba(17, 167, 230, 0.18);

            box-shadow:
              0 8px 25px
              rgba(17, 167, 230, 0.14);

            backdrop-filter:
              blur(18px)
              saturate(150%);

            -webkit-backdrop-filter:
              blur(18px)
              saturate(150%);
          }

          .dropsy-navbar-inner {

            height: 64px;

            padding:
              0 15px;
          }

          .dropsy-logo {

            width: 125px;
            height: 52px;
          }

          .dropsy-logo-image {

            width: 135px;
            height: 50px;
          }

          .dropsy-menu-button {

            width: 40px;
            height: 40px;
          }

        }

        /* ===================================================
           VERY SMALL
        =================================================== */

        @media (max-width: 400px) {

          .dropsy-navbar-inner {

            padding:
              0 12px;
          }

          .dropsy-logo {

            width: 112px;
          }

          .dropsy-logo-image {

            width: 120px;
          }

        }

      `}</style>
    </>
  );
}

export default Navbar;