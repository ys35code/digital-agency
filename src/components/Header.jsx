import React from "react";

const Header = () => {
  return (
    <header className="desktopHeader">
      <a classname="hda" href="/">
        DIGITAL AGENCY
      </a>
      <nav className="navheader">
        <ul className="navheader">
          <li>
            <a href="/about">home</a>
          </li>
          <li>
            <a href="/about">about</a>
          </li>
          <li>
            <a href="/about">testimonials</a>
          </li>
          <li>
            <a href="/about">contact</a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
