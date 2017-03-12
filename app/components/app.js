import React, {Component} from 'react'
import {connect} from 'react-redux'

class App extends Component {
	render(){
		return(
			<h1>Welcome to my starting point</h1>
		)
	}
}

export default connect()(App)