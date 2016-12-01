import React, { Component, PropTypes } from 'react'
import ArticleList from './ArticleList'
import Chart from './Chart'
import Filters from './Filters'
import Counter from './Counter'
import 'react-select/dist/react-select.css'

class App extends Component {
    render() {
        return (
            <div>
                <Counter />
                <Chart />
                <Filters />
                <ArticleList />
            </div>
        )
    }
}

export default App