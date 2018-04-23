import React, {Component} from 'react'
import {connect} from 'react-redux'
import './style.scss'
import Content from './content'
var sentiment = require('sentiment')
class App extends Component {

	constructor(props) {
					super(props);
					this.state = {value: 'None', pageScore: 0};
    			this.handleChange = this.handleChange.bind(this);
	}
	componentDidMount() {
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
			"Congratulations to my sister for getting into UCLA for medical school!",
			"Wish Julie a Happy Birthday! We thought you'd want to celebrate Julie by sharing this photo to wish her a happy birthday.",
			"For many years, I have dreamed of becoming a physician.After many years of preparation, I am proud and honored to announce that I will be attending Drexel University College of Medicine in Philadelphia, PA this fall!! ",
			"if anyone is moving to boston and needs to sublet a place for august hmu i have an amazing offer. AMAZING",
			"sorry for the horrible theme music, deal with it."
		]

		var scoreData= [];
		var scores=[]
		data.forEach((entry) => {
			scoreData.push([entry, sentiment(entry).score])
			scores.push(sentiment(entry).score)
		})
		var pageScore = scores.reduce(add, 0);
		function add(a, b) {
		    return a + b;
		}
		pageScore = Math.round(pageScore/data.length * 100) / 100
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
				<div className="score-section">
					Page Score: {pageScore}
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
