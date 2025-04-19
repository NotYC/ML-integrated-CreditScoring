import React from 'react';
import './CreditCard.css';
import chip from '../assets/chip.svg';
import visa from '../assets/visa_logo.svg';

const CreditCard = () => {
  return (
    <div className="credit-card-container">
      <div className="card">
        {/* FRONT SIDE */}
        <div className="card__front card__part">
          <svg className="card__background" viewBox="0 0 320 190" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <linearGradient id="cardGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#fd696b" />
                <stop offset="25%" stopColor="#fa616e" />
                <stop offset="50%" stopColor="#f65871" />
                <stop offset="75%" stopColor="#f15075" />
                <stop offset="100%" stopColor="#ec4879" />
              </linearGradient>
              <pattern id="patternCircles" width="40" height="40" patternUnits="userSpaceOnUse">
                <circle cx="20" cy="20" r="15" fill="rgba(255, 255, 255, 0.05)" />
              </pattern>
            </defs>

            <rect width="320" height="190" rx="10" ry="10" fill="url(#cardGradient)" />
            <rect width="320" height="190" rx="10" ry="10" fill="url(#patternCircles)" />
            <path d="M0,95 Q80,30 160,95 T320,95" stroke="rgba(255,255,255,0.1)" strokeWidth="20" fill="none" />
            <path d="M0,130 Q80,65 160,130 T320,130" stroke="rgba(255,255,255,0.07)" strokeWidth="25" fill="none" />
            <circle cx="280" cy="40" r="60" fill="rgba(255,255,255,0.03)" />
            <circle cx="40" cy="160" r="80" fill="rgba(255,255,255,0.03)" />
          </svg>

          <img
            className="card__front-square card__square"
            src={chip}
            alt="chip"
          />
          <img
            className="card__front-logo card__logo"
            src={visa}
            alt="visa"
          />
          <p className="card_numer">**** **** **** 6258</p>
          <div className="card__space-75">
            <span className="card__label">Card holder</span>
            <p className="card__info">John Doe</p>
          </div>
          <div className="card__space-25">
            <span className="card__label">Expires</span>
            <p className="card__info">10/25</p>
          </div>
        </div>

        {/* BACK SIDE */}
        <div className="card__back card__part">
          <svg className="card__background" viewBox="0 0 320 190" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <linearGradient id="cardGradientBack" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#fd696b" />
                <stop offset="25%" stopColor="#fa616e" />
                <stop offset="50%" stopColor="#f65871" />
                <stop offset="75%" stopColor="#f15075" />
                <stop offset="100%" stopColor="#ec4879" />
              </linearGradient>
              <pattern id="patternCirclesBack" width="40" height="40" patternUnits="userSpaceOnUse">
                <circle cx="20" cy="20" r="15" fill="rgba(255, 255, 255, 0.05)" />
              </pattern>
            </defs>

            <rect width="320" height="190" rx="10" ry="10" fill="url(#cardGradientBack)" />
            <rect width="320" height="190" rx="10" ry="10" fill="url(#patternCirclesBack)" />
            <path d="M0,95 Q80,30 160,95 T320,95" stroke="rgba(255,255,255,0.1)" strokeWidth="20" fill="none" />
            <path d="M0,130 Q80,65 160,130 T320,130" stroke="rgba(255,255,255,0.07)" strokeWidth="25" fill="none" />
            <circle cx="280" cy="40" r="60" fill="rgba(255,255,255,0.03)" />
            <circle cx="40" cy="160" r="80" fill="rgba(255,255,255,0.03)" />
          </svg>

          <div className="card__black-line"></div>
          <div className="card__back-content">
            <div className="card__secret">
              <p className="card__secret--last">420</p>
            </div>
            <img
              className="card__back-square card__square"
              src={chip}
              alt="chip back"
            />
            <img
              className="card__back-logo card__logo"
              src={visa}
              alt="visa"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreditCard;
