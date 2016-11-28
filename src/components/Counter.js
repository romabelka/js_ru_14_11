import React, { Component, PropTypes } from 'react'
import store from '../store'
import { increment } from '../AC/counter'

class Counter extends Component {
    static propTypes = {

    };

    state = {
        count: store.getState().count
    }

    componentDidMount() {
        store.subscribe(this.onStoreChange)
    }

    onStoreChange = () => {
        this.setState({
            count: store.getState().count
        })
    }

    render() {
        return (
            <div>
                <h2>{this.state.count}</h2>
                <a href="#" onClick = {this.incrementCounter}>increment</a>
            </div>
        )
    }

    incrementCounter = ev => {
        ev.preventDefault()
        const action = increment()
        store.dispatch(action)
        console.log('---', 'incrementing')
    }
}

export default Counter