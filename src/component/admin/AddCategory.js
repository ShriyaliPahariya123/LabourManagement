import React from 'react'
import { Container, Typography } from '@material-ui/core';
import Grid from '@material-ui/core/Grid'
import clsx from 'clsx'
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Paper from '@material-ui/core/Paper'
import Button from '@material-ui/core/Button'
import CloudUploadIcon from '@material-ui/icons/CloudUpload'
import Avatar from '@material-ui/core/Avatar'
import {BaseUrl,postData,postDataAndImage} from '../FetchServices';
import { createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';
import Breadcrumbs from '@material-ui/core/Breadcrumbs';
import Link from '@material-ui/core/Link';
import HomeIcon from '@material-ui/icons/Home';
import WhatshotIcon from '@material-ui/icons/Whatshot';
import GrainIcon from '@material-ui/icons/Grain';
import {green,blue,orange} from '@material-ui/core/colors';

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
    paper:{padding:'30px',marginTop:'10px'},
    textField: {
        marginLeft: theme.spacing(1),
        marginRight: theme.spacing(1),
      },
      dense: {
          marginTop: theme.spacing(2),
        },
        button: {
          margin: theme.spacing(1),
          background : '#3f51b5',
          width:'300px'
        },
        input:{
          display:'none',
          marginTop:theme.spacing(1)
        },
        rightIcon: {
          marginLeft: theme.spacing(1),
        },
        bigAvatar: {
          margin: 10,
          width: 60,
          height: 60,
        },
        link: {
          display: 'flex',
        },
        icon: {
          marginRight: theme.spacing(0.5),
          width: 20,
          height: 20,
        },
}));


function AddCategory(props){
const classes=useStyles();
const [categoryName,setcategoryName]=React.useState('')
const[Message,setMessage]=React.useState('')

const addNewRecord=async()=>{
  let formData=new FormData()
  formData.append('categoryName',categoryName)
  const config={headers:{'content-type':'multipart/form-data'}}
  const result=await postDataAndImage('category/addnewrecord',formData,config)
  if(result)
  {
   setMessage('Record Submitted...')
   setcategoryName('')
  }
  else
  {setMessage("Fail to Submit Record..")}
  }
const clearMessage=async()=>{
    setMessage('')
}



return(
  <ThemeProvider theme={theme}>

<Breadcrumbs aria-label="breadcrumb">
      <Link color="inherit" href="/Dashboard"  className={classes.link}>
        <HomeIcon className={classes.icon} />
        Dashboard
      </Link>
      <Typography color="textPrimary" className={classes.link}>
        <GrainIcon className={classes.icon} />
        Add Category
      </Typography>
    </Breadcrumbs>
    <Container maxWidth='xs'>
<Paper className={classes.paper}>
<Typography> <center><h2>ADD CATEGORY</h2></center></Typography>
<Grid Container>

    <Grid xs={12}>
        <TextField
        id="outlined-dense"
        label="Category Name"
        className={clsx(classes.TextField,classes.dense)}
        margin="dense"
        value={categoryName}
        variant="outlined"
        fullWidth
        onChange={(event)=>setcategoryName(event.target.value)}
        onClick={clearMessage}
        />
    </Grid>
    <Grid item xs={12}>
    <Button variant="contained" onClick={addNewRecord}  color="primary" className={classes.button} fullWidth>
        SUBMIT RECORD
    </Button>
    </Grid>
</Grid>
</Paper>
<Typography>
      {Message}
    </Typography>
</Container>
</ThemeProvider>
)
}
export default AddCategory;