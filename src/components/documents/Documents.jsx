import React from 'react';

import './document.css';

import img from '../../assets/docs.jpg';

import Back from '../common/Back';

import Heading from '../common/Heading';

import Upload from '../home/upload/Upload';

import Footer from '../common/footer/Footer';

const Documents = () => {
  return (
    <>
      <section className="about">
        <Back name="Documents" title="View Uploaded Document" cover={img} />
        <div className="container flex mtop">
          <div className="left row">
            <Heading
              title=""
              subtitle=""
            />

            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip.
            </p>
            {/* <button className="btn2">More About Us</button> */}
          </div>
          <div className="right row">
            <img src="../../assets/docs.jpg" alt="" />
          </div>
        </div>
        <Upload />
      </section>
      <Footer />
    </>
  );
};

export default Documents;
