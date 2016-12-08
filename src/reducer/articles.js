import { normalizedArticles } from '../fixtures'
import { DELETE_ARTICLE, ADD_COMMENT } from '../constants'
import { arrayToMap } from '../utils'

const defaultArticles= arrayToMap(normalizedArticles)

export default (articlesState = defaultArticles, action) => {
    const { type, payload, generatedId } = action

    switch (type) {
        case DELETE_ARTICLE:
            return articlesState.filter(article => article.id != payload.articleId)

        case ADD_COMMENT:
            return articlesState.update(payload.articleId, article => ({
                ...article,
                comments: (article.comments || []).concat(generatedId)
            }))
    }

    return articlesState
}