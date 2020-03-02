import React, { useEffect } from 'react'
import clsx from 'clsx'
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Paper from '@material-ui/core/Paper'
import Button from '@material-ui/core/Button'
import CloudUploadIcon from '@material-ui/icons/CloudUpload'
import {BaseUrl,getData} from '../FetchServices';
import { createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';
import Breadcrumbs from '@material-ui/core/Breadcrumbs';
import Link from '@material-ui/core/Link';
import HomeIcon from '@material-ui/icons/Home';
import WhatshotIcon from '@material-ui/icons/Whatshot';
import GrainIcon from '@material-ui/icons/Grain';
import {green,blue,orange} from '@material-ui/core/colors';
import { Card, CardContent, Grid, Typography, Avatar,Container, LinearProgress } from '@material-ui/core';
import InsertChartIcon from '@material-ui/icons/InsertChartOutlined';
import PeopleIcon from '@material-ui/icons/PeopleOutlined';
import AttachMoneyIcon from '@material-ui/icons/AttachMoney';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';

const theme = createMuiTheme({
  palette: {
    primary: {
      main:blue[500]
    },
    secondary: {
      main:orange[500]
    },
    type:"light"
  },
  status: {
    danger: 'orange',
  },

});

const useStyles=makeStyles(theme=>({
    root: {
        height: '100%'
      },
      content: {
        alignItems: 'center',
        display: 'flex'
      },
      title: {
        fontWeight: 700
      },
      avatar: {
        backgroundColor: theme.palette.success.main,
        height: 56,
        width: 56
      },
      icon: {
        height: 32,
        width: 32
      },
      difference: {
        marginTop: theme.spacing(2),
        display: 'flex',
        alignItems: 'center'
      },
      differenceIcon: {
         color: theme.palette.success.dark
      },
      differenceValue: {
        color: theme.palette.success.dark,
        marginRight: theme.spacing(1)
      }
    
}));


export default function ShowCount(props){
const classes=useStyles();
const [state, setState] = React.useState({data: []});

 
const readAllRecords=async()=>{
  var list=await getData('labour/countlabour') 
  setState({data:list})
  }

useEffect(()=>{
readAllRecords()

},[]) 

return(
<div className={classes.root}>
      <Grid container spacing={3}>
        <Grid
          item
          lg={4}
          sm={6}
          xl={4}
          xs={12}
        >
<Card className={clsx(classes.root)} >
      <CardContent>
        <Grid
          container
          justify="space-between"
        >
          <Grid item>
            <Typography
              className={classes.title}
              color="textSecondary"
              gutterBottom
              variant="body2"
            >
              TOTAL LABOUR
            </Typography>
            <Typography variant="h3">1,600</Typography>
          </Grid>
          <Grid item>
            <Avatar className={classes.avatar}>
              <PeopleIcon className={classes.icon} />
            </Avatar>
          </Grid>
        </Grid>
        <div className={classes.difference}>

         {/* static graph */}
        </div>
      </CardContent>
    </Card>
    </Grid>
    <Grid
          item
          lg={4}
          sm={6}
          xl={4}
          xs={12}
        >
 <Card
      className={clsx(classes.root)}
    >
      <CardContent>
        <Grid
          container
          justify="space-between"
        >
          <Grid item>
            <Typography
              className={classes.title}
              color="textSecondary"
              gutterBottom
              variant="body2"
            >
              TOTAL USERS
            </Typography>
            <Typography variant="h3">1562</Typography>
          </Grid>
          <Grid item>
            <Avatar className={classes.avatar}>
              <InsertChartIcon className={classes.icon} />
            </Avatar>
          </Grid>
        </Grid>
        <LinearProgress
          className={classes.progress}
          value={75.5}
          variant="determinate"
        />
      </CardContent>
    </Card>

          </Grid>
          <Grid
          item
          lg={4}
          sm={6}
          xl={4}
          xs={12}
        >
<Card className={clsx(classes.root)}
    >
      <CardContent>
        <Grid
          container
          justify="space-between"
        >
          <Grid item>
            <Typography
             className={classes.title}
             color="textSecondary"
             gutterBottom
             variant="body2"
            >
              TOTAL ORDERS
            </Typography>
            <Typography
              color="inherit"
              variant="h3"
            >
              23,200
            </Typography>
          </Grid>
          <Grid item>
            <Avatar className={classes.avatar}>
              <ShoppingCartIcon className={classes.icon} />
            </Avatar>
          </Grid>
        </Grid>
      </CardContent>
    </Card>

          </Grid>
         

    </Grid>
  </div>
);
}
