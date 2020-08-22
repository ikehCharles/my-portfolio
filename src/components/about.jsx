import React, {useState} from 'react';
import aboutStyles from './about.module.css';
import classname from 'classname'
import model2 from '../assets/model2.jpg'
import model3 from '../assets/model3.jpg'



export default function About() {
    let [aboutHeaderInfo, setAboutHeaderInfo]= useState(classname(aboutStyles.aboutHeaderInfo, aboutStyles.hideAboutHeaderInfo))
    let [aboutImgWrapper3, setAboutImgWrapper3]= useState(classname(aboutStyles.imgWrapper3, aboutStyles.hideImgWrapper3))
    let [aboutInfo, setAboutInfo]= useState(classname(aboutStyles.info, aboutStyles.hideInfo));    document.addEventListener('scroll', (w)=>{
        const aboutScrollHeight=document.getElementById('about').scrollHeight;
        if(window.scrollY >= (aboutScrollHeight-2500)){
            setAboutHeaderInfo(aboutHeaderInfo=aboutStyles.aboutHeaderInfo);
            setAboutImgWrapper3(aboutImgWrapper3=aboutStyles.imgWrapper3)
            setAboutInfo(aboutInfo=aboutStyles.info)
        } else {
            setAboutHeaderInfo(aboutHeaderInfo=classname(aboutStyles.aboutHeaderInfo, aboutStyles.hideAboutHeaderInfo));
            setAboutImgWrapper3(aboutImgWrapper3=classname(aboutStyles.imgWrapper3, aboutStyles.hideImgWrapper3))
            setAboutInfo(aboutInfo=classname(aboutStyles.info, aboutStyles.hideInfo))
        }
    })
    return (
        <React.Fragment>
            <div className={aboutStyles.aboutHeader}>Few Words About Me</div>
            <div className={aboutHeaderInfo}>
                <p>I’m Ikeh Charles, a multidisciplinary designer who focuses on telling my clients’ stories visually, through enjoyable and meaningful experiences. I specialize
                     in responsive websites and functional user interfaces.</p>
            </div>
            <div className={aboutStyles.imgCollection2}>
                <div className={aboutImgWrapper3}>
                    <img src={model3} alt="" />
                </div>
                <div className={aboutInfo}>
                    <p>"My passion for simple and elegant designs inspired my journey in web designs and interfaces. I aim to offer professional services with a bit extra.
                    I also create illustrations, particularly in the fashion world. During leisures, I enjoy playing chess, basketball and tweeting."
                        </p>
                    <div className={aboutStyles.imgCollection}>
                        <div className={aboutStyles.imgWrapper2}>
                            <img src={model2} alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}
