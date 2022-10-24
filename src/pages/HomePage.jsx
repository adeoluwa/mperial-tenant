import React from 'react';

import { Routes, Route } from 'react-router-dom';

import File from '../components/file/File';

import Documents from '../components/documents/Documents';

import Home from '../components/home/Home';

import Profile from '../components/profile/Profile'

import Payment from '../components/payment/Payment';

// import NoMatch from './NoMatch';

const HomePage = () => {
  return (
    <>
      {/* <NavBar /> */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/document" element={<Documents />} />
        <Route path="/file" element={<File />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/payment" element={<Payment />} />
        {/* <Route path="*" element={<NoMatch />} /> */}
      </Routes>
    </>
  );
};

export default HomePage;
