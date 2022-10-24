import React from 'react';

// import img from '../images/pricing.jpg';

import Back from '../common/Back';

import './profile.css';

import img from '../../assets/docs.jpg'

const Contact = () => {
  return (
    <>
      <section className="contact mb">
        <Back
          name="Tenant Profile"
          title="Your Profile"
          cover={img}
        />
        <div className="container">
          <form className="shadow">
            <h4>Fillup The Form</h4> <br />
            <div>
              <input type="text" placeholder="Name" />
              <input type="text" placeholder="Email" />
            </div>
            <input type="text" placeholder="Subject" />
            <input type="text" placeholder="Phone Number" />
            <input type="text" placeholder="Next of Kin" />
            <input type="text" placeholder="Former Address" />
            <input type="text" placeholder="Place of Work" />
            <input type="text" placeholder="Grantor" />
            <input type="text" placeholder="Place of Work" />
            <input type="text" placeholder="Position at Work" />
            <input type="text" placeholder="Annual Salary" />
            <input type="text" placeholder="Reason For Rent" />
            {/* <textarea cols="30" rows="10"></textarea> */}
            <button>Update</button>
          </form>
        </div>
      </section>
    </>
  );
};

export default Contact;

