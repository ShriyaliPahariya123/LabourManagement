import React,{useEffect} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import ReplayIcon from '@material-ui/icons/Replay';
import { Container } from '@material-ui/core';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import OTP from 'otp-client'
import Canvas2Image from 'canvas2image'

const useStyles = makeStyles(theme => ({
    root: {
      height: '100vh',
    },
 
    form: {
      width: '100%', // Fix IE 11 issue.
      marginTop: theme.spacing(1),
    },
    submit: {
      margin: theme.spacing(3, 0, 2),
    },
    captchaTable:{
       border: '1px',
       borderWidth:'solid',
       padding: '18px',
       backgroundColor: 'silver'
  
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
  
// starting 


 export default function Captcha(){
  
  const classes = useStyles();
//   const[myCodeCaptcha,setMyCodeCaptcha]=React.useState("")
   const[capid,setCapid]=React.useState('')
   const[randomVal,setRandomVal]=React.useState('')
   const[canvasVal,setCanvasVal]=React.useState('')
 

    
const secret = "TPQDAHVBZ5NBO5LFEQKC7V7UPATSSMFY"
const options = {
  algorithm: "sha512",
  digits: 6,
 period: 20,

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


function captchaMatch(){
    if(capid!=token)
    {
        alert("wrong captcha..or Time exceed..please reload page and fill captcha within 20 seconds..")
        window.location.reload(true);
        setCapid('')
        
    }
    else{
        alert("succesfull..")
        window.location.reload(true);
        setCapid('')
    }
}

// window.onload = strict();


// function strict(){
//   document.addEventListener("contextmenu", function(e){
//     e.preventDefault();
//   }, false);
//   document.addEventListener("keydown", function(e) {
//   //document.onkeydown = function(e) {
//     // "I" key
//     if (e.ctrlKey && e.shiftKey && e.keyCode == 73) {
//       disabledEvent(e);
//     }
//     // "J" key
//     if (e.ctrlKey && e.shiftKey && e.keyCode == 74) {
//       disabledEvent(e);
//     }
//     // "S" key + macOS
//     if (e.keyCode == 83 && (navigator.platform.match("Mac") ? e.metaKey : e.ctrlKey)) {
//       disabledEvent(e);
//     }
//     // "U" key
//     if (e.ctrlKey && e.keyCode == 85) {
//       disabledEvent(e);
//     }
//     // "F12" key
//     if (e.keyCode == 123) {
//       disabledEvent(e);
//     }
//   }, false);
//    function disabledEvent(e){
//     if (e.stopPropagation){
//       e.stopPropagation();
//     } else if (window.event){
//       window.event.cancelBubble = true;
//     }
//     e.preventDefault();
//     return false;
//   }


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
    return(
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
<tr>
<td>
<button id="validate" onClick={captchaMatch}>Validate</button></td>
</tr>
</table>

</Grid>
        </div>
    )

    }