import React from 'react';
import classname from 'classname';
import ikehImg from '../assets/logo.png'
import landingStyles from './landing.module.css'

export default function Landing() {

    const goToSelectedSection = (e) => {
        e.preventDefault();
        const href = e.target.getAttribute("href");
        const offsetTop = document.querySelector(href).offsetTop;
        window.scroll({
            top: offsetTop,
            behavior: "smooth"
        })
    }

    return (
        <React.Fragment>
            <div id='landing' className={landingStyles.intro}>
                <div className={landingStyles.col1}>
                    <h4>IKEH CHARLES</h4>
                    <h1>Product and Web designer</h1>
                    <p>Over the past few years, I have gained vast knowledge in User Interfaces and Experience with capability of creating them into fully functional web applications. I have great team spirit and good cognitive ability towards advancing technologies.</p>
                    <p><a href="#project" onClick={goToSelectedSection}>View Project</a> &nbsp;or&nbsp; <a href='#about' onClick={goToSelectedSection}>Read About Me</a></p>
                </div>
                <div className={landingStyles.col2}>
                    <div className={landingStyles.imgWrapper}>
                        <img src={ikehImg} alt="Myself" />
                        <div className={landingStyles.imgCover}></div>
                    </div>
                </div>
            </div>
                <div className={landingStyles.heartbeat}>
                    <i href="#project" onClick={goToSelectedSection} className={classname("fas fa-long-arrow-alt-down", landingStyles.navigateIndicator)}></i>
                </div>
        </React.Fragment>
    )
}
