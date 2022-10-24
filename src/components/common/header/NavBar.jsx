import React, { useState } from 'react';

import { Link } from 'react-router-dom';

import Logo from '../../../assets/new logo.jpg';

import { nav } from '../../data/Data';

import './header.css';

import { FaTimes, FaBars } from 'react-icons/fa';

const NavBar = () => {
  const [navlist, setNavlist] = useState(false);

  return (
    <>
      <header>
        <div className="container flex ">
          <div className="logo">
            <img src={Logo} alt="" className="h-10" />
            {/* <h2 className="text-3xl ">Mperial Apartment</h2> */}
          </div>
          <div className="nav">
            <ul className={navlist ? 'small' : 'flex'}>
              {nav.map((list, index) => (
                <li key={index}>
                  <Link to={list.path}>{list.text}</Link>
                </li>
              ))}
            </ul>
            {/* <button className="flex sm">
              <i>
                <FaSignOutAlt />
              </i>{' '}
              Log Out
            </button> */}
          </div>

          <div className="toggle">
            <button onClick={() => setNavlist(!navlist)} className="flex">
              {navlist ? (
                <i>
                  <FaTimes />
                </i>
              ) : (
                <i>
                  <FaBars />
                </i>
              )}
            </button>
          </div>
        </div>
      </header>
    </>
  );
};

export default NavBar;
