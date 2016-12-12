import React from 'react'
import { Router, Route, browserHistory } from 'react-router'
import Root from './components/Root'
import ArticleList from './components/ArticleList'
import Filters from './components/Filters'
import Counter from './components/Counter'

export default (
    <Router history={browserHistory}>
        <Route path = "/" component={Root}>
            <Route path = "/counter" component={Counter} />
            <Route path = "/articles" component={ArticleList} />
            <Route path = "/filters" component={Filters} />
        </Route>
    </Router>
)