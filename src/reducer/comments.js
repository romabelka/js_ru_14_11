import { ADD_COMMENT, LOAD_COMMENTS, LOAD_COMMENTS_FOR_PAGE, START, SUCCESS } from '../constants'
import { arrayToMap, ReducerState } from '../utils'
import { Record, Map, List } from 'immutable'

const CommentModel = Record({
    id: null,
    text: null,
    user: null
})

const CommentsReducerState = Record({
    entities: new Map({}),
    pagination: new Map({}),
    total: null
})

const defaultState = CommentsReducerState()

export default (comments = defaultState, action) => {
    const { type, payload, response, error, generatedId } = action

    switch (type) {
        case ADD_COMMENT:
            return comments.set(generatedId, {...payload.comment, id: generatedId})

        case LOAD_COMMENTS + SUCCESS:
            return comments.mergeIn(['entities'], arrayToMap(response, CommentModel))

        case LOAD_COMMENTS_FOR_PAGE + START:
            return comments.setIn(['pagination', payload.page], new List([]))

        case LOAD_COMMENTS_FOR_PAGE + SUCCESS:
            return comments
                .mergeIn(['entities'], arrayToMap(response.records, CommentModel))
                .setIn(['pagination', payload.page], new List(response.records.map(record => record.id)))
                .set('total', response.total)

    }

    return comments
}