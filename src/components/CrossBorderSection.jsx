import React from 'react';
import './CrossBorderSection.css';

const CrossBorderSection = () => (
  <section className="cross-border-section" id="cross-border">
    <div className="container cross-border-section__inner">
      <div className="cross-border-section__content">
        <p className="section-eyebrow">Cross-border commerce</p>
        <h2 className="section-title">Ship globally without adding complexity.</h2>
        <p className="section-sub">
          Expand to new markets with customs-ready workflows, local carrier choices, and clear visibility.
        </p>
        <div className="cross-border-section__chips">
          <span>India</span>
          <span>UAE</span>
          <span>UK</span>
          <span>US</span>
        </div>
      </div>
      <div className="cross-border-section__visual">
        <div className="cross-border-section__card">
          <div className="cross-border-section__map" aria-hidden="true">
            <span className="cross-border-section__dot cross-border-section__dot--one" />
            <span className="cross-border-section__dot cross-border-section__dot--two" />
            <span className="cross-border-section__dot cross-border-section__dot--three" />
          </div>
          <div className="cross-border-section__stats">
            <div>
              <p>Countries</p>
              <strong>34+</strong>
            </div>
            <div>
              <p>Avg. transit</p>
              <strong>4.2 days</strong>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default CrossBorderSection;
