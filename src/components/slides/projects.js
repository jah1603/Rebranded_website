import React, { Component } from 'react';
import projects from '../../assets/projects.js';
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
import posed from "react-pose";
import { Button, Intent, Position, Tooltip } from "@blueprintjs/core";

const Project = posed.div({
	hidden: { opacity: 0 },
	visible: { opacity: 1, transition: { duration: 300 }},
});

export default class Projects extends Component {
	constructor(props) {
        super(props);
        this.state = {
	        isOpen: false,
	        width: 0,
	        height: 0,
	        index: null,
        };
    }

    handleMouseEnter(i, e) {
    	let project = e.target;
    	let width = project.offsetWidth;
    	let height = project.offsetHeight;
    	this.setState({ width, height, index: i });
    }

    handleMouseLeave(i, e) {
    	this.setState({ index: null });
    }

    learnMore(url) {
    	if (url) {
    		let win = window.open(url, '_blank');
 			win.focus();
    	}
    }

		openLink(url) {
    	if (url) {
    		let win = window.open(url, '_blank');
 			win.focus();
    	}
    }

		renderProjectIcons(icons){
			let int = 500;
			return icons.map((icon, i) => {
				int += 90;
				return (
				<div key={icon.name} style={{display: 'inline-block'}} className="project-dev-icon">
				<Tooltip content={icon.name} position={Position.RIGHT}>
				<i style={{padding: '0.3rem'}} className={icon.class}></i>
				</Tooltip>
				</div>
			)
			})
		}

    renderProjects(projects) {
    	let int = 100;
		return projects.map((project, i) => {
			int += 90;
			let extraMargin = window.innerWidth < 840 ? (0.7 * window.innerWidth / 2) : 300
			let margin = ((12.5 * i) + (6)).toString()
			return(
				<div
					className="slide project wow fadeInUp"
					data-wow-delay={int + "ms"}
					key={i}
				>
				<div
				className={project.mobile === true ? "mobile-project-div" : "web-project-div"}
				onMouseEnter={this.handleMouseEnter.bind(this, i)}
				onMouseLeave={this.handleMouseLeave.bind(this, i)}
				>
					<Project
						className="project-description"
						pose={i === this.state.index ? 'visible' : 'hidden'}
                        style={{
                        	display: i === this.state.index ? 'flex' : 'none',
                            width: this.state.width,
                            height: this.state.height,

                        }}>
												<div style={{width: '100%'}}>
												<h2 style={{marginTop: 0, marginBottom: '1.5rem', color: 'white'}}>{project.name}</h2>
												{this.renderProjectIcons(project.icons)}
												</div>
                        <p style={{fontSize: '0.9rem'}}>{project.description}</p>

												{ project.description_part_two ? (
												<p style={{fontSize: '0.9rem'}}>{project.description_part_two}</p>
											) : null
										}
                        <Button
                        	className="learn-more"
                        	intent={Intent.PRIMARY}
                        	onClick={() => this.learnMore(project.url)}
                        >See more</Button>
                    </Project>
                    <img
										 key={i} style={{ width: project.mobile === true ? '100%' : '100%'}} src={project.image} alt={project.description}/>
                </div>
								{project.apple === true && project.name != "Reach" ? (
									<div>
								<a onClick={() => this.learnMore(project.url)}>
									<img style={{display: 'inline-block', marginTop: '0.4rem', marginRight: '1rem', width:"14%", height:"auto"}} src={require("../../assets/playstore.png")} alt="Android Store Link"/>
								</a>

								<a onClick={() => this.learnMore(project.apple_url)}>
									<img style={{display: 'inline-block', marginTop: '0.4rem', width:"14%", height:"auto"}} src={require("../../assets/appstore.png")} alt="Android Store Link"/>
								</a>

								</div>

							) : null }


							{project.mobile === true && project.apple != true && project.name != "Reach" ? (
								<div>
							<a onClick={() => this.learnMore(project.url)}>
								<img style={{display: 'inline-block', marginTop: '0.4rem', width:"14%", height:"auto"}} src={require("../../assets/playstore.png")} alt="Android Store Link"/>
							</a>

							</div>

						) : null }

						{project.video && window.innerWidth > 1200 ? (


							<div>
							<div>
							<a href={"#openModal" + i} style={{marginRight: '1rem', display: project.url ? 'inline-block' : "none"}}>
								<i className="fa fa-play fa-4x"></i>
							</a>
							</div>

							<div id={"openModal" + i} className="modalbg">
							<div className="dialog" style={{marginLeft: ((12.5 * i) + 3.75).toString() + '%'}}>
								<a href={"#close" + i} title="Close" className="close2">X</a>
								<video width="45%" style={{borderRadius: i===3 ? 0 :43}} controls>
													<source src={project.video} type="video/mp4"></source>
													<source src={project.video} type="video/ogg"></source>
													Your browser does not support the video tag.
												</video>
							</div>
							</div>
							</div>

						) : null
					}

								</div>
			)
		})
    }

    render() {
    	return(
			<div style={{width: '100%', backgroundColor: '#BCD4E6'}} className="section third">

		                {this.renderProjects(projects)}

	        </div>
		)
    }
}
