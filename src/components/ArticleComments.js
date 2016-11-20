import React, { Component } from 'react'
import ArticleComment from './ArticleComment'

class ArticleComments extends Component {

    constructor() {
        super();
        this.state = {
            isOpen: false
        }
    }

    render() {
        const { comments } = this.props;

        if (!comments) {
            return null;
        }

        const items = this.state.isOpen ? comments.map(comment => <ArticleComment key = {comment.id} comment = {comment} />) : null;

        return (
            <div>
                <button onClick={this.handleClick}>{this.state.isOpen ? "Спрятать комментарии" : "Показать комментарии"}</button>
                {items}
            </div>
        )
    }

    handleClick = ev => {
        this.setState({
            isOpen: !this.state.isOpen
        })
    }
}

export default ArticleComments