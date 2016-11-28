import React, { Component, PropTypes } from 'react'
import Comment from './Comment'
import toggleOpen from '../decorators/toggleOpen'
import NewCommentForm from './NewCommentForm'

class CommentList extends Component {
    static propTypes = {
        comments: PropTypes.array.isRequired,
        //from toggleOpen decorator
        isOpen: PropTypes.bool.isRequired,
        toggleOpen: PropTypes.func.isRequired
    }

    static defaultProps = {
        comments: []
    }


    componentWillReceiveProps() {
        //console.log('---', 'CL receiving props')
    }

    componentWillUpdate() {
        //console.log('---', 'CL will update')
    }


    render() {
        return (
            <div>
                {this.getButton()}
                {this.getBody()}
            </div>
        )
    }


    getButton() {
        const { comments, isOpen, toggleOpen } = this.props
        if ( !comments.length) return <span>No comments yet</span>
        return <a href="#" onClick = {toggleOpen}>{isOpen ? 'hide' : 'show'} comments</a>
    }

    getBody() {
        const { comments, isOpen } = this.props
        const commentForm = <NewCommentForm />
        if (!isOpen || !comments.length) return <div>{commentForm}</div>
        const commentItems = comments.map(comment => <li key = {comment.id}><Comment comment = {comment} /></li>)
        return <div><ul>{commentItems}</ul>{commentForm}</div>
    }
}

export default toggleOpen(CommentList)