import React, {
  useEffect,
  useState,
} from 'react';

import {
  CloseButton,
  Menu,
  MenuItem,
  ToggleButton,
  Wrapper,
} from './styled';

const BurgerMenu = () => {
  const [$isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!$isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  const handleResize = () => {
    if (window.innerWidth > 768 && $isOpen) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [$isOpen]);

  const handleMenuClick = () => {
    closeMenu();
  };

  return (
    <Wrapper>
      <ToggleButton onClick={toggleMenu}>
        <div />
        <div />
        <div />
      </ToggleButton>
      <Menu $isOpen={$isOpen}>
        <CloseButton onClick={closeMenu}>&times;</CloseButton>
       
        <MenuItem to="#strona-glowna" onClick={handleMenuClick}>Strona Główna</MenuItem>
        <MenuItem to="#nasz-prace" onClick={handleMenuClick}>Nasze prace</MenuItem>
        <MenuItem to="#artist" onClick={handleMenuClick}>Artist</MenuItem>
        <MenuItem to="#kontakt" onClick={handleMenuClick}>Kontakt</MenuItem>
      </Menu>
    </Wrapper>
  );
};

export default BurgerMenu;
