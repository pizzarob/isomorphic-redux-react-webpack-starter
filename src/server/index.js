import express from 'express';
import React from 'react';
import html from './html';
import App from 'Components/App';
import { renderToString } from 'react-dom/server';
import { StaticRouter } from 'react-router';
import { Provider } from 'react-redux';
import makeStore from 'Store';
import initialState from './initialState';
import { AppContainer } from 'react-hot-loader';

const app = express();

app.use(express.static('public'));

app.use((req, res, next) => {
  const store = makeStore(initialState);
  try {
    const context = {};
    res.status(200).send(html(renderToString(
      <AppContainer>
        <Provider store={store}>
          <StaticRouter
            context={context}
            location={req.originalUrl}
          >
            <App />
          </StaticRouter>
        </Provider>
      </AppContainer>
    ), store.getState()));
  } catch (err) {
    next(err);
  }
});

app.listen(process.env.PORT || 3000, () => {
  console.log(`App listening on port ${process.env.PORT || 3000}`);
});
