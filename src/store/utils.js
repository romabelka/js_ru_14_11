import store from './index'

export function authorize(url) {
    return store.getState().user
}