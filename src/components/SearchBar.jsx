import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Styles.css';

const SearchBar = () => {
  const [query, setQuery] = useState('');
  const navigate = useNavigate();

  const handleSearch = () => {
    if (query.trim() !== '') {
      navigate(`/search?query=${encodeURIComponent(query)}`);
    }
  };

  return (
    <div className="search-bar">
      <input
        type="text"
        placeholder="영화를 검색하세요..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <button onClick={handleSearch}>검색</button>
    </div>
  );
};

export default SearchBar;
