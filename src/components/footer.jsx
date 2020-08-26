import React from 'react';
import footerStyles from './footer.module.css';
import CharlesLogoSA from '../assets/CharlesLogoSA.png'

export default function Footer() {
    return (
        <React.Fragment>
            <div className={footerStyles.footer}>
            <a href="#landing">
                <img src={CharlesLogoSA} alt="portfolio logo"/>
            </a>
            <p>
            &copy; 2020 Ikeh Charles. <br/>
            Made with 	&#x1f5a4; in Lagos, Nigeria.
            </p>
            </div>
        </React.Fragment>
    )
}
