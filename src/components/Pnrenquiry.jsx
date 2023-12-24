import React, { useState } from 'react';
import { NavLink, Link } from 'react-router-dom';
import Footer from './Footer';
import BackToTopButton from './BackToTopButton';

const Pnrenquiry = () => {
    const [pnrNumber, setPNRNumber] = useState('');
    const [pnrDetails, setPNRDetails] = useState(null);
    const [validationError, setValidationError] = useState('');

    const dummyPNRDetailsArray = [
        {
          passengerName: 'Akshay Kumar Pal',
          journeyDate: '2024-01-15',
          trainName: 'Rajdhani Express',
          status: 'Confirmed',
          fare: 1200,
          seats: 5,
        },
        {
          passengerName: 'Priya Patel',
          journeyDate: '2024-02-02',
          trainName: 'Shatabdi Express',
          status: 'Waitlisted',
          fare: 800,
          seats: 8,
        },
        {
          passengerName: 'Rajesh Sharma',
          journeyDate: '2024-03-20',
          trainName: 'Duronto Express',
          status: 'Confirmed',
          fare: 1500,
          seats: 3,
        },
        {
          passengerName: 'Karthik Reddy',
          journeyDate: '2024-04-05',
          trainName: 'Gatimaan Express',
          status: 'RAC',
          fare: 1000,
          seats: 7,
        },
        {
          passengerName: 'Anand Desai',
          journeyDate: '2024-05-12',
          trainName: 'Humsafar Express',
          status: 'Confirmed',
          fare: 1100,
          seats: 2,
        },
        {
          passengerName: 'Pooja Choudhary',
          journeyDate: '2024-06-18',
          trainName: 'Tejas Express',
          status: 'Waitlisted',
          fare: 900,
          seats: 6,
        },
        {
          passengerName: 'Shweta Iyer',
          journeyDate: '2024-07-01',
          trainName: 'Double Decker Express',
          status: 'Confirmed',
          fare: 1300,
          seats: 4,
        },
        {
          passengerName: 'Ravi Menon',
          journeyDate: '2024-08-14',
          trainName: 'Garib Rath Express',
          status: 'RAC',
          fare: 950,
          seats: 9,
        },
        {
          passengerName: 'Vikram Joshi',
          journeyDate: '2024-09-23',
          trainName: 'Jan Shatabdi Express',
          status: 'Confirmed',
          fare: 1400,
          seats: 1,
        },
        {
          passengerName: 'Neha Khanna',
          journeyDate: '2024-10-09',
          trainName: 'Sampark Kranti Express',
          status: 'Waitlisted',
          fare: 850,
          seats: 8,
        },
        {
          passengerName: 'Krishna Reddy',
          journeyDate: '2024-11-28',
          trainName: 'Vande Bharat Express',
          status: 'Confirmed',
          fare: 1600,
          seats: 3,
        },
        {
          passengerName: 'Senjuti Bera',
          journeyDate: '2024-12-10',
          trainName: 'Rajya Rani Express',
          status: 'RAC',
          fare: 1000,
          seats: 7,
        },
        {
            passengerName: 'Kiran Kumar',
            journeyDate: '2024-01-22',
            trainName: 'Vivek Express',
            status: 'Confirmed',
            fare: 1100,
            seats: 6,
          },
          {
            passengerName: 'Ananya Patel',
            journeyDate: '2024-02-14',
            trainName: 'Purushottam Express',
            status: 'Waitlisted',
            fare: 900,
            seats: 4,
          },
          {
            passengerName: 'Vikrant Singh',
            journeyDate: '2024-03-08',
            trainName: 'Pushpak Express',
            status: 'Confirmed',
            fare: 1300,
            seats: 3,
          },
          {
            passengerName: 'Mira Kapoor',
            journeyDate: '2024-04-30',
            trainName: 'Yeshvantpur Express',
            status: 'RAC',
            fare: 1000,
            seats: 8,
          },
          {
            passengerName: 'Aryan Gupta',
            journeyDate: '2024-05-17',
            trainName: 'Navjeevan Express',
            status: 'Confirmed',
            fare: 1200,
            seats: 5,
          },
          {
            passengerName: 'Priya Deshmukh',
            journeyDate: '2024-06-05',
            trainName: 'Ganga Sagar Express',
            status: 'Waitlisted',
            fare: 950,
            seats: 9,
          },
          {
            passengerName: 'Rajat Verma',
            journeyDate: '2024-07-19',
            trainName: 'Deccan Queen',
            status: 'Confirmed',
            fare: 1400,
            seats: 2,
          },
          {
            passengerName: 'Neha Sharma',
            journeyDate: '2024-08-03',
            trainName: 'Jhelum Express',
            status: 'RAC',
            fare: 1050,
            seats: 7,
          },
        // Add more dummy details as needed
      ];

      const validatePNRNumber = (pnr) => {
        const pnrRegex = /^\d{10}$/;
        return pnrRegex.test(pnr);
      };
    
      const handleCheckClick = () => {
        // Validate PNR number
        if (!validatePNRNumber(pnrNumber)) {
          setValidationError('Please enter a valid 10-digit PNR number');
          return;
        }
    
        // Clear validation error if it was previously set
        setValidationError('');
    
        const randomIndex = Math.floor(Math.random() * dummyPNRDetailsArray.length);
        const randomPNRDetails = dummyPNRDetailsArray[randomIndex];
    
        setPNRDetails(randomPNRDetails);
      };

  return (
    <div style={{ backgroundImage: 'url("https://wallpaperaccess.com/full/3850768.jpg")', backgroundSize: 'cover', backgroundPosition: 'center', width: '100%', height: '1000px' }}>
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

    <div className="pnr-enquiry-container">
        <h1 style={{ fontFamily: 'Imprint MT Shadow', fontWeight: 'bold' }}>PNR Enquiry</h1>
        <div className="input-container">
          <label>Enter PNR Number:</label>
          <input
            type="text"
            value={pnrNumber}
            onChange={(e) => setPNRNumber(e.target.value)}
          />

        {validationError && (
          <p style={{ color: 'red', marginTop: '10px' }}>{validationError}</p>
        )}

        </div>

        <button onClick={handleCheckClick}>Check</button>

      {pnrDetails && (
        <div className="pnr-details-container">
          <h2>PNR Details</h2>
          <p><strong>Passenger Name:</strong> {pnrDetails.passengerName}</p>
          <p><strong>Journey Date:</strong> {pnrDetails.journeyDate}</p>
          <p><strong>Train Name:</strong> {pnrDetails.trainName}</p>
          <p><strong>Status:</strong> {pnrDetails.status}</p>
          <p><strong>Fare:</strong> ₹{pnrDetails.fare}/- </p>
          <p><strong>Seats:</strong> {pnrDetails.seats}</p>
        </div>
      )}

      <style jsx>{`
        .pnr-enquiry-container {
          max-width: 500px;
          margin: auto;
          padding: 20px;
          text-align: center;
          box-shadow: rgba(6, 24, 44, 0.4) 0px 0px 0px 2px, rgba(6, 24, 44, 0.65) 0px 4px 6px -1px, rgba(255, 255, 255, 0.08) 0px 1px 0px inset;
          margin-top: 100px;
          margin-bottom: 100px;
        }

        .input-container {
          margin: 50px 0;
        }

        label {
          display: block;
          margin-bottom: 5px;
        }

        input {
          width: 90%;
          padding: 8px;
          box-sizing: border-box;
        }

        button {
          background-color: #4caf50;
          color: white;
          padding: 10px 45px;
          font-size: 16px;
          cursor: pointer;
        }

        .pnr-details-container {
          margin-top: 20px;
          border: 1px solid #ddd;
          padding: 10px;
          text-align: left;
          box-shadow: rgba(255, 255, 255, 0.2) 0px 0px 0px 1px inset, rgba(0, 0, 0, 0.9) 0px 0px 0px 1px;
        }

        h2 {
          margin-bottom: 10px;
          font-family: 'Candara';
          font-weight: bold;
          text-decoration: underline;
        }

        p {
          margin: 5px 0;
          font-family: 'Cosmic Sans MS';
        }
      `}</style>

      </div>
      <Footer />
      <BackToTopButton />
    </div>
  );
};

export default Pnrenquiry;
