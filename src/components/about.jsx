import React, { useState } from 'react';
import aboutStyles from './about.module.css';
import classname from 'classname'
import model2 from '../assets/model2.jpg'
import model3 from '../assets/model3.jpg'



export default function About() {
    
    return (
        <React.Fragment>
            <div className={aboutStyles.aboutHeader}>Few Words About Me</div>
            <div>
                <p>I’m Ikeh Charles, a multidisciplinary designer who focuses on telling my clients’ stories visually, through enjoyable and meaningful experiences. I specialize
                     in responsive websites and functional user interfaces.</p>
            </div>
            <div className={aboutStyles.imgCollection2}>
                <div>
                    <p>"My passion for simple and elegant designs inspired my journey in web designs and interfaces. I aim to offer professional services with a bit extra.</p>
                    <p>My design skills are not isolated on the web but also through illustrations and brand identities, I create unique illustrations particularly in the fashion world and also logos during my free time and also for business purposes.</p>
                    <div className={aboutStyles.illustrations}>
                        <h5>Illustrations</h5>
                        <div>
                            <p className={aboutStyles.illustration1}></p>
                            <p className={aboutStyles.illustration2}></p>
                            <p className={aboutStyles.illustration3}></p>
                            <p className={aboutStyles.illustration4}></p>
                        </div>
                        <a href="">View more on Instagram</a>
                    </div>
                    <div className={aboutStyles.brandIdentities}>
                        <h5>Brand Identities</h5>
                        <div>
                            <p className={aboutStyles.logo1}></p>
                            <p className={aboutStyles.logo2}></p>
                            <p className={aboutStyles.logo3}></p>
                            <p className={aboutStyles.logo4}></p>
                        </div>
                        <a href="">View more on Instagram</a>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}
