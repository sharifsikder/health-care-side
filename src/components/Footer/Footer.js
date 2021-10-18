import React from 'react';
import './Footer.css'

const Footer = () => {
    return (
        <>
        <div className="footer-container">

            <div className='contact'>
               <div className="mb-3">
               <img src="http://world5.commonsupport.com/jewel/Dentalclinic/img/resources/footer-logo.png" width="200" height="50" className="d-inline-block align-top" alt="React Bootstrap logo"/>
               </div>
                <p><i class="fas fa-map-marker-alt"></i> 256 Elizaberth Ave Str, Wellco</p>
                <p><i class="fas fa-phone"></i>  +012 (345) 678 99</p>
                <p><i class="far fa-envelope"></i> supportcoach@gmail.com</p>
            </div>


            <div className='course-link'>
                <h2>Our Services</h2>

                <div className='course-list'>
                
                <p>Dental Implants</p>
                <p>Tooth Protection</p>
                <p>Teeth Cleaning</p>
                <p>Dental Calculus</p>
          

                </div>
            </div>


            <div className='contact-site'>
                <h2>Contact us</h2>

                <span className='icon'><i class="fab fa-facebook-square"></i></span>
                <span className='icon'><i class="fab fa-twitter-square"></i></span>
                <span className='icon'><i class="fab fa-instagram"></i></span>
                <span className='icon'><i class="fab fa-youtube"></i></span>
                <div className="mt-3">
                <img src="http://webdesign-finder.com/medent/wp-content/uploads/2016/10/footer-signature.png" width="130" height="50" className="d-inline-block align-top" alt="React Bootstrap logo"/> 
                </div>
            </div>

            
        </div>

   <div className="copy-right">
   <p>2021 © All rights reserved by Sharif Sikder</p>
     </div>

     </>
    );
};

export default Footer;