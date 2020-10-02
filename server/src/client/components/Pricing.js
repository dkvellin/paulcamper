/* eslint-disable react/jsx-one-expression-per-line */
import React from 'react';
import PropTypes from 'prop-types';

const Pricing = ({ price }) => <div>`from {`${price} € / night`}`</div>;

Pricing.propTypes = {
  price: PropTypes.string.isRequired,
};

export default Pricing;
