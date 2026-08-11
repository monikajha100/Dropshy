import React from 'react';
import './TrustBar.css';

const BRANDS = [
  { name: 'Northstar', mark: 'N' },
  { name: 'Luma', mark: 'L' },
  { name: 'Vanta', mark: 'V' },
  { name: 'Orizon', mark: 'O' },
  { name: 'Kinetic', mark: 'K' },
  { name: 'Folio', mark: 'F' },
];

const TrustBar = () => (
  <section className="trust" aria-label="Trusted by businesses">
    <div className="container trust__inner">
      <div className="trust__intro">
        <p className="trust__eyebrow">Trusted by modern commerce teams</p>
        <h2 className="trust__title">Powering growing businesses with reliable shipping</h2>
      </div>

      <div className="trust__logos" role="list" aria-label="Partner brands">
        {BRANDS.map((brand, index) => (
          <div key={brand.name} className="trust__logo" style={{ animationDelay: `${index * 0.12}s` }}>
            <div className="trust__logo-mark">{brand.mark}</div>
            <span className="trust__logo-name">{brand.name}</span>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default TrustBar;
