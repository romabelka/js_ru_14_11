import React, { Component, PropTypes } from 'react'

class Menu extends Component {
    static propTypes = {

    };

    render() {
        return (
            <div>
                <h3>Choose menu item:</h3>
                <section>
                    {this.props.children}
                </section>
            </div>
        )
    }
}

export default Menu