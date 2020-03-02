import React,{useEffect} from 'react'
import { Container, Typography } from '@material-ui/core';
import Grid from '@material-ui/core/Grid'
import clsx from 'clsx'
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Paper from '@material-ui/core/Paper'
import Button from '@material-ui/core/Button'
import CloudUploadIcon from '@material-ui/icons/CloudUpload'
import Avatar from '@material-ui/core/Avatar'
import {BaseUrl,postData,postDataAndImage,getData} from '../FetchServices';
import { createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';
import {green,blue,orange} from '@material-ui/core/colors';
import MenuItem from '@material-ui/core/MenuItem';
import InputLabel from '@material-ui/core/InputLabel'; 
import OutlinedInput from '@material-ui/core/OutlinedInput';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

// for date pickers
import 'date-fns';
import DateFnsUtils from '@date-io/date-fns';
import {
  MuiPickersUtilsProvider,
  KeyboardTimePicker,
  KeyboardDatePicker,
} from '@material-ui/pickers';

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
        padding: theme.spacing(2),
      },
      dense: {
          marginTop: theme.spacing(2),
        },
        button: {
          marginLeft: theme.spacing(1),
        marginRight: theme.spacing(1),
        background : '#3f51b5',
        width:'300px'
        },
        button1: {
          marginLeft: theme.spacing(1),
        marginRight: theme.spacing(1),
        marginTop: theme.spacing(3),
        background : '#3f51b5',
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
        root: {
            flexGrow: 1,
            
          },
          child:{
              padding: 4,
          },
          formControl: {
            marginRight: theme.spacing(1),
          margin: theme.spacing(1),
          minWidth: 155,
          minHeight:20
        },
          
}));


