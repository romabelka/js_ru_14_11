import { DELETE_ARTICLE, LOAD_ALL_ARTICLES, LOAD_ARTICLE, START, SUCCESS, FAIL } from '../constants'
import jquery from 'jquery'

export function deleteArticle(articleId) {
    return {
        type: DELETE_ARTICLE,
        payload: {
            articleId
        }
    }
}

export function loadAllArticles() {
    return {
        type: LOAD_ALL_ARTICLES,
        callAPI: '/api/article'
    }
}

export function loadArticle(id) {
    return (dispatch) => {
        dispatch({
            type: LOAD_ARTICLE + START,
            payload: { id }
        })

        setTimeout(() => {
            jquery.get(`/api/article/${id}`)
                .done(response => dispatch({
                    type: LOAD_ARTICLE + SUCCESS,
                    payload: { id, article: response }
                }))
                .fail(error => dispatch({
                    type: LOAD_ARTICLE + FAIL,
                    payload: { id, error}
                }))
        }, 1000)
    }
}