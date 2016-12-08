import { DELETE_ARTICLE, LOAD_ALL_ARTICLES, ADD_COMMENT, SUCCESS, FAIL, START } from '../constants'
import { arrayToMap, ReducerState } from '../utils'
import { Record, Map } from 'immutable'

const ArticleModel = Record({
    id: null,
    title: null,
    comments: [],
    text: null,
    date: null
})

const defaultArticles= arrayToMap([], ArticleModel)

const defaultState = new ReducerState({
    entities: defaultArticles,
    loading: false
})

export default (articlesState = defaultState, action) => {
    const { type, payload, generatedId, response } = action

    switch (type) {
        case DELETE_ARTICLE:
            return articlesState.deleteIn(['entities', payload.articleId])

        case ADD_COMMENT:
            return articlesState.updateIn(['entities', payload.articleId, 'comments'],
                comments => comments.concat(generatedId))

        case LOAD_ALL_ARTICLES + START:
            return articlesState.set('loading', true)

        case LOAD_ALL_ARTICLES + SUCCESS:
            return articlesState
                .set('entities', arrayToMap(response, ArticleModel))
                .set('loading', false)
    }

    return articlesState
}