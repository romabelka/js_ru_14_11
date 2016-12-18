import React, { Component, PropTypes } from 'react'
import { Provider } from 'react-redux'
import store from '../store'
import Menu from '../components/Menu'
import MenuItem from '../components/Menu/MenuItem'
import LocalizedText from '../components/LocalizedText'
import dictionaries from '../dictionaries'
import Switcher from '../components/Switcher'

class Root extends Component {
    static propTypes = {

    };

    state = {
        username: '',
        language: 'ru'
    }

    static childContextTypes = {
        username: PropTypes.string,
        dictionary: PropTypes.object
    }

    getChildContext() {
        return {
            username: this.state.username,
            dictionary: dictionaries[this.state.language]
        }
    }

    render() {
        return (
            <Provider store={store}>
                <div>
                    <Switcher items = {['ru', 'en']} onChange={this.changeLang} active = {this.state.language}/>
                    <LocalizedText text="User"/>: <input value = {this.state.username} onChange={this.handleUserChange}/>
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

    changeLang = language => this.setState({ language })

    handleUserChange = (ev) => {
        this.setState({
            username: ev.target.value
        })
    }
}

export default Root