import React, { useState } from 'react';
import styled from 'styled-components';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const CreditCardContainer = styled.div`
  max-width: 400px;
  margin: auto;
  padding: 20px;
  border: 1px solid #ddd;
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  background-color: #fff;
  background-image: url('https://assets-global.website-files.com/5a9ee6416e90d20001b20038/64f58e8cf7b1f3b2c5723431_Edisons-broken-bulb.svg')
`;

const CreditCardHeader = styled.div`
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  margin-bottom: 20px;
  font-family: 'Times New Roman';
`;

const CreditCardLogo = styled.img`
  width: 50px;
  margin: 0 10px;
`;

const CreditCardForm = styled.form`
  display: flex;
  flex-direction: column;
`;

const CreditCardInput = styled.input`
  margin-bottom: 15px;
  padding: 10px;
  font-size: 13.5px;
  border: 1px solid #ddd;
  border-radius: 4px;
`;

const PaymentButton = styled.button`
  background-color: #F8DE22;
  color: black;
  padding: 10px;
  cursor: pointer;
  border: none;
  border-radius: 4px;
  font-size: 16px;
`;

const ResetButton = styled.button`
  background-color: #ccc;
  color: black;
  padding: 10px;
  cursor: pointer;
  border: none;
  border-radius: 4px;
  font-size: 16px;
  margin-top: 10px;
`;

const CreditCardPayment = () => {
  const [cardNumber, setCardNumber] = useState('');
  const [expirationMonth, setExpirationMonth] = useState('');
  const [expirationYear, setExpirationYear] = useState('');
  const [cvv, setCvv] = useState('');
  const [cardholderName, setCardholderName] = useState('');
  const [selectedCardType, setSelectedCardType] = useState('visa'); // Default card type

  const handlePayment = () => {
    // Basic card number validation (adjust based on your requirements)
    const isCardNumberValid =
      (selectedCardType === 'visa' && /^\d{16}$/.test(cardNumber)) ||
      (selectedCardType === 'mastercard' && (/^\d{16}$/.test(cardNumber) || /^\d{12}$/.test(cardNumber))) ||
      (selectedCardType === 'amex' && /^\d{15}$/.test(cardNumber));

      if (isCardNumberValid) {
        // Redirect to the next page or perform further actions
        toast.success('Payment successful!', {
          position: toast.POSITION.TOP_CENTER,
          autoClose: 3000, // Notification will close after 3000 milliseconds (3 seconds)
        });
      } else {
        alert('Invalid card number. Please check and try again.');
      }
    };

  const handleReset = () => {
    setCardNumber('');
    setExpirationMonth('');
    setExpirationYear('');
    setCvv('');
    setCardholderName('');
  };

  return (
    <CreditCardContainer>
      <CreditCardHeader>
        <h2 style={{ fontFamily: 'Book Antiqua', fontSize: '29px', fontWeight: 'bold' }}>Paying via Credit Card</h2>
        <CreditCardLogo
          src="https://www.thepridecircle.com/site/assets/files/65350/visa_brandmark_blue_rgb_72ppi.png"
          alt="Logo 1"
          onClick={() => setSelectedCardType('visa')}
        />
        <CreditCardLogo
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b7/MasterCard_Logo.svg/200px-MasterCard_Logo.svg.png"
          alt="Logo 2"
          onClick={() => setSelectedCardType('mastercard')}
        />
        <CreditCardLogo
          src="https://upload.wikimedia.org/wikipedia/commons/f/fa/American_Express_logo_%282018%29.svg"
          alt="Logo 3"
          onClick={() => setSelectedCardType('amex')}
        />
      </CreditCardHeader>

      <CreditCardForm>
        <CreditCardInput
          type="text"
          placeholder="Card Number"
          value={cardNumber}
          onChange={(e) => setCardNumber(e.target.value)}
        />
        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
          <CreditCardInput
            type="text"
            placeholder="Expiration Month"
            value={expirationMonth}
            onChange={(e) => setExpirationMonth(e.target.value)}
          />
          <CreditCardInput
            type="text"
            placeholder="Expiration Year"
            value={expirationYear}
            onChange={(e) => setExpirationYear(e.target.value)}
          />
        </div>
        <CreditCardInput
          type="text"
          placeholder="CVV/CVC"
          value={cvv}
          onChange={(e) => setCvv(e.target.value)}
        />
        <CreditCardInput
          type="text"
          placeholder="Cardholder Name"
          value={cardholderName}
          onChange={(e) => setCardholderName(e.target.value)}
        />

        <PaymentButton type="button" onClick={handlePayment}>
          Make Payment
        </PaymentButton>
        <ResetButton type="button" onClick={handleReset}>
          Reset
        </ResetButton>
      </CreditCardForm>
    </CreditCardContainer>
  );
};

export default CreditCardPayment;
