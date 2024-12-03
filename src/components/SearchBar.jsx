import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Styles.css";
import "../api";
import { searchMovies } from "../api";

const SearchBar = () => {
  const navigate = useNavigate();
  const [query, setQuery] = useState("");

  const handleSearch = async () => {
    if (query.trim() !== "") {
      const response = await searchMovies(query);
      navigate(`/search`, { state: { keyword: query, results: response.keyword_movies } });
    }
  };


  return (
    <div className="search-bar">
      <input
        type="text"
        placeholder="영화를 검색하세요..."
        value={query}
        onChange={(e)=>setQuery(e.target.value)}
      />
      <button onClick={handleSearch}>검색</button>
    </div>
  );
};

export default SearchBar;
