import React from 'react';
import { Link } from 'react-router-dom';
import SearchBar from './SearchBar';
import './Styles.css';

const Header = ({ onSearch }) => {
  return (
    <header className="header">
      <Link to="/" className="logo">
        AJOUFLIX
      </Link>
      <SearchBar onSearch={onSearch} />
    </header>
  );
};

export default Header;
