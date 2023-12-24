import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBell, faTriangleExclamation, faGift, faPersonWalkingLuggage, faMapLocationDot, faClipboardCheck, faMobileScreen, faHandHoldingMedical, faBoltLightning, faCompass, faHeartCircleBolt, faUserShield, faWheelchair } from '@fortawesome/free-solid-svg-icons';
import { NavLink, Link } from 'react-router-dom';
import Footer from './Footer';
import BackToTopButton from './BackToTopButton';

const AlertPageContainer = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  background-image: url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQpJywPRQ1dEl-6h5coXigIRJpwrOzytmGcBg&usqp=CAU');
  background-size: cover;
`;

const AlertHeading = styled.h1`
  text-align: center;
  margin-bottom: 20px;
  margin-top: 22px;
  font-family: 'CASTELLAR';
  font-weight: bold;
  color: black;
  font-size: 40px;
`;

const AlertSection = styled.div`
  width: 160%; /* Adjust the width as needed */
  margin-bottom: 30px;
`;

const AlertTitle = styled.h2`
  color: #820300;
  font-size: 24px;
  margin-bottom: 10px;
  font-family: 'Bradley Hand ITC';
  font-weight: bold;
`;

const AlertContent = styled.p`
  font-size: 16px;
  line-height: 1.5;
  font-family: 'Comic Sans MS';
