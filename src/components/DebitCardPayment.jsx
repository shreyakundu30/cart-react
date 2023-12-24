import React, { useState } from 'react';
import styled from 'styled-components';

const DebitCardContainer = styled.div`
  max-width: 400px;
  margin: auto;
  padding: 20px;
  border: 1px solid #ddd;
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  background-color: #fff;
  background-image: url('https://img.freepik.com/free-photo/vivid-blurred-colorful-wallpaper-background_58702-3798.jpg?size=626&ext=jpg')
`;

const DebitCardHeader = styled.div`
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  margin-bottom: 20px;
  font-family: 'Times New Roman';
`;

const DebitCardLogo = styled.img`
  width: 50px;
  margin: 0 10px;
`;

const DebitCardForm = styled.form`
  display: flex;
  flex-direction: column;
`;

const DebitCardInput = styled.input`
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

const DebitCardPayment = () => {
  const [cardNumber, setCardNumber] = useState('');
  const [expirationMonth, setExpirationMonth] = useState('');
  const [expirationYear, setExpirationYear] = useState('');
  const [cvv, setCvv] = useState('');
  const [cardholderName, setCardholderName] = useState('');

  const handlePayment = () => {
    // Basic card number validation (adjust based on your requirements)
    const isCardNumberValid = /^\d{16}$/.test(cardNumber);

    if (isCardNumberValid) {
      // Redirect to the next page or perform further actions
      console.log('Payment successful!');
    } else {
      alert('Invalid card number. Please check and try again.');
    }
  };

  return (
    <DebitCardContainer>
      <DebitCardHeader>
        <h2 style={{ fontFamily: 'Book Antiqua', fontSize: '29px', fontWeight: 'bold' }}>Paying via Debit Card</h2>
        {/* Add your Debit Card logos here */}
        <DebitCardLogo src="https://www.thepridecircle.com/site/assets/files/65350/visa_brandmark_blue_rgb_72ppi.png" alt="Debit Logo 1" />
        <DebitCardLogo src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d1/RuPay.svg/2560px-RuPay.svg.png" alt="Debit Logo 2" />
        <DebitCardLogo src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b7/MasterCard_Logo.svg/200px-MasterCard_Logo.svg.png" alt="Debit Logo 3" />
      </DebitCardHeader>

      <DebitCardForm>
        <DebitCardInput
          type="text"
          placeholder="Card Number"
          value={cardNumber}
          onChange={(e) => setCardNumber(e.target.value)}
        />
        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
          <DebitCardInput
            type="text"
            placeholder="Expiration Month"
            value={expirationMonth}
            onChange={(e) => setExpirationMonth(e.target.value)}
          />
          <DebitCardInput
            type="text"
            placeholder="Expiration Year"
            value={expirationYear}
            onChange={(e) => setExpirationYear(e.target.value)}
          />
        </div>
        <DebitCardInput
          type="text"
          placeholder="CVV"
          value={cvv}
          onChange={(e) => setCvv(e.target.value)}
        />
        <DebitCardInput
          type="text"
          placeholder="Cardholder Name"
          value={cardholderName}
          onChange={(e) => setCardholderName(e.target.value)}
        />

        <PaymentButton type="button" onClick={handlePayment}>
          Make Payment
        </PaymentButton>
        <ResetButton type="reset">Reset</ResetButton>
      </DebitCardForm>
    </DebitCardContainer>
  );
};

export default DebitCardPayment;
