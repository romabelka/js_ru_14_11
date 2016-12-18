import React, { Component, PropTypes } from 'react'
import LocalizedText from '../LocalizedText'

class Menu extends Component {
    static propTypes = {

    };

    render() {
        return (
            <div>
                <h3><LocalizedText text="Choose menu item"/>:</h3>
                <section>
                    {this.props.children}
                </section>
            </div>
        )
    }
}

export default Menu