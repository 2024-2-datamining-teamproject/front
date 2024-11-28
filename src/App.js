import './App.css';
import MainPage from './pages/MainPage';
import SearchResultsPage from './pages/SearchResultsPage';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  
  return (
    <Router>
      <div className="container">
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/search" element={<SearchResultsPage />} />
        </Routes>
      </div>
    </Router>
    
  );
}

export default App;
