import React, { useEffect, useState } from 'react';
import aboutStyles from './about.module.css';
import classname from 'classname'
import AOS from "aos";
import 'aos/dist/aos.css';



export default function About() {
    useEffect(()=>{
        AOS.init({
            duration: 1200
        })
    })
    
    return (
        <React.Fragment>
            <div className={aboutStyles.aboutHeader}>Few Words About Me</div>
            <div className={aboutStyles.aboutMain}>
                <p data-aos="fade-up">I’m Ikeh Charles, a multidisciplinary designer who focuses on telling my clients’ stories visually, through enjoyable and meaningful experiences. I specialize
                     in responsive websites and functional user interfaces.</p>
            </div>
            <div className={aboutStyles.imgCollection2}>
                <div>
                    <p data-aos="fade-up">"My passion for simple and elegant designs inspired my journey in web designs and interfaces. I aim to offer professional services with a bit extra.</p>
                    <p data-aos="fade-up">My design skills are not limited on the web, I also create unique illustrations particularly in the fashion world and also logos during my free time and also for business purposes.</p>
                    <div className={aboutStyles.illustrations}>
                        <h5>Illustrations</h5>
                        <div data-aos="fade-left">
                            <p className={aboutStyles.illustration1}></p>
                            <p className={aboutStyles.illustration4}></p>
                            <p className={aboutStyles.illustration3}></p>
                            <p className={aboutStyles.illustration2}></p>
                        </div>
                        <a href="https://instagram.com/ikehcharles_illustration">View more on Instagram</a>
                    </div>
                    <div className={aboutStyles.brandIdentities}>
                        <h5>Brand Identities</h5>
                        <div data-aos="fade-left">
                            <p className={aboutStyles.logo3}></p>
                            <p className={aboutStyles.logo2}></p>
                            <p className={aboutStyles.logo1}></p>
                            <p className={aboutStyles.logo4}></p>
                        </div>
                        <a href="https://instagram.com/ikehcharles_logos">View more on Instagram</a>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}
