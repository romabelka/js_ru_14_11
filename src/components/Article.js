import React, { Component, PropTypes } from 'react'
import CommentList from './CommentList'
import toggleOpen from '../decorators/toggleOpen'

function Article(props) {
    const { article, toggleOpen } = props
    return (
        <section>
            <h3 onClick = {toggleOpen}>{article.title}</h3>
            {getBody(props)}
        </section>
    )
}

Article.propTypes = {
    article: PropTypes.shape({
        title: PropTypes.string.isRequired,
        comments: PropTypes.array,
        text: PropTypes.string
    }).isRequired
}

function getBody(props) {
    const { article, isOpen } = props
    if (!isOpen) return null
    return (
        <div>
            <p>{article.text}</p>
            <CommentList comments = {article.comments} />
        </div>
    )
}


export default toggleOpen(Article)