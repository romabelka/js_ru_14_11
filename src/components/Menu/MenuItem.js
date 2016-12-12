import React, { Component, PropTypes } from 'react'

class MenuItem extends Component {
    static propTypes = {
        name: PropTypes.string,
        link: PropTypes.string
    };

    render() {
        const { link, name } = this.props
        return (
            <div>
                <a href = {link}>{name}</a>
            </div>
        )
    }
}

export default MenuItem