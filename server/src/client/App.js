import React from 'react';
import PropTypes from 'prop-types';
import { renderRoutes } from 'react-router-config';

const App = ({ route }) => (
  <div className="container" style={{ padding: '100px 0' }}>
    {renderRoutes(route.routes)}
  </div>
);

export default {
  component: App,
};

App.propTypes = {
  route: PropTypes.oneOfType([PropTypes.object]).isRequired,
};
