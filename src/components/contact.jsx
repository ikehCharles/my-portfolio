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
                <a href="https://api.whatsapp.com/message/CCTD7MJDCZFLC1"><i className={className('fab', 'fa-whatsapp', contactStyles.whatsapp)}></i></a>
                <a href="https://twitter.com/ikehCharlesDev?s=09"><i className={className('fab', 'fa-twitter', contactStyles.twitter)}></i></a>
                <a href="https://behance.net/charlesikeh"><i className={className('fab', 'fa-behance', contactStyles.behance)}></i></a>
                <a href="https://instagram.com/ikehCharlesDev"><i className={className('fab', 'fa-instagram', contactStyles.instagram)}></i></a>
                </p>
            </div>
            <div className={contactStyles.contactSection}>
                <div className={contactStyles.contact}>
                    <h2>Contact Information</h2>
                    <p>Feel free to reach to me any time. I prefer to talk
                        over email, especially since we may be a few time zones away
                    </p>
                    <div>
                        <p>Email: <a href='mailto:ikehcharles.ci@gmail.com'> ikehcharlesci@gmail.com</a></p>
                        <p>Phone: +234-90-351-08713</p>
                    </div>
                </div>
                <div className={contactStyles.availability}>
                    <h2>Current Availability</h2>
                    <p>I usually work on several project but I will be honored to discuss new opportunities.
                        Let's get in touch!
                    </p>
                </div>
            </div>
        </React.Fragment>
    )
}