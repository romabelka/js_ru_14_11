import { INCREMENT } from '../constants'

export default (counterState = 0, action) => {
    const { type, payload } = action

    switch (type) {
        case INCREMENT: return counterState + 1
    }

    return counterState
}