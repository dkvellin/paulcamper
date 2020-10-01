import React from 'react';
import express from 'express';
import { renderToString } from 'react-dom/server';
import Home from './client/components/Home';

const app = express();

app.get('/', (req, res) => {
  const content = renderToString(<Home />);
  res.send(content);
});

app.listen(7777, () => {
  // eslint-disable-next-line no-console
  console.log('Listening on PORT 7777');
});
