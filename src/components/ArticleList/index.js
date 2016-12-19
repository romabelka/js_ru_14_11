import React, { Component, PropTypes }  from 'react'
import { connect } from 'react-redux'
import { loadAllArticles } from '../../AC/articles'
import DumbArticleList from './Dumb'

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
}, { loadAllArticles })(DumbArticleList)