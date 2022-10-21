import React from 'react';
import '../../css/NavBar.css';
import logoAdara from '../../assets/img/logo.png';

function NavBar() {
  return (
    <header>
        <nav>
            <a className="logo">
                <img src={logoAdara} alt="Logo Adara Denis"/>
            </a>
            <ul>
                <li><a href="#">Home</a></li>
                <li><a href="conoceme">Conóceme</a></li>
                <li><a href="skills">Skills</a></li>
                <li><a href="info">Info</a></li>
            </ul>
        </nav>
    </header>
  );
}

export default NavBar;
