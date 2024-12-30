import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import App from 'components/App/App';
import HomePage from 'components/Pages/HomePage';
import BooksPage from 'components/Pages/BooksPage';
import { BooksProvider } from 'contexts/BooksContext';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BooksProvider>
      <Router>
        <App />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/books" element={<BooksPage />} />
        </Routes>
      </Router>
    </BooksProvider>
  </React.StrictMode>
);