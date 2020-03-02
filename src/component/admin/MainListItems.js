import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import ListSubheader from '@material-ui/core/ListSubheader';
import DashboardIcon from '@material-ui/icons/Dashboard';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import PeopleIcon from '@material-ui/icons/People';
import BarChartIcon from '@material-ui/icons/BarChart';
import LayersIcon from '@material-ui/icons/Layers';
import AssignmentIcon from '@material-ui/icons/Assignment';
import HomeIcon from '@material-ui/icons/Home';
import AddCategory from './AddCategory';
import AddSubcategory from './AddSubcategory'
import DisplayCategory from './DisplayCategory'
import DisplaySubcategory from './DisplaySubcategory';
import DisplayLabour from './DisplayLabour'
import Labour from './Labour';
import Feedback from './Feedback';
import Divider from '@material-ui/core/Divider';
import { makeStyles } from '@material-ui/core/styles';
import DisplayAllLabour from './DisplayAllLabour';
import ShowCount from './ShowCount';
import SpeedIcon from '@material-ui/icons/Speed';
import AddBoxIcon from '@material-ui/icons/AddBox';
import AddToPhotosIcon from '@material-ui/icons/AddToPhotos';
import FeedbackIcon from '@material-ui/icons/Feedback';
import CategoryIcon from '@material-ui/icons/Category';
import SubjectIcon from '@material-ui/icons/Subject';
import PersonAddIcon from '@material-ui/icons/PersonAdd';

export default function MainListItems(props){

  const handleClick=(view)=>{
    props.changeView(view)
  }
  
    const mainListItems = (
  <div>
    <ListItem button onClick={()=>handleClick(<ShowCount/>)}>
      <ListItemIcon>
      <SpeedIcon/>
      </ListItemIcon>
      <ListItemText primary="Dashboard" />
    </ListItem>
    <Divider/>
    <ListSubheader inset>Add Records</ListSubheader>
    <ListItem button onClick={()=>handleClick(<AddCategory/>)}>
      <ListItemIcon>
        <AddBoxIcon/>
      </ListItemIcon>
      <ListItemText primary="Add Category" />
    </ListItem>
    <ListItem button onClick={()=>handleClick(<Labour/>)}>
      <ListItemIcon>
        <PersonAddIcon/>
      </ListItemIcon>
      <ListItemText primary="Add Labour" />
    </ListItem>
    <ListItem button  onClick={()=>handleClick(<AddSubcategory/>)}>
      <ListItemIcon>
      <AddToPhotosIcon/>
      </ListItemIcon>
      <ListItemText primary="Add Subcategory" />
    </ListItem>
  </div>
);

const secondaryListItems = (
  <div>
            <Divider/>
    <ListSubheader inset>View reports</ListSubheader>
   
    <ListItem button onClick={()=>handleClick(<DisplayAllLabour/>)}>
      <ListItemIcon>
        <PeopleIcon/>
      </ListItemIcon>
      <ListItemText primary="view Labour" />
    </ListItem>
    <ListItem button onClick={()=>handleClick(<DisplaySubcategory/>)}>
      <ListItemIcon>
        <SubjectIcon/>
      </ListItemIcon>
      <ListItemText primary="view Subcategory" />
    </ListItem>
   
    <ListItem button>
      <ListItemIcon>
        <AssignmentIcon/>
      </ListItemIcon>
      <ListItemText primary="view User" />
    </ListItem>
    <ListItem button onClick={()=>handleClick(<DisplayCategory/>)}>
      <ListItemIcon>
        <CategoryIcon/>
      </ListItemIcon>
      <ListItemText primary="view Category" />
    </ListItem>
  </div>
);



const thirdListItems = (
  <div>
        <Divider />
    <ListSubheader inset>Feedbacks</ListSubheader>
    <ListItem button  onClick={()=>handleClick(<Feedback/>)}>
      <ListItemIcon>
        <FeedbackIcon/>
      </ListItemIcon>
      <ListItemText primary="Feedbacks" />
    </ListItem>
  </div>
);
return(<div>{mainListItems}{secondaryListItems}{thirdListItems}</div>);
}


