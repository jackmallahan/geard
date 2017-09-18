import React from 'react'
import { render } from 'react-dom'
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import { Route } from 'react-router-dom'
import rootReducer from './reducers/index'
import { BrowserRouter } from 'react-router-dom'
import { ConnectedRouter, routerMiddleware } from 'react-router-redux'
import createHistory from 'history/createBrowserHistory'
import App from './components/App/App'

const devTools = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()

const history = createHistory()

const historyMiddleware = routerMiddleware(history)

const store = createStore(rootReducer, devTools, applyMiddleware(historyMiddleware))

const router = (
	<Provider store={store}>
		<ConnectedRouter history={history}>
			<BrowserRouter>
				<Route path="/" component={App} />
			</BrowserRouter>
		</ConnectedRouter>
	</Provider>
)

render(router, document.getElementById('root'))
