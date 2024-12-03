import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { loginUser } from "../api";

const LoginPage = ({ set_default, set_login }) => {
  const [id, setId] = useState("");
  const navigate = useNavigate();

  const handleLogin = async () => {
    if (id.trim()) {
      const response = await loginUser(id);
      if (response.existing_user) {
        set_default(true);
        set_login(true);
        navigate("/", { state: { recommendations: response } });
      } else {
        set_default(false);
        navigate("/register", { state: { userId: id } });
      }
    } else {
      alert("ID를 입력해주세요!");
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
