import React from 'react';
import './Footer.css';
import {SocialIcon} from "react-social-icons";
import UpperFooter from './UpperFooter';

const Footer = () => {
  return (
    <>
    <UpperFooter/>
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-section">
          <h3>State Tourism Websites</h3>
          <div className="footer-links">
            <div className="footer-section">
              <ul>
                <li>Angul</li>
                <li>Balangir</li>
                <li>Balasore </li>
                <li>Bargarh</li>
                <li>Bhadrak</li>
                <li>Boudh</li>
                <li>Cuttack</li>
                <li>Deogarh</li>
                <li>Dhenkanal </li>
                <li>Gajapati</li>
              </ul>
            </div>
            <div className="footer-section">
              <ul>
                <li>Ganjam</li>
                <li>Jagatsinghpur</li>
                <li>Jajpur</li>
                <li>Jharsuguda</li>
                <li>Kalahandi</li>
                <li>Kandhamal</li>
                <li>Kendrapara</li>
                <li>Kendujhar</li>
                <li>Khordha</li>
                <li>Koraput</li>
              </ul>
            </div>
            <div className="footer-section">
              <ul>
                <li>Malkangiri</li>
                <li>Sikkim</li>
                <li>Nabarangpur </li>
                <li>Nayagarh</li>
                <li>Nuapada</li>
                <li>Puri</li>
                <li>Rayagada</li>
                <li>Sambalpur </li>
                <li>Subarnapur </li>
                <li>Sundargarh </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="footer-section">
          <div className='se'>
          <h3>    Explore</h3>
          <div className="footer-links">
            <ul>
              <li>Natural Attraction</li>
              <li>Religious site</li>
              <li>Historical Site</li>
              <li>Wildlife and Nature</li>
              <li>Beach</li>
              <li>Caltural Site</li>
              <li>Hill View</li>
              <li>Industry</li>
             
            </ul>
            </div>
          </div>
        </div>
        <div className="footer-section">
          <div className='se-2'>
          <h3>Contact Details</h3>
          <address>
            Deputy Secretary (IT)<br />
            Ministry of Tourism<br />
           Bhubaneswar<br />
           Fire station,<br />
           Odisha<br />
            <a href="tel:+911123724175">+91-6370006029</a><br />
            <a href="mailto:info.mot@gov.in">info.mot@gov.in</a>
          </address>
          <div class="socialicons">
                <SocialIcon url='facebook.com'/>
                <SocialIcon url='instagram.com'/>
                <SocialIcon url='https://www.youtube.com/@TheQuiverNews'/>
            </div>
          </div>
        </div>
      </div>
      <div className="footer-logo">
        <img src="Tourism_logo.png" alt="Incredible odisha Logo" />
        <p>Odisha has a myriad of landscapes, great heritage and culture, varied flora and fauna. The state is the most preferred tourist destinations for tourists from all across the world for its picturesque landscapes, spectacular waterfalls, habitat of the country's largest tiger reserve and home to the warmest people on earth.</p>
        <hr className='footer-line'/>
        <footer className="footer-lin">
      <div className="footer-links-container">
        <a href="#privacy-policy">Privacy Policy</a>
        <li className='li-'>|</li>
        <a href="#terms-of-platform-use">Terms Of Platform Use</a>
        <li className='li-'>|</li>
        <a href="#important-links">Important Links</a>
        <li className='li-'>|</li>
        <a href="#emergency">Emergency</a>
      </div>
      <div className="footer-copyright">
        © Ministry of Tourism, Government of Odisha
      </div>
    </footer>
      </div>
    </footer>
    </>
  );
};

export default Footer;
