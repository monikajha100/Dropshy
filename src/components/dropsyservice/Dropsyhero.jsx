import React from "react";
import {
  Package,
  MapPin,
  Truck,
  ArrowRight,
  ShoppingBag,
  Users,
} from "lucide-react";

import "./Dropsyhero.css";

const NationalHero = () => {
  return (
    <section className="national-hero">

      <div className="national-hero-container">

        {/* ================= LEFT CONTENT ================= */}

        <div className="national-hero-content">

          <div className="national-eyebrow">
            NATIONAL E-COMMERCE
          </div>

          <h1>
            Sell Across India
            <br />
            with <span>DROPSHY</span>
          </h1>

          <p className="national-hero-description">
            Start and grow your online business across India's leading
            marketplaces without the hassle of inventory, warehousing
            and fulfillment.
          </p>


          {/* ================= SMALL FEATURES ================= */}

          <div className="national-features">

            <div className="national-feature">

              <div className="national-feature-icon">
                <Package size={17} />
              </div>

              <div>
                <strong>Zero</strong>
                <span>Inventory</span>
              </div>

            </div>


            <div className="national-feature">

              <div className="national-feature-icon">
                <MapPin size={17} />
              </div>

              <div>
                <strong>Pan-India</strong>
                <span>Reach</span>
              </div>

            </div>


            <div className="national-feature">

              <div className="national-feature-icon">
                <Truck size={17} />
              </div>

              <div>
                <strong>Easy</strong>
                <span>Fulfillment</span>
              </div>

            </div>

          </div>


          {/* ================= BUTTONS ================= */}

          <div className="national-hero-buttons">

            <button className="national-primary-btn">
              Start Selling
              <ArrowRight size={17} />
            </button>

            <button className="national-secondary-btn">
              Explore Marketplaces
              <ArrowRight size={17} />
            </button>

          </div>

        </div>


        {/* ================= RIGHT DASHBOARD ================= */}

        <div className="national-hero-visual">

          {/* BACKGROUND SHAPE */}
          <div className="national-visual-glow"></div>


          {/* AMAZON FLOATING CARD */}

          <div className="marketplace-card amazon-card">
            <div className="amazon-text">
              amazon<span>.in</span>
            </div>
          </div>


          {/* FLIPKART FLOATING CARD */}

          <div className="marketplace-card flipkart-card">

            <div className="flipkart-icon">
              F
            </div>

            <strong>Flipkart</strong>

          </div>


          {/* MEESHO FLOATING CARD */}

          <div className="marketplace-card meesho-card">
            <strong>meesho</strong>
          </div>


          {/* MYNTRA FLOATING CARD */}

          <div className="marketplace-card myntra-card">

            <div className="myntra-logo">
              M
            </div>

            <strong>Myntra</strong>

          </div>


          {/* ================= DASHBOARD ================= */}

          <div className="national-dashboard">

            {/* SIDEBAR */}

            <div className="dashboard-sidebar">

              <div className="dashboard-brand">
                DROPSHY
              </div>

              <div className="dashboard-nav active">
                Overview
              </div>

              <div className="dashboard-nav">
                Products
              </div>

              <div className="dashboard-nav">
                Orders
              </div>

              <div className="dashboard-nav">
                Customers
              </div>

              <div className="dashboard-nav">
                Earnings
              </div>

            </div>


            {/* DASHBOARD CONTENT */}

            <div className="dashboard-content">

              <div className="dashboard-header">

                <div>
                  <small>Dashboard</small>
                  <h3>Overview</h3>
                </div>

                <div className="dashboard-profile">
                  M
                </div>

              </div>


              {/* STAT CARDS */}

              <div className="dashboard-stat-grid">

                <div className="dashboard-stat">

                  <div className="stat-icon purple">
                    <ShoppingBag size={14} />
                  </div>

                  <span>Total Orders</span>

                  <strong>12,793</strong>

                  <small className="growth">
                    +18.6%
                  </small>

                </div>


                <div className="dashboard-stat">

                  <div className="stat-icon yellow">
                    ₹
                  </div>

                  <span>Total Revenue</span>

                  <strong>₹24,58,300</strong>

                  <small className="growth">
                    +24.1%
                  </small>

                </div>


                <div className="dashboard-stat">

                  <div className="stat-icon green">
                    <Users size={14} />
                  </div>

                  <span>Total Customers</span>

                  <strong>8,912</strong>

                  <small className="growth">
                    +16.2%
                  </small>

                </div>

              </div>


              {/* SALES CHART */}

              <div className="sales-chart-card">

                <div className="sales-chart-header">

                  <div>
                    <strong>Sales Overview</strong>
                    <span>Revenue performance</span>
                  </div>

                  <button>
                    This Month
                  </button>

                </div>


                <div className="sales-chart">

                  <div className="chart-lines">
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                  </div>


                  <svg
                    viewBox="0 0 500 180"
                    preserveAspectRatio="none"
                    className="chart-svg"
                  >

                    <defs>

                      <linearGradient
                        id="salesFill"
                        x1="0"
                        y1="0"
                        x2="0"
                        y2="1"
                      >

                        <stop
                          offset="0%"
                          stopColor="#5146e5"
                          stopOpacity="0.18"
                        />

                        <stop
                          offset="100%"
                          stopColor="#5146e5"
                          stopOpacity="0"
                        />

                      </linearGradient>

                    </defs>


                    {/* AREA */}

                    <path
                      d="
                        M0 145
                        C35 135 55 125 85 132
                        C115 140 130 98 160 110
                        C190 122 205 130 230 88
                        C255 70 280 105 310 75
                        C340 50 350 92 375 55
                        C400 35 425 80 450 38
                        C470 25 485 40 500 25
                        L500 180
                        L0 180
                        Z
                      "
                      fill="url(#salesFill)"
                    />


                    {/* LINE */}

                    <path
                      d="
                        M0 145
                        C35 135 55 125 85 132
                        C115 140 130 98 160 110
                        C190 122 205 130 230 88
                        C255 70 280 105 310 75
                        C340 50 350 92 375 55
                        C400 35 425 80 450 38
                        C470 25 485 40 500 25
                      "
                      fill="none"
                      stroke="#5146e5"
                      strokeWidth="3"
                    />

                  </svg>

                </div>

              </div>


              {/* ORDER STATUS */}

              <div className="dashboard-status">

                <div>
                  <span className="status-dot pending"></span>
                  <small>Pending</small>
                  <strong>320</strong>
                </div>

                <div>
                  <span className="status-dot processing"></span>
                  <small>Processing</small>
                  <strong>1,245</strong>
                </div>

                <div>
                  <span className="status-dot shipped"></span>
                  <small>Shipped</small>
                  <strong>8,230</strong>
                </div>

                <div>
                  <span className="status-dot delivered"></span>
                  <small>Delivered</small>
                  <strong>11,998</strong>
                </div>

              </div>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
};

export default NationalHero;