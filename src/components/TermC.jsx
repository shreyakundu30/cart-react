import React from 'react';
import styled from 'styled-components';
import { NavLink, Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHandshake } from '@fortawesome/free-solid-svg-icons';
import Footer from './Footer';
import BackToTopButton from './BackToTopButton';

const TermsContainer = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
  color: #333;
  background-image: url('https://png.pngtree.com/thumb_back/fh260/background/20191017/pngtree-color-background-with-transparent-paper-circles-image_320009.jpg');
  background-size: cover;
`;

const SectionHeading = styled.h2`
  font-size: 24px;
  margin-bottom: 16px;
`;

const SectionSubHeading = styled.h3`
  font-size: 20px;
  margin-bottom: 12px;
`;

const List = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  margin-bottom: 16px;
`;

const ListItem = styled.li`
  margin-bottom: 8px;
`;

const TermC = () => {
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

    <TermsContainer>
      <SectionHeading style={{fontFamily: 'Book Antiqua', fontWeight: 'bold', textAlign: 'center', fontSize: '40px'}}>Terms & Conditions <FontAwesomeIcon icon={faHandshake} /></SectionHeading>
        <br />
      <SectionHeading style={{fontFamily: 'Book Antiqua', fontWeight: 'bold', textAlign: 'center'}}>1. Acceptance of Terms</SectionHeading>
      <p style={{fontFamily: 'Calibri', textAlign: 'center'}}>
        By accessing or using the RAILगाड़ी website and services, you agree to comply with and be bound by these terms and conditions. If you do not agree with any part of these terms, please refrain from using our services.
      </p>

      <SectionHeading style={{fontFamily: 'Book Antiqua', fontWeight: 'bold', textAlign: 'center'}}>2. Booking and Reservations</SectionHeading>
      <List style={{fontFamily: 'Calibri', textAlign: 'center'}}>
        <ListItem>RAILगाड़ी provides a platform for users to book train tickets.</ListItem>
        <ListItem>Users must provide accurate and complete information during the booking process.</ListItem>
        <ListItem>Booking confirmation is subject to seat availability and payment confirmation.</ListItem>
      </List>

      <SectionHeading style={{fontFamily: 'Book Antiqua', fontWeight: 'bold', textAlign: 'center'}}>3. User Responsibilities</SectionHeading>
      <List style={{fontFamily: 'Calibri', textAlign: 'center'}}>
        <ListItem>Users must keep their login credentials secure and confidential.</ListItem>
        <ListItem>Users are responsible for any activity that occurs under their account.</ListItem>
        <ListItem>Unauthorized use of the services is strictly prohibited.</ListItem>
      </List>

      <SectionHeading style={{fontFamily: 'Book Antiqua', fontWeight: 'bold', textAlign: 'center'}}>4. Cancellations and Refunds</SectionHeading>
      <List style={{fontFamily: 'Calibri', textAlign: 'center'}}>
        <ListItem>Cancellation requests must be made within the specified time frame.</ListItem>
        <ListItem>Refunds, if applicable, will be processed according to our refund policy.</ListItem>
      </List>

      <SectionHeading style={{fontFamily: 'Book Antiqua', fontWeight: 'bold', textAlign: 'center'}}>5. Privacy Policy</SectionHeading>
      <p style={{fontFamily: 'Calibri', textAlign: 'center'}}>RAILगाड़ी respects user privacy. Please refer to our Privacy Policy for details on how we collect, use, and disclose information.</p>

      <SectionHeading style={{fontFamily: 'Book Antiqua', fontWeight: 'bold', textAlign: 'center'}}>6. Intellectual Property</SectionHeading>
      <p style={{fontFamily: 'Calibri', textAlign: 'center'}}>All content on the RAILगाड़ी website, including text, graphics, logos, and images, is the property of RAILगाड़ी and is protected by copyright laws.</p>

      <SectionHeading style={{fontFamily: 'Book Antiqua', fontWeight: 'bold', textAlign: 'center'}}>7. Prohibited Activities</SectionHeading>
      <List style={{fontFamily: 'Calibri', textAlign: 'center'}}>
        <ListItem>Users must not engage in any fraudulent, abusive, or illegal activities on the platform.</ListItem>
        <ListItem>Any attempt to disrupt the services or compromise security is strictly prohibited.</ListItem>
      </List>

      <SectionHeading style={{fontFamily: 'Book Antiqua', fontWeight: 'bold', textAlign: 'center'}}>8. Limitation of Liability</SectionHeading>
      <p style={{fontFamily: 'Calibri', textAlign: 'center'}}>RAILगाड़ी is not liable for any direct, indirect, or consequential damages arising out of the use or inability to use our services.</p>

      <SectionHeading style={{fontFamily: 'Book Antiqua', fontWeight: 'bold', textAlign: 'center'}}>9. Modifications to Terms</SectionHeading>
      <p style={{fontFamily: 'Calibri', textAlign: 'center'}}>RAILगाड़ी reserves the right to modify these terms and conditions at any time. Users are responsible for regularly reviewing these terms.</p>

      <SectionHeading style={{fontFamily: 'Book Antiqua', fontWeight: 'bold', textAlign: 'center'}}>10. Governing Law</SectionHeading>
      <p style={{fontFamily: 'Calibri', textAlign: 'center'}}>These terms and conditions are governed by and construed in accordance with the laws of [Your Jurisdiction].</p>

      <SectionHeading style={{fontFamily: 'Book Antiqua', fontWeight: 'bold', textAlign: 'center'}}>11. Contact Information</SectionHeading>
      <p style={{fontFamily: 'Calibri', textAlign: 'center'}}>
        For any inquiries or concerns regarding these terms and conditions, please contact us at :-
        <br />
        RAILगाड़ी (Since 2023)
        <br />
        Our Location : 1010 Avenue, Garia, Kolkata - 700084
        <br />
        Email Address : railgaadijourneys@gmail.com
        <br />
        Contact Number : +91 9876543210
      </p>

      <p style={{fontFamily: 'Calibri', textAlign: 'center', fontSize: '20px', fontWeight: 'bold'}}>These terms and conditions were last updated on January 01 2024.</p>
        <br />
      <p style={{fontFamily: 'Book Antiqua', fontWeight: 'bold', fontSize: '25px', textAlign: 'center'}}>Thank You for choosing RAILगाड़ी for your Railway Reservations ❤️</p>
    </TermsContainer>

    <Footer />
    <BackToTopButton />
    </div>
  );
};

export default TermC;
