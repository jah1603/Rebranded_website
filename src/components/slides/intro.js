import React, { Component } from 'react';
import WOW from 'wowjs';

const name  = { color: 'white' };
const divider = { color: 'white' };
const marginTop = { marginTop: '12px' };

export default class Intro extends Component {
	constructor(props) {
        super(props);
        this.state = {
            text: ''
        };
    }

	componentDidMount() {
		new WOW.WOW({
	        live: false
	    }).init();

		setTimeout(() => {
			this.writeText("FULL STACK DEVELOPER");
		}, 1000);

		setTimeout(() => {
			let page = this.props.fullpageApi.getActiveSection();
			if (page.index === 0) {
				this.props.moveDown();
			}
		}, 4400)
	}

	writeText(content) {
		let i = 0;
		let contentArray = content.split("");
		let text = '';
		setInterval(() => {
			if (i < contentArray.length) {
				text += contentArray[i];
				this.setState({ text });
				i++;
			}
		}, 100)
	}

	render() {
		return(
			<div className="section first">
				<div className="text-container wow fadeInDown" data-wow-delay="100ms">
	        		<h1 style={name}>JAMES<span style={divider}>/</span>HENDERSON</h1>
	        		<p style={marginTop}>
	        			{this.state.text}
	        			<span id="holder"></span><span className="blinking-cursor">|</span>
	        		</p>
							<a href="https://play.google.com/store/apps/developer?id=LevelApps+Edinburgh" className="us_link" target="_blank">
								<img className="contact-icon" src={require("../../assets/android.png")} alt="Android Store Link" width="50" height="50"></img>
							</a>

							<a href="https://itunes.apple.com/us/app/n%C3%BCv/id1455339660?ls=1&mt=8" className="us_link" target="_blank">
								<img className="contact-icon" src={require("../../assets/apple.png")} alt="Apple Store Link" width="50" height="50"></img>
							</a>
							<a href="https://jah1603.github.io" className="us_link" target="_blank">
								<img className="contact-icon" src={require("../../assets/blog.png")} alt="Blog Link" width="50" height="50"></img>
							</a>
	        	</div>
	        	<i id="moveDown" className="fa fa-chevron-down fa-3x bounce" onClick={() => this.props.moveDown()}></i>
	        </div>
		)
	}
}
