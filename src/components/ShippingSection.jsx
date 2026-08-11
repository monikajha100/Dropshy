import React from 'react';
import './ShippingSection.css';

const orders = [
  { id: '#4821', customer: 'Aisha K.', courier: 'Delhivery', status: 'In Transit' },
  { id: '#4822', customer: 'Rohan S.', courier: 'Blue Dart', status: 'Delivered' },
  { id: '#4823', customer: 'Nina M.', courier: 'Ekart', status: 'Pickup Pending' },
];

const ShippingSection = () => (
  <section className="shipping-section" id="shipping">
    <div className="container shipping-section__inner">
      <div className="shipping-section__content">
        <p className="section-eyebrow">Shipping / Order Management</p>
        <h2 className="section-title">Ship every order with confidence</h2>
        <p className="section-sub">
          Give your team a premium control center for routing, tracking, handoffs, and growth — all from one place.
        </p>
        <div className="shipping-section__actions">
          <a href="/get-started" className="shipping-section__btn shipping-section__btn--primary">
            See platform demo
          </a>
          <a href="/solutions" className="shipping-section__btn shipping-section__btn--secondary">
            Explore workflows
          </a>
        </div>
      </div>

      <div className="shipping-section__visual" aria-label="Shipping dashboard preview">
        <div className="shipping-section__dashboard">
          <div className="shipping-section__dashboard-top">
            <div>
              <p className="shipping-section__small-label">Live fulfillment</p>
              <strong>Today’s orders</strong>
            </div>
            <span className="shipping-section__pill shipping-section__pill--teal">98.7% on time</span>
          </div>

          <div className="shipping-section__table">
            <div className="shipping-section__table-head">
              <span>Order ID</span>
              <span>Customer</span>
              <span>Courier</span>
              <span>Status</span>
            </div>
            {orders.map((order) => (
              <div key={order.id} className="shipping-section__table-row">
                <strong>{order.id}</strong>
                <span>{order.customer}</span>
                <span>{order.courier}</span>
                <span className={`shipping-section__status shipping-section__status--${order.status.toLowerCase().replace(/\s+/g, '-')}`}>
                  {order.status}
                </span>
              </div>
            ))}
          </div>
        </div>

        <div className="shipping-section__floating-card shipping-section__floating-card--left">
          <p className="shipping-section__small-label">Delivered</p>
          <strong>2,431</strong>
        </div>

        <div className="shipping-section__floating-card shipping-section__floating-card--right">
          <p className="shipping-section__small-label">In Transit</p>
          <strong>184</strong>
        </div>

        <div className="shipping-section__floating-card shipping-section__floating-card--bottom">
          <p className="shipping-section__small-label">Pickup Pending</p>
          <strong>27</strong>
        </div>
      </div>
    </div>
  </section>
);

export default ShippingSection;
