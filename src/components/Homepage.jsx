// Header.js
import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { faPlane, faBed, faLineChart, faTrain, faSubway, faSuitcaseRolling, faUtensils, faImages, faBus, faMountainSun, faCircleDown, faArrowDown } from '@fortawesome/free-solid-svg-icons';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import BackToTopButton from './BackToTopButton';
import Footer from './Footer';
import './homepage.css';

// ContentItem component
library.add(fab);
const ContentItem = ({ iconClass, link }) => {
  const handleRedirect = (url) => {
    window.open(url, '_blank');
  };

  return (
    <div className="content-item">
      <div className="content-icon-circle" onClick={() => handleRedirect(link)}>
        <FontAwesomeIcon icon={iconClass} className="content-icon" />
      </div>
    </div>
  );
};

const Homepage = () => {
  const [email, setEmail] = useState('');

  const handleSubscribe = () => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!email || !emailRegex.test(email)) {
      toast.error('Please enter a valid email address.');
      return;
    }

    if (email.trim() === '') {
      toast.error('Please enter your email address');
      return;
    }

    // Save the email to localStorage
    const subscribedEmails = JSON.parse(localStorage.getItem('subscribedEmails')) || [];
    if (subscribedEmails.includes(email)) {
      toast.error('You are already subscribed with this email');
      return;
    }

    subscribedEmails.push(email);
    localStorage.setItem('subscribedEmails', JSON.stringify(subscribedEmails));

    // Display success notification within the subscription section
    toast.success('Successfully subscribed to Railगाड़ी newsletter');

    // Reset the email input
    setEmail('');
  };
  
  const handleReadMore = (url) => {
    window.open(url, '_blank');
  };

  return (
    <>
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

      <div className="train-row">
        <div className="train-part">
          <img src="https://assets.thehansindia.com/h-upload/2022/05/15/1292284-train.jpg" alt="rail" />
        </div>
        <div className="train-part">
          <img src="https://png.pngtree.com/thumb_back/fh260/background/20230425/pngtree-old-train-engine-with-steam-coming-from-an-engine-image_2510812.jpg" alt="rail1" />
        </div>
        <div className="train-part">
          <img src="https://www.hindustantimes.com/ht-img/img/2023/02/12/1600x900/PTI02-09-2023-000257B-0_1676186222776_1676186222776_1676186251050_1676186251050.jpg" alt="rail2" />
        </div>
      </div>

      <div className="content-row">
        <h2 className="content-heading">Have You Not Found The Right One ??</h2>
        <p className="content-text">
          Find a Service Suitable for You Here <FontAwesomeIcon icon={faArrowDown} bounce />
          <i className="fa-solid fa-circle-down"></i>
        </p>
      </div>

      <div className="content-row">
        <div className="content-icons">
          <ContentItem
            iconClass={faPlane}
            label="Flights"
            link="https://www.air.irctc.co.in/"
          />
          <ContentItem
            iconClass={faBed}
            label="Hotels"
            link="https://hotel.irctctourism.com/hotel"
          />
          <ContentItem
            iconClass={faLineChart}
            label="Rail Drishti"
            link="https://raildrishti.indianrailways.gov.in/raildrishti/raildrishtiv3/"
          />
          <ContentItem
            iconClass={faUtensils}
            label="E-Catering"
            link="https://www.ecatering.irctc.co.in/"
          />
          <ContentItem
            iconClass={faBus}
            label="Buses"
            link="https://www.bus.irctc.co.in/home"
          />
          <ContentItem
            iconClass={faSuitcaseRolling}
            label="Tour Packages"
            link="https://www.irctctourism.com/tourpacakage_search?searchKey=&tagType=&travelType=&category="
          />
        </div>
      </div>
      <div className="content-row">
        <div className="content-icons">
          <ContentItem
            iconClass={faTrain}
            label="Tourist Train"
            link="https://www.irctctourism.com/bharatgaurav"
          />
          <ContentItem
            iconClass={faMountainSun}
            label="Hill Railways"
            link="https://www.irctctourism.com/gallery/"
          />
          <ContentItem
            iconClass={faSubway}
            label= "Charter Train"
            link="https://www.ftr.irctc.co.in/ftr/"
          />
          <ContentItem
            iconClass={faImages}
            label="Gallery"
            link="https://www.irctctourism.com/gallery/"
          />
        </div>
      </div>
      <div className="holiday-section">
        <h2 className="holiday-heading">Looking For HOLIDAY PACKAGES ?? Here You Go  <FontAwesomeIcon icon={faArrowDown} bounce />
        </h2>
        <div className="holiday-cards">
          <div className="holiday-card">
            <img src="https://cdn.zeebiz.com/hindi/sites/default/files/styles/zeebiz_850x478/public/2023/02/09/124505-maharaja-express-source-maharajascom.png" alt="maha" />
            <h3 className="place-name">Maharaja's Express</h3>
            <p className="place-description">Redefining Royalty, Luxury and Comfort, Maharajas' express takes you on a sojourn to the era of bygone stately splendour of princely states. Sylvan furnishings, elegant ambience and modern amenities are amalgamated for an “Experience Unsurpassed”. It has been a winner of “World’s Leading Luxury train” by World Travel Awards consecutively for last six years.</p>
            <button className="read-more-button" onClick={() => handleReadMore('https://www.the-maharajas.com/')}>Read More</button>
          </div>
          <div className="holiday-card">
            <img src="https://sandpebblestours.com/wp-content/uploads/2018/07/world_tour.jpg" alt="bali" />
            <h3 className="place-name">International Packages</h3>
            <p className="place-description">Best deals in International Holiday packages, handpicked by IRCTC, for Thailand, Dubai, Sri Lanka, Hong Kong, China, Macau, Bhutan, Nepal, U.K., Europe, USA, Australia etc. The packages are inclusive of sightseeing, meals, visa charges and overseas medical insurance to give you a hassle-free and memorable experience.</p>
            <button className="read-more-button" onClick={() => handleReadMore('https://www.irctctourism.com/')}>Read More</button>
          </div>
          <div className="holiday-card">
            <img src="https://travelbizmonitor.com/wp-content/uploads/2021/08/Domestic-tour.jpg" alt="var" />
            <h3 className="place-name">Domestic Air Packages</h3>
            <p className="place-description">Be it the spiritual devotee seeking blessings of Tirupati, Shirdi or Mata Vaishno Devi or the leisure traveller wanting to relish the Blue mountains of North East, Sand-dunes of Rajasthan, Hamlets of Ladakh, Wonders of Himalayas, Serene lakes or Picturesque Islands, IRCTC has it all. Discover India through IRCTC!</p>
            <button className="read-more-button" onClick={() => handleReadMore('https://www.irctctourism.com/')}>Read More</button>
          </div>
          <div className="holiday-card">
            <img src="https://i0.wp.com/www.punenow.com/wp-content/uploads/2023/05/Next-Bharat-Gaurav-train-from-Pune.jpg?fit=1024%2C576&ssl=1" alt="bharat1" />
            <h3 className="place-name">Bharat Gaurav Tourist Train</h3>
            <p className="place-description">IRCTC operates Bharat Gaurav Tourist Train having AC III-Tier accommodation on train specially designed to promote domestic tourism in India. This train runs on various theme based circuits covering pilgrimage and heritage destinations in its itinerary on a 5 days to 20 days trip and showcase India’s rich cultural heritage.</p>
            <button className="read-more-button" onClick={() => handleReadMore('https://www.irctctourism.com/bharatgaurav')}>Read More</button>
          </div>
          <div className="holiday-card">
            <img src="https://cabsrental.in/wp-content/uploads/2021/02/South-India-Tour-Packages.png" alt="tour" />
            <h3 className="place-name">Rail Tour Packages</h3>
            <p className="place-description">IRCTC offers Exclusive Rail tour packages with confirmed train tickets, sight-seeing and meals for enchanting Nilgiri Mountains, Darjeeling, Kullu Manali, Kashmir, Gangtok or divine tours of Mata Vaishno Devi, Rameswaram, Madurai, Shirdi, Tirupati etc. Holiday packages/ Land packages to these destinations are also available.</p>
            <button className="read-more-button" onClick={() => handleReadMore('https://www.irctctourism.com/')}>Read More</button>
          </div>
        </div>
    </div>
    <div className="subscribe-container">
        <div className="subscribe-section">
          <h2 className="subscribe-heading" style={{ fontWeight: 'bold' }}>
            OnTrack Insights : Elevate Your Rail Journey with RAILगाड़ी
          </h2>
          <br />
          <p style={{ fontSize: '20px' }}>Subscribe to our newsletter for the latest updates, news, and more!</p>
          <div className="subscribe-form">
            <input
              type="email"
              placeholder="Enter Your Email Address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <button onClick={handleSubscribe}>Subscribe <i className="fab fa-telegram-plane"></i>
            </button>
          </div>
        </div>
        <img
          className="subscribe-image"
          src="https://cdn.pixabay.com/animation/2023/02/07/13/30/13-30-08-292_512.gif"
          alt="Subscribe Banner"
        />
        
        {/* Toast container for notifications within the subscription section */}
        <ToastContainer
          position="top-right"
          autoClose={3000}
          containerId="subscribe-toast-container" // specify the container ID
        />
      </div>
    </div>
    <div className="social-media-section">
        <h2 className="social-media-heading">Get Connected with Us on Social Networks</h2>
        <div className="social-media-icons">
          {/* Facebook */}
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={['fab', 'facebook']} />
          </a>

          {/* Youtube */}
          <a href="https://youtube.com" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={['fab', 'youtube']} />
          </a>

          {/* Twitter */}
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={['fab', 'twitter']} />
          </a>

          {/* Instagram */}
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={['fab', 'instagram']} />
          </a>

          {/* Telegram */}
          <a href="https://t.me" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={['fab', 'telegram']} />
          </a>

          {/* Linkedin */}
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={['fab', 'linkedin']} />
          </a>

          {/* Tumblr */}
          <a href="https://tumblr.com" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={['fab', 'tumblr']} />
          </a>

          {/* Pinterest */}
          <a href="https://pinterest.com" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={['fab', 'pinterest']} />
          </a>

          {/* Google Play */}
          <a href="https://play.google.com" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={['fab', 'google-play']} />
          </a>
        </div>
      </div>
    <Footer />
    <BackToTopButton />
    </>
  );
};

export default Homepage;
