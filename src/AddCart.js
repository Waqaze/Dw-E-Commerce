// src/AddCart.js
import React, { useState } from 'react';
import CheckoutForm from './components/CheckoutForm';
import './AddCart.css';

const AddCart = ({ cart, setCart }) => {
  const [isCheckout, setIsCheckout] = useState(false);
  const [orderConfirmed, setOrderConfirmed] = useState(false);

  const handlePlaceOrder = (details) => {
    console.log('Order Details:', details);
    alert('Your order has been placed!');
    setCart([]);
    setOrderConfirmed(true);
  };

  return (
    <div className="cart-container">
      <h2>Shopping Cart</h2>
      {orderConfirmed ? (
        <p>Your order is done!</p>
      ) : (
        <>
          {cart.length === 0 ? (
            <p>Your cart is empty</p>
          ) : (
            <>
              <ul className="cart-items">
                {cart.map((item, index) => (
                  <li key={index} className="cart-item">
                    <img src={item.image} alt={item.title} className="cart-item-image" />
                    <div className="cart-item-details">
                      <h3>{item.title}</h3>
                      <p>Quantity: {item.quantity}</p>
                      <p>Total: ${(item.price * item.quantity).toFixed(2)}</p>
                    </div>
                  </li>
                ))}
              </ul>
              <button
                onClick={() => setIsCheckout(true)}
                className="place-order-button"
              >
                Checkout
              </button>
            </>
          )}
          {isCheckout && <CheckoutForm onPlaceOrder={handlePlaceOrder} />}
        </>
      )}
    </div>
  );
};

export default AddCart;
