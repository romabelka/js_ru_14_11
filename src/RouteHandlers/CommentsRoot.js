import React, { Component, PropTypes } from 'react'
import CommentsPaginator from '../components/CommentsPaginator'
import LocalizedText from '../components/LocalizedText'

class CommentRoot extends Component {
    static propTypes = {

    };

    render() {
        return (
            <div>
                <h1><LocalizedText text="Comments pagination"/></h1>
                {this.props.children}
                <CommentsPaginator />
            </div>
        )
    }
}

export default CommentRoot