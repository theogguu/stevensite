import React from 'react';
import './Navbar.css';

const Navbar = () => {
  return (

<nav className="navbar">
  <div className="navbar-left">
    <a href="/" className="home">
        home
    </a>
  </div>
<div className="navbar-right">
    <ul className="navbar-links">
        <li>
            <a href="/stevengu_resume.pdf">resume</a>
        </li>
        <li>
            <a href="/recipes">cooking</a>
        </li>
    </ul>
</div>

</nav>
);
};

export default Navbar;