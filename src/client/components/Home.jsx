import React, { Component } from 'react';
import TodoList from 'containers/TodoContainer';

class Home extends Component {
    constructor() {
        super();
    }

    render() {
        return (
            <div>
                <h1>Home</h1>
                <TodoList />
            </div>
        );
    }
}

export default Home;