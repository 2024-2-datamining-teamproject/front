import React from "react";
import "./Styles.css";

const placeholder = "https://via.placeholder.com/200x300";

const MovieCard = ({ movie }) => {
  const posterUrl = movie.poster ? movie.poster : placeholder;

  return (
    <div className="movie-card">
      <img src={posterUrl} alt={movie.title || "Placeholder"} />
      <h4>{movie.title || "제목 없음"}</h4>
    </div>
  );
};

export default MovieCard;
