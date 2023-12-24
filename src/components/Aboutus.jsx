import React from 'react';
import styled from 'styled-components';
import { NavLink, Link } from 'react-router-dom';
import Footer from './Footer';
import BackToTopButton from './BackToTopButton';

const AboutUsContainer = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: 50px;
  background-image: url('https://images.pexels.com/photos/7130496/pexels-photo-7130496.jpeg?cs=srgb&dl=pexels-codioful-%28formerly-gradienta%29-7130496.jpg&fm=jpg');
`;

const LeftSection = styled.div`
  flex: 1;
  text-align: center;
`;

const RightSection = styled.div`
  flex: 1;
  text-align: center;
`;

const Heading = styled.h1`
  font-size: 36px;
  color: #333;
  font-family: Bookman Old Style;
`;

const Description = styled.p`
  font-size: 18px;
  color: #555;
  margin-top: 20px;
`;

const AuthorInfo = styled.div`
  margin-top: 20px;
`;

const AuthorName = styled.p`
  font-weight: bold;
  color: #333;
  font-family: Times New Roman;
  font-size: 24px;
`;

const AuthorRole = styled.p`
  color: #555;
`;

const AuthorPhoto = styled.img`
  max-width: 20%;
  height: auto;
  border-radius: 50%;
  margin-top: 20px;
`;

const Aboutus = () => {
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

    <AboutUsContainer>
      <LeftSection>
        <Heading>About RAILगाड़ी</Heading>
        <Description style={{ fontFamily: 'Comic Sans MS' }}>
        Discover the world with <strong>RAILगाड़ी (since 2023)</strong>
        <br />Seamlessly book your tickets, unlock exclusive benefits by registering, effortlessly check PNR status, and enjoy hassle-free ticket cancellations. Immerse yourself in exciting holiday packages and stay updated with our informative newsletter. Connect with us through our interactive contact page and explore further in our engaging footer. <br /><strong>RAILगाड़ी</strong> – Where Every Journey Unfolds a New Experience !!
        </Description>
        <AuthorInfo>
          <AuthorName>Shreya Kundu</AuthorName>
          <AuthorRole>Co-Founder & CEO</AuthorRole>
          <AuthorPhoto src="/img/sk.jpg" alt="Author" />
        </AuthorInfo>
      </LeftSection>

      <RightSection>
        {/* Add images or a gallery in this section */}
        <img src="https://swarajya.gumlet.io/swarajya/2022-10/3744ff75-0bde-4cd3-9029-6c4c7c157e13/Image_1a__Generic_image__Credit__Indian_Railways_Handbook.jpg?w=320&q=75&auto=format,compress&format=webp" alt="Image 1" />
        {/* Add more images as needed */}
      </RightSection>
    </AboutUsContainer>
    <Footer />
    <BackToTopButton />
    </div>
  );
};

export default Aboutus;