`;

const Alerts = () => {
  return (
    <div>
    <header>
      <div className="logo-left">
        <img src="/img/leftlogo.png" alt="Left Logo" />
      </div>
      <nav className="nav-center">
        <NavLink to="/" exact activeClassName="active">
          Home
        </NavLink>
        <NavLink to="/Booking" activeClassName="active">
          Book Your Tickets
        </NavLink>

        <NavLink to="/Pnrenquiry" activeClassName="active">
          PNR Enquiry
        </NavLink>

        <NavLink to="/Cancelticket" activeClassName="active">
          Ticket Cancellation
        </NavLink>
        <NavLink to="/Contactus" activeClassName="active">
          Contact Us
        </NavLink>
        <NavLink to="/Aboutus" activeClassName="active">
          About Us
        </NavLink>

        {/* More dropdown */}
        <div className="dropdown">
          <button className="dropbtn">More</button>
          <div className="dropdown-content">
            <NavLink to="/more" activeClassName="active">
              More Option 1
            </NavLink>
            <NavLink to="/more" activeClassName="active">
              More Option 2
            </NavLink>
            {/* Add more options as needed */}
          </div>
        </div>
        <NavLink to="/Alerts" activeClassName="active">Alerts</NavLink>
        <NavLink to="/Loginpage" activeClassName="active">
          Login
        </NavLink>
        <NavLink to="/register" activeClassName="active">
          Register
        </NavLink>
      </nav>
      <div className="logo-right">
        <img
          src="https://t3.ftcdn.net/jpg/05/50/57/00/360_F_550570016_6vVnqj0ua6BxrSaA4n38gmi8JBjY6Zzm.jpg"
          alt="Right Logo"
        />
      </div>
    </header>

    <AlertPageContainer>
      <AlertHeading>Important Travel Updates & Advisories <FontAwesomeIcon icon={faBell} shake style={{ color: '#F0A500' }} /></AlertHeading>

      <AlertSection><br />
        <AlertTitle>Service Disruption - December 28, 2023  <FontAwesomeIcon icon={faTriangleExclamation} /></AlertTitle>
        <AlertContent>
          Dear passengers, we are currently experiencing a temporary disruption in our booking services due to system maintenance. We apologize for the inconvenience and appreciate your understanding. Services will resume shortly.
        </AlertContent>
      </AlertSection>

      <AlertSection>
        <AlertTitle>Exclusive Offer - Limited Time Only !! <FontAwesomeIcon icon={faGift} /></AlertTitle>
        <AlertContent>
          Book your tickets now and enjoy a special discount of 15% on your next journey. Don't miss out on this limited-time offer. Grab your tickets today !!
        </AlertContent>
      </AlertSection>

      <AlertSection>
        <AlertTitle>Upcoming Holiday Packages <FontAwesomeIcon icon={faPersonWalkingLuggage} /></AlertTitle>
        <AlertContent>
          Exciting holiday packages are coming your way !! Explore new destinations and create unforgettable memories with RAILगाड़ी. Stay tuned for more details.
        </AlertContent>
      </AlertSection>

      <AlertSection>
        <AlertTitle>New Routes Added <FontAwesomeIcon icon={faMapLocationDot} /></AlertTitle>
        <AlertContent>
          We are delighted to announce the addition of new routes to our services. Discover more travel options and plan your journeys with RAILगाड़ी.
        </AlertContent>
      </AlertSection>

      <AlertSection>
        <AlertTitle>Customer Feedback Survey <FontAwesomeIcon icon={faClipboardCheck} /></AlertTitle>
        <AlertContent>
          Your feedback matters !! Participate in our customer feedback survey and stand a chance to win exciting prizes. Your opinions help us enhance your travel experience.
        </AlertContent>
      </AlertSection>

      <AlertSection>
        <AlertTitle>Mobile App Launch <FontAwesomeIcon icon={faMobileScreen} /></AlertTitle>
        <AlertContent>
          Introducing the RAILगाड़ी mobile app !! Download now to enjoy a seamless booking experience, real-time updates, and exclusive app-only discounts. Available for both iOS and Android.
        </AlertContent>
      </AlertSection>

      <AlertSection>
        <AlertTitle>Travel Advisory - COVID-19 <FontAwesomeIcon icon={faHandHoldingMedical} /></AlertTitle>
        <AlertContent>
          Your safety is our priority. Please check our travel advisory section for the latest COVID-19 guidelines and travel restrictions before planning your journey.
        </AlertContent>
      </AlertSection>

      <AlertSection>
        <AlertTitle>Flash Sale on First-Class Tickets !! <FontAwesomeIcon icon={faBoltLightning} /></AlertTitle>
        <AlertContent>
          Upgrade your travel experience with our exclusive flash sale on first-class tickets. Limited seats available. Book now and enjoy luxury at an unbeatable price.
        </AlertContent>
      </AlertSection>

      <AlertSection>
        <AlertTitle>Explore New Destinations <FontAwesomeIcon icon={faCompass} /></AlertTitle>
        <AlertContent>
          Exciting news !! We've added new destinations to our network. Plan your next adventure and explore these amazing places with RAILगाड़ी.
        </AlertContent>
      </AlertSection>

      <AlertSection>
        <AlertTitle>Join Our Loyalty Program <FontAwesomeIcon icon={faHeartCircleBolt} /></AlertTitle>
        <AlertContent>
          Loyalty has its rewards !! Join our loyalty program and earn points with every booking. Redeem points for discounts, free tickets, and more. Sign up today !!
        </AlertContent>
      </AlertSection>

      <AlertSection>
        <AlertTitle>Enhanced Security Measures <FontAwesomeIcon icon={faUserShield} /></AlertTitle>
        <AlertContent>
          Ensuring your safety with enhanced security measures. Travel confidently with RAILgaadi as we implement advanced security protocols across all our services.
        </AlertContent>
      </AlertSection>

      <AlertSection>
        <AlertTitle>Special Services for Seniors <FontAwesomeIcon icon={faWheelchair} /></AlertTitle>
        <AlertContent>
          We care for our senior passengers !! Explore our special services designed for senior citizens, ensuring a comfortable and enjoyable journey for our valued elders.
        </AlertContent>
      </AlertSection>

      {/* Add more alert sections as needed */}

    </AlertPageContainer>
    <Footer />
    <BackToTopButton />
    </div>
  );
};

export default Alerts;
