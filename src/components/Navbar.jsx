import React, { useEffect, useState } from "react";
import logo from "../assets/images/dropsy.jpeg";
import "./Navbar.css";

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
      },
    ],
  },

  {
    label: "Products",
    items: [
      {
        label: "Home Decor & Handicrafts",
        href: "/products/home-decor",
      },
    ],
  },

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
     CLOSE MENUS
  ========================================================= */

  const closeMenus = () => {
    setOpenMenu(null);
    setMobileOpen(false);
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
              LOGO - LEFT
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
                className="dropsy-nav-item"
                onMouseEnter={() => {
                  if (link.items) {
                    setOpenMenu(link.label);
                  }
                }}
              >
                <div className="dropsy-nav-link-row">

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
                      <button
                        type="button"
                        className="dropsy-nav-link dropsy-nav-link-button"
                        onClick={() => toggleMenu(link.label)}
                      >
                        {link.label}
                      </button>

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

                {/* =================================================
                    DESKTOP DROPDOWN
                ================================================= */}

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
                        const itemLabel = getItemLabel(item);
                        const itemHref = getItemHref(item);

                        return (
                          <a
                            key={`${link.label}-${itemLabel}-${index}`}
                            href={itemHref}
                            className="dropsy-dropdown-item"
                            onClick={closeMenus}
                          >
                            <span>{itemLabel}</span>

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
              DESKTOP RIGHT ACTIONS
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
              MOBILE MENU BUTTON - RIGHT
          ================================================= */}

          <button
            type="button"
            className={`dropsy-menu-button ${
              mobileOpen ? "dropsy-menu-open" : ""
            }`}
            onClick={() => {
              setMobileOpen((prev) => !prev);
              setOpenMenu(null);
            }}
            aria-label="Toggle menu"
            aria-expanded={mobileOpen}
          >
            <span></span>
            <span></span>
            <span></span>
          </button>

        </div>

        {/* =====================================================
            MOBILE MENU
        ===================================================== */}

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

              {!link.items ? (
                <a
                  href={link.href}
                  className="dropsy-mobile-link"
                  onClick={closeMenus}
                >
                  {link.label}
                </a>
              ) : (
                <button
                  type="button"
                  className="dropsy-mobile-dropdown-button"
                  onClick={() =>
                    toggleMenu(link.label)
                  }
                >
                  <span>{link.label}</span>

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

              {/* =================================================
                  MOBILE SUBMENU
              ================================================= */}

              {link.items &&
                openMenu === link.label && (
                  <div className="dropsy-mobile-submenu">

                    {link.items.map((item, index) => {
                      const itemLabel = getItemLabel(item);
                      const itemHref = getItemHref(item);

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
    </>
  );
}

export default Navbar;