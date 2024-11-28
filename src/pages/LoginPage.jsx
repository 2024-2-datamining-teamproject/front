import React, { useState } from 'react';
import './Styles.css';

const LoginPage = ({ onLogin }) => {
  const [id, setId] = useState('');

  const handleLogin = () => {
    if (id.trim()) {
      onLogin(id);
    } else {
      alert('ID를 입력해주세요!');
    }
  };

  return (
    <div className="login-page">
      <h1 className="logo">AJOUFLIX</h1>
      <h2>로그인</h2>
      <div className="login-box">
        <input
          type="text"
          placeholder="ID를 입력하세요"
          value={id}
          onChange={(e) => setId(e.target.value)}
        />
        <button onClick={handleLogin}>로그인</button>
      </div>
    </div>
  );
};

export default LoginPage;
