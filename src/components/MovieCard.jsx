import './Styles.css'

const MovieCard = ({ movie, index }) => {
  return(
    <div key={index} className="movie-card">
            <img src={movie.thumbnail} alt={movie.title} />
            <h4>{movie.title}</h4>
          </div>
  );
};

export default MovieCard;