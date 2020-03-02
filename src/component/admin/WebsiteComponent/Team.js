
import React from 'react';

function Team() {
    return (
<section className="bg-light page-section" id="team">
<div className="container">
  <div className="row">
    <div className="col-lg-12 text-center">
      <h2 className="section-heading text-uppercase">Our Team</h2>
      <h3 className="section-subheading text-muted">working members on this application</h3>
    </div>
  </div>
  <div className="row">
    <div className="col-sm-3">
      <div className="team-member">
        <img className="mx-auto rounded-circle" src="http://localhost:3000/rg.jpeg" alt=""/>
        <h4>Ronak Jain</h4>
        <p className="text-muted">FIC Manager</p>
        <p className="text-muted">Research & Development Department</p>
      </div>
    </div>
    <div className="col-sm-3">
      <div className="team-member">
        <img className="mx-auto rounded-circle" src="http://localhost:3000/sp.jpeg" alt=""/>
        <h4>Shriyali Pahariya</h4>
        <p className="text-muted">Lead Developer</p>
        <p className="text-muted">Research & Development Department</p>
      </div>
    </div>
    <div className="col-sm-3">
      <div className="team-member">
        <img className="mx-auto rounded-circle" src="http://localhost:3000/rsp.jpeg" alt=""/>
        <h4>Rohit Singh Pal</h4>
        <p className="text-muted">Lead Developer</p>
        <p className="text-muted">Research & Development Department</p>
      </div>
  </div>
  <div className="col-sm-3">
      <div className="team-member">
        <img className="mx-auto rounded-circle" src="http://localhost:3000/ng.jpeg" alt=""/>
        <h4>Nikhil Gupta</h4>
        <p className="text-muted">Assistent Developer</p>
        <p className="text-muted">Research & Development Department</p>
      </div>
    </div>
  </div>
</div>
</section>

);
}

export default Team;