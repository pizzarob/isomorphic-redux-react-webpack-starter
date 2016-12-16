import React, { Component } from 'react';
import Navigation from 'components/Navigation';
import { actions } from 'constants';
import { dispatchAction } from 'utils/common';
import { connect } from 'react-redux';
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
                {this.props.children}
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