import React, { Component } from 'react';
import './Footer.css';

export default class Footer extends Component {

    render() {
        return (
            <div className="container"> 

            <div className="social-icons">
                <a href="https://www.reddit.com/r/mionix"><i className="fab fa-reddit"></i></a>
                <a href="https://www.facebook.com/mionix"><i className="fab fa-facebook"></i></a>
                <a href="https://www.instagram.com/mionix/"><i className="fab fa-instagram"></i></a>
                <a href="https://www.youtube.com/user/MionixGaming"><i className="fab fa-youtube"></i></a>
                <a href="https://twitter.com/mionix"><i className="fab fa-twitter"></i></a>
                <a href="https://www.twitch.tv/team/mob"><i className="fab fa-twitch"></i></a>
            </div>

            <div className="footer-content">
                <div className="footer-list">
                    <ul className="footer-menu">
                        <li className="footer-heading">Mionix</li>
                        <li className="footer-item">About Us</li>
                        <li className="footer-item">Wallpapers</li>
                        <li className="footer-item">Get Quote</li>
                        <li className="footer-item">Shipping Info</li>
                    </ul>
                </div>
                <div className="footer-list">
                    <ul className="footer-menu">
                        <li className="footer-heading">Support</li>
                        <li className="footer-item">FAQ</li>
                        <li className="footer-item" >Support</li>
                        <li className="footer-item" >Downloads</li>
                        <li className="footer-item"><a href="mailto:sales_global@mionix.net">Sales</a></li>
                    </ul> 
                </div>
                <div className="footer-list">
                    <ul className="footer-menu">
                        <li className="footer-heading">Press</li>
                        <li className="footer-item"><a href="https://www.dropbox.com/sh/oxqaz783t0fk0l6/AABbtXDmKK90uZ5TjgqGoOQ-a?dl=0">Press Assets</a></li>
                        <li className="footer-item"><a href="mailto:marketing@mionix.net">Press contact</a></li>
                    </ul>
                </div>
            </div>

            </div>
        )
    }
}