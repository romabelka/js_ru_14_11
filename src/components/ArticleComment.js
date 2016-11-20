import React, { Component } from 'react'

class ArticleComment extends Component {
    render() {
        const { comment } = this.props;
        return (
            <div className="comment">
                <span>{comment.user}</span>
                <div>{comment.text}</div>
            </div>
        )
    }
}

export default ArticleComment