import React from 'react';
import styled from 'styled-components';

const FooterSection = styled.footer`
  background: #000000;
  color: #fff;
  padding: 20px 0;
`;

const FooterContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  flex-wrap: wrap;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
`;

const LeftSection = styled.div`
  flex: 0 0 200px;
  max-width: 500px;
  margin-bottom: 20px;
  margin-left: -100px;
`;

const Logo = styled.img`
  max-width: 90%;
  height: auto;
`;

const Description = styled.p`
  margin-top: 20px;
  color: #7e7e7e;
  font-size: 16.5px;
  line-height: 1.5;
`;

const ContactSection = styled.div`
  flex: 1 1 300px;
  max-width: 400px;
  margin-bottom: 50px;
  margin-top: 70px;
  margin-right: -250px;
`;

const ConnectHeading = styled.h4`
  font-size: 27px;
  margin-bottom: 10px;
  font-family: Times New Roman;
`;

const ContactDetails = styled.div`
  color: #7e7e7e;
`;

const ContactInfo = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 10px;
`;

const Icon = styled.i`
  font-size: 24px;
  margin-right: 10px;
`;

const EmailLink = styled.a`
  color: #7e7e7e;
  text-decoration: none;

  &:hover {
    color: #007bff;
  }
`;

const PhoneNumberLink = styled.a`
  color: #7e7e7e;
  text-decoration: none;

  &:hover {
    color: #007bff;
  }
`;

const UsefulLinksSection = styled.div`
  flex: 1 1 300px;
  max-width: 300px;
  margin-bottom: 20px;
  margin-top: 70px;
  margin-right: -200px;
`;

const LinksHeading = styled.h4`
  font-size: 27px;
  margin-bottom: 10px;
  font-family: Times New Roman;
`;

const LinksList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;

const LinkItem = styled.li`
  margin-bottom: 8px;
`;


const CopyrightSection = styled.div`
  margin-top: 50px;
  text-align: center;
`;

const pages = [
  { label: 'Home', path: '/' },
  { label: 'Contact Us', path: '/Contactus' },
  { label: 'Services', path: '/Services' },
  { label: 'Terms & Conditions', path: '/terms' },
  { label: 'About Us', path: '/Aboutus' },
];

const Footer = () => {
  return (
    <FooterSection>
      <div className="container">
        <FooterContainer>
          <LeftSection>
            <Logo src="/img/leftlogo.png" alt="Logo" />
            <Description>
              Embark on a journey with RAILगाड़ी – Where Tracks Meet Adventures. Explore seamless connectivity, exceptional service, and the joy of travel, all in one iconic emblem.
            </Description>
          </LeftSection>
          <ContactSection>
            <ConnectHeading>Connect with Us</ConnectHeading>
            <br />
            <ContactDetails>
              <ContactInfo>
                <Icon className="fas fa-map-marker-alt"></Icon>
                <p>1010 Avenue, Garia, Kolkata - 700084</p>
              </ContactInfo>
              <br />
              <ContactInfo>
                <Icon className="fas fa-envelope"></Icon>
                <EmailLink href="mailto:shreya.kundu.mar30@gmail.com">railgaadijourneys@gmail.com</EmailLink>
              </ContactInfo>
              <br />
              <ContactInfo>
                <Icon className="fas fa-phone-alt"></Icon>
                <PhoneNumberLink href="tel:+9876543210">+91 9876543210</PhoneNumberLink>
              </ContactInfo>
            </ContactDetails>
          </ContactSection>
          <UsefulLinksSection>
            <LinksHeading>Useful Links</LinksHeading>
            <span className="animate-border border-black"></span>
            <br />
            <LinksList>
              {pages.map((page) => (
                <LinkItem key={page.label}>
                  <a href={page.path}>{page.label}</a>
                </LinkItem>
              ))}
            </LinksList>
          </UsefulLinksSection>
        </FooterContainer>
      </div>
      <CopyrightSection>
        <p>&copy; {new Date().getFullYear()} RAILगाड़ी. Connecting Journeys, Enriching Experiences. All Rights Reserved.</p>
      </CopyrightSection>
    </FooterSection>
  );
};

export default Footer;
