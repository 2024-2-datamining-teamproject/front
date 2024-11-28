import React, { useState } from 'react';
import MovieSection from '../components/MovieSection';
import Header from '../components/Header';
import './Styles.css'

const movies = [
  { title: 'Movie 1', thumbnail: 'https://via.placeholder.com/200x300' },
  { title: 'Movie 2', thumbnail: 'https://via.placeholder.com/200x300' },
  { title: 'Movie 3', thumbnail: 'https://via.placeholder.com/200x300' },
  { title: 'Movie 4', thumbnail: 'https://via.placeholder.com/200x300' },
  { title: 'Movie 5', thumbnail: 'https://via.placeholder.com/200x300' },
  { title: 'Movie 6', thumbnail: 'https://via.placeholder.com/200x300' },
  { title: 'Movie 7', thumbnail: 'https://via.placeholder.com/200x300' },
  { title: 'Movie 8', thumbnail: 'https://via.placeholder.com/200x300' },
  { title: 'Movie 9', thumbnail: 'https://via.placeholder.com/200x300' },
  { title: 'Movie 10', thumbnail: 'https://via.placeholder.com/200x300' },
  { title: 'Movie 11', thumbnail: 'https://via.placeholder.com/200x300' },
  { title: 'Movie 12', thumbnail: 'https://via.placeholder.com/200x300' },
  { title: 'Movie 13', thumbnail: 'https://via.placeholder.com/200x300' },
  { title: 'Movie 14', thumbnail: 'https://via.placeholder.com/200x300' },
  { title: 'Movie 15', thumbnail: 'https://via.placeholder.com/200x300' },
  { title: 'Movie 16', thumbnail: 'https://via.placeholder.com/200x300' },
];

const MainPage = () => {
  return (
    <div className="main-page">
      <Header />
      <MovieSection title='추천 콘텐츠' movies={movies}/>
      <MovieSection title='날씨 추천 콘텐츠' movies={movies}/>
      <MovieSection title='이런 영화 어때요?' movies={movies}/>
    </div>
  );
};

export default MainPage;