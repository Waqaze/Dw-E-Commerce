import React, { useEffect, useState } from 'react';
import AddCart from '../AddCart';
import '../App.css';


const Shop = () => {
  
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);

  useEffect(() => {
    fetch('https://fakestoreapi.com/products?limit=30')
      .then((response) => response.json())
      .then((data) => setProducts(data))
      .catch((error) => console.error('Error fetching data:', error));
  }, []);

  const addToCart = (product, quantity) => {
    const existingProductIndex = cart.findIndex((item) => item.id === product.id);
    if (existingProductIndex >= 0) {
      const updatedCart = [...cart];
      updatedCart[existingProductIndex].quantity += quantity;
      setCart(updatedCart);
    } else {
      setCart([...cart, { ...product, quantity }]);
    }
  };

  return (

    
    <div className="container">
      <h1>Product Listing</h1>
      <div className="product-grid">
        {products.map((product) => (
          <div key={product.id} className="product-card">
            <img src={product.image} alt={product.title} className="product-image" />
            <h2 className="product-title">{product.title}</h2>
            <p className="product-description">{product.description}</p>
            <p className="product-price">${product.price}</p>
            <input
              type="number"
              min="1"
              defaultValue="1"
              className="quantity-input"
              id={`quantity-${product.id}`}
            />
            <button
              onClick={() => {
                const quantity = parseInt(document.getElementById(`quantity-${product.id}`).value, 10);
                addToCart(product, quantity);
              }}
              className="add-to-cart-button"
            >
              Add to Cart
            </button>
          </div>
        ))}
      </div>
      <AddCart cart={cart} setCart={setCart} />
    </div>
  );
};

export default Shop;
