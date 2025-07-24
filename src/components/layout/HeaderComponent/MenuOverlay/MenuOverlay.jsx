import React from 'react';
import { FiX } from 'react-icons/fi';
import './MenuOverlay.css';

const MenuOverlay = ({ links, closeMenu, isOpen }) => (
  <div className={`mobile-menu ${isOpen ? 'open' : 'closed'}`}>
    <button
      className="close-menu-button icon-button"
      onClick={closeMenu}
      aria-label="Close menu"
    >
      <FiX />
    </button>
    <ul className="mobile-nav">
      {links.map((label, idx) => (
        <li key={idx} className="mobile-item">
          <a href="#" className="mobile-link">
            {label}
          </a>
        </li>
      ))}
    </ul>
  </div>
);

export default MenuOverlay;
