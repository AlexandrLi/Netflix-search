require('css-modules-require-hook/preset');
import React from 'react';
import { renderToString } from 'react-dom/server';
import { StaticRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { matchRoutes } from 'react-router-config';

import routes from '../routes';
import configureStore from '../configureStore';
import App from '../app/App';

function renderFullPage(html, preloadedState) {
  return `
  <!DOCTYPE html>
  <html lang="en">
  
  <head>
    <base href="/">
    <title>React mentoring program</title>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link href="https://fonts.googleapis.com/css?family=Work+Sans:600" rel="stylesheet">
    <link href="styles.css" rel="stylesheet">
  </head>
  
  <body>
    <div id="container">${html}</div>
    <script src="/bundle.js"></script>
  </body>
  </html>
  `;
}

function handleRender(req, res) {
  const store = configureStore();

  const branch = matchRoutes(routes, req.url);
  const promises = branch.map(({ route, match }) => {
    const { fetchData } = route.component;

    if (!(fetchData instanceof Function)) {
      return Promise.resolve(null);
    }
    return fetchData(store.dispatch, match);
  });

  return Promise.all(promises)
    .then(() => {
      const context = {};
      const app = (
        <Provider store={store}>
          <StaticRouter location={req.url} context={context} >
            <App />
          </StaticRouter>
        </Provider>
      );

      const html = renderToString(app);
      return res.send(renderFullPage(html));
    });
}

export default handleRender;