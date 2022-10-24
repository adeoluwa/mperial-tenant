import React from 'react';

import ReactDOM from 'react-dom/client';

import './styles/index.css';

import App from './App';

import { AuthProvider } from './components/auth/context/AuthProvider';

import { BrowserRouter as Router } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Router>
    <AuthProvider>
      <App />
    </AuthProvider>
  </Router>
);
