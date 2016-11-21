import React, { Component }  from 'react'
import Article from './Article'

class ArticleList extends Component {
    state = {
        openArticleId: null
    }

    render() {
        const { articles } = this.props

        const articleItems = articles.map(article => (
            <li key = {article.id}>
                <Article
                    article = {article}
                    isOpen = {article.id == this.state.openArticleId}
                    toggleOpen = {this.openArticle(article.id)}
                />
            </li>
        ))

        return (
            <ul>
                {articleItems}
            </ul>
        )
    }

    openArticle = id => ev => {
        this.setState({
            openArticleId: id
        })
    }
}

export default ArticleList