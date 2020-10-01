const express = require('express');
const React = require('react');
const { renderToString } = require('react-dom/server');
const Home = require('./client/components/Home');

const app = express();

app.get('/', (req, res) => {
  const content = renderToString(<Home />);
  res.send(content);
});

app.listen(7777, () => {
  console.log('Listening on PORT 7777');
});
