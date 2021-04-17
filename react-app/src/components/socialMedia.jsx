//import React from 'react';
import ReactDom from "react-dom";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import{
    faFacebook,
    faInstagram,
    faLinkedin,
    faTwitter

} from '@fortawesome/free-brands-svg-icons'
import "./socialstyle.css"
import React, {Component} from 'react'

export default class socialMedia extends Component {

    render () {
        return (
            <div className="containers">
            <a href= "https://www.linkedin.com/company/university-of-florida-statistics-club/about/"
                className="linkedin social">
                <FontAwesomeIcon icon={faFacebook} size="2x"/>
            </a>
            <a href= "https://www.instagram.com/ufstatsclub/?hl=en"
                className="fb social">
                <FontAwesomeIcon icon={faInstagram} size="2x"/> 
            </a>
            <a href= "https://www.linkedin.com/company/university-of-florida-statistics-club/about/"
                className="insta social">  
           
                <FontAwesomeIcon icon={faLinkedin} size="2x"/> </a>
            <a href= "https://twitter.com/uf_stats_club?lang=en"
                className = "twit social">
                <FontAwesomeIcon icon={faTwitter}  size="2x"/>
                </a>
        </div>
        );
    }
}