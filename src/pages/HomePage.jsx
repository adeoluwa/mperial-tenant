import React from 'react';

import { Routes, Route } from 'react-router-dom';

// import NavBar from '../components/common/header/NavBar';

import Docs from './Docs';

import Files from './Files';

import ProfilePage from './ProfilePage';

import Payment from './Payment';

import Home from '../components/home/Home';

// import NoMatch from './NoMatch';

const HomePage = () => {
  return (
    <>
      {/* <NavBar /> */}
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/profile" element={<ProfilePage />} />
        <Route path="/documents" element={<Docs />} />
        <Route path="/files" element={<Files />} />
        <Route path="/payment" element={<Payment />} />
        {/* <Route path="*" element={<NoMatch />} /> */}
      </Routes>
    </>
  );
};

export default HomePage;
