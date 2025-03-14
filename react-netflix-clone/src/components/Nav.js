import React from 'react';
import './Nav.css';

export default function Nav() {
  return (
    <nav>
      <img
        alt="Netflix logo"
        src="https://upload.wikimedia.org/wikipedia/commons/1/1f/Netflix.png"
        className="nav__logo"
        onClick={() => window.location.reload()}
      />
      <img
        alt="User logged"
        src="https://i.pinimg.com/564x/1b/a2/e6/1ba2e6d1d4874546c70c91f1024e17fb.jpg"
        className="nav__avatar"
      />
    </nav>
  );
}
