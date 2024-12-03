import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { registerUser } from "../api";

const RegisterPage = () => {
  const [favoriteMovie, setFavoriteMovie] = useState("");
  const [favoriteDirector, setFavoriteDirector] = useState("");
  const navigate = useNavigate();
  const location = useLocation();
  const userId = location.state.userId;

  const handleRegister = async () => {
    if (favoriteMovie.trim() && favoriteDirector.trim()) {
      const response = await registerUser(userId, favoriteMovie, favoriteDirector);
      navigate("/", { state: { recommendations: response } });
    } else {
      alert("모든 필드를 입력해주세요!");
    }
  };

  return (
    <div className="register-page">
      <h1 className="logo">AJOUFLIX</h1>
      <h2>처음 오셨군요!</h2>
      <div className="register-form">
        <label>
          좋아하는 영화:
          <input
            type="text"
            placeholder="영화 이름을 입력하세요"
            value={favoriteMovie}
            onChange={(e) => setFavoriteMovie(e.target.value)}
          />
        </label>
        <label>
          좋아하는 감독:
          <input
            type="text"
            placeholder="감독 이름을 입력하세요"
            value={favoriteDirector}
            onChange={(e) => setFavoriteDirector(e.target.value)}
          />
        </label>
        <button onClick={handleRegister}>계속하기</button>
      </div>
    </div>
  );
};

export default RegisterPage;
