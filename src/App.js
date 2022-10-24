import React from 'react';

import NavBar from './components/common/header/NavBar';

import HomePage from './pages/HomePage';

// import Login from './components/auth/login/Login';



import './App.css';

function App() {
  return (
    <>
      <NavBar />
      {/* <Login /> */}
      <HomePage />
    </>
  );
}

export default App;
