import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Navigate, Route, BrowserRouter as Router } from 'react-router-dom';
import { Routes } from 'react-router-dom';
import Main from './Sites/Main';
import Admin from './Sites/Admin';
import CarDetail from './Sites/CarDetail';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Router>
      <Routes>
        <Route path='/' element={<Navigate to="/Main" />} />
        <Route path='/Main' element={<Main />} />
        <Route path='/Admin' element={<Admin />} />
        <Route path='*' element={<Navigate to="/" />} />
        <Route path="/car/:id" element={<CarDetail />} />
      </Routes>
    </Router>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
