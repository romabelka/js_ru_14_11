import { Map } from 'immutable'

export function arrayToMap(arr) {
    return arr.reduce((acc, el) => {
        return acc.set(el.id, el)
    }, new Map({}))
}