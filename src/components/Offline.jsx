import React from "react";
import { ArrowRight } from "lucide-react";
import "./Offline.css";

export default function OfflineStores() {
    const cards = [1, 2, 3, 4];
    return (

        <section className="offline-section">

            <div className="offline-container">

                <div className="cards-grid">

                    {cards.map((item) => (

                        <div className="offline-card" key={item}>
                            {/* Heading */}

                            <h2 className="offline-title">
                                Large Online &
                                <br />
                                Offline Businesses
                            </h2>

                            <p className="offline-subtitle">
                                Enterprise brands and sellers managing multiple
                                online stores, marketplaces and retail outlets.
                            </p>

                            {/* Products */}

                            <h3 className="offline-heading">
                                Solutions used frequently
                            </h3>

                            <div className="chip-wrapper">

                                {[
                                    "Order Management",
                                    "Warehouse",

                                ].map((chip, index) => (

                                    <button
                                        key={index}
                                        className="chip-btn"
                                    >

                                        <span className="chip-dot"></span>

                                        {chip}

                                        <ArrowRight size={18} />

                                    </button>

                                ))}

                            </div>

                            {/* Stats */}

                            <div className="offline-stats">

                                <div>

                                    <p className="stat-label">
                                        Orders processed every month
                                    </p>

                                    <h2 className="stat-value">
                                        10M+
                                    </h2>

                                </div>

                                <div className="divider"></div>

                                <div>

                                    <p className="stat-label">
                                        Connected sales channels
                                    </p>

                                    <h2 className="stat-value">
                                        50+
                                    </h2>

                                </div>

                            </div>

                            {/* Dashboard */}

                            <div className="dashboard-box">

                                {/* Glow */}

                                <div className="dashboard-glow"></div>

                                {/* Main Dashboard */}

                                <div className="dashboard-card">

                                    <div className="dashboard-header">

                                        <div>

                                            <p className="small-text">
                                                Orders
                                            </p>

                                            <h2>
                                                2,450
                                            </h2>

                                        </div>

                                        <span className="growth">
                                            +18%
                                        </span>

                                    </div>

                                    {/* Chart */}

                                    <div className="chart">

                                        <div style={{ height: "60px" }}></div>
                                        <div style={{ height: "100px" }}></div>
                                        <div style={{ height: "75px" }}></div>
                                        <div style={{ height: "125px" }}></div>
                                        <div style={{ height: "90px" }}></div>
                                        <div style={{ height: "140px" }}></div>

                                    </div>

                                    {/* Bottom Stats */}

                                    <div className="dashboard-stats">

                                        <div>

                                            <p>Delivered</p>

                                            <h3>1980</h3>

                                        </div>

                                        <div>

                                            <p>Pending</p>

                                            <h3>470</h3>

                                        </div>

                                    </div>

                                </div>            {/* Floating Revenue */}

                                <div className="floating revenue">

                                    <p>Revenue</p>

                                    <h3>₹12.4L</h3>

                                    <span>▲22%</span>

                                </div>

                                {/* Floating RTO */}

                                <div className="floating rto">

                                    <p>RTO</p>

                                    <h3>1.8%</h3>

                                </div>

                                {/* Floating Warehouse */}

                                <div className="floating warehouse">

                                    <p>Warehouses</p>

                                    <h3>12</h3>

                                </div>

                                {/* Floating Channels */}

                                <div className="floating channels">

                                    <p>Channels</p>

                                    <h3>Amazon • Flipkart • Website</h3>

                                </div>

                            </div>
</div>
                               

      ))}

    </div>

  </div>

</section>

  );

}

    