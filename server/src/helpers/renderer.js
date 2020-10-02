import React from 'react';
import { renderToString } from 'react-dom/server';
import { StaticRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { renderRoutes } from 'react-router-config';
import serialize from 'serialize-javascript';
import { Helmet } from 'react-helmet';
import Routes from '../client/Routes';

export default (req, store) => {
  const content = renderToString(
    <Provider store={store}>
      <StaticRouter location={req.path} context={{}}>
        <div>{renderRoutes(Routes)}</div>
      </StaticRouter>
    </Provider>
  );

  const helmet = Helmet.renderStatic();

  return `
    <!DOCTYPE html>
    <html>
      <head>
      <!-- Required meta tags -->
      <meta charset="utf-8">
      <meta name="description" content="Paul Camper | Rent Campers">
      <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
        ${helmet.title.toString()}
        ${helmet.meta.toString()}
        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css" integrity="sha384-JcKb8q3iqJ61gNV9KGb8thSsNjpSL0n8PARn9HuZOnIxN0hoP+VmmDGMN5t9UJ0Z" crossorigin="anonymous">
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
        <style>a:hover{text-decoration: none;}</style>
      </head>
      <body>
        <div id="root">${content}</div>
        <script>
        window.INITIAL_STATE = ${serialize(store.getState())} 
        </script>
        <script src="/bundle.js"></script>
      </body>
    </html>
  `;
};
