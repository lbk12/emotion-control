'use strict'
import React from 'react'
import {Router, Route, IndexRedirect, browserHistory} from 'react-router'
import {render} from 'react-dom'
import {Provider} from 'react-redux'
import store from './store';

import app from './components/app'

render(
	<Provider store={store}>
	<Router history = {browserHistory}>
	<Route path="/" component={app}>
	</Route>
	</Router>
	</Provider>,
	document.getElementById('main')
)
