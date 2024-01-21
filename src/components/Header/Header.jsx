import React from 'react';
// import css from './Header.module.css';
import './Header.css';
const Header = () => {
  return (
    <header className="header">
      <div className="container header-container">
        <a href="./index.html" className="logo-title link">
          <div className="logo-ellips">
            <svg className="logo-icon">
              <use href="./images/icons.svg#icon-logo"></use>
            </svg>
          </div>
          <svg className="logo-title-icon">
            <use href="./images/icons.svg#icon-Food-Boutique"></use>
          </svg>
        </a>
        <nav className="header-nav">
          <a href="./index.html" className="home-link">
            Home
          </a>
          <a href="./cart.html" className="header-cart-link">
            <svg className="header-cart-icon">
              <use href="./images/icons.svg#icon-basket"></use>
            </svg>
          </a>
          <p className="cart-quanity">
            Cart(<span className="quantity-in-cart-header">0</span>)
          </p>
        </nav>
      </div>
    </header>
  );
};

export default Header;
