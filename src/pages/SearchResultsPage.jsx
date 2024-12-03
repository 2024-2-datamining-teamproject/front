import React, { useState } from "react";
import Header from "../components/Header";
import { searchMovies } from "../api";
import "./Styles.css";
import { useLocation } from "react-router-dom";

const SearchResultsPage = () => {
  const location = useLocation();
  const results = location.state?.results;
  console.log(results.keyword)
  const keyword = location.state?.keyword;


  return (
    <div className="search-results-page">
      <Header />
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
