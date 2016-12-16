import React from 'react';
import { Route, IndexRoute } from 'react-router';
import Home from './Home';
import About from './About';
import Application from './App';

export default (
    <Route path="/" component={Application}>
        <IndexRoute component={Home} />
        <Route path="about" component={About} />
    </Route>
);