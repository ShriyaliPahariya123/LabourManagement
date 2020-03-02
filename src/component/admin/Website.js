import React from 'react';
import Navigation from './WebsiteComponent/Navigation.js' 
import Header from './WebsiteComponent/Header.js' 
import Services from './WebsiteComponent/Services.js' 
import Team from './WebsiteComponent/Team.js' 
import AboutUs from './WebsiteComponent/AboutUs.js' 
import AppFooter from './WebsiteComponent/AppFooter.js' 
import Footer from './WebsiteComponent/Footer.js' 
import Cycle from './WebsiteComponent/Cycle.js' 
import Product from './WebsiteComponent/WhyToUseOurProduct.js' 

function Website() {
  return (
<div id="page-top">
<Navigation/>
<Header/>
<Services/>
<AboutUs/>
<Cycle/>
<Product/>
<Team/>
<AppFooter/>
<Footer/>
</div>
  );
}

export default Website;