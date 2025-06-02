import Topuria from './topuria.jsx'
import Calc from './calc.jsx'
import Bmi from './website/bmi.jsx'; 
import React, { useState } from 'react';

import { BrowserRouter } from "react-router-dom";

import Nav from './website/nav.jsx';  
import Home from "./website/home.jsx";
import About from "./website/about.jsx";
import Projects from './website/projects.jsx';
import Contact from "./website/contact.jsx";
import Crud from "./crud";
import Api from "./api";
import Order from './order';
import Cart from './cart.jsx';
import Random from './random.jsx';
import NumberGuess from './numberguess.jsx';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import { Routes, Route, useLocation } from 'react-router-dom';
import './website/transition.css';

function App() {
  const [cartItems, setCartItems] = useState([]);
  const [showDiv, setShowDiv] = useState(false);
  const location = useLocation();

  return (
    <>
      <TransitionGroup>
        <CSSTransition key={location.key} classNames="fade" timeout={400}>
          <div className="page">
            <Routes location={location}>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/projects" element={<Projects />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/bmi" element={<Bmi />} />
              <Route path="/crud" element={<Crud />} />
              <Route path="/api" element={<Api />} />
              <Route path="/random" element={<Random />} />
              <Route path="/order" element={<Order showDiv={showDiv} setShowDiv={setShowDiv} cartItems={cartItems} setCartItems={setCartItems} />} />
              <Route path="/cart" element={<Cart cartItems={cartItems} setCartItems={setCartItems} />} />
              <Route path="/numberguess" element={<NumberGuess />} />
            </Routes>
          </div>
        </CSSTransition>
      </TransitionGroup>
    </>
  );
}



export default App;


