import React from "react";

const Header = () => {
  return (
    <header className="desktopHeader">
      <a href="/">DIGITAL AGENCY</a>
      <nav className="navheader">
        <ul className="navheader">
          <li>
            <a href="/about">Home</a>
          </li>
          <li>
            <a href="/about">About</a>
          </li>
          <li>
            <a href="/about">Testimonials</a>
          </li>
          <li>
            <a href="/about">Contact</a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
