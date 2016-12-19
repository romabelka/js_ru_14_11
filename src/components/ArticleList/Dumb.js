import React, { Component, PropTypes }  from 'react'
import accordion from '../../decorators/accordion'
import Loader from '../Loader'
import { Link } from 'react-router'

class ArticleList extends Component {
    static propTypes = {
        articles: PropTypes.array.isRequired,
        loading: PropTypes.bool,
        loadAllArticles: PropTypes.func.isRequired,
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
                <Link to = {`/articles/${article.id}`} activeStyle={{color: 'red'}}>{article.title}</Link>
            </li>
        ))

        return (
            <ul ref = {this.getContainerRef}>
                {articleItems}
            </ul>
        )
    }
}

export default accordion(ArticleList)