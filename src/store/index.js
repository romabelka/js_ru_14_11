import { createStore, applyMiddleware, compose } from 'redux'
import reducer from '../reducer'
import logger from '../middlewares/logger'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

const enhancer = applyMiddleware(logger)
const store = createStore(reducer, {}, composeEnhancers(enhancer))

window.store = store

export default store