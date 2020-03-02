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
const[Message,setMessage]=React.useState('')
const[dop,setdop]=React.useState(new Date('2019-08-18T21:11:54'))
const[labourId,setlabourId]=React.useState('')
const[labourPassword,setlabourPassword]=React.useState('')
const[labourCpass,setlabourCpass]=React.useState('')

useEffect(()=>{
 

 },[]) 

const handleChange=(event)=>
{

setlabourCpass(event.target.value);
 console.log(labourCpass)
}

window.onload = runMatch()
function runMatch(){

 if(labourCpass!=labourPassword)
 {
   console.log("password not match")
 }
 else 
 {
   console.log("password match")
 }
}

const addNewRecord=async()=>{
  // use body for sending data to node
   
const body={

'labourId':labourId,
'labourPassword':labourPassword

}
const result=await postData('labour/editDatapswd',body) 
if(result)
{
setlabourId('')
setlabourPassword('')
setMessage('Record Submitted.....')
}
else{
setMessage('Not Submitted..........')
}

}


  function handleDateOfProductChange(date) {
    setdop(date);
  }

 

return(
  <ThemeProvider theme={theme}>
    
    <Container maxWidth='xs'>
<Paper className={classes.paper}>
<Typography> <center><h2>LABOUR PASSWORD</h2></center></Typography>
<Grid container spacing={3}>

<Grid xs={12}>
        <TextField
        id="outlined-dense"
        label="ID"
        className={clsx(classes.TextField,classes.dense)}
        margin="dense"
        name="labourId"
        value={labourId}
        variant="outlined"
        fullWidth
        onChange={(event)=>setlabourId(event.target.value)}
        />
    </Grid>

    <Grid xs={12}>
        <TextField
        id="outlined-dense"
        label="Password"
        className={clsx(classes.TextField,classes.dense)}
        margin="dense"
        name="labourPassword"
        value={labourPassword}
        variant="outlined"
        fullWidth
        onChange={(event)=>setlabourPassword(event.target.value)}
        />
    </Grid>

   
    
    <Grid xs={12}>
        <TextField
        id="outlined-dense"
        label="Conform Password"
        className={clsx(classes.TextField,classes.dense)}
        margin="dense"
        variant="outlined"
        fullWidth
        name="labourCpass"
        value={labourCpass}
        onChange={(event)=>setlabourCpass(event.target.value)}  
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