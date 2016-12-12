import React, { Component, PropTypes } from 'react'
import ArticleList from './ArticleList'
import Filters from './Filters'
import Counter from './Counter'

class App extends Component {
    render() {
        return (
            <div>
                <Counter />
                <Filters />
                <ArticleList />
            </div>
        )
    }
}

export default App