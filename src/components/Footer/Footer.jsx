import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer>
      <div className="container">
        <div className="footer-flex-container0">
          <div className="brand-and-socials">
            <a className="brand-link" href="./index.html">
              <div className="logo-circle">
                <svg className="footer-logo">
                  <use href="./images/icons.svg#icon-logo"></use>
                </svg>
              </div>

              <p className="footer-brand-name">Food Boutique</p>
            </a>

            <ul className="socials">
              <li>
                <a
                  rel="noopener noreferrer"
                  target="_blank"
                  className="footer-socials-frame"
                  href="https://www.facebook.com/goITclub/"
                >
                  <svg className="footer-socials-logo">
                    <use href="./images/icons.svg#icon-facebook"></use>
                  </svg>
                </a>
              </li>

              <li>
                <a
                  rel="noopener noreferrer"
                  target="_blank"
                  className="footer-socials-frame"
                  href="https://www.instagram.com/goitclub/"
                >
                  <svg className="footer-socials-logo">
                    <use href="./images/icons.svg#icon-instagram"></use>
                  </svg>
                </a>
              </li>

              <li>
                <a
                  rel="noopener noreferrer"
                  target="_blank"
                  className="footer-socials-frame"
                  href="https://www.youtube.com/c/GoIT"
                >
                  <svg className="footer-socials-logo">
                    <use href="./images/icons.svg#icon-youtube"></use>
                  </svg>
                </a>
              </li>
            </ul>
          </div>

          <div className="footer-flex-container1">
            <div className="footer-text">
              <p className="big-footer-text">
                Discover the Variety of Flavors and Quality
              </p>
              <p className="small-footer-text">
                An online store where you will find fresh, natural and <br />
                delicious products for a healthy life and unforgettable <br />
                gastronomic adventures.
              </p>
            </div>

            <div>
              <form className="footer-email-form">
                <p className="footer-form-text">
                  Subscribe and learn about new products!
                </p>
                <input
                  className="footer-email-input"
                  type="email"
                  name="email-input"
                  placeholder="Email"
                  title="Enter valid email address"
                  required
                />
                <button className="footer-button" type="submit">
                  Send
                </button>
              </form>
            </div>
          </div>
        </div>
        <div className="footer-bottom-text">
          <p className="all-rights-reserved">
            Food Boutique. All rights reserved.
          </p>
          <p>
            <a href="/">Privacy Policy</a> / <a href="/">Terms of Service</a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
