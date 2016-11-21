import React, { Component } from 'react'
import Comment from './Comment'

class CommentList extends Component {
    state = {
        isOpen: false
    }

    render() {
        return (
            <div>
                {this.getButton()}
                {this.getList()}
            </div>
        )
    }

    getButton() {
        const { isOpen } = this.state
        const { comments } = this.props
        if ( !comments || !comments.length) return <span>No comments yet</span>
        return <a href="#" onClick = {this.toggleOpen}>{isOpen ? 'hide' : 'show'} comments</a>
    }

    getList() {
        if (!this.state.isOpen) return null
        const { comments } = this.props
        if (!comments || !comments.length) return null
        const commentItems = comments.map(comment => <li key = {comment.id}><Comment comment = {comment} /></li>)
        return <ul>{commentItems}</ul>
    }

    toggleOpen = ev => {
        ev.preventDefault()
        this.setState({
            isOpen: !this.state.isOpen
        })
    }
}

export default CommentList