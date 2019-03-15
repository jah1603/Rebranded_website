import React, { Fragment } from 'react';
import FullpageWrapper from './fullpage-wrapper';
import Particles from 'react-particles-js';

const linkStyles = (links, section) => {
    setTimeout(() => {
        links.forEach(function(link) {
            if (link.id === section) {
                link.style.color = "#FF6363";
            } else {
                link.style.color = '#757575';
            }
        });
    }, 450);
}

const fullpageOptions = {
    scrollBar: true,
    controlArrows: true,
    licenseKey: "OPEN-SOURCE-GPLV3-LICENSE",
    onLeave: function(origin, destination, direction){
        let links = document.querySelectorAll('.header-links a');
        switch(destination.index) {
            case 0:
                links.forEach(function(link) {
                    link.style.color = 'white';
                });
                break;
            case 1:
                linkStyles(links, "about");
                break;
            case 2:
                linkStyles(links, "projects");
                break;
            case 3:
                linkStyles(links, "contact");
                break;
            default:
                links.forEach(function(link) {
                    link.style.color = '#757575';
                });
        }
    }
};

const App = () => {
    return (
        <Fragment>
            <Particles />
            <FullpageWrapper {...fullpageOptions} />
        </Fragment>
    )
}

export default App;
