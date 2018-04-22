import React, {Component} from 'react'
import {connect} from 'react-redux'
import './style.scss'
import Content from './content'
var sentiment = require('sentiment')
class App extends Component {

	constructor(props) {
					super(props);
					this.state = {value: 'None'};

    			this.handleChange = this.handleChange.bind(this);
	}
	componentDidMount() {
				var data = [
					"I am in a great mood today. The weather is beautiful out!",
					"School is so hard. I am going to fail all my finals. This sucks.",
					"I feel okay today. Not good not bad!",
					"I fell and hurt my knee yesterday and then I bruised my arm right after.",
					"Congratulations to my sister for getting into UCLA for medical school!"

				]

	}
	handleChange(event) {
		this.setState({value: event.target.value});
	}
	render(){
		var data = [
			"I am in a great mood today. The weather is beautiful out!",
			"School is so hard. I am going to fail all my finals. This sucks.",
			"I feel okay today. Not good not bad!",
			"I fell and hurt my knee yesterday and then I bruised my arm right after.",
			"Congratulations to my sister for getting into UCLA for medical school!"
		]

		var scoreData= [];

		data.forEach((entry) => {
			scoreData.push([entry, sentiment(entry).score])
		})
		console.log(scoreData)
		const sortedData = [].concat(scoreData)
	  if(this.state.value=="Negative"){
			sortedData.sort((a, b) => a[1] > b[1])
		}
		else if(this.state.value=="Positive"){
			sortedData.sort((a, b) => a[1] < b[1])
		}
		let entries = sortedData.map((entry, i)=> {
            return (
							<Content key={i} entry={entry[0]}/>
						)
		})
		return(
			<div className="home-container">
				<div className="header-section">
					Emotion Filter
				</div>
				<div className="select-section">
						<form>
			        <label>
			          Sort by emotion:
			          <select value={this.state.value} onChange={this.handleChange}>
									<option value="None">None</option>
									<option value="Positive">Positive</option>
			            <option value="Negative">Negative</option>
			          </select>
			        </label>
		      	</form>
				</div>
				<div className="content-section">
					{entries}
				</div>
			</div>
		)
	}
}

export default connect()(App)
