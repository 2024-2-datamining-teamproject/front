import React from 'react';
import Header from '../components/Header';
import './Styles.css';

const SearchResultsPage = () => {
  const placeholderResults = [
    {
      imdbID: '1',
      Title: 'Placeholder Movie 1',
      Poster: 'https://via.placeholder.com/200x300',
    },
    {
      imdbID: '2',
      Title: 'Placeholder Movie 2',
      Poster: 'https://via.placeholder.com/200x300',
    },
    {
      imdbID: '3',
      Title: 'Placeholder Movie 3',
      Poster: 'https://via.placeholder.com/200x300',
    },
    {
      imdbID: '4',
      Title: 'Placeholder Movie 4',
      Poster: 'https://via.placeholder.com/200x300',
    },
    {
      imdbID: '5',
      Title: 'Placeholder Movie 5',
      Poster: 'https://via.placeholder.com/200x300',
    },
    {
      imdbID: '6',
      Title: 'Placeholder Movie 6',
      Poster: 'https://via.placeholder.com/200x300',
    },
    {
      imdbID: '7',
      Title: 'Placeholder Movie 7',
      Poster: 'https://via.placeholder.com/200x300',
    },
    {
      imdbID: '8',
      Title: 'Placeholder Movie 8',
      Poster: 'https://via.placeholder.com/200x300',
    },
    {
      imdbID: '9',
      Title: 'Placeholder Movie 9',
      Poster: 'https://via.placeholder.com/200x300',
    },
  ];

  return (
    <div className="search-results-page">
      <Header />
      <h2>검색 결과: Placeholder</h2>
      <div className="movie-grid">
        {placeholderResults.map((movie) => (
          <div key={movie.imdbID} className="movie-card">
            <img src={movie.Poster} alt={movie.Title} />
            <h4>{movie.Title}</h4>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SearchResultsPage;
