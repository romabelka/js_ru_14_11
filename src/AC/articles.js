import { DELETE_ARTICLE } from '../constants'

export function deleteArticle(articleId) {
    return {
        type: DELETE_ARTICLE,
        payload: {
            articleId
        }
    }
}