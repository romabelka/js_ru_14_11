import { createStore, applyMiddleware, compose } from 'redux'
import reducer from '../reducer'
import logger from '../middlewares/logger'
import generateId from '../middlewares/generateId'
import api from '../middlewares/api'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

const enhancer = applyMiddleware(generateId, api, logger)
const store = createStore(reducer, {}, composeEnhancers(enhancer))

window.store = store

export default store