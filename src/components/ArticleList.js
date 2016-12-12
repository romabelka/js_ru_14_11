import React, { Component, PropTypes }  from 'react'
import accordion from '../decorators/accordion'
import { connect } from 'react-redux'
import { loadAllArticles } from '../AC/articles'
import Loader from './Loader'
import { Link } from 'react-router'

class ArticleList extends Component {
    static propTypes = {
        articles: PropTypes.array.isRequired,
        //from accordion decorator
        isOpen: PropTypes.func.isRequired,
        toggleOpenItem: PropTypes.func.isRequired
    }

    componentDidMount() {
        this.props.loadAllArticles()
    }

    getContainerRef = ref => {
        this.containerRef = ref
    }


    render() {
        const { articles, loading, isOpen, toggleOpenItem } = this.props
        if (loading) return <Loader/>

        const articleItems = articles.map(article => (
            <li key = {article.id}>
                <Link to = {`/articles/${article.id}`}>{article.title}</Link>
            </li>
        ))

        return (
            <ul ref = {this.getContainerRef}>
                {articleItems}
            </ul>
        )
    }
}

export default connect(state => {
    const { articles, filters } = state
    const selected = filters.selected
    const { from, to } = filters.dateRange

    const filteredArticles = articles.entities
        .valueSeq()
        .toArray()
        .filter(article => {
            const published = Date.parse(article.date)
            return (!selected.length || selected.includes(article.id)) &&
                (!from || !to || (published > from && published < to))
        })
    return {
        articles: filteredArticles,
        loading: articles.loading
    }
}, { loadAllArticles })(accordion(ArticleList))