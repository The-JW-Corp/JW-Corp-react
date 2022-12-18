import React from 'react'
import './Services.css';
import { Link } from 'react-router-dom';
import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/Footer/Footer';
import LandingServices from '../../components/LandingServices/LandingServices';
import ContentServicesPage from '../../components/ContentServicesPage/ContentServicesPage';
import Google from '../../components/Googlemaps/Google';
const Services = () => {
  return (
    <>
    <div>
      <Link to="/#test2">Heelo</Link>
    </div>
      <Navbar />
      <LandingServices />
      <ContentServicesPage />
      Contact
      <Google />
      <Footer />
    
    </>
  )
}

export default Services