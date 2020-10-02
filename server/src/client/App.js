import React from 'react';
import PropTypes from 'prop-types';
import { renderRoutes } from 'react-router-config';

const App = ({ route }) => (
  <div>
    <h1>Root of the App</h1>
    {renderRoutes(route.routes)}
  </div>
);

export default {
  component: App,
};

App.propTypes = {
  route: PropTypes.oneOfType([PropTypes.object]).isRequired,
};
