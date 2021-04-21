import React, {useState} from "react";
import NavBar from "../NavBar";
import Jumbotron from 'react-bootstrap/Jumbotron'
import socialMedia from "../socialMedia.jsx"
import './HomePage.css'
import Bulletin from "../Bulletin.jsx"
import Img from '../logo.png'
import ReactDom from "react-dom"

import {Container, Row, Col} from "react-bootstrap";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import{
    faFacebook,
    faInstagram,
    faLinkedin,
    faTwitter

} from '@fortawesome/free-brands-svg-icons'
import "../socialstyle.css"



function HomePage() {




    return (
       <div>
            <NavBar>

            </NavBar>
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
                <Jumbotron className={"cover"}>


                    </Jumbotron>
           <h1 className="announcements">Announcements</h1>
                <Row>

                    <Col>
                    <Bulletin/>
                    </Col>
                    </Row>



        </div>
    )
}

export default HomePage;