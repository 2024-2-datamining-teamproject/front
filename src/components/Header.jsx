import React from 'react';
import { Link } from 'react-router-dom';
import SearchBar from './SearchBar';
import './Styles.css';

const Header = ({ set_login }) => {

  const onLogoClick = () => {
    set_login(false);
  };
  return (
    <header className="header">
      <Link to="/login" className="logo" onClick={onLogoClick}>
        AJOUFLIX
      </Link>
      <SearchBar />
    </header>
  );
};

export default Header;
