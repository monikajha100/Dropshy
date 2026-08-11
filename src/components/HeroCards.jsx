import React from 'react';
import './HeroCards.css';
import OrderCard from './OrderCard';
import WhatsAppCard from './WhatsAppCard';
import ReadyToShipCard from './ReadyToShipCard';
import PillLabel from './PillLabel';
import PersonImage from './PersonImage';

const HeroCards = () => (
    <div className="hero-cards">
        {/* Pill labels */}
        <PillLabel text="Dropsy" style={{ top: '10%', left: '15%' }} />
        <PillLabel text="Fast Checkout" style={{ top: '20%', left: '30%' }} />
        <PillLabel text="Smart Shipping" style={{ top: '35%', left: '25%' }} />
        <PillLabel text="Analytics" style={{ top: '45%', left: '40%' }} />

        {/* Main cards */}
        <OrderCard className="card-order" />
        <WhatsAppCard className="card-whatsapp" />
        <ReadyToShipCard className="card-ship" />

        {/* Person illustration */}
        <PersonImage className="person-image" />
    </div>
);

export default HeroCards;
