import React, { Component } from 'react'
import CommentList from './CommentList'

class Article extends Component {

    constructor() {
        super()
        this.state = {
            isOpen: false,
            obj: { foo: 'bar' }
        }
    }

    render() {
        const { article } = this.props
        return (
            <section>
                <h3 onClick = {this.handleClick}>{article.title}</h3>
                {this.getBody()}
            </section>
        )
    }

    getBody() {
        if (!this.state.isOpen) return null
        const { article } = this.props
        return (
            <div>
                <p>{article.text}</p>
                <CommentList comments = {article.comments} />
            </div>
        )
    }

    handleClick = ev => {
        this.setState({
            isOpen: !this.state.isOpen
        })
    }
}

export default Article