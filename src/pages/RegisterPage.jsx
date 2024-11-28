import React, { useState } from 'react';
import './Styles.css';

const RegisterPage = ({ onSubmit }) => {
  const [director, setDirector] = useState('');
  const [movie, setMovie] = useState('');

  const handleSubmit = () => {
    if (director.trim() && movie.trim()) {
      onSubmit({ director, movie });
    } else {
      alert('모든 필드를 입력해주세요!');
    }
  };

  return (
    <div className="register-page">
      <h1 className="logo">AJOUFLIX</h1>
      <h2>처음 오셨군요!</h2>
      <div className="register-form">
        <label>
          좋아하는 감독:
          <input
            type="text"
            placeholder="감독 이름을 입력하세요"
            value={director}
            onChange={(e) => setDirector(e.target.value)}
          />
        </label>
        <label>
          좋아하는 영화:
          <input
            type="text"
            placeholder="영화 이름을 입력하세요"
            value={movie}
            onChange={(e) => setMovie(e.target.value)}
          />
        </label>
        <button onClick={handleSubmit}>계속하기</button>
      </div>
    </div>
  );
};

export default RegisterPage;
