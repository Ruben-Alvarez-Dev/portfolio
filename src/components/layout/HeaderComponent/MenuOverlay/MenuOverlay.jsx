import React from 'react';
import { FiX } from 'react-icons/fi';
import './MenuOverlay.css';

const MenuOverlay = ({ links, closeMenu, isOpen, onLinkClick }) => (
  <div className={`mobile-menu ${isOpen ? 'open' : 'closed'}`}>
    <button
      className="close-menu-button icon-button"
      onClick={closeMenu}
      aria-label="Close menu"
    >
      <FiX />
    </button>
    <ul className="mobile-nav">
      {links.map((link, idx) => (
        <li key={idx} className="mobile-item">
          <button 
            className="mobile-link"
            onClick={() => onLinkClick(link.href)}
          >
            {link.label}
          </button>
        </li>
      ))}
    </ul>
  </div>
);

export default MenuOverlay;
