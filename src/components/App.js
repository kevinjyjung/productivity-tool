import React, { Component } from 'react';
import { connect } from 'react-redux';
import Main from './Main';

class App extends Component {

    render() {
        return (
            <div className="app">
                <Main />
            </div>
        )
    }
}

export default connect()(App);
