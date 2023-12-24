import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { NavLink, Link } from 'react-router-dom';

const LoginPageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 40px;
  background-image: url('https://undsgn.com/wp-content/uploads/2018/04/ltotbngnzzu-uai-1600x900.jpg');
`;

const ContentWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  width: 100%;
`;

const SliderSection = styled.div`
  width: 410px; /* Adjust the width as needed */
  height: 610px; /* Adjust the height as needed */
  overflow: hidden;
  border-radius: 2px;
  margin-right: 20px; /* Adjust the margin as needed */
  border: 2px solid silver;
`;

const SliderImageContainer = styled.div`
  display: flex;
  /* transition: transform 1s ease-in-out; Remove this line */
  width: 100%; /* Ensure the container takes full width */
  height: 100%; /* Ensure the container takes full height */
`;

const SliderImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;


const LoginSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 1px;
  width: 450px;
  height: 610px;
  background-color: #000000;
  color: #fff;
  font-family: 'Book Antiqua', Times, serif;
  border: 2px solid silver;
`;

const Logo = styled.img`
  width: 140px; /* Adjust the width as needed */
  height: auto;
  margin-top: 3px;
`;

const WelcomeText = styled.p`
  margin-top: 10px;
  font-size: 18px;
`;

const LoginForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 20px;
`;

const FormInput = styled.input`
  margin: 10px 0;
  padding: 10px;
  width: 300px;
`;

const ShowPasswordCheckbox = styled.input`
  margin-right: 5px;
`;

const ShowPasswordLabel = styled.label`
  margin-left: 5px;
`;

const ForgotPasswordLink = styled.a`
  margin-top: 10px;
  text-decoration: underline;
  cursor: pointer;
`;

const SignInButton = styled.button`
  margin-top: 20px;
  padding: 10px;
  width: 150px;
  cursor: pointer;
`;

const HorizontalLine = styled.hr`
  width: 80%;
  margin: 20px 0;
  border: 1px solid silver; /* Add a border to the horizontal line */
`;

const CreateAccountText = styled.p`
  margin-top: 20px;
  cursor: pointer;
`;

const images = [
  'https://images.pexels.com/photos/2526935/pexels-photo-2526935.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
  'https://i.pinimg.com/736x/7c/1c/40/7c1c406e8120aa5617b8833054bbcde9.jpg',
  'https://images.unsplash.com/photo-1543967625-f24827a5fdb8?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGluZGlhbiUyMHJhaWx3YXl8ZW58MHx8MHx8fDA%3D',
  'https://images.unsplash.com/photo-1601999007938-f584b47324ac?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8aW5kaWFuJTIwcmFpbHdheXxlbnwwfHwwfHx8MA%3D%3D',
  'https://st2.indiarailinfo.com/kjfdsuiemjvcya0/0/8/1/6/601816/0/2.jpg',
  'https://wallpaperaccess.com/full/1457234.jpg',
  'https://c1.wallpaperflare.com/preview/135/362/466/indian-railway-train-travel.jpg',
  'https://images.picxy.com/cache/2018/9/11/2f280e7d6232b3e69904457b79c20e66.jpg',
  'https://pbs.twimg.com/media/E7RxH2-UcAMpB4u.jpg:large',
  'https://images.unsplash.com/photo-1560521608-b4e1acca0824?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8aW5kaWFuJTIwcmFpbHdheXxlbnwwfHwwfHx8MA%3D%3D',
  'https://cdn.pixabay.com/photo/2020/03/30/08/13/indian-4983468_640.jpg',
  'https://i.pinimg.com/550x/5e/5a/64/5e5a642de0152a26da8b21094b58858e.jpg',
  'https://i.pinimg.com/originals/e1/ca/17/e1ca17f1e61f2539f4107477440f45bd.jpg',
  'https://images.unsplash.com/photo-1582217900003-2b19c0e3a7d0?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aW5kaWFuJTIwcmFpbHdheXxlbnwwfHwwfHx8MA%3D%3D',
  'https://e0.pxfuel.com/wallpapers/628/532/desktop-wallpaper-indian-railway-metropolitan-area-midnight-night-station-vaccation-indianraliway-trains-platform-thumbnail.jpg'
];

const handleSignIn = () => {
  // Perform sign-in logic here
  alert('You have logged in successfully!');
};

const LoginPage = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 1000); // Change image every 3 seconds

    return () => clearInterval(intervalId);
  }, []);

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

    <LoginPageContainer>
      <ContentWrapper>
      <SliderSection>
            <SliderImageContainer
              style={{
                transform: `translateX(-${currentImageIndex * 100}%)`,
              }}
            >
              {images.map((image, index) => (
                <SliderImage
                  key={index}
                  src={image}
                  alt={`Slider Image ${index + 1}`}
                />
              ))}
            </SliderImageContainer>
          </SliderSection>

        <LoginSection>
          <Logo src="/img/leftlogo.png" alt="Logo" />
          <WelcomeText style={{ textAlign: 'center' }}>Welcome to RAILगाड़ी<br />Login & Let The Tracks Unfold ❤️</WelcomeText>

          <LoginForm>
            <FormInput type="text" placeholder="Username or Email ID" />
            <FormInput
              type={showPassword ? 'text' : 'password'}
              placeholder="Password"
            />
            <div>
              <ShowPasswordCheckbox
                type="checkbox"
                onChange={() => setShowPassword(!showPassword)}
              />
              <ShowPasswordLabel>Show password</ShowPasswordLabel>
            </div>
            <ForgotPasswordLink>Forgot Password ?</ForgotPasswordLink>
            <SignInButton onClick={handleSignIn}>Sign In</SignInButton>
          </LoginForm>
          <HorizontalLine style={{ color: 'white' }} />
          
          <CreateAccountText>
            New to RAILगाड़ी ?{' '}
            <Link to="/Registerpage">Create Account</Link>
          </CreateAccountText>
        </LoginSection>
      </ContentWrapper>
    </LoginPageContainer>
    </div>
  );
};

export default LoginPage;
