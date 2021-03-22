import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
    faFacebook,
    faInstagram,
    faLinkedin,
    faTwitter
 } from '@fortawesome/free-brands-svg-icons';

function HomePage() {
    return (
        <div>
            Home
            <div className="space-x-4 bottom-0 right-0 md:inset-y-0">
                    <h3 className="space-x-2">Follow us!</h3>
                    <a href="https://www.facebook.com/groups/ufstatisticsclub/"
                    className="facebook social">
                        <FontAwesomeIcon icon={faFacebook} size = "2x"/>
                    </a>
                    <a href="hhttps://www.instagram.com/ufstatsclub/?hl=en"
                    className="instagram social">
                        <FontAwesomeIcon icon={faInstagram} size = "2x"/>           
                    </a>
                    <a href="https://www.linkedin.com/company/university-of-florida-statistics-club/about/"
                    className="linkedin social">
                        <FontAwesomeIcon icon={faLinkedin} size = "2x"/>     
                    </a>
                    <a href="https://twitter.com/ufstatsclub"
                    className="twitter social">
                        <FontAwesomeIcon icon={faTwitter} size = "2x"/>
                    </a>
                </div>
        </div>
    )
}

export default HomePage;