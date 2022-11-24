import React, { useState } from 'react';
import './NavBar.css';
import MenuButton from './MenuButton';
import Menu from './Menu';

function NavBar() {
  const [open, setOpen] = useState(false);
  const handleClick = () => {
    setOpen(!open);
  };

  return (
    <header className="nav-bar">
      <nav>
        <MenuButton 
          open={open} 
          handleClick={handleClick} 
        />
        <Menu 
          open={open}
        />
      </nav>
    </header>
  );
}

export default NavBar;
