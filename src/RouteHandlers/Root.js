import React, { Component, PropTypes } from 'react'
import { Provider } from 'react-redux'
import store from '../store'
import Menu from '../components/Menu'
import MenuItem from '../components/Menu/MenuItem'

class Root extends Component {
    static propTypes = {

    };

    state = {
        username: ''
    }

    static childContextTypes = {
        username: PropTypes.string
    }

    getChildContext() {
        return {
            username: this.state.username
        }
    }

    render() {
        return (
            <Provider store={store}>
                <div>
                    username: <input value = {this.state.username} onChange={this.handleUserChange}/>
                    <Menu>
                        <MenuItem link = "/articles" name="Articles index"/>
                        <MenuItem link = "/filters" name="Filters"/>
                        <MenuItem link = "/counter" name="Counter"/>
                        <MenuItem link = "/comments/1" name="Comments"/>
                    </Menu>
                    {this.props.children}
                </div>
            </Provider>
        )
    }

    handleUserChange = (ev) => {
        this.setState({
            username: ev.target.value
        })
    }
}

export default Root