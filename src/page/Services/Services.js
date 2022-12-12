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
      <Navbar />
      <LandingServices />
      <ContentServicesPage />
      Contact
      <Google />
      <Footer />
    </>
    // <div>
    //   <Link to="/#test">Heelo</Link>
    // </div>
  )
}

export default Services
