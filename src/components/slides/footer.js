import React from 'react';

const Footer = () => {
	return(
		<div className="section fifth fp-auto-height">
				<div style={{marginBottom: 20}} className="footer social-links">
					<p>FIND ME ONLINE</p>
		          	<span>
		          		<a href="https://itunes.apple.com/us/app/n%C3%BCv/id1455339660?ls=1&mt=8" target="_blank" rel="noopener noreferrer">
		          			<i className="fa fa-apple fa-2x"></i>
		          		</a>
		          	</span>
		          	<span>
		          		<a href="https://play.google.com/store/apps/developer?id=LevelApps+Edinburgh" target="_blank" rel="noopener noreferrer">
		          			<i className="fa fa-android fa-2x"></i>
		          		</a>
		          	</span>
								<span>
		          		<a href="https://jah1603.github.io" aria-hidden="true" target="_blank" rel="noopener noreferrer">
		          			<i className="fa fa-rss fa-2x"></i>
		          		</a>
		          	</span>
		          	<span>
		          		<a href="https://github.com/jah1603" target="_blank" rel="noopener noreferrer">
		          			<i className="fa fa-github fa-2x"></i>
		          		</a>
		          	</span>
		          	<span>
		          		<a href="https://twitter.com/AppsLevel" target="_blank" rel="noopener noreferrer">
		          			<i className="fa fa-twitter fa-2x"></i>
		          		</a>
		          	</span>
								<p style={{fontSize: 8}}>© James Henderson 2019. All Rights Reserved</p>
		        </div>
		</div>
	)
}

export default Footer;
