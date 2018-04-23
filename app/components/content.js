import React from 'react'
import './style.scss'
var sentiment = require('sentiment')
class Content extends React.Component{
  constructor(props) {
          super(props);
  }
	render() {
    var entry= this.props.entry
    var sc= sentiment(entry);
    var color= "#08D70F"
    if(sc.score ==0){
      color = "#FEE501"
    }
    if(sc.score <0){
      color = "tomato"
    }
		return(
  			<div className="entry" style={{backgroundColor: color}}>
  				{this.props.entry}
  			</div>

		)
	}
}

export default Content
