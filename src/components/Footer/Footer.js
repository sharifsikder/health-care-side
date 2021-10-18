import React from 'react';
import './Footer.css'

const Footer = () => {
    return (
        <div className="footer-container">
            <div className='contact'>
               <div className="mb-3">
               <img
        src="http://world5.commonsupport.com/jewel/Dentalclinic/img/resources/footer-logo.png"
        width="200"
        height="50"
        className="d-inline-block align-top"
        alt="React Bootstrap logo"/>
               </div>
                <p><i class="fas fa-map-marker-alt"></i> 256 Elizaberth Ave Str, Wellco, CA, 90025</p>
                <p><i class="fas fa-phone"></i>  +012 (345) 678 99</p>
                <p><i class="far fa-envelope"></i> supportcoach@gmail.com</p>
            </div>
            <div className='course-link'>
                <h2>Course Links</h2>

                <div className='course-list'>
                
                <p>Graphic design</p>
                <p>Web Design</p>
                <p>Software Developer</p>
                <p>Python Developer</p>
                <p>Front End Developer</p>

                </div>
            </div>
            <div className='contact-site'>
                <h2>Contact us</h2>

                <span className='icon'><i class="fab fa-facebook-square"></i></span>
                <span className='icon'><i class="fab fa-twitter-square"></i></span>
                <span className='icon'><i class="fab fa-instagram"></i></span>
                <span className='icon'><i class="fab fa-youtube"></i></span>
            </div>
            <div className="copy-right">
                <p>2021 © All rights reserved by Sharif Sikder</p>
            </div>
        </div>
    );
};

export default Footer;