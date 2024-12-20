import React, { useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import MovieSection from "../components/MovieSection";
import Header from "../components/Header";
import "./Styles.css";

const MainPage = ({ is_default, is_login, set_login }) => {
  const location = useLocation();
  const navigate = useNavigate();
  const recommendations = location.state?.recommendations;
  useEffect(() => {
    if (!is_login) {
      navigate("/login");
    }
  }, []);

  return (
    <div className="main-page">
      <Header set_login={set_login}/>
      {recommendations && (is_default?
        <>
          <MovieSection title="내가 본 영화와 비슷해요" movies={recommendations.predicted_movies} />
          <MovieSection title="나와 비슷한 사용자가 좋아해요" movies={recommendations.knn_movies} />
          <MovieSection title="이런 날씨에 어떄요?" movies={recommendations.weather_movies} />
        </>
        :
        <>
          <MovieSection title="내가 좋아하는 영화와 비슷해요" movies={recommendations.similar_movies} />
          <MovieSection title="내가 좋아하는 감독의 다른 영화" movies={recommendations.director_movies} />
          <MovieSection title="이런 날씨에 어떄요?" movies={recommendations.weather_movies} />
        </>
      )}
    </div>
  );
};

export default MainPage;
