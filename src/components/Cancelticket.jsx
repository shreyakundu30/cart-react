import React, { useState } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Footer from './Footer';
import BackToTopButton from './BackToTopButton';
import { faFileSignature, faMagnifyingGlass, faRectangleList } from '@fortawesome/free-solid-svg-icons';

const Cancelticket = () => {
  const [transactionType, setTransactionType] = useState('');
  const [pnrNumber, setPNRNumber] = useState('');
  const [trainNumber, setTrainNumber] = useState('');
  const [captcha, setCaptcha] = useState('');
  const [isCheckboxChecked, setIsCheckboxChecked] = useState(false);

  // Function to generate random captcha
  const generateRandomCaptcha = () => {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    const captchaLength = 6;
    let captcha = '';
    for (let i = 0; i < captchaLength; i++) {
      const randomIndex = Math.floor(Math.random() * characters.length);
      captcha += characters.charAt(randomIndex);
    }
    setCaptcha(captcha);
  };

  // Function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    // Check if all fields are filled
    if (!transactionType || !pnrNumber || !trainNumber || !captcha || !isCheckboxChecked) {
      toast.error('Please complete all fields and check the checkbox.');
      return;
    }

    if (pnrNumber.length !== 10 || trainNumber.length !== 5) {
        toast.error('PNR number must be 10 digits, and train number must be 5 digits.');
        return;
    }

    if (!transactionType) {
        toast.error('Please select a transaction type.');
        return;
    }
    // Your logic for form submission goes here

    // Display success message
    toast.success('Ticket cancellation submitted successfully!');
  };

  // Function to handle form reset
  const handleReset = () => {
    setTransactionType('');
    setPNRNumber('');
    setTrainNumber('');
    setCaptcha('');
    setIsCheckboxChecked(false);
  };

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

    <div className="cancellation-page">
      <h1 style={{ fontFamily: 'Imprint MT Shadow', fontWeight: 'bold' }}>Ticket Cancellation</h1><br />

      {/* Container One: Ticket Cancellation Form */}
      <div className="wrapper">
        <h2 style={{ fontFamily: 'Times New Roman', fontWeight: 'bold', textAlign: 'center' }}>Ticket Cancellation Form <FontAwesomeIcon icon={faFileSignature} /></h2>
        <br />
        <p>Fill out the form below to initiate the ticket cancellation process.</p>
        
        <form onSubmit={handleSubmit}>
        <div className="form-group">
            <label>Transaction Type :</label>  <select
                value={transactionType}
                onChange={(e) => setTransactionType(e.target.value)}
                required
            >
                <option value="">  Select Type  </option>
                <option value="booking">Booking</option>
                <option value="cancellation">Cancellation</option>
                <option value="refund">Refund</option>
                <option value="reschedule">Reschedule</option>
                {/* Add more options as needed */}
            </select>
        </div>

          <div className="form-group">
            <label>PNR Number :</label>  <input
              type="text"
              value={pnrNumber}
              onChange={(e) => setPNRNumber(e.target.value)}
              required
            />
          </div>

          <div className="form-group">
            <label>Train Number :</label>  <input
              type="text"
              value={trainNumber}
              onChange={(e) => setTrainNumber(e.target.value)}
              required
            />
          </div>

          <div className="form-group">
            <label>Captcha :</label>  <input
              type="text"
              value={captcha}
              onChange={(e) => setCaptcha(e.target.value)}
              required
            />
            <button type="button" onClick={generateRandomCaptcha}>
            🔄
            </button>
          </div>

          <div className="form-group">
            <label>
              <input
                type="checkbox"
                checked={isCheckboxChecked}
                onChange={() => setIsCheckboxChecked(!isCheckboxChecked)}
              />  I have read cancellation procedure and its rule
            </label>
          </div>

          <div className="form-group">
            <button type="submit">Submit</button>
            <button type="button" onClick={handleReset}>
              Reset
            </button>
          </div>
        </form>
      </div>

      {/* Container Two: Image of a Ticket */}
      <div className="wrapper">
        <h2 style={{ fontFamily: 'Times New Roman', fontWeight: 'bold', textAlign: 'center' }}>Sample Ticket Reference <FontAwesomeIcon icon={faMagnifyingGlass} /></h2><br /><br />
        <img src="https://cdn.zeebiz.com/hindi/sites/default/files/2022/05/07/84770-pnr-number.jpg" alt="Ticket" />
      </div>

      {/* Container Three: Rules and Regulations */}
      <div className="wrapper larger-container">
  <h2 style={{ fontFamily: 'Times New Roman', fontWeight: 'bold', textAlign: 'center' }}>Rules and Regulations <FontAwesomeIcon icon={faRectangleList} /></h2>

  <p>
    Before proceeding with the ticket cancellation, please read and understand the following rules and regulations :-
  </p>

  <ol style={{ textAlign: 'justify', fontFamily: 'Book Antiqua' }}>
  <li>
    <strong>Cancellation Process:</strong> To cancel your ticket, follow these steps carefully. Visit our official website or contact our customer support for assistance. Note that cancellation fees may apply, and refunds are subject to the terms and conditions of your booking.
  </li>
  <li>
    <strong>PNR Number:</strong> Ensure that the PNR number entered is a 10-digit alphanumeric code. It is essential for the cancellation process.
  </li>
  <li>
    <strong>Train Number:</strong> The train number should consist of 5 digits. Please double-check the entered train number before submitting the cancellation request.
  </li>
  <li>
    <strong>Captcha Verification:</strong> Complete the captcha verification to ensure that you are a human and prevent misuse of the cancellation process.
  </li>
  <li>
    <strong>Checkbox Agreement:</strong> By checking the checkbox, you acknowledge that you have read and understood the cancellation procedure and its rules.
  </li>
</ol>


  {/* Add additional rules and information */}
</div>

      {/* Styles */}
      <style jsx>{`
        .cancellation-page {
          text-align: center;
          padding: 20px;
          background-image: url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQun45cHMi9NgnKOnlN7_Ew2w-bC6G8sWHKw&usqp=CAU');
        }

        .wrapper {
          max-width: 450px;
          margin: 20px;
          padding: 20px;
          border: 1px solid #ddd;
          box-shadow: rgba(6, 24, 44, 0.4) 0px 0px 0px 2px, rgba(6, 24, 44, 0.65) 0px 4px 6px -1px, rgba(255, 255, 255, 0.08) 0px 1px 0px inset;
          display: inline-block;
          vertical-align: top;
          text-align: justify;
        }

        .larger-container {
          max-width: 500px;
        }

        img {
          max-width: 100%;
          height: auto;
        }

        .form-group {
          margin-bottom: 15px;
        }

        button {
          margin-left: 90px;
          cursor: pointer;
        }
      `}</style>
    </div>

    <ToastContainer />
    <Footer />
    <BackToTopButton />
    </div>
  );
};

export default Cancelticket;
