import Button from '@restart/ui/esm/Button';
import React from 'react';
import { Card } from 'react-bootstrap';
import './About.css'

const About = () => {
    return (
        <>
        <div>
            
     <div class="about-image">
       <div class="hero-text">
         <h1>About Us</h1>
         <p>We Specialize In</p>
         <button>More About Us</button>
       </div>
     </div>
        </div>

        <div className="text-center mt-4 text-primary mb-4">
            <h1>About Our Doctors</h1>
        </div>

        <div className="about-doctors">
          
          <div className="doctor shadow">
          <Card className="border" style={{ width: '18rem' }}>
          <Card.Img className="img-height" variant="top" src="http://world5.commonsupport.com/jewel/Dentalclinic/img/team/3.jpg" />
          <Card.Body>
            <Card.Title className="text-info">Dr. Nicholas Fleming</Card.Title>
            <Card.Text>
            Restorative Dentist
            </Card.Text>
            <button type="button" class="btn btn-outline-success">View Profile</button>
         
          </Card.Body>
        </Card>
          </div>


          <div className="doctor">
          <Card className="border" style={{ width: '18rem' }}>
          <Card.Img className="img-height" variant="top" src="http://world5.commonsupport.com/jewel/Dentalclinic/img/team/2.jpg" />
          <Card.Body>
            <Card.Title className="text-info">John Dogers</Card.Title>
            <Card.Text>
            Implant Expert
         </Card.Text>
            <button type="button" class="btn btn-outline-success">View Profile</button>
         
          </Card.Body>
        </Card>
          </div>


          <div className="doctor">
          <Card className="border" style={{ width: '18rem' }}>
          <Card.Img className="img-height" variant="top" src="http://world5.commonsupport.com/jewel/Dentalclinic/img/team/4.jpg" />
          <Card.Body>
            <Card.Title className="text-info">Hansom Rob</Card.Title>
            <Card.Text>
            Root Canals Dentist
         </Card.Text>
            <button type="button" class="btn btn-outline-success">View Profile</button>
          </Card.Body>
        </Card>
          </div>

          
          <div className="doctor">
          <Card className="border" style={{ width: '18rem' }}>
          <Card.Img className="img-height" variant="top" src="http://world5.commonsupport.com/jewel/Dentalclinic/img/team/1.jpg" />
          <Card.Body>
            <Card.Title className="text-info">Mike Rogers</Card.Title>
            <Card.Text>
            CEO & Founder of dentist
         </Card.Text>
            <button type="button" class="btn btn-outline-success">View Profile</button>
          </Card.Body>
        </Card>
          </div>

          


        </div>
        </>
    );
};

export default About;