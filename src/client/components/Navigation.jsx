import React, { Component } from 'react';
import { Link } from 'react-router';

class Navigation extends Component {
    constructor() {
        super();
    }
    render() {
        return (
            <nav>
                <Link to="/">Home</Link>
                <Link to="/about">About</Link>
            </nav>
        );
    }
}

export default Navigation;