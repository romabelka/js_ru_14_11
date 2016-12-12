import React, { Component, PropTypes } from 'react'
import ArticleList from '../components/ArticleList'

class ArticleRoot extends Component {
    static propTypes = {

    };

    render() {
        return (
            <div>
                <ArticleList />
                {this.props.children}
            </div>
        )
    }
}

export default ArticleRoot