import React from 'react';
import PropTypes from 'prop-types';

const OwnerInfo = ({ name, pic }) => (
  <div>
    <img
      src={`https://stage.paulcamper.com/images/w_768,c_limit,q_auto${pic}.jpg`}
      alt="..."
      style={{ maxWidth: '50px', borderRadius: '50px', marginRight: 10 }}
    />
    <span>{name}</span>
  </div>
);

OwnerInfo.propTypes = {
  name: PropTypes.string.isRequired,
  pic: PropTypes.string.isRequired,
};

export default OwnerInfo;
