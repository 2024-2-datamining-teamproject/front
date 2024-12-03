import React, { useState } from "react";
import Header from "../components/Header";
import { searchMovies } from "../api";
import "./Styles.css";

const SearchResultsPage = () => {
  const [keyword, setKeyword] = useState("");
  const [results, setResults] = useState([]);

  const handleSearch = async () => {
    const response = await searchMovies(keyword);
    setResults(response.keyword_movies);
  };

  return (
    <div className="search-results-page">
      <Header />
      <h2>영화 검색</h2>
      <input
        type="text"
        placeholder="검색어를 입력하세요"
        value={keyword}
        onChange={(e) => setKeyword(e.target.value)}
      />
      <button onClick={handleSearch}>검색</button>
      <div className="movie-grid">
        {results.map((movie, index) => (
          <div key={index} className="movie-card">
            <img src={movie.poster} alt={movie.title} />
            <h4>{movie.title}</h4>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SearchResultsPage;
