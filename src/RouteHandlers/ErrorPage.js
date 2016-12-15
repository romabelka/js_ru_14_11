import React, { Component, PropTypes } from 'react'

class ErrorPage extends Component {
    static propTypes = {

    };

    render() {
        console.log('---', this.props.location)
        return (
            <h1>
                Error: {this.props.location.query.message}
            </h1>
        )
    }
}

export default ErrorPage