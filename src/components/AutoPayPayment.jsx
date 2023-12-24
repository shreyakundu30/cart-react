import React, { useState } from 'react';
import styled from 'styled-components';

const AutoPayContainer = styled.div`
  max-width: 400px;
  margin: auto;
  padding: 20px;
  border: 1px solid #ddd;
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  background-image: url('https://cdn.dribbble.com/users/3091124/screenshots/6635553/green-lime-watercolor-texture-background_1083-171_1x.jpg?resize=400x300&vertical=center')
`;

const AutoPayHeader = styled.h3`
  font-family: 'Book Antiqua';
  font-size: 29px;
  font-weight: bold;
  text-align: center;
`;

const PaymentForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 20px;

  .form-group {
    margin-bottom: 15px;
    text-align: left;
    width: 300px;
  }

  label {
    font-size: 16px;
    margin-bottom: 5px;
    display: block;
  }

  input {
    width: 100%;
    padding: 10px;
    font-size: 14px;
    border: 1px solid #ddd;
    border-radius: 4px;
  }

  button {
    padding: 10px 20px;
    background-color: #007bff;
    color: #fff;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    font-size: 16px;

    &:hover {
      background-color: #0056b3;
    }
  }
`;const UPIPaymentLogos = styled.div`
display: flex;
justify-content: center;
margin-top: 20px;

img {
  width: 50px;
  margin: 0 10px;
}
`;

const AutoPayPayment = () => {
  const [upiId, setUpiId] = useState('');

  const handleFormSubmit = (e) => {
    e.preventDefault();
    redirectToUpiApp();
  };

  const redirectToUpiApp = () => {
    const url = `upi://pay?pa=${upiId}`;
    const isUpiAppInstalled = window.navigator.userAgent.includes('UPI');

    if (isUpiAppInstalled) {
      window.location.href = url;
    } else {
      alert('No UPI app found. Please install one.');
    }
  };

  const handleInputChange = (e) => {
    setUpiId(e.target.value);
  };

  return (
    <AutoPayContainer>
      <AutoPayHeader>Paying via AutoPay</AutoPayHeader>
      <UPIPaymentLogos>
        <img src="https://www.netmeds.com/images/cms/msite_-_paytm.png" alt="UPI Logo 1" />
        <img src="https://hindubabynames.info/wp-content/themes/hbn_download/download/banking-and-finance/google-pay-logo.png" alt="UPI Logo 2" />
        <img src="https://cdn.freelogovectors.net/wp-content/uploads/2023/11/phonepe_logo-freelogovectors.net_.png" alt="UPI Logo 3" />
        <img src="https://images.cnbctv18.com/wp-content/uploads/2018/11/MobiKwik.jpg?im=FitAndFill,width=1200,height=900" alt="UPI Logo 4" />
        <img src="https://upload.wikimedia.org/wikipedia/commons/9/9d/CRED-LOGO2.png" alt="UPI Logo 5" />
      </UPIPaymentLogos>
      <br />
      <p>Make your payment seamlessly with AutoPay. Enter your UPI ID and amount below to get started.</p>

      <PaymentForm onSubmit={handleFormSubmit}>
        <div className="form-group">
          <label htmlFor="upiId">UPI ID:</label>
          <input
            type="text"
            id="upiId"
            value={upiId}
            onChange={handleInputChange}
            placeholder="Enter UPI ID"
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="amount">Amount:</label>
          <input type="number" id="amount" />
        </div>
        <br />
        {/* Add more form fields as needed */}
        <button type="submit">Make Payment</button>
      </PaymentForm>
    </AutoPayContainer>
  );
};

export default AutoPayPayment;
