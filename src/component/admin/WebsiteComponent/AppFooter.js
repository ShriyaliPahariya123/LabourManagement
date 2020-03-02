import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import InstagramIcon from '@material-ui/icons/Instagram';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import { createMuiTheme } from "@material-ui/core/styles";
import { ThemeProvider } from "@material-ui/styles";
import { blue,red,green } from "@material-ui/core/colors";
import LocationOnIcon from '@material-ui/icons/LocationOn';
import PhoneIcon from '@material-ui/icons/Phone';
import MailIcon from '@material-ui/icons/Mail';
import clsx from 'clsx';
import Paper from '@material-ui/core/Paper';



  const useStyles = makeStyles(theme => ({
    root: {
      display: 'flex',
      backgroundColor: "#293659",
      marginleft:theme.spacing(5),
      color:"#FFFFFF",
      padding:theme.spacing(2)
    },
    paper:{padding:'20px',marginTop:'20px',backgroundColor: "#293659"},
    container: {
      marginTop: theme.spacing(8),
      marginBottom: theme.spacing(8),
      display: 'flex',
    },
    iconsWrapper: {
      height: 120,
    },
    icons: {
      display: 'flex',
    },
    icon: {
      width: 48,
      height: 48,
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
     backgroundColor: "#F8C815",
      marginRight: theme.spacing(1),
    },
    content:{
      marginLeft: theme.spacing(8),
    },
    list: {
      margin: 0,
      listStyle: 'none',
      paddingLeft: 0,
    },
    listItem: {
      paddingTop: theme.spacing(0.5),
      paddingBottom: theme.spacing(0.5),
    },
    language: {
      marginTop: theme.spacing(1),
      width: 150,
    },
  }));
 
  export default function AppFooter() {
    const classes = useStyles();
  
    return (
        <div className="row align-items-center">
      <Grid container spacing={3} className={classes.root}>
        <Grid item xs={5} className={classes.content}>
        <Typography variant="h5">Contents</Typography>
        <Typography><a href="#services">Services</a></Typography>
        <Typography><a href="#about">About Us</a></Typography>
        <Typography><a href="#team">Team members</a></Typography>
        <Typography><a href="#cycle">Process Cycle</a></Typography>
        <Typography><a href="#whyus">Why us?</a></Typography>
        </Grid>
        <Grid item xs={6}>
            <h3>CONTACT US</h3><br/>
            Feel free to contact us through any medium!<br/><br/>
            <LocationOnIcon/>Top Floor Reynold's Block, ITM GOI, Gwalior, M.P. 474001.
            <br/><br/>
            <PhoneIcon/> +91-8305990550<br/><br/>
            <MailIcon/>contact@fizrobotics.com<br/><br/>
            <MailIcon/> business@fizrobotics.com
        </Grid>
        
      </Grid>
      </div>
    );
    
  }