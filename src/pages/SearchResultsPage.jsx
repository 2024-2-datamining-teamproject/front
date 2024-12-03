import React from "react";
import Header from "../components/Header";
import "./Styles.css";
import { useLocation } from "react-router-dom";

const SearchResultsPage = ({ set_login }) => {
  const location = useLocation();
  const results = location.state?.results;

  return (
    <div className="search-results-page">
      <Header set_login={set_login}/>
      <h2>검색 결과</h2>
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
