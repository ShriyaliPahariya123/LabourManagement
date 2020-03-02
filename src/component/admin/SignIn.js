import React,{useEffect} from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import {BaseUrl,postData} from '../FetchServices'
import OTP from 'otp-client'
import Canvas2Image from 'canvas2image'
import ReplayIcon from '@material-ui/icons/Replay'

const useStyles = makeStyles(theme => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
  root: {
    height: '100vh',
  },
  captchaTable:{
     border: '1px',
     borderWidth:'solid',
     padding: '18px',
     backgroundColor: 'silver',
    marginLeft:theme.spacing(7)
  },
  captchaCanvasBox:{
    border: '1px',
    borderWidth:'solid',
    borderColor: '#d3d3d3',
    padding:'2px',
    paddingTop:'5px',
     backgroundImage:'url(http://localhost:3000/whiteBack.png)',
     pointerEvents: "none",
     userSelect: "none",
     textAlign:"center",
     
  },
}));

export default function SignIn(props) {
  const classes = useStyles();
  const[adminId,setadminId]=React.useState('')
  const[adminPassword,setadminPassword]=React.useState('')
  const[capid,setCapid]=React.useState('')
  const[randomVal,setRandomVal]=React.useState('')
  const[canvasVal,setCanvasVal]=React.useState('')

const secret = "TPQDAHVBZ5NBO5LFEQKC7V7UPATSSMFY"
const options = {
  algorithm: "sha512",
  digits: 6,
 period: 120,

}
 
const otp = new OTP(secret, options)
function getRandom(){
const token = otp.getToken()

return(token)
}

const token = getRandom();
        useEffect(()=>{
      //  getRandom();
      setRandomVal(getRandom());
     
      },[])


      const captchaReload=()=>{
       
      window.location.reload(true);
      
        }

        
// function captchaMatch(){
//   if(capid!=token)
//   {
//       alert("wrong captcha..or Time exceed..please reload page and fill captcha within 20 seconds..")
//       window.location.reload(true);
//       setCapid('')
    
      
//   }
//   else{
//       alert("succesfull..")
//       window.location.reload(true);
//       setCapid('')
//       checkLogin();
//   }
//   return
// }

window.onload = function ImageForm(){
  var randomVal=getRandom();
  var c=document.getElementById("canvas2");
  var ctx=c.getContext("2d");
  ctx.font="30px Arial";
  ctx.clearRect(0,0,c.width,c.height);
    ctx.fillText(randomVal,1,30);
  
//Drawing two lines

ctx.moveTo(10,-15);
ctx.lineTo(90,-10);
ctx.moveTo(20,-5);
ctx.lineTo(90,20);
ctx.stroke();
  // Canvas2Image.convertToPNG(c, 10, 50);
  
}

  const checkLogin=async()=>{
   
    if(capid!=token)
  {
      alert("wrong captcha..or Time exceed..please reload page and fill captcha within 20 seconds..")
      window.location.reload(true);
      setCapid('')
    
      
  }
   else
   {
    let body={'adminId':adminId,'adminPassword':adminPassword}
    let result=await postData('admin/checkadminlogin',body)  
if(result.RESULT)
{ 
  localStorage.setItem('ADMIN',JSON.stringify(result.RESULT))
     props.history.replace({pathname:'/Dashboard'})
  
}
else{
 
alert('Invalid UID/Password')

}
}}
  

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign in
        </Typography>
        <form className={classes.form} noValidate>
        <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="adminId"
            label="Enter the ID"
            name="adminId"
            autoComplete="#"
            value={adminId}
            autoFocus
            onChange={(event)=>setadminId(event.target.value)}
          />
       <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="adminPassword"
            label="Password"
            type="password"
            value={adminPassword}
            id="adminPassword"
            autoComplete="current-password"
            onChange={(event)=>setadminPassword(event.target.value)}
          />


<div>
<Grid>

<table className={classes.captchaTable}>
<tr>
<td colspan="2">

<canvas id="canvas2" className={classes.captchaCanvasBox}
 width="100" height="35">{canvasVal}</canvas>
</td>
<td>
<button id="ref" onClick={captchaReload}><ReplayIcon /></button></td>
</tr>
<tr>
<td colspan="3">
<TextField type="text" name="capid" id="capid" value={capid} placeholder="Enter catcha" autofocus  onChange={(event)=>setCapid(event.target.value)}/></td>
</tr>
</table>

</Grid>
        </div>


          <Button
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
            onClick={checkLogin}
          >
            Sign In
          </Button>
        </form>
      </div>
    </Container>
  );
}