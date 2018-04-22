'use strict'

import store from './store';
import app from './components/app'

import React from 'react';
import {render} from 'react-dom';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { Provider } from 'react-redux'

render(
	<Provider store={store}>
		<Router>
			<Switch>
				<Route exact path="/" component={app}/>
			</Switch>
		</Router>
	</Provider>,
	document.getElementById('main')
)
