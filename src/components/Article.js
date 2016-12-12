import React, { Component, PropTypes } from 'react'
import { findDOMNode } from 'react-dom'
import CommentList from './CommentList'
import Loader from './Loader'
import { deleteArticle, loadArticle } from '../AC/articles'
import { connect } from 'react-redux'

class Article extends Component {

/*
    shouldComponentUpdate(nextProps) {
        return nextProps.isOpen != this.props.isOpen
    }
*/

    componentWillUpdate() {
    }

    componentDidMount() {
        const { article, loadArticle, articleId } = this.props
        if (!article || !article.text) loadArticle(articleId)
    }

    componentWillReceiveProps(nextProps) {
//        if (nextProps.isOpen && !this.props.isOpen && !nextProps.article.text) this.props.loadArticle(this.props.article.id)
    }

    componentDidUpdate() {
    }

    render() {
        const { article, toggleOpen } = this.props
        if (!article) return null
        return (
            <section>
                <h3 onClick = {toggleOpen}>{article.title}</h3>
                <a href = "#" onClick = {this.handleDeleteArticle}>delete me</a>
                {this.getBody()}
            </section>
        )
    }


    getBody() {
        const { article, isOpen } = this.props
        if (!isOpen) return null
        if (article.loading) return <Loader />
        return (
            <div>
                <p>{article.text}</p>
                <CommentList article = {article} ref = "comments" />
            </div>
        )
    }

    handleDeleteArticle = ev => {
        ev.preventDefault()
        const { deleteArticle, article } = this.props
        deleteArticle(article.id)
    }
}

Article.propTypes = {
    articleId: PropTypes.string.isRequired,
    article: PropTypes.shape({
        title: PropTypes.string,
        comments: PropTypes.array,
        text: PropTypes.string
    }),
    //from connect
    deleteArticle: PropTypes.func
}


export default connect((state, props) => {
    return {
        article: state.articles.getIn(['entities', props.articleId])
    }
}, {
    deleteArticle, loadArticle
})(Article)