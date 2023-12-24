// Services.jsx
import React from 'react';
import styled from 'styled-components';
import { NavLink, Link } from 'react-router-dom';
import Footer from './Footer';
import BackToTopButton from './BackToTopButton';
import { faHandHoldingHeart } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const ServicesContainer = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
  background-image: url('https://static.vecteezy.com/system/resources/thumbnails/007/523/339/small/abstract-colorful-hand-painted-watercolor-splashing-background-free-vector.jpg');
  background-size: cover;
`;

const SectionTitle = styled.h2`
  color: #333;
`;

const ServiceItem = styled.div`
  margin-bottom: 20px;
`;

const ServiceTitle = styled.h3`
  color: #007bff;
`;

const ServiceDescription = styled.p`
  color: black;
  font-family: 'Calibri';
  font-size: 20px
`;

const Services = () => {
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
        <NavLink to="/Registerpage" activeClassName="active">
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

    <ServicesContainer>
    <br />
      <SectionTitle style={{ fontFamily: 'CASTELLER', fontWeight: 'bold', textAlign: 'center', fontSize: '42px'}}>Welcome To Our RAILगाड़ी Services <FontAwesomeIcon icon={faHandHoldingHeart} /></SectionTitle>
        <br />
      <ServiceItem>
        <ServiceTitle style={{ fontFamily: 'Times New Roman', fontWeight: 'bold'}}>Booking Services</ServiceTitle>
        <ServiceDescription>
          Experience the convenience of booking train tickets through our platform. Enjoy an easy-to-use interface, quick booking process, and secure payment options.
        </ServiceDescription>
      </ServiceItem>

      <ServiceItem>
        <ServiceTitle style={{ fontFamily: 'Times New Roman', fontWeight: 'bold'}}>Train Information</ServiceTitle>
        <ServiceDescription>
          Discover different types of trains, including express trains, local trains, and special trains. Get details on train routes, schedules, and seat classes.
        </ServiceDescription>
      </ServiceItem>

      <ServiceItem>
        <ServiceTitle style={{ fontFamily: 'Times New Roman', fontWeight: 'bold'}}>Reservation Options</ServiceTitle>
        <ServiceDescription>
          Explore reservation options, such as general quota, ladies quota, and senior citizen quota. Learn how to make reservations for different classes like Sleeper, AC, and more.
        </ServiceDescription>
      </ServiceItem>

      <ServiceItem>
        <ServiceTitle style={{ fontFamily: 'Times New Roman', fontWeight: 'bold'}}>Special Services</ServiceTitle>
        <ServiceDescription>
          Enjoy special services like wheelchair accessibility, catering, and family-friendly accommodations for a comfortable journey.
        </ServiceDescription>
      </ServiceItem>

      <ServiceItem>
        <ServiceTitle style={{ fontFamily: 'Times New Roman', fontWeight: 'bold'}}>Cancellation and Refund Policies</ServiceTitle>
        <ServiceDescription>
          Learn about our policies for ticket cancellations, refunds, and any associated charges. Understand the process of canceling a reservation.
        </ServiceDescription>
      </ServiceItem>

      <ServiceItem>
        <ServiceTitle style={{ fontFamily: 'Times New Roman', fontWeight: 'bold'}}>Customer Support</ServiceTitle>
        <ServiceDescription>
          Our dedicated customer support team is ready to assist you. Contact us for any queries or assistance.
        </ServiceDescription>
      </ServiceItem>

      <ServiceItem>
        <ServiceTitle style={{ fontFamily: 'Times New Roman', fontWeight: 'bold'}}>Mobile App Features</ServiceTitle>
        <ServiceDescription>
          Explore the features of our mobile app, including real-time tracking, notifications, and exclusive offers for app users.
        </ServiceDescription>
      </ServiceItem>

      <ServiceItem>
        <ServiceTitle style={{ fontFamily: 'Times New Roman', fontWeight: 'bold'}}>Safety and Security Measures</ServiceTitle>
        <ServiceDescription>
          Your safety is our priority. Learn about the safety measures in place for travelers. Rest assured that your personal and payment information is secure.
        </ServiceDescription>
      </ServiceItem>

      <ServiceItem>
        <ServiceTitle style={{ fontFamily: 'Times New Roman', fontWeight: 'bold'}}>Frequently Asked Questions (FAQs)</ServiceTitle>
        <ServiceDescription>
          Find answers to common questions in our FAQ section. Topics include ticket printing, seat availability, and baggage policies.
        </ServiceDescription>
      </ServiceItem>

      <ServiceItem>
        <ServiceTitle style={{ fontFamily: 'Times New Roman', fontWeight: 'bold'}}>Promotions and Loyalty Programs</ServiceTitle>
        <ServiceDescription>
          Take advantage of promotional offers, discounts, and loyalty programs available to our users.
        </ServiceDescription>
      </ServiceItem>
    </ServicesContainer>

    <Footer />
    <BackToTopButton />
    </div>
  );
};

export default Services;
