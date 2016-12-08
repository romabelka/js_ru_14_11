import { normalizedArticles } from '../fixtures'
import { DELETE_ARTICLE, ADD_COMMENT } from '../constants'
import { arrayToMap } from '../utils'
import { Record } from 'immutable'

const ArticleModel = Record({
    id: null,
    title: null,
    comments: [],
    text: null,
    date: null
})

const defaultArticles= arrayToMap(normalizedArticles, ArticleModel)


export default (articlesState = defaultArticles, action) => {
    const { type, payload, generatedId } = action

    switch (type) {
        case DELETE_ARTICLE:
            return articlesState.filter(article => article.id != payload.articleId)

        case ADD_COMMENT:
            return articlesState.updateIn([payload.articleId, 'comments'], comments => comments.concat(generatedId))
    }

    return articlesState
}