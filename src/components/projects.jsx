import React, { useEffect, useState } from 'react';
import classname from 'classname'
import projectsStyles from './projects.module.css';
import mockUp1 from '../assets/3iphoneMockups.png';
import mockUp2 from '../assets/appleDevicesMockUp.png';


export default function Projects() {

    let [showWeb1, switchShowWeb1] = useState(projectsStyles.web1)
    let [showWeb2, switchShowWeb2] = useState(projectsStyles.web1)

    useEffect(() => {
        let interval = setInterval(()=>{
            if(showWeb1 === projectsStyles.web1 ){
                switchShowWeb1(projectsStyles.web2)
            }
            else if(showWeb1 === projectsStyles.web2){
                switchShowWeb1(projectsStyles.web3)
            } else {
                switchShowWeb1(projectsStyles.web1)
            }   
        }, 6000)

        return ()=>clearInterval(interval)
    })
    useEffect(() => {
        let interval = setInterval(()=>{
            if(showWeb2 === projectsStyles.web11 ){
                switchShowWeb2(projectsStyles.web12)
            }
            else if(showWeb2 === projectsStyles.web12){
                switchShowWeb2(projectsStyles.web13)
            } else {
                switchShowWeb2(projectsStyles.web11)
            }   
        }, 6000)

        return ()=>clearInterval(interval)
    })

    return (
        <React.Fragment>
            <div className={projectsStyles.ui}>
                <h3>Selected Projects</h3>
                <h1>Case Studies</h1>
                <h4>UI &#38; Product Design</h4>
                <div className={projectsStyles.uiProjects}>
                    <a href={mockUp1} className={projectsStyles.project1}>
                        <img src={mockUp1} alt="Music Streaming App UI, click to view Full" />
                        <div></div>
                        <span>2020</span>
                        <p>Music Streaming App Concept</p>
                    </a>
                    <a href={mockUp2} className={projectsStyles.project2}>
                        <img src={mockUp2} alt="BBC Redesign Web Application UI, click to view Full" />
                        <div></div>
                        <span>2020</span>
                        <p>BBC Redesign Web/App Concept</p>
                    </a>
                </div>
                <div className={projectsStyles.moreOnBehance}>
                    <a href="https://behance.net/charlesikeh">View More UI on Behance <i className="fas fa-arrow-right"></i></a>
                </div>
                <h4>Web &#38; Mobile Designs</h4>
                <div className={classname(projectsStyles.webApp)}>
                    <a href="https://polar-cove-67265.herokuapp.com" className={classname(showWeb1, projectsStyles.project3)}>
                        {/* <img src={()=>mockUp3} alt="Restaurant/Food Delivery website, Click to go to website"/> */}
                        <div></div>
                        <span>2020</span>
                        <p>E-Learning WebApp</p>
                        <i>NB: This is a personal project and therefore serve as template rather than a fully functional website</i>
                    </a>
                    <a href="https://drimithq.com" className={classname(showWeb2, projectsStyles.project4)}>
                        {/* <img src={mockUp4} alt="Award/Nominee website, Click to go to website" /> */}
                        <div></div>
                        <span>2020</span>
                        <p>Information and Technology WebApp</p>
                    </a>
                </div>
                <div className={projectsStyles.moreOnGithub}>
                    <a href="https://github.com/ikehCharles">View source code on Github <i className="fas fa-arrow-right"></i></a>
                </div>
                <hr />
            </div>
        </React.Fragment>
    )
}
