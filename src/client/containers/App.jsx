import React, { Component } from 'react';
import Navigation from 'Components/Navigation';
import { actions } from 'Constants';
import { dispatchAction } from 'Utils/common';
import { connect } from 'react-redux';
import { Route } from 'react-router-dom';
import Home from 'Components/Home';
import About from 'Components/About';
import { withRouter } from 'react-router';
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
        <div className="wrap">
          <Navigation />
          <Route path="/" exact component={Home} />
          <Route path="/about" component={About} />
          <button style={{ margin: 'auto' }} className="btn" onClick={this.handleBgToggle}>Toggle Background</button>
        </div>
      </div>
    );
  }
}

App.propTypes = {
  onToggleBg: React.PropTypes.func,
  ui: React.PropTypes.object,
};

const mapDispatchToProps = dispatch => ({
  onToggleBg(bool) {
    dispatch(dispatchAction(actions.UPDATE_UI, { showBgImage: bool }));
  },
});

const mapStateToProps = state => ({
  ui: state.ui,
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App));
