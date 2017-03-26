import React, { Component } from 'react';
import Navigation from 'Components/Navigation';
import { actions } from 'Constants';
import { dispatchAction } from 'Utils/common';
import { connect } from 'react-redux';
import { Route } from 'react-router-dom';
import Home from 'Components/Home';
import About from 'Components/About';
import '../../scss/styles.scss';

class App extends Component {
  constructor() {
    super();
    this.handleBgToggle = this.handleBgToggle.bind(this);
  }

  handleBgToggle(e) {
    e.preventDefault();
    this.props.onToggleBg(!this.props.ui.showBgImage);
  }

  render() {
    return (
      <div className={`full-width full-height ${this.props.ui.showBgImage ? 'bg' : ''}`}>
        <Navigation />
        <Route path="/" exact component={Home} />
        <Route path="/about" component={About} />
        <button onClick={this.handleBgToggle}>Toggle Background</button>
      </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return {
    onToggleBg(bool) {
      dispatch(dispatchAction(actions.UPDATE_UI, { showBgImage: bool }));
    }
  }
}

export default connect(state => ({ ui: state.ui }), mapDispatchToProps)(App);
