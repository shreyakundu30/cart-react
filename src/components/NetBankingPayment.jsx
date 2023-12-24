import React, { useState } from 'react';
import styled from 'styled-components';

const NetBankingContainer = styled.div`
  max-width: 400px;
  margin: auto;
  padding: 20px;
  border: 1px solid #ddd;
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  background-image: url('https://media.istockphoto.com/id/1335914308/photo/autumn-background-orange-yellow-grunge-frame-vignette-gold-ombre-old-texture-abstract-marble.webp?b=1&s=170667a&w=0&k=20&c=RSLM8y_28o_3qBJrjULo6QGSvBQELcNb0OGbUhyYR0c=')
`;

const NetBankingHeader = styled.div`
  text-align: center;
  margin-bottom: 0px;
  font-family: 'Times New Roman';
  margin-top: 20px;
`;

const LogoContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr); /* Two columns */
  gap: 20px; /* Adjust the gap between buttons */
  align-items: center; /* Center-align buttons horizontally */
  margin-bottom: 20px;
  padding-top: 2%;
`;

const BankLogoButton = styled.button`
  border: none;
  background-color: transparent;
  cursor: pointer;
  margin: 10px auto; /* Add vertical margin to center buttons in the row */

  img {
    width: 75px;
    margin: 0 10px;
  }
`;


const SelectedBankText = styled.p`
  font-size: 20px;
  margin-top: 20px;
  text-align: center;
  text-decoration: underline;
  font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
`;

const PayButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 20px;
  padding-top: 3%;
`;

const PayButton = styled.button`
  padding: 5px 30px;
  font-size: 20px;
  font-weight: bold;
  background-color: #38E54D;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
`;

const NetBankingPayment = () => {
  const [selectedBank, setSelectedBank] = useState('');

  const handleBankSelection = (bankName) => {
    setSelectedBank(bankName);
  };

  const handlePay = () => {
    if (selectedBank) {
      // Define the official website URLs for each bank
      const bankWebsites = {
        'State Bank Of India': 'https://www.onlinesbi.sbi/',
        'HDFC Bank': 'https://www.hdfcbank.com/',
        'Axis Bank Of India': 'https://www.axisbank.com/',
        'ICICI Bank': 'https://www.icicibank.com/',
        'Bank Of Baroda': 'https://www.bankofbaroda.in/',
        'Kotak Mahindra Bank': 'https://www.kotak.com/',
        'Punjab National Bank': 'https://www.pnbindia.in/'
      };

      // Redirect to the selected bank's official website
      window.location.href = bankWebsites[selectedBank];
    }
  };

  return (
    <NetBankingContainer>
      <NetBankingHeader>
        <h2 style={{ fontFamily: 'Book Antiqua', fontSize: '29px', fontWeight: 'bold' }}>Paying via NetBanking</h2>
        <p>Please select the bank you want to use to pay for this transaction.</p>
      </NetBankingHeader>
      <LogoContainer>
        <BankLogoButton onClick={() => handleBankSelection('State Bank Of India')}>
          <img src="https://1000logos.net/wp-content/uploads/2018/03/SBI-Logo.png" alt="sbi" />
        </BankLogoButton>
        <BankLogoButton onClick={() => handleBankSelection('HDFC Bank')}>
          <img src="https://www.gurpreetsaluja.com/wp-content/uploads/2020/09/HDFC-LOGO.png" alt="hdfc" />
        </BankLogoButton>
        <BankLogoButton onClick={() => handleBankSelection('Axis Bank Of India')}>
          <img src="https://assets.stickpng.com/images/627cc46b1b2e263b45696a82.png" alt="axis" />
        </BankLogoButton>
        <BankLogoButton onClick={() => handleBankSelection('ICICI Bank')}>
          <img src="https://getvectorlogo.com/wp-content/uploads/2018/12/icici-bank-vector-logo.png" alt="icici" />
        </BankLogoButton>
        <BankLogoButton onClick={() => handleBankSelection('Bank Of Baroda')}>
          <img src="https://indoremirror.in/wp-content/uploads/2021/07/bank-of-baroda-logo-bob.png" alt="baroda" />
        </BankLogoButton>
        <BankLogoButton onClick={() => handleBankSelection('Kotak Mahindra Bank')}>
          <img src="https://pathfinderstraining.com/wp-content/uploads/2022/12/KOTAK-BANK-LOGO.jpg" alt="kotak" />
        </BankLogoButton>
        <BankLogoButton onClick={() => handleBankSelection('Punjab National Bank')}>
          <img src="https://upload.wikimedia.org/wikipedia/en/thumb/b/b2/Punjab_National_Bank_new_logo.svg/2560px-Punjab_National_Bank_new_logo.svg.png" alt="pnb" />
        </BankLogoButton>
        {/* Add buttons for more banks similarly */}
      </LogoContainer>
      {selectedBank && <SelectedBankText>{selectedBank} is Selected</SelectedBankText>}
      <PayButtonContainer>
        {selectedBank && (
          <PayButton onClick={handlePay}>
            Pay Now
          </PayButton>
        )}
      </PayButtonContainer>
    </NetBankingContainer>
  );
};

export default NetBankingPayment;
