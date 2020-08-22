import React from 'react';
import projectsStyles from './projects.module.css';
import mockUp1 from '../assets/3iphoneMockups.png';
import mockUp2 from '../assets/appleDevicesMockUp.png';
import mockUp3 from '../assets/site1.jpg';
import mockUp4 from '../assets/site2.jpg';

export default function Projects() {
    return (
        <React.Fragment>
            <div className={projectsStyles.ui}>
                <h3>Selected Projects</h3>
                <h1>Case Studies</h1>
                <h4>UI &#38; Product Design</h4>
                <div className={projectsStyles.uiProjects}>
                    <a href={mockUp1} className={projectsStyles.project1}>
                        <img src={mockUp1} alt=""/>
                        <div></div>
                        <span>2020</span>
                        <p>Music Streaming App Concept</p>
                    </a>
                    <a href={mockUp2} className={projectsStyles.project2}>
                        <img src={mockUp2} alt=""/>
                        <div></div>
                        <span>2020</span>
                        <p>BBC Redesign Web/App Concept</p>
                    </a>
                </div>
                <div className={projectsStyles.moreOnBehance}>
                    <a href="https://behance.net/charlesikeh">View More UI on Behance <i className="fas fa-arrow-right"></i></a>
                </div>
                <h4>Web &#38; Mobile Designs</h4>
                <div className={projectsStyles.webApp}>
                    <a href="https://ikehcharles.github.io/firstReact" className={projectsStyles.project3}>
                    <img src={mockUp3} alt=""/>
                    <div></div>
                    <span>2020</span>
                    <p>Restaurant/Food Delivery WebApp</p>
                    <i>NB: This is a personal project and therefore serve as template rather than a fully functional website</i>
                    </a>
                    <a href="https://elpapi.herokuapp.com" className={projectsStyles.project4}>
                    <img src={mockUp4} alt=""/>
                    <div></div>
                    <span>2020</span>
                    <p>Award/Nominee WebApp</p>
                    <i>NB: This is a personal project and therefore serve as template rather than a fully functional website</i>
                    </a>
                </div>
                <div className={projectsStyles.moreOnGithub}>
                    <a href="https://github.com/ikehCharles">View source code on Github <i className="fas fa-arrow-right"></i></a>
                </div>
                <hr/>
            </div>
        </React.Fragment>
    )
}
