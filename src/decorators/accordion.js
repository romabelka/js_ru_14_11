import React from 'react'

export default (Component) => class AccordionDecorator extends React.Component {
    constructor() {
        super()
        this.state = {
            openItemId: false
        }
    }

    componentWillReceiveProps() {
        //console.log('---', 'accordion receiving props')
    }

    componentWillUpdate() {
        ///console.log('---', 'accordion will update')
    }

    render() {
        return <Component {...this.props} isOpen = {this.isOpen} toggleOpenItem = {this.toggleOpenItem}/>
    }

    isOpen = id => this.state.openItemId == id

    toggleOpenItem = id => ev => {
        this.setState({
            openItemId: this.state.openItemId == id ? null : id
        })
    }

}