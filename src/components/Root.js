import React, { Component, PropTypes } from 'react'
import { Provider } from 'react-redux'
import App from './App'

class Root extends Component {
    static propTypes = {

    };

    render() {
        return (
            <Provider store={this.props.store}>
                <App />
            </Provider>
        )
    }
}

export default Root