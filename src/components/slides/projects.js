import React, { Component } from 'react';
import projects from '../../assets/projects.js';
import posed from "react-pose";
import { Button, Intent, Position, Tooltip } from "@blueprintjs/core";
import { ToastContainer, toast, Zoom } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

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
					overlayHidden: window.innerWidth < 460 ? false : true
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

		closeModal(i){
				var inloc = window.location.toString();
    		let win = window.open(inloc.replace("#openModal", "").replace("2", "").replace("4", "") + "#close" + i , "_self");
 				win.focus();
		}

		playVideo(i, project) {
			if (project.video && window.innerWidth > 1200){
    	if (i) {
				var inloc = window.location.toString();
				if (inloc.includes("#close")){
					var location = inloc.replace("#close", "").replace("2", "").replace("4", "")
					var win = window.open(location.replace("#close" + i, "") + "#openModal" + i, "_self");
				}
				else {
    			var win = window.open(window.location + "#openModal" + i, "_self");
			}
 			win.focus();
    	}
		}
		else {

			this.openLink(project.url);

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
				<div className="toaster-container">
				<ToastContainer transition={Zoom} position={toast.POSITION.TOP_LEFT} autoClose={4000}/>
				</div>
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
                        <p>{project.description}</p>

												{ project.description_part_two ? (
												<p>{project.description_part_two}</p>
											) : null
										}
										{ project.see_more === false ? (
											null
										) :
                        <Button
                        	className="learn-more"
                        	intent={Intent.PRIMARY}
                        	onClick={() => project.name === "Findasaur" || project.name === "Weather2..." ? this.playVideo(i, project) : this.learnMore(project.url)}
                        >
												{project.name === "Findasaur" || project.name === "Weather2..." ? "View" : "View" }
												</Button>
											}

                    </Project>
                    <img
										 key={i} style={{ width: window.innerWidth < 460 ? '100%' : '92%'}} src={project.image} alt={project.description}/>
                </div>
								{project.apple === true && project.name !== "Reach" ? (
									<div>
								<a className="store-logo" onClick={() => this.learnMore(project.url)}>
									<img className="store-logo" style={{display: 'inline-block', marginTop: '0.4rem', marginLeft: '0.5rem', marginRight: '0.5rem', height:"auto"}} src={require("../../assets/playstore.png")} alt="Android Store Link"/>
								</a>


								<a className="store-logo" onClick={() => this.learnMore(project.apple_url)}>
									<img className="store-logo" style={{display: 'inline-block', marginTop: '0.4rem', marginLeft: '0.5rem', marginRight: '0.5rem', height:"auto"}} src={require("../../assets/appstore.png")} alt="Android Store Link"/>
								</a>

								</div>

							) : null }


							{project.mobile === true && project.apple !== true && project.name !== "Reach" ? (
								<div>
							<a className="store-logo" onClick={() => this.learnMore(project.url)}>
								<img className="store-logo" style={{display: 'inline-block', marginTop: '0.4rem', marginLeft: '0.5rem', height:"auto"}} src={require("../../assets/playstore.png")} alt="Android Store Link"/>
							</a>

							</div>

						) : null }

						{project.video && window.innerWidth > 1200 ? (


							<div>


							<div id={"openModal" + i} className="modalbg">
							<div className="dialog" style={{marginLeft: ((11.1111111 * i) + 3).toString() + '%'}}>
								<a onClick={() => this.closeModal(i)} title="Close" className="close2">X</a>
								<video width="45%" style={{borderRadius: i=== 4 ? 0 : 43}} controls>
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
