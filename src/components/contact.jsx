import React from 'react';
import contactStyles from './contact.module.css';
import className from 'classname'

export default function Contact() {
    return (
        <React.Fragment>
            <h4>NEED A DESIGNER ?</h4>
            <h1>Let's work together</h1>
            <hr/>
            <div>
                <p className={contactStyles.socialIcon}> 
                <a href="https://wa.me/message/CCTD7MJDCZFLC1"><i className={className('fab', 'fa-whatsapp', contactStyles.whatsapp)}></i></a>
                <a href="https://twitter.com/ikehcharlesdev ?s=09"><i className={className('fab', 'fa-twitter', contactStyles.twitter)}></i></a>
                <a href="https://behance.net/charlesikeh"><i className={className('fab', 'fa-behance', contactStyles.behance)}></i></a>
                <a href="https://instagram.com/ikehCharlesDev"><i className={className('fab', 'fa-instagram', contactStyles.instagram)}></i></a>
                </p>
            </div>
            <div className={contactStyles.contactSection}>
                <div className={contactStyles.contact}>
                    <h2>Contact Information</h2>
                    <p>Feel free to reach me at any time. I prefer to talk
                        over email, especially since we may be a few time zones away.
                    </p>
                    <div>
                        <p>Email: <a href='mailto:ikehcharles.ci@gmail.com'> ikehcharlesci@gmail.com</a></p>
                        <p>Phone: +234-90-351-08713</p>
                    </div>
                </div>
                <div className={contactStyles.availability}>
                    <h2>Current Availability</h2>
                    <p>I work on several personal projects and currently building websites for <b>free</b> in exchange for testimonial
                    </p>
                    <i>Terms & Conditions Apply</i>
                </div>
            </div>
        </React.Fragment>
    )
}
