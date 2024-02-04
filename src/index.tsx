import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { Routes, Route, BrowserRouter as Router } from 'react-router-dom';


import App from './App';
import MainStage from './pages/MainStage';
import AdBanner from './pages/AdBanner';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <Router>
    <Routes>
      <Route path='/'             Component={MainStage} />
      <Route path='/App'          Component={App}       />
      <Route path='/AdBanner'     Component={AdBanner}  />
    </Routes>
  </Router>
);

reportWebVitals();
