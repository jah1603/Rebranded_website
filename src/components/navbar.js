import React from 'react';
import logo from '../assets/jicon.png';

const Navbar = ({moveToIntro, moveToAbout, moveToPortfolio, moveToContact}) => {
	return (
		<div className="nav-header">
    		<div className="nav-brand">
      			<img src={logo} onClick={() => moveToIntro()} alt="brand logo"/>
    		</div>

	      	<div className="header-links">
	        	<ul>
	          		<li data-menuanchor="fourthPage">
                        <a href="#contact" id="contact" onClick={() => moveToContact()}>CONTACT</a>
                    </li>
                    <li data-menuanchor="thirdPage">
                        <a href="#portfolio" id="projects" onClick={() => moveToPortfolio()}>PROJECTS</a>
                    </li>
                    <li data-menuanchor="secondPage">
                        <a href="#about" id="about" onClick={() => moveToAbout()}>ABOUT</a>
                    </li>
	        	</ul>
	      	</div>
  		</div>
	)
}

export default Navbar;
