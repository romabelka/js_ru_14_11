import React, { Component, PropTypes } from 'react'
import { Link } from 'react-router'
import './style.css'

class MenuItem extends Component {
    static propTypes = {
        name: PropTypes.string,
        link: PropTypes.string
    };

    render() {
        const { link, name } = this.props
        return (
            <div>
                <Link to = {link} activeClassName="active">{name}</Link>
            </div>
        )
    }
}

export default MenuItem