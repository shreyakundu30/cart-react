import React from 'react';
import styled, { keyframes } from 'styled-components';
import { NavLink, Link } from 'react-router-dom';
import Footer from './Footer';
import BackToTopButton from './BackToTopButton';

const HeaderContainer = styled.div`
  background: white; /* You can change the background color */
  color: #fff;
  padding: 0px;
  text-align: center;
`;
const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 20px;
  border: 1px solid #ddd; /* Add border style as needed */
  border-radius: 8px; /* Add border-radius for rounded corners */
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1); /* Add box shadow as needed */
  padding: 20px;
  max-width: 400px; /* Adjust the max-width as needed */
  width: 100%;
  margin-left: auto;
  margin-right: auto;
  background-image: url('https://images.rawpixel.com/image_800/czNmcy1wcml2YXRlL3Jhd3BpeGVsX2ltYWdlcy93ZWJzaXRlX2NvbnRlbnQvbHIvdjk2MC1uaW5nLTE3LXhfMS5qcGc.jpg');
`;

const FormRow = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  margin-bottom: 15px;
`;

const FormLabel = styled.label`
  font-size: 16px;
  margin-bottom: 5px;
  color: #000; /* Add color as needed */
`;

const RequiredAsterisk = styled.span`
  color: red;
`;

const FormInput = styled.input`
  width: 48%;
  padding: 8px;
  font-size: 14px;
  border: 1px solid #ddd; /* Add border style as needed */
  border-radius: 4px; /* Add border-radius for rounded corners */
`;

const FormSelect = styled.select`
  width: 48%;
  padding: 8px;
  font-size: 14px;
  border: 1px solid #ddd; /* Add border style as needed */
  border-radius: 4px; /* Add border-radius for rounded corners */
`;

const FormButton = styled.button`
  width: 100%;
  padding: 10px;
  background-color: #007bff;
  color: #fff;
  border: none;
  cursor: pointer;
  font-size: 16px;
  border-radius: 4px; /* Add border-radius for rounded corners */

  &:hover {
    background-color: #54B435;
  }
`;

const shakeAnimation = keyframes`
  0% {
    transform: translateX(0);
  }
  25% {
    transform: translateX(-5px);
  }
  50% {
    transform: translateX(5px);
  }
  75% {
    transform: translateX(-5px);
  }
  100% {
    transform: translateX(0);
  }
`;

// Define or import the Logo component
const Logo = styled.img`
  max-width: 100px; /* Adjust the size as needed */
  height: auto;
`;

// Use the Logo component in ShakingLogo
const ShakingLogo = styled(Logo)`
  animation: ${shakeAnimation} 0.5s ease infinite; // Adjust duration and easing as needed
`;

const ZoomInOutAnimation = styled.div`
  animation: zoomInOut 0.6s infinite alternate; /* Adjust duration as needed */
  display: inline-block;
`;

const ZoomInOutHeading = styled.h1`
  margin-top: 10px;
  font-size: 30px; /* Adjust the font size as needed */
  font-family: 'Times New Roman';
  color: #3F1D38;
  font-weight: bold;

  @keyframes zoomInOut {
    0% {
      transform: scale(1);
    }
    100% {
      transform: scale(1.1);
    }
  }
`;

const Booking = () => {
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

    <HeaderContainer>
    <ShakingLogo src="https://cdn-icons-png.flaticon.com/128/2848/2848691.png" alt="Logo" />
      <br />
      <ZoomInOutAnimation>
          <ZoomInOutHeading>Book Your E-Tickets Now</ZoomInOutHeading>
        </ZoomInOutAnimation>
    </HeaderContainer>

    <FormContainer>
        <form>
          <FormRow>
            <FormLabel htmlFor="fullName">
              Your Full Name <RequiredAsterisk>*</RequiredAsterisk>:
            </FormLabel>
            <FormInput type="text" id="fullName" name="fullName" required />
          </FormRow>

          <FormRow>
            <FormLabel htmlFor="arrivalLocation">
              From <RequiredAsterisk>*</RequiredAsterisk>:
            </FormLabel>
            <FormInput type="text" id="arrivalLocation" name="arrivalLocation" required />
          </FormRow>

          <FormRow>
            <FormLabel htmlFor="departureLocation">
              To <RequiredAsterisk>*</RequiredAsterisk>:
            </FormLabel>
            <FormInput type="text" id="departureLocation" name="departureLocation" required />
          </FormRow>

          <FormRow>
            <FormLabel htmlFor="travelClass">
              Class <RequiredAsterisk>*</RequiredAsterisk>:
            </FormLabel>
            <FormSelect id="travelClass" name="travelClass" required>
              <option value="selectclass">-- Select Class --</option>
              <option value="economy">Economy</option>
              <option value="business">Business</option>
              {/* Add more options as needed */}
            </FormSelect>
          </FormRow>

          <FormRow>
            <FormLabel htmlFor="passengerCount">
              No. of Passengers <RequiredAsterisk>*</RequiredAsterisk>:
            </FormLabel>
            <FormInput type="number" id="passengerCount" name="passengerCount" required />
          </FormRow>

          <FormRow>
            <FormLabel htmlFor="departureDate">
              Departure Date <RequiredAsterisk>*</RequiredAsterisk>:
            </FormLabel>
            <FormInput type="date" id="departureDate" name="departureDate" required />
          </FormRow>

          {/* Add more pairs of form fields as needed */}

          <Link to="/SearchTrain">
            <FormButton type="button">Search Your Train</FormButton>
          </Link>
        </form>
      </FormContainer>
      <br /><br /><br />
      <Footer />
      <BackToTopButton />
    </div>
  );
};

export default Booking;
