
import React from 'react';

function Footer() {
    return (<footer className="footer">
<div className="container">
  <div className="row align-items-center">
    <div className="col-md-4">
      
    </div>
    <div className="col-md-4">
      <ul className="list-inline social-buttons">
        <li className="list-inline-item">
          <a href="http://twitter.com/FIZ_Robotics">
            <i className="fa fa-twitter"></i>
          </a>
        </li>
        <li className="list-inline-item">
          <a href="http://www.facebook.com/FIZRSolutions">
            <i className="fa fa-facebook-f"></i>
          </a>
        </li>
        <li className="list-inline-item">
          <a href="https://www.youtube.com/channel/UCBUipj3nTFOKX_gOKPkxS0w">
            <i className="fa fa-youtube"></i>
          </a>
        </li>
        <li className="list-inline-item">
          <a href="https://www.instagram.com/fizrobotics">
            <i className="fa fa-instagram"></i>
          </a>
        </li>
        <li className="list-inline-item">
          <a href="https://www.linkedin.com/in/fiz-robotic-solutions-7b9617151">
             <i class="fa fa-linkedin"></i>
          </a>
        </li>
      </ul>
    </div>
  </div>
  <span className="copyright">&copy; {new Date().getFullYear()} Copyright:FIZRobotics.com </span>
</div>
</footer>
);
}

export default Footer;