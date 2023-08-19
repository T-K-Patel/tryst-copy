import './Footer.css';
import logo from '../../assets/tryst-logo.png';
import { Link } from 'react-router-dom';

function Footer() {
    return (
        <div className='Footer'>
            <script src="https://kit.fontawesome.com/e291820046.js" crossorigin="anonymous"></script>
            <div className='fooTer'>
                <div className='block'><img src={logo} alt='Logo' width='200px'></img></div>
                <div className='block' id='midFooter'>
                    <div>
                        <table>
                            <tr>
                                <td>About&nbsp;us</td>
                                <td>Sponsers</td>
                            </tr>
                            <tr>
                                <td>Pronites</td>
                                <td>Terms&nbsp;and&nbsp;Conditions</td>
                            </tr>
                            <tr>
                                <td>Events</td>
                                <td>Policy&nbsp;Privacy</td>
                            </tr>
                        </table>
                    </div>
                </div>
                <div className='block'>
                    <div>
                        <h2>Follow Us!</h2>
                        <a href='https://www.instagram.com' style={{textDecoration:'none',color:"white"}}><i className="fa fa-instagram"></i></a>
                        <i className="fa fa-facebook"></i>
                        <i className="fa fa-linkedin"></i>
                        <i className="fa fa-twitter"></i>
                        <br></br>
                        <p>For any queries contact us at :</p>
                        <p><i className="fa-regular fa-envelope"></i>admin@tryst-iitd.org</p>

                    </div>
                </div>
            </div>
            <text id='Tryst-address'>©TRYST’23, IIT Delhi, Hauz Khas, New Delhi - 110016</text>
        </div>
    );
}

export default Footer;