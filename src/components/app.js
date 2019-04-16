import React, { Fragment } from 'react';
import FullpageWrapper from './fullpage-wrapper';
import Particles from 'react-particles-js';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

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
    controlArrows: window.innerWidth < 850 ? false : true,
    licenseKey: "OPEN-SOURCE-GPLV3-LICENSE",
    slidesNavigation:true,
    onLeave: function(origin, destination, direction){
        let links = document.querySelectorAll('.header-links a');
        if (window.innerWidth < 850){
        var toaster = document.querySelector('.toaster-container');
      }
        switch(destination.index) {
            case 0:
                links.forEach(function(link) {
                    link.style.color = 'white';
                });
                if (window.innerWidth < 850){
                toaster.display = "none";
              }
                break;
            case 1:
                linkStyles(links, "about");
                if (window.innerWidth < 850){
                toaster.display = "none";
              }
                break;
            case 2:
                linkStyles(links, "projects");
                if (window.innerWidth < 850){
                setTimeout(() => {
                  toast("Swipe image to browse or tap for info")
                }, 800);
              }
                break;
            case 3:
            if (window.innerWidth < 850){
                toaster.display = "none";
              }
                linkStyles(links, "contact");
                break;
            default:
            if (window.innerWidth < 850){
                toaster.display = "none";
              }
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
            <FullpageWrapper  {...fullpageOptions} />
        </Fragment>
    )
}

export default App;
