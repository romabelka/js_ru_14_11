import React, { Component, PropTypes } from 'react'
import ArticleList from './ArticleList'
import Select from 'react-select'
import Chart from './Chart'
import DateRange from './DateRange'
import Counter from './Counter'
import 'react-select/dist/react-select.css'

class App extends Component {
    static propTypes = {
        articles: PropTypes.array.isRequired
    };

    state = {
        selected: null
    }

    render() {
        const options = this.props.articles.map(article => ({
            label: article.title,
            value: article.id
        }))
        return (
            <div>
                <Counter />
                <Chart />
                <DateRange />
                <ArticleList articles={this.props.articles} />
                <Select options = {options} value = {this.state.selected} onChange = {this.handleChange} multi = {true}/>
            </div>
        )
    }

    handleChange = selected => this.setState({ selected })
}

export default App