function AddLabour(props){
const classes=useStyles();
const [labourName,setlabourName]=React.useState('')
const[labourdob,setlabourdob]=React.useState(new Date('2014-08-18T21:11:54'))
const[labourAge,setlabourAge]=React.useState('')
const[labourGender,setlabourGender]=React.useState('')
const[labourAnotherPhone,setlabourAnotherPhone]=React.useState('')
const[labourPhoneNo,setlabourPhoneNo]=React.useState('')
const[labourAdhar,setlabourAdhar]=React.useState('')
const[labourAddress,setlabourAddress]=React.useState('')
const[labourCity,setlabourCity]=React.useState('')
const[labourCountry,setlabourCountry]=React.useState('')
const[labourPincode,setlabourPincode]=React.useState('')
const[labourWorkExperience,setlabourWorkExperience]=React.useState('')
const [labourPhoto,setlabourPhoto]=React.useState({icon:'',file:''})
const[Message,setMessage]=React.useState('')
const[dop,setdop]=React.useState(new Date('2019-08-18T21:11:54'))


const addNewRecord=async()=>{
  let formData=new FormData()
  formData.append('labourName',labourName)
  formData.append('labourdob',labourdob)
  formData.append('labourAge',labourAge)
  formData.append('labourGender',labourGender)
  formData.append('labourPhoneNo',labourPhoneNo)
  formData.append('labourAnotherPhone',labourAnotherPhone)
  formData.append('labourAdhar',labourAdhar)
  formData.append('labourAddress',labourAddress)
  formData.append('labourCity',labourCity)
  formData.append('labourCountry',labourCountry)
  formData.append('labourPincode',labourPincode)
  formData.append('labourPhoto',labourPhoto.file)
  formData.append('labourWorkExperience',labourWorkExperience)
  const config={headers:{'content-type':'multipart/form-data'}}
  const result=await postDataAndImage('labour/addnewlabour',formData,config)
  if(result)
  {
   setMessage('Record Submitted...')
   setlabourName('')
   setlabourdob('')
   setlabourAge('')
   setlabourGender('')
   setlabourPhoneNo('')
   setlabourAnotherPhone('')
   setlabourAdhar('')
   setlabourAddress('')
   setlabourCity('')
   setlabourCountry('')
   setlabourPincode('')
   setlabourPhoto({icon:'',file:''})
   setlabourWorkExperience('')
  }
  else
  {setMessage("Fail to Submit Record..")}
  }
   window.onload = onLoadFunction()
   function onLoadFunction()
   {
     takePhoto()
   }
   function takePhoto()
   {
     if((labourPhoto.file.size)> 50*1024)
     {
       alert("file size exceeds 50kb");
       setlabourPhoto({icon:'',file:''})
       return false;    
      }
       else
       {
        addNewRecord();
        console.log("okk");
       }
   }
  function handleDateOfLabourChange(date) {
    setdop(date);
  }
  const clearMessage=async()=>{
    setMessage('')
}

return(
  <ThemeProvider theme={theme}>
    
    <Container maxWidth='xs'>
<Paper className={classes.paper}>
<Typography> <center><h2>PERSONAL DETAILS</h2></center></Typography>
<Grid container spacing={3}>

    <Grid xs={12}>
        <TextField
        id="outlined-dense"
        label="Labour Name"
        className={clsx(classes.TextField,classes.dense)}
        margin="dense"
        value={labourName}
        variant="outlined"
        fullWidth
        onClick={clearMessage}
        onChange={(event)=>setlabourName(event.target.value)}
        />
    </Grid>

    <Grid item sm={12} className={classes.child}>
    <MuiPickersUtilsProvider utils={DateFnsUtils}>
      <Grid container justify="space-around">
       
        <KeyboardDatePicker
          margin="normal"
          id="date-picker-dialog"
          label='Dob'
          format="MM/dd/yyyy"
          value={labourdob}
          onChange={handleDateOfLabourChange}
          fullWidth
          onClick={clearMessage}
          KeyboardButtonProps={{
            'aria-label': 'change date',
          }}
        />
        
      </Grid>
    </MuiPickersUtilsProvider>
    </Grid>


    <Grid container  xs={12}>
    <Grid item sm={6} className={classes.child}>
        <TextField
        id="outlined-dense"
        label="Age"
        className={clsx(classes.TextField,classes.dense)}
        value={labourAge}
        margin="dense"
        variant="outlined"
        fullWidth
        onClick={clearMessage}
        onChange={(event)=>setlabourAge(event.target.value)}
        />
    </Grid>


    <Grid item sm={6} className={classes.child}>
        <TextField
        id="outlined-dense"
        label="Gender"
        className={clsx(classes.TextField,classes.dense)}
        value={labourGender}
        margin="dense"
        variant="outlined"
        fullWidth
        onClick={clearMessage}
        onChange={(event)=>setlabourGender(event.target.value)}
        />
    </Grid>
    </Grid>


  


    <Grid container  xs={12}>
    <Grid item sm={6} className={classes.child}>
        <TextField
        id="outlined-dense"
        label="Mobile Number"
        className={clsx(classes.TextField,classes.dense)}
        value={labourPhoneNo}
        margin="dense"
        variant="outlined"
        fullWidth
        onClick={clearMessage}
        onChange={(event)=>setlabourPhoneNo(event.target.value)}
        />
    </Grid>


    <Grid item sm={6} className={classes.child}>
        <TextField
        id="outlined-dense"
        label="Another Number"
        className={clsx(classes.TextField,classes.dense)}
        value={labourAnotherPhone}
        margin="dense"
        variant="outlined"
        fullWidth
        onClick={clearMessage}
        onChange={(event)=>setlabourAnotherPhone(event.target.value)}
        />
    </Grid>
    </Grid>


    <Grid xs={12}>
        <TextField
        id="outlined-dense"
        label="Adhar Card Number"
        className={clsx(classes.TextField,classes.dense)}
        margin="dense"
        value={labourAdhar}
        variant="outlined"
        fullWidth
        onClick={clearMessage}
        onChange={(event)=>setlabourAdhar(event.target.value)}
        />
    </Grid>


    <Grid xs={12}>
        <TextField
        id="outlined-dense"
        label="Permanent Address"
        className={clsx(classes.TextField,classes.dense)}
        margin="dense"
        value={labourAddress}
        variant="outlined"
        fullWidth
        onClick={clearMessage}
        onChange={(event)=>setlabourAddress(event.target.value)}
        />
    </Grid>

   


    <Grid container  xs={12}>
    <Grid item sm={4} className={classes.child}>
        <TextField
        id="outlined-dense"
        label="City"
        className={clsx(classes.TextField,classes.dense)}
        value={labourCity}
        margin="dense"
        variant="outlined"
        fullWidth
        onClick={clearMessage}
        onChange={(event)=>setlabourCity(event.target.value)}
        />
    </Grid>


    <Grid item sm={4} className={classes.child}>
        <TextField
        id="outlined-dense"
        label="Country"
        className={clsx(classes.TextField,classes.dense)}
        value={labourCountry}
        margin="dense"
        variant="outlined"
        fullWidth
        onClick={clearMessage}
        onChange={(event)=>setlabourCountry(event.target.value)}
        />
    </Grid>


    <Grid item sm={4} className={classes.child}>
        <TextField
        id="outlined-dense"
        label="Pincode"
        className={clsx(classes.TextField,classes.dense)}
        value={labourPincode}
        margin="dense"
        variant="outlined"
        fullWidth
        onClick={clearMessage}
        onChange={(event)=>setlabourPincode(event.target.value)}
        />
    </Grid>
    </Grid>



    <Grid container  xs={12}>
    <Grid item xs={8}>
    <input
    accept='images/*'
    className={classes.input}
    id="contained-button-file"
    multiple
    type='file'
    onClick={clearMessage}
    onChange={(event)=>setlabourPhoto({icon:URL.createObjectURL(event.target.files[0]),file:event.target.files[0]})}
    />
    <label htmlFor="contained-button-file">
        <Button variant="contained" component="span" className={classes.button1}>
          Labour Image
          <CloudUploadIcon className={classes.rightIcon} />
        </Button>
    </label>
    </Grid> 


    <Grid item xs={4}>
       <Avatar alt="Image" src={labourPhoto.icon} className={classes.bigAvatar} />
    </Grid>  
    </Grid>

    
    <Grid xs={12}>
        <TextField
        id="outlined-dense"
        label="Working Experience"
        className={clsx(classes.TextField,classes.dense)}
        margin="dense"
        value={labourWorkExperience}
        variant="outlined"
        fullWidth
        onClick={clearMessage}
        onChange={(event)=>setlabourWorkExperience(event.target.value)}
        />
    </Grid>
   

    <Grid item xs={12}>
      <Button variant="contained" color="primary" onClick={addNewRecord} className={classes.button} fullWidth>
                      Submit
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
export default AddLabour;