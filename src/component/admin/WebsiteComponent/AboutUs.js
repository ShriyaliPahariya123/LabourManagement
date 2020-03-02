
import React from 'react';


function AboutUs() {
  return (
<section className="page-section" id="about">
<div className="container">
  <div className="row">
    <div className="col-lg-12 text-center">
      <h2 className="section-heading text-uppercase">About Us</h2>
      <h3 className="section-subheading text-muted">Innovation pays off</h3>
    </div>
  </div>
  <div className="row">
    <div className="col-lg-12">
      <ul className="timeline">
        <li>
          <div className="timeline-image">
            <img className="rounded-circle img-fluid" src="http://localhost:3000/group.png" alt=""/>
          </div>
          <div className="timeline-panel">
            <div className="timeline-heading">
              <h4 className="subheading">What is FRS?</h4>
            </div>
            <div className="timeline-body">
              <p className="text-muted">FIZ Robotic Solutions is India’s and Nepal’s leading Ed-tech & Robotic solutions providing company. FIZ Robotic Solutions providing technology learning platform through FIRE, FIC, FRS AR to the students of college and school.</p>
            </div>
          </div>
        </li>
        <li className="timeline-inverted">
          <div className="timeline-image">
            <img className="rounded-circle img-fluid" src="http://localhost:3000/potential.png" alt=""/>
          </div>
          <div className="timeline-panel">
            <div className="timeline-heading">
              <h4 className="subheading">Mission</h4>
            </div>
            <div className="timeline-body">
              <p className="text-muted">To become an leading Ed-Tech & Robotic Solutions providing company with a global perspective,to remain obsessed with customers needs and empowering agility to them.</p>
            </div>
           
          </div>
        </li>
        <li>
          <div className="timeline-image">
            <img className="rounded-circle img-fluid" src="http://localhost:3000/potential1.png" alt=""/>
          </div>
          <div className="timeline-panel">
            <div className="timeline-heading">
              <h4 className="subheading">Vision</h4>
            </div>
            <div className="timeline-body">
              <p className="text-muted">In order to realise our vision.Our Mission must exceed the expectations of our customers,expectations of our customers,whom we define as patners anf felow employees.</p>
            </div>
          </div>
        </li>
        <li className="timeline-inverted">
          <div className="timeline-image">
            <img className="rounded-circle img-fluid" src="http://localhost:3000/potential3.png" alt=""/>
          </div>
          <div className="timeline-panel">
            <div className="timeline-heading">
              <h4 className="subheading">Our Product</h4>
            </div>
            <div className="timeline-body">
              <p className="text-muted">Our Product - labour Management System is an application to effectively manage the registration process of labour under various enforced labour laws.The registered labors can take advantage of various welfare schemes by applying online through this application.</p>
            </div>
          </div>
        </li>
      </ul>
    </div>
  </div>
</div>
</section>

);
}

export default AboutUs;
