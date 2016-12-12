import React, { Component, PropTypes } from 'react'
import Article from '../components/Article'

class ArticlePage extends Component {
    static propTypes = {

    };

    render() {
        return (
            <Article articleId={this.props.params.id} isOpen = {true} key = {this.props.params.id}/>
        )
    }
}

export default ArticlePage