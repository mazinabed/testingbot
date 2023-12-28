import React from 'react';
//import { useLocation, useNavigate } from 'react-router-dom';

const Footer = () => {

  return (
    <footer className="w-100 mt-auto bg-secondary p-4">
      <div className="container text-center mb-5">
        <h2>مطعمكم. كوت الزهراء. رقم الهاتف: 0780443255</h2>
        <h4>
      تم انشاء وتطوير هذا البوت من قبل{' '}
          <span
            className="emoji"
            role="img"
            aria-label="heart"
            aria-hidden="false"
          >
            ❤️
          </span>{' '}
          Babylon Center.
        </h4>
      </div>
      <h4>&copy; {new Date().getFullYear()} - Babylon Center</h4>
    </footer>
  );
};

export default Footer;
