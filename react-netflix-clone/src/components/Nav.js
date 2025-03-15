import React, { useState, useEffect } from 'react';
import './Nav.css';

export default function Nav() {
  const [show, setshow] = useState(false);

  useEffect(() => {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 50) {
        setshow(true);
      } else {
        setshow(false);
      }
    });

    return () => {
      window.removeEventListener('scroll', () => {});
    };
  }, []);

  return (
    <nav className={`nav ${show && 'nav__black'}`}>
      <img
        alt="Netflix logo"
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/170px-Netflix_2015_logo.svg.png"
        className="nav__logo"
        onClick={() => window.location.reload()}
      />
      <img
        alt="User logged"
        src="https://img.freepik.com/premium-vector/funny-green-face-square-avatar-cartoon-emotion-icon_53562-16129.jpg"
        className="nav__avatar"
      />
    </nav>
  );
}
