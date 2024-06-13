// src/components/ShoeList.jsx
import React from 'react';
import { useDispatch } from 'react-redux';
import { addToCart } from '../slices/cartslice';
import casualShoes from '../images/casual-shoes.webp';
import ankleShoe from '../images/ankleshoe.jpg';
import cumpus1 from '../images/cumpus-1.png';
import cumpus2 from '../images/cumpus-2.jfif';
import usPolo from '../images/us-polo.png';
import asianJfif from '../images/asian.jfif';
import asianJpg from '../images/asian.jpg';
import airwaeve from '../images/airwaeve.jpg';

const ShoeList = ({ shoes }) => {
  const dispatch = useDispatch();

  const shoeImages = {
    'casual-shoes.webp': casualShoes,
    'ankleshoe.jpg': ankleShoe,
    'cumpus-1.png': cumpus1,
    'cumpus-2.jfif': cumpus2,
    'us-polo.png': usPolo,
    'asian.jfif': asianJfif,
    'asian.jpg': asianJpg,
    'airwaeve.jpg': airwaeve
  };

  return (
    <div className="shoe-list">
      {shoes.map(shoe => (
        <div key={shoe.id} className="shoe-item">
          <div className='img-box'>
            <img src={shoeImages[shoe.image]} alt={shoe.name} />
          </div>
          <div className='text-box'>
            <h3 className='h3'>{shoe.name}</h3>
            <p className='price'>${shoe.price}</p>
            <button className='btn' onClick={() => dispatch(addToCart(shoe))}>Add to Cart</button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ShoeList;
