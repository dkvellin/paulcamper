import React from 'react';
import PropTypes from 'prop-types';

const Image = ({ mainImg }) => (
  <div className="row">
    <div className="col-md-8">
      <img
        className="img-fluid"
        src={
          mainImg
            ? `https://stage.paulcamper.com/images/w_768,c_limit,q_auto${mainImg}.jpg`
            : '#'
        }
        alt=""
      />
    </div>
  </div>
);

Image.propTypes = {
  mainImg: PropTypes.string.isRequired,
};

export default Image;
