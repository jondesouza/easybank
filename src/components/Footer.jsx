import React from 'react'
import CustomLogo from '../assets/icons/CustomLogo'
import './Footer.css'

import Facebook from '../assets/icons/CustomFacebook'
import Instagram from '../assets/icons/CustomInstagram'
import Pinterest from '../assets/icons/CustomPinterest'
import Twitter from '../assets/icons/CustomTwitter'
import Youtube from '../assets/icons/CustomYoutube'

const Footer = () => {
    return (
        <footer className="about-easybank">
            <div className="contact">
                <CustomLogo />
                <div className="social-media">
                    <Facebook className="icon-link"/>
                    <Youtube />
                    <Twitter />
                    <Pinterest />
                    <Instagram />
                </div>
            </div>
            <div className="links">
                <ul className='link-column'>
                    <li className="link">About Us</li>
                    <li className="link">Contact</li>
                    <li className="link">Blog</li>
                </ul>
                <ul className='link-column'>
                    <li className="link">Careers</li>
                    <li className="link">Support</li>
                    <li className="link">Privacy Policy</li>
                </ul>

                <ul className='link-mobile'>
                    <li className="link">About Us</li>
                    <li className="link">Contact</li>
                    <li className="link">Blog</li>
                    <li className="link">Careers</li>
                    <li className="link">Support</li>
                    <li className="link">Privacy Policy</li>
                </ul>
            </div>
            <div className="credits">
                <button className="request">Request Invite</button>
                <p>© Easybank. All rights reserved.</p>
            </div>
        </footer>
    )
}

export default Footer;