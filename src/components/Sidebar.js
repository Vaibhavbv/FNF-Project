import React from 'react';
import { useSelector } from 'react-redux';
import { FaWindowClose } from "react-icons/fa";
import { CDN_URL } from "../Utility/constants";


const Sidebar = ({ isOpen, onClose }) => {
  const cartItems = useSelector((state) => state.cart.items);

  return (
    <div className={`sidebar ${isOpen ? 'open' : ''}`}>
      <button className="close-btn" onClick={onClose}><FaWindowClose size={34} /></button>
      <h2>Cart</h2>
      <div>
        {cartItems.map((item) => (
          <div key={item.card.info.id} className="cart-container">
            <div>
              <img className="cart-logo" src={CDN_URL + item.card.info.imageId}></img>
              <button className="cart-add-btn" onClick={ () => handleaAddItem(item)}>ADD</button>
            </div>
            <div className="cart-item-info">
              <h2>{item.card.info.name}</h2>
              <h2>₹ {item.card.info.price ? item.card.info.price/100 : item.card.info.defaultPrice/100}</h2>             
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Sidebar;
