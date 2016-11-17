import React from 'react'

export default props => {
    const { article } = props
    return (
        <section>
            <h3>{article.title}</h3>
            <p>{article.text}</p>
        </section>
    )
}