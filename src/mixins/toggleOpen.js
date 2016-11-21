export default {
    getInitialState() {
        return {
            isOpen: false
        }
    },

    handleClick(ev) {
        this.setState({
            isOpen: !this.state.isOpen
        })
    }
}