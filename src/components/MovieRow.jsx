import React, { useRef } from "react";
import MovieCard from "./MovieCard";
import "./Styles.css";

const MovieRow = ({ movies }) => {
  const rowRef = useRef(null);

  const scrollLeft = () => {
    rowRef.current.scrollBy({ left: -600, behavior: "smooth" });
  };

  const scrollRight = () => {
    rowRef.current.scrollBy({ left: 600, behavior: "smooth" });
  };

  return (
    <div className="movie-row-container">
      <button className="scroll-btn left" onClick={scrollLeft}>
        ◀
      </button>
      <div className="movie-row" ref={rowRef}>
        {movies.map((movie, index) => (
          <MovieCard key={index} movie={movie} />
        ))}
      </div>
      <button className="scroll-btn right" onClick={scrollRight}>
        ▶
      </button>
    </div>
  );
};

export default MovieRow;
