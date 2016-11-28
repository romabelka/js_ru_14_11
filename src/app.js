import React from 'react'
import { render } from 'react-dom'
import { articles } from './fixtures'
import App from './components/App'
import store from './store'


render(<App articles = {articles} />, document.getElementById('container'))