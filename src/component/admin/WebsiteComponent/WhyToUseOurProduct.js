import React from 'react';

import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import ButtonBase from '@material-ui/core/ButtonBase';




const useStyles = makeStyles(theme => ({
   root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
   paper2: {
    padding: theme.spacing(2),
    margin: 'auto',
    maxWidth: 500,
  },
   image: {
    width: 128,
    height: 128,
  },
  img: {
    margin: 'auto',
    display: 'block',
    maxWidth: '100%',
    maxHeight: '100%',
  },
}));

export default function Feedback() {
  const classes = useStyles();
 
  return ( 
<section className="page-section" id="whyus">
<div className="container">
  <div className="row">
    <div className="col-lg-12 text-center">
      <h2 className="section-heading text-uppercase">Why should you prefer us?</h2>
      <h3 className="section-subheading text-muted">We with us because</h3>
    </div>
  </div>
    
    <div className={classes.root}>
      <Grid container spacing={3}>
        
        <Grid item xs={12} sm={6}>
          <Paper className={classes.paper}>
		  
        <Grid container spacing={2}>
          <Grid item>
            <ButtonBase className={classes.image}>
              <img className={classes.img} alt="complex" src="http://localhost:3000/trust.png" />
            </ButtonBase>
          </Grid>
          <Grid item xs={12} sm container>
            <Grid item xs container direction="column" spacing={2}>
              <Grid item xs>
                <Typography gutterBottom variant="subtitle1" align="left">
                  Secure and Safer Services
                </Typography>
                <Typography variant="body2" gutterBottom align="left">
                  Verified labours, 24*7 help and support facility will be there,these are some of the features that we have in place to
				  ensure you a trustable labour and services.
                </Typography>
              </Grid>
            </Grid> 
          </Grid>
        </Grid>
     
		 
		  </Paper>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Paper className={classes.paper}>
		  
		   <Grid container spacing={2}>
          <Grid item>
            <ButtonBase className={classes.image}>
              <img className={classes.img} alt="complex" src="http://localhost:3000/pocketfriendly.png" />
            </ButtonBase>
          </Grid>
          <Grid item xs={12} sm container>
            <Grid item xs container direction="column" spacing={2}>
              <Grid item xs>
                <Typography gutterBottom variant="subtitle1" align="left">
                  Pocket Friendly
                </Typography>
                <Typography variant="body2" gutterBottom align="left">
                  From large scale or small scale work , our product let you this at according to your pocket.
                </Typography>
              </Grid>
            </Grid> 
          </Grid>
        </Grid>
		  
		  </Paper>
        </Grid>
       
      </Grid>
	  
	  
	  <Grid container spacing={3}>
        
        <Grid item xs={12} sm={6}>
          <Paper className={classes.paper}>
		  
        <Grid container spacing={2}>
          <Grid item>
            <ButtonBase className={classes.image}>
              <img className={classes.img} alt="complex" src="http://localhost:3000/ondemand.jpeg" />
            </ButtonBase>
          </Grid>
          <Grid item xs={12} sm container>
            <Grid item xs container direction="column" spacing={2}>
              <Grid item xs>
                <Typography gutterBottom variant="subtitle1" align="left">
                  On Demand Service
                </Typography>
                <Typography variant="body2" gutterBottom align="left">
                  Services were provided according to user's need either work is of single task or multiple task.
                </Typography>
              </Grid>
            </Grid> 
          </Grid>
        </Grid>
     
		 
		  </Paper>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Paper className={classes.paper}>
		  
		   <Grid container spacing={2}>
          <Grid item>
            <ButtonBase className={classes.image}>
              <img className={classes.img} alt="complex" src="http://localhost:3000/cashless1.jpeg" />
            </ButtonBase>
          </Grid>
          <Grid item xs={12} sm container>
            <Grid item xs container direction="column" spacing={2}>
              <Grid item xs>
                <Typography gutterBottom variant="subtitle1" align="left">
                  Cashless support
                </Typography>
                <Typography variant="body2" gutterBottom align="left">
                  Now be cashless and no worries for cash system. Simply pay by credit/debit card to enjoy hastle free payments.
                </Typography>
              </Grid>
            </Grid> 
          </Grid>
        </Grid>
		  
		  </Paper>
        </Grid>
       
      </Grid>
	  
	  
    </div>
    </div>
</section>
  );
}