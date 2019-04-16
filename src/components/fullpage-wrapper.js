import React, { Fragment } from 'react';
import ReactFullpage from '@fullpage/react-fullpage';
import Intro from './slides/intro';
import About from './slides/about';
import Projects from './slides/projects';
import Contact from './slides/contact';
import Footer from './slides/footer';
import Navbar from './navbar';


const FullpageWrapper = fullpageProps => (<ReactFullpage
    {...fullpageProps}
    render = {({ state, fullpageApi }) => {

        const moveToIntro = () => {
            fullpageApi.moveTo(1);
        }

        const moveToAbout = () => {
            fullpageApi.moveTo(2);
        }

        const moveToPortfolio = () => {
            fullpageApi.moveTo(3);
        }

        const moveToContact = () => {
            fullpageApi.moveTo(4);
        }

        const moveSlideRight = () => {
            fullpageApi.moveSlideRight()
        }

        const moveSlideLeft = () => {
            fullpageApi.moveSlideLeft()
        }

        return (
            <Fragment>
                <Navbar
                    moveToIntro={moveToIntro}
                    moveToAbout={moveToAbout}
                    moveToPortfolio={moveToPortfolio}
                    moveToContact={moveToContact}
                />
                <Intro
                    fullpageApi={fullpageApi}
                    moveDown={moveToAbout}
                />
                <About />
                <Projects
                    moveSlideLeft={moveSlideLeft}
                    moveSlideRight={moveSlideRight}
                 />
                <Contact />
                <Footer />
            </Fragment>
        );
    }}
/>);

export default FullpageWrapper;
