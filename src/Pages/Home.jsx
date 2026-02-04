import react from 'react'; 
import { Routes,Route } from 'react-router-dom'
import HeroBanner from '../components/HeroBanner';
import OurCapabilities from '../components/OurCapabilities';
import WhyChooseUs from '../components/WhyChooseUs';
import ShippingCalculator from '../components/ShippingCalculator';
import Testimonials from '../components/Testimonials';
import TrustedPartners from '../components/TrustedPartners';

const Home = () => {
  return (
    <>
    <HeroBanner/>

    <OurCapabilities/>

    <WhyChooseUs/>

    <ShippingCalculator/>

    <Testimonials/>

    <TrustedPartners/>

   
    </>
  )
}

export default Home