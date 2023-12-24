import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Homepage from './components/Homepage';
import Booking from './components/Booking';
import Aboutus from './components/Aboutus';
import Contactus from './components/Contactus';
import Alerts from './components/Alerts';
import Pnrenquiry from './components/Pnrenquiry';
import Cancelticket from './components/Cancelticket';
import SearchTrain from './components/SearchTrain';
import Payment from './components/Payment';
import Loginpage from './components/Loginpage';
import Registerpage from './components/Registerpage';
import Services from './components/Services';
import TermC from './components/TermC';

const App = () => {
  return (
    <Router>
      <div>
        {/* Your Header component goes here */}
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/Booking" element={<Booking />} />
          <Route path="/Aboutus" element={<Aboutus />} />
          <Route path="/Contactus" element={<Contactus />} />
          <Route path="/Alerts" element={<Alerts />} />
          <Route path="/Pnrenquiry" element={<Pnrenquiry />} />
          <Route path="/Cancelticket" element={<Cancelticket />} />
          <Route path="/SearchTrain" element={<SearchTrain />} />
          <Route path="/Payment" element={<Payment />} />
          <Route path="/Loginpage" element={<Loginpage />} />
          <Route path="/Registerpage" element={<Registerpage />} />
          <Route path="/Services" element={<Services />} />
          <Route path="/TermC" element={<TermC />} />

          {/* Add more routes for other subtopics */}
        </Routes>
      </div>
    </Router>
  );
};

export default App;
