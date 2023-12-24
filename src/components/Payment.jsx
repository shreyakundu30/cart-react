import React, { useState } from 'react';
import styled from 'styled-components';
import CreditCardPayment from './CreditCardPayment';
import DebitCardPayment from './DebitCardPayment';
import NetBankingPayment from './NetBankingPayment';
import AutoPayPayment from './AutoPayPayment';
import { NavLink, Link } from 'react-router-dom';
import Footer from './Footer';
import BackToTopButton from './BackToTopButton';

const PaymentContainer = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 20px;
`;

const PaymentSection = styled.div`
  width: 30%;
  padding: 20px;
  border: 1px solid #ddd;
`;

const PaymentOptions = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const PaymentMethod = styled.button`
  margin-bottom: 10px;
  padding: 18px;
  cursor: pointer;
  width: 350px;
  font-size: 24px;
  font-family: 'Book Antiqua';
  font-weight: bold;
  background-image: url('https://assets-global.website-files.com/614716f50b4f49202fdd0087/616949393cf90643c1403605_6423.png');
  background-size: cover;
`;

const PaymentContent = styled.div`
  border: 1px solid #ddd;
  padding: 20px;
`;

const MethodHeader = styled.h3`
  font-family: 'Times New Roman';
  text-align: center;
  font-weight: bold;
  font-size: 35px;
  background-image: url('https://img.freepik.com/free-vector/dark-gradient-background-with-copy-space_53876-99548.jpg');
  background-size: cover; // Adjust based on your needs
  color: white; // Set text color to ensure readability
  padding: 25px;
`;

const BillHeader = styled.h3`
  font-family: 'Times New Roman';
  text-align: center;
  font-weight: bold;
  font-size: 35px;
  background-image: url('https://img.freepik.com/free-vector/dark-gradient-background-with-copy-space_53876-99548.jpg');
  background-size: cover; // Adjust based on your needs
  color: white; // Set text color to ensure readability
  padding: 25px;
`;

const DetailHeader = styled.h3`
  font-family: 'Times New Roman';
  text-align: center;
  font-weight: bold;
  font-size: 35px;
  background-image: url('https://img.freepik.com/free-vector/dark-gradient-background-with-copy-space_53876-99548.jpg');
  background-size: cover; // Adjust based on your needs
  color: white; // Set text color to ensure readability
  padding: 25px;
`;

const AmountBillSection = styled.div`
  p {
    margin-bottom: 10px;
    font-size: 16.5px;
  }

  label {
    display: block;
    margin-bottom: 5px;
  }

  input {
    margin-bottom: 10px;
    padding: 8px;
    width: 100%;
    border: 1px solid #ddd;
    border-radius: 4px;
  }
`;

const PaymentPage = () => {
  const [selectedMethod, setSelectedMethod] = useState(null);
  const [numberOfPassengers, setNumberOfPassengers] = useState('');
  const [amountPerSeat, setAmountPerSeat] = useState('');
  const [totalAmount, setTotalAmount] = useState(0);
  const [gstAmount, setGstAmount] = useState(0);
  const [grandTotal, setGrandTotal] = useState(0);

  const handlePaymentMethodClick = (method) => {
    setSelectedMethod(method);
  };

  const handlePassengerInputChange = (e) => {
    const passengers = parseInt(e.target.value, 10) || 1;
    setNumberOfPassengers(passengers);
    calculateTotalAmount(passengers, amountPerSeat);
  };

  const handleAmountPerSeatInputChange = (e) => {
    const amount = parseFloat(e.target.value) || 0;
    setAmountPerSeat(amount);
    calculateTotalAmount(numberOfPassengers, amount);
  };

  const calculateTotalAmount = (passengers, amountPerSeat) => {
    const total = passengers * amountPerSeat;
    const gst = 0.02 * total; // 10% GST
    const totalWithGst = total + gst;
    
    setTotalAmount(total);
    setGstAmount(gst);
    setGrandTotal(totalWithGst);
  };

  const renderPaymentContent = () => {
    switch (selectedMethod) {
      case 'creditCard':
        return <CreditCardPayment />;
      case 'debitCard':
        return <DebitCardPayment />;
      case 'netBanking':
        return <NetBankingPayment />;
      case 'autoPay':
        return <AutoPayPayment />;
      default:
        return null;
    }
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

    <PaymentContainer>
      <PaymentSection>
        <MethodHeader style={{ fontFamily: 'Times New Roman', textAlign: 'center', fontWeight: 'bold', fontSize: '35px' }}>Payment Methods</MethodHeader><br /><br />
        <PaymentOptions>
          <PaymentMethod onClick={() => handlePaymentMethodClick('creditCard')}>
            Credit Card
          </PaymentMethod><br /><br />
          <PaymentMethod onClick={() => handlePaymentMethodClick('debitCard')}>
            Debit Card
          </PaymentMethod><br /><br />
          <PaymentMethod onClick={() => handlePaymentMethodClick('netBanking')}>
            Net Banking
          </PaymentMethod><br /><br />
          <PaymentMethod onClick={() => handlePaymentMethodClick('autoPay')}>
            Auto Pay
          </PaymentMethod>
        </PaymentOptions>
      </PaymentSection>

      <PaymentSection>
        <DetailHeader style={{ fontFamily: 'Times New Roman', textAlign: 'center', fontWeight: 'bold', fontSize: '35px' }}>Payment Details</DetailHeader>
        <PaymentContent>
          <p style={{ fontFamily: 'Book Antiqua', fontSize: '17px', textAlign: 'center', fontWeight: 'bold'}}>👈 Click on your chosen method to the LEFT and enjoy a stress-free transaction  😊
          </p>
          {renderPaymentContent()}
        </PaymentContent>
      </PaymentSection>

      <PaymentSection>
          <BillHeader style={{ fontFamily: 'Times New Roman', textAlign: 'center', fontWeight: 'bold', fontSize: '35px' }}>Amount & Bill</BillHeader><br />
          <AmountBillSection style={{ backgroundImage: 'url("https://t4.ftcdn.net/jpg/03/10/16/27/360_F_310162798_6hWbaSFgDtWp4AhhaKPlTgAZUDL1c4UY.jpg")', backgroundSize: 'cover', padding: '65px' }}>
            <label htmlFor="numberOfPassengers">Number of Passengers:</label>
            <input
              type="number"
              id="numberOfPassengers"
              value={numberOfPassengers}
              onChange={handlePassengerInputChange}
            />

            <label htmlFor="amountPerSeat">Amount per Seat:</label>
            <input
              type="number"
              id="amountPerSeat"
              value={amountPerSeat}
              onChange={handleAmountPerSeatInputChange}
            />
            <br /><br /><br />
            <p>Sub-Total Amount : ₹{totalAmount}</p>
            <p>GST (2%) : ₹{gstAmount}</p>
            <p>Total Amount with GST : ₹{totalAmount + gstAmount}</p><br /><br />
            <p style={{ fontWeight: 'bold', fontSize: '21px' }}>Grand Total (To be Paid) : ₹{grandTotal}</p>
          </AmountBillSection>
        </PaymentSection>
    </PaymentContainer>
    
    <Footer />
    <BackToTopButton />
    </div>
  );
};

export default PaymentPage;
