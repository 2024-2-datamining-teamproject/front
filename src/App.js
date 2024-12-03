import './App.css';
import MainPage from './pages/MainPage';
import SearchResultsPage from './pages/SearchResultsPage';
import LoginPage from './pages/LoginPage';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import RegisterPage from './pages/RegisterPage';
import { useState } from 'react';

function App() {
  const [is_default, set_default] = useState(false);
  return (
    <Router>
      <div className="container">
        <Routes>
          <Route path="/" element={<MainPage is_default={is_default} />} />
          <Route path="/search" element={<SearchResultsPage />} />
          <Route path="/login" element={<LoginPage set_default={set_default}/>} />
          <Route path="/register" element={<RegisterPage />} />
        </Routes>
      </div>
    </Router>
    
  );
}

export default App;
