import React from 'react';
import {BrowserRouter as Router,Route,Redirect} from 'react-router-dom'
//import DashBoard from './Dashboard/Dashboard'
import SignIn from './SignIn'
import AddCategory from './AddCategory';
import AddSubcategory from './AddSubcategory';
import AddLabour from './AddLabour';
import Dashboard from './Dashboard';
import DisplayAllLabour from './DisplayAllLabour'
import Website from './Website'


export default function AdminRouter(props) {
 return(
     <Router>
         <div>
         <Route path='/' exact strict component={Website}  history={props.history}/>
         <Route path='/00001e' exact strict component={SignIn}  history={props.history}/>
         <Route path='/Dashboard' exact strict component={Dashboard} history={props.history}/>
         <Route path='/Category' exact strict component={AddCategory} history={props.history}/>
         <Route path='/Subcategory' exact strict component={AddSubcategory} history={props.history}/>
         <Route path='/Labour' exact strict component={AddLabour} history={props.history}/>
         <Route path='/DisplayLabour' exact strict component={DisplayAllLabour} history={props.history}/>


         </div>
     </Router>
 )}