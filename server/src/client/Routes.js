import React from 'react';
import { Route } from 'react-router-dom';
import Home from './components/Home';
import CampersList from './components/CampersList';

export default () => (
  <div>
    <Route exact path="/" component={Home} />
    <Route path="/campers" component={CampersList} />
  </div>
);
