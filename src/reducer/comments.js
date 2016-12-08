import { ADD_COMMENT } from '../constants'
import { normalizedComments } from '../fixtures'
import { arrayToMap} from '../utils'
import { Map } from 'immutable'

const defaultComments = arrayToMap(normalizedComments)

export default (comments = defaultComments, action) => {
    const { type, payload, response, error, generatedId } = action

    switch (type) {
        case ADD_COMMENT:
            return comments.set(generatedId, {...payload.comment, id: generatedId})
    }

    return comments
}