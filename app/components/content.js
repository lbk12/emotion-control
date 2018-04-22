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
    console.log(sc.score)
    var color= "#45DE34"
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
