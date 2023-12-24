import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './searchtrain.css';
import { NavLink, Link } from 'react-router-dom';
import styled from 'styled-components';
import Footer from './Footer';
import BackToTopButton from './BackToTopButton';
import { faTrain } from '@fortawesome/free-solid-svg-icons';

const SearchHeader = styled.h2`
  text-align: center;
  margin-top: 40px;
  font-family: Book Antiqua;
  font-weight: bold;
  background-image: url('https://img.freepik.com/free-vector/colorful-background-with-purple-green-background_483537-4242.jpg');
  padding: 30px 0;
  background-size: cover;
`;

const SearchTrain = () => {

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

        <SearchHeader>Discover Your Journey : Find the Perfect Train Adventure !! <FontAwesomeIcon icon={faTrain} /></SearchHeader>
        <div class="card-section">
            <div class="card">
                <img src="https://cdn.zeebiz.com/sites/default/files/styles/zeebiz_850x478/public/2019/02/28/76350-rajdhani-express-agen.jpg?itok=F5Q6Ajnd" alt="Image 1" />
                <h3>RAJDHANI EXPRESS (12951/12952)</h3>
                <p>Runs On (Days): M T W  F S S<br />| NEW DELHI | MUMBAI CENTRAL |<br />AC First Class (1A)/AC 2 Tier (2A)/AC 3 Tier (3A)<br />₹ 4870/₹ 2960/₹ 2035</p>
                <Link to="/Payment">
                    <button className="pay">BOOK NOW</button>
                </Link>
            </div>

            <div class="card">
                <img src="https://live.staticflickr.com/5562/31451656210_7a293f6338_b.jpg" alt="Image 2" />
                <h3>DURONTO EXPRESS (12261/12262)</h3>
                <p>Runs On (Days): M T W F S S<br />| MUMBAI CSMT | HOWRAH JN |<br />AC First Class (1A)/AC 2 Tier (2A)/AC 3 Tier (3A)/Sleeper (SL)<br />₹ 6320/₹ 3755/₹ 2645/₹ 1085</p>
                <Link to="/Payment">
                    <button className="pay">BOOK NOW</button>
                </Link>
            </div>

            <div class="card">
                <img src="https://akm-img-a-in.tosshub.com/businesstoday/images/story/202212/vande_bharat_express_at_gandhinagar_capital-sixteen_nine.jpg?size=948:533" alt="Image 42" />
                <h3>VANDE BHARAT EXP (22444)</h3>
                <p>Runs On (Days): M T W F S S<br />| ALLAHABAD JN | VISAKHAPATNAM |<br />AC Chair Car (CC)/Executive Class (EC)<br />₹ 2350/₹ 4150</p>
                <Link to="/Payment">
                    <button className="pay">BOOK NOW</button>
                </Link>
            </div>

            <div class="card">
                <img src="https://images.moneycontrol.com/static-mcnews/2017/11/GettyImages-689894940.jpg?impolicy=website&width=1600&height=900" alt="Image 3" />
                <h3>SHATABDI EXPRESS (12002/12001)</h3>
                <p>Runs On (Days): M T W F S S<br />| NEW DELHI | BHOPAL JN |<br />AC Chair Car (CC)/Executive Class (EC)<br />₹ 1160/₹ 2240</p>
                <Link to="/Payment">
                    <button className="pay">BOOK NOW</button>
                </Link>
            </div>

            <div class="card">
                <img src="https://st2.indiarailinfo.com/kjfdsuiemjvcya4/0/4/8/0/4333480/0/f3fb0d1e702a48f59f02ad0e94dc829797229.jpg" alt="Image 4" />
                <h3>GOA EXPRESS (12779/12780)</h3>
                <p>Runs On (Days): M T W F S S<br />| H NIZAMUDDIN | VASCO DA GAMA |<br />AC 2 Tier (2A)/AC 3 Tier (3A)/Sleeper (SL)<br />₹ 2445/₹ 1680/₹ 635</p>
                <Link to="/Payment">
                    <button className="pay">BOOK NOW</button>
                </Link>
            </div>

            <div class="card">
                <img src="https://st2.indiarailinfo.com/kjfdsuiemjvcya1/0/5/4/1/5666541/0/fbimg167889017699875459.jpg" alt="Image 5" />
                <h3>YUVA EXPRESS (12249/12250)</h3>
                <p>Runs On (Days): M T W F S S<br />| HOWRAH JN | ANAND VIHAR TERMINAL |<br />AC 2 Tier (2A)/AC 3 Tier (3A)/Sleeper (SL)<br />₹ 1975/₹ 1405/₹ 525</p>
                <Link to="/Payment">
                    <button className="pay">BOOK NOW</button>
                </Link>
            </div>

            <div class="card">
                <img src="https://veekshanam.com/wp-content/uploads/2023/12/train.jpg" alt="Image 6" />
                <h3>CHENNAI EXPRESS (12602/12601)</h3>
                <p>Runs On (Days): M T W F S S<br />| CHENNAI CENTRAL | NEW DELHI |<br />AC 2 Tier (2A)/AC 3 Tier (3A)/Sleeper (SL)<br />₹ 3315/₹ 2270/₹ 865</p>
                <Link to="/Payment">
                    <button className="pay">BOOK NOW</button>
                </Link>
            </div>

            <div class="card">
                <img src="https://akm-img-a-in.tosshub.com/businesstoday/images/story/202212/vande_bharat_express_at_gandhinagar_capital-sixteen_nine.jpg?size=948:533" alt="Image 41" />
                <h3>VANDE BHARAT EXP (22443)</h3>
                <p>Runs On (Days): M T W F S S<br />| RANCHI | CHENNAI CENTRAL |<br />AC Chair Car (CC)/Executive Class (EC)<br />₹ 2650/₹ 4550</p>
                <Link to="/Payment">
                    <button className="pay">BOOK NOW</button>
                </Link>
            </div>

            <div class="card">
                <img src="https://cdn.zeebiz.com/sites/default/files/styles/zeebiz_850x478/public/2019/02/28/76350-rajdhani-express-agen.jpg?itok=F5Q6Ajnd" alt="Image 7" />
                <h3>RAJDHANI EXPRESS (22691/22692)</h3>
                <p>Runs On (Days): M T W F S S<br />| BANGALORE CY JN | H NIZAMUDDIN |<br />AC First Class (1A)/AC 2 Tier (2A)/AC 3 Tier (3A)<br />₹ 4940/₹ 2955/₹ 2035</p>
                <Link to="/Payment">
                    <button className="pay">BOOK NOW</button>
                </Link>
            </div>

            <div class="card">
                <img src="https://akm-img-a-in.tosshub.com/businesstoday/images/story/202212/vande_bharat_express_at_gandhinagar_capital-sixteen_nine.jpg?size=948:533" alt="Image 40" />
                <h3>VANDE BHARAT EXP (22442)</h3>
                <p>Runs On (Days): M T W F S S<br />| GUWAHATI | PUNE JN |<br />AC Chair Car (CC)/Executive Class (EC)<br />₹ 3100/₹ 5350</p>
                <Link to="/Payment">
                    <button className="pay">BOOK NOW</button>
                </Link>
            </div>

            <div class="card">
                <img src="https://st.indiarailinfo.com/kjfdsuiemjvcya22/0/2/2/4/4590224/0/screenshot20200312090656com408384.jpg" alt="Image 8" />
                <h3>ANDAMAN EXPRESS (16032/16031)</h3>
                <p>Runs On (Days): M T W F S S<br />| SHMATA VD KATRA | CHENNAI CENTRAL |<br />AC 2 Tier (2A)/AC 3 Tier (3A)/Sleeper (SL)<br />₹ 2580/₹ 1800/₹ 685</p>
                <Link to="/Payment">
                    <button className="pay">BOOK NOW</button>
                </Link>
            </div>

            <div class="card">
                <img src="https://d1fmsgrs21azj2.cloudfront.net/upload/xZzxGywHrkNh4CBB2TU0CF7DfMo2/0077421d-32ab-4a54-b5fe-b745abc0d71e_1.webp" alt="Image 9" />
                <h3>PURUSHOTTAM EXPRESS (12801/12802)</h3>
                <p>Runs On (Days): M T W F S S<br />| NEW DELHI | PURI |<br />AC 2 Tier (2A)/AC 3 Tier (3A)/Sleeper (SL)<br />₹ 3175/₹ 2210/₹ 835</p>
                <Link to="/Payment">
                    <button className="pay">BOOK NOW</button>
                </Link>
            </div>

            <div class="card">
                <img src="https://upload.wikimedia.org/wikipedia/commons/e/ed/12261_Howrah_Duronto_Express.jpg" alt="Image 10" />
                <h3>HOWRAH DURONTO (12273/12274)</h3>
                <p>Runs On (Days): M T W F S S<br />| HOWRAH JN | NEW DELHI |<br />AC First Class (1A)/AC 2 Tier (2A)/AC 3 Tier (3A)/Sleeper (SL)<br />₹ 6280/₹ 3715/₹ 2600/₹ 1065</p>
                <Link to="/Payment">
                    <button className="pay">BOOK NOW</button>
                </Link>
            </div>

            <div class="card">
                <img src="https://images.hindustantimes.com/rf/image_size_960x540/HT/p2/2017/03/16/Pictures/file-photo-of-shatabdi-express_ddcc9d9c-0a00-11e7-ad00-2dd402d181d7.jpg" alt="Image 11" />
                <h3>SWARNA SHATABDI (12029/12030)</h3>
                <p>Runs On (Days): M T W F S S<br />| NEW DELHI | AMRITSAR JN |<br />AC Chair Car (CC)/Executive Class (EC)<br />₹ 900/₹ 1760</p>
                <Link to="/Payment">
                    <button className="pay">BOOK NOW</button>
                </Link>
            </div>

            <div class="card">
                <img src="https://st.indiarailinfo.com/kjfdsuiemjvcya23/0/7/9/9/5258799/0/202203311104152743791.jpg" alt="Image 12" />
                <h3>SAMPARK KRANTI (12629/12630)</h3>
                <p>Runs On (Days): M T W F S S<br />| YESVANTPUR JN | H NIZAMUDDIN |<br />AC 2 Tier (2A)/AC 3 Tier (3A)/Sleeper (SL)<br />₹ 3620/₹ 2480/₹ 935</p>
                <Link to="/Payment">
                    <button className="pay">BOOK NOW</button>
                </Link>
            </div>

            <div class="card">
                <img src="https://akm-img-a-in.tosshub.com/businesstoday/images/story/202212/vande_bharat_express_at_gandhinagar_capital-sixteen_nine.jpg?size=948:533" alt="Image 39" />
                <h3>VANDE BHARAT EXP (22441)</h3>
                <p>Runs On (Days): M T W F S S<br />| BHUBANESWAR | YESVANTPUR JN |<br />AC Chair Car (CC)/Executive Class (EC)<br />₹ 2200/₹ 3950</p>
                <Link to="/Payment">
                    <button className="pay">BOOK NOW</button>
                </Link>
            </div>


            <div class="card">
                <img src="https://upload.wikimedia.org/wikipedia/commons/8/8e/12901_Gujarat_Mail_-_AC_3_tier_coach_-_B2.jpg" alt="Image 13" />
                <h3>GUJARAT MAIL (12901/12902)</h3>
                <p>Runs On (Days): M T W F S S<br />| MUMBAI CSMT | AHMEDABAD JN |<br />AC 2 Tier (2A)/AC 3 Tier (3A)/Sleeper (SL)<br />₹ 2045/₹ 1420/₹ 530</p>
                <Link to="/Payment">
                    <button className="pay">BOOK NOW</button>
                </Link>
            </div>

            <div class="card">
                <img src="https://akm-img-a-in.tosshub.com/businesstoday/images/story/202212/vande_bharat_express_at_gandhinagar_capital-sixteen_nine.jpg?size=948:533" alt="Image 38" />
                <h3>VANDE BHARAT EXP (22440)</h3>
                <p>Runs On (Days): M T W F S S<br />| CHANDIGARH | HYDERABAD DECAN |<br />AC Chair Car (CC)/Executive Class (EC)<br />₹ 2850/₹ 4950</p>
                <Link to="/Payment">
                    <button className="pay">BOOK NOW</button>
                </Link>
            </div>

            <div class="card">
                <img src="https://akm-img-a-in.tosshub.com/businesstoday/images/story/202212/vande_bharat_express_at_gandhinagar_capital-sixteen_nine.jpg?size=948:533" alt="Image 36" />
                <h3>VANDE BHARAT EXP (22438)</h3>
                <p>Runs On (Days): M T W F S S<br />| LUCKNOW JN | MUMBAI CSMT |<br />AC Chair Car (CC)/Executive Class (EC)<br />₹ 2150/₹ 3850</p>
                <Link to="/Payment">
                    <button className="pay">BOOK NOW</button>
                </Link>
            </div>

            <div class="card">
                <img src="https://akm-img-a-in.tosshub.com/businesstoday/images/story/202212/vande_bharat_express_at_gandhinagar_capital-sixteen_nine.jpg?size=948:533" alt="Image 37" />
                <h3>VANDE BHARAT EXP (22439)</h3>
                <p>Runs On (Days): M T W F S S<br />| NEW DELHI | DIBRUGARH |<br />AC Chair Car (CC)/Executive Class (EC)<br />₹ 3400/₹ 5650</p>
                <Link to="/Payment">
                    <button className="pay">BOOK NOW</button>
                </Link>
            </div>

            <div class="card">
                <img src="https://st.indiarailinfo.com/kjfdsuiemjvcya22/0/3/5/1/4799351/0/img202012011401156555453.jpg" alt="Image 14" />
                <h3>MANGALA LAKSHADWEEP (12617/12618)</h3>
                <p>Runs On (Days): M T W F S S<br />| ERNAKULAM JN | H NIZAMUDDIN |<br />AC 2 Tier (2A)/AC 3 Tier (3A)/Sleeper (SL)<br />₹ 3455/₹ 2375/₹ 900</p>
                <Link to="/Payment">
                    <button className="pay">BOOK NOW</button>
                </Link>
            </div>

            <div class="card">
                <img src="https://cdn.zeebiz.com/sites/default/files/styles/zeebiz_850x478/public/2019/02/28/76350-rajdhani-express-agen.jpg?itok=F5Q6Ajnd" alt="Image 15" />
                <h3>RAJDHANI EXPRESS (12431/12432)</h3>
                <p>Runs On (Days): M T W F S S<br />| TRIVANDRUM CNTL | H NIZAMUDDIN |<br />AC First Class (1A)/AC 2 Tier (2A)/AC 3 Tier (3A)<br />₹ 5015/₹ 3055/₹ 2100</p>
                <Link to="/Payment">
                    <button className="pay">BOOK NOW</button>
                </Link>
            </div>

            <div class="card">
                <img src="https://st.indiarailinfo.com/kjfdsuiemjvcya22/0/5/3/2/1802532/0/img03721331989.jpg" alt="Image 16" />
                <h3>KRISHNA EXPRESS (17406/17405)</h3>
                <p>Runs On (Days): M T W F S S<br />| ADILABAD | TIRUPATI |<br />AC 2 Tier (2A)/AC 3 Tier (3A)/Sleeper (SL)<br />₹ 1690/₹ 1175/₹ 450</p>
                <Link to="/Payment">
                    <button className="pay">BOOK NOW</button>
                </Link>
            </div>

            <div class="card">
                <img src="https://st.indiarailinfo.com/kjfdsuiemjvcya23/0/2/9/9/4342299/0/img201906061416071569101.jpg" alt="Image 17" />
                <h3>CHENNAI MAIL (12601/12602)</h3>
                <p>Runs On (Days): M T W F S S<br />| CHENNAI CENTRAL | COIMBATORE JN |<br />AC 2 Tier (2A)/AC 3 Tier (3A)/Sleeper (SL)<br />₹ 3315/₹ 2270/₹ 865</p>
                <Link to="/Payment">
                    <button className="pay">BOOK NOW</button>
                </Link>
            </div>

            <div class="card">
                <img src="https://akm-img-a-in.tosshub.com/businesstoday/images/story/202212/vande_bharat_express_at_gandhinagar_capital-sixteen_nine.jpg?size=948:533" alt="Image 34" />
                <h3>VANDE BHARAT EXP (22436)</h3>
                <p>Runs On (Days): M T W F S S<br />| VARANASI JN | AHMEDABAD JN |<br />AC Chair Car (CC)/Executive Class (EC)<br />₹ 2750/₹ 4650</p>
                <Link to="/Payment">
                    <button className="pay">BOOK NOW</button>
                </Link>
            </div>

            <div class="card">
                <img src="https://akm-img-a-in.tosshub.com/businesstoday/images/story/202212/vande_bharat_express_at_gandhinagar_capital-sixteen_nine.jpg?size=948:533" alt="Image 35" />
                <h3>VANDE BHARAT EXP (22437)</h3>
                <p>Runs On (Days): M T W F S S<br />| BENGALURU CANTT | PATNA JN |<br />AC Chair Car (CC)/Executive Class (EC)<br />₹ 2400/₹ 4050</p>
                <Link to="/Payment">
                    <button className="pay">BOOK NOW</button>
                </Link>
            </div>

            <div class="card">
                <img src="https://upload.wikimedia.org/wikipedia/commons/1/1e/LHB_coaches_of_Golden_Temple_Mail.jpg" alt="Image 18" />
                <h3>GOLDEN TEMPLE MAIL (12903/12904)</h3>
                <p>Runs On (Days): M T W F S S<br />| AMRITSAR JN | MUMBAI CENTRAL |<br />AC 2 Tier (2A)/AC 3 Tier (3A)/Sleeper (SL)<br />₹ 2610/₹ 1805/₹ 685</p>
                <Link to="/Payment">
                    <button className="pay">BOOK NOW</button>
                </Link>
            </div>

            <div class="card">
                <img src="https://st.indiarailinfo.com/kjfdsuiemjvcya23/0/8/8/8/4324888/0/img20190524wa0002132710.jpg" alt="Image 19" />
                <h3>PURI EXPRESS (12744/12743)</h3>
                <p>Runs On (Days): M T W F S S<br />| BANGALORE CY JN | PURI |<br />AC 2 Tier (2A)/AC 3 Tier (3A)/Sleeper (SL)<br />₹ 2575/₹ 1785/₹ 680</p>
                <Link to="/Payment">
                    <button className="pay">BOOK NOW</button>
                </Link>
            </div>

            <div class="card">
                <img src="https://akm-img-a-in.tosshub.com/businesstoday/images/story/202212/vande_bharat_express_at_gandhinagar_capital-sixteen_nine.jpg?size=948:533" alt="Image 20" />
                <h3>VANDE BHARAT EXP (22895)</h3>
                <p>Runs On (Days): M T W F S S<br />| HOWRAH JN | PURI |<br />AC Chair Car (CC)/Exec. Chair Car (EC)<br />₹ 1265/₹ 2420</p>
                <Link to="/Payment">
                    <button className="pay">BOOK NOW</button>
                </Link>
            </div>

            <div class="card">
                <img src="https://live.staticflickr.com/5562/31451656210_7a293f6338_b.jpg" alt="Image 21" />
                <h3>DURONTO EXPRESS (12213/12214)</h3>
                <p>Runs On (Days): M T W F S S<br />| SECUNDERABAD JN | H NIZAMUDDIN |<br />AC First Class (1A)/AC 2 Tier (2A)/AC 3 Tier (3A)/Sleeper (SL)<br />₹ 5975/₹ 3480/₹ 2415/₹ 985</p>
                <Link to="/Payment">
                    <button className="pay">BOOK NOW</button>
                </Link>
            </div>

            <div class="card">
                <img src="https://st.indiarailinfo.com/kjfdsuiemjvcya24/0/2/4/8/4413248/0/img201908262248384136392.jpg" alt="Image 22" />
                <h3>KONKAN KANYA EXPRESS (10111/10112)</h3>
                <p>Runs On (Days): M T W F S S<br />| CHHATRAPATI SHIVAJI TERMINUS | MADGAON |<br />AC 2 Tier (2A)/AC 3 Tier (3A)/Sleeper (SL)<br />₹ 2245/₹ 1590/₹ 610</p>
                <Link to="/Payment">
                    <button className="pay">BOOK NOW</button>
                </Link>
            </div>

            <div class="card">
                <img src="https://st2.indiarailinfo.com/kjfdsuiemjvcya6/0/0/5/7/2258057/0/screenshot20170501113454.jpg" alt="Image 23" />
                <h3>SURYANAGARI EXPRESS (12479/12480)</h3>
                <p>Runs On (Days): M T W F S S<br />| JODHPUR JN | BANDRA TERMINUS |<br />AC First Class (1A)/AC 2 Tier (2A)/AC 3 Tier (3A)/Sleeper (SL)<br />₹ 5535/₹ 3210/₹ 2215/₹ 905</p>
                <Link to="/Payment">
                    <button className="pay">BOOK NOW</button>
                </Link>
            </div>

            <div class="card">
                <img src="https://img.onmanorama.com/content/dam/mm/en/travel/travel-news/images/2022/5/11/train-railway.jpg" alt="Image 24" />
                <h3>PALGHAT EXPRESS (13351/13352)</h3>
                <p>Runs On (Days): M T W F S S<br />| DHANBAD JN | ALAPPUZHA |<br />AC 2 Tier (2A)/AC 3 Tier (3A)/Sleeper (SL)<br />₹ 2890/₹ 1995/₹ 760</p>
                <Link to="/Payment">
                    <button className="pay">BOOK NOW</button>
                </Link>
            </div>

            <div class="card">
                <img src="https://st2.indiarailinfo.com/kjfdsuiemjvcya1/0/6/6/4/5056664/0/img2021082722120417215242.jpg" alt="Image 25" />
                <h3>RAJENDRANAGAR EXPRESS (12309/12310)</h3>
                <p>Runs On (Days): M T W F S S<br />| PATNA JN | NEW DELHI |<br />AC First Class (1A)/AC 2 Tier (2A)/AC 3 Tier (3A)/Sleeper (SL)<br />₹ 5010/₹ 2905/₹ 2005/₹ 820</p>
                <Link to="/Payment">
                    <button className="pay">BOOK NOW</button>
                </Link>
            </div>

            <div class="card">
                <img src="https://akm-img-a-in.tosshub.com/businesstoday/images/story/202212/vande_bharat_express_at_gandhinagar_capital-sixteen_nine.jpg?size=948:533" alt="Image 33" />
                <h3>VANDE BHARAT EXP (22435)</h3>
                <p>Runs On (Days): M T W F S S<br />| CHENNAI CENTRAL | VARANASI JN |<br />AC Chair Car (CC)/Executive Class (EC)<br />₹ 1950/₹ 3400</p>
                <Link to="/Payment">
                    <button className="pay">BOOK NOW</button>
                </Link>
            </div>

            <div class="card">
                <img src="https://st.indiarailinfo.com/kjfdsuiemjvcya23/0/0/2/9/4379029/0/screenshot201907152311282317729.jpg" alt="Image 26" />
                <h3>TELANGANA EXPRESS (12723/12724)</h3>
                <p>Runs On (Days): M T W F S S<br />| NEW DELHI | HYDERABAD DECAN |<br />AC 2 Tier (2A)/AC 3 Tier (3A)/Sleeper (SL)<br />₹ 2935/₹ 2050/₹ 785</p>
                <Link to="/Payment">
                    <button className="pay">BOOK NOW</button>
                </Link>
            </div>

            <div class="card">
                <img src="https://www.deccanodysseytrains.com/blog/wp-content/uploads/2018/05/deccan-odyssey-train-facilities.png" alt="Image 27" />
                <h3>DECCAN ODYSSEY (11007/11008)</h3>
                <p>Runs On (Days): M T W F S S<br />| MUMBAI CST | PUNE JN |<br />AC Deluxe Class (AD)<br />₹ 7190/₹ 7190</p>
                <Link to="/Payment">
                    <button className="pay">BOOK NOW</button>
                </Link>
            </div>

            <div class="card">
                <img src="https://st2.indiarailinfo.com/kjfdsuiemjvcya4/0/3/7/5/2276375/0/img201705140613481706389.jpg" alt="Image 28" />
                <h3>AKAL TAKHT EXPRESS (12317/12318)</h3>
                <p>Runs On (Days): M T W F S S<br />| HOWRAH JN | AMRITSAR JN |<br />AC First Class (1A)/AC 2 Tier (2A)/AC 3 Tier (3A)/Sleeper (SL)<br />₹ 5665/₹ 3285/₹ 2270/₹ 925</p>
                <Link to="/Payment">
                    <button className="pay">BOOK NOW</button>
                </Link>
            </div>

            <div class="card">
                <img src="https://st2.indiarailinfo.com/kjfdsuiemjvcya7/0/1/3/4/5752134/0/b79efb10f4be43ca8a176b692dac1eba168683102297174386.jpg" alt="Image 29" />
                <h3>CHENNAI CENTRAL EXPRESS (12686/12685)</h3>
                <p>Runs On (Days): M T W F S S<br />| MANGALORE CENTRAL | CHENNAI CENTRAL |<br />AC 2 Tier (2A)/AC 3 Tier (3A)/Sleeper (SL)<br />₹ 3365/₹ 2305/₹ 875</p>
                <Link to="/Payment">
                    <button className="pay">BOOK NOW</button>
                </Link>
            </div>

            <div class="card">
                <img src="https://pragativadi.com/wp-content/uploads/2021/09/12coach.jpg" alt="Image 30" />
                <h3>HIRAKUD EXPRESS (18507/18508)</h3>
                <p>Runs On (Days): M T W F S S<br />| VISHAKHAPATNAM | AMBALA CANTT |<br />AC 2 Tier (2A)/AC 3 Tier (3A)/Sleeper (SL)<br />₹ 3045/₹ 2105/₹ 805</p>
                <Link to="/Payment">
                    <button className="pay">BOOK NOW</button>
                </Link>
            </div>

            <div class="card">
                <img src="https://st.indiarailinfo.com/kjfdsuiemjvcya22/0/3/3/9/2758339/0/img20171014081848hdr4616200.jpg" alt="Image 31" />
                <h3>POORVA EXPRESS (12303/12304)</h3>
                <p>Runs On (Days): M T W F S S<br />| HOWRAH JN | NEW DELHI |<br />AC First Class (1A)/AC 2 Tier (2A)/AC 3 Tier (3A)/Sleeper (SL)<br />₹ 5115/₹ 2960/₹ 2040/₹ 835</p>
                <Link to="/Payment">
                    <button className="pay">BOOK NOW</button>
                </Link>
            </div>

            <div class="card">
                <img src="https://st.indiarailinfo.com/kjfdsuiemjvcya22/0/5/3/8/4597538/0/screenshot20200321104419304com224376.jpg" alt="Image 32" />
                <h3>MALWA EXPRESS (12919/12920)</h3>
                <p>Runs On (Days): M T W F S S<br />| INDORE JN BG | JAMMU TAWI |<br />AC 2 Tier (2A)/AC 3 Tier (3A)/Sleeper (SL)<br />₹ 3135/₹ 2175/₹ 830</p>
                <Link to="/Payment">
                    <button className="pay">BOOK NOW</button>
                </Link>
            </div>
            <div class="card">
                <img src="https://1.bp.blogspot.com/-w1vKX7kwcmg/UbhmOlAUeUI/AAAAAAAADJc/-NolO68AaaM/s1600/palace-on-wheels-india.JPG" alt="Image PalaceOnWheels" />
                <h3>PALACE ON WHEELS</h3>
                <p>Route: Delhi - Jaipur - Sawai Madhopur - Chittorgarh - Udaipur - Jaisalmer - Jodhpur - Bharatpur - Agra - Delhi</p>
                <p>Class: Deluxe Cabins with attached bathrooms, Restaurants, Bar, Lounge</p>
                <p>Fare: Starting from ₹2,75,000 per person</p>
                <Link to="/Payment">
                    <button className="pay">BOOK NOW</button>
                </Link>
            </div>

        </div>
        <Footer />
        <BackToTopButton />
    </div>
  );
};

export default SearchTrain;
