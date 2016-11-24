import React, { Component, PropTypes } from 'react'
import { findDOMNode } from 'react-dom'
import CommentList from './CommentList'

class Article extends Component {

/*
    shouldComponentUpdate(nextProps) {
        return nextProps.isOpen != this.props.isOpen
    }
*/

    componentWillUpdate() {
        console.log('---', 'updating Article')
    }

    componentDidUpdate() {
        console.log('---', findDOMNode(this.refs.comments))
    }

    render() {
        const { article, toggleOpen } = this.props
        return (
            <section>
                <h3 onClick = {toggleOpen}>{article.title}</h3>
                {this.getBody()}
            </section>
        )
    }


    getBody() {
        const { article, isOpen } = this.props
        if (!isOpen) return null
        return (
            <div>
                <p>{article.text}</p>
                <CommentList comments = {article.comments} ref = "comments" />
            </div>
        )
    }
}

Article.propTypes = {
    article: PropTypes.shape({
        title: PropTypes.string.isRequired,
        comments: PropTypes.array,
        text: PropTypes.string
    }).isRequired
}


export default Article