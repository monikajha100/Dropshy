import React from 'react';
import './FinanceSection.css';

const FinanceSection = () => (
  <section className="finance-section" id="finance">
    <div className="container finance-section__inner">
      <div className="finance-section__content">
        <p className="section-eyebrow">Financial services</p>
        <h2 className="section-title">Financial support for your next stage of growth</h2>
        <p className="section-sub">
          Unlock flexible capital, stronger cash flow visibility, and funding that keeps pace with your momentum.
        </p>
        <div className="finance-section__pill-row">
          <span className="finance-section__pill">Fast approvals</span>
          <span className="finance-section__pill">Flexible repayment</span>
        </div>
        <a href="/pricing" className="finance-section__link">Explore funding options →</a>
      </div>

      <div className="finance-section__visual" aria-label="Financial dashboard preview">
        <div className="finance-section__card">
          <div className="finance-section__card-head">
            <div>
              <p className="finance-section__label">Funding dashboard</p>
              <strong>Capital ready for scale</strong>
            </div>
            <span className="finance-section__badge">Approved</span>
          </div>

          <div className="finance-section__dashboard">
            <div className="finance-section__panel finance-section__panel--primary">
              <p>Available funding</p>
              <strong>₹30L</strong>
            </div>
            <div className="finance-section__panel">
              <p>Amount</p>
              <strong>₹12.5L</strong>
            </div>
            <div className="finance-section__panel">
              <p>Credit score</p>
              <strong>784</strong>
            </div>
            <div className="finance-section__panel finance-section__panel--cta">
              <p>Get Funded</p>
              <strong>Apply now</strong>
            </div>
            <div className="finance-section__panel finance-section__panel--wide">
              <div className="finance-section__growth-row">
                <div>
                  <p>Business growth</p>
                  <strong>+38% QoQ</strong>
                </div>
                <span>Steady momentum</span>
              </div>
              <div className="finance-section__bars" aria-hidden="true">
                <span />
                <span />
                <span />
                <span />
              </div>
            </div>
          </div>
        </div>

        <div className="finance-section__floating">
          <p className="finance-section__mini-label">Smart capital</p>
          <strong>Flexible & fast</strong>
        </div>
      </div>
    </div>
  </section>
);

export default FinanceSection;
