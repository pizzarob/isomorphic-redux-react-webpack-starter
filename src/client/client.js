import { match, Router, browserHistory as history } from 'react-router';
import routes from './components/Routes';
import { render } from 'react-dom';
import React from 'react';
import { Provider } from 'react-redux';
import makeStore from './store';

const store = makeStore(window.__INITIAL_STATE__);

match({ history, routes }, (error, redirectLocation, renderProps) => {
    render(
        <Provider store={store}>
            <Router {...renderProps} />
        </Provider>,
        document.getElementById('app'));
});