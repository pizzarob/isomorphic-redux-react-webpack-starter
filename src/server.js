import express from 'express';
import path from 'path';
import React from 'react';
import routes from './client/components/Routes';
import html from './html';
import { renderToString } from 'react-dom/server';
import { match, RouterContext } from 'react-router';
import { Provider } from 'react-redux';
import makeStore from './client/store';
import initialState from './initialState';

const app = express();

app.use(express.static('build'));

app.use((req, res) => {

    const store = makeStore(initialState);

    match({
        routes,
        location: req.originalUrl
    }, (error, redirectLocation, renderProps) => {
        if (error) {
            res.status(500).send(error.message)
        } else if (redirectLocation) {
            res.redirect(302, redirectLocation.pathname + redirectLocation.search)
        } else if (renderProps) {
            // You can also check renderProps.components or renderProps.routes for
            // your "not found" component or route respectively, and send a 404 as
            // below, if you're using a catch-all route.
            res.status(200).send(html(renderToString(
                <Provider store={store}>
                    <RouterContext {...renderProps} />
                </Provider>
            ), store.getState()));
        } else {
            res.status(404).send('Not found')
        }
    });
});

app.listen(process.env.PORT || 3000, function () {
    console.log(`App listening on port ${process.env.PORT || 3000}`);
});