import React from 'react';

import { footer } from '../../data/Data';

import './footer.css';




const Footer = () => {
  return (
    <>
      <footer>
        <div className="container">
          <div className="box">
            <div className="logo">
              {/* <img src="../images/logo-light.png" alt="" /> */}
              <h2>Do You Need Help With Anything?</h2>

              <div className="input flex">
                <input type="text" placeholder="Email Address" />
                <button>Say hi</button>
              </div>
            </div>
          </div>

          {footer.map((val) => (
            <div className="box">
              <h3>{val.title}</h3>
              <ul>
                {val.text.map((items) => (
                  <li> {items.list} </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </footer>
      
    </>
  );
};

export default Footer;
