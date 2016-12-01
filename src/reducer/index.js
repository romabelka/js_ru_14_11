import { combineReducers } from 'redux'
import articleReducer from './articles'
import counterReducer from './counter'
import filters from './filters'

export default combineReducers({
    articles: articleReducer,
    count: counterReducer,
    filters
})