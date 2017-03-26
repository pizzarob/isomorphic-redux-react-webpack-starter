import ReactDOM from 'react-dom';
import React from 'react';
import { Provider } from 'react-redux';
import { createLogger } from 'redux-logger';
import createSagaMiddleware from 'redux-saga';
import makeStore from 'Store';
import sagas from 'Sagas';
import { ConnectedRouter, routerMiddleware } from 'react-router-redux';
import createHistory from 'history/createBrowserHistory';
import App from 'Containers/App';
import { AppContainer } from 'react-hot-loader';

const logger = createLogger();
const sagaMiddleware = createSagaMiddleware();
const history = createHistory();

const routeMiddleware = routerMiddleware(history);

const store = makeStore(
  window.__INITIAL_STATE__,
  logger,
  sagaMiddleware,
  routeMiddleware,
);

sagaMiddleware.run(sagas);

const render = Component => {
  ReactDOM.render(
    <AppContainer>
      <Provider store={store}>
        <ConnectedRouter history={history}>
          <Component />
        </ConnectedRouter>
      </Provider>
    </AppContainer>,
    document.getElementById('app')
  );
};

render(App);

if (module.hot && process.env.NODE_ENV) {
  module.hot.accept('Containers/App', () => {
    const NextApp = require('Containers/App').default; //eslint-disable-line
    render(NextApp);
  });
}

