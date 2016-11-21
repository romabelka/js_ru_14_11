import React, { Component, PropTypes } from 'react'
import CommentList from './CommentList'
import toggleOpen from '../mixins/toggleOpen'

const Article = React.createClass({
    mixins: [toggleOpen],
    propTypes: {
        article: PropTypes.shape({
            title: PropTypes.string.isRequired,
            comments: PropTypes.array,
            text: PropTypes.string
        }).isRequired
    },

    render() {
        const { article } = this.props
        return (
            <section>
                <h3 onClick = {this.toggleOpen}>{article.title}</h3>
                {this.getBody()}
            </section>
        )
    },

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
})

export default Article