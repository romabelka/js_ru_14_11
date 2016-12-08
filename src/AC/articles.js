import { DELETE_ARTICLE, LOAD_ALL_ARTICLES } from '../constants'

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