import React from 'react';
import styles from './Footer.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebookSquare, faInstagramSquare, faLinkedin, faTwitterSquare } from '@fortawesome/free-brands-svg-icons';
import "@fortawesome/fontawesome-svg-core/styles.css";
import { config } from "@fortawesome/fontawesome-svg-core";
config.autoAddCss=false;

function Footer({data, footerStyles}){

    return (
        <footer className={styles.footerDiv} style={{backgroundColor: `${footerStyles.color}`}}>
            <div className={styles.container}>
                <div className={styles.logoContainer}>
                    <img src={data.logoUrl} alt="Logo" />
                </div>
                <h4>{data.copyrightInfo}</h4>
            </div>
            <div className={styles.contact} style={{backgroundColor: `${footerStyles.color}`}}>
                <h3>Links</h3>
                <ul className={styles.links}>
                    {
                        data.links.map((item)=>(
                            <li>{item}</li>
                        ))
                    }
                </ul>
                <h3>Connect with Us</h3>
                <div className={styles.socialIcons}>
                <FontAwesomeIcon icon={faFacebookSquare} size='2x'className={styles.icon}/>
                <FontAwesomeIcon icon={faInstagramSquare} size='2x' className={styles.icon}/>
                <FontAwesomeIcon icon={faTwitterSquare} size='2x' className={styles.icon}/>
                <FontAwesomeIcon icon={faLinkedin} size='2x' className={styles.icon}/>
                </div>
            </div>  
        </footer>
    ) 
}

export default Footer;