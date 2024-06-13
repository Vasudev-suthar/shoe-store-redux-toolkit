// src/components/Cart.jsx
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { addToCart, removeFromCart } from '../slices/cartslice';
import casualShoes from '../images/casual-shoes.webp';
import ankleShoe from '../images/ankleshoe.jpg';
import cumpus1 from '../images/cumpus-1.png';
import cumpus2 from '../images/cumpus-2.jfif';
import usPolo from '../images/us-polo.png';
import asianJfif from '../images/asian.jfif';
import asianJpg from '../images/asian.jpg';
import airwaeve from '../images/airwaeve.jpg';

const Cart = ({ showPaymentPage, setShowPaymentPage }) => {
  const cartItems = useSelector((state) => state.cart.cartItems);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const total = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);

  const shoeImages = {
    'casual-shoes.webp': casualShoes,
    'ankleshoe.jpg': ankleShoe,
    'cumpus-1.png': cumpus1,
    'cumpus-2.jfif': cumpus2,
    'us-polo.png': usPolo,
    'asian.jfif': asianJfif,
    'asian.jpg': asianJpg,
    'airwaeve.jpg': airwaeve,
  };

  const handleProceedToPayment = () => {
    navigate('/payment');
    setShowPaymentPage(true);
  };

  const handleGoBackToShopping = () => {
    navigate('/');
    setShowPaymentPage(false);
  };

  return (
    <div className="cart">
      <div className='text-box-cart'>
        <h2>Cart</h2>
        {cartItems.length === 0 ? (
          <p></p>
        ) : (
          cartItems.map(item => (
            <div key={item.id} className="cart-item">
              <div className='cart-img-box'>
                <img src={shoeImages[item.image]} alt={item.name} className="cart-item-image" />
              </div>
              <div className='side-box-item-cart'>
                <h3>{item.name}</h3>
                <div className='box-price-button'>
                  <p>${item.price}</p>
                  <div className="cart-item-controls">
                    <button id='minus-btn' onClick={() => dispatch(removeFromCart(item.id))}>-</button>
                    <span>{item.quantity}</span>
                    <button id='plus-btn' onClick={() => dispatch(addToCart(item))}>+</button>
                  </div>
                </div>
              </div>
            </div>
          ))
        )}
        <h3>Total: ${total.toFixed(2)}</h3>
        <div className='btn-pay-box'>
          {!showPaymentPage ? (
            <button className='btn-pay' onClick={handleProceedToPayment}>Proceed to Payment</button>
          ) : (
            <button className='btn-pay' onClick={handleGoBackToShopping}>Go Back to Shopping</button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Cart;
