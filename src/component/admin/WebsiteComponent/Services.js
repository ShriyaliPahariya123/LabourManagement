import React from 'react';

function Services() {
  return (
<section className="page-section" id="services">
<div className="container">
  <div className="row">
    <div className="col-lg-12 text-center">
      <h2 className="section-heading text-uppercase">Services</h2>
      <h3 className="section-subheading text-muted">About labour management system</h3>
    </div>
  </div>
  <div className="row text-center">
    <div className="col-md-4">
      <span className="fa-stack fa-4x">
        <i className="fa fa-circle fa-stack-2x text-primary"></i>
        <i className="fa fa-shopping-cart fa-stack-1x fa-inverse"></i>
      </span>
      <h4 className="service-heading">About the app</h4>
      <p className="text-muted">We act as a connection/association who links up the labour and the user.The labour get employee by the users through us.We buid up a platform for labours and users which get several beneficiaries under us.</p>
    </div>
    <div className="col-md-4">
      <span className="fa-stack fa-4x">
        <i className="fa fa-circle fa-stack-2x text-primary"></i>
        <i className="fa fa-laptop fa-stack-1x fa-inverse"></i>
      </span>
      <h4 className="service-heading">User-Friendly</h4>
      <p className="text-muted">A flexible user friendly interface is provided by software.With a user-friendly interface,the software provides visualisation of the whole surfing process easily. It is easily accessible and easy to understand.</p>
    </div>
    <div className="col-md-4">
      <span className="fa-stack fa-4x">
        <i className="fa fa-circle fa-stack-2x text-primary"></i>
        <i className="fa fa-lock fa-stack-1x fa-inverse"></i>
      </span>
      <h4 className="service-heading">Web Security</h4>
      <p className="text-muted">Data security means protection data of the users digital data. Involving with us would be highly secured.We keep promise of keeping your data privately between us.</p>
    </div>
  </div>
</div>
</section>
   );
}

export default Services;

