import React, { useState } from 'react';
import styled from 'styled-components';
import { NavLink, Link } from 'react-router-dom';
import Footer from './Footer';
import BackToTopButton from './BackToTopButton';
import { faPhone, faEnvelope, faMapMarkerAlt, faComment, faAddressBook, faHandshake, faLink } from '@fortawesome/free-solid-svg-icons';
import { faFacebook, faYoutube, faTwitter, faInstagram, faTelegram, faLinkedin, faTumblr, faPinterest, faGooglePlay } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import emailjs from 'emailjs-com';

const ContactHeader = styled.h1`
  text-align: center;
  margin-top: 20px;
  font-family: STENCIL;
  font-weight: bold;
`;

const SubHeader = styled.h2`
  text-align: center;
  margin-top: 40px;
  font-family: Book Antiqua;
  font-weight: bold;
  background-image: url('https://images.pexels.com/photos/7130560/pexels-photo-7130560.jpeg?auto=compress&cs=tinysrgb&w=600');
  padding: 30px 0;
  background-size: cover;
`;

const ContactContainer = styled.div`
  display: flex;
  justify-content: space-around;
  margin-top: 40px;
`;

const ContactDetails = styled.div`
  flex: 1;
  padding: 20px;
  border: 1px solid #ddd;
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  margin-right: 20px;
  margin-left: 50px;
  margin-top: 30px;
  margin-bottom: 50px;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  background-image: url('https://images.pexels.com/photos/6847584/pexels-photo-6847584.jpeg?auto=compress&cs=tinysrgb&w=600');
  

  h1 {
    font-family: 'Times New Roman';
    font-size: 35px;
    font-weight: bold;
    margin-bottom: 20px;
    margin-top: 24px;
  }

  .contact-info {
    margin-bottom: 20px;
    font-size: 18px;

    .icon {
      margin-right: 10px;
    }

    a {
      color: #007bff;
      text-decoration: none;
    }
  }

  h3 {
    font-family: 'Times New Roman';
    font-size: 34px;
    font-weight: bold;
    margin-top: 20px;
  }

  .social-link {
    color: #3F1D38; /* Default color for social links */
    font-size: 35px;
    text-decoration: none;
    transition: transform 0.3s ease, color 0.3s ease; /* Add transition for smooth effects */

    &:nth-child(1) {
      color: #3b5998; /* Facebook Blue */
    }

    &:nth-child(2) {
        color: #1da1f2; /* YouTube Red */
    }

    &:nth-child(3) {
        color: #bc2a8d; /* Twitter Blue */
    }

    &:nth-child(4) {
        color: #0077b5; /* Instagram Purple */
    }

    &:nth-child(5) {
      color: #0088cc; /* Telegram Blue */
    }

    &:nth-child(6) {
        color: #c4302b; /* LinkedIn Blue */
    }

    &:hover {
      transform: scale(1.2); /* Add a slight scale effect on hover */
      color: #5e2bff; /* Change the color on hover to your preferred color */
    }
  }

  .social-links {
    display: flex;
    gap: 20px;
    margin-top: 10px;
  }
`;

const ContactFormContainer = styled.div`
  flex: 1;
  padding: 50px;
  border: 1px solid #ddd;
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  margin-left: 20px;
  margin-right: 50px;
  margin-top: 30px;
  margin-bottom: 50px;
  background-image: url('https://images.pexels.com/photos/7130555/pexels-photo-7130555.jpeg?auto=compress&cs=tinysrgb&w=600');
  background-size: cover; // Add this property for better background image handling
`;

const ContactForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const FormInput = styled.input`
  width: 80%; /* Adjust the width as needed */
  margin-bottom: 10px;
  padding: 8px;
  font-size: 14px;
  border: 1px solid #ddd;
  border-radius: 4px;
`;

const FormTextArea = styled.textarea`
  width: 80%; /* Adjust the width as needed */
  margin-bottom: 10px;
  padding: 8px;
  font-size: 14px;
  border: 1px solid #ddd;
  border-radius: 4px;
`;

const SubmitButton = styled.button`
  width: 50%;
  padding: 10px;
  background-color: #54E346;
  color: #fff;
  border: none;
  cursor: pointer;
  font-size: 16px;
  border-radius: 4px;
  margin-top: 15px;

  &:hover {
    background-color: #218838;
  }
`;

const Notification = styled.div`
  margin-top: 20px;
  text-align: center;
`;

