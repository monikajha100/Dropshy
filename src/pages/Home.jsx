import React from 'react';
import TopBar from '../components/TopBar';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import TrustBar from '../components/TrustBar';
//import FeaturesSection from '../components/FeaturesSection';
import HowItWorks from '../components/HowItWorks';
import StatsSection from '../components/StatsSection';
import ShippingSection from '../components/ShippingSection';
import FinanceSection from '../components/FinanceSection';
import CrossBorderSection from '../components/CrossBorderSection';
//import AISolutionsSection from '../components/AISolutionsSection';
import Testimonials from '../components/Testimonials';
import PricingSection from '../components/PricingSection';
import CTABanner from '../components/CTABanner';
import Footer from '../components/Footer';
import Sponser from '../components/Sponser';
import Blog from '../components/Blog';
//import RetailHero from '../components/RetailHero'; 
import Strenthcard from '../components/Strenthcard';   
//import Innovation from '../components/Innovation';  
import DevelopersSection from '../components/DevelopDirection'; 
import LiveDemo from "../components/LiveDemo" ; 
import Offline from '../components/Offline';
import Sponser2 from '../components/Sponser2';
import Services from '../components/Services';
import Sellorstory from '../components/Sellorstory';
import Shiprocket from '../components/Shiprocket';
import Whydropshyslider from '../components/Whydropshyslider';
import AISolutionsSection from '../components/AISolutionsSection';
import Dropsyoperation from '../components/Dropsyoperation';
//import Dropshy0perations from '../components/Dropsyoperation';
                                   
const Home = () => {
  return (
    <>
      {/* //<TopBar /> */}
      <Navbar />
      <main>
        <Hero />
        <Sponser />
        {/* <TrustBar /> */}
        <Whydropshyslider />
        <Dropsyoperation/>
        <AISolutionsSection/>
        <LiveDemo/>
        
       
        
        
        {/* <HowItWorks /> */}
         {/* <AISolutionsSection />
        <StatsSection />
        <ShippingSection />
        <FinanceSection />
        <CrossBorderSection />
       
        <Testimonials />
        <PricingSection />
        <CTABanner /> */}
      
        {/* //<DevelopersSection/> */}
         <Sponser2/>
        <Strenthcard/>
        
        <Offline/>
         <Sponser2/>
        <Sellorstory/>
        <Services/>
      <Shiprocket/>
         <Blog /> 
      </main>
      <Footer />
    </>
  );
};

export default Home;
