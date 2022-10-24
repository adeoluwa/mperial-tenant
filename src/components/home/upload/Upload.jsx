import React from 'react';

import Heading from '../../common/Heading';

import './upload.css';

import UploadCard from './UploadCard';

const Upload = () => {
  return (
    <>
      <section className="featured background">
        <div className="container">
          <Heading
            title="Uploaded Documents"
            subtitle="view all your documents"
          />
          <UploadCard />
        </div>
      </section>
    </>
  );
};

export default Upload;
