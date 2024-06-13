// src/App.jsx
import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import ShoeList from './components/ShoeList';
import Cart from './components/Cart';
import Payment from './components/Payment';
import shoes from './data/shoes';
import './App.css';

const App = () => {
  const [showPaymentPage, setShowPaymentPage] = useState(false);

  return (
    <div className="app">
      <Routes>
        <Route
          path="/"
          element={
            <>
              <ShoeList shoes={shoes} />
            </>
          }
        />
        <Route path="/payment" element={<Payment />} />
      </Routes>
        <Cart showPaymentPage={showPaymentPage} setShowPaymentPage={setShowPaymentPage} />
    </div>
  );
};

export default App;
