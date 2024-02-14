import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { Routes, Route, BrowserRouter as Router } from 'react-router-dom';


import App from './App';
import MainStage from './pages/MainStage';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <Router>
    <Routes>
      <Route path='/'             Component={MainStage} />
      <Route path='/App'          Component={App}       />
    </Routes>
  </Router>
);

reportWebVitals();
