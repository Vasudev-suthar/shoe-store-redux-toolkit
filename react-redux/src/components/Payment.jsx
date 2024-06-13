// src/components/Payment.jsx
import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const Payment = () => {
  const cartItems = useSelector((state) => state.cart.cartItems);
  const navigate = useNavigate();
  const [paymentMethod, setPaymentMethod] = useState('creditCard'); // Set credit card as default

  const total = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);

  const handleConfirmPayment = (event) => {
    event.preventDefault();
    navigate('/');
  };

  return (
    <div className="payment">
      <div className="payment-form">
        <form onSubmit={handleConfirmPayment}>
          <div className='check-box'>
            <div>
              <input 
                type="radio" 
                id="cashOnDelivery" 
                name="paymentMethod" 
                value="cashOnDelivery" 
                checked={paymentMethod === 'cashOnDelivery'}
                onChange={() => setPaymentMethod('cashOnDelivery')} 
              />
              <span className="custom-radio"></span>
              <label htmlFor="cashOnDelivery">Cash on Delivery</label>
            </div>
            <div>
              <input 
                type="radio" 
                id="creditCard" 
                name="paymentMethod" 
                value="creditCard" 
                checked={paymentMethod === 'creditCard'} 
                onChange={() => setPaymentMethod('creditCard')}
                required 
              />
              <span className="custom-radio"></span>
              <label htmlFor="creditCard">Credit Card</label>
            </div>
          </div>
          {paymentMethod === 'creditCard' && (
            <div className='box-detail'>
              <div className='card-box'>
                <label htmlFor="cardNumber">Enter your card number:</label>
                <input type="text" id="cardNumber" placeholder='Card Number' required />
              </div>
              <div className='card-box'>
                <label htmlFor="expiryDate">Enter your card's expiry date:</label>
                <input type="text" id="expiryDate" placeholder='Expiry Date' required />
              </div>
              <div className='card-box'>
                <label htmlFor="cvv">Enter your CVV number:</label>
                <input type="text" id="cvv" placeholder='CVV' required />
              </div>
            </div>
          )}
          <div className='btn-pay-box'>
            <button className='btn-pay' id='btn-12' type="submit">Confirm Payment</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Payment;