const ContactPage = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const templateParams = {
        name: e.target.name.value,
        phone: e.target.phone.value,
        email: e.target.email.value,
        subject: e.target.subject.value,
        message: e.target.message.value,
      };

      // Replace 'YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', 'YOUR_USER_ID' with actual values
      await emailjs.send(
        'service_l5b8mb5',
        'template_nw4r9jd',
        templateParams,
        'YuBm0dRsoYMu_zHD-'
      );

      toast.success('Submission Successful!', {
        position: 'top-right',
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
      });

      setIsSubmitted(true);
    } catch (error) {
      console.error('Error sending email:', error);
      toast.error('Error submitting form. Please try again later.');
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

      <ContactHeader>Contact Us</ContactHeader>
      <SubHeader>Let's Start a Conversation <FontAwesomeIcon icon={faComment} /></SubHeader>
      <ContactContainer>
      <ContactDetails>
      <h1 style={{ textAlign: 'center', fontFamily: 'Times New Roman', fontSize: '35px', fontWeight: 'bold' }}>Reach Out To Us <FontAwesomeIcon icon={faHandshake} /></h1><br />
  <div className="contact-info">
            <FontAwesomeIcon icon={faPhone} className="icon" />  <span style={{ fontFamily: 'Comic Sans MS' }}>Call us at</span> : <br /><a href="tel:+91 9876543210">+91 9876543210</a>
          </div>
          <div className="contact-info"><br />
            <FontAwesomeIcon icon={faEnvelope} className="icon" />  <span style={{ fontFamily: 'Comic Sans MS' }}>A Quick Mail</span> : <br /><a href="mailto:shreya.kundu.mar30@gmail.com">railgaadijourneys@gmail.com</a>
          </div>
          <div className="contact-info"><br />
            <FontAwesomeIcon icon={faMapMarkerAlt} className="icon" />  <span style={{ fontFamily: 'Comic Sans MS' }}>Visit Us At</span> : <br />1010 Avenue, Garia, Kolkata - 700084
          </div>
        <br />
  <h3 style={{ textAlign: 'center', fontFamily: 'Times New Roman', fontSize: '34px', fontWeight: 'bold' }}>Connect With Us <FontAwesomeIcon icon={faLink} /></h3><br />
  <div className="social-links">
  <a href="#" className="social-link facebook" target="_blank" rel="noopener noreferrer">
    <i className="fab fa-facebook"></i>
  </a>
  <a href="#" className="social-link twitter" target="_blank" rel="noopener noreferrer">
    <i className="fab fa-twitter"></i>
  </a>
  <a href="#" className="social-link instagram" target="_blank" rel="noopener noreferrer">
    <i className="fab fa-instagram"></i>
  </a>
  <a href="#" className="social-link linkedin" target="_blank" rel="noopener noreferrer">
    <i className="fab fa-linkedin"></i>
  </a>
  <a href="#" className="social-link telegram" target="_blank" rel="noopener noreferrer">
    <i className="fab fa-telegram"></i>
  </a>
  <a href="#" className="social-link youtube" target="_blank" rel="noopener noreferrer">
    <i className="fab fa-youtube"></i>
  </a>
  {/* Add more social links as needed */}
</div>
</ContactDetails>
        <ContactFormContainer>
          <h1>Contact Form <FontAwesomeIcon icon={faAddressBook} /></h1>
          <p>Have a question or need assistance? Drop us a message using the contact form below, and our team will get back to you promptly. Your queries matter to us, and we're here to ensure your concerns are addressed with care.</p>

          <ContactForm onSubmit={handleSubmit}>
            <FormInput type="text" name="name" placeholder="Your Name" required />
            <FormInput type="tel" name="phone" placeholder="Your Contact Number" required />
            <FormInput type="email" name="email" placeholder="Your Email Address" required />
            <FormInput type="text" name="subject" placeholder="Subject" required />
            <FormTextArea name="message" rows="4" placeholder="Your Message or Query" required />
            <SubmitButton type="submit">Submit</SubmitButton>
          </ContactForm>
        </ContactFormContainer>
        <ToastContainer position="top-right" autoClose={3000} hideProgressBar={false} newestOnTop={false} closeOnClick pauseOnFocusLoss draggable pauseOnHover />
      </ContactContainer>
      <Footer />
      <BackToTopButton />
    </div>
  );
};

export default ContactPage;

