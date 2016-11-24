import React, { Component, PropTypes } from 'react'
//import some 3d-party library, d3

class Chart extends Component {
    static propTypes = {

    };

    componentDidMount() {
        //draw d3 chart into this.refs.container
    }

    componentWillReceiveProps(nexProps) {
        //updateChart
    }

    componentWillUnmount() {
        //kill chart
    }

    render() {
        return <div ref="container"/>
    }
}

export default Chart