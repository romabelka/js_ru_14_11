import React, { Component, PropTypes } from 'react'
import LocalizedText from '../components/LocalizedText'

class ArticleIndexPage extends Component {
    static propTypes = {

    };

    render() {
        return (
            <h1>
                <LocalizedText text="Choose your article" />
            </h1>
        )
    }
}

export default ArticleIndexPage