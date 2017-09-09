import React from 'react'
import ReactDOM from 'react-dom'
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import thunk from 'redux-thunk'
import { Route, NavLink, Link } from 'react-router-dom'
import rootReducer from './reducers/index.js'
import { BrowserRouter } from 'react-router-dom'
import App from './components/App/App'

const devTools = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()

const store = createStore(rootReducer, devTools, applyMiddleware(thunk))

const router = (
	<Provider store={store}>
		<BrowserRouter>
			<Route path="/" component={App} />
		</BrowserRouter>
	</Provider>
)

ReactDOM.render(router, document.getElementById('root'))
