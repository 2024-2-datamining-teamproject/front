import React from "react";
import MovieRow from "./MovieRow";
import './Styles.css'

const MovieSection = ({ title, movies }) => {
  return (
    <div>
      <h2 className="recommend-name">{title}</h2>
      <MovieRow movies={movies}/>
    </div>
  );
};

export default MovieSection